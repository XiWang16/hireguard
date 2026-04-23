import { useQuery } from "convex/react";
import { useNavigate } from "@tanstack/react-router";
import { api } from "../../convex/_generated/api";
import { formatDistanceToNow } from "date-fns";

// ─── Avatar helpers ───────────────────────────────────────────────────────────

function avatarStyle(name: string) {
  const initials = name
    .split(" ")
    .map((n) => n[0] ?? "")
    .join("")
    .slice(0, 2)
    .toUpperCase();
  const a = initials.charCodeAt(0) || 65;
  const b = initials.charCodeAt(1) || 65;
  const hue = (a * 7 + b * 13) % 360;
  return {
    initials,
    bg: `oklch(0.62 0.10 ${hue} / 0.18)`,
    border: `1px solid oklch(0.62 0.10 ${hue} / 0.30)`,
    color: `oklch(0.55 0.12 ${hue})`,
  };
}

// ─── Badges ───────────────────────────────────────────────────────────────────

type Stage = "Screening" | "Interview" | "Review" | "Offer";
type RiskLevel = "low" | "medium" | "high";

function stageBadgeStyle(stage: Stage) {
  const map: Record<Stage, { bg: string; color: string }> = {
    Screening: { bg: "var(--accent-dim)", color: "var(--accent)" },
    Interview: { bg: "var(--border)",     color: "var(--fg-3)" },
    Review:    { bg: "var(--amber-dim)",  color: "var(--amber)" },
    Offer:     { bg: "var(--green-dim)",  color: "var(--green)" },
  };
  return map[stage] ?? map.Screening;
}

// ─── Compact candidate row (for dashboard grid) ───────────────────────────────

type CandidateItem = {
  _id: string;
  name: string;
  role: string;
  stage: Stage;
  riskLevel: RiskLevel;
  verified: boolean;
};

