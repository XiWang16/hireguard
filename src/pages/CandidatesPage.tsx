import { useRef, useEffect, useState } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import type { Id } from "../../convex/_generated/dataModel";
import { useUIStore } from "../stores/uiStore";
import { useFilterStore } from "../stores/useFilterStore";
import clsx from "clsx";

// ─── Types ────────────────────────────────────────────────────────────────────

type Stage = "Screening" | "Interview" | "Review" | "Offer";
type RiskLevel = "low" | "medium" | "high";
type CheckStatus = "pass" | "fail" | "pending";

interface Candidate {
  _id: string;
  name: string;
  email: string;
  role: string;
  stage: Stage;
  riskLevel: RiskLevel;
  score: number | null;
  tags: string[];
  verified: boolean;
  appliedAt: number;
  status: string;
}

// ─── Avatar ───────────────────────────────────────────────────────────────────

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0] ?? "")
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function avatarColors(name: string) {
  const initials = getInitials(name);
  const a = initials.charCodeAt(0) || 65;
  const b = initials.charCodeAt(1) || 65;
  const hue = (a * 7 + b * 13) % 360;
  return {
    bg: `oklch(0.62 0.10 ${hue} / 0.18)`,
    border: `1px solid oklch(0.62 0.10 ${hue} / 0.30)`,
    color: `oklch(0.55 0.12 ${hue})`,
  };
}

// ─── Badges ───────────────────────────────────────────────────────────────────

function StageBadge({ stage }: { stage: Stage }) {
  const map: Record<Stage, { bg: string; color: string }> = {
    Screening: { bg: "var(--accent-dim)", color: "var(--accent)" },
    Interview: { bg: "var(--amber-dim)",  color: "var(--amber)" },
    Review:    { bg: "var(--amber-dim)",  color: "var(--amber)" },
    Offer:     { bg: "var(--green-dim)",  color: "var(--green)" },
  };
  const s = map[stage] ?? map.Screening;
  return (
    <span
      className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium"
      style={{ background: s.bg, color: s.color }}
    >
      {stage}
    </span>
  );
}

function RiskBadge({ risk }: { risk: RiskLevel }) {
  const map: Record<RiskLevel, { bg: string; color: string; label: string }> = {
    low:    { bg: "var(--green-dim)", color: "var(--green)", label: "Low Risk" },
    medium: { bg: "var(--amber-dim)", color: "var(--amber)", label: "Med Risk" },
    high:   { bg: "var(--red-dim)",   color: "var(--red)",   label: "High Risk" },
  };
  const s = map[risk] ?? map.low;
  return (
    <span
      className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium"
      style={{ background: s.bg, color: s.color }}
    >
      {s.label}
    </span>
  );
}

// ─── Score ring ───────────────────────────────────────────────────────────────

function ScoreRing({ score }: { score: number }) {
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setAnimated(true), 60);
    return () => clearTimeout(t);
  }, [score]);

  const dash = animated ? (score / 100) * circumference : 0;
  const color =
    score >= 75 ? "var(--green)" : score >= 50 ? "var(--amber)" : "var(--red)";

  return (
    <svg width="52" height="52" viewBox="0 0 52 52">
      <circle
        cx="26" cy="26" r={radius}
        fill="none"
        stroke="var(--bg-3)"
        strokeWidth="3.5"
      />
      <circle
        cx="26" cy="26" r={radius}
        fill="none"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeDasharray={`${dash} ${circumference}`}
        transform="rotate(-90 26 26)"
        style={{
          transition: "stroke-dasharray 0.8s cubic-bezier(0.25,0.46,0.45,0.94)",
        }}
      />
      <text
        x="26" y="31"
        textAnchor="middle"
        fontSize="11"
        fontWeight="600"
        letterSpacing="-0.5"
        fill={color}
      >
        {score}
      </text>
    </svg>
  );
}

// ─── Check item ───────────────────────────────────────────────────────────────

function CheckItem({
  label,
  detail,
  status,
  isLast,
}: {
  label: string;
  detail: string;
  status: CheckStatus;
  isLast: boolean;
}) {
  const icon =
    status === "pass" ? (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ) : status === "fail" ? (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ) : (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    );

  const badgeStyle =
    status === "pass"
      ? { bg: "var(--green-dim)", color: "var(--green)", label: "Pass" }
      : status === "fail"
        ? { bg: "var(--red-dim)", color: "var(--red)", label: "Fail" }
        : { bg: "var(--amber-dim)", color: "var(--amber)", label: "Pending" };

  return (
    <div
      className={clsx("flex items-center gap-3 py-3", !isLast && "border-b")}
      style={{ borderColor: "var(--border)" }}
    >
      <span className="shrink-0">{icon}</span>
      <div className="flex-1 min-w-0">
        <p
          className="text-[13px] font-medium"
          style={{ color: "var(--fg)" }}
        >
          {label}
        </p>
        <p className="text-[12px] truncate" style={{ color: "var(--fg-3)" }}>
          {detail}
        </p>
      </div>
      <span
        className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium shrink-0"
        style={{ background: badgeStyle.bg, color: badgeStyle.color }}
      >
        {badgeStyle.label}
      </span>
    </div>
  );
}

