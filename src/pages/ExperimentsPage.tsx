import { useAction, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import clsx from "clsx";

// ─── Experiment metadata ──────────────────────────────────────────────────────

const EXPERIMENTS = [
  {
    id: "exp1",
    number: "01",
    title: "Demographic Firewall",
    tag: "Identity Blindness",
    tagColor: "var(--accent)",
    tagBg: "var(--accent-dim)",
    summary:
      "Six candidates in three matched pairs. Within each pair the parsed qualifications are identical; only the name and demographics differ. Proves that the SkillMatcher never sees demographic signals.",
    hypothesis:
      "Identical parsedData → identical scores, regardless of gender, ethnicity, or age band.",
    candidates: "6 candidates · 3 matched pairs",
    jobKey: "feJobId" as const,
    jobTitle: "Senior Frontend Engineer",
    result: {
      label: "Gender AIR = 1.00",
      detail: "Pairs score within 0 pts of each other. Firewall confirmed.",
      flagged: false,
    },
    links: [
      { label: "Pipeline", path: "/jobs/$id" },
      { label: "Audit", path: "/jobs/$id/audit" },
    ],
  },
  {
    id: "exp2",
    number: "02",
    title: "Adverse Impact Detection",
    tag: "Bias Detection",
    tagColor: "var(--red)",
    tagBg: "var(--red-dim)",
    summary:
      "30 candidates for a PM role whose description contains prestige-bias criteria (top-10 MBA, Fortune 500). Honest evaluation of a biased requirement produces biased outcomes. FairnessAuditor catches it.",
    hypothesis:
      "Credential-prestige criteria produce statistically significant adverse impact on gender and ethnicity.",
    candidates: "30 candidates · 15M / 15F",
    jobKey: "pmJobId" as const,
    jobTitle: "Senior Product Manager — B2B SaaS",
    result: {
      label: "FLAGGED ⚠️ — 2 dimensions",
      detail: "Gender AIR = 0.44 (p=0.018). Ethnicity: Black AIR = 0.29 (p=0.003).",
      flagged: true,
    },
    links: [
      { label: "Pipeline", path: "/jobs/$id" },
      { label: "Audit", path: "/jobs/$id/audit" },
    ],
  },
  {
    id: "exp3",
    number: "03",
    title: "Pipeline Walkthrough",
    tag: "Merit over Pedigree",
    tagColor: "var(--green)",
    tagBg: "var(--green-dim)",
    summary:
      "10 data engineering candidates with diverse backgrounds. Kevin O'Brien (bootcamp → Stripe) outscores Dr. Nadia Volkov (PhD Statistics) because the role requires pipeline tooling, not academic ML.",
    hypothesis:
      "A pipeline-skills rubric correctly ranks bootcamp + production experience above PhD + academic ML when the job requires dbt/Airflow/SQL.",
    candidates: "10 candidates · diverse educational paths",
    jobKey: "deJobId" as const,
    jobTitle: "Data Engineer",
    result: {
      label: "Clean — Gender AIR = 1.00",
      detail: "Bootcamp grad (77) > PhD (58). Full agent log chain visible.",
      flagged: false,
    },
    links: [
      { label: "Pipeline", path: "/jobs/$id" },
      { label: "Audit", path: "/jobs/$id/audit" },
    ],
  },
  {
    id: "exp4",
    number: "04",
    title: "Remediation Loop",
    tag: "Governance Cycle",
    tagColor: "var(--amber)",
    tagBg: "var(--amber-dim)",
    summary:
      "Second audit on the PM job after the description is revised. Gender AIR improves from 0.44 → 0.89 (passes). Racial gaps persist — showing rubric changes alone don't fix top-of-funnel underrepresentation.",
    hypothesis:
      "Removing prestige criteria improves gender equity in one cycle but cannot resolve racial gaps that originate at the sourcing stage.",
    candidates: "Same 30 PM candidates, revised rubric",
    jobKey: "pmJobId" as const,
    jobTitle: "Senior Product Manager — B2B SaaS",
    result: {
      label: "Partial improvement",
      detail: "Gender AIR: 0.44 → 0.89 ✓. Black AIR = 0.25 persists. Sourcing gap.",
      flagged: true,
    },
    links: [
      { label: "Audit history", path: "/jobs/$id/audit" },
    ],
  },
] as const;

// ─── ResultBadge ──────────────────────────────────────────────────────────────

function ResultBadge({ flagged, label }: { flagged: boolean; label: string }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[12px] font-medium"
      style={{
        background: flagged ? "var(--amber-dim)" : "var(--green-dim)",
        color: flagged ? "var(--amber)" : "var(--green)",
      }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full inline-block"
        style={{ background: flagged ? "var(--amber)" : "var(--green)" }}
      />
      {label}
    </span>
  );
}

// ─── ExperimentCard ───────────────────────────────────────────────────────────

function ExperimentCard({
  exp,
  jobId,
  index,
}: {
  exp: (typeof EXPERIMENTS)[number];
  jobId: string | null;
  index: number;
}) {
  return (
    <div
      className="rounded-[12px] flex flex-col gap-0 overflow-hidden animate-fade-up"
      style={{
        background: "var(--bg-2)",
        border: "1px solid var(--border)",
        boxShadow: "var(--shadow-sm)",
        animationDelay: `${index * 80}ms`,
      }}
    >
      {/* Header */}
      <div className="px-5 pt-5 pb-4">
        <div className="flex items-start justify-between mb-3">
          <span
            className="text-[11px] font-mono tracking-widest uppercase"
            style={{ color: "var(--fg-3)" }}
          >
            {exp.number}
          </span>
          <span
            className="text-[11px] font-medium px-2.5 py-0.5 rounded-full"
            style={{ background: exp.tagBg, color: exp.tagColor }}
          >
            {exp.tag}
          </span>
        </div>
        <h3
          className="text-[15px] font-semibold tracking-[-0.02em] mb-1"
          style={{ color: "var(--fg)" }}
        >
          {exp.title}
        </h3>
        <p className="text-[12.5px] leading-relaxed mb-3" style={{ color: "var(--fg-2)" }}>
          {exp.summary}
        </p>
        <div className="flex items-center gap-1.5 flex-wrap">
          <span
            className="text-[11px] px-2 py-0.5 rounded-full"
            style={{ background: "var(--bg-3)", color: "var(--fg-3)" }}
          >
            {exp.candidates}
          </span>
          <span
            className="text-[11px] px-2 py-0.5 rounded-full"
            style={{ background: "var(--bg-3)", color: "var(--fg-3)" }}
          >
            {exp.jobTitle}
          </span>
        </div>
      </div>

      {/* Hypothesis */}
      <div
        className="mx-5 rounded-[8px] px-3.5 py-2.5 mb-4"
        style={{ background: "var(--bg-3)" }}
      >
        <p className="text-[11px] uppercase tracking-wide mb-1" style={{ color: "var(--fg-3)" }}>
          Hypothesis
        </p>
        <p className="text-[12.5px] leading-snug" style={{ color: "var(--fg-2)" }}>
          {exp.hypothesis}
        </p>
      </div>

      {/* Result */}
      <div
        className="px-5 pb-4 border-t pt-4 flex flex-col gap-2"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="flex items-center justify-between">
          <p className="text-[11px] uppercase tracking-wide" style={{ color: "var(--fg-3)" }}>
            Expected result
          </p>
          <ResultBadge flagged={exp.result.flagged} label={exp.result.label} />
        </div>
        <p className="text-[12px]" style={{ color: "var(--fg-2)" }}>
          {exp.result.detail}
        </p>
      </div>

      {/* Links */}
      {jobId && (
        <div
          className="px-5 pb-5 flex gap-2"
          style={{ borderTop: "1px solid var(--border)", paddingTop: "14px", marginTop: "0" }}
        >
          {exp.links.map((link) => (
            <Link
              key={link.path}
              to={link.path.replace("$id", jobId) as never}
              className="text-[12.5px] font-medium px-3 py-1.5 rounded-[6px] transition-all hover:opacity-80"
              style={{
                background: "var(--bg-3)",
                color: "var(--fg)",
                border: "1px solid var(--border)",
              }}
            >
              {link.label} →
            </Link>
          ))}
        </div>
      )}
      {!jobId && (
        <div className="px-5 pb-5 pt-3.5" style={{ borderTop: "1px solid var(--border)" }}>
          <span className="text-[12px]" style={{ color: "var(--fg-3)" }}>
            Load demo data to view results
          </span>
        </div>
      )}
    </div>
  );
}

// ─── Pipeline diagram ─────────────────────────────────────────────────────────

const AGENTS = [
  { name: "ResumeParser",     role: "Extracts skills, work history, education from resume text",        color: "var(--accent)" },
  { name: "SkillMatcher",     role: "Scores against job requirements · Demographics stripped before LLM", color: "var(--green)" },
  { name: "Ranker",           role: "Applies shortlist/reject thresholds across the full cohort",        color: "var(--amber)" },
  { name: "FairnessAuditor",  role: "Computes AIRs · Chi-square tests · Writes audit report · Alerts",  color: "var(--red)" },
];

function PipelineDiagram() {
  return (
    <div
      className="rounded-[12px] px-5 py-5 mb-6 animate-fade-up"
      style={{ background: "var(--bg-2)", border: "1px solid var(--border)", boxShadow: "var(--shadow-sm)" }}
    >
      <p className="text-[11px] uppercase tracking-wide mb-4" style={{ color: "var(--fg-3)" }}>
        Agent pipeline
      </p>
      <div className="flex items-start gap-0">
        {AGENTS.map((agent, i) => (
          <div key={agent.name} className="flex items-start flex-1">
            <div className="flex-1 min-w-0">
              <div
                className="flex items-center gap-2 mb-1.5 px-3 py-2.5 rounded-[8px]"
                style={{ background: "var(--bg-3)" }}
              >
                <div className="w-2 h-2 rounded-full shrink-0" style={{ background: agent.color }} />
                <span className="text-[12.5px] font-medium truncate" style={{ color: "var(--fg)" }}>
                  {agent.name}
                </span>
              </div>
              <p className="text-[11.5px] px-1 leading-snug" style={{ color: "var(--fg-3)" }}>
                {agent.role}
              </p>
            </div>
            {i < AGENTS.length - 1 && (
              <div className="flex items-center mt-[14px] px-1.5 shrink-0">
                <svg width="18" height="10" viewBox="0 0 18 10" fill="none">
                  <path d="M1 5h14M11 1l4 4-4 4" stroke="var(--fg-3)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ExperimentsPage() {
  const status = useQuery(api.functions.seed.getSeedStatus, {});
  const seedAction = useAction(api.functions.seed.seedDemoData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSeed = async () => {
    setLoading(true);
    setError(null);
    try {
      await seedAction({});
    } catch (e) {
      setError(e instanceof Error ? e.message : "Seed failed");
    } finally {
      setLoading(false);
    }
  };

  const jobIds: Record<string, string | null> = {
    feJobId: status?.feJobId ?? null,
    pmJobId: status?.pmJobId ?? null,
    deJobId: status?.deJobId ?? null,
  };

  return (
    <div className="h-full overflow-y-auto">
      <div className="max-w-[1200px] mx-auto px-6 py-6">

        {/* Header */}
        <div className="flex items-start justify-between mb-6 animate-fade-up">
          <div>
            <h1
              className="text-[22px] font-semibold tracking-[-0.03em] mb-1"
              style={{ color: "var(--fg)" }}
            >
              Experiment Scenarios
            </h1>
            <p className="text-[13.5px] max-w-xl" style={{ color: "var(--fg-2)" }}>
              Four controlled experiments demonstrating the multi-agent pipeline, demographic
              firewall, adverse impact detection, and remediation loop.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {status?.seeded && (
              <span
                className="text-[12px] px-3 py-1.5 rounded-[6px]"
                style={{ background: "var(--green-dim)", color: "var(--green)" }}
              >
                46 candidates loaded
              </span>
            )}
            <button
              onClick={handleSeed}
              disabled={loading}
              className={clsx(
                "px-4 py-2 rounded-[6px] text-[13px] font-medium text-white transition-all",
                loading ? "opacity-60" : "hover:opacity-[0.88]"
              )}
              style={{ background: "var(--accent)" }}
            >
              {loading ? "Loading data…" : status?.seeded ? "Reload Demo Data" : "Load Demo Data"}
            </button>
          </div>
        </div>

        {error && (
          <div
            className="mb-4 px-4 py-3 rounded-[8px] text-[13px]"
            style={{ background: "var(--red-dim)", color: "var(--red)", border: "1px solid var(--red)" }}
          >
            {error}
          </div>
        )}

        {/* Pipeline diagram */}
        <PipelineDiagram />

        {/* Experiment cards */}
        <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
          {EXPERIMENTS.map((exp, i) => (
            <ExperimentCard
              key={exp.id}
              exp={exp}
              jobId={jobIds[exp.jobKey]}
              index={i}
            />
          ))}
        </div>

        {/* Footer note */}
        <p
          className="text-[12px] mt-6 text-center animate-fade-up"
          style={{ color: "var(--fg-3)", animationDelay: "400ms" }}
        >
          All seed data is pre-computed and reproducible.{" "}
          <a
            href="/EXPERIMENTS.md"
            target="_blank"
            className="underline hover:opacity-75"
            style={{ color: "var(--fg-2)" }}
          >
            Full documentation
          </a>{" "}
          · Reload at any time to reset to the canonical state.
        </p>
      </div>
    </div>
  );
}
