import { query } from "../_generated/server";

export const getDashboardStats = query({
  args: {},
  handler: async (ctx) => {
    const [candidates, evaluations, backgroundChecks] = await Promise.all([
      ctx.db.query("candidates").collect(),
      ctx.db.query("evaluations").collect(),
      ctx.db.query("backgroundChecks").collect(),
    ]);

    const activeCandidates = candidates.filter((c) => c.status !== "rejected").length;
    const checksCompleted = backgroundChecks.filter(
      (c) => c.status === "pass" || c.status === "fail"
    ).length;
    const offersExtended = candidates.filter((c) => c.status === "hired").length;

    const totalScore = evaluations.reduce((sum, e) => sum + e.overallScore, 0);
    const avgRiskScore =
      evaluations.length > 0 ? Math.round(totalScore / evaluations.length) : 0;

    return { activeCandidates, checksCompleted, avgRiskScore, offersExtended };
  },
});
