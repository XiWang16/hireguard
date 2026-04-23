import { cronJobs } from "convex/server";
import { internal } from "./_generated/api";

const crons = cronJobs();

crons.hourly("hourly fairness sweep", { minuteUTC: 0 }, internal.functions.pipeline.hourlyFairnessSweep, {});

export default crons;
