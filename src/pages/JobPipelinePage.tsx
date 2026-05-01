import { useQuery, useMutation, useAction } from "convex/react";
import { api } from "../../convex/_generated/api";
import type { Id } from "../../convex/_generated/dataModel";
import { Link, useParams } from "@tanstack/react-router";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  flexRender,
  type ColumnDef,
} from "@tanstack/react-table";
import { useState, useMemo } from "react";
import { StatusBadge } from "../components/StatusBadge";
import { ScoreBar } from "../components/ScoreBar";
import { AgentLogTimeline } from "../components/AgentLogTimeline";
import { ResumeUpload } from "../components/ResumeUpload";
import { useFilterStore } from "../stores/useFilterStore";
import { useDashboardStore } from "../stores/useDashboardStore";
import { ChevronRight, Upload } from "lucide-react";
import clsx from "clsx";

type CandidateRow = {
  _id: Id<"candidates">;
  name: string;
  email: string;
  status: string;
  appliedAt: number;
  evaluation: { skillMatchScore: number; experienceScore: number; overallScore: number; reasoning: string } | null;
};

const STAGE_ORDER = ["received", "parsing", "evaluated", "shortlisted", "rejected", "hired"];
const STAGE_COLORS: Record<string, string> = {
  received: "bg-gray-200",
  parsing: "bg-blue-200",
  evaluated: "bg-yellow-200",
  shortlisted: "bg-green-300",
  rejected: "bg-red-200",
  hired: "bg-emerald-400",
};

