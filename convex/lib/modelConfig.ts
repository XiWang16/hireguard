import { anthropic } from "@ai-sdk/anthropic";
import { openai } from "@ai-sdk/openai";

export type AgentName = "resumeParser" | "skillMatcher" | "ranker" | "fairnessAuditor";

// Per-agent env var keys for provider override
const AGENT_PROVIDER_ENV: Record<AgentName, string> = {
  resumeParser: "RESUME_PARSER_PROVIDER",
  skillMatcher: "SKILL_MATCHER_PROVIDER",
  ranker: "RANKER_PROVIDER",
  fairnessAuditor: "FAIRNESS_AUDITOR_PROVIDER",
};

const ANTHROPIC_MODELS: Record<AgentName, string> = {
  resumeParser: "claude-sonnet-4-6",
  skillMatcher: "claude-sonnet-4-6",
  ranker: "claude-sonnet-4-6",
  fairnessAuditor: "claude-sonnet-4-6",
};

const OPENAI_MODELS: Record<AgentName, string> = {
  resumeParser: "gpt-4o",
  skillMatcher: "gpt-4o",
  ranker: "gpt-4o",
  fairnessAuditor: "gpt-4o",
};

// Returns a LanguageModelV1 for the given agent.
// Resolution order: per-agent env var → LLM_PROVIDER global → "anthropic"
export function getLanguageModel(agent: AgentName) {
  const provider =
    process.env[AGENT_PROVIDER_ENV[agent]] ??
    process.env.LLM_PROVIDER ??
    "anthropic";

  if (provider === "openai") {
    return openai(OPENAI_MODELS[agent]);
  }
  return anthropic(ANTHROPIC_MODELS[agent]);
}
