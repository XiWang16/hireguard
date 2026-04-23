# Environment Contract (Dev + Staging)

This file defines the required environment variables and where they are sourced.

## Variable Matrix

| Variable | Dev | Staging | Source |
| --- | --- | --- | --- |
| `CONVEX_DEPLOYMENT` | required | required | Convex CLI/local config |
| `VITE_CONVEX_URL` | required | required | Convex output |
| `VITE_CONVEX_SITE_URL` | required | required | Convex output |
| `PDF_EXTRACT_URL` | required | required | SST stack output (`PdfExtractUrl`) |
| `STATS_COMPUTE_URL` | required | required | SST stack output (`StatsComputeUrl`) |
| `SES_ALERT_URL` | required | required | SST stack output (`SesAlertUrl`) |
| `ALERT_EMAIL_FROM` | required | required | verified SES sender per stage |
| `ALERT_EMAIL_TO` | optional | optional | explicit alert recipient |
| `ANTHROPIC_API_KEY` | required | required | Convex env or AWS Secrets Manager bridge |

## Runtime Enforcement

- `resumeParser` fails fast if `PDF_EXTRACT_URL` is missing.
- `fairnessAuditor` fails fast if `STATS_COMPUTE_URL` is missing.
- `alerts` fails fast if `ALERT_EMAIL_FROM` or `SES_ALERT_URL` is missing.

## Recommended Setup Workflow

1. Deploy infra per stage (`sst deploy --stage <stage>`).
2. Copy outputs to Convex env variables.
3. Start/deploy Convex.
4. Start frontend and run smoke flow.
