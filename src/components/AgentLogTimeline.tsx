import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import type { Id } from "../../convex/_generated/dataModel";
import { formatDistanceToNow } from "date-fns";
import { useState } from "react";
import clsx from "clsx";

// ─── Agent config ─────────────────────────────────────────────────────────────

const AGENT_ORDER = ["ResumeParser", "SkillMatcher", "Ranker", "FairnessAuditor"] as const;
type AgentName = (typeof AGENT_ORDER)[number];

const AGENT_META: Record<AgentName, { color: string; bg: string; icon: string; short: string }> = {
  ResumeParser:    { color: "var(--accent)", bg: "var(--accent-dim)",  icon: "📄", short: "Parses resumes" },
  SkillMatcher:    { color: "var(--green)",  bg: "var(--green-dim)",   icon: "🎯", short: "Evaluates skills" },
  Ranker:          { color: "var(--amber)",  bg: "var(--amber-dim)",   icon: "🏅", short: "Applies thresholds" },
  FairnessAuditor: { color: "var(--red)",    bg: "var(--red-dim)",     icon: "⚖️", short: "Audits fairness" },
};

// ─── Types ────────────────────────────────────────────────────────────────────

type AgentLog = {
  _id: Id<"agentLogs">;
  agentName: string;
  action: string;
  inputSummary: string;
  outputSummary: string;
  latencyMs: number;
  timestamp: number;
  candidateId?: Id<"candidates">;
};

// ─── AgentNode ────────────────────────────────────────────────────────────────

