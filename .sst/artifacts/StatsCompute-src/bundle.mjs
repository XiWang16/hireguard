import { createRequire as topLevelCreateRequire } from 'module';
const require = topLevelCreateRequire(import.meta.url);
import { fileURLToPath as topLevelFileUrlToPath, URL as topLevelURL } from "url"
const __filename = topLevelFileUrlToPath(import.meta.url)
const __dirname = topLevelFileUrlToPath(new topLevelURL(".", import.meta.url))

var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// node_modules/simple-statistics/dist/simple-statistics.mjs
function sum(x) {
  if (x.length === 0) {
    return 0;
  }
  var sum2 = x[0];
  var correction = 0;
  var transition;
  if (typeof sum2 !== "number") {
    return Number.NaN;
  }
  for (var i = 1; i < x.length; i++) {
    if (typeof x[i] !== "number") {
      return Number.NaN;
    }
    transition = sum2 + x[i];
    if (Math.abs(sum2) >= Math.abs(x[i])) {
      correction += sum2 - transition + x[i];
    } else {
      correction += x[i] - transition + sum2;
    }
    sum2 = transition;
  }
  return sum2 + correction;
}
__name(sum, "sum");
function mean(x) {
  if (x.length === 0) {
    throw new Error("mean requires at least one data point");
  }
  return sum(x) / x.length;
}
__name(mean, "mean");
var BayesianClassifier = /* @__PURE__ */ __name(function BayesianClassifier2() {
  this.totalCount = 0;
  this.data = {};
}, "BayesianClassifier");
BayesianClassifier.prototype.train = /* @__PURE__ */ __name(function train(item, category) {
  if (!this.data[category]) {
    this.data[category] = {};
  }
  for (var k in item) {
    var v = item[k];
    if (this.data[category][k] === void 0) {
      this.data[category][k] = {};
    }
    if (this.data[category][k][v] === void 0) {
      this.data[category][k][v] = 0;
    }
    this.data[category][k][v]++;
  }
  this.totalCount++;
}, "train");
BayesianClassifier.prototype.score = /* @__PURE__ */ __name(function score(item) {
  var odds = {};
  var category;
  for (var k in item) {
    var v = item[k];
    for (category in this.data) {
      odds[category] = {};
      if (this.data[category][k]) {
        odds[category][k + "_" + v] = (this.data[category][k][v] || 0) / this.totalCount;
      } else {
        odds[category][k + "_" + v] = 0;
      }
    }
  }
  var oddsSums = {};
  for (category in odds) {
    oddsSums[category] = 0;
    for (var combination in odds[category]) {
      oddsSums[category] += odds[category][combination];
    }
  }
  return oddsSums;
}, "score");
var SQRT_2PI$1 = Math.sqrt(2 * Math.PI);
function cumulativeDistribution(z) {
  var sum2 = z;
  var tmp = z;
  for (var i = 1; i < 15; i++) {
    tmp *= z * z / (2 * i + 1);
    sum2 += tmp;
  }
  return Math.round((0.5 + sum2 / SQRT_2PI$1 * Math.exp(-z * z / 2)) * 1e4) / 1e4;
}
__name(cumulativeDistribution, "cumulativeDistribution");
var standardNormalTable = [];
for (z = 0; z <= 3.09; z += 0.01) {
  standardNormalTable.push(cumulativeDistribution(z));
}
var z;
var g = 607 / 128;
var LOGSQRT2PI = Math.log(Math.sqrt(2 * Math.PI));
var SQRT_2PI = Math.sqrt(2 * Math.PI);
var PerceptronModel = /* @__PURE__ */ __name(function PerceptronModel2() {
  this.weights = [];
  this.bias = 0;
}, "PerceptronModel");
PerceptronModel.prototype.predict = /* @__PURE__ */ __name(function predict(features) {
  if (features.length !== this.weights.length) {
    return null;
  }
  var score2 = 0;
  for (var i = 0; i < this.weights.length; i++) {
    score2 += this.weights[i] * features[i];
  }
  score2 += this.bias;
  if (score2 > 0) {
    return 1;
  } else {
    return 0;
  }
}, "predict");
PerceptronModel.prototype.train = /* @__PURE__ */ __name(function train2(features, label) {
  if (label !== 0 && label !== 1) {
    return null;
  }
  if (features.length !== this.weights.length) {
    this.weights = features;
    this.bias = 1;
  }
  var prediction = this.predict(features);
  if (typeof prediction === "number" && prediction !== label) {
    var gradient = label - prediction;
    for (var i = 0; i < this.weights.length; i++) {
      this.weights[i] += gradient * features[i];
    }
    this.bias += gradient;
  }
  return this;
}, "train");

// infra/lambdas/stats-compute.ts
var computeChiSquare = /* @__PURE__ */ __name((groups) => {
  const totalPassed = groups.reduce((sum2, group) => sum2 + group.passed, 0);
  const totalFailed = groups.reduce((sum2, group) => sum2 + Math.max(0, group.total - group.passed), 0);
  const grandTotal = totalPassed + totalFailed;
  if (grandTotal === 0) {
    return 0;
  }
  let chiSquare = 0;
  for (const group of groups) {
    if (group.total === 0) {
      continue;
    }
    const expectedPassed = totalPassed / grandTotal * group.total;
    const expectedFailed = totalFailed / grandTotal * group.total;
    const observedFailed = Math.max(0, group.total - group.passed);
    chiSquare += Math.pow(group.passed - expectedPassed, 2) / Math.max(expectedPassed, 1e-9) + Math.pow(observedFailed - expectedFailed, 2) / Math.max(expectedFailed, 1e-9);
  }
  return chiSquare;
}, "computeChiSquare");
var handler = /* @__PURE__ */ __name(async (event) => {
  try {
    const payload = event.body ? JSON.parse(event.body) : {};
    const groups = payload.groups ?? [];
    if (groups.length === 0) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "groups are required" })
      };
    }
    const passRates = groups.map((g2) => ({
      name: g2.name,
      passRate: g2.total > 0 ? g2.passed / g2.total : 0,
      total: g2.total,
      passed: g2.passed
    }));
    const maxPassRate = Math.max(...passRates.map((g2) => g2.passRate), 0);
    const ratios = passRates.map((g2) => {
      const adverseImpactRatio = maxPassRate > 0 ? g2.passRate / maxPassRate : 1;
      return {
        name: g2.name,
        total: g2.total,
        passed: g2.passed,
        passRate: g2.passRate,
        adverseImpactRatio,
        flagged: adverseImpactRatio < 0.8
      };
    });
    const chiSquare = computeChiSquare(groups);
    const significant = chiSquare > 3.84;
    const averagePassRate = mean(passRates.map((g2) => g2.passRate));
    return {
      statusCode: 200,
      body: JSON.stringify({
        ratios,
        chiSquare,
        pValueApprox: significant ? "<0.05" : ">=0.05",
        significant,
        averagePassRate
      })
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : "unexpected error";
    return {
      statusCode: 500,
      body: JSON.stringify({ error: message })
    };
  }
}, "handler");
export {
  handler
};
//# sourceMappingURL=bundle.mjs.map
