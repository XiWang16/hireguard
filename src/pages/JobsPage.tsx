import { useState } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Link } from "@tanstack/react-router";
import { StatusBadge } from "../components/StatusBadge";
import { Plus } from "lucide-react";

export default function JobsPage() {
  const jobs = useQuery(api.functions.jobs.listJobs, {});
  const createJob = useMutation(api.functions.jobs.createJob);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    title: "",
    department: "",
    description: "",
    requiredSkills: "",
    status: "open" as const,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createJob({
      title: form.title,
      department: form.department,
      description: form.description,
      requiredSkills: form.requiredSkills.split(",").map((s) => s.trim()).filter(Boolean),
      status: form.status,
    });
    setShowForm(false);
    setForm({ title: "", department: "", description: "", requiredSkills: "", status: "open" });
  };

  return (
    <div className="h-full overflow-y-auto">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-semibold text-gray-900">Jobs</h1>
          <button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-900 text-white rounded text-sm"
          >
            <Plus size={14} />
            New Job
          </button>
        </div>

        {showForm && (
          <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-lg p-4 mb-6 space-y-3">
            <h2 className="text-sm font-medium text-gray-900">Create Job</h2>
            <div className="grid grid-cols-2 gap-3">
              <input
                required
                placeholder="Job title"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                className="border border-gray-200 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-gray-400"
              />
              <input
                required
                placeholder="Department"
                value={form.department}
                onChange={(e) => setForm({ ...form, department: e.target.value })}
                className="border border-gray-200 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-gray-400"
              />
            </div>
            <textarea
              required
              placeholder="Job description"
              rows={2}
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="w-full border border-gray-200 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-gray-400"
            />
            <input
              placeholder="Required skills (comma-separated)"
              value={form.requiredSkills}
              onChange={(e) => setForm({ ...form, requiredSkills: e.target.value })}
              className="w-full border border-gray-200 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-gray-400"
            />
            <div className="flex justify-end gap-2">
              <button type="button" onClick={() => setShowForm(false)} className="px-3 py-1.5 text-sm text-gray-500">
                Cancel
              </button>
              <button type="submit" className="px-3 py-1.5 bg-gray-900 text-white rounded text-sm">
                Create
              </button>
            </div>
          </form>
        )}

        <div className="bg-white border border-gray-200 rounded-lg divide-y divide-gray-100">
          {!jobs ? (
            <div className="p-8 text-center text-gray-400 text-sm animate-pulse">Loading...</div>
          ) : jobs.length === 0 ? (
            <div className="p-8 text-center text-gray-400 text-sm">
              No jobs yet. Create one to get started.
            </div>
          ) : (
            jobs.map((job) => (
              <Link
                key={job._id}
                to="/jobs/$jobId"
                params={{ jobId: job._id }}
                className="flex items-center gap-4 px-4 py-3 hover:bg-gray-50 transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">{job.title}</p>
                  <p className="text-xs text-gray-500">{job.department} · {job.requiredSkills.slice(0, 3).join(", ")}</p>
                </div>
                <StatusBadge status={job.status} />
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
