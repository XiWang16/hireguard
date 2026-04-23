import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  jobs: defineTable({
    title: v.string(),
    department: v.string(),
    description: v.string(),
    requiredSkills: v.array(v.string()),
    status: v.union(v.literal("open"), v.literal("closed"), v.literal("paused")),
    createdAt: v.number(),
    rankingConfig: v.optional(
      v.object({
        shortlistThreshold: v.number(),
        rejectionThreshold: v.number(),
        skillWeights: v.optional(v.any()),
        adverseImpactThreshold: v.optional(v.number()),
      })
    ),
  })
    .index("by_status", ["status"])
    .index("by_department", ["department"]),

  candidates: defineTable({
    name: v.string(),
    email: v.string(),
    resumeFileId: v.optional(v.id("_storage")),
    jobId: v.id("jobs"),
    status: v.union(
      v.literal("received"),
      v.literal("parsing"),
      v.literal("evaluated"),
      v.literal("shortlisted"),
      v.literal("rejected"),
      v.literal("hired")
    ),
    parsedData: v.optional(
      v.object({
        contactDetails: v.optional(v.any()),
        workHistory: v.optional(v.array(v.any())),
        education: v.optional(v.array(v.any())),
        skills: v.optional(v.array(v.string())),
        certifications: v.optional(v.array(v.string())),
      })
    ),
    demographics: v.optional(
      v.object({
        gender: v.optional(v.string()),
        ethnicity: v.optional(v.string()),
        ageBand: v.optional(v.string()),
        disabilityStatus: v.optional(v.string()),
      })
    ),
    appliedAt: v.number(),
    // UI fields
    role: v.optional(v.string()),
    stage: v.optional(
      v.union(
        v.literal("Screening"),
        v.literal("Interview"),
        v.literal("Review"),
        v.literal("Offer")
      )
    ),
    riskLevel: v.optional(
      v.union(v.literal("low"), v.literal("medium"), v.literal("high"))
    ),
    score: v.optional(v.number()),
    tags: v.optional(v.array(v.string())),
    verified: v.optional(v.boolean()),
  })
    .index("by_jobId", ["jobId"])
    .index("by_status", ["status"])
    .index("by_jobId_and_status", ["jobId", "status"]),

  evaluations: defineTable({
    candidateId: v.id("candidates"),
    jobId: v.id("jobs"),
    skillMatchScore: v.number(),
    experienceScore: v.number(),
    overallScore: v.number(),
    reasoning: v.string(),
    evaluatedBy: v.string(),
    evaluatedAt: v.number(),
  })
    .index("by_candidateId", ["candidateId"])
    .index("by_jobId", ["jobId"])
    .index("by_jobId_and_score", ["jobId", "overallScore"]),

  auditReports: defineTable({
    jobId: v.id("jobs"),
    timestamp: v.number(),
    totalCandidates: v.number(),
    passRateByGroup: v.any(),
    adverseImpactRatios: v.any(),
    flagged: v.boolean(),
    statisticalTests: v.any(),
    recommendations: v.array(v.string()),
    acknowledgedRecommendations: v.optional(v.array(v.number())),
  })
    .index("by_jobId", ["jobId"])
    .index("by_jobId_and_timestamp", ["jobId", "timestamp"]),

  agentLogs: defineTable({
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
  })
    .index("by_jobId", ["jobId"])
    .index("by_candidateId", ["candidateId"])
    .index("by_timestamp", ["timestamp"]),

  backgroundChecks: defineTable({
    candidateId: v.id("candidates"),
    label: v.string(),
    status: v.union(v.literal("pass"), v.literal("fail"), v.literal("pending")),
    detail: v.string(),
  })
    .index("by_candidateId", ["candidateId"])
    .index("by_status", ["status"]),

  activityLog: defineTable({
    text: v.string(),
    subtext: v.string(),
    type: v.union(v.literal("success"), v.literal("warning"), v.literal("info")),
    createdAt: v.number(),
  }).index("by_createdAt", ["createdAt"]),
});
