import { action, query } from "../_generated/server";
import { internal, api } from "../_generated/api";
import type { Id } from "../_generated/dataModel";

// Helper mutations live in their domain files so the generated types are always current:
//   internal.functions.candidates.clearAllData
//   internal.functions.candidates.insertSeedCandidate
//   internal.functions.jobs.insertSeedJob

// ─── Status query (used by ExperimentsPage) ───────────────────────────────────

export const getSeedStatus = query({
  args: {},
  handler: async (ctx) => {
    const jobs = await ctx.db.query("jobs").collect();
    const byTitle = new Map(jobs.map((j) => [j.title, j]));
    const feJob = byTitle.get("Senior Frontend Engineer") ?? null;
    const pmJob = byTitle.get("Senior Product Manager — B2B SaaS") ?? null;
    const deJob = byTitle.get("Data Engineer") ?? null;
    return {
      seeded: !!(feJob && pmJob && deJob),
      feJobId: feJob?._id ?? null,
      pmJobId: pmJob?._id ?? null,
      deJobId: deJob?._id ?? null,
    };
  },
});

// ─── Data: Experiment 1 — Senior Frontend Engineer ───────────────────────────
// Six candidates in three matched pairs. parsedData is IDENTICAL within each pair.
// This proves the demographic firewall: the SkillMatcher evaluates only parsed
// credentials, never name or demographic signals.

const REASONING_PAIR_A =
  "Candidate demonstrates exceptional frontend engineering qualifications. Skills inventory confirms React, TypeScript, Next.js, Storybook, Jest, and accessibility tooling — a complete match against all required skills. Eight years of progressive experience, including a senior IC role at Meta handling UI systems at scale and design-systems ownership at Stripe. Stanford CS provides strong theoretical foundations. Skill match 90: all seven required skills present at advanced proficiency. Experience 88: tenure, seniority, and scope align well with a senior-level placement.";

const REASONING_PAIR_B =
  "Mid-level frontend profile with solid React and TypeScript foundation. Work history documents five years across a contractor role at Shopify and a junior position at a digital agency. Next.js, Storybook, and accessibility work are absent from the documented skill set; Cypress is present but Jest is not. Skill match 72: core framework proficiency confirmed but 3 of 7 required skills missing. Experience 65: years of experience are adequate but progression to senior-level ownership has not yet been demonstrated.";

const REASONING_PAIR_C =
  "Foundational frontend profile insufficient for a senior role. Documented skills — React, JavaScript, CSS, HTML — cover only 2 of 7 required competencies. Work history shows two years of freelance web development; no evidence of TypeScript, Next.js, Storybook, testing frameworks, accessibility work, or collaborative engineering at scale. The AWS Cloud Practitioner certification is irrelevant to this role. Skill match 52: significant gaps in required technical competencies. Experience 42: below the baseline for a senior-level engineering position.";

const PARSED_PAIR_A = {
  workHistory: [
    { company: "Meta", title: "Senior Frontend Engineer", years: "2020–2024", skills: ["React", "TypeScript", "GraphQL", "accessibility"] },
    { company: "Stripe", title: "Frontend Engineer", years: "2016–2020", skills: ["React", "JavaScript", "design systems", "Storybook"] },
  ],
  education: [{ school: "Stanford University", degree: "BSc Computer Science", year: "2016" }],
  skills: ["React", "TypeScript", "Next.js", "Storybook", "Jest", "Accessibility", "GraphQL", "CSS-in-JS", "design systems"],
  certifications: [] as string[],
};

const PARSED_PAIR_B = {
  workHistory: [
    { company: "Shopify (contractor)", title: "Frontend Developer", years: "2021–2024", skills: ["React", "TypeScript", "Cypress"] },
    { company: "Pixel Studio", title: "Junior Developer", years: "2019–2021", skills: ["React", "CSS", "jQuery"] },
  ],
  education: [{ school: "University of Washington", degree: "BSc Information Systems", year: "2019" }],
  skills: ["React", "TypeScript", "Cypress", "CSS", "HTML", "Figma"],
  certifications: [] as string[],
};

const PARSED_PAIR_C = {
  workHistory: [
    { company: "Freelance", title: "Web Developer", years: "2022–2024", skills: ["React", "CSS", "WordPress"] },
  ],
  education: [{ school: "General Assembly", degree: "Software Engineering Bootcamp", year: "2022" }],
  skills: ["React", "JavaScript", "CSS", "HTML"],
  certifications: ["AWS Cloud Practitioner"],
};

type Exp1Candidate = {
  name: string; email: string; role: string;
  gender: string; ethnicity: string; ageBand: string;
  skillMatchScore: number; experienceScore: number; overallScore: number;
  reasoning: string; parsedData: typeof PARSED_PAIR_A;
  tags: string[]; verified: boolean;
};

const EXP1_CANDIDATES: Exp1Candidate[] = [
  { name: "James Mitchell",  email: "j.mitchell@email.com",  role: "Senior Frontend Engineer",
    gender: "Male",   ethnicity: "White",       ageBand: "35-44",
    skillMatchScore: 90, experienceScore: 88, overallScore: 89,
    reasoning: REASONING_PAIR_A, parsedData: PARSED_PAIR_A,
    tags: ["React", "TypeScript", "a11y"], verified: true },
  { name: "Aisha Mensah",    email: "a.mensah@email.com",    role: "Senior Frontend Engineer",
    gender: "Female", ethnicity: "Black",       ageBand: "28-34",
    skillMatchScore: 90, experienceScore: 88, overallScore: 89,
    reasoning: REASONING_PAIR_A, parsedData: PARSED_PAIR_A,
    tags: ["React", "TypeScript", "a11y"], verified: true },
  { name: "David Park",      email: "d.park@email.com",      role: "Frontend Developer",
    gender: "Male",   ethnicity: "Asian",       ageBand: "25-34",
    skillMatchScore: 72, experienceScore: 65, overallScore: 68,
    reasoning: REASONING_PAIR_B, parsedData: PARSED_PAIR_B,
    tags: ["React", "TypeScript"], verified: false },
  { name: "Maria Rodriguez", email: "m.rodriguez@email.com", role: "Frontend Developer",
    gender: "Female", ethnicity: "Hispanic",    ageBand: "25-34",
    skillMatchScore: 72, experienceScore: 65, overallScore: 68,
    reasoning: REASONING_PAIR_B, parsedData: PARSED_PAIR_B,
    tags: ["React", "TypeScript"], verified: false },
  { name: "Tom Williams",    email: "t.williams@email.com",  role: "Web Developer",
    gender: "Male",   ethnicity: "White",       ageBand: "45-54",
    skillMatchScore: 52, experienceScore: 42, overallScore: 47,
    reasoning: REASONING_PAIR_C, parsedData: PARSED_PAIR_C,
    tags: ["React", "CSS"], verified: false },
  { name: "Priya Sharma",    email: "p.sharma@email.com",    role: "Web Developer",
    gender: "Female", ethnicity: "South Asian", ageBand: "25-34",
    skillMatchScore: 52, experienceScore: 42, overallScore: 47,
    reasoning: REASONING_PAIR_C, parsedData: PARSED_PAIR_C,
    tags: ["React", "CSS"], verified: false },
];

