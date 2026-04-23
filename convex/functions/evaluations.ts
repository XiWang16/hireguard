import { v } from "convex/values";
import { internalMutation, internalQuery, query } from "../_generated/server";

export const writeEvaluation = internalMutation({
  args: {
    candidateId: v.id("candidates"),
    jobId: v.id("jobs"),
    skillMatchScore: v.number(),
    experienceScore: v.number(),
    overallScore: v.number(),
    reasoning: v.string(),
    evaluatedBy: v.string(),
    evaluatedAt: v.number(),
  },
  handler: async (ctx, args) => {
    // Upsert — replace existing evaluation if one exists
    const existing = await ctx.db
      .query("evaluations")
      .withIndex("by_candidateId", (q) => q.eq("candidateId", args.candidateId))
      .first();
    if (existing) {
      await ctx.db.replace(existing._id, args);
      return existing._id;
    }
    return await ctx.db.insert("evaluations", args);
  },
});

export const getEvaluationsForJob = internalQuery({
  args: { jobId: v.id("jobs") },
  handler: async (ctx, { jobId }) => {
    const evaluations = await ctx.db
      .query("evaluations")
      .withIndex("by_jobId", (q) => q.eq("jobId", jobId))
      .collect();

    // Attach candidate name for context
    const withCandidates = await Promise.all(
      evaluations.map(async (ev) => {
        const candidate = await ctx.db.get(ev.candidateId);
        return { ...ev, candidateName: candidate?.name ?? "Unknown" };
      })
    );
    return withCandidates.sort((a, b) => b.overallScore - a.overallScore);
  },
});

export const getEvaluationsForJobPublic = query({
  args: { jobId: v.id("jobs") },
  handler: async (ctx, { jobId }) => {
    return await ctx.db
      .query("evaluations")
      .withIndex("by_jobId", (q) => q.eq("jobId", jobId))
      .collect();
  },
});
