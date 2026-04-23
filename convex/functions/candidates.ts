import { v } from "convex/values";
import { internalMutation, internalQuery, mutation, query } from "../_generated/server";

function statusToStage(
  status: string
): "Screening" | "Interview" | "Review" | "Offer" {
  if (status === "shortlisted") return "Review";
  if (status === "hired") return "Offer";
  if (status === "evaluated") return "Interview";
  return "Screening";
}

function scoreToRiskLevel(score: number): "low" | "medium" | "high" {
  if (score >= 75) return "low";
  if (score >= 50) return "medium";
  return "high";
}

export const listAllCandidates = query({
  args: {},
  handler: async (ctx) => {
    const candidates = await ctx.db.query("candidates").order("desc").take(200);
    const evaluations = await ctx.db.query("evaluations").collect();
    const evalMap = new Map(evaluations.map((e) => [e.candidateId.toString(), e]));

    return candidates.map((c) => {
      const { demographics: _d, ...rest } = c;
      const ev = evalMap.get(c._id.toString());
      const rawScore = c.score ?? ev?.overallScore ?? null;
      return {
        ...rest,
        role: c.role ?? c.email,
        score: rawScore,
        stage: c.stage ?? statusToStage(c.status),
        riskLevel:
          c.riskLevel ?? (rawScore !== null ? scoreToRiskLevel(rawScore) : ("low" as const)),
        tags: c.tags ?? [],
        verified: c.verified ?? false,
      };
    });
  },
});

export const getCandidate = internalQuery({
  args: { candidateId: v.id("candidates") },
  handler: async (ctx, { candidateId }) => {
    return await ctx.db.get(candidateId);
  },
});

export const getCandidatesForJob = query({
  args: { jobId: v.id("jobs") },
  handler: async (ctx, { jobId }) => {
    return await ctx.db.query("candidates").withIndex("by_jobId", (q) => q.eq("jobId", jobId)).collect();
  },
});

export const getCandidatesWithDemographics = internalQuery({
  args: { jobId: v.id("jobs") },
  handler: async (ctx, { jobId }) => {
    const candidates = await ctx.db
      .query("candidates")
      .withIndex("by_jobId", (q) => q.eq("jobId", jobId))
      .collect();

    const evaluations = await ctx.db
      .query("evaluations")
      .withIndex("by_jobId", (q) => q.eq("jobId", jobId))
      .collect();

    const evalMap = new Map(evaluations.map((e) => [e.candidateId, e]));

    return candidates.map((c) => ({
      candidateId: c._id,
      status: c.status,
      demographics: c.demographics ?? {},
      evaluation: evalMap.get(c._id) ?? null,
      passed: c.status === "shortlisted" || c.status === "hired",
    }));
  },
});

export const updateCandidateStatus = internalMutation({
  args: {
    candidateId: v.id("candidates"),
    status: v.union(
      v.literal("received"),
      v.literal("parsing"),
      v.literal("evaluated"),
      v.literal("shortlisted"),
      v.literal("rejected"),
      v.literal("hired")
    ),
  },
  handler: async (ctx, { candidateId, status }) => {
    await ctx.db.patch(candidateId, { status });
  },
});

export const updateCandidateParsedData = internalMutation({
  args: {
    candidateId: v.id("candidates"),
    parsedData: v.object({
      contactDetails: v.optional(v.any()),
      workHistory: v.optional(v.array(v.any())),
      education: v.optional(v.array(v.any())),
      skills: v.optional(v.array(v.string())),
      certifications: v.optional(v.array(v.string())),
    }),
  },
  handler: async (ctx, { candidateId, parsedData }) => {
    await ctx.db.patch(candidateId, { parsedData });
  },
});

export const createCandidate = mutation({
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
      ...args,
      status: "received",
      appliedAt: Date.now(),
    });
    return candidateId;
  },
});

export const getCandidateWithEvaluation = query({
  args: { candidateId: v.id("candidates") },
  handler: async (ctx, { candidateId }) => {
    const candidate = await ctx.db.get(candidateId);
    if (!candidate) return null;
    const evaluation = await ctx.db
      .query("evaluations")
      .withIndex("by_candidateId", (q) => q.eq("candidateId", candidateId))
      .first();
    // Strip demographics from public query result
    const { demographics: _, ...safeCandidate } = candidate;
    return { ...safeCandidate, evaluation };
  },
});

export const updateCandidateStatusPublic = mutation({
  args: {
    candidateId: v.id("candidates"),
    status: v.union(
      v.literal("shortlisted"),
      v.literal("rejected"),
      v.literal("hired")
    ),
  },
  handler: async (ctx, { candidateId, status }) => {
    await ctx.db.patch(candidateId, { status });
  },
});
