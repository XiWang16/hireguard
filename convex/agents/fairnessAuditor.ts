import { v } from "convex/values";
import { internalAction } from "../_generated/server";
import { internal } from "../_generated/api";
import { Agent, createTool } from "@convex-dev/agent";
import { getLanguageModel } from "../lib/modelConfig";
import { components } from "../_generated/api";
import { z } from "zod/v4";
import { requireEnv } from "../lib/env";

const getCandidatesWithDemographicsTool = createTool({
  description:
    "Fetch all candidates for a job including their demographic data and evaluation outcomes",
  inputSchema: z.object({ jobId: z.string() }),
  execute: async (ctx, { jobId }): Promise<unknown[]> => {
    const result = await ctx.runQuery(
      internal.functions.candidates.getCandidatesWithDemographics,
      { jobId: jobId as never }
    );
    return result as unknown[];
  },
});

const getEvaluationsForJobTool = createTool({
  description: "Fetch all evaluations for a job",
  inputSchema: z.object({ jobId: z.string() }),
  execute: async (ctx, { jobId }): Promise<unknown[]> => {
    const result = await ctx.runQuery(internal.functions.evaluations.getEvaluationsForJob, {
      jobId: jobId as never,
    });
    return result as unknown[];
  },
});

const computeStatsTool = createTool({
  description: "Compute chi-square tests and adverse impact ratios for demographic groups",
  inputSchema: z.object({
    groups: z.array(
      z.object({ name: z.string(), passed: z.number(), total: z.number() })
    ),
  }),
  execute: async (_ctx, { groups }): Promise<unknown> => {
    const statsUrl = requireEnv("STATS_COMPUTE_URL");
    const response = await fetch(statsUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ groups }),
    });
    return response.json();
  },
});

const writeAuditReportTool = createTool({
  description: "Write the audit report to the database",
  inputSchema: z.object({
    jobId: z.string(),
    totalCandidates: z.number(),
    passRateByGroup: z.record(z.string(), z.unknown()),
    adverseImpactRatios: z.record(z.string(), z.unknown()),
    flagged: z.boolean(),
    statisticalTests: z.record(z.string(), z.unknown()),
    recommendations: z.array(z.string()),
  }),
  execute: async (ctx, args): Promise<{ reportId: string }> => {
    const reportId = (await ctx.runMutation(internal.functions.auditReports.writeAuditReport, {
      jobId: args.jobId as never,
      totalCandidates: args.totalCandidates,
      passRateByGroup: args.passRateByGroup,
      adverseImpactRatios: args.adverseImpactRatios,
      flagged: args.flagged,
      statisticalTests: args.statisticalTests,
      recommendations: args.recommendations,
      timestamp: Date.now(),
    })) as string;
    return { reportId };
  },
});

const sendAlertTool = createTool({
  description: "Send an alert email when adverse impact is detected",
  inputSchema: z.object({
    jobId: z.string(),
    summary: z.string(),
    flaggedGroups: z.array(z.string()),
  }),
  execute: async (ctx, { jobId, summary, flaggedGroups }): Promise<{ sent: boolean }> => {
    await ctx.runAction(internal.functions.alerts.sendAdverseImpactAlert, {
      jobId: jobId as never,
      summary,
      flaggedGroups,
    });
    return { sent: true };
  },
});

export const fairnessAuditorAgent = new Agent(components.agent, {
  name: "FairnessAuditor",
  languageModel: getLanguageModel("fairnessAuditor"),
  instructions:
    "You are a fairness auditing specialist. You analyze hiring outcomes for adverse impact against protected characteristics. Apply the EEOC four-fifths rule: if any group's pass rate is less than 80% of the highest group's pass rate, flag adverse impact. Run chi-square independence tests for statistical significance. When flagging issues, provide specific, actionable recommendations — not vague warnings. Reference the specific demographic groups and metrics involved.",
  tools: {
    getCandidatesWithDemographics: getCandidatesWithDemographicsTool,
    getEvaluationsForJob: getEvaluationsForJobTool,
    computeStats: computeStatsTool,
    writeAuditReport: writeAuditReportTool,
    sendAlert: sendAlertTool,
  },
});

export const runFairnessAuditor = internalAction({
  args: { jobId: v.id("jobs") },
  handler: async (ctx, { jobId }) => {
    const { thread } = await fairnessAuditorAgent.createThread(ctx, {});
    const result = await fairnessAuditorAgent.generateText(
      ctx,
      { threadId: thread.threadId },
      {
        prompt: `Run a fairness audit for job ${jobId}.
1. Use getCandidatesWithDemographics to get all candidates with their demographic data and outcomes.
2. Use getEvaluationsForJob to get evaluation scores.
3. For each demographic dimension (gender, ethnicity, ageBand, disabilityStatus), compute pass-through rates.
4. Use computeStats to run chi-square tests and get adverse impact ratios.
5. Apply the four-fifths rule: flag if any group's ratio < 0.8.
6. Generate specific, actionable recommendations.
7. Use writeAuditReport to save the full report.
8. If adverse impact is detected (flagged=true), use sendAlert to notify HR.`,
      }
    );

    await ctx.runMutation(internal.functions.agentLogs.writeAgentLog, {
      agentName: "FairnessAuditor",
      action: "audit_complete",
      inputSummary: `jobId=${jobId}`,
      outputSummary: result.text.substring(0, 200),
      latencyMs: 0,
      timestamp: Date.now(),
      jobId,
    });

    return result.text;
  },
});
