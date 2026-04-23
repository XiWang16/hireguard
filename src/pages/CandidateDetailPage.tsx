import { useQuery, useMutation, useAction } from "convex/react";
import { api } from "../../convex/_generated/api";
import type { Id } from "../../convex/_generated/dataModel";
import { Link, useParams } from "@tanstack/react-router";
import { StatusBadge } from "../components/StatusBadge";
import { ScoreBar } from "../components/ScoreBar";
import { AgentActivityFeed } from "../components/AgentActivityFeed";
import { ChevronRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";

export default function CandidateDetailPage() {
  const { jobId, candidateId } = useParams({ from: "/jobs/$jobId/candidates/$candidateId" });
  const data = useQuery(api.functions.candidates.getCandidateWithEvaluation, {
    candidateId: candidateId as Id<"candidates">,
  });
  const updateStatus = useMutation(api.functions.candidates.updateCandidateStatusPublic);
  const reEvaluate = useAction(api.functions.pipeline.reEvaluateCandidate);
  const [expandedSection, setExpandedSection] = useState<string | null>("work");
  const [reRunning, setReRunning] = useState(false);

  if (!data) return <div className="flex items-center justify-center h-screen text-gray-400 text-sm">Loading...</div>;

  const { evaluation, ...candidate } = data;

  const handleReEvaluate = async () => {
    setReRunning(true);
    try {
      await reEvaluate({ candidateId: candidateId as Id<"candidates">, jobId: jobId as Id<"jobs"> });
    } finally {
      setReRunning(false);
    }
  };

  const parsed = candidate.parsedData;

  return (
    <div className="h-full overflow-y-auto">
      <main className="max-w-4xl mx-auto px-6 py-8 space-y-5">
        <div className="flex items-center gap-2 text-sm mb-2" style={{ color: "var(--fg-3)" }}>
          <Link to="/jobs/$jobId" params={{ jobId }} className="hover:underline" style={{ color: "var(--fg-2)" }}>Job</Link>
          <ChevronRight size={12} />
          <Link to="/jobs/$jobId/candidates" params={{ jobId }} className="hover:underline" style={{ color: "var(--fg-2)" }}>Candidates</Link>
          <ChevronRight size={12} />
          <span style={{ color: "var(--fg)" }}>{candidate.name}</span>
        </div>
        {/* Candidate header */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-start justify-between">
          <div>
            <h1 className="text-lg font-semibold text-gray-900">{candidate.name}</h1>
            <p className="text-sm text-gray-500">{candidate.email}</p>
            <p className="text-xs text-gray-400 mt-1">Applied {new Date(candidate.appliedAt).toLocaleDateString()}</p>
          </div>
          <div className="flex items-center gap-2">
            <StatusBadge status={candidate.status as never} />
            <button
              onClick={() => updateStatus({ candidateId: candidateId as Id<"candidates">, status: "shortlisted" })}
              className="px-3 py-1.5 bg-green-600 text-white rounded text-xs"
            >Shortlist</button>
            <button
              onClick={() => updateStatus({ candidateId: candidateId as Id<"candidates">, status: "rejected" })}
              className="px-3 py-1.5 bg-red-500 text-white rounded text-xs"
            >Reject</button>
            <button
              onClick={handleReEvaluate}
              disabled={reRunning}
              className="px-3 py-1.5 border border-gray-200 rounded text-xs text-gray-600 disabled:opacity-50"
            >
              {reRunning ? "Running..." : "Re-evaluate"}
            </button>
          </div>
        </div>

        {/* Score breakdown */}
        {evaluation ? (
          <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-3">
            <h2 className="text-sm font-medium text-gray-900">Scores</h2>
            <ScoreBar label="Skill Match" score={evaluation.skillMatchScore} />
            <ScoreBar label="Experience" score={evaluation.experienceScore} />
            <ScoreBar label="Overall" score={evaluation.overallScore} />
          </div>
        ) : null}

        {/* Agent reasoning */}
        {evaluation?.reasoning && (
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h2 className="text-sm font-medium text-gray-900 mb-2">Agent Reasoning</h2>
            <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-wrap">{evaluation.reasoning}</p>
          </div>
        )}

        {/* Parsed resume sections */}
        {parsed && (
          <div className="bg-white border border-gray-200 rounded-lg divide-y divide-gray-100">
            {[
              { key: "work", label: "Work History", items: parsed.workHistory ?? [] },
              { key: "education", label: "Education", items: parsed.education ?? [] },
              { key: "skills", label: "Skills", items: (parsed.skills ?? []).map((s: string) => ({ name: s })) },
            ].map(({ key, label, items }) => (
              <div key={key}>
                <button
                  onClick={() => setExpandedSection(expandedSection === key ? null : key)}
                  className="w-full flex items-center justify-between px-4 py-3 text-left"
                >
                  <span className="text-sm font-medium text-gray-900">{label}</span>
                  <ChevronDown
                    size={14}
                    className={clsx("text-gray-400 transition-transform", expandedSection === key && "rotate-180")}
                  />
                </button>
                {expandedSection === key && (
                  <div className="px-4 pb-4">
                    {items.length === 0 ? (
                      <p className="text-xs text-gray-400">None extracted</p>
                    ) : key === "skills" ? (
                      <div className="flex flex-wrap gap-1.5">
                        {(parsed.skills ?? []).map((s: string, i: number) => (
                          <span key={i} className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded text-xs">{s}</span>
                        ))}
                      </div>
                    ) : (
                      <div className="space-y-2">
                        {items.map((item: Record<string, unknown>, i: number) => (
                          <div key={i} className="text-xs text-gray-600 border-l-2 border-gray-100 pl-3">
                            <pre className="whitespace-pre-wrap font-sans">{JSON.stringify(item, null, 2)}</pre>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Agent timeline */}
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h2 className="text-sm font-medium text-gray-900 mb-3">Agent Activity</h2>
          <AgentActivityFeed candidateId={candidateId as Id<"candidates">} />
        </div>
      </main>
    </div>
  );
}