function AgentNode({
  name,
  logs,
  isLast,
  isExpanded,
  onToggle,
}: {
  name: AgentName;
  logs: AgentLog[];
  isLast: boolean;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const meta = AGENT_META[name];
  const count = logs.length;
  const avgLatency = count > 0 ? Math.round(logs.reduce((s, l) => s + l.latencyMs, 0) / count) : 0;
  const latest = logs.at(0);

  if (count === 0) {
    return (
      <div className="flex items-center gap-3 flex-1">
        <div className="flex flex-col items-center">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-[16px] opacity-30"
            style={{ background: "var(--bg-3)", border: "1px solid var(--border)" }}
          >
            {meta.icon}
          </div>
          {!isLast && (
            <div className="w-px h-4 mt-1" style={{ background: "var(--border)" }} />
          )}
        </div>
        <div className="flex-1 opacity-40">
          <p className="text-[12.5px] font-medium" style={{ color: "var(--fg)" }}>{name}</p>
          <p className="text-[11px]" style={{ color: "var(--fg-3)" }}>No activity</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-3 flex-1 min-w-0">
      {/* Spine */}
      <div className="flex flex-col items-center shrink-0">
        <button
          onClick={onToggle}
          className="w-9 h-9 rounded-full flex items-center justify-center text-[15px] transition-all hover:scale-110"
          style={{ background: meta.bg, border: `1.5px solid ${meta.color}` }}
          title={isExpanded ? "Collapse" : "Expand"}
        >
          {meta.icon}
        </button>
        {!isLast && (
          <div
            className="w-px flex-1 mt-1.5"
            style={{ background: `linear-gradient(to bottom, ${meta.color}55, var(--border))`, minHeight: "20px" }}
          />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 pb-4">
        <button
          onClick={onToggle}
          className="w-full text-left"
        >
          <div className="flex items-center justify-between mb-0.5">
            <span className="text-[13px] font-semibold" style={{ color: meta.color }}>
              {name}
            </span>
            <div className="flex items-center gap-2">
              <span
                className="text-[11px] font-medium px-2 py-0.5 rounded-full"
                style={{ background: meta.bg, color: meta.color }}
              >
                {count} {count === 1 ? "call" : "calls"}
              </span>
              <span className="text-[11px]" style={{ color: "var(--fg-3)" }}>
                avg {avgLatency}ms
              </span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--fg-3)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={clsx("transition-transform", isExpanded && "rotate-180")}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
          </div>
          <p className="text-[12px]" style={{ color: "var(--fg-2)" }}>
            {meta.short}
            {latest && (
              <span className="ml-2" style={{ color: "var(--fg-3)" }}>
                · {formatDistanceToNow(new Date(latest.timestamp), { addSuffix: true })}
              </span>
            )}
          </p>
        </button>

        {isExpanded && (
          <div className="mt-3 space-y-2 animate-fade-up">
            {logs.map((log) => (
              <div
                key={log._id}
                className="rounded-[8px] px-3 py-2.5"
                style={{ background: "var(--bg-3)", border: "1px solid var(--border)" }}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11.5px] font-medium" style={{ color: "var(--fg)" }}>
                    {log.action}
                  </span>
                  <span className="text-[11px] font-mono" style={{ color: "var(--fg-3)" }}>
                    {log.latencyMs}ms
                  </span>
                </div>
                <p className="text-[11.5px] mb-0.5" style={{ color: "var(--fg-3)" }}>
                  <span style={{ color: "var(--fg-2)" }}>In: </span>{log.inputSummary}
                </p>
                <p className="text-[11.5px]" style={{ color: "var(--fg-3)" }}>
                  <span style={{ color: "var(--fg-2)" }}>Out: </span>{log.outputSummary}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── AgentLogTimeline ─────────────────────────────────────────────────────────

interface Props {
  jobId: Id<"jobs">;
}

export function AgentLogTimeline({ jobId }: Props) {
  const logs = useQuery(api.functions.agentLogs.getAgentLogsForJob, { jobId, limit: 200 });
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggle = (name: string) =>
    setExpanded((prev) => ({ ...prev, [name]: !prev[name] }));

  if (!logs) {
    return (
      <div className="space-y-3">
        {AGENT_ORDER.map((a) => (
          <div key={a} className="h-12 rounded-[8px] animate-pulse" style={{ background: "var(--bg-3)" }} />
        ))}
      </div>
    );
  }

  if (logs.length === 0) {
    return (
      <div className="py-8 text-center">
        <p className="text-[13px]" style={{ color: "var(--fg-3)" }}>
          No agent activity yet. Submit candidates to start the pipeline.
        </p>
      </div>
    );
  }

  // Group by agent name; order matters
  const byAgent = new Map<string, AgentLog[]>();
  for (const log of [...logs].sort((a, b) => b.timestamp - a.timestamp)) {
    const bucket = byAgent.get(log.agentName) ?? [];
    bucket.push(log);
    byAgent.set(log.agentName, bucket);
  }

  // Stats
  const totalCalls = logs.length;
  const agentCount = byAgent.size;
  const totalLatency = logs.reduce((s, l) => s + l.latencyMs, 0);

  return (
    <div>
      {/* Summary bar */}
      <div
        className="flex items-center gap-4 rounded-[8px] px-4 py-2.5 mb-4"
        style={{ background: "var(--bg-3)" }}
      >
        <Stat label="Total calls" value={String(totalCalls)} />
        <div className="w-px h-5" style={{ background: "var(--border)" }} />
        <Stat label="Agents active" value={String(agentCount)} />
        <div className="w-px h-5" style={{ background: "var(--border)" }} />
        <Stat label="Total latency" value={`${totalLatency.toLocaleString()}ms`} />
        {logs[0] && (
          <>
            <div className="w-px h-5" style={{ background: "var(--border)" }} />
            <Stat
              label="Last activity"
              value={formatDistanceToNow(new Date(logs[0].timestamp), { addSuffix: true })}
            />
          </>
        )}
      </div>

      {/* Timeline */}
      <div className="flex flex-col">
        {AGENT_ORDER.map((name, i) => (
          <AgentNode
            key={name}
            name={name}
            logs={byAgent.get(name) ?? []}
            isLast={i === AGENT_ORDER.length - 1}
            isExpanded={!!expanded[name]}
            onToggle={() => toggle(name)}
          />
        ))}
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10.5px] uppercase tracking-wide mb-0.5" style={{ color: "var(--fg-3)" }}>
        {label}
      </p>
      <p className="text-[13px] font-semibold" style={{ color: "var(--fg)" }}>
        {value}
      </p>
    </div>
  );
}
