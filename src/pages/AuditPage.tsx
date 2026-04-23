import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import type { Id } from "../../convex/_generated/dataModel";
import { Link, useParams } from "@tanstack/react-router";
import { useAuditStore } from "../stores/useAuditStore";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";
import { AlertTriangle, CheckCircle, ChevronRight } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import clsx from "clsx";

type DemographicKey = "gender" | "ethnicity" | "ageBand" | "disability";

const DEMOGRAPHIC_LABELS: Record<DemographicKey, string> = {
  gender: "Gender",
  ethnicity: "Ethnicity",
  ageBand: "Age Band",
  disability: "Disability Status",
};

export default function AuditPage() {
  const { jobId } = useParams({ from: "/jobs/$jobId/audit" });
  const job = useQuery(api.functions.jobs.getJobPublic, { jobId: jobId as Id<"jobs"> });
  const latestReport = useQuery(api.functions.auditReports.getLatestAuditReport, { jobId: jobId as Id<"jobs"> });
  const auditHistory = useQuery(api.functions.auditReports.getAuditHistory, { jobId: jobId as Id<"jobs"> });
  const acknowledgeRec = useMutation(api.functions.auditReports.acknowledgeRecommendation);

  const { selectedDemographic, thresholdOverride, showStatisticalDetails, setDemographic, toggleDetails } =
    useAuditStore();

  const passRates: Record<string, Record<string, { passRate: number; adverseImpactRatio: number; flagged: boolean; total: number; passed: number }>> =
    (latestReport?.passRateByGroup as Record<string, Record<string, { passRate: number; adverseImpactRatio: number; flagged: boolean; total: number; passed: number }>>) ?? {};

  const currentGroups = passRates[selectedDemographic] ?? {};
  const chartData = Object.entries(currentGroups).map(([name, data]) => ({
    name,
    passRate: Math.round((data.passRate ?? 0) * 100),
    flagged: data.flagged,
  }));

  const maxPassRate = Math.max(...chartData.map((d) => d.passRate), 0);
  const thresholdLine = maxPassRate * thresholdOverride;

  const adverseImpactRatios: Record<string, Record<string, { adverseImpactRatio: number; flagged: boolean }>> =
    (latestReport?.adverseImpactRatios as Record<string, Record<string, { adverseImpactRatio: number; flagged: boolean }>>) ?? {};
  const currentRatios = adverseImpactRatios[selectedDemographic] ?? {};

  return (
    <div className="h-full overflow-y-auto">
      <div className="flex items-center gap-2 text-sm px-6 pt-6 pb-0 mb-4" style={{ color: "var(--fg-3)" }}>
        <Link to="/jobs/$jobId" params={{ jobId }} className="hover:underline" style={{ color: "var(--fg-2)" }}>
          {job?.title ?? "Job"}
        </Link>
        <ChevronRight size={12} />
        <span style={{ color: "var(--fg)" }}>Fairness Audit</span>
      </div>

      <main className="max-w-4xl mx-auto px-6 pb-8 space-y-5">
        {/* Alert banner */}
        {latestReport ? (
          <div className={clsx("flex items-start gap-3 px-4 py-3 rounded-lg border", latestReport.flagged
            ? "bg-amber-50 border-amber-200"
            : "bg-green-50 border-green-200"
          )}>
            {latestReport.flagged ? (
              <AlertTriangle size={16} className="text-amber-500 mt-0.5 shrink-0" />
            ) : (
              <CheckCircle size={16} className="text-green-500 mt-0.5 shrink-0" />
            )}
            <div>
              <p className={clsx("text-sm font-medium", latestReport.flagged ? "text-amber-800" : "text-green-800")}>
                {latestReport.flagged ? "Adverse impact detected" : "No adverse impact detected"}
              </p>
              <p className="text-xs text-gray-500 mt-0.5">
                Last audit {formatDistanceToNow(new Date(latestReport.timestamp), { addSuffix: true })} · {latestReport.totalCandidates} candidates
              </p>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-3 px-4 py-3 rounded-lg border border-gray-200 bg-white">
            <Shield size={16} className="text-gray-400" />
            <p className="text-sm text-gray-500">No audit run yet. Use the "Run Audit" button on the pipeline page.</p>
          </div>
        )}

        {latestReport && (
          <>
            {/* Demographic selector */}
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-4">
                {(Object.keys(DEMOGRAPHIC_LABELS) as DemographicKey[]).map((key) => (
                  <button
                    key={key}
                    onClick={() => setDemographic(key)}
                    className={clsx(
                      "px-3 py-1.5 rounded text-xs font-medium transition-colors",
                      selectedDemographic === key
                        ? "bg-gray-900 text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    )}
                  >
                    {DEMOGRAPHIC_LABELS[key]}
                  </button>
                ))}
              </div>

              {/* Pass-through rate chart */}
              {chartData.length > 0 ? (
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={chartData} margin={{ top: 0, right: 0, left: -10, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                    <YAxis tick={{ fontSize: 11 }} domain={[0, 100]} />
                    <Tooltip formatter={(v) => `${v}%`} />
                    <ReferenceLine y={thresholdLine} stroke="#ef4444" strokeDasharray="4 4" label={{ value: "4/5 rule", position: "right", fontSize: 10 }} />
                    <Bar dataKey="passRate" radius={[3, 3, 0, 0]}
                      fill="#3b82f6"
                      // Color bars red if flagged
                      label={false}
                    />
                  </BarChart>
                </ResponsiveContainer>
              ) : (
                <p className="text-sm text-gray-400 py-4">No demographic data for this dimension.</p>
              )}
            </div>

            {/* Adverse impact ratio table */}
            {Object.keys(currentRatios).length > 0 && (
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="px-4 py-3 border-b border-gray-100">
                  <h2 className="text-sm font-medium text-gray-900">Adverse Impact Ratios — {DEMOGRAPHIC_LABELS[selectedDemographic]}</h2>
                </div>
                <table className="w-full text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      {["Group", "Total", "Passed", "Pass Rate", "AI Ratio", "Status"].map((h) => (
                        <th key={h} className="px-3 py-2.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wide">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {Object.entries(currentGroups).map(([group, data]) => (
                      <tr key={group} className="hover:bg-gray-50">
                        <td className="px-3 py-2.5 text-sm text-gray-900">{group}</td>
                        <td className="px-3 py-2.5 text-sm text-gray-600">{data.total}</td>
                        <td className="px-3 py-2.5 text-sm text-gray-600">{data.passed}</td>
                        <td className="px-3 py-2.5 text-sm text-gray-600">{(data.passRate * 100).toFixed(1)}%</td>
                        <td className="px-3 py-2.5 text-sm text-gray-600">{(data.adverseImpactRatio ?? 1).toFixed(3)}</td>
                        <td className="px-3 py-2.5">
                          {data.flagged ? (
                            <span className="flex items-center gap-1 text-xs text-red-600">
                              <AlertTriangle size={12} /> Flagged
                            </span>
                          ) : (
                            <span className="text-xs text-green-600">OK</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Statistical details */}
            <div className="bg-white border border-gray-200 rounded-lg">
              <button
                onClick={toggleDetails}
                className="w-full flex items-center justify-between px-4 py-3 text-left"
              >
                <span className="text-sm font-medium text-gray-900">Statistical Details</span>
                <ChevronRight size={14} className={clsx("text-gray-400 transition-transform", showStatisticalDetails && "rotate-90")} />
              </button>
              {showStatisticalDetails && (
                <div className="px-4 pb-4 border-t border-gray-100">
                  <pre className="text-xs text-gray-600 mt-3 overflow-auto whitespace-pre-wrap">
                    {JSON.stringify(latestReport.statisticalTests, null, 2)}
                  </pre>
                </div>
              )}
            </div>

            {/* Recommendations */}
            {(latestReport.recommendations ?? []).length > 0 && (
              <div className="bg-white border border-gray-200 rounded-lg">
                <div className="px-4 py-3 border-b border-gray-100">
                  <h2 className="text-sm font-medium text-gray-900">Recommendations</h2>
                </div>
                <div className="divide-y divide-gray-50">
                  {latestReport.recommendations.map((rec, i) => (
                    <div key={i} className="flex items-start gap-3 px-4 py-3">
                      <p className="flex-1 text-sm text-gray-700">{rec}</p>
                      {!(latestReport.acknowledgedRecommendations ?? []).includes(i) && (
                        <button
                          onClick={() => acknowledgeRec({ reportId: latestReport._id, index: i })}
                          className="px-2 py-1 border border-gray-200 rounded text-xs text-gray-500 hover:bg-gray-50 shrink-0"
                        >
                          Acknowledge
                        </button>
                      )}
                      {(latestReport.acknowledgedRecommendations ?? []).includes(i) && (
                        <span className="text-xs text-gray-400 shrink-0">Acknowledged</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Audit history */}
            <div className="bg-white border border-gray-200 rounded-lg">
              <div className="px-4 py-3 border-b border-gray-100">
                <h2 className="text-sm font-medium text-gray-900">Audit History</h2>
              </div>
              <div className="divide-y divide-gray-50">
                {(auditHistory ?? []).map((report) => (
                  <div key={report._id} className="flex items-center gap-3 px-4 py-3">
                    {report.flagged ? (
                      <AlertTriangle size={14} className="text-amber-500 shrink-0" />
                    ) : (
                      <CheckCircle size={14} className="text-green-500 shrink-0" />
                    )}
                    <p className="text-xs text-gray-600 flex-1">
                      {formatDistanceToNow(new Date(report.timestamp), { addSuffix: true })}
                      {" · "}{report.totalCandidates} candidates
                    </p>
                    <span className={clsx("text-xs font-medium", report.flagged ? "text-amber-600" : "text-green-600")}>
                      {report.flagged ? "Flagged" : "Clean"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

