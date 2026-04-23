import { v } from "convex/values";
import { internalAction } from "../_generated/server";
import { optionalEnv, requireEnv } from "../lib/env";

export const sendAdverseImpactAlert = internalAction({
  args: {
    jobId: v.id("jobs"),
    summary: v.string(),
    flaggedGroups: v.array(v.string()),
  },
  handler: async (_ctx, { jobId, summary, flaggedGroups }) => {
    const alertFrom = requireEnv("ALERT_EMAIL_FROM");
    const alertTo = optionalEnv("ALERT_EMAIL_TO") ?? alertFrom;
    const sesUrl = requireEnv("SES_ALERT_URL");

    await fetch(sesUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: alertTo,
        from: alertFrom,
        subject: `[HireGuard] Adverse Impact Detected — Job ${jobId}`,
        body: `Adverse impact was detected in hiring outcomes.\n\nSummary: ${summary}\n\nFlagged groups: ${flaggedGroups.join(", ")}\n\nPlease review the audit report immediately.`,
      }),
    });

    return { sent: true };
  },
});
