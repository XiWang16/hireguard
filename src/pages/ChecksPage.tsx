import { useState } from "react";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import clsx from "clsx";

type CheckStatus = "pass" | "fail" | "pending";

// ─── Avatar ───────────────────────────────────────────────────────────────────

function avatarColors(name: string) {
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

// ─── Status icon ─────────────────────────────────────────────────────────────

function StatusIcon({ status, size = 16 }: { status: CheckStatus; size?: number }) {
  const color =
    status === "pass" ? "var(--green)" : status === "fail" ? "var(--red)" : "var(--amber)";
  const d =
    status === "pass"
      ? "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      : status === "fail"
        ? "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        : "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
    >
      <path d={d} />
    </svg>
  );
}

// ─── Check item row ───────────────────────────────────────────────────────────

function CheckDetailItem({
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
  const color =
    status === "pass" ? "var(--green)" : status === "fail" ? "var(--red)" : "var(--amber)";
  const bg =
    status === "pass" ? "var(--green-dim)" : status === "fail" ? "var(--red-dim)" : "var(--amber-dim)";

  return (
    <div
      className="flex items-center gap-3 py-[11px] border-b last:border-0 animate-fade-up"
      style={{ borderColor: "var(--border-2)", animationDelay: `${index * 40}ms` }}
    >
      <StatusIcon status={status} size={17} />
      <div className="flex-1 min-w-0">
        <div className="text-[13.5px] font-medium" style={{ color: "var(--fg)" }}>
          {label}
        </div>
        <div className="text-[12px] mt-0.5" style={{ color: "var(--fg-3)" }}>
          {detail}
        </div>
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

// ─── Score ring (small) ───────────────────────────────────────────────────────

function ScoreRing({ score, size = 44 }: { score: number; size?: number }) {
  const r = (size - 7) / 2;
  const circ = 2 * Math.PI * r;
  const color = score >= 80 ? "var(--green)" : score >= 60 ? "var(--amber)" : "var(--red)";
  return (
    <div style={{ position: "relative", width: size, height: size, flexShrink: 0 }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ transform: "rotate(-90deg)" }}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--bg-3)" strokeWidth={3.5} />
        <circle
          cx={size / 2} cy={size / 2} r={r}
          fill="none" stroke={color} strokeWidth={3.5}
          strokeDasharray={`${(circ * score) / 100} ${circ * (1 - score / 100)}`}
          strokeLinecap="round"
          style={{ transition: "stroke-dasharray 0.9s cubic-bezier(0.25,0.46,0.45,0.94)" }}
        />
      </svg>
      <span style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%,-50%)",
        fontSize: size * 0.24, fontWeight: 600, letterSpacing: "-0.03em", color,
      }}>
        {score}
      </span>
    </div>
  );
}

// ─── Checks page ──────────────────────────────────────────────────────────────

type SelectedCandidate = {
  _id: string;
  name: string;
  role: string;
  score: number | null;
  avatar?: string;
};