// ─── Candidate detail panel ───────────────────────────────────────────────────

function CandidateDetail({ candidate }: { candidate: Candidate }) {
  const checks = useQuery(
    api.functions.backgroundChecks.listForCandidate,
    { candidateId: candidate._id as Id<"candidates"> }
  );
  const advanceStage = useMutation(api.functions.candidates.updateCandidateStatusPublic);
  const [advancingKey, setAdvancingKey] = useState(0);

  const av = avatarColors(candidate.name);
  const initials = getInitials(candidate.name);

  async function handleAdvance() {
    const next =
      candidate.status === "received" || candidate.status === "parsing"
        ? "evaluated"
        : candidate.status === "evaluated"
          ? "shortlisted"
          : candidate.status === "shortlisted"
            ? "hired"
            : null;
    if (!next) return;
    await advanceStage({
      candidateId: candidate._id as Id<"candidates">,
      status: next as "shortlisted" | "rejected" | "hired",
    });
    setAdvancingKey((k) => k + 1);
  }

  return (
    <div
      key={advancingKey + candidate._id}
      className="h-full overflow-y-auto animate-scale-in"
    >
      <div className="p-6">
        {/* Header row */}
        <div className="flex items-start gap-4 mb-5">
          <div
            className="w-[52px] h-[52px] rounded-full flex items-center justify-center text-[15px] font-semibold shrink-0"
            style={{ background: av.bg, border: av.border, color: av.color }}
          >
            {initials}
          </div>
          <div className="flex-1 min-w-0 pt-0.5">
            <div className="flex items-center gap-1.5 flex-wrap">
              <h2
                className="text-[18px] font-semibold tracking-[-0.03em]"
                style={{ color: "var(--fg)" }}
              >
                {candidate.name}
              </h2>
              {candidate.verified && (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
              )}
            </div>
            <p
              className="text-[13px] mb-2"
              style={{ color: "var(--fg-2)" }}
            >
              {candidate.role}
            </p>
            {candidate.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {candidate.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-full text-[11px] font-medium"
                    style={{ background: "var(--bg-3)", color: "var(--fg-2)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
          {candidate.score !== null && (
            <div className="shrink-0">
              <ScoreRing score={candidate.score} />
            </div>
          )}
        </div>

        {/* Badges row */}
        <div className="flex flex-wrap items-center gap-2 mb-5">
          <StageBadge stage={candidate.stage} />
          <RiskBadge risk={candidate.riskLevel} />
          <span
            className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium"
            style={{ background: "var(--bg-3)", color: "var(--fg-2)" }}
          >
            Applied {new Date(candidate.appliedAt).toLocaleDateString()}
          </span>
        </div>

        {/* Background checks */}
        <div
          className="rounded-[10px] mb-5 overflow-hidden"
          style={{ background: "var(--bg-2)", boxShadow: "var(--shadow-sm)" }}
        >
          <div
            className="px-4 py-3 border-b"
            style={{ borderColor: "var(--border)" }}
          >
            <h3
              className="text-[12px] font-semibold tracking-[-0.01em]"
              style={{ color: "var(--fg-2)" }}
            >
              BACKGROUND CHECKS
            </h3>
          </div>
          <div className="px-4">
            {!checks || checks.length === 0 ? (
              <p
                className="py-5 text-[13px] text-center"
                style={{ color: "var(--fg-3)" }}
              >
                No checks run yet.
              </p>
            ) : (
              checks.map((check, i) => (
                <CheckItem
                  key={check._id}
                  label={check.label}
                  detail={check.detail}
                  status={check.status}
                  isLast={i === checks.length - 1}
                />
              ))
            )}
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-2">
          <button
            onClick={handleAdvance}
            disabled={candidate.status === "hired"}
            className="flex-1 py-2 rounded-[6px] text-[13px] font-medium transition-all hover:opacity-[0.88] disabled:opacity-40 disabled:cursor-not-allowed"
            style={{ background: "var(--accent)", color: "white" }}
          >
            Advance Stage
          </button>
          <button
            className="flex-1 py-2 rounded-[6px] text-[13px] font-medium border transition-all hover:bg-[--bg-3]"
            style={{
              borderColor: "var(--border)",
              color: "var(--fg-2)",
              background: "transparent",
            }}
          >
            Flag for Review
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Empty state ──────────────────────────────────────────────────────────────

function EmptyDetail() {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-3">
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--fg-3)"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
      <p className="text-[13px]" style={{ color: "var(--fg-3)" }}>
        Select a candidate to view details
      </p>
    </div>
  );
}

// ─── Candidates page ──────────────────────────────────────────────────────────

export default function CandidatesPage() {
  const candidates = useQuery(api.functions.candidates.listAllCandidates) as
    | Candidate[]
    | undefined;
  const { selectedCandidateId, setSelectedCandidateId } = useUIStore();
  const { searchQuery, setFilter } = useFilterStore();
  const searchRef = useRef<HTMLInputElement>(null);

  const filtered = (candidates ?? []).filter((c) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      c.name.toLowerCase().includes(q) || c.role.toLowerCase().includes(q)
    );
  });

  const selectedCandidate =
    (candidates ?? []).find((c) => c._id === selectedCandidateId) ?? null;

  return (
    <div className="h-full grid overflow-hidden" style={{ gridTemplateColumns: "1fr 1.6fr" }}>
      {/* ── Left: candidate list ─────────────────────────────────── */}
      <div
        className="flex flex-col border-r overflow-hidden"
        style={{ borderColor: "var(--border)" }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-4 py-3.5 border-b shrink-0"
          style={{ borderColor: "var(--border)" }}
        >
          <div className="flex items-center gap-2">
            <h2
              className="text-[13px] font-semibold tracking-[-0.02em]"
              style={{ color: "var(--fg)" }}
            >
              All Candidates
            </h2>
            {candidates && (
              <span
                className="px-2 py-0.5 rounded-full text-[11px] font-medium"
                style={{ background: "var(--bg-3)", color: "var(--fg-2)" }}
              >
                {filtered.length}
              </span>
            )}
          </div>
        </div>

        {/* Search */}
        <div
          className="px-3 py-2.5 border-b shrink-0"
          style={{ borderColor: "var(--border)" }}
        >
          <label className="flex items-center gap-2 px-3 py-2 rounded-[6px]" style={{ background: "var(--bg-3)" }}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--fg-3)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              ref={searchRef}
              type="text"
              placeholder="Search candidates…"
              value={searchQuery}
              onChange={(e) => setFilter("searchQuery", e.target.value)}
              className="flex-1 bg-transparent text-[13px] outline-none placeholder:text-[--fg-3]"
              style={{ color: "var(--fg)" }}
            />
          </label>
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto">
          {!candidates ? (
            <div className="flex items-center justify-center h-32">
              <p className="text-[13px]" style={{ color: "var(--fg-3)" }}>
                Loading…
              </p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="flex items-center justify-center h-32">
              <p className="text-[13px]" style={{ color: "var(--fg-3)" }}>
                No candidates found.
              </p>
            </div>
          ) : (
            filtered.map((c, i) => {
              const av = avatarColors(c.name);
              const initials = getInitials(c.name);
              const selected = c._id === selectedCandidateId;

              return (
                <button
                  key={c._id}
                  onClick={() => setSelectedCandidateId(selected ? null : c._id)}
                  className={clsx(
                    "w-full flex items-center gap-3 px-4 py-3 text-left border-b transition-colors animate-slide-in-left",
                    selected ? "border-l-2" : "hover:bg-[--bg-3]"
                  )}
                  style={{
                    borderBottomColor: "var(--border)",
                    borderLeftColor: selected ? "var(--accent)" : undefined,
                    background: selected ? "var(--accent-dim)" : undefined,
                    animationDelay: `${i * 30}ms`,
                    paddingLeft: selected ? "14px" : undefined,
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-[12px] font-semibold shrink-0"
                    style={{ background: av.bg, border: av.border, color: av.color }}
                  >
                    {initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1">
                      <span
                        className="text-[13.5px] font-medium tracking-[-0.02em] truncate"
                        style={{ color: selected ? "var(--accent)" : "var(--fg)" }}
                      >
                        {c.name}
                      </span>
                      {c.verified && (
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke={selected ? "var(--accent)" : "var(--accent)"}
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="shrink-0"
                        >
                          <path d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                        </svg>
                      )}
                    </div>
                    <p
                      className="text-[12px] truncate"
                      style={{ color: "var(--fg-3)" }}
                    >
                      {c.role}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-1 shrink-0">
                    <StageBadge stage={c.stage} />
                    <RiskBadge risk={c.riskLevel} />
                  </div>
                </button>
              );
            })
          )}
        </div>
      </div>

      {/* ── Right: candidate detail ──────────────────────────────── */}
      <div className="overflow-hidden" style={{ background: "var(--bg)" }}>
        {selectedCandidate ? (
          <CandidateDetail candidate={selectedCandidate} />
        ) : (
          <EmptyDetail />
        )}
      </div>
    </div>
  );
}
