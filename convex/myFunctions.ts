import { query } from "./_generated/server";

// Compatibility stub to keep Convex generated API stable after template cleanup.
export const healthcheck = query({
  args: {},
  handler: async () => ({ ok: true }),
});
