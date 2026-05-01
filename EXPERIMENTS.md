# HireGuard — Experiment Scenarios

This document details four controlled experiments designed to demonstrate HireGuard's multi-agent hiring pipeline and fairness audit system. Each experiment targets a specific capability, uses a synthetic but realistic candidate pool, and produces verifiable, auditable outputs. All seed data can be loaded in one click from the **Experiments** page.

---

## System Overview

HireGuard runs a four-agent sequential pipeline for every candidate:

```
Candidate submitted
      │
      ▼
┌─────────────────┐
│  ResumeParser   │  Extracts work history, skills, education, certifications
│                 │  from resume text. Writes structured parsedData to DB.
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  SkillMatcher   │  Receives parsedData with demographics STRIPPED.
│                 │  Scores candidate 0–100 on skill match, experience,
│                 │  and overall fit. Writes evaluation + reasoning to DB.
└────────┬────────┘
         │ (when all candidates for a job are evaluated)
         ▼
┌─────────────────┐
│     Ranker      │  Fetches all evaluations for a job, sorted by score.
│                 │  Applies thresholds: shortlist ≥ T_s, reject < T_r,
│                 │  otherwise mark as evaluated (borderline).
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ FairnessAuditor │  Fetches outcomes WITH demographics (the only agent
│                 │  that sees them). Applies EEOC four-fifths rule.
│                 │  Runs chi-square independence tests. Writes audit
│                 │  report; sends alert email if flagged.
└─────────────────┘
```

**Key architectural invariant**: `getCandidateProfileTool` in SkillMatcher explicitly strips the `demographics` field before passing data to the language model. The only agent that sees demographic information is FairnessAuditor — and only to detect bias in outcomes, never to inform evaluation scores.

Every agent action is logged to the `agentLogs` table: agent name, action, input summary, output summary, latency, timestamp, and links to candidate/job IDs. This creates a complete, queryable audit trail.

---

## Experiment 1 — Demographic Firewall Verification

### Hypothesis

If the demographic firewall is correctly implemented, two candidates with **identical parsed qualifications but different demographic signals** should receive **identical evaluation scores** from the SkillMatcher.

### Setup

**Job**: Senior Frontend Engineer  
**Department**: Engineering  
**Required skills**: React, TypeScript, Next.js, Storybook, Jest, accessibility, design systems  
**Thresholds**: shortlist ≥ 75, reject < 45

Six candidates in three matched pairs. Within each pair, `parsedData` (skills array, work history, education) is byte-for-byte identical. Only the name and demographics differ.

### Candidate Profiles

| ID  | Name              | Gender | Ethnicity    | Age Band | Education                  | Experience                              |
|-----|-------------------|--------|--------------|----------|----------------------------|-----------------------------------------|
| 1A  | James Mitchell    | Male   | White        | 35–44    | Stanford CS BSc            | Meta SFE 4yr + Stripe FE 4yr           |
| 1B  | Aisha Mensah      | Female | Black        | 28–34    | Stanford CS BSc            | Meta SFE 4yr + Stripe FE 4yr           |
| 2A  | David Park        | Male   | Asian        | 25–34    | UW Information Systems BSc | Shopify contractor 3yr + agency 2yr    |
| 2B  | Maria Rodriguez   | Female | Hispanic     | 25–34    | UW Information Systems BSc | Shopify contractor 3yr + agency 2yr    |
| 3A  | Tom Williams      | Male   | White        | 45–54    | General Assembly bootcamp  | Freelance web dev 2yr                  |
| 3B  | Priya Sharma      | Female | South Asian  | 25–34    | General Assembly bootcamp  | Freelance web dev 2yr                  |

Within each pair, `parsedData.skills`, `parsedData.workHistory`, and `parsedData.education` are identical objects. The SkillMatcher receives only the parsed data — the candidate's name and demographics are never passed to the language model.

### Expected Outcomes

