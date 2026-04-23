# HireGuard

**HireGuard** is a Multi-Agent Hiring System with a built-in Fairness Audit. It is designed to modernize and streamline the recruitment process by leveraging AI agents to assist in evaluating candidates while ensuring unbiased and fair hiring practices.

## System Overview

HireGuard uses a distributed, agent-based architecture to process applications, summarize candidate profiles, and flag potential biases. It ensures transparency by keeping an immutable audit trail of all agent reasoning.

### Core Features
- **Multi-Agent Orchestration**: AI agents handle different aspects of the hiring pipeline (e.g., resume parsing, skill matching, initial screening).
- **Fairness Audit**: Automated checks to ensure candidate evaluations are free from systemic biases.
- **Real-Time Collaboration**: Live updates across all connected clients so recruiters can work together seamlessly.

## Tech Stack

HireGuard is built on a modern, highly scalable, and fully type-safe stack:

### Frontend
- **React (v19)**: The core UI library for building reactive, component-driven user interfaces.
- **TypeScript**: Ensures end-to-end type safety across the entire application.
- **Tailwind CSS (v4)**: A utility-first CSS framework for rapid, consistent, and maintainable styling colocated with components.
- **TanStack (Query & Router)**: Used for precise, type-safe routing and managing complex server state caching (when interacting with external APIs).
- **Zustand**: A lightweight, boilerplate-free state manager for handling transient client-side UI state (e.g., sidebar toggles, complex form steps).

### Backend & Database
- **Convex**: Our primary serverless backend and database. It natively pushes real-time database updates directly to React components via WebSockets, eliminating the need for manual data fetching and invalidation.

### Infrastructure (AWS)
- **SST (Serverless Stack v3)**: Provides an incredible developer experience for deploying modern full-stack apps to AWS, including local Live Lambda Development.
- **AWS CDK**: Infrastructure-as-code (IaC) allows us to provision AWS resources (like S3, SES, or custom queues) directly in TypeScript, keeping our infrastructure in sync with our codebase.

## Getting Started

To run this project locally:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server (runs Vite and Convex concurrently):
   ```bash
   npm run dev
   ```

3. Open your browser to the local URL provided by Vite (usually `http://localhost:5173`).

## Project Structure
- `/src`: Contains all React components, Zustand stores, and frontend logic.
- `/convex`: Contains the database schema, backend functions (mutations/queries), and agent definitions.
