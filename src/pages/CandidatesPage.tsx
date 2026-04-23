import { useRef, useState } from "react";
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
type DetailTab = "overview" | "checks" | "notes";

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

// ─── Stage & risk helpers ─────────────────────────────────────────────────────

function stageBg(stage: Stage) {
  const map: Record<Stage, string> = {
    Screening: "var(--accent-dim)",
    Interview: "var(--border)",
    Review:    "var(--amber-dim)",
    Offer:     "var(--green-dim)",
  };
  return map[stage] ?? "var(--bg-3)";
}

function stageColor(stage: Stage) {
  const map: Record<Stage, string> = {
    Screening: "var(--accent)",
    Interview: "var(--fg-3)",
    Review:    "var(--amber)",
    Offer:     "var(--green)",
  };
  return map[stage] ?? "var(--fg-2)";
}

function riskColor(risk: RiskLevel) {
  return risk === "high" ? "var(--red)" : risk === "medium" ? "var(--amber)" : "var(--green)";
}
function riskBg(risk: RiskLevel) {
  return risk === "high" ? "var(--red-dim)" : risk === "medium" ? "var(--amber-dim)" : "var(--green-dim)";
}

// ─── Score ring ───────────────────────────────────────────────────────────────

function ScoreRing({ score, size = 54 }: { score: number; size?: number }) {
  const r = (size - 7) / 2;
  const circ = 2 * Math.PI * r;
  const color = score >= 80 ? "var(--green)" : score >= 60 ? "var(--amber)" : "var(--red)";
  return (
    <div style={{ position: "relative", width: size, height: size, flexShrink: 0 }}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        style={{ transform: "rotate(-90deg)" }}
      >
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--bg-3)" strokeWidth={3.5} />
        <circle
          cx={size / 2} cy={size / 2} r={r}
          fill="none"
          stroke={color}
          strokeWidth={3.5}
          strokeDasharray={`${(circ * score) / 100} ${circ * (1 - score / 100)}`}
          strokeLinecap="round"
          style={{ transition: "stroke-dasharray 0.9s cubic-bezier(0.25,0.46,0.45,0.94)" }}
        />
      </svg>
      <span
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          fontSize: size * 0.24,
          fontWeight: 600,
          letterSpacing: "-0.03em",
          color,
        }}
      >
        {score}
      </span>
    </div>
  );
}

// ─── Check item ───────────────────────────────────────────────────────────────

function CheckItem({
  label,
  detail,
  status,
  index,
}: {
  label: string;
  detail: string;
  status: CheckStatus;
  index: number;
}) {
  const isPass = status === "pass";
  const isFail = status === "fail";
  const color = isPass ? "var(--green)" : isFail ? "var(--red)" : "var(--amber)";
  const bg    = isPass ? "var(--green-dim)" : isFail ? "var(--red-dim)" : "var(--amber-dim)";
  const icon  = isPass
    ? <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    : isFail
    ? <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
    : <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />;

  return (
    <div
      className="flex items-center gap-3 py-[11px] border-b last:border-0 animate-fade-up"
      style={{ borderColor: "var(--border-2)", animationDelay: `${index * 40}ms` }}
    >
      <span className="shrink-0" style={{ color }}>
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          {icon}
        </svg>
      </span>
      <div className="flex-1 min-w-0">
        <div className="text-[13.5px] font-medium" style={{ color: "var(--fg)" }}>{label}</div>
        <div className="text-[12px] mt-0.5" style={{ color: "var(--fg-3)" }}>{detail}</div>
      </div>
      <span
        className="text-[11.5px] font-medium px-2.5 py-0.5 rounded-full capitalize shrink-0"
        style={{ background: bg, color }}
      >
        {status}
      </span>
    </div>
  );
}

// ─── Candidate detail panel ───────────────────────────────────────────────────