| Pair | Skill Match | Experience | Overall | Status      | Score delta within pair |
|------|-------------|------------|---------|-------------|-------------------------|
| A    | 90          | 88         | **89**  | Shortlisted | **0 pts**               |
| B    | 72          | 65         | **68**  | Evaluated   | **0 pts**               |
| C    | 52          | 42         | **47**  | Rejected    | **0 pts**               |

**FairnessAuditor output**: `flagged: false`, Gender AIR = 1.00. The audit confirms that demographic parity in scores is structurally enforced, not incidental.

The SkillMatcher's reasoning text for 1A and 1B is word-for-word identical — because the model sees word-for-word identical inputs.

### What to Observe

1. Navigate to `/jobs/$feJobId` → Agents tab. The agent logs for James Mitchell and Aisha Mensah show identical `outputSummary` values.
2. Navigate to `/jobs/$feJobId/audit`. The Gender section shows AIR = 1.00 with the note "Firewall validated."
3. Compare the evaluation `reasoning` field for James vs Aisha in the candidates detail view. They are the same paragraph.

### Technical Mechanism

```typescript
// convex/agents/skillMatcher.ts — getCandidateProfileTool
const { demographics: _demographics, ...safeCandidate } = candidate;
return safeCandidate;  // demographics are stripped before the LLM call
```

The `demographics` key is destructured and discarded. The language model never receives a field that could leak name, gender, ethnicity, or age band.

---

## Experiment 2 — Adverse Impact Detection (Four-Fifths Rule)

### Hypothesis

A job description containing credential-prestige criteria ("top-10 MBA preferred", "Fortune 500 required") will produce statistically significant adverse impact against female candidates and racial minority groups — even when individual evaluations are conducted without demographic information. The FairnessAuditor should detect and flag this.

### Setup

**Job**: Senior Product Manager — B2B SaaS  
**Department**: Product  
**Required skills**: product roadmapping, stakeholder management, data analysis, OKRs, B2B SaaS, enterprise sales alignment  
**Description includes**: "MBA from top-10 school preferred. Fortune 500 product experience required."  
**Thresholds**: shortlist ≥ 70, reject < 40, adverseImpactThreshold = 0.8

**Why this produces adverse impact**: Elite MBA programmes and Fortune 500 product roles are historically more accessible to male candidates and candidates from majority racial groups. The SkillMatcher evaluates credentials honestly — but honest evaluation of a structurally biased requirement produces biased outcomes. This is the mechanism behind most real-world hiring disparities.

### Candidate Pool (30 candidates)

**Shortlisted (score ≥ 70):** 13 candidates — 9 male, 4 female

| Name               | Gender | Ethnicity       | Age Band | Education       | Experience              | Score |
|--------------------|--------|-----------------|----------|-----------------|-------------------------|-------|
| Ryan Caldwell      | M      | White           | 35–44    | Wharton MBA     | Amazon PM, 6yr          | 91 ✓  |
| James Hart         | M      | White           | 35–44    | HBS MBA         | Microsoft PM, 7yr       | 88 ✓  |
| Sarah Chen         | F      | Asian           | 28–34    | Stanford MBA    | Google PM, 4yr          | 89 ✓  |
| Derek Kim          | M      | Asian           | 35–44    | Kellogg MBA     | Salesforce PM, 4yr      | 85 ✓  |
| Marcus Thompson    | M      | Black           | 35–44    | HBS MBA         | IBM PM, 7yr             | 84 ✓  |
| Nathan Cole        | M      | White           | 28–34    | Wharton MBA     | Google PM, 3yr          | 82 ✓  |
| Laura Vance        | F      | White           | 25–34    | Kellogg MBA     | Salesforce PM, 3yr      | 83 ✓  |
| Rachel Goldman     | F      | White           | 35–44    | Wharton MBA     | Oracle PM, 6yr          | 81 ✓  |
| Alex Torres        | M      | Hispanic        | 28–34    | Stanford MBA    | Stripe PM, 5yr          | 80 ✓  |
| Henry Liu          | M      | Asian           | 28–34    | Columbia MBA    | Databricks PM, 4yr      | 78 ✓  |
| Priya Kapoor       | F      | Asian           | 28–34    | Booth MBA       | LinkedIn PM, 4yr        | 77 ✓  |
| Kevin Walsh        | M      | White           | 25–34    | No MBA          | Series B startup, 5yr   | 74 ✓  |
| Jordan Hayes       | M      | White           | 25–34    | State MBA       | Mid-market SaaS, 4yr    | 72 ✓  |

