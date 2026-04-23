import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import type { Doc } from "../../convex/_generated/dataModel";
import { Link } from "@tanstack/react-router";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { AlertTriangle, CheckCircle } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import clsx from "clsx";

export default function GlobalAuditPage() {
  const jobs = useQuery(api.functions.jobs.listJobs, {});
  const allReports = useQuery(api.functions.auditReports.getAllAuditReports, {});

  const totalJobs = jobs?.length ?? 0;
  const flaggedJobs = new Set(allReports?.filter((r) => r.flagged).map((r) => r.jobId)).size;
  const totalReports = allReports?.length ?? 0;
  const overallFlagRate = totalReports > 0 ? flaggedJobs / totalJobs : 0;

  // Latest report per job
  const latestByJob = new Map<string, Doc<"auditReports">>();
  for (const r of allReports ?? []) {
    if (!latestByJob.has(r.jobId) || (latestByJob.get(r.jobId)?.timestamp ?? 0) < r.timestamp) {
      latestByJob.set(r.jobId, r);
    }
  }

  // Trend data: adverse impact rate over time
  const trendData = (allReports ?? [])
    .sort((a, b) => a.timestamp - b.timestamp)
    .map((r, i) => ({
      i,
      date: new Date(r.timestamp).toLocaleDateString(),
      flagged: r.flagged ? 1 : 0,
    }));

  // Department breakdown
  const deptMap = new Map<string, { total: number; flagged: number }>();
  for (const job of jobs ?? []) {
    const report = latestByJob.get(job._id);
    if (!deptMap.has(job.department)) deptMap.set(job.department, { total: 0, flagged: 0 });
    const dept = deptMap.get(job.department)!;
    dept.total += 1;
    if (report?.flagged) dept.flagged += 1;
  }
  const deptData = Array.from(deptMap.entries()).map(([dept, data]) => ({
    dept,
    flagRate: data.total > 0 ? Math.round((data.flagged / data.total) * 100) : 0,
  }));

  return (
    <div className="h-full overflow-y-auto">
      <div className="max-w-5xl mx-auto px-6 py-8 space-y-6">
        <h1 className="text-xl font-semibold" style={{ color: "var(--fg)" }}>Global Fairness Overview</h1>

        {/* Summary cards */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Jobs Audited</p>
            <p className="text-2xl font-semibold text-gray-900">{totalJobs}</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="flex items-center gap-1.5 mb-1">
              <AlertTriangle size={13} className={flaggedJobs > 0 ? "text-amber-500" : "text-gray-300"} />
              <p className="text-xs text-gray-500 uppercase tracking-wide">Jobs Flagged</p>
            </div>
            <p className={clsx("text-2xl font-semibold", flaggedJobs > 0 ? "text-amber-600" : "text-gray-900")}>
              {flaggedJobs}
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Adverse Impact Rate</p>
            <p className={clsx("text-2xl font-semibold", overallFlagRate > 0.2 ? "text-red-600" : "text-gray-900")}>
              {(overallFlagRate * 100).toFixed(0)}%
            </p>
          </div>
        </div>

        {/* Jobs table */}
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-100">
            <h2 className="text-sm font-medium text-gray-900">Jobs</h2>
          </div>
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                {["Job", "Department", "Status", "Last Audit", "Audit Result"].map((h) => (
                  <th key={h} className="px-3 py-2.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wide">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {(jobs ?? []).map((job) => {
                const report = latestByJob.get(job._id);
                return (
                  <tr key={job._id} className="hover:bg-gray-50">
                    <td className="px-3 py-2.5">
                      <Link to="/jobs/$jobId" params={{ jobId: job._id }} className="text-sm font-medium text-gray-900 hover:underline">
                        {job.title}
                      </Link>
                    </td>
                    <td className="px-3 py-2.5 text-sm text-gray-600">{job.department}</td>
                    <td className="px-3 py-2.5 text-sm text-gray-600 capitalize">{job.status}</td>
                    <td className="px-3 py-2.5 text-sm text-gray-500">
                      {report ? formatDistanceToNow(new Date(report.timestamp), { addSuffix: true }) : "—"}
                    </td>
                    <td className="px-3 py-2.5">
                      {report ? (
                        <Link to="/jobs/$jobId/audit" params={{ jobId: job._id }}>
                          {report.flagged ? (
                            <span className="flex items-center gap-1 text-xs text-amber-600">
                              <AlertTriangle size={12} /> Flagged
                            </span>
                          ) : (
                            <span className="flex items-center gap-1 text-xs text-green-600">
                              <CheckCircle size={12} /> Clean
                            </span>
                          )}
                        </Link>
                      ) : (
                        <span className="text-xs text-gray-400">Not audited</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-2 gap-5">
          {/* Trend chart */}
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h2 className="text-sm font-medium text-gray-900 mb-4">Adverse Impact Over Time</h2>
            {trendData.length > 1 ? (
              <ResponsiveContainer width="100%" height={180}>
                <LineChart data={trendData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="date" tick={{ fontSize: 10 }} />
                  <YAxis tick={{ fontSize: 10 }} domain={[0, 1]} />
                  <Tooltip />
                  <Line type="monotone" dataKey="flagged" stroke="#ef4444" dot={false} strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            ) : (
              <p className="text-sm text-gray-400 py-8 text-center">Not enough audit history.</p>
            )}
          </div>

          {/* Department breakdown */}
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h2 className="text-sm font-medium text-gray-900 mb-4">Flag Rate by Department</h2>
            {deptData.length > 0 ? (
              <ResponsiveContainer width="100%" height={180}>
                <BarChart data={deptData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis type="number" tick={{ fontSize: 10 }} domain={[0, 100]} />
                  <YAxis type="category" dataKey="dept" tick={{ fontSize: 10 }} width={80} />
                  <Tooltip formatter={(v) => `${v}%`} />
                  <Bar dataKey="flagRate" fill="#6b7280" radius={[0, 3, 3, 0]} />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <p className="text-sm text-gray-400 py-8 text-center">No department data.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
