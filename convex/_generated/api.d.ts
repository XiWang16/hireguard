/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type * as agents_fairnessAuditor from "../agents/fairnessAuditor.js";
import type * as agents_ranker from "../agents/ranker.js";
import type * as agents_resumeParser from "../agents/resumeParser.js";
import type * as agents_skillMatcher from "../agents/skillMatcher.js";
import type * as crons from "../crons.js";
import type * as functions_activityLog from "../functions/activityLog.js";
import type * as functions_agentLogs from "../functions/agentLogs.js";
import type * as functions_alerts from "../functions/alerts.js";
import type * as functions_auditReports from "../functions/auditReports.js";
import type * as functions_backgroundChecks from "../functions/backgroundChecks.js";
import type * as functions_candidates from "../functions/candidates.js";
import type * as functions_dashboardStats from "../functions/dashboardStats.js";
import type * as functions_evaluations from "../functions/evaluations.js";
import type * as functions_jobs from "../functions/jobs.js";
import type * as functions_pipeline from "../functions/pipeline.js";
import type * as lib_env from "../lib/env.js";
import type * as myFunctions from "../myFunctions.js";

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";

declare const fullApi: ApiFromModules<{
  "agents/fairnessAuditor": typeof agents_fairnessAuditor;
  "agents/ranker": typeof agents_ranker;
  "agents/resumeParser": typeof agents_resumeParser;
  "agents/skillMatcher": typeof agents_skillMatcher;
  crons: typeof crons;
  "functions/activityLog": typeof functions_activityLog;
  "functions/agentLogs": typeof functions_agentLogs;
  "functions/alerts": typeof functions_alerts;
  "functions/auditReports": typeof functions_auditReports;
  "functions/backgroundChecks": typeof functions_backgroundChecks;
  "functions/candidates": typeof functions_candidates;
  "functions/dashboardStats": typeof functions_dashboardStats;
  "functions/evaluations": typeof functions_evaluations;
  "functions/jobs": typeof functions_jobs;
  "functions/pipeline": typeof functions_pipeline;
  "lib/env": typeof lib_env;
  myFunctions: typeof myFunctions;
}>;

/**
 * A utility for referencing Convex functions in your app's public API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;

/**
 * A utility for referencing Convex functions in your app's internal API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = internal.myModule.myFunction;
 * ```
 */
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;

export declare const components: {
  agent: import("@convex-dev/agent/_generated/component.js").ComponentApi<"agent">;
};
