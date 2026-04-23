import { v } from "convex/values";
import { mutation, query } from "../_generated/server";

export const listForCandidate = query({
  args: { candidateId: v.id("candidates") },
  handler: async (ctx, { candidateId }) => {
    return await ctx.db
      .query("backgroundChecks")
      .withIndex("by_candidateId", (q) => q.eq("candidateId", candidateId))
      .collect();
  },
});

export const listAllChecks = query({
  args: { limit: v.optional(v.number()) },
  handler: async (ctx, { limit = 50 }) => {
    const checks = await ctx.db.query("backgroundChecks").order("desc").take(limit);
    const candidateIds = [...new Set(checks.map((c) => c.candidateId))];
    const candidates = await Promise.all(candidateIds.map((id) => ctx.db.get(id)));
    const candidateMap = new Map(
      candidates.filter(Boolean).map((c) => [c!._id.toString(), c!])
    );
    return checks.map((check) => ({
      ...check,
      candidate: candidateMap.get(check.candidateId.toString()) ?? null,
    }));
  },
});

export const countByStatus = query({
  args: {},
  handler: async (ctx) => {
    const all = await ctx.db.query("backgroundChecks").collect();
    return {
      running: all.filter((c) => c.status === "pending").length,
      completed: all.filter((c) => c.status === "pass" || c.status === "fail").length,
      flagged: all.filter((c) => c.status === "fail").length,
      total: all.length,
    };
  },
});

export const createCheck = mutation({
  args: {
    candidateId: v.id("candidates"),
    label: v.string(),
    status: v.union(v.literal("pass"), v.literal("fail"), v.literal("pending")),
    detail: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("backgroundChecks", args);
  },
});

export const updateCheckStatus = mutation({
  args: {
    checkId: v.id("backgroundChecks"),
    status: v.union(v.literal("pass"), v.literal("fail"), v.literal("pending")),
  },
  handler: async (ctx, { checkId, status }) => {
    await ctx.db.patch(checkId, { status });
  },
});