function CompactCandidateRow({
  candidate,
  index,
  onClick,
}: {
  candidate: CandidateItem;
  index: number;
  onClick: () => void;
}) {
  const av = avatarStyle(candidate.name);
  const stageStyle = stageBadgeStyle(candidate.stage);
  const riskColor =
    candidate.riskLevel === "high"
      ? "var(--red)"
      : candidate.riskLevel === "medium"
        ? "var(--amber)"
        : "var(--green)";
  const riskBg =
    candidate.riskLevel === "high"
      ? "var(--red-dim)"
      : candidate.riskLevel === "medium"
        ? "var(--amber-dim)"
        : "var(--green-dim)";

  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-[6px] text-left transition-colors animate-slide-in-left hover:bg-[--bg-3]"
      style={{ animationDelay: `${index * 45}ms` }}
    >
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-semibold shrink-0"
        style={{ background: av.bg, border: av.border, color: av.color }}
      >
        {av.initials}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1">
          <span className="text-[13px] font-medium truncate" style={{ color: "var(--fg)" }}>
            {candidate.name}
          </span>
          {candidate.verified && (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
        </div>
        <p className="text-[11.5px] truncate" style={{ color: "var(--fg-3)" }}>
          {candidate.role}
        </p>
      </div>
      <div className="flex flex-col items-end gap-1 shrink-0">
        <span
          className="px-2 py-0.5 rounded-full text-[11px] font-medium whitespace-nowrap"
          style={{ background: stageStyle.bg, color: stageStyle.color }}
        >
          {candidate.stage}
        </span>
        <span
          className="text-[11px] font-medium px-2 py-0.5 rounded-full capitalize"
          style={{ background: riskBg, color: riskColor }}
        >
          {candidate.riskLevel} risk
        </span>
      </div>
    </button>
  );
}

// ─── Pipeline bar ─────────────────────────────────────────────────────────────

const PIPELINE_STAGES = [
  { stage: "Screening" as Stage, color: "var(--accent)" },
  { stage: "Interview" as Stage, color: "var(--amber)" },
  { stage: "Review"   as Stage, color: "var(--fg-3)" },
  { stage: "Offer"    as Stage, color: "var(--green)" },
];

// ─── Dashboard ────────────────────────────────────────────────────────────────

export default function DashboardPage() {
  const stats = useQuery(api.functions.dashboardStats.getDashboardStats);
  const candidates = useQuery(api.functions.candidates.listAllCandidates) as CandidateItem[] | undefined;
  const activity = useQuery(api.functions.activityLog.listRecent, { limit: 8 });
  const navigate = useNavigate();

  const recentCandidates = (candidates ?? []).slice(0, 6);

  // Pipeline counts
  const pipelineCounts = PIPELINE_STAGES.map(({ stage }) => ({
    stage,
    count: (candidates ?? []).filter((c) => c.stage === stage).length,
  }));
  const maxPipeCount = Math.max(...pipelineCounts.map((p) => p.count), 1);

  // Risk counts
  const riskCounts = {
    low:    (candidates ?? []).filter((c) => c.riskLevel === "low").length,
    medium: (candidates ?? []).filter((c) => c.riskLevel === "medium").length,
    high:   (candidates ?? []).filter((c) => c.riskLevel === "high").length,
  };
  const totalCandidates = (candidates ?? []).length || 1;
  const highRiskCandidates = (candidates ?? []).filter((c) => c.riskLevel === "high");

  const STAT_CARDS = [
    {
      label: "Active Candidates",
      value: stats?.activeCandidates ?? "—",
      delta: "+12% ↑",
      sub: "vs. last month",
      positive: true,
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" />
        </svg>
      ),
    },
    {
      label: "Checks Complete",
      value: stats?.checksCompleted ?? "—",
      delta: "+8% ↑",
      sub: "6 pending review",
      positive: true,
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-2.981z" />
        </svg>
      ),
    },
    {
      label: "Risk Flags",
      value: riskCounts.high,
      delta: "−1 ↓",
      sub: `${riskCounts.high} high, ${riskCounts.medium} medium`,
      positive: false,
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
    },
    {
      label: "Offers Extended",
      value: stats?.offersExtended ?? "—",
      delta: "+2 ↑",
      sub: "This month",
      positive: true,
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
  ] as const;

  return (
    <div className="h-full overflow-y-auto">
      <div className="p-5 max-w-[1360px] flex flex-col gap-5">

        {/* ── Stat cards ──────────────────────────────────────────── */}
        <div className="grid grid-cols-4 gap-3.5">
          {STAT_CARDS.map((card, i) => (
            <div
              key={card.label}
              className="rounded-[12px] flex flex-col gap-3.5 animate-fade-up"
              style={{
                background: "var(--bg-2)",
                border: "1px solid var(--border)",
                padding: "22px 24px",
                boxShadow: "var(--shadow-sm)",
                animationDelay: `${i * 70}ms`,
              }}
            >
              <div className="flex items-center justify-between">
                <span className="text-[13px]" style={{ color: "var(--fg-2)" }}>
                  {card.label}
                </span>
                <span style={{ color: "var(--fg-3)", opacity: 0.65 }}>{card.icon}</span>
              </div>
              <div>
                <div className="flex items-baseline gap-2">
                  <span
                    className="text-[32px] font-medium leading-none tracking-[-0.04em]"
                    style={{ color: "var(--fg)" }}
                  >
                    {card.value}
                  </span>
                  <span
                    className="text-[12.5px] font-medium"
                    style={{ color: card.positive ? "var(--green)" : "var(--red)" }}
                  >
                    {card.delta}
                  </span>
                </div>
                <div className="text-[12px] mt-1.5" style={{ color: "var(--fg-3)" }}>
                  {card.sub}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Middle row: Pipeline | Risk Breakdown | Live Activity ── */}
        <div className="grid gap-3.5" style={{ gridTemplateColumns: "1fr 1fr 1.1fr" }}>

          {/* Pipeline */}
          <div
            className="rounded-[12px] animate-fade-up"
            style={{
              background: "var(--bg-2)",
              border: "1px solid var(--border)",
              padding: "20px 22px",
              boxShadow: "var(--shadow-sm)",
              animationDelay: "150ms",
            }}
          >
            <div className="text-[13.5px] font-medium mb-[18px]" style={{ color: "var(--fg)" }}>
              Pipeline
            </div>
            <div className="flex flex-col gap-3">
              {PIPELINE_STAGES.map(({ stage, color }, i) => {
                const count = pipelineCounts[i]?.count ?? 0;
                return (
                  <div key={stage} className="flex items-center gap-2.5">
                    <span
                      className="text-[12.5px] shrink-0"
                      style={{ color: "var(--fg-2)", width: "70px" }}
                    >
                      {stage}
                    </span>
                    <div
                      className="flex-1 h-2 rounded-full overflow-hidden"
                      style={{ background: "var(--bg-3)" }}
                    >
                      <div
                        className="h-full rounded-full"
                        style={{
                          background: color,
                          width: `${(count / maxPipeCount) * 100}%`,
                          transition: "width 0.8s cubic-bezier(0.25,0.46,0.45,0.94)",
                        }}
                      />
                    </div>
                    <span
                      className="text-[13px] font-medium text-right"
                      style={{ color, width: "18px" }}
                    >
                      {count}
                    </span>
                  </div>
                );
              })}
            </div>
            <div
              className="flex justify-between mt-[18px] pt-3.5 border-t"
              style={{ borderColor: "var(--border-2)" }}
            >
              <span className="text-[12px]" style={{ color: "var(--fg-3)" }}>
                Avg. time-to-hire
              </span>
              <span className="text-[12px] font-medium" style={{ color: "var(--fg)" }}>
                18 days
              </span>
            </div>
          </div>

          {/* Risk Breakdown */}
          <div
            className="rounded-[12px] animate-fade-up"
            style={{
              background: "var(--bg-2)",
              border: "1px solid var(--border)",
              padding: "20px 22px",
              boxShadow: "var(--shadow-sm)",
              animationDelay: "200ms",
            }}
          >
            <div className="text-[13.5px] font-medium mb-[18px]" style={{ color: "var(--fg)" }}>
              Risk Breakdown
            </div>
            {(
              [
                ["low",    "var(--green)"],
                ["medium", "var(--amber)"],
                ["high",   "var(--red)"],
              ] as const
            ).map(([risk, color]) => {
              const cnt = riskCounts[risk];
              const pct = Math.round((cnt / totalCandidates) * 100);
              return (
                <div key={risk} className="flex items-center gap-2.5 mb-3">
                  <span
                    className="text-[12.5px] capitalize shrink-0"
                    style={{ color: "var(--fg-2)", width: "52px" }}
                  >
                    {risk}
                  </span>
                  <div
                    className="flex-1 h-2 rounded-full overflow-hidden"
                    style={{ background: "var(--bg-3)" }}
                  >
                    <div
                      className="h-full rounded-full"
                      style={{
                        background: color,
                        width: `${pct}%`,
                        transition: "width 0.8s cubic-bezier(0.25,0.46,0.45,0.94)",
                      }}
                    />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span
                      className="text-[13px] font-medium text-right"
                      style={{ color, width: "16px" }}
                    >
                      {cnt}
                    </span>
                    <span className="text-[11px]" style={{ color: "var(--fg-3)", width: "28px" }}>
                      ({pct}%)
                    </span>
                  </div>
                </div>
              );
            })}
            <div
              className="mt-1.5 pt-3.5 border-t"
              style={{ borderColor: "var(--border-2)" }}
            >
              <div className="text-[12px] mb-1" style={{ color: "var(--fg-3)" }}>
                Needs attention
              </div>
              {highRiskCandidates.length === 0 ? (
                <p className="text-[12px] py-1" style={{ color: "var(--fg-3)" }}>
                  No high-risk candidates
                </p>
              ) : (
                highRiskCandidates.map((c) => {
                  const av = avatarStyle(c.name);
                  return (
                    <button
                      key={c._id}
                      onClick={() => navigate({ to: "/candidates" })}
                      className="w-full flex items-center gap-2 py-1.5 cursor-pointer hover:opacity-75 transition-opacity"
                    >
                      <div
                        className="w-[22px] h-[22px] rounded-full flex items-center justify-center text-[9px] font-semibold shrink-0"
                        style={{ background: av.bg, border: av.border, color: av.color }}
                      >
                        {av.initials}
                      </div>
                      <span className="text-[12.5px] flex-1 text-left" style={{ color: "var(--fg)" }}>
                        {c.name}
                      </span>
                      <span
                        className="text-[11px] px-1.5 py-0.5 rounded-full"
                        style={{ background: "var(--red-dim)", color: "var(--red)" }}
                      >
                        high
                      </span>
                    </button>
                  );
                })
              )}
            </div>
          </div>

          {/* Live Activity */}
          <div
            className="rounded-[12px] animate-fade-up"
            style={{
              background: "var(--bg-2)",
              border: "1px solid var(--border)",
              padding: "20px 22px",
              boxShadow: "var(--shadow-sm)",
              animationDelay: "250ms",
            }}
          >
            <div className="flex items-center justify-between mb-[18px]">
              <span className="text-[13.5px] font-medium" style={{ color: "var(--fg)" }}>
                Live Activity
              </span>
              {activity && (
                <span
                  className="text-[12px] px-2 py-0.5 rounded-full"
                  style={{ background: "var(--bg-3)", color: "var(--fg-3)" }}
                >
                  {activity.length} events
                </span>
              )}
            </div>
            <div className="flex flex-col gap-3.5">
              {!activity || activity.length === 0 ? (
                <p className="text-[13px] py-6 text-center" style={{ color: "var(--fg-3)" }}>
                  No recent activity.
                </p>
              ) : (
                activity.slice(0, 6).map((item, i) => {
                  const dot =
                    item.type === "success"
                      ? "var(--green)"
                      : item.type === "warning"
                        ? "var(--amber)"
                        : "var(--accent)";
                  const dotBg =
                    item.type === "success"
                      ? "var(--green-dim)"
                      : item.type === "warning"
                        ? "var(--amber-dim)"
                        : "var(--accent-dim)";
                  return (
                    <div
                      key={item._id}
                      className="flex gap-3.5 items-start animate-slide-in-left"
                      style={{ animationDelay: `${i * 55}ms` }}
                    >
                      <div className="pt-[5px] shrink-0">
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{ background: dot, boxShadow: `0 0 0 3px ${dotBg}` }}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[13.5px] font-medium" style={{ color: "var(--fg)" }}>
                          {item.text}
                        </div>
                        <div
                          className="text-[12px] mt-0.5 truncate"
                          style={{ color: "var(--fg-3)" }}
                        >
                          {item.subtext}
                        </div>
                      </div>
                      <span
                        className="text-[11.5px] shrink-0 pt-0.5 whitespace-nowrap"
                        style={{ color: "var(--fg-3)" }}
                      >
                        {formatDistanceToNow(new Date(item.createdAt), { addSuffix: true })}
                      </span>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>

        {/* ── Recent Candidates (2-col grid) ───────────────────────── */}
        <div
          className="rounded-[12px] animate-fade-up"
          style={{
            background: "var(--bg-2)",
            border: "1px solid var(--border)",
            padding: "20px 22px",
            boxShadow: "var(--shadow-sm)",
            animationDelay: "300ms",
          }}
        >
          <div className="flex items-center justify-between mb-3.5">
            <span className="text-[13.5px] font-medium" style={{ color: "var(--fg)" }}>
              Recent Candidates
            </span>
            <button
              onClick={() => navigate({ to: "/candidates" })}
              className="text-[12.5px] transition-opacity hover:opacity-75"
              style={{ background: "none", border: "none", color: "var(--accent)", cursor: "pointer", fontFamily: "inherit" }}
            >
              View all →
            </button>
          </div>
          {recentCandidates.length === 0 ? (
            <p className="text-[13px] text-center py-8" style={{ color: "var(--fg-3)" }}>
              No candidates yet.
            </p>
          ) : (
            <div className="grid gap-0.5" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
              {recentCandidates.map((c, i) => (
                <CompactCandidateRow
                  key={c._id}
                  candidate={c}
                  index={i}
                  onClick={() => navigate({ to: "/candidates" })}
                />
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