export default function ChecksPage() {
  const allChecks = useQuery(api.functions.backgroundChecks.listAllChecks, { limit: 200 });
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // Build per-candidate check data from flat list
  const candidateMap = new Map<string, { candidate: SelectedCandidate; checks: typeof allChecks }>();
  for (const check of allChecks ?? []) {
    if (!check.candidate) continue;
    const id = check.candidateId as string;
    if (!candidateMap.has(id)) {
      const score = (check.candidate as { score?: number }).score ?? null;
      candidateMap.set(id, {
        candidate: { _id: id, name: check.candidate.name, role: check.candidate.role ?? "", score },
        checks: [],
      });
    }
    candidateMap.get(id)!.checks!.push(check);
  }
  const candidateList = Array.from(candidateMap.values());

  const selectedEntry = candidateList.find((e) => e.candidate._id === selectedId) ?? null;

  const totalChecks = (allChecks ?? []).length;
  const passCount   = (allChecks ?? []).filter((c) => c.status === "pass").length;
  const pendingCount = (allChecks ?? []).filter((c) => c.status === "pending").length;
  const failCount   = (allChecks ?? []).filter((c) => c.status === "fail").length;

  const STAT_CARDS = [
    { label: "Total Checks", value: totalChecks, color: "var(--fg)",    bg: "var(--bg-2)" },
    { label: "Passed",       value: passCount,   color: "var(--green)", bg: "var(--green-dim)" },
    { label: "Pending",      value: pendingCount, color: "var(--amber)", bg: "var(--amber-dim)" },
    { label: "Failed",       value: failCount,   color: "var(--red)",   bg: "var(--red-dim)" },
  ] as const;

  return (
    <div className="h-full overflow-y-auto">
      <div className="p-5 max-w-[1360px] flex flex-col gap-4">

        {/* ── Stat cards ──────────────────────────────────────────── */}
        <div className="grid grid-cols-4 gap-3.5">
          {STAT_CARDS.map((card, i) => (
            <div
              key={card.label}
              className="rounded-[12px] animate-fade-up"
              style={{
                background: card.bg,
                border: "1px solid var(--border)",
                padding: "20px 22px",
                boxShadow: "var(--shadow-sm)",
                animationDelay: `${i * 60}ms`,
              }}
            >
              <div
                className="text-[13px] mb-2.5 opacity-75"
                style={{ color: card.color === "var(--fg)" ? "var(--fg-2)" : card.color }}
              >
                {card.label}
              </div>
              <div
                className="text-[32px] font-medium tracking-[-0.04em] leading-none"
                style={{ color: card.color }}
              >
                {allChecks === undefined ? "—" : card.value}
              </div>
            </div>
          ))}
        </div>

        {/* ── Split pane ──────────────────────────────────────────── */}
        <div
          className="grid gap-3.5 animate-fade-in"
          style={{ gridTemplateColumns: "1fr 1.4fr", animationDelay: "120ms" }}
        >
          {/* By Candidate */}
          <div
            className="rounded-[12px] overflow-hidden"
            style={{
              background: "var(--bg-2)",
              border: "1px solid var(--border)",
              padding: "18px 14px",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <div
              className="text-[13.5px] font-medium mb-3.5 px-1"
              style={{ color: "var(--fg)" }}
            >
              By Candidate
            </div>

            {!allChecks ? (
              <p className="text-[13px] text-center py-8" style={{ color: "var(--fg-3)" }}>Loading…</p>
            ) : candidateList.length === 0 ? (
              <p className="text-[13px] text-center py-8" style={{ color: "var(--fg-3)" }}>No check data yet.</p>
            ) : (
              candidateList.map((entry, i) => {
                const av = avatarColors(entry.candidate.name);
                const checks = entry.checks ?? [];
                const p = checks.filter((c) => c.status === "pass").length;
                const f = checks.filter((c) => c.status === "fail").length;
                const pd = checks.filter((c) => c.status === "pending").length;
                const overall: CheckStatus = f > 0 ? "fail" : pd > 0 ? "pending" : "pass";
                const isSelected = selectedId === entry.candidate._id;

                return (
                  <div
                    key={entry.candidate._id}
                    onClick={() =>
                      setSelectedId(isSelected ? null : entry.candidate._id)
                    }
                    className={clsx(
                      "flex items-center gap-2.5 px-2.5 py-2.5 rounded-[8px] cursor-pointer transition-colors animate-slide-in-left",
                      !isSelected && "hover:bg-[--bg-3]"
                    )}
                    style={{
                      background: isSelected ? "var(--accent-dim)" : "transparent",
                      animationDelay: `${i * 30}ms`,
                    }}
                  >
                    <div
                      className="w-[30px] h-[30px] rounded-full flex items-center justify-center text-[10px] font-semibold shrink-0"
                      style={{ background: av.bg, border: av.border, color: av.color }}
                    >
                      {av.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[13px] font-medium truncate" style={{ color: "var(--fg)" }}>
                        {entry.candidate.name}
                      </div>
                      <div className="text-[11.5px] mt-0.5" style={{ color: "var(--fg-3)" }}>
                        {p}/{checks.length} passed
                      </div>
                    </div>
                    <StatusIcon status={overall} size={16} />
                  </div>
                );
              })
            )}
          </div>

          {/* Check detail */}
          <div
            className="rounded-[12px]"
            style={{
              background: "var(--bg-2)",
              border: "1px solid var(--border)",
              padding: "22px",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            {selectedEntry ? (
              <div key={selectedEntry.candidate._id} className="animate-fade-up">
                <div className="flex items-center gap-3 mb-5">
                  {(() => {
                    const av = avatarColors(selectedEntry.candidate.name);
                    return (
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center text-[12px] font-semibold shrink-0"
                        style={{ background: av.bg, border: av.border, color: av.color }}
                      >
                        {av.initials}
                      </div>
                    );
                  })()}
                  <div className="flex-1 min-w-0">
                    <div className="text-[15px] font-medium" style={{ color: "var(--fg)" }}>
                      {selectedEntry.candidate.name}
                    </div>
                    <div className="text-[12.5px] mt-0.5" style={{ color: "var(--fg-3)" }}>
                      {selectedEntry.candidate.role}
                    </div>
                  </div>
                  {selectedEntry.candidate.score !== null && (
                    <ScoreRing score={selectedEntry.candidate.score ?? 0} size={44} />
                  )}
                </div>
                {(selectedEntry.checks ?? []).map((ck, i) => (
                  <CheckDetailItem
                    key={ck._id}
                    label={ck.label}
                    detail={ck.detail}
                    status={ck.status}
                    index={i}
                  />
                ))}
              </div>
            ) : (
              <div
                className="h-full min-h-[200px] flex flex-col items-center justify-center gap-2.5"
                style={{ color: "var(--fg-3)" }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-2.981z" />
                </svg>
                <span className="text-[13.5px] font-medium" style={{ color: "var(--fg-3)" }}>
                  Select a candidate
                </span>
                <span className="text-[13px]" style={{ color: "var(--fg-3)" }}>
                  View their check details
                </span>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
