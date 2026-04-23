# HireGuard

HireGuard is a multi-agent hiring system with fairness auditing built on React, Convex, and AWS (SST/CDK).

## Stack

- React + TypeScript + Tailwind
- TanStack Router + TanStack Table
- Zustand for UI state
- Convex for data model, queries, mutations, actions, and scheduling
- `@convex-dev/agent` for agent orchestration
- SST/CDK for AWS resources (Lambda, S3, SES, Secrets Manager)

## v1 Contract

The implementation contract for v1 is documented in:

- `CLAUDE.md` (coding and architecture constraints)
- `docs/V1_CONTRACT.md` (what is in-scope and boundary rules)
- `docs/RUNBOOK.md` (dev/staging execution sequence)

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Start Convex + frontend:

```bash
npm run dev
```

3. For AWS-dependent flows (PDF extraction, stats compute, alerts), deploy SST and set Convex env values as documented in `docs/RUNBOOK.md`.

## Important Architectural Rules

- The client never calls internal Convex functions directly.
- Agent orchestration is internal-only and invoked through approved public entry points.
- Demographic data is never sent to evaluation/ranking agents.
- AWS secrets are managed through environment variables and Secrets Manager, not hardcoded.

## Project Status

This repository is under active integration. Follow `docs/RUNBOOK.md` for the authoritative dev/staging setup and deployment order.