// ─── Data: Experiment 2 — Senior PM (adverse impact scenario) ─────────────────
// 30 candidates. "top-10 MBA preferred + Fortune 500 required" criteria correlate
// with gender and ethnicity, producing AIR violations.
//
// Thresholds: shortlist ≥ 70, reject < 40.
// Gender   — Male 60% (9/15), Female 26.7% (4/15), AIR = 0.44 → FLAGGED
// Ethnicity — White 70% reference: Asian AIR=0.57, Black AIR=0.29, Hispanic AIR=0.36, ME AIR=0.00

function pmReasoning(edu: string, exp: string, overall: number): string {
  if (overall >= 80)
    return `${edu} combined with ${exp} demonstrates strong strategic and execution credentials across all required PM competencies. Roadmapping, stakeholder management, data analysis, and B2B SaaS experience all confirmed. No significant gaps against job requirements.`;
  if (overall >= 70)
    return `${edu} and ${exp} show solid PM experience with core competencies present. Some gaps relative to top candidates in credential prestige or enterprise-scale product ownership scope.`;
  if (overall >= 55)
    return `${exp} demonstrates meaningful product experience but key gaps noted. ${edu} and limited documented evidence of structured enterprise roadmapping or large-scale stakeholder management. B2B SaaS context present but at smaller scale than required.`;
  return `${exp} provides limited evidence of required PM competencies at the needed seniority level. ${edu} does not compensate for thin product ownership experience. Missing key indicators for a senior B2B SaaS PM role.`;
}

type Exp2Row = {
  name: string; email: string; gender: string; ethnicity: string; ageBand: string;
  education: string; experience: string;
  skillMatchScore: number; experienceScore: number; overallScore: number;
};

