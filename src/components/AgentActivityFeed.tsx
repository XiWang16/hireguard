import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import type { Id } from "../../convex/_generated/dataModel";
import { formatDistanceToNow } from "date-fns";
import { FileText, Target, List, Shield } from "lucide-react";

const agentIcons: Record<string, typeof FileText> = {
  ResumeParser: FileText,
  SkillMatcher: Target,
  Ranker: List,
  FairnessAuditor: Shield,
};

interface Props {
  jobId?: Id<"jobs">;
  candidateId?: Id<"candidates">;
}

export function AgentActivityFeed({ jobId, candidateId }: Props) {
  const jobLogs = useQuery(
    api.functions.agentLogs.getAgentLogsForJob,
    jobId ? { jobId, limit: 20 } : "skip"
  );
  const candidateLogs = useQuery(
    api.functions.agentLogs.getAgentLogsForCandidate,
    candidateId ? { candidateId } : "skip"
  );

  const logs = candidateId ? candidateLogs : jobLogs;

  if (!logs) {
    return (
      <div className="space-y-2">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="h-12 bg-gray-50 animate-pulse rounded" />
        ))}
      </div>
    );
  }

  if (logs.length === 0) {
    return (
      <p className="text-sm text-gray-400 py-4">No agent activity yet.</p>
    );
  }

  return (
    <div className="space-y-1">
      {logs.map((log) => {
        const Icon = agentIcons[log.agentName] ?? FileText;
        return (
          <div
            key={log._id}
            className="flex items-start gap-3 py-2 border-b border-gray-50 last:border-0 animate-in fade-in"
          >
            <div className="mt-0.5 p-1.5 rounded bg-gray-50 shrink-0">
              <Icon size={12} className="text-gray-500" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-gray-700">{log.agentName}</span>
                <span className="text-xs text-gray-400">{log.action}</span>
              </div>
              <p className="text-xs text-gray-500 truncate">{log.outputSummary}</p>
            </div>
            <div className="text-right shrink-0">
              <p className="text-xs text-gray-400">
                {formatDistanceToNow(new Date(log.timestamp), { addSuffix: true })}
              </p>
              <p className="text-xs text-gray-300">{log.latencyMs}ms</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
