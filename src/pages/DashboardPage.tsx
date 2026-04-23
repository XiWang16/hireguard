import { useQuery } from "convex/react";
import { Link } from "@tanstack/react-router";
import { api } from "../../convex/_generated/api";
import { formatDistanceToNow } from "date-fns";
import clsx from "clsx";

// ─── Avatar helpers ──────────────────────────────────────────────────────────

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

// ─── Stage badge ─────────────────────────────────────────────────────────────

type Stage = "Screening" | "Interview" | "Review" | "Offer";

function StageBadge({ stage }: { stage: Stage }) {
  const styles: Record<Stage, { bg: string; color: string }> = {
    Screening: { bg: "var(--accent-dim)", color: "var(--accent)" },
    Interview: { bg: "var(--amber-dim)",  color: "var(--amber)" },
    Review:    { bg: "var(--amber-dim)",  color: "var(--amber)" },
    Offer:     { bg: "var(--green-dim)",  color: "var(--green)" },
  };
  const s = styles[stage] ?? styles.Screening;
  return (
    <span
      className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium"
      style={{ background: s.bg, color: s.color }}
    >
      {stage}
    </span>
  );
}

// ─── Risk badge ──────────────────────────────────────────────────────────────

type RiskLevel = "low" | "medium" | "high";

function RiskBadge({ risk }: { risk: RiskLevel }) {
  const styles: Record<RiskLevel, { bg: string; color: string; label: string }> = {
    low:    { bg: "var(--green-dim)", color: "var(--green)", label: "Low" },
    medium: { bg: "var(--amber-dim)", color: "var(--amber)", label: "Med" },
    high:   { bg: "var(--red-dim)",   color: "var(--red)",   label: "High" },
  };
  const s = styles[risk] ?? styles.low;
  return (
    <span
      className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium"
      style={{ background: s.bg, color: s.color }}
    >
      {s.label}
    </span>
  );
}

// ─── Candidate row ────────────────────────────────────────────────────────────

type CandidateItem = {
  _id: string;
  name: string;
  role: string;
  stage: Stage;
  riskLevel: RiskLevel;
  verified: boolean;
};

function CandidateRow({ candidate, index }: { candidate: CandidateItem; index: number }) {
  const av = avatarStyle(candidate.name);
  return (
    <div
      className="flex items-center gap-3 px-5 py-3 border-b last:border-0 hover:bg-[--bg-3] transition-colors cursor-pointer animate-slide-in-left"
      style={{ borderColor: "var(--border)", animationDelay: `${index * 40}ms` }}
    >
      <div
        className="w-9 h-9 rounded-full flex items-center justify-center text-[12px] font-semibold shrink-0"
        style={{ background: av.bg, border: av.border, color: av.color }}
      >
        {av.initials}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5">
          <span
            className="text-[13.5px] font-medium tracking-[-0.02em] truncate"
            style={{ color: "var(--fg)" }}
          >
            {candidate.name}
          </span>
          {candidate.verified && (
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0"
            >
              <path d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
            </svg>
          )}
        </div>
        <p className="text-[12px] truncate" style={{ color: "var(--fg-3)" }}>
          {candidate.role}
        </p>
      </div>
      <div className="flex items-center gap-1.5 shrink-0">
        <StageBadge stage={candidate.stage} />
        <RiskBadge risk={candidate.riskLevel} />
      </div>
    </div>
  );
}

// ─── Activity dot ────────────────────────────────────────────────────────────

type ActivityType = "success" | "warning" | "info";

function ActivityDot({ type }: { type: ActivityType }) {
  const color =
    type === "success"
      ? "var(--green)"
      : type === "warning"
        ? "var(--amber)"
        : "var(--accent)";
  return (
    <span
      className="w-2 h-2 rounded-full shrink-0 mt-1"
      style={{ background: color }}
    />
  );
}

// ─── Dashboard ────────────────────────────────────────────────────────────────

