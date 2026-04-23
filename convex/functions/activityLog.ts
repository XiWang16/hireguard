import { v } from "convex/values";
import { mutation, query } from "../_generated/server";

export const listRecent = query({
  args: { limit: v.optional(v.number()) },
  handler: async (ctx, { limit = 10 }) => {
    return await ctx.db
      .query("activityLog")
      .withIndex("by_createdAt")
      .order("desc")
      .take(limit);
  },
});

export const createActivity = mutation({
  args: {
    text: v.string(),
    subtext: v.string(),
    type: v.union(v.literal("success"), v.literal("warning"), v.literal("info")),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("activityLog", {
      ...args,
      createdAt: Date.now(),
    });
  },
});