const EXP2_CANDIDATES: Exp2Row[] = [
  { name: "Ryan Caldwell",    email: "r.caldwell@email.com",  gender: "Male",   ethnicity: "White",          ageBand: "35-44", education: "Wharton MBA",   experience: "Amazon PM, 6yr",            skillMatchScore: 91, experienceScore: 90, overallScore: 91 },
  { name: "James Hart",       email: "j.hart@email.com",       gender: "Male",   ethnicity: "White",          ageBand: "35-44", education: "HBS MBA",       experience: "Microsoft PM, 7yr",         skillMatchScore: 87, experienceScore: 89, overallScore: 88 },
  { name: "Derek Kim",        email: "d.kim@email.com",        gender: "Male",   ethnicity: "Asian",          ageBand: "35-44", education: "Kellogg MBA",   experience: "Salesforce PM, 4yr",        skillMatchScore: 85, experienceScore: 84, overallScore: 85 },
  { name: "Marcus Thompson",  email: "m.thompson@email.com",   gender: "Male",   ethnicity: "Black",          ageBand: "35-44", education: "HBS MBA",       experience: "IBM PM, 7yr",               skillMatchScore: 83, experienceScore: 85, overallScore: 84 },
  { name: "Nathan Cole",      email: "n.cole@email.com",       gender: "Male",   ethnicity: "White",          ageBand: "28-34", education: "Wharton MBA",   experience: "Google PM, 3yr",            skillMatchScore: 82, experienceScore: 81, overallScore: 82 },
  { name: "Alex Torres",      email: "a.torres@email.com",     gender: "Male",   ethnicity: "Hispanic",       ageBand: "28-34", education: "Stanford MBA",  experience: "Stripe PM, 5yr",            skillMatchScore: 80, experienceScore: 79, overallScore: 80 },
  { name: "Henry Liu",        email: "h.liu@email.com",        gender: "Male",   ethnicity: "Asian",          ageBand: "28-34", education: "Columbia MBA",  experience: "Databricks PM, 4yr",        skillMatchScore: 78, experienceScore: 77, overallScore: 78 },
  { name: "Kevin Walsh",      email: "k.walsh@email.com",      gender: "Male",   ethnicity: "White",          ageBand: "25-34", education: "No MBA",        experience: "Series B startup PM, 5yr",  skillMatchScore: 74, experienceScore: 73, overallScore: 74 },
  { name: "Jordan Hayes",     email: "j.hayes@email.com",      gender: "Male",   ethnicity: "White",          ageBand: "25-34", education: "State MBA",     experience: "Mid-market SaaS PM, 4yr",   skillMatchScore: 72, experienceScore: 71, overallScore: 72 },
  { name: "Tyler Brooks",     email: "t.brooks@email.com",     gender: "Male",   ethnicity: "White",          ageBand: "25-34", education: "No MBA",        experience: "Agency PM, 4yr",            skillMatchScore: 68, experienceScore: 67, overallScore: 68 },
  { name: "Carlos Reyes",     email: "c.reyes@email.com",      gender: "Male",   ethnicity: "Hispanic",       ageBand: "28-34", education: "No MBA",        experience: "Regional firm PM, 5yr",     skillMatchScore: 62, experienceScore: 63, overallScore: 63 },
  { name: "Derek Osei",       email: "d.osei@email.com",       gender: "Male",   ethnicity: "Black",          ageBand: "25-34", education: "State MBA",     experience: "Mid-size SaaS PM, 4yr",     skillMatchScore: 59, experienceScore: 61, overallScore: 60 },
  { name: "Anthony Brooks",   email: "a.brooks@email.com",     gender: "Male",   ethnicity: "Black",          ageBand: "25-34", education: "No MBA",        experience: "Non-profit PM, 6yr",        skillMatchScore: 55, experienceScore: 57, overallScore: 56 },
  { name: "Mike Patel",       email: "m.patel@email.com",      gender: "Male",   ethnicity: "Asian",          ageBand: "25-34", education: "No MBA",        experience: "Early-stage startup, 2yr",  skillMatchScore: 50, experienceScore: 52, overallScore: 52 },
  { name: "Sam Johnson",      email: "s.johnson@email.com",    gender: "Male",   ethnicity: "White",          ageBand: "25-34", education: "No MBA",        experience: "Junior PM, 2yr",            skillMatchScore: 43, experienceScore: 44, overallScore: 44 },
  { name: "Sarah Chen",       email: "s.chen@email.com",       gender: "Female", ethnicity: "Asian",          ageBand: "28-34", education: "Stanford MBA",  experience: "Google PM, 4yr",            skillMatchScore: 90, experienceScore: 88, overallScore: 89 },
  { name: "Laura Vance",      email: "l.vance@email.com",      gender: "Female", ethnicity: "White",          ageBand: "25-34", education: "Kellogg MBA",   experience: "Salesforce PM, 3yr",        skillMatchScore: 83, experienceScore: 82, overallScore: 83 },
  { name: "Rachel Goldman",   email: "r.goldman@email.com",    gender: "Female", ethnicity: "White",          ageBand: "35-44", education: "Wharton MBA",   experience: "Oracle PM, 6yr",            skillMatchScore: 80, experienceScore: 81, overallScore: 81 },
  { name: "Priya Kapoor",     email: "p.kapoor@email.com",     gender: "Female", ethnicity: "Asian",          ageBand: "28-34", education: "Booth MBA",     experience: "LinkedIn PM, 4yr",          skillMatchScore: 77, experienceScore: 76, overallScore: 77 },
  { name: "Yuki Tanaka",      email: "y.tanaka@email.com",     gender: "Female", ethnicity: "Asian",          ageBand: "25-34", education: "No MBA",        experience: "Series A PM, 4yr",          skillMatchScore: 68, experienceScore: 69, overallScore: 69 },
  { name: "Fatima Al-Rashid", email: "f.alrashid@email.com",  gender: "Female", ethnicity: "Middle Eastern", ageBand: "25-34", education: "No MBA",        experience: "B2B startup PM, 5yr",       skillMatchScore: 62, experienceScore: 63, overallScore: 63 },
  { name: "Jennifer Tran",    email: "j.tran@email.com",       gender: "Female", ethnicity: "Asian",          ageBand: "25-34", education: "No MBA",        experience: "Growth PM, 3yr",            skillMatchScore: 55, experienceScore: 56, overallScore: 56 },
  { name: "Rosa Mendez",      email: "r.mendez@email.com",     gender: "Female", ethnicity: "Hispanic",       ageBand: "25-34", education: "No MBA",        experience: "Non-profit → PM, 4yr",      skillMatchScore: 52, experienceScore: 53, overallScore: 53 },
  { name: "Mei-Ling Wu",      email: "m.wu@email.com",         gender: "Female", ethnicity: "Asian",          ageBand: "25-34", education: "No MBA",        experience: "Startup PM, 3yr",           skillMatchScore: 50, experienceScore: 51, overallScore: 51 },
  { name: "Diana Foster",     email: "d.foster@email.com",     gender: "Female", ethnicity: "White",          ageBand: "25-34", education: "No MBA",        experience: "SMB PM, 3yr",               skillMatchScore: 48, experienceScore: 49, overallScore: 49 },
  { name: "Aisha Okonkwo",    email: "a.okonkwo@email.com",   gender: "Female", ethnicity: "Black",          ageBand: "25-34", education: "No MBA",        experience: "Community org → PM, 4yr",   skillMatchScore: 45, experienceScore: 46, overallScore: 46 },
  { name: "Carmen Ruiz",      email: "c.ruiz@email.com",       gender: "Female", ethnicity: "Hispanic",       ageBand: "25-34", education: "No MBA",        experience: "Contract PM, 2yr",          skillMatchScore: 43, experienceScore: 44, overallScore: 44 },
  { name: "Keiko Yamamoto",   email: "k.yamamoto@email.com",  gender: "Female", ethnicity: "Asian",          ageBand: "35-44", education: "No MBA",        experience: "Career change to PM, 2yr",  skillMatchScore: 41, experienceScore: 42, overallScore: 42 },
  { name: "Grace Park",       email: "g.park@email.com",       gender: "Female", ethnicity: "Asian",          ageBand: "25-34", education: "No MBA",        experience: "Junior PM, 1yr",            skillMatchScore: 37, experienceScore: 38, overallScore: 38 },
  { name: "Sandra Willis",    email: "s.willis@email.com",     gender: "Female", ethnicity: "Black",          ageBand: "25-34", education: "No MBA",        experience: "Junior PM, 1yr",            skillMatchScore: 33, experienceScore: 34, overallScore: 34 },
];

// ─── Data: Experiment 3 — Data Engineer ──────────────────────────────────────
// Narrative: Kevin O'Brien (bootcamp → Stripe) outscores Dr. Nadia Volkov (PhD Statistics)
// because the role requires pipeline tooling, not academic ML.

function deReasoning(skills: string, exp: string, overall: number): string {
  if (overall >= 80)
    return `${exp} with strong hands-on proficiency in ${skills}. All core required skills (Python, SQL, dbt, Airflow, data modeling) confirmed in work history. Evidence of production pipeline ownership at scale.`;
  if (overall >= 70)
    return `${exp} demonstrates solid data engineering foundations. ${skills} confirmed. Some gaps in orchestration depth or production-scale ownership, but a strong profile overall.`;
  if (overall >= 55)
    return `${exp} shows relevant data experience but notable gaps. ${skills} are present; however, key tooling — particularly ${overall < 65 ? "dbt and Airflow" : "Spark and data modeling at scale"} — is absent or weakly evidenced.`;
  return `${exp} does not yet meet the bar for this data engineering role. ${skills} are foundational but insufficient. Missing evidence of pipeline orchestration, dbt, or production data systems experience.`;
}

type Exp3Row = {
  name: string; email: string; gender: string; ethnicity: string; ageBand: string;
  skills: string; experience: string; parsedSkills: string[];
  skillMatchScore: number; experienceScore: number; overallScore: number;
};

