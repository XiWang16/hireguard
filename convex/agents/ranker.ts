import { v } from "convex/values";
import { internalAction } from "../_generated/server";
import { internal } from "../_generated/api";
import { Agent, createTool } from "@convex-dev/agent";
import { getLanguageModel } from "../lib/modelConfig";
import { components } from "../_generated/api";
import { z } from "zod/v4";

const getEvaluationsForJobTool = createTool({
  description: "Fetch all evaluations for a job, ordered by overall score",
  inputSchema: z.object({ jobId: z.string() }),
  execute: async (ctx, { jobId }): Promise<unknown[]> => {
    const result = await ctx.runQuery(internal.functions.evaluations.getEvaluationsForJob, {
      jobId: jobId as never,
    });
    return result as unknown[];
  },
});

const getRankingConfigTool = createTool({
  description: "Fetch the ranking configuration thresholds for a job",
  inputSchema: z.object({ jobId: z.string() }),
  execute: async (
    ctx,
    { jobId }
  ): Promise<{ shortlistThreshold: number; rejectionThreshold: number }> => {
    const job = (await ctx.runQuery(internal.functions.jobs.getJob, {
      jobId: jobId as never,
    })) as { rankingConfig?: { shortlistThreshold?: number; rejectionThreshold?: number } } | null;
    return {
      shortlistThreshold: job?.rankingConfig?.shortlistThreshold ?? 75,
      rejectionThreshold: job?.rankingConfig?.rejectionThreshold ?? 40,
    };
  },
});

const updateCandidateStatusBatchTool = createTool({
  description: "Batch update candidate statuses after ranking",
  inputSchema: z.object({
    updates: z.array(
      z.object({
        candidateId: z.string(),
        status: z.enum(["shortlisted", "rejected", "evaluated"]),
      })
    ),
  }),
  execute: async (ctx, { updates }): Promise<{ updated: number }> => {
    const start = Date.now();
    for (const { candidateId, status } of updates) {
      await ctx.runMutation(internal.functions.candidates.updateCandidateStatus, {
        candidateId: candidateId as never,
        status,
      });
    }
    const latencyMs = Date.now() - start;
    await ctx.runMutation(internal.functions.agentLogs.writeAgentLog, {
      agentName: "Ranker",
      action: "batch_status_update",
      inputSummary: `${updates.length} candidates updated`,
      outputSummary: `shortlisted=${updates.filter((u) => u.status === "shortlisted").length}, rejected=${updates.filter((u) => u.status === "rejected").length}`,
      latencyMs,
      timestamp: Date.now(),
    });
    return { updated: updates.length };
  },
});

export const rankerAgent = new Agent(components.agent, {
  name: "Ranker",
  languageModel: getLanguageModel("ranker"),
  instructions:
    "You are a candidate ranking specialist. Given evaluation scores for all candidates for a job, rank them and apply threshold-based decisions. Candidates above the shortlist threshold are shortlisted; below the rejection threshold are rejected; others remain in evaluated status. Provide a clear ranking rationale.",
  tools: {
    getEvaluationsForJob: getEvaluationsForJobTool,
    getRankingConfig: getRankingConfigTool,
    updateCandidateStatusBatch: updateCandidateStatusBatchTool,
  },
});

export const runRanker = internalAction({
  args: { jobId: v.id("jobs") },
  handler: async (ctx, { jobId }) => {
    const { thread } = await rankerAgent.createThread(ctx, {});
    const result = await rankerAgent.generateText(
      ctx,
      { threadId: thread.threadId },
      {
        prompt: `Rank all candidates for job ${jobId}.
1. Use getEvaluationsForJob to fetch all evaluations.
2. Use getRankingConfig to get the shortlist/rejection thresholds.
3. Sort candidates by overall score.
4. Apply thresholds: above shortlistThreshold → shortlisted, below rejectionThreshold → rejected, others → evaluated.
5. Use updateCandidateStatusBatch to apply all status changes at once.
6. Provide a summary of the ranking decisions and rationale.`,
      }
    );

    await ctx.runMutation(internal.functions.agentLogs.writeAgentLog, {
      agentName: "Ranker",
      action: "ranking_complete",
      inputSummary: `jobId=${jobId}`,
      outputSummary: result.text.substring(0, 200),
      latencyMs: 0,
      timestamp: Date.now(),
      jobId,
    });

    return result.text;
  },
});