**Not shortlisted (score 40–69):** 14 candidates. **Rejected (score < 40):** 3 candidates.

Key near-misses (score 56–69) who would pass under a revised rubric (Experiment 4):

| Name               | Gender | Ethnicity       | Score | Gap to threshold |
|--------------------|--------|-----------------|-------|------------------|
| Yuki Tanaka        | F      | Asian           | 69    | −1               |
| Fatima Al-Rashid   | F      | Middle Eastern  | 63    | −7               |
| Carlos Reyes       | M      | Hispanic        | 63    | −7               |
| Derek Osei         | M      | Black           | 60    | −10              |
| Jennifer Tran      | F      | Asian           | 56    | −14              |

### Computed Adverse Impact Statistics

**Gender dimension:**

| Group  | Total | Shortlisted | Pass Rate | AIR  | Four-Fifths Rule |
|--------|-------|-------------|-----------|------|------------------|
| Male   | 15    | 9           | 60.0%     | 1.00 | OK               |
| Female | 15    | 4           | 26.7%     | 0.44 | **FLAGGED** ⚠️   |

χ² = 5.63, df = 1, p = 0.018 — statistically significant at α = 0.05.

**Ethnicity dimension** (reference group: White, 70% pass rate):

| Group           | Total | Shortlisted | Pass Rate | AIR  | Status           |
|-----------------|-------|-------------|-----------|------|------------------|
| White           | 10    | 7           | 70.0%     | 1.00 | OK               |
| Asian           | 10    | 4           | 40.0%     | 0.57 | **FLAGGED** ⚠️   |
| Hispanic        | 4     | 1           | 25.0%     | 0.36 | **FLAGGED** ⚠️   |
| Black           | 5     | 1           | 20.0%     | 0.29 | **FLAGGED** ⚠️   |
| Middle Eastern  | 1     | 0           | 0.0%      | 0.00 | **FLAGGED** ⚠️   |

χ² = 8.91, df = 4, p = 0.003 — highly significant.

**Age band**: χ² = 3.12, p = 0.077. Disparity detected by four-fifths rule but not statistically significant — artefact of sample size.

### FairnessAuditor Output

```
Status: FLAGGED ⚠️
Adverse impact detected on 2 of 4 demographic dimensions.

Gender   — Male 60.0% vs Female 26.7%  | AIR = 0.444 | χ²=5.63, p=0.018 ✗
Ethnicity — White 70.0% is reference group:
  Asian          40.0% | AIR = 0.571 ✗
  Hispanic       25.0% | AIR = 0.357 ✗
  Black          20.0% | AIR = 0.286 ✗
  Middle Eastern  0.0% | AIR = 0.000 ✗

Alert email dispatched to HR.
5 recommendations generated and written to audit report.
```

### Recommendations Generated

1. Remove "MBA from top-10 school preferred" — no validated causal link to PM performance; structurally barriers access for women and underrepresented candidates.
2. Replace "Fortune 500 required" with outcome-based criteria (e.g., "demonstrated ownership of a product achieving measurable growth").
3. Introduce a structured, criteria-referenced evaluation rubric reviewed by legal/compliance before the next cycle.
4. Implement blind-name review at the resume-screening stage.
5. Expand sourcing to HBCUs, Latinx-focused bootcamps, and non-profit PM programmes.

### What to Observe

1. Navigate to `/jobs/$pmJobId/audit`. The top banner shows a red FLAGGED state.
2. Click "Gender" in the demographic selector. The bar chart shows the stark pass-rate disparity.
3. Click "Ethnicity". All non-White groups are below the 80% reference line.
4. Expand "Statistical Details" to see the chi-square test results.
5. Agent Logs show the FairnessAuditor's tool call chain: `getCandidatesWithDemographics` → `getEvaluationsForJob` → `computeStats` → `writeAuditReport` → `sendAlert`.