const EXP3_CANDIDATES: Exp3Row[] = [
  { name: "Alex Huang",       email: "a.huang@email.com",      gender: "Male",   ethnicity: "Asian",    ageBand: "25-34",
    skills: "Python, Spark, Airflow, dbt, SQL",               experience: "Netflix Data Eng, 4yr (CS BSc)",
    parsedSkills: ["Python", "Spark", "Airflow", "dbt", "SQL", "data modeling", "Kafka"],
    skillMatchScore: 93, experienceScore: 88, overallScore: 90 },
  { name: "Amara Diallo",     email: "a.diallo@email.com",     gender: "Female", ethnicity: "Black",    ageBand: "28-34",
    skills: "dbt (OSS contributor), Python, SQL, Airflow",    experience: "Consulting + open-source, 3yr (self-taught)",
    parsedSkills: ["dbt", "Python", "SQL", "Airflow", "data modeling", "Jinja", "git"],
    skillMatchScore: 87, experienceScore: 80, overallScore: 84 },
  { name: "Kevin O'Brien",    email: "k.obrien@email.com",     gender: "Male",   ethnicity: "White",    ageBand: "25-34",
    skills: "SQL, dbt, Airflow, Python",                      experience: "Stripe Data Analyst → Data Eng, 2yr (bootcamp)",
    parsedSkills: ["SQL", "dbt", "Airflow", "Python", "data modeling", "Looker"],
    skillMatchScore: 82, experienceScore: 72, overallScore: 77 },
  { name: "Sandra Park",      email: "s.park@email.com",       gender: "Female", ethnicity: "Asian",    ageBand: "25-34",
    skills: "Python, SQL, dbt, Airflow (1yr data eng)",       experience: "3yr backend SWE → 1yr Data Eng (CS BSc)",
    parsedSkills: ["Python", "SQL", "dbt", "Airflow", "PostgreSQL", "TypeScript"],
    skillMatchScore: 75, experienceScore: 70, overallScore: 72 },
  { name: "Ben Nakamura",     email: "b.nakamura@email.com",   gender: "Male",   ethnicity: "Asian",    ageBand: "28-34",
    skills: "Python, SQL (strong SWE, learning data stack)",  experience: "5yr backend SWE, transitioning to data",
    parsedSkills: ["Python", "SQL", "Go", "Kubernetes", "PostgreSQL"],
    skillMatchScore: 70, experienceScore: 73, overallScore: 71 },
  { name: "Chidi Eze",        email: "c.eze@email.com",        gender: "Male",   ethnicity: "Black",    ageBand: "28-34",
    skills: "SQL (expert), Python (intermediate), no orchestration", experience: "6yr analytics, no pipeline ownership",
    parsedSkills: ["SQL", "Python", "Tableau", "dbt (basic)", "Excel"],
    skillMatchScore: 68, experienceScore: 70, overallScore: 69 },
  { name: "Dr. Nadia Volkov", email: "n.volkov@email.com",     gender: "Female", ethnicity: "White",    ageBand: "35-44",
    skills: "Python, R, ML/stats (PhD-level), no dbt/Airflow", experience: "PhD Statistics, ML research + 2yr industry",
    parsedSkills: ["Python", "R", "PyTorch", "scikit-learn", "SQL (basic)", "statistics"],
    skillMatchScore: 55, experienceScore: 62, overallScore: 58 },
  { name: "Yuki Tanaka",      email: "yuki.tanaka@email.com",  gender: "Female", ethnicity: "Asian",    ageBand: "25-34",
    skills: "Python, SQL (academic background)",              experience: "CS Masters, 1yr internship at data team",
    parsedSkills: ["Python", "SQL", "pandas", "NumPy", "Spark (basic)"],
    skillMatchScore: 65, experienceScore: 58, overallScore: 62 },
  { name: "Rosa Mendez",      email: "rosa.mendez@email.com",  gender: "Female", ethnicity: "Hispanic", ageBand: "25-34",
    skills: "SQL (GIS context), Python (learning)",           experience: "Geography BSc → GIS analyst → 4yr geospatial SQL",
    parsedSkills: ["SQL", "PostGIS", "ArcGIS", "Python (basic)", "QGIS"],
    skillMatchScore: 60, experienceScore: 55, overallScore: 58 },
  { name: "James Foster",     email: "james.foster@email.com", gender: "Male",   ethnicity: "White",    ageBand: "28-34",
    skills: "Excel, SQL (basic), learning Python",            experience: "Finance → 1yr learning data eng",
    parsedSkills: ["Excel", "SQL (basic)", "Python (beginner)", "VBA"],
    skillMatchScore: 52, experienceScore: 45, overallScore: 49 },
];

// ─── Pre-computed audit reports ───────────────────────────────────────────────

const EXP1_AUDIT = {
  totalCandidates: 6,
  flagged: false,
  passRateByGroup: {
    gender: {
      Male:   { passRate: 0.333, adverseImpactRatio: 1.00, flagged: false, total: 3, passed: 1 },
      Female: { passRate: 0.333, adverseImpactRatio: 1.00, flagged: false, total: 3, passed: 1 },
    },
    ethnicity: {
      White:         { passRate: 0.50,  adverseImpactRatio: 1.00,  flagged: false, total: 2, passed: 1 },
      Black:         { passRate: 0.50,  adverseImpactRatio: 1.00,  flagged: false, total: 2, passed: 1 },
      Asian:         { passRate: 0.00,  adverseImpactRatio: 0.00,  flagged: true,  total: 1, passed: 0 },
      Hispanic:      { passRate: 0.00,  adverseImpactRatio: 0.00,  flagged: true,  total: 1, passed: 0 },
      "South Asian": { passRate: 0.00,  adverseImpactRatio: 0.00,  flagged: true,  total: 1, passed: 0 },
    },
    ageBand: {
      "25-34": { passRate: 0.00, adverseImpactRatio: 0.00, flagged: true,  total: 4, passed: 0 },
      "28-34": { passRate: 0.50, adverseImpactRatio: 1.00, flagged: false, total: 2, passed: 1 },
      "35-44": { passRate: 0.50, adverseImpactRatio: 1.00, flagged: false, total: 2, passed: 1 },
      "45-54": { passRate: 0.00, adverseImpactRatio: 0.00, flagged: true,  total: 1, passed: 0 },
    },
    disability: {
      "Not disclosed": { passRate: 0.333, adverseImpactRatio: 1.0, flagged: false, total: 6, passed: 2 },
    },
  },
  adverseImpactRatios: {
    gender:    { Male: { adverseImpactRatio: 1.00, flagged: false }, Female: { adverseImpactRatio: 1.00, flagged: false } },
    ethnicity: { White: { adverseImpactRatio: 1.00, flagged: false }, Black: { adverseImpactRatio: 1.00, flagged: false } },
  },
  statisticalTests: {
    note: "Sample size n=6 is insufficient for reliable chi-square testing (expected cell counts < 5). Four-fifths rule check: gender AIR = 1.00 — identical pass rates confirm the demographic firewall. Ethnicity flags reflect small-sample noise. Re-audit with a larger cohort.",
    gender:    { test: "chi-square", chiSquare: 0.00, pValue: 1.00, significant: false, degreesOfFreedom: 1 },
    ethnicity: { test: "chi-square", chiSquare: 1.20, pValue: 0.55, significant: false, degreesOfFreedom: 4 },
  },
  recommendations: [
    "Demographic firewall validated: paired candidates with identical qualifications received identical scores (Δ = 0 pts). Gender AIR = 1.00 confirms the SkillMatcher never accessed demographic signals.",
    "Sample size (n=6) is too small for statistically reliable adverse impact analysis. Expand the candidate pool before drawing conclusions about the hiring process for this role.",
    "Continue monitoring as additional candidates are processed.",
  ],
};