function CandidateDetail({ candidate }: { candidate: Candidate }) {
  const [tab, setTab] = useState<DetailTab>("overview");
  const checks = useQuery(api.functions.backgroundChecks.listForCandidate, {
    candidateId: candidate._id as Id<"candidates">,
  });
  const advanceStage = useMutation(api.functions.candidates.updateCandidateStatusPublic);

  const av = avatarColors(candidate.name);
  const initials = getInitials(candidate.name);

  const passes  = (checks ?? []).filter((c) => c.status === "pass").length;
  const fails   = (checks ?? []).filter((c) => c.status === "fail").length;
  const pending = (checks ?? []).filter((c) => c.status === "pending").length;

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
  }

  return (
    <div key={candidate._id} className="animate-fade-up" style={{ animationDelay: "0ms" }}>
      {/* Hero header */}
      <div
        className="px-6 pt-6 pb-0 border-b"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="flex items-start gap-4 mb-4">
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center text-[15px] font-semibold shrink-0"
            style={{ background: av.bg, border: av.border, color: av.color }}
          >
            {initials}
          </div>
          <div className="flex-1 min-w-0 pt-0.5">
            <div className="flex items-center gap-2">
              <h2
                className="text-[19px] font-medium tracking-[-0.025em]"
                style={{ color: "var(--fg)" }}
              >
                {candidate.name}
              </h2>
              {candidate.verified && (
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
            </div>
            <div className="text-[13.5px] mt-0.5" style={{ color: "var(--fg-2)" }}>
              {candidate.role}
            </div>
            <div className="flex flex-wrap items-center gap-2 mt-2">
              <span
                className="text-[12px] px-2 py-0.5 rounded-full font-medium"
                style={{ background: stageBg(candidate.stage), color: stageColor(candidate.stage) }}
              >
                Stage: {candidate.stage}
              </span>
              <span
                className="text-[12px] px-2 py-0.5 rounded-full font-medium capitalize"
                style={{ background: riskBg(candidate.riskLevel), color: riskColor(candidate.riskLevel) }}
              >
                Risk: {candidate.riskLevel}
              </span>
              <span
                className="text-[12px] px-2 py-0.5 rounded-full"
                style={{ background: "var(--bg-3)", color: "var(--fg-3)" }}
              >
                Applied {new Date(candidate.appliedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
              </span>
              {candidate.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[12px] px-2 py-0.5 rounded-full"
                  style={{ background: "var(--bg-3)", color: "var(--fg-2)" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          {candidate.score !== null && <ScoreRing score={candidate.score} size={58} />}
        </div>

        {/* Tabs */}
        <div className="flex gap-0">
          {(["overview", "checks", "notes"] as const).map((id) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              className="px-4 py-[9px] text-[13px] font-medium capitalize transition-colors"
              style={{
                color: tab === id ? "var(--fg)" : "var(--fg-3)",
                paddingBottom: "7px",
                boxShadow: tab === id ? `inset 0 -2px 0 var(--accent)` : "none",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "inherit",
              }}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Tab content */}
      <div className="px-6 py-[22px]">
        {tab === "overview" && (
          <div className="flex flex-col gap-5 animate-fade-in">
            {/* Check summary mini-cards */}
            <div className="grid grid-cols-3 gap-2.5">
              {(
                [
                  [passes,  "Passed",  "var(--green)", "var(--green-dim)"],
                  [pending, "Pending", "var(--amber)", "var(--amber-dim)"],
                  [fails,   "Failed",  "var(--red)",   "var(--red-dim)"],
                ] as const
              ).map(([v, l, color, bg]) => (
                <div
                  key={l}
                  className="rounded-[8px] px-3.5 py-3"
                  style={{ background: bg, border: `1px solid ${color}33` }}
                >
                  <div
                    className="text-[22px] font-medium tracking-[-0.04em]"
                    style={{ color }}
                  >
                    {v}
                  </div>
                  <div className="text-[12px] mt-0.5" style={{ color }}>
                    {l}
                  </div>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex gap-2">
              <button
                onClick={handleAdvance}
                disabled={candidate.status === "hired"}
                className="flex-1 py-2.5 rounded-[8px] text-[13.5px] font-medium transition-all hover:-translate-y-px hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed"
                style={{
                  background: "var(--accent)",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  boxShadow: "0 2px 8px var(--accent-mid)",
                }}
              >
                Advance Stage →
              </button>
              <button
                className="flex-1 py-2.5 rounded-[8px] text-[13.5px] font-medium border transition-all hover:-translate-y-px"
                style={{
                  background: "var(--bg-3)",
                  color: "var(--fg)",
                  border: "1px solid var(--border)",
                  cursor: "pointer",
                  fontFamily: "inherit",
                }}
              >
                Flag for Review
              </button>
            </div>
          </div>
        )}

        {tab === "checks" && (
          <div className="animate-fade-in">
            <div
              className="text-[12px] font-semibold tracking-[0.06em] uppercase mb-3"
              style={{ color: "var(--fg-3)" }}
            >
              Background Checks · {candidate.name}
            </div>
            {!checks || checks.length === 0 ? (
              <p className="text-[13px] py-8 text-center" style={{ color: "var(--fg-3)" }}>
                No checks run yet.
              </p>
            ) : (
              checks.map((check, i) => (
                <CheckItem
                  key={check._id}
                  label={check.label}
                  detail={check.detail}
                  status={check.status}
                  index={i}
                />
              ))
            )}
          </div>
        )}

        {tab === "notes" && (
          <div className="animate-fade-in">
            <div
              className="text-[12px] font-semibold tracking-[0.06em] uppercase mb-3"
              style={{ color: "var(--fg-3)" }}
            >
              Hiring Notes
            </div>
            <p
              className="text-[14px] leading-[1.65] rounded-[8px] px-4 py-4"
              style={{
                color: "var(--fg-2)",
                background: "var(--bg-3)",
                border: "1px solid var(--border)",
              }}
            >
              {candidate.email}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Empty state ──────────────────────────────────────────────────────────────

function EmptyDetail() {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-3" style={{ color: "var(--fg-3)" }}>
      <div
        className="w-[52px] h-[52px] rounded-full flex items-center justify-center"
        style={{ background: "var(--bg-3)" }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0z M12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      </div>
      <span className="text-[14px] font-medium" style={{ color: "var(--fg-3)" }}>
        Select a candidate
      </span>
      <span className="text-[13px]" style={{ color: "var(--fg-3)" }}>
        Details appear here
      </span>
    </div>
  );
}

// ─── Stage filter tabs ────────────────────────────────────────────────────────

const STAGE_FILTERS = ["All", "Screening", "Interview", "Review", "Offer"] as const;
type StageFilter = (typeof STAGE_FILTERS)[number];

// ─── Candidates page ──────────────────────────────────────────────────────────

export default function CandidatesPage() {
  const candidates = useQuery(api.functions.candidates.listAllCandidates) as
    | Candidate[]
    | undefined;
  const { selectedCandidateId, setSelectedCandidateId } = useUIStore();
  const { searchQuery, setFilter } = useFilterStore();
  const searchRef = useRef<HTMLInputElement>(null);
  const [stageFilter, setStageFilter] = useState<StageFilter>("All");

  const filtered = (candidates ?? []).filter((c) => {
    const matchStage = stageFilter === "All" || c.stage === stageFilter;
    if (!matchStage) return false;
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return c.name.toLowerCase().includes(q) || c.role.toLowerCase().includes(q);
  });

  const selectedCandidate =
    (candidates ?? []).find((c) => c._id === selectedCandidateId) ?? null;

  return (
    <div
      className="h-full grid overflow-hidden"
      style={{ gridTemplateColumns: "320px 1fr" }}
    >
      {/* ── Left: candidate list ──────────────────────────────────── */}
      <div
        className="flex flex-col border-r overflow-hidden"
        style={{
          background: "var(--bg-2)",
          borderColor: "var(--border)",
          boxShadow: "var(--shadow-sm)",
        }}
      >
        {/* Header + search + stage tabs */}
        <div
          className="px-3.5 pt-4 pb-3 border-b shrink-0"
          style={{ borderColor: "var(--border)" }}
        >
          <div className="flex items-center justify-between mb-2.5">
            <span className="text-[14px] font-medium" style={{ color: "var(--fg)" }}>
              All Candidates
            </span>
            <span
              className="text-[12px] px-2 py-0.5 rounded-full"
              style={{ background: "var(--bg-3)", color: "var(--fg-3)" }}
            >
              {filtered.length}
            </span>
          </div>

          {/* Search */}
          <div className="relative mb-2.5">
            <svg
              className="absolute left-2.5 top-1/2 -translate-y-1/2"
              width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="var(--fg-3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
            <input
              ref={searchRef}
              type="text"
              placeholder="Search name, role, team…"
              value={searchQuery}
              onChange={(e) => setFilter("searchQuery", e.target.value)}
              className="w-full pl-8 pr-3 py-2 text-[13px] rounded-[8px] outline-none transition-all"
              style={{
                background: "var(--bg-3)",
                border: "1px solid var(--border)",
                color: "var(--fg)",
                fontFamily: "inherit",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "var(--accent)";
                e.target.style.boxShadow = "0 0 0 2.5px var(--accent-dim)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "var(--border)";
                e.target.style.boxShadow = "none";
              }}
            />
          </div>

          {/* Stage filter pills */}
          <div className="flex gap-1 overflow-x-auto pb-0.5">
            {STAGE_FILTERS.map((s) => (
              <button
                key={s}
                onClick={() => setStageFilter(s)}
                className="px-2.5 py-1 rounded-full text-[12px] font-medium whitespace-nowrap transition-all shrink-0"
                style={{
                  background: stageFilter === s ? "var(--accent)" : "var(--bg-3)",
                  color: stageFilter === s ? "#fff" : "var(--fg-3)",
                  border: `1px solid ${stageFilter === s ? "var(--accent)" : "var(--border)"}`,
                  cursor: "pointer",
                  fontFamily: "inherit",
                }}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto px-1.5 py-2">
          {!candidates ? (
            <div className="flex items-center justify-center h-32">
              <p className="text-[13px]" style={{ color: "var(--fg-3)" }}>Loading…</p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="flex items-center justify-center h-32">
              <p className="text-[13px]" style={{ color: "var(--fg-3)" }}>No results</p>
            </div>
          ) : (
            filtered.map((c, i) => {
              const av = avatarColors(c.name);
              const initials = getInitials(c.name);
              const selected = c._id === selectedCandidateId;

              return (
                <div
                  key={c._id}
                  onClick={() => setSelectedCandidateId(selected ? null : c._id)}
                  className={clsx(
                    "flex items-center gap-3 px-2.5 py-2.5 rounded-[8px] cursor-pointer transition-colors animate-slide-in-left",
                    !selected && "hover:bg-[--bg-3]"
                  )}
                  style={{
                    background: selected ? "var(--accent-dim)" : "transparent",
                    borderLeft: `2.5px solid ${selected ? "var(--accent)" : "transparent"}`,
                    animationDelay: `${i * 35}ms`,
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
                        className="text-[14px] font-medium truncate"
                        style={{ color: selected ? "var(--accent)" : "var(--fg)" }}
                      >
                        {c.name}
                      </span>
                      {c.verified && (
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                    </div>
                    <p className="text-[12px] truncate mt-0.5" style={{ color: "var(--fg-3)" }}>
                      {c.role}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-1 shrink-0">
                    <span
                      className="text-[11px] font-medium px-2 py-0.5 rounded-full whitespace-nowrap"
                      style={{ background: stageBg(c.stage), color: stageColor(c.stage) }}
                    >
                      {c.stage}
                    </span>
                    <div className="flex items-center gap-1">
                      <span
                        className="text-[11px] font-medium capitalize px-2 py-0.5 rounded-full"
                        style={{ background: riskBg(c.riskLevel), color: riskColor(c.riskLevel) }}
                      >
                        {c.riskLevel} risk
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* ── Right: candidate detail ───────────────────────────────── */}
      <div
        className="overflow-y-auto"
        style={{
          background: "var(--bg-2)",
          border: "1px solid var(--border)",
          boxShadow: "var(--shadow-sm)",
        }}
      >
        {selectedCandidate ? (
          <CandidateDetail candidate={selectedCandidate} />
        ) : (
          <EmptyDetail />
        )}
      </div>
    </div>
  );
}
