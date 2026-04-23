# HireGuard v1 Implementation Contract

This document is the source of truth for what must be complete for v1 in dev and staging.

## In Scope (Must Ship)

1. Core hiring pipeline
   - Candidate submission
   - Resume parsing
   - Skill matching and evaluation
   - Ranking and status updates
2. Fairness auditing
   - Four-fifths rule calculations
   - Statistical compute integration
   - Audit report persistence and retrieval
   - Alert trigger path when adverse impact is flagged
3. Frontend operations
   - Dashboard and job pipeline views
   - Candidate detail view with explainability
   - Job-level and global audit pages
4. AWS integration
   - S3 for resume/audit artifacts
   - Lambda endpoint for PDF extraction
   - Lambda endpoint for fairness statistics
   - SES-backed alert delivery path
   - Secrets Manager for key material
5. Environment parity for dev and staging
   - documented variable contract
   - repeatable deployment sequence

## Out of Scope (Deferred)

- Full automated test suite expansion
- CI/CD guardrail hardening
- Advanced observability dashboards

## Convex API Boundary Rules

- Public client code may only call public Convex `query`, `mutation`, and `action` exports through `api.*`.
- Internal orchestration steps are `internalQuery`, `internalMutation`, and `internalAction` only and are referenced through `internal.*`.
- Any user-triggered operation that needs internal orchestration must expose a public wrapper action.

## Agent Interaction Model

1. Public entry points create/schedule work.
2. Internal pipeline action orchestrates agents.
3. Agents call typed tools and internal functions.
4. Agent activity is logged to `agentLogs`.
5. Fairness auditor can access demographics; evaluator and ranker cannot.

## AWS Dependency Matrix

- `resumeParser`:
  - hard dependency for full behavior: `PDF_EXTRACT_URL`
  - degraded behavior allowed only for local fallback
- `fairnessAuditor`:
  - hard dependency for full behavior: `STATS_COMPUTE_URL`
  - local fallback exists for temporary local operation only
- `alerts`:
  - hard dependency for actual email delivery: `SES_ALERT_URL`, `ALERT_EMAIL_FROM`

## Acceptance for Steps 1-4

- Documentation and repository implementation paths are aligned.
- Function visibility boundaries are enforced.
- Infra resources are present and deployable.
- Dev and staging runbooks are deterministic and complete.