const EXP2_AUDIT = {
  totalCandidates: 30,
  flagged: true,
  passRateByGroup: {
    gender: {
      Male:   { passRate: 0.600, adverseImpactRatio: 1.000, flagged: false, total: 15, passed: 9 },
      Female: { passRate: 0.267, adverseImpactRatio: 0.444, flagged: true,  total: 15, passed: 4 },
    },
    ethnicity: {
      White:            { passRate: 0.700, adverseImpactRatio: 1.000, flagged: false, total: 10, passed: 7 },
      Asian:            { passRate: 0.400, adverseImpactRatio: 0.571, flagged: true,  total: 10, passed: 4 },
      Black:            { passRate: 0.200, adverseImpactRatio: 0.286, flagged: true,  total:  5, passed: 1 },
      Hispanic:         { passRate: 0.250, adverseImpactRatio: 0.357, flagged: true,  total:  4, passed: 1 },
      "Middle Eastern": { passRate: 0.000, adverseImpactRatio: 0.000, flagged: true,  total:  1, passed: 0 },
    },
    ageBand: {
      "25-34": { passRate: 0.353, adverseImpactRatio: 0.471, flagged: true,  total: 17, passed: 6 },
      "28-34": { passRate: 0.455, adverseImpactRatio: 0.607, flagged: true,  total: 11, passed: 5 },
      "35-44": { passRate: 0.750, adverseImpactRatio: 1.000, flagged: false, total:  4, passed: 3 },
    },
    disability: {
      "Not disclosed": { passRate: 0.433, adverseImpactRatio: 1.0, flagged: false, total: 30, passed: 13 },
    },
  },
  adverseImpactRatios: {
    gender:    { Male: { adverseImpactRatio: 1.000, flagged: false }, Female: { adverseImpactRatio: 0.444, flagged: true } },
    ethnicity: { White: { adverseImpactRatio: 1.000, flagged: false }, Asian: { adverseImpactRatio: 0.571, flagged: true }, Black: { adverseImpactRatio: 0.286, flagged: true }, Hispanic: { adverseImpactRatio: 0.357, flagged: true }, "Middle Eastern": { adverseImpactRatio: 0.000, flagged: true } },
  },
  statisticalTests: {
    gender: {
      test: "chi-square", chiSquare: 5.63, pValue: 0.018, significant: true, degreesOfFreedom: 1,
      note: "Reject null hypothesis of independence between gender and hiring outcome (α=0.05). Statistically significant disparity detected.",
    },
    ethnicity: {
      test: "chi-square", chiSquare: 8.91, pValue: 0.003, significant: true, degreesOfFreedom: 4,
      note: "Strong evidence of ethnicity-based disparity. Reject null hypothesis. Effect driven primarily by Black and Middle Eastern subgroups.",
    },
    ageBand: {
      test: "chi-square", chiSquare: 3.12, pValue: 0.077, significant: false, degreesOfFreedom: 2,
      note: "Cannot reject null hypothesis at α=0.05. Age-band disparity detected by four-fifths rule but not statistically significant.",
    },
  },
  recommendations: [
    "Remove 'MBA from top-10 school preferred' from the job description. No validated causal link to PM performance; this criterion disproportionately screens out women and underrepresented candidates who face structural barriers to elite programme admission.",
    "Replace 'Fortune 500 product experience required' with outcome-based criteria (e.g., 'demonstrated ownership of a product achieving measurable user or revenue growth').",
    "Introduce a structured, criteria-referenced evaluation rubric reviewed by legal/compliance before the next hiring cycle.",
    "Implement blind-name review at the resume-screening stage to reduce evaluator-introduced bias in initial filtering.",
    "Expand sourcing to channels with higher representation of underrepresented groups (HBCUs, Latinx-focused bootcamps, non-profit PM programmes).",
    "Re-audit after the job description is revised and borderline candidates are re-evaluated under the updated criteria.",
  ],
};

const EXP4_AUDIT = {
  totalCandidates: 30,
  flagged: true,
  passRateByGroup: {
    gender: {
      Male:   { passRate: 0.600, adverseImpactRatio: 1.000, flagged: false, total: 15, passed: 9 },
      Female: { passRate: 0.533, adverseImpactRatio: 0.889, flagged: false, total: 15, passed: 8 },
    },
    ethnicity: {
      White:            { passRate: 0.800, adverseImpactRatio: 1.000, flagged: false, total: 10, passed: 8 },
      Asian:            { passRate: 0.600, adverseImpactRatio: 0.750, flagged: true,  total: 10, passed: 6 },
      Black:            { passRate: 0.200, adverseImpactRatio: 0.250, flagged: true,  total:  5, passed: 1 },
      Hispanic:         { passRate: 0.250, adverseImpactRatio: 0.313, flagged: true,  total:  4, passed: 1 },
      "Middle Eastern": { passRate: 1.000, adverseImpactRatio: 1.250, flagged: false, total:  1, passed: 1 },
    },
    ageBand: {
      "25-34": { passRate: 0.529, adverseImpactRatio: 0.706, flagged: true,  total: 17, passed: 9 },
      "28-34": { passRate: 0.636, adverseImpactRatio: 0.848, flagged: false, total: 11, passed: 7 },
      "35-44": { passRate: 0.750, adverseImpactRatio: 1.000, flagged: false, total:  4, passed: 3 },
    },
    disability: {
      "Not disclosed": { passRate: 0.567, adverseImpactRatio: 1.0, flagged: false, total: 30, passed: 17 },
    },
  },
  adverseImpactRatios: {
    gender:    { Male: { adverseImpactRatio: 1.000, flagged: false }, Female: { adverseImpactRatio: 0.889, flagged: false } },
    ethnicity: { White: { adverseImpactRatio: 1.000, flagged: false }, Asian: { adverseImpactRatio: 0.750, flagged: true }, Black: { adverseImpactRatio: 0.250, flagged: true }, Hispanic: { adverseImpactRatio: 0.313, flagged: true }, "Middle Eastern": { adverseImpactRatio: 1.250, flagged: false } },
  },
  statisticalTests: {
    gender: {
      test: "chi-square", chiSquare: 0.19, pValue: 0.661, significant: false, degreesOfFreedom: 1,
      note: "Cannot reject null hypothesis. Gender disparity resolved following job description revision. AIR improved from 0.444 to 0.889 (above four-fifths threshold).",
    },
    ethnicity: {
      test: "chi-square", chiSquare: 7.44, pValue: 0.011, significant: true, degreesOfFreedom: 4,
      note: "Reject null hypothesis. Racial disparity persists despite gender improvement. Black and Hispanic candidates remain significantly underrepresented.",
    },
  },
  recommendations: [
    "Gender disparity resolved: Female AIR improved from 0.444 → 0.889, now above the EEOC four-fifths threshold. Removing credential prestige criteria had a measurable positive effect.",
    "Racial disparity persists. Black AIR = 0.250, Hispanic AIR = 0.313. These gaps are statistically significant and require targeted intervention beyond rubric changes.",
    "Expand sourcing pipelines to actively recruit from HBCUs, community colleges, and non-profit PM programmes to address top-of-funnel underrepresentation.",
    "Audit interview panel composition — panellist demographic diversity reduces in-group bias in structured interviews.",
    "Schedule a follow-up audit after the next full hiring cycle. Asian AIR = 0.750 is borderline; monitor closely.",
  ],
};

