import { v } from "convex/values";
import { internalAction } from "../_generated/server";
import { internal } from "../_generated/api";
import { Agent, createTool } from "@convex-dev/agent";
import { anthropic } from "@ai-sdk/anthropic";
import { components } from "../_generated/api";
import { z } from "zod/v4";

// Tool strips demographic fields — critical fairness constraint
const getCandidateProfileTool = createTool({
  description:
    "Fetch a candidate's profile for evaluation. Demographic fields are excluded to prevent bias.",
  inputSchema: z.object({ candidateId: z.string() }),
  execute: async (ctx, { candidateId }): Promise<Record<string, unknown>> => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const candidate = (await ctx.runQuery(internal.functions.candidates.getCandidate, {
      candidateId: candidateId as never,
    })) as Record<string, unknown> | null;
    if (!candidate) throw new Error(`Candidate ${candidateId} not found`);
    // Explicitly strip demographic data before passing to LLM
    const { demographics: _demographics, ...safeCandidate } = candidate;
    return safeCandidate;
  },
});

const getJobRequirementsTool = createTool({
  description: "Fetch the job posting and its requirements",
  inputSchema: z.object({ jobId: z.string() }),
  execute: async (ctx, { jobId }): Promise<Record<string, unknown>> => {
    const job = (await ctx.runQuery(internal.functions.jobs.getJob, {
      jobId: jobId as never,
    })) as Record<string, unknown> | null;
    if (!job) throw new Error(`Job ${jobId} not found`);
    return job;
  },
});

const writeEvaluationTool = createTool({
  description: "Write evaluation scores and reasoning for a candidate",
  inputSchema: z.object({
    candidateId: z.string(),
    jobId: z.string(),
    skillMatchScore: z.number(),
    experienceScore: z.number(),
    overallScore: z.number(),
    reasoning: z.string(),
  }),
  execute: async (ctx, args): Promise<{ success: true }> => {
    const start = Date.now();
    await ctx.runMutation(internal.functions.evaluations.writeEvaluation, {
      candidateId: args.candidateId as never,
      jobId: args.jobId as never,
      skillMatchScore: args.skillMatchScore,
      experienceScore: args.experienceScore,
      overallScore: args.overallScore,
      reasoning: args.reasoning,
      evaluatedBy: "SkillMatcher",
      evaluatedAt: Date.now(),
    });
    await ctx.runMutation(internal.functions.candidates.updateCandidateStatus, {
      candidateId: args.candidateId as never,
      status: "evaluated",
    });
    const latencyMs = Date.now() - start;
    await ctx.runMutation(internal.functions.agentLogs.writeAgentLog, {
      agentName: "SkillMatcher",
      action: "write_evaluation",
      inputSummary: `candidateId=${args.candidateId}, jobId=${args.jobId}`,
      outputSummary: `overall=${args.overallScore}, skill=${args.skillMatchScore}, exp=${args.experienceScore}`,
      latencyMs,
      timestamp: Date.now(),
      candidateId: args.candidateId as never,
      jobId: args.jobId as never,
    });
    return { success: true };
  },
});

export const skillMatcherAgent = new Agent(components.agent, {
  name: "SkillMatcher",
  languageModel: anthropic("claude-sonnet-4-5"),
  instructions:
    "You are a skill matching specialist for candidate evaluation. You score candidates objectively based on their skills, experience, and education against job requirements. Each score must be 0-100. Provide detailed reasoning that HR reviewers can understand and audit. NEVER consider demographic information — evaluate only professional qualifications.",
  tools: {
    getCandidateProfile: getCandidateProfileTool,
    getJobRequirements: getJobRequirementsTool,
    writeEvaluation: writeEvaluationTool,
  },
});

export const runSkillMatcher = internalAction({
  args: { candidateId: v.id("candidates"), jobId: v.id("jobs") },
  handler: async (ctx, { candidateId, jobId }) => {
    const { thread } = await skillMatcherAgent.createThread(ctx, {});
    const result = await skillMatcherAgent.generateText(
      ctx,
      { threadId: thread.threadId },
      {
        prompt: `Evaluate candidate ${candidateId} for job ${jobId}.
1. Use getCandidateProfile to fetch candidate data (demographics are excluded).
2. Use getJobRequirements to fetch job requirements.
3. Score the candidate on: skill match (0-100), experience (0-100), overall (0-100).
4. Write a clear reasoning explaining your scores.
5. Use writeEvaluation to save the scores and reasoning.`,
      }
    );
    return result.text;
  },
});
