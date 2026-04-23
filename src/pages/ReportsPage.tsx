const FUNNEL = [
  { label: "Applications", n: "10", pct: "100%", color: "var(--accent)" },
  { label: "Screening",    n: "8",  pct: "80%",  color: "var(--accent)" },
  { label: "Interview",    n: "5",  pct: "50%",  color: "var(--amber)" },
  { label: "Review",       n: "3",  pct: "30%",  color: "var(--amber)" },
  { label: "Offer",        n: "2",  pct: "20%",  color: "var(--green)" },
  { label: "Accepted",     n: "2",  pct: "20%",  color: "var(--green)" },
] as const;

const WEEKS = [
  { w: "Mar 31", apps: 5 },
  { w: "Apr 7",  apps: 8 },
  { w: "Apr 14", apps: 6 },
  { w: "Apr 21", apps: 10 },
] as const;

const MAX_APPS = Math.max(...WEEKS.map((w) => w.apps));

const METRICS = [
  {
    label: "Avg. Time to Offer",
    value: "18 days",
    sub: "−3 days vs. last month",
    subColor: "var(--green)",
  },
  {
    label: "Check Completion Rate",
    value: "87%",
    sub: "+5% vs. last month",
    subColor: "var(--green)",
  },
  {
    label: "Offer Acceptance Rate",
    value: "100%",
    sub: "2 of 2 offers accepted",
    subColor: "var(--green)",
  },
] as const;

export default function ReportsPage() {
  return (
    <div className="h-full overflow-y-auto">
      <div className="p-5 max-w-[1200px] flex flex-col gap-4">

        {/* ── Top row: Funnel + Weekly trend ──────────────────────── */}
        <div className="grid grid-cols-2 gap-3.5">

          {/* Hiring Funnel */}
          <div
            className="rounded-[12px] animate-fade-up"
            style={{
              background: "var(--bg-2)",
              border: "1px solid var(--border)",
              padding: "22px",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <div
              className="text-[14px] font-medium mb-[18px]"
              style={{ color: "var(--fg)" }}
            >
              Hiring Funnel — April 2026
            </div>
            {FUNNEL.map(({ label, n, pct, color }, i) => (
              <div
                key={label}
                className="flex items-center gap-3 mb-2.5 animate-slide-in-left"
                style={{ animationDelay: `${i * 55}ms` }}
              >
                <span
                  className="text-[13px] shrink-0"
                  style={{ color: "var(--fg-2)", width: "88px" }}
                >
                  {label}
                </span>
                <div
                  className="flex-1 h-2.5 rounded-full overflow-hidden"
                  style={{ background: "var(--bg-3)" }}
                >
                  <div
                    className="h-full rounded-full"
                    style={{
                      background: color,
                      width: pct,
                      transition: "width 0.8s cubic-bezier(0.25,0.46,0.45,0.94)",
                    }}
                  />
                </div>
                <span
                  className="text-[13px] font-medium text-right"
                  style={{ color, width: "20px" }}
                >
                  {n}
                </span>
              </div>
            ))}
          </div>

          {/* Weekly Applications */}
          <div
            className="rounded-[12px] animate-fade-up"
            style={{
              background: "var(--bg-2)",
              border: "1px solid var(--border)",
              padding: "22px",
              boxShadow: "var(--shadow-sm)",
              animationDelay: "80ms",
            }}
          >
            <div
              className="text-[14px] font-medium mb-[18px]"
              style={{ color: "var(--fg)" }}
            >
              Weekly Applications
            </div>
            <div className="flex items-end gap-3.5 mb-2" style={{ height: "120px" }}>
              {WEEKS.map(({ w, apps }, i) => (
                <div
                  key={w}
                  className="flex-1 flex flex-col items-center gap-1.5"
                >
                  <div
                    className="w-full flex flex-col items-center gap-0.5 justify-end"
                    style={{ height: "100%" }}
                  >
                    <span
                      className="text-[12px] font-medium"
                      style={{ color: "var(--fg)" }}
                    >
                      {apps}
                    </span>
                    <div
                      className="w-full rounded-t-[6px] animate-fade-up"
                      style={{
                        background: "var(--accent)",
                        opacity: 0.85,
                        height: `${(apps / MAX_APPS) * 90}%`,
                        minHeight: "8px",
                        animationDelay: `${i * 80}ms`,
                        transition: "height 0.8s cubic-bezier(0.25,0.46,0.45,0.94)",
                      }}
                    />
                  </div>
                  <span
                    className="text-[11.5px] whitespace-nowrap"
                    style={{ color: "var(--fg-3)" }}
                  >
                    {w}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom row: metric summary cards ────────────────────── */}
        <div className="grid grid-cols-3 gap-3.5">
          {METRICS.map(({ label, value, sub, subColor }, i) => (
            <div
              key={label}
              className="rounded-[12px] animate-fade-up"
              style={{
                background: "var(--bg-2)",
                border: "1px solid var(--border)",
                padding: "20px 22px",
                boxShadow: "var(--shadow-sm)",
                animationDelay: `${i * 70}ms`,
              }}
            >
              <div className="text-[13px] mb-2.5" style={{ color: "var(--fg-2)" }}>
                {label}
              </div>
              <div
                className="text-[30px] font-medium tracking-[-0.04em] leading-none mb-1.5"
                style={{ color: "var(--fg)" }}
              >
                {value}
              </div>
              <div className="text-[12px]" style={{ color: subColor }}>
                {sub}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