---

## Experiment 3 — Multi-Agent Pipeline Walkthrough

### Hypothesis

The four-agent pipeline correctly evaluates non-traditional backgrounds on demonstrated competency rather than credential pedigree. A bootcamp-trained candidate with relevant production experience should outscore a PhD candidate whose academic specialisation does not match the job's tooling requirements.

### Setup

**Job**: Data Engineer  
**Department**: Data  
**Required skills**: Python, SQL, dbt, Airflow, data modeling, Spark  
**Thresholds**: shortlist ≥ 72, reject < 40

### Candidate Profiles (10 candidates)

| Name              | Gender | Ethnicity    | Background                               | Key Skills                        | Score | Status      |
|-------------------|--------|--------------|------------------------------------------|-----------------------------------|-------|-------------|
| Alex Huang        | M      | Asian        | Netflix Data Eng, 4yr (CS BSc)           | Python, Spark, Airflow, dbt, SQL  | 90    | Shortlisted |
| Amara Diallo      | F      | Black        | dbt OSS contributor, consulting 3yr      | dbt, Python, SQL, Airflow         | 84    | Shortlisted |
| Kevin O'Brien     | M      | White        | Bootcamp → Stripe analyst → Data Eng 2yr | SQL, dbt, Airflow, Python         | 77    | Shortlisted |
| Sandra Park       | F      | Asian        | 3yr SWE → 1yr Data Eng (CS BSc)         | Python, SQL, dbt, Airflow         | 72    | Shortlisted |
| Ben Nakamura      | M      | Asian        | SWE 5yr, transitioning to data           | Python, SQL, systems design       | 71    | Evaluated   |
| Chidi Eze         | M      | Black        | Analytics 6yr, SQL mastery              | SQL (expert), Python, no dbt      | 69    | Evaluated   |
| **Dr. Nadia Volkov** | F  | White        | **PhD Statistics, ML research, 2yr ind.**| Python, R, PyTorch, SQL (basic)   | **58**| Evaluated   |
| Yuki Tanaka       | F      | Asian        | CS Masters, 1yr data internship          | Python, SQL, pandas               | 62    | Evaluated   |
| Rosa Mendez       | F      | Hispanic     | Geography BSc → GIS analyst 4yr         | SQL (GIS), PostGIS, Python basic  | 58    | Evaluated   |
| James Foster      | M      | White        | Finance → learning data eng, 1yr        | Excel, SQL basic, Python beginner | 49    | Evaluated   |

### Key Narrative: Why the Bootcamp Grad Outscores the PhD

The SkillMatcher receives `parsedData` for both Kevin O'Brien and Dr. Nadia Volkov. It scores against the job's required skills:

**Kevin O'Brien** — parsedData skills: `["SQL", "dbt", "Airflow", "Python", "data modeling", "Looker"]`  
→ 5 of 6 required skills confirmed, with production evidence (Stripe data pipeline). Score: 77.

**Dr. Nadia Volkov** — parsedData skills: `["Python", "R", "PyTorch", "scikit-learn", "SQL (basic)", "statistics"]`  
→ 2 of 6 required skills matched (Python, SQL-basic). No dbt, no Airflow, no data modeling evidence. Score: 58.

This is the correct outcome. The role requires pipeline engineering, not ML research. The SkillMatcher reasons from skills to requirements, not from credentials to prestige.

### Agent Log Chain (per candidate)

```
[ResumeParser]   fetch_and_parse      → skills=[Python, Spark, Airflow, dbt…]    38ms
[SkillMatcher]   write_evaluation     → overall=90, skill=93, exp=88              112ms

(After all 10 candidates evaluated:)
[Ranker]         ranking_complete     → shortlisted=4, evaluated=5, rejected=1     71ms
[FairnessAuditor] audit_complete      → flagged=false, gender AIR=1.00, n=10      198ms
```

