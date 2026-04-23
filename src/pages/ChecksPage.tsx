import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { formatDistanceToNow } from "date-fns";
import clsx from "clsx";

type CheckStatus = "pass" | "fail" | "pending";

function StatusIcon({ status }: { status: CheckStatus }) {
  if (status === "pass")
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    );
  if (status === "fail")
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    );
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );
}

function StatusBadge({ status }: { status: CheckStatus }) {
  const map: Record<CheckStatus, { bg: string; color: string; label: string }> = {
    pass:    { bg: "var(--green-dim)", color: "var(--green)", label: "Pass" },
    fail:    { bg: "var(--red-dim)",   color: "var(--red)",   label: "Fail" },
    pending: { bg: "var(--amber-dim)", color: "var(--amber)", label: "Pending" },
  };
  const s = map[status];
  return (
    <span
      className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium"
      style={{ background: s.bg, color: s.color }}
    >
      {s.label}
    </span>
  );
}

export default function ChecksPage() {
  const stats = useQuery(api.functions.backgroundChecks.countByStatus);
  const checks = useQuery(api.functions.backgroundChecks.listAllChecks, { limit: 100 });

  const STAT_CARDS = [
    {
      label: "Running",
      value: stats?.running ?? "—",
      color: "var(--amber)",
      dimColor: "var(--amber-dim)",
    },
    {
      label: "Completed Today",
      value: stats?.completed ?? "—",
      color: "var(--green)",
      dimColor: "var(--green-dim)",
    },
    {
      label: "Flagged",
      value: stats?.flagged ?? "—",
      color: "var(--red)",
      dimColor: "var(--red-dim)",
    },
  ] as const;

  return (
    <div className="h-full overflow-y-auto">
      <div className="p-6 max-w-[1100px]">
        {/* Stat row */}
        <div className="grid grid-cols-3 gap-3 mb-6">
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
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: card.color }}
                />
                <p className="text-[13px]" style={{ color: "var(--fg-2)" }}>
                  {card.label}
                </p>
              </div>
              <p
                className="text-[28px] font-medium tracking-[-0.03em] leading-none"
                style={{ color: "var(--fg)" }}
              >
                {card.value}
              </p>
            </div>
          ))}
        </div>

        {/* Checks list */}
        <div
          className="rounded-[10px] overflow-hidden animate-fade-in"
          style={{
            background: "var(--bg-2)",
            boxShadow: "var(--shadow-sm)",
            animationDelay: "120ms",
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
              All Checks
            </h2>
          </div>

          {!checks || checks.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 gap-3">
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--fg-3)"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
              </svg>
              <p className="text-[13px]" style={{ color: "var(--fg-3)" }}>
                No background checks yet.
              </p>
            </div>
          ) : (
            <div>
              {/* Table header */}
              <div
                className="grid px-5 py-2.5 border-b"
                style={{
                  gridTemplateColumns: "2fr 1fr 1fr auto",
                  borderColor: "var(--border)",
                }}
              >
                {["Check", "Candidate", "Date", "Status"].map((h) => (
                  <span
                    key={h}
                    className="text-[11px] font-semibold tracking-[0.02em] uppercase"
                    style={{ color: "var(--fg-3)" }}
                  >
                    {h}
                  </span>
                ))}
              </div>

              {checks.map((check, i) => (
                <div
                  key={check._id}
                  className={clsx(
                    "grid items-center px-5 py-3 border-b last:border-0 hover:bg-[--bg-3] transition-colors animate-slide-in-left"
                  )}
                  style={{
                    gridTemplateColumns: "2fr 1fr 1fr auto",
                    borderColor: "var(--border)",
                    animationDelay: `${i * 25}ms`,
                  }}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <StatusIcon status={check.status} />
                    <div className="min-w-0">
                      <p
                        className="text-[13px] font-medium truncate"
                        style={{ color: "var(--fg)" }}
                      >
                        {check.label}
                      </p>
                      <p
                        className="text-[12px] truncate"
                        style={{ color: "var(--fg-3)" }}
                      >
                        {check.detail}
                      </p>
                    </div>
                  </div>

                  <p
                    className="text-[13px] truncate"
                    style={{ color: "var(--fg-2)" }}
                  >
                    {check.candidate?.name ?? "Unknown"}
                  </p>

                  <p className="text-[12px]" style={{ color: "var(--fg-3)" }}>
                    {formatDistanceToNow(new Date(check._creationTime), {
                      addSuffix: true,
                    })}
                  </p>

                  <StatusBadge status={check.status} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