export default function JobPipelinePage() {
  const { jobId } = useParams({ from: "/jobs/$jobId" });
  const job = useQuery(api.functions.jobs.getJobPublic, { jobId: jobId as Id<"jobs"> });
  const candidates = useQuery(api.functions.candidates.getCandidatesForJob, { jobId: jobId as Id<"jobs"> });
  const evaluations = useQuery(api.functions.evaluations.getEvaluationsForJobPublic, { jobId: jobId as Id<"jobs"> });
  const updateStatus = useMutation(api.functions.candidates.updateCandidateStatusPublic);
  const triggerAudit = useAction(api.functions.pipeline.triggerJobAudit);

  const { candidateStatusFilter } = useFilterStore();
  const { activeTab, setTab } = useDashboardStore();
  const [expandedRow, setExpandedRow] = useState<string | null>(null);
  const [showUpload, setShowUpload] = useState(false);
  const [auditRunning, setAuditRunning] = useState(false);

  const evalMap = useMemo(() => {
    const m = new Map<string, CandidateRow["evaluation"]>();
    for (const e of evaluations ?? []) {
      m.set(e.candidateId, {
        skillMatchScore: e.skillMatchScore,
        experienceScore: e.experienceScore,
        overallScore: e.overallScore,
        reasoning: e.reasoning,
      });
    }
    return m;
  }, [evaluations]);

  const rows: CandidateRow[] = useMemo(
    () =>
      (candidates ?? [])
        .filter((c) =>
          candidateStatusFilter.length === 0 || candidateStatusFilter.includes(c.status as never)
        )
        .map((c) => ({
          _id: c._id,
          name: c.name,
          email: c.email,
          status: c.status,
          appliedAt: c.appliedAt,
          evaluation: evalMap.get(c._id) ?? null,
        })),
    [candidates, evalMap, candidateStatusFilter]
  );

  const columns = useMemo<ColumnDef<CandidateRow>[]>(
    () => [
      { accessorKey: "name", header: "Name", cell: ({ row }) => (
        <Link to="/jobs/$jobId/candidates/$candidateId" params={{ jobId, candidateId: row.original._id }}>
          <span className="text-sm font-medium text-gray-900 hover:underline">{row.original.name}</span>
        </Link>
      )},
      { accessorKey: "appliedAt", header: "Applied", cell: ({ getValue }) => (
        <span className="text-xs text-gray-500">{new Date(getValue() as number).toLocaleDateString()}</span>
      )},
      { accessorKey: "status", header: "Status", cell: ({ getValue }) => (
        <StatusBadge status={getValue() as never} />
      )},
      { accessorKey: "evaluation.overallScore", header: "Overall", cell: ({ row }) => (
        row.original.evaluation ? (
          <ScoreBar label="" score={row.original.evaluation.overallScore} showLabel={false} />
        ) : <span className="text-xs text-gray-300">—</span>
      )},
      { accessorKey: "evaluation.skillMatchScore", header: "Skills", cell: ({ row }) => (
        <span className="text-xs text-gray-600">{row.original.evaluation?.skillMatchScore ?? "—"}</span>
      )},
      { accessorKey: "evaluation.experienceScore", header: "Exp", cell: ({ row }) => (
        <span className="text-xs text-gray-600">{row.original.evaluation?.experienceScore ?? "—"}</span>
      )},
      {
        id: "actions",
        header: "",
        cell: ({ row }) => (
          <div className="flex items-center gap-1">
            <button
              onClick={() => updateStatus({ candidateId: row.original._id, status: "shortlisted" })}
              className="px-2 py-1 text-xs text-green-700 hover:bg-green-50 rounded"
            >Shortlist</button>
            <button
              onClick={() => updateStatus({ candidateId: row.original._id, status: "rejected" })}
              className="px-2 py-1 text-xs text-red-600 hover:bg-red-50 rounded"
            >Reject</button>
            <button
              onClick={() => setExpandedRow(expandedRow === row.original._id ? null : row.original._id)}
              className="p-1 text-gray-400 hover:text-gray-600"
            >
              <ChevronRight size={12} className={clsx("transition-transform", expandedRow === row.original._id && "rotate-90")} />
            </button>
          </div>
        ),
      },
    ],
    [jobId, expandedRow, updateStatus]
  );

  const table = useReactTable({
    data: rows,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  // Stage counts
  const stageCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const s of STAGE_ORDER) counts[s] = 0;
    for (const c of candidates ?? []) counts[c.status] = (counts[c.status] ?? 0) + 1;
    return counts;
  }, [candidates]);

  const handleRunAudit = async () => {
    setAuditRunning(true);
    try {
      await triggerAudit({ jobId: jobId as Id<"jobs"> });
    } finally {
      setAuditRunning(false);
    }
  };

  if (!job) return <div className="flex items-center justify-center h-screen text-gray-400 text-sm">Loading...</div>;

  return (
    <div className="h-full overflow-y-auto">
      <main className="max-w-5xl mx-auto px-6 py-6 space-y-5">
        {/* Breadcrumb + actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm" style={{ color: "var(--fg-3)" }}>
            <Link to="/jobs" className="hover:underline" style={{ color: "var(--fg-2)" }}>Jobs</Link>
            <ChevronRight size={12} />
            <span style={{ color: "var(--fg)" }}>{job.title}</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowUpload(!showUpload)}
              className="flex items-center gap-1.5 px-3 py-1.5 border rounded text-sm transition-colors hover:bg-[--bg-3]"
              style={{ borderColor: "var(--border)", color: "var(--fg-2)" }}
            >
              <Upload size={14} /> Upload Resumes
            </button>
            <Link
              to="/jobs/$jobId/audit"
              params={{ jobId }}
              className="flex items-center gap-1.5 px-3 py-1.5 border rounded text-sm transition-colors hover:bg-[--bg-3]"
              style={{ borderColor: "var(--border)", color: "var(--fg-2)" }}
            >
              View Audit
            </Link>
            <button
              onClick={handleRunAudit}
              disabled={auditRunning}
              className="px-3 py-1.5 rounded text-sm disabled:opacity-50 text-white"
              style={{ background: "var(--accent)" }}
            >
              {auditRunning ? "Running..." : "Run Audit"}
            </button>
          </div>
        </div>
        {/* Job header */}
        <div>
          <h1 className="text-lg font-semibold text-gray-900">{job.title}</h1>
          <p className="text-sm text-gray-500">{job.department} · {candidates?.length ?? 0} candidates</p>
        </div>

        {/* Upload panel */}
        {showUpload && (
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h2 className="text-sm font-medium text-gray-900 mb-3">Upload Resumes</h2>
            <ResumeUpload jobId={jobId as Id<"jobs">} onComplete={() => setShowUpload(false)} />
          </div>
        )}

        {/* Pipeline stage visualization */}
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <p className="text-xs text-gray-500 mb-3 uppercase tracking-wide">Pipeline</p>
          <div className="flex items-center gap-2">
            {STAGE_ORDER.map((stage) => (
              <div key={stage} className="flex-1">
                <div className={clsx("h-2 rounded", STAGE_COLORS[stage])} />
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-gray-400 capitalize">{stage}</span>
                  <span className="text-xs font-medium text-gray-600">{stageCounts[stage] ?? 0}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-1 border-b border-gray-200">
          {(["pipeline", "audit", "agents"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setTab(tab)}
              className={clsx(
                "px-4 py-2 text-sm capitalize border-b-2 -mb-px transition-colors",
                activeTab === tab ? "border-gray-900 text-gray-900 font-medium" : "border-transparent text-gray-500 hover:text-gray-700"
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === "pipeline" && (
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-100">
                {table.getHeaderGroups().map((hg) => (
                  <tr key={hg.id}>
                    {hg.headers.map((h) => (
                      <th
                        key={h.id}
                        onClick={h.column.getToggleSortingHandler()}
                        className="px-3 py-2.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wide cursor-pointer select-none"
                      >
                        {flexRender(h.column.columnDef.header, h.getContext())}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody className="divide-y divide-gray-50">
                {table.getRowModel().rows.length === 0 ? (
                  <tr><td colSpan={7} className="py-8 text-center text-gray-400 text-sm">No candidates yet.</td></tr>
                ) : (
                  table.getRowModel().rows.map((row) => (
                    <>
                      <tr key={row.id} className="hover:bg-gray-50 transition-colors">
                        {row.getVisibleCells().map((cell) => (
                          <td key={cell.id} className="px-3 py-2.5">
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                          </td>
                        ))}
                      </tr>
                      {expandedRow === row.original._id && row.original.evaluation?.reasoning && (
                        <tr key={`${row.id}-expanded`}>
                          <td colSpan={7} className="px-4 py-3 bg-gray-50 border-b border-gray-100">
                            <p className="text-xs text-gray-600 leading-relaxed">{row.original.evaluation.reasoning}</p>
                          </td>
                        </tr>
                      )}
                    </>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === "audit" && (
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-medium text-gray-900">Audit Status</h2>
              <Link to="/jobs/$jobId/audit" params={{ jobId }} className="text-xs text-gray-500 hover:text-gray-700">
                Full report →
              </Link>
            </div>
            <p className="text-sm text-gray-500">Run an audit to see fairness metrics.</p>
          </div>
        )}

        {activeTab === "agents" && (
          <div
            className="rounded-[12px] p-5"
            style={{ background: "var(--bg-2)", border: "1px solid var(--border)", boxShadow: "var(--shadow-sm)" }}
          >
            <h2 className="text-[13.5px] font-medium mb-4" style={{ color: "var(--fg)" }}>
              Agent Pipeline
            </h2>
            <AgentLogTimeline jobId={jobId as Id<"jobs">} />
          </div>
        )}
      </main>
    </div>
  );
}
