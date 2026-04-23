import { v } from "convex/values";
import { internalQuery, mutation, query } from "../_generated/server";

export const listJobsInternal = internalQuery({
  args: { status: v.optional(v.union(v.literal("open"), v.literal("closed"), v.literal("paused"))) },
  handler: async (ctx, { status }) => {
    if (status) {
      return await ctx.db.query("jobs").withIndex("by_status", (q) => q.eq("status", status)).collect();
    }
    return await ctx.db.query("jobs").collect();
  },
});

export const getJob = internalQuery({
  args: { jobId: v.id("jobs") },
  handler: async (ctx, { jobId }) => {
    return await ctx.db.get(jobId);
  },
});

export const listJobs = query({
  args: {
    status: v.optional(v.union(v.literal("open"), v.literal("closed"), v.literal("paused"))),
  },
  handler: async (ctx, { status }) => {
    let q = ctx.db.query("jobs");
    if (status) {
      return await q.withIndex("by_status", (idx) => idx.eq("status", status)).collect();
    }
    return await q.collect();
  },
});

export const getJobPublic = query({
  args: { jobId: v.id("jobs") },
  handler: async (ctx, { jobId }) => {
    return await ctx.db.get(jobId);
  },
});

export const createJob = mutation({
  args: {
    title: v.string(),
    department: v.string(),
    description: v.string(),
    requiredSkills: v.array(v.string()),
    status: v.union(v.literal("open"), v.literal("closed"), v.literal("paused")),
  },
  handler: async (ctx, args) => {
    const jobId = await ctx.db.insert("jobs", {
      ...args,
      createdAt: Date.now(),
    });
    return jobId;
  },
});

export const updateJob = mutation({
  args: {
    jobId: v.id("jobs"),
    title: v.optional(v.string()),
    status: v.optional(v.union(v.literal("open"), v.literal("closed"), v.literal("paused"))),
    rankingConfig: v.optional(
      v.object({
        shortlistThreshold: v.number(),
        rejectionThreshold: v.number(),
        skillWeights: v.optional(v.any()),
        adverseImpactThreshold: v.optional(v.number()),
      })
    ),
  },
  handler: async (ctx, { jobId, ...updates }) => {
    await ctx.db.patch(jobId, updates);
  },
});