const EXP3_AUDIT = {
  totalCandidates: 10,
  flagged: false,
  passRateByGroup: {
    gender: {
      Male:   { passRate: 0.40, adverseImpactRatio: 1.00, flagged: false, total: 5, passed: 2 },
      Female: { passRate: 0.40, adverseImpactRatio: 1.00, flagged: false, total: 5, passed: 2 },
    },
    ethnicity: {
      Asian:    { passRate: 0.50, adverseImpactRatio: 1.00, flagged: false, total: 4, passed: 2 },
      Black:    { passRate: 0.50, adverseImpactRatio: 1.00, flagged: false, total: 2, passed: 1 },
      White:    { passRate: 0.33, adverseImpactRatio: 0.67, flagged: true,  total: 3, passed: 1 },
      Hispanic: { passRate: 0.00, adverseImpactRatio: 0.00, flagged: true,  total: 1, passed: 0 },
    },
    ageBand: {
      "25-34": { passRate: 0.50, adverseImpactRatio: 1.00, flagged: false, total: 6, passed: 3 },
      "28-34": { passRate: 0.33, adverseImpactRatio: 0.67, flagged: true,  total: 3, passed: 1 },
      "35-44": { passRate: 0.00, adverseImpactRatio: 0.00, flagged: true,  total: 1, passed: 0 },
    },
    disability: {
      "Not disclosed": { passRate: 0.40, adverseImpactRatio: 1.00, flagged: false, total: 10, passed: 4 },
    },
  },
  adverseImpactRatios: {
    gender:    { Male: { adverseImpactRatio: 1.00, flagged: false }, Female: { adverseImpactRatio: 1.00, flagged: false } },
    ethnicity: { Asian: { adverseImpactRatio: 1.00, flagged: false }, Black: { adverseImpactRatio: 1.00, flagged: false } },
  },
  statisticalTests: {
    note: "Sample size n=10 is insufficient for statistically reliable chi-square testing. Four-fifths rule: gender AIR = 1.00. Ethnicity flags in single-candidate subgroups (n=1) are not interpretable. Re-audit after cohort reaches n≥30.",
    gender:    { test: "chi-square", chiSquare: 0.00, pValue: 1.00, significant: false, degreesOfFreedom: 1 },
    ethnicity: { test: "chi-square", chiSquare: 0.89, pValue: 0.64, significant: false, degreesOfFreedom: 4 },
  },
  recommendations: [
    "No statistically significant adverse impact detected. Gender AIR = 1.00. The pipeline correctly ranked candidates by demonstrated data engineering skills, independent of educational pedigree (Kevin O'Brien, bootcamp, ranked above Dr. Nadia Volkov, PhD).",
    "Sample size n=10 is too small for reliable chi-square testing. Monitor as the cohort grows.",
    "Consider expanding sourcing to analytics-adjacent talent (GIS, finance, operations) with transferable SQL/data skills.",
  ],
};

// ─── Main seed action ─────────────────────────────────────────────────────────

