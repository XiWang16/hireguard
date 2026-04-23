import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import type { Id } from "../../convex/_generated/dataModel";
import { Link, useParams } from "@tanstack/react-router";
import { StatusBadge } from "../components/StatusBadge";
import { ChevronRight } from "lucide-react";

export default function CandidateListPage() {
  const { jobId } = useParams({ from: "/jobs/$jobId/candidates" });
  const job = useQuery(api.functions.jobs.getJobPublic, { jobId: jobId as Id<"jobs"> });
  const candidates = useQuery(api.functions.candidates.getCandidatesForJob, { jobId: jobId as Id<"jobs"> });
  const evaluations = useQuery(api.functions.evaluations.getEvaluationsForJobPublic, { jobId: jobId as Id<"jobs"> });

  const evalMap = new Map(evaluations?.map((e) => [e.candidateId, e]) ?? []);

  return (
    <div className="h-full overflow-y-auto">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex items-center gap-2 text-sm mb-6" style={{ color: "var(--fg-3)" }}>
          <Link to="/jobs/$jobId" params={{ jobId }} className="hover:underline" style={{ color: "var(--fg-2)" }}>
            {job?.title ?? "Job"}
          </Link>
          <ChevronRight size={12} />
          <span style={{ color: "var(--fg)" }}>Candidates</span>
        </div>
        <h1 className="text-xl font-semibold mb-6" style={{ color: "var(--fg)" }}>Candidates — {job?.title}</h1>

        <div className="bg-white border border-gray-200 rounded-lg divide-y divide-gray-50">
          {!candidates ? (
            <div className="p-8 text-center text-gray-400 text-sm animate-pulse">Loading...</div>
          ) : candidates.length === 0 ? (
            <div className="p-8 text-center text-gray-400 text-sm">No candidates yet.</div>
          ) : (
            candidates.map((c) => {
              const ev = evalMap.get(c._id);
              return (
                <Link
                  key={c._id}
                  to="/jobs/$jobId/candidates/$candidateId"
                  params={{ jobId, candidateId: c._id }}
                  className="flex items-center gap-4 px-4 py-3 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{c.name}</p>
                    <p className="text-xs text-gray-500">{c.email}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    {ev && <span className="text-xs text-gray-500">Score: {ev.overallScore}</span>}
                    <StatusBadge status={c.status as never} />
                  </div>
                </Link>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
