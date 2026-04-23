import * as ss from "simple-statistics";

type GroupInput = {
  name: string;
  passed: number;
  total: number;
};

type StatsRequest = {
  groups?: GroupInput[];
};

const computeChiSquare = (groups: GroupInput[]) => {
  const totalPassed = groups.reduce((sum, group) => sum + group.passed, 0);
  const totalFailed = groups.reduce((sum, group) => sum + Math.max(0, group.total - group.passed), 0);
  const grandTotal = totalPassed + totalFailed;
  if (grandTotal === 0) {
    return 0;
  }

  let chiSquare = 0;
  for (const group of groups) {
    if (group.total === 0) {
      continue;
    }
    const expectedPassed = (totalPassed / grandTotal) * group.total;
    const expectedFailed = (totalFailed / grandTotal) * group.total;
    const observedFailed = Math.max(0, group.total - group.passed);
    chiSquare +=
      Math.pow(group.passed - expectedPassed, 2) / Math.max(expectedPassed, 1e-9) +
      Math.pow(observedFailed - expectedFailed, 2) / Math.max(expectedFailed, 1e-9);
  }
  return chiSquare;
};

export const handler = async (event: { body?: string | null }) => {
  try {
    const payload: StatsRequest = event.body ? JSON.parse(event.body) : {};
    const groups = payload.groups ?? [];
    if (groups.length === 0) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "groups are required" }),
      };
    }

    const passRates = groups.map((g) => ({
      name: g.name,
      passRate: g.total > 0 ? g.passed / g.total : 0,
      total: g.total,
      passed: g.passed,
    }));
    const maxPassRate = Math.max(...passRates.map((g) => g.passRate), 0);

    const ratios = passRates.map((g) => {
      const adverseImpactRatio = maxPassRate > 0 ? g.passRate / maxPassRate : 1;
      return {
        name: g.name,
        total: g.total,
        passed: g.passed,
        passRate: g.passRate,
        adverseImpactRatio,
        flagged: adverseImpactRatio < 0.8,
      };
    });

    const chiSquare = computeChiSquare(groups);
    const significant = chiSquare > 3.84;
    const averagePassRate = ss.mean(passRates.map((g) => g.passRate));

    return {
      statusCode: 200,
      body: JSON.stringify({
        ratios,
        chiSquare,
        pValueApprox: significant ? "<0.05" : ">=0.05",
        significant,
        averagePassRate,
      }),
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : "unexpected error";
    return {
      statusCode: 500,
      body: JSON.stringify({ error: message }),
    };
  }
};
