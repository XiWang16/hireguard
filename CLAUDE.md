# HireGuard — Multi-Agent Hiring System with Fairness Audit

## Stack
- React 19 + TypeScript 5.5 (strict mode, no `any`)
- Tailwind CSS 4 via @tailwindcss/vite plugin (utility classes only, no CSS files)
- TanStack Query v5 for all server state (never raw useEffect+fetch)
- TanStack Table v8 for data grids
- TanStack Router for type-safe routing
- Zustand for client-only UI state (filters, selections, view toggles)
- Convex for backend (queries, mutations, actions, scheduled functions)
- @convex-dev/agent for AI agent orchestration
- SST v3 + AWS CDK for Lambda functions, S3, SES
- Recharts for data visualization

## Architecture Rules
- Convex is the single source of truth. No local databases.
- All data fetching goes through Convex useQuery/useMutation hooks.
- TanStack Query wraps Convex subscriptions only for complex caching patterns (pagination, optimistic updates on non-Convex endpoints).
- Zustand stores: one per UI concern. Never store server data in Zustand.
- Agents are defined in convex/agents/. Each agent gets its own file.
- Agent tools are defined in convex/tools/. Shared across agents.
- All Convex functions must have args validated with v.* validators.

## Code Style
- Functional components only. No class components.
- Named exports for components. Default exports only for pages.
- Use `clsx` for conditional class composition.
- Prefer early returns over nested ternaries.
- Error boundaries around every route-level component.
- All agent reasoning must be logged to the agentLogs table for auditability.

## File Structure
```
src/
  components/     # Reusable UI components
  pages/          # Route-level page components
  stores/         # Zustand stores (one file per store)
  hooks/          # Custom React hooks
  lib/            # Utilities, constants, types
convex/
  schema.ts       # Single source of truth for data model
  agents/         # Agent definitions
  tools/          # Agent tools
  functions/      # Queries, mutations, actions grouped by domain
sst.config.ts     # SST/CDK infrastructure
```

## Testing
- Use vitest for unit tests
- Use convex-test for Convex function tests
- Every Convex mutation must have at least one test

## Do NOT
- Use Redux, Context API for state, or any state lib other than Zustand
- Write raw SQL or use any ORM — Convex handles the database
- Put API keys in code — use Convex environment variables or AWS Secrets Manager
- Skip TypeScript types — every function argument and return type must be typed
- Use localStorage for anything — Zustand with no persistence, or Convex
