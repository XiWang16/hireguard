import { v } from "convex/values";
import { action, internalAction, internalQuery, mutation } from "../_generated/server";
import { api, internal } from "../_generated/api";

export const submitCandidate = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    jobId: v.id("jobs"),
    resumeFileId: v.optional(v.id("_storage")),
    demographics: v.optional(
      v.object({
        gender: v.optional(v.string()),
        ethnicity: v.optional(v.string()),
        ageBand: v.optional(v.string()),
        disabilityStatus: v.optional(v.string()),
      })
    ),
  },
  handler: async (ctx, args) => {
    const candidateId = await ctx.db.insert("candidates", {
      name: args.name,
      email: args.email,
      jobId: args.jobId,
      resumeFileId: args.resumeFileId,
      demographics: args.demographics,
      status: "received",
      appliedAt: Date.now(),
    });
    await ctx.scheduler.runAfter(0, internal.functions.pipeline.processCandidatePipeline, {
      candidateId,
      jobId: args.jobId,
    });
    return candidateId;
  },
});

export const submitBatchCandidates = action({
  args: {
    candidates: v.array(
      v.object({
        name: v.string(),
        email: v.string(),
        jobId: v.id("jobs"),
        resumeFileId: v.optional(v.id("_storage")),
        demographics: v.optional(
          v.object({
            gender: v.optional(v.string()),
            ethnicity: v.optional(v.string()),
            ageBand: v.optional(v.string()),
            disabilityStatus: v.optional(v.string()),
          })
        ),
      })
    ),
  },
  handler: async (ctx, { candidates }) => {
    const candidateIds: string[] = [];
    for (const candidate of candidates) {
      const id = await ctx.runMutation(api.functions.pipeline.submitCandidate, candidate);
      candidateIds.push(id);
    }
    return candidateIds;
  },
});

export const processCandidatePipeline = internalAction({
  args: { candidateId: v.id("candidates"), jobId: v.id("jobs") },
  handler: async (ctx, { candidateId, jobId }) => {
    // Step 1: Parse resume
    await ctx.runAction(internal.agents.resumeParser.runResumeParser, { candidateId });

    // Step 2: Evaluate candidate
    await ctx.runAction(internal.agents.skillMatcher.runSkillMatcher, { candidateId, jobId });

    // Step 3: Check if all candidates for this job are evaluated, then rank
    const pendingCandidates = await ctx.runQuery(internal.functions.pipeline.countPendingCandidates, { jobId });

    if (pendingCandidates === 0) {
      // All candidates evaluated — run ranker and auditor
      await ctx.runAction(internal.agents.ranker.runRanker, { jobId });
      await ctx.runAction(internal.agents.fairnessAuditor.runFairnessAuditor, { jobId });
    }
  },
});

export const countPendingCandidates = internalQuery({
  args: { jobId: v.id("jobs") },
  handler: async (ctx, { jobId }) => {
    const candidates = await ctx.db
      .query("candidates")
      .withIndex("by_jobId", (q) => q.eq("jobId", jobId))
      .collect();
    return candidates.filter(
      (c) => c.status === "received" || c.status === "parsing"
    ).length;
  },
});

// Manual trigger for running ranking + audit on a job
export const triggerJobAudit = action({
  args: { jobId: v.id("jobs") },
  handler: async (ctx, { jobId }) => {
    await ctx.runAction(internal.agents.ranker.runRanker, { jobId });
    await ctx.runAction(internal.agents.fairnessAuditor.runFairnessAuditor, { jobId });
  },
});

// Public wrapper for candidate-initiated re-evaluation from the UI.
export const reEvaluateCandidate = action({
  args: { candidateId: v.id("candidates"), jobId: v.id("jobs") },
  handler: async (ctx, { candidateId, jobId }) => {
    await ctx.runAction(internal.functions.pipeline.processCandidatePipeline, {
      candidateId,
      jobId,
    });
    return { ok: true };
  },
});

// Scheduled hourly fairness sweep (registered in convex/crons.ts)
export const hourlyFairnessSweep = internalAction({
  args: {},
  handler: async (ctx) => {
    const jobs = await ctx.runQuery(internal.functions.jobs.listJobsInternal, { status: "open" });
    for (const job of jobs) {
      await ctx.runAction(internal.agents.fairnessAuditor.runFairnessAuditor, { jobId: job._id });
    }
  },
});

export const generateUploadUrl = mutation({
  args: {},
  handler: async (ctx) => {
    return await ctx.storage.generateUploadUrl();
  },
});