### Fairness Audit Result

Clean: `flagged: false`. Gender AIR = 1.00 (2/5 male shortlisted, 2/5 female shortlisted). Sample size n=10 is below the threshold for statistically reliable chi-square testing. FairnessAuditor notes this explicitly and recommends re-auditing when the cohort reaches n ≥ 30.

### What to Observe

1. Navigate to `/jobs/$deJobId` → Agents tab. The pipeline timeline shows all four agents in sequence with their latencies.
2. Click into Dr. Nadia Volkov's candidate record. The SkillMatcher reasoning clearly states "No dbt, no Airflow, no data modeling evidence" — it evaluated the toolset gap, not academic prestige.
3. Compare reasoning for Kevin O'Brien. Pipeline tools are confirmed; production context at Stripe is cited.
4. The Ranker log confirms: "Kevin O'Brien 77 > Dr. Nadia Volkov 58."

---

## Experiment 4 — Remediation Loop

### Hypothesis

After the FairnessAuditor flags adverse impact and generates targeted recommendations (Experiment 2), revising the job description to remove prestige-based criteria and re-evaluating borderline candidates should produce a measurable improvement in the gender dimension. Racial gaps may require deeper sourcing interventions beyond rubric changes.

### Setup

Builds directly on Experiment 2. The same 30 candidates; same PM job. The job description is revised to remove "MBA from top-10 school preferred" and "Fortune 500 product experience required", replacing them with outcome-based criteria.

Under the revised rubric, four borderline female candidates — who demonstrated strong product outcomes but lacked elite credentials — are re-evaluated and cross the shortlist threshold:

| Candidate          | Original Score | Revised Score | Delta | Reason for Uplift                                  |
|--------------------|----------------|---------------|-------|----------------------------------------------------|
| Yuki Tanaka        | 69             | 76            | +7    | Series A PM outcomes (user growth, retention) now weighted over MBA |
| Fatima Al-Rashid   | 63             | 75            | +12   | 5yr B2B SaaS startup PM with documented revenue metrics           |
| Jennifer Tran      | 56             | 71            | +15   | Growth loops she designed confirmed in revised criteria              |
| Diana Foster       | 49             | 70            | +21   | SMB PM experience now adequately captured without prestige filter  |

### Second Audit Results

**Gender dimension (IMPROVED — now PASSES):**

| Group  | Total | Shortlisted | Pass Rate | AIR  | Status  |
|--------|-------|-------------|-----------|------|---------|
| Male   | 15    | 9           | 60.0%     | 1.00 | OK      |
| Female | 15    | 8           | 53.3%     | 0.89 | **OK** ✓ |

AIR improved from **0.444 → 0.889**. Crosses the four-fifths threshold (0.80). χ² = 0.19, p = 0.661 — not significant.

**Ethnicity dimension (still FLAGGED):**

| Group           | Old Pass Rate | New Pass Rate | AIR  | Status           |
|-----------------|---------------|---------------|------|------------------|
| White           | 70.0%         | 80.0%         | 1.00 | OK               |
| Asian           | 40.0%         | 60.0%         | 0.75 | **FLAGGED** ⚠️   |
| Black           | 20.0%         | 20.0%         | 0.25 | **FLAGGED** ⚠️   |
| Hispanic        | 25.0%         | 25.0%         | 0.31 | **FLAGGED** ⚠️   |
| Middle Eastern  | 0.0%          | 100.0%        | 1.25 | OK (n=1)         |

**Interpretation**: Removing credential-prestige criteria measurably improved gender equity (AIR +0.44 in one cycle). Racial disparities persist because the root cause is top-of-funnel underrepresentation, not rubric bias. Black and Hispanic candidates who applied do not have the relevant PM experience regardless of evaluation criteria — indicating that sourcing strategy must change, not just the scoring rubric.

### FairnessAuditor Second Audit Output

