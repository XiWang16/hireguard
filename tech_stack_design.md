# Tech Stack & Design Decisions

This document outlines the core technologies used (or intended to be used) in our architecture and the key design decisions behind choosing this specific stack.

## Frontend Architecture

┌─────────────────────────────────────────────────────────┐
│  FRONTEND (React + TS + Tailwind + TanStack + Zustand)  │
│                                                         │
│  ┌──────────┐ ┌──────────┐ ┌──────────────────────┐    │
│  │ Pipeline │ │ Candidate│ │   Fairness Audit      │    │
│  │ Dashboard│ │ Detail   │ │   Dashboard           │    │
│  └──────────┘ └──────────┘ └──────────────────────┘    │
│         │            │              │                    │
│    TanStack Query  TanStack    TanStack Table           │
│    (server state)  Router      + Recharts               │
│         │          (routing)        │                    │
│    Zustand (UI state: filters, selections, view mode)   │
└────────────────────────┬────────────────────────────────┘
                         │ Convex React hooks
┌────────────────────────┴────────────────────────────────┐
│  CONVEX BACKEND                                         │
│                                                         │
│  ┌─────────────────────────────────────────────┐        │
│  │  Agent Layer (@convex-dev/agent)             │        │
│  │                                              │        │
│  │  Resume Parser Agent                         │        │
│  │       ↓                                      │        │
│  │  Skill Matcher Agent                         │        │
│  │       ↓                                      │        │
│  │  Ranking Agent                               │        │
│  │       ↓ (writes decisions)                   │        │
│  │  Fairness Auditor Agent (reads decisions,    │        │
│  │       runs statistical tests, flags issues)  │        │
│  └─────────────────────────────────────────────┘        │
│                                                         │
│  Tables: jobs, candidates, evaluations, auditReports,   │
│          demographicStats, agentThreads                  │
│                                                         │
│  Scheduled Functions: hourly fairness sweep,            │
│          daily aggregate report                          │
│  Durable Workflows: candidate processing pipeline       │
│  Vector Search: skill/experience matching               │
│  File Storage: uploaded resumes (PDF)                   │
└────────────────────────┬────────────────────────────────┘
                         │ Convex actions call Lambda
┌────────────────────────┴────────────────────────────────┐
│  AWS (SST + CDK)                                        │
│                                                         │
│  Lambda: PDF text extraction (pdf-parse)                │
│  Lambda: Heavy statistical compute (ANOVA, chi-square)  │
│  S3: Resume archive + audit report exports              │
│  SES: Alert emails when adverse impact detected         │
│  Secrets Manager: LLM API keys                          │
│  CloudWatch: Monitoring + alerting                      │
└─────────────────────────────────────────────────────────┘

### 1. React
* **Role in Codebase:** Serves as our foundational UI library for building component-driven user interfaces.
* **Design Decision:** We chose React for its massive ecosystem, mature rendering models, and declarative component paradigm. Moving to modern React (like React 19) allows us to leverage concurrent rendering and optimized hooks.

### 2. TypeScript
* **Role in Codebase:** Provides strict static typing across both the frontend and backend.
* **Design Decision:** End-to-end type safety. By using TypeScript, we catch errors at compile time rather than runtime. It enables seamless integration between the database schema, backend functions, and frontend components, drastically improving Developer Experience (DX) and refactoring safety.

### 3. Tailwind CSS
* **Role in Codebase:** Utility-first CSS framework for styling components.
* **Design Decision:** Colocation of styles. Instead of managing separate stylesheet files, Tailwind allows us to rapidly style components directly within the markup. This reduces dead CSS, improves maintainability, and ensures a consistent design system.

## Client-Side State & Routing

### 4. TanStack (Query / Router)
* **Role in Codebase:** Traditionally used for async server state management (TanStack Query) and strict, type-safe routing (TanStack Router).
* **Design Decision:** *Separation of Server and Client State.* While Convex handles real-time subscriptions natively, TanStack fits into the architecture for complex caching, deduplication, or integrating third-party REST/GraphQL APIs outside of Convex. Using TanStack Router guarantees that URL parameters and routes are strictly typed.

### 5. Zustand
* **Role in Codebase:** Lightweight, unopinionated client-side state management.
* **Design Decision:** *Minimal Boilerplate.* Unlike Redux, Zustand requires almost no boilerplate. It is used strictly for transient, purely client-side UI state (like managing complex multi-step forms, sidebar toggles, or local user preferences) that doesn't need to be persisted to the backend server.

## Backend & Database

### 6. Convex
* **Role in Codebase:** Our primary backend-as-a-service, acting as the database, server, and real-time syncing layer.
* **Design Decision:** *Real-time by default and end-to-end type safety.* Convex replaces traditional REST/GraphQL APIs and ORMs. It automatically pushes database updates directly to React components via WebSockets (`useQuery`), reducing the need for manual data invalidation and drastically accelerating full-stack product iteration.

## Infrastructure & Deployment (AWS)

### 7. SST (Serverless Stack)
* **Role in Codebase:** Tooling and framework for deploying modern, full-stack applications to AWS.
* **Design Decision:** *Developer Experience for Serverless.* SST allows us to build and test AWS serverless features (like cron jobs, queues, or advanced microservices that fall outside Convex's scope) locally with Live Lambda Development. It wraps complex AWS primitives into easy-to-use developer constructs.

### 8. AWS CDK (Cloud Development Kit)
* **Role in Codebase:** Infrastructure-as-code (IaC) tool to provision AWS resources using TypeScript.
* **Design Decision:** *Programmable Infrastructure.* SST is built on top of AWS CDK. By using CDK/SST, our infrastructure is version-controlled and written in the same language (TypeScript) as our application logic. This avoids brittle dashboard clicks or verbose declarative YAML files, fully adopting an "infrastructure-is-code" philosophy.

---

## Summary of Architectural Strategy
The overarching design philosophy of this stack is **Velocity, Type Safety, and Scalability**:
1. **End-to-End Typing:** TypeScript ensures the DB (Convex), the infrastructure (CDK/SST), the routing (TanStack), and the UI (React) all share the same type contract.
2. **State Segregation:** Convex manages persisted server state seamlessly; TanStack handles third-party API caching; Zustand handles transient local UI state.
3. **Serverless Infrastructure:** We defer operational overhead to managed services (Convex) and serverless AWS constructs (SST/CDK) so the team can focus purely on business logic rather than scaling servers.