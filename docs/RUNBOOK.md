# HireGuard Dev/Staging Runbook

This runbook defines the required order to stand up HireGuard in dev and staging.

## Prerequisites

- Node.js and npm
- Convex CLI access
- AWS credentials with permissions for SST/CDK deployment
- SES verified sender identity for target environment

## Deployment Order

1. Install dependencies
2. Deploy SST stacks
3. Export stack outputs
4. Set Convex environment variables from outputs
5. Start/deploy Convex backend
6. Start frontend

## 1) Install Dependencies

```bash
npm install
```

## 2) Deploy SST Stacks

Dev:

```bash
npx sst deploy --stage dev
```

Staging:

```bash
npx sst deploy --stage staging
```

## 3) Capture Stack Outputs

Record these values per stage:

- `ResumeBucketName`
- `PdfExtractUrl`
- `StatsComputeUrl`
- `SesAlertUrl`
- `AnthropicSecretArn`

## 4) Set Convex Environment Variables

For each stage deployment:

```bash
npx convex env set PDF_EXTRACT_URL <PdfExtractUrl>
npx convex env set STATS_COMPUTE_URL <StatsComputeUrl>
npx convex env set SES_ALERT_URL <SesAlertUrl>
npx convex env set ALERT_EMAIL_FROM <verified_sender_email>
npx convex env set ALERT_EMAIL_TO <recipient_email>
```

If using Anthropic through Convex env:

```bash
npx convex env set ANTHROPIC_API_KEY <key_or_stage_secret_value>
```

## 5) Start or Deploy Convex

Local dev:

```bash
npx convex dev
```

Hosted/staging:

```bash
npx convex deploy
```

## 6) Run Frontend

```bash
npm run dev
```

## Smoke Validation

1. Upload one candidate resume.
2. Confirm parser and matcher logs appear.
3. Trigger job audit and verify audit report updates.
4. Force a flagged condition and validate alert path is invoked.

## Rotation/Update Procedure

When rotating endpoint URLs or sender addresses:

1. Deploy updated SST stage.
2. Update Convex env values for affected variables.
3. Restart Convex deployment/session.
4. Re-run smoke validation steps.
