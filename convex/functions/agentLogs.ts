import { v } from "convex/values";
import { internalMutation, query } from "../_generated/server";

export const writeAgentLog = internalMutation({
  args: {
    agentName: v.string(),
    action: v.string(),
    inputSummary: v.string(),
    outputSummary: v.string(),
    tokenCount: v.optional(v.number()),
    latencyMs: v.number(),
    timestamp: v.number(),
    threadId: v.optional(v.string()),
    candidateId: v.optional(v.id("candidates")),
    jobId: v.optional(v.id("jobs")),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("agentLogs", args);
  },
});

export const getAgentLogsForJob = query({
  args: { jobId: v.id("jobs"), limit: v.optional(v.number()) },
  handler: async (ctx, { jobId, limit = 20 }) => {
    const logs = await ctx.db
      .query("agentLogs")
      .withIndex("by_jobId", (q) => q.eq("jobId", jobId))
      .order("desc")
      .take(limit);
    return logs;
  },
});

export const getAgentLogsForCandidate = query({
  args: { candidateId: v.id("candidates") },
  handler: async (ctx, { candidateId }) => {
    return await ctx.db
      .query("agentLogs")
      .withIndex("by_candidateId", (q) => q.eq("candidateId", candidateId))
      .order("asc")
      .collect();
  },
});