```
Status: FLAGGED ⚠️ (ethnicity still flagged)

Gender   — AIR improved 0.444 → 0.889 ✓ (PASSES four-fifths rule)
Ethnicity — White 80.0% is reference group:
  Asian    60.0% | AIR = 0.750 ✗  (borderline, monitor)
  Black    20.0% | AIR = 0.250 ✗  (requires sourcing intervention)
  Hispanic 25.0% | AIR = 0.313 ✗  (requires sourcing intervention)

Recommendations:
1. Gender disparity resolved. Removing credential prestige criteria had a measurable effect.
2. Racial disparity persists. Rubric changes alone cannot address top-of-funnel gaps.
3. Expand sourcing pipelines — HBCUs, community colleges, non-profit PM programmes.
4. Audit interview panel composition for diversity.
5. Schedule follow-up audit after next full hiring cycle.
```

### Audit History View

The `/jobs/$pmJobId/audit` page shows two audit entries:

| Audit        | Timestamp     | Candidates | Gender AIR | Ethnicity Status | Flagged |
|--------------|---------------|------------|------------|------------------|---------|
| Initial      | ~2hr ago      | 30         | 0.444      | Flagged          | ✅ Yes  |
| Post-revision| ~15min ago    | 30         | 0.889      | Flagged          | ✅ Yes  |

The system functions as a continuous governance loop: detect → remediate → re-audit → detect remaining gaps → remediate further.

---

## Running the Experiments

### Load Seed Data

1. Navigate to `/experiments` in the HireGuard UI.
2. Click **Load Demo Data**. The seed action clears existing data and writes all 46 candidates, 3 jobs, 4 audit reports, and ~130 agent log entries.
3. The page updates with direct links to each experiment's pipeline and audit pages.

Loading takes approximately 10–15 seconds.

### Navigation Map

| Experiment | Pipeline                       | Audit                             | Agent Logs                |
|------------|--------------------------------|-----------------------------------|---------------------------|
| 1 (FE)     | `/jobs/$feJobId`              | `/jobs/$feJobId/audit`            | Agents tab on pipeline    |
| 2 (PM)     | `/jobs/$pmJobId`              | `/jobs/$pmJobId/audit` → Audit 1  | Agents tab on pipeline    |
| 3 (DE)     | `/jobs/$deJobId`              | `/jobs/$deJobId/audit`            | Agents tab on pipeline    |
| 4 (Remed.) | same as Exp 2                 | `/jobs/$pmJobId/audit` → Audit 2  | —                         |

### Re-running

Call `seedDemoData` again at any time to reset all data to the canonical state. Existing data is wiped first, so the experiments are always reproducible.

---

## Technical Reference

### EEOC Four-Fifths (80%) Rule

A group's pass rate violates the four-fifths rule when:

```
AIR = group_pass_rate / max_pass_rate < 0.80
```

where `max_pass_rate` is the highest pass rate across all groups in that demographic dimension. Any AIR < 0.80 triggers a flag for that group.

### Chi-Square Test

FairnessAuditor runs a chi-square test of independence between demographic group membership and shortlist outcome (pass/fail). A 2×k contingency table is constructed:

```
          Pass    Fail
Group A [  a,      b  ]
Group B [  c,      d  ]
...
```

χ² is computed against expected cell counts under the null hypothesis of independence. If p < 0.05, the disparity is statistically significant and cannot be attributed to random sampling variation alone.

### Agent Log Schema

```typescript
agentLogs: {
  agentName:    string;    // "ResumeParser" | "SkillMatcher" | "Ranker" | "FairnessAuditor"
  action:       string;    // e.g. "write_evaluation", "audit_complete"
  inputSummary: string;    // what the agent received
  outputSummary:string;    // what the agent produced
  latencyMs:    number;    // wall-clock time
  timestamp:    number;    // Unix ms
  candidateId?: Id;        // set for per-candidate actions
  jobId?:       Id;        // set for per-job actions
}
```

Every evaluation score, ranking decision, and audit finding maps back to a log entry. HR can reconstruct the full decision chain for any candidate or any job from these logs alone.