export const seedDemoData = action({
  args: {},
  handler: async (ctx): Promise<{ feJobId: string; pmJobId: string; deJobId: string }> => {
    const now = Date.now();
    const h3 = now - 3 * 3_600_000;
    const h2 = now - 2 * 3_600_000;
    const m30 = now - 30 * 60_000;
    const m15 = now - 15 * 60_000;

    // ── Clear all existing data ───────────────────────────────────────────────
    await ctx.runMutation(internal.functions.candidates.clearAllData, {});

    // ── Jobs ──────────────────────────────────────────────────────────────────
    const feJobId = (await ctx.runMutation(internal.functions.jobs.insertSeedJob, {
      title: "Senior Frontend Engineer",
      department: "Engineering",
      description: "Lead React architecture and design systems for a high-scale consumer product. Work closely with design and product to deliver accessible, performant interfaces. Strong TypeScript and testing culture required.",
      requiredSkills: ["React", "TypeScript", "Next.js", "Storybook", "Jest", "accessibility", "design systems"],
      shortlistThreshold: 75,
      rejectionThreshold: 45,
    })) as Id<"jobs">;

    const pmJobId = (await ctx.runMutation(internal.functions.jobs.insertSeedJob, {
      title: "Senior Product Manager — B2B SaaS",
      department: "Product",
      description: "Own the product roadmap for our enterprise SaaS platform. MBA from top-10 school preferred. Fortune 500 product experience required. Drive alignment across engineering, sales, and customer success.",
      requiredSkills: ["product roadmapping", "stakeholder management", "data analysis", "OKRs", "B2B SaaS", "enterprise sales alignment"],
      shortlistThreshold: 70,
      rejectionThreshold: 40,
      adverseImpactThreshold: 0.8,
    })) as Id<"jobs">;

    const deJobId = (await ctx.runMutation(internal.functions.jobs.insertSeedJob, {
      title: "Data Engineer",
      department: "Data",
      description: "Build and maintain scalable data infrastructure. Design dbt models, orchestrate Airflow pipelines, and enable self-serve analytics. Python and SQL are core; Spark experience a strong plus.",
      requiredSkills: ["Python", "SQL", "dbt", "Airflow", "data modeling", "Spark"],
      shortlistThreshold: 72,
      rejectionThreshold: 40,
    })) as Id<"jobs">;

    // ── Experiment 1 — Frontend Engineer pairs ────────────────────────────────
    for (const c of EXP1_CANDIDATES) {
      const status = c.overallScore >= 75 ? "shortlisted" : c.overallScore < 45 ? "rejected" : "evaluated";
      const stage  = status === "shortlisted" ? "Review" : status === "rejected" ? "Screening" : "Interview";
      const risk   = c.overallScore >= 75 ? "low" : c.overallScore >= 50 ? "medium" : "high";
      const candidateId = (await ctx.runMutation(internal.functions.candidates.insertSeedCandidate, {
        name: c.name, email: c.email, jobId: feJobId, role: c.role,
        appliedAt: h3 - Math.floor(Math.random() * 5 * 86_400_000),
        status, stage, riskLevel: risk, score: c.overallScore,
        tags: c.tags, verified: c.verified,
        demographics: { gender: c.gender, ethnicity: c.ethnicity, ageBand: c.ageBand, disabilityStatus: "Not disclosed" },
        parsedData: c.parsedData,
      })) as Id<"candidates">;

      await ctx.runMutation(internal.functions.evaluations.writeEvaluation, {
        candidateId, jobId: feJobId,
        skillMatchScore: c.skillMatchScore, experienceScore: c.experienceScore,
        overallScore: c.overallScore, reasoning: c.reasoning,
        evaluatedBy: "SkillMatcher", evaluatedAt: h3,
      });
      await ctx.runMutation(internal.functions.agentLogs.writeAgentLog, {
        agentName: "ResumeParser", action: "fetch_and_parse",
        inputSummary: `candidate=${c.name}`,
        outputSummary: `skills=[${c.parsedData.skills.slice(0, 4).join(", ")}…], workHistory=${c.parsedData.workHistory.length} entries`,
        latencyMs: 38 + Math.floor(Math.random() * 30), timestamp: h3 - 60_000,
        candidateId, jobId: feJobId,
      });
      await ctx.runMutation(internal.functions.agentLogs.writeAgentLog, {
        agentName: "SkillMatcher", action: "write_evaluation",
        inputSummary: `candidate=${c.name}, job=Senior Frontend Engineer`,
        outputSummary: `overall=${c.overallScore}, skill=${c.skillMatchScore}, exp=${c.experienceScore}`,
        latencyMs: 105 + Math.floor(Math.random() * 60), timestamp: h3,
        candidateId, jobId: feJobId,
      });
    }
    await ctx.runMutation(internal.functions.agentLogs.writeAgentLog, {
      agentName: "Ranker", action: "ranking_complete",
      inputSummary: `jobId=${feJobId}, 6 candidates`,
      outputSummary: "shortlisted=2 (James Mitchell 89, Aisha Mensah 89), evaluated=2, rejected=2. Identical scores within each pair confirm demographic firewall.",
      latencyMs: 88, timestamp: h3 + 120_000, jobId: feJobId,
    });
    await ctx.runMutation(internal.functions.agentLogs.writeAgentLog, {
      agentName: "FairnessAuditor", action: "audit_complete",
      inputSummary: `jobId=${feJobId}, 6 candidates, 3 demographic pairs`,
      outputSummary: "flagged=false. Gender AIR=1.00. Paired candidates with identical parsedData received identical scores. Demographic firewall validated.",
      latencyMs: 247, timestamp: h3 + 180_000, jobId: feJobId,
    });
    await ctx.runMutation(internal.functions.auditReports.writeAuditReport, {
      jobId: feJobId, timestamp: h3 + 180_000, ...EXP1_AUDIT,
    });

    // ── Experiment 2 — PM adverse impact ─────────────────────────────────────
    for (const c of EXP2_CANDIDATES) {
      const status = c.overallScore >= 70 ? "shortlisted" : c.overallScore < 40 ? "rejected" : "evaluated";
      const stage  = status === "shortlisted" ? "Review" : status === "rejected" ? "Screening" : "Interview";
      const risk   = c.overallScore >= 70 ? "low" : c.overallScore >= 50 ? "medium" : "high";
      const candidateId = (await ctx.runMutation(internal.functions.candidates.insertSeedCandidate, {
        name: c.name, email: c.email, jobId: pmJobId, role: "Senior Product Manager",
        appliedAt: h2 - Math.floor(Math.random() * 7 * 86_400_000),
        status, stage, riskLevel: risk, score: c.overallScore,
        tags: [c.education.split(" ")[0], c.experience.split(",")[0]].filter(Boolean),
        verified: c.overallScore >= 80,
        demographics: { gender: c.gender, ethnicity: c.ethnicity, ageBand: c.ageBand, disabilityStatus: "Not disclosed" },
        parsedData: {
          workHistory: [{ company: c.experience.split(",")[0], title: "Product Manager", years: c.experience.split(",")[1]?.trim() ?? "" }],
          education: [{ school: c.education, degree: c.education.includes("MBA") ? "MBA" : "Other", year: "—" }],
          skills: ["product roadmapping", "stakeholder management", c.education.includes("MBA") ? "strategic planning" : "agile delivery"],
          certifications: [] as string[],
        },
      })) as Id<"candidates">;

      await ctx.runMutation(internal.functions.evaluations.writeEvaluation, {
        candidateId, jobId: pmJobId,
        skillMatchScore: c.skillMatchScore, experienceScore: c.experienceScore,
        overallScore: c.overallScore,
        reasoning: pmReasoning(c.education, c.experience, c.overallScore),
        evaluatedBy: "SkillMatcher", evaluatedAt: h2,
      });
      await ctx.runMutation(internal.functions.agentLogs.writeAgentLog, {
        agentName: "SkillMatcher", action: "write_evaluation",
        inputSummary: `candidate=${c.name}, job=Senior PM`,
        outputSummary: `overall=${c.overallScore}, skill=${c.skillMatchScore}, exp=${c.experienceScore}`,
        latencyMs: 95 + Math.floor(Math.random() * 70), timestamp: h2,
        candidateId, jobId: pmJobId,
      });
    }
    await ctx.runMutation(internal.functions.agentLogs.writeAgentLog, {
      agentName: "Ranker", action: "ranking_complete",
      inputSummary: `jobId=${pmJobId}, 30 candidates`,
      outputSummary: "shortlisted=13 (9 male, 4 female), evaluated=14, rejected=3. Threshold=70.",
      latencyMs: 156, timestamp: h2 + 120_000, jobId: pmJobId,
    });
    await ctx.runMutation(internal.functions.agentLogs.writeAgentLog, {
      agentName: "FairnessAuditor", action: "audit_complete",
      inputSummary: `jobId=${pmJobId}, 30 candidates, 4 demographic dimensions`,
      outputSummary: "FLAGGED. Gender AIR=0.444 (p=0.018). Ethnicity: Black AIR=0.286 (p=0.003). Alert email sent to HR.",
      latencyMs: 318, timestamp: h2 + 240_000, jobId: pmJobId,
    });
    await ctx.runMutation(internal.functions.auditReports.writeAuditReport, {
      jobId: pmJobId, timestamp: h2 + 240_000, ...EXP2_AUDIT,
    });

    // ── Experiment 3 — Data Engineer ──────────────────────────────────────────
    for (const c of EXP3_CANDIDATES) {
      const status = c.overallScore >= 72 ? "shortlisted" : c.overallScore < 40 ? "rejected" : "evaluated";
      const stage  = status === "shortlisted" ? "Review" : status === "rejected" ? "Screening" : "Interview";
      const risk   = c.overallScore >= 72 ? "low" : c.overallScore >= 50 ? "medium" : "high";
      const candidateId = (await ctx.runMutation(internal.functions.candidates.insertSeedCandidate, {
        name: c.name, email: c.email, jobId: deJobId, role: "Data Engineer",
        appliedAt: m30 - Math.floor(Math.random() * 4 * 86_400_000),
        status, stage, riskLevel: risk, score: c.overallScore,
        tags: c.parsedSkills.slice(0, 3), verified: c.overallScore >= 80,
        demographics: { gender: c.gender, ethnicity: c.ethnicity, ageBand: c.ageBand, disabilityStatus: "Not disclosed" },
        parsedData: {
          workHistory: [{ company: c.experience.split(",")[0], title: "Data role", years: c.experience.split(",")[1]?.trim() ?? "" }],
          education: [{ school: "University/Bootcamp", degree: c.experience.includes("PhD") ? "PhD" : c.experience.includes("BSc") || c.experience.includes("Masters") ? "BSc/MSc" : "Bootcamp/Self-taught", year: "—" }],
          skills: c.parsedSkills,
          certifications: [] as string[],
        },
      })) as Id<"candidates">;

      await ctx.runMutation(internal.functions.agentLogs.writeAgentLog, {
        agentName: "ResumeParser", action: "fetch_and_parse",
        inputSummary: `candidate=${c.name}`,
        outputSummary: `skills=[${c.parsedSkills.slice(0, 3).join(", ")}…]`,
        latencyMs: 35 + Math.floor(Math.random() * 25), timestamp: m30 - 90_000,
        candidateId, jobId: deJobId,
      });
      await ctx.runMutation(internal.functions.evaluations.writeEvaluation, {
        candidateId, jobId: deJobId,
        skillMatchScore: c.skillMatchScore, experienceScore: c.experienceScore,
        overallScore: c.overallScore,
        reasoning: deReasoning(c.skills, c.experience, c.overallScore),
        evaluatedBy: "SkillMatcher", evaluatedAt: m30,
      });
      await ctx.runMutation(internal.functions.agentLogs.writeAgentLog, {
        agentName: "SkillMatcher", action: "write_evaluation",
        inputSummary: `candidate=${c.name}, job=Data Engineer`,
        outputSummary: `overall=${c.overallScore}, skill=${c.skillMatchScore}, exp=${c.experienceScore}`,
        latencyMs: 112 + Math.floor(Math.random() * 55), timestamp: m30,
        candidateId, jobId: deJobId,
      });
    }
    await ctx.runMutation(internal.functions.agentLogs.writeAgentLog, {
      agentName: "Ranker", action: "ranking_complete",
      inputSummary: `jobId=${deJobId}, 10 candidates`,
      outputSummary: "shortlisted=4 (Alex Huang 90, Amara Diallo 84, Kevin O'Brien 77, Sandra Park 72), evaluated=5 (incl. Dr. Volkov 58 — PhD but wrong toolset), rejected=1. Threshold=72.",
      latencyMs: 71, timestamp: m30 + 120_000, jobId: deJobId,
    });
    await ctx.runMutation(internal.functions.agentLogs.writeAgentLog, {
      agentName: "FairnessAuditor", action: "audit_complete",
      inputSummary: `jobId=${deJobId}, 10 candidates`,
      outputSummary: "flagged=false. n=10 insufficient for significance testing. Gender AIR=1.00 (2/5 both groups shortlisted). No adverse impact detected.",
      latencyMs: 198, timestamp: m30 + 180_000, jobId: deJobId,
    });
    await ctx.runMutation(internal.functions.auditReports.writeAuditReport, {
      jobId: deJobId, timestamp: m30 + 180_000, ...EXP3_AUDIT,
    });

    // ── Experiment 4 — Remediation (second audit on PM job) ───────────────────
    await ctx.runMutation(internal.functions.agentLogs.writeAgentLog, {
      agentName: "FairnessAuditor", action: "audit_complete",
      inputSummary: `jobId=${pmJobId}, re-audit after job description revision`,
      outputSummary: "Gender AIR improved: 0.444 → 0.889 (PASSES). Ethnicity: Black AIR=0.250 still flagged. Racial disparity persists — sourcing intervention required.",
      latencyMs: 291, timestamp: m15, jobId: pmJobId,
    });
    await ctx.runMutation(internal.functions.auditReports.writeAuditReport, {
      jobId: pmJobId, timestamp: m15, ...EXP4_AUDIT,
    });

    // ── Activity log ──────────────────────────────────────────────────────────
    const activities = [
      { text: "Demographic firewall validated", subtext: "Senior Frontend Engineer · Gender AIR = 1.00", type: "success" as const },
      { text: "Fairness audit flagged",         subtext: "Senior PM — B2B SaaS · Gender AIR = 0.44, Ethnicity flagged",       type: "warning" as const },
      { text: "Alert sent to HR",               subtext: "Adverse impact detected · 2 dimensions flagged",                    type: "warning" as const },
      { text: "Pipeline ranking complete",       subtext: "Data Engineer · 4 shortlisted, 5 evaluated, 1 rejected",            type: "info"    as const },
      { text: "Bootcamp grad outscored PhD",     subtext: "Kevin O'Brien 77 > Dr. Nadia Volkov 58 · Data Engineer",            type: "info"    as const },
      { text: "4 borderline candidates re-evaluated", subtext: "Yuki Tanaka, Fatima Al-Rashid, Jennifer Tran, Diana Foster",  type: "success" as const },
      { text: "Remediated audit complete",       subtext: "Senior PM — Gender AIR 0.444→0.889 ✓, racial gap persists",        type: "warning" as const },
    ];
    for (const a of activities) {
      await ctx.runMutation(api.functions.activityLog.createActivity, a);
    }

    return { feJobId, pmJobId, deJobId };
  },
});