export default function DashboardPage() {
  const stats = useQuery(api.functions.dashboardStats.getDashboardStats);
  const candidates = useQuery(api.functions.candidates.listAllCandidates);
  const activity = useQuery(api.functions.activityLog.listRecent, { limit: 5 });

  const recentCandidates = (candidates ?? []).slice(0, 5) as CandidateItem[];

  const STAT_CARDS = [
    {
      label: "Active Candidates",
      value: stats?.activeCandidates ?? "—",
      delta: "+12%",
      positive: true,
    },
    {
      label: "Checks Completed",
      value: stats?.checksCompleted ?? "—",
      delta: "+8%",
      positive: true,
    },
    {
      label: "Avg. Risk Score",
      value: stats?.avgRiskScore ?? "—",
      delta: "+3pts",
      positive: true,
    },
    {
      label: "Offers Extended",
      value: stats?.offersExtended ?? "—",
      delta: "+2",
      positive: true,
    },
  ] as const;

  return (
    <div className="h-full overflow-y-auto">
      <div className="p-6 max-w-[1280px]">
        {/* Stat cards */}
        <div className="grid grid-cols-4 gap-3 mb-6">
          {STAT_CARDS.map((card, i) => (
            <div
              key={card.label}
              className="rounded-[10px] animate-fade-up"
              style={{
                background: "var(--bg-2)",
                boxShadow: "var(--shadow-sm)",
                padding: "20px 22px",
                animationDelay: `${i * 60}ms`,
              }}
            >
              <p
                className="text-[13px] mb-2"
                style={{ color: "var(--fg-2)" }}
              >
                {card.label}
              </p>
              <div className="flex items-end justify-between gap-2">
                <span
                  className="text-[28px] font-medium tracking-[-0.03em] leading-none"
                  style={{ color: "var(--fg)" }}
                >
                  {card.value}
                </span>
                <span
                  className="text-[12px] font-medium pb-0.5"
                  style={{ color: card.positive ? "var(--green)" : "var(--red)" }}
                >
                  {card.delta}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Two-column row */}
        <div
          className="grid gap-4"
          style={{ gridTemplateColumns: "1.3fr 1fr" }}
        >
          {/* Recent Candidates */}
          <div
            className="rounded-[10px] overflow-hidden animate-fade-in"
            style={{
              background: "var(--bg-2)",
              boxShadow: "var(--shadow-sm)",
              animationDelay: "80ms",
            }}
          >
            <div
              className="flex items-center justify-between px-5 py-4 border-b"
              style={{ borderColor: "var(--border)" }}
            >
              <h2
                className="text-[13px] font-semibold tracking-[-0.02em]"
                style={{ color: "var(--fg)" }}
              >
                Recent Candidates
              </h2>
              <Link
                to="/candidates"
                className="text-[12px] font-medium transition-colors hover:opacity-75"
                style={{ color: "var(--accent)" }}
              >
                View all →
              </Link>
            </div>
            {recentCandidates.length === 0 ? (
              <p
                className="px-5 py-8 text-[13px] text-center"
                style={{ color: "var(--fg-3)" }}
              >
                No candidates yet.
              </p>
            ) : (
              <div>
                {recentCandidates.map((c, i) => (
                  <CandidateRow key={c._id} candidate={c} index={i} />
                ))}
              </div>
            )}
          </div>

          {/* Live Activity */}
          <div
            className="rounded-[10px] overflow-hidden animate-fade-in"
            style={{
              background: "var(--bg-2)",
              boxShadow: "var(--shadow-sm)",
              animationDelay: "140ms",
            }}
          >
            <div
              className="px-5 py-4 border-b"
              style={{ borderColor: "var(--border)" }}
            >
              <h2
                className="text-[13px] font-semibold tracking-[-0.02em]"
                style={{ color: "var(--fg)" }}
              >
                Live Activity
              </h2>
            </div>

            {!activity || activity.length === 0 ? (
              <p
                className="px-5 py-8 text-[13px] text-center"
                style={{ color: "var(--fg-3)" }}
              >
                No recent activity.
              </p>
            ) : (
              <div className="p-3 flex flex-col gap-0.5">
                {activity.map((item, i) => (
                  <div
                    key={item._id}
                    className={clsx(
                      "flex items-start gap-3 px-2 py-2.5 rounded-[6px] animate-slide-in-left"
                    )}
                    style={{ animationDelay: `${i * 50}ms` }}
                  >
                    <ActivityDot type={item.type} />
                    <div className="flex-1 min-w-0">
                      <p
                        className="text-[13px] font-medium truncate"
                        style={{ color: "var(--fg)" }}
                      >
                        {item.text}
                      </p>
                      <p
                        className="text-[12px] truncate"
                        style={{ color: "var(--fg-3)" }}
                      >
                        {item.subtext}
                      </p>
                    </div>
                    <span
                      className="text-[11px] shrink-0 pt-0.5"
                      style={{ color: "var(--fg-3)" }}
                    >
                      {formatDistanceToNow(new Date(item.createdAt), {
                        addSuffix: true,
                      })}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
