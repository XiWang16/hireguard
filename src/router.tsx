import {
  createRouter,
  createRoute,
  createRootRoute,
  Outlet,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { AppShell } from "./components/AppShell";

const DashboardPage     = lazy(() => import("./pages/DashboardPage"));
const CandidatesPage    = lazy(() => import("./pages/CandidatesPage"));
const ChecksPage        = lazy(() => import("./pages/ChecksPage"));
const ReportsPage       = lazy(() => import("./pages/ReportsPage"));
const SettingsPage      = lazy(() => import("./pages/SettingsPage"));
const JobsPage          = lazy(() => import("./pages/JobsPage"));
const JobPipelinePage   = lazy(() => import("./pages/JobPipelinePage"));
const CandidateListPage = lazy(() => import("./pages/CandidateListPage"));
const CandidateDetailPage = lazy(() => import("./pages/CandidateDetailPage"));
const AuditPage         = lazy(() => import("./pages/AuditPage"));
const GlobalAuditPage   = lazy(() => import("./pages/GlobalAuditPage"));

const rootRoute = createRootRoute({
  component: () => (
    <ErrorBoundary>
      <AppShell>
        <Suspense
          fallback={
            <div
              className="flex items-center justify-center h-full text-[13px]"
              style={{ color: "var(--fg-3)" }}
            >
              Loading…
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </AppShell>
    </ErrorBoundary>
  ),
});

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: DashboardPage,
});

const candidatesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/candidates",
  component: CandidatesPage,
});

const checksRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/checks",
  component: ChecksPage,
});

const reportsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/reports",
  component: ReportsPage,
});

const settingsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/settings",
  component: SettingsPage,
});

const jobsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/jobs",
  component: JobsPage,
});

const jobDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/jobs/$jobId",
  component: JobPipelinePage,
});

const candidateListRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/jobs/$jobId/candidates",
  component: CandidateListPage,
});

const candidateDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/jobs/$jobId/candidates/$candidateId",
  component: CandidateDetailPage,
});

const auditRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/jobs/$jobId/audit",
  component: AuditPage,
});

const globalAuditRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/audit",
  component: GlobalAuditPage,
});

const routeTree = rootRoute.addChildren([
  dashboardRoute,
  candidatesRoute,
  checksRoute,
  reportsRoute,
  settingsRoute,
  jobsRoute,
  jobDetailRoute,
  candidateListRoute,
  candidateDetailRoute,
  auditRoute,
  globalAuditRoute,
]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
