import { v } from "convex/values";
import { internalMutation, mutation, query } from "../_generated/server";

export const writeAuditReport = internalMutation({
  args: {
    jobId: v.id("jobs"),
    timestamp: v.number(),
    totalCandidates: v.number(),
    passRateByGroup: v.any(),
    adverseImpactRatios: v.any(),
    flagged: v.boolean(),
    statisticalTests: v.any(),
    recommendations: v.array(v.string()),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("auditReports", {
      ...args,
      acknowledgedRecommendations: [],
    });
  },
});

export const getLatestAuditReport = query({
  args: { jobId: v.id("jobs") },
  handler: async (ctx, { jobId }) => {
    return await ctx.db
      .query("auditReports")
      .withIndex("by_jobId_and_timestamp", (q) => q.eq("jobId", jobId))
      .order("desc")
      .first();
  },
});

export const getAuditHistory = query({
  args: { jobId: v.id("jobs") },
  handler: async (ctx, { jobId }) => {
    return await ctx.db
      .query("auditReports")
      .withIndex("by_jobId_and_timestamp", (q) => q.eq("jobId", jobId))
      .order("desc")
      .collect();
  },
});

export const getAuditReport = query({
  args: { reportId: v.id("auditReports") },
  handler: async (ctx, { reportId }) => {
    return await ctx.db.get(reportId);
  },
});

export const acknowledgeRecommendation = mutation({
  args: { reportId: v.id("auditReports"), index: v.number() },
  handler: async (ctx, { reportId, index }) => {
    const report = await ctx.db.get(reportId);
    if (!report) throw new Error("Report not found");
    const acknowledged = report.acknowledgedRecommendations ?? [];
    if (!acknowledged.includes(index)) {
      await ctx.db.patch(reportId, {
        acknowledgedRecommendations: [...acknowledged, index],
      });
    }
  },
});

export const getAllAuditReports = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("auditReports").order("desc").collect();
  },
});
