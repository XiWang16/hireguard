import { v } from "convex/values";
import { internalAction } from "../_generated/server";
import { internal } from "../_generated/api";
import { Agent, createTool } from "@convex-dev/agent";
import { getLanguageModel } from "../lib/modelConfig";
import { components } from "../_generated/api";
import { z } from "zod/v4";
import { requireEnv } from "../lib/env";

const parseResumeTool = createTool({
  description: "Fetch a candidate's resume from Convex file storage and return its text content",
  inputSchema: z.object({ candidateId: z.string() }),
  execute: async (ctx, { candidateId }): Promise<{ resumeText: string; candidateName: string }> => {
    const start = Date.now();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const candidate = (await ctx.runQuery(internal.functions.candidates.getCandidate, {
      candidateId: candidateId as never,
    })) as any;
    if (!candidate) throw new Error(`Candidate ${candidateId} not found`);

    let resumeText = "";
    if (candidate.resumeFileId) {
      const pdfExtractUrl = requireEnv("PDF_EXTRACT_URL");
      const fileUrl = await ctx.storage.getUrl(candidate.resumeFileId as never);
      if (fileUrl) {
        const response = await fetch(pdfExtractUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ fileUrl }),
        });
        const data = (await response.json()) as { text?: string };
        resumeText = data.text ?? "";
      }
    }

    await ctx.runMutation(internal.functions.candidates.updateCandidateStatus, {
      candidateId: candidateId as never,
      status: "parsing",
    });

    const latencyMs = Date.now() - start;
    await ctx.runMutation(internal.functions.agentLogs.writeAgentLog, {
      agentName: "ResumeParser",
      action: "fetch_resume",
      inputSummary: `candidateId=${candidateId}`,
      outputSummary: `fetched ${resumeText.length} chars`,
      latencyMs,
      timestamp: Date.now(),
      candidateId: candidateId as never,
      jobId: candidate.jobId as never,
    });

    return { resumeText, candidateName: candidate.name as string };
  },
});

const writeExtractedDataTool = createTool({
  description: "Write the parsed resume data back to the candidate record",
  inputSchema: z.object({
    candidateId: z.string(),
    skills: z.array(z.string()).optional(),
    certifications: z.array(z.string()).optional(),
    workHistory: z.array(z.record(z.string(), z.unknown())).optional(),
    education: z.array(z.record(z.string(), z.unknown())).optional(),
  }),
  execute: async (
    ctx,
    { candidateId, skills, certifications, workHistory, education }
  ): Promise<{ success: true }> => {
    const start = Date.now();
    const parsedData = { skills, certifications, workHistory, education };
    await ctx.runMutation(internal.functions.candidates.updateCandidateParsedData, {
      candidateId: candidateId as never,
      parsedData,
    });
    await ctx.runMutation(internal.functions.candidates.updateCandidateStatus, {
      candidateId: candidateId as never,
      status: "evaluated",
    });
    const latencyMs = Date.now() - start;
    await ctx.runMutation(internal.functions.agentLogs.writeAgentLog, {
      agentName: "ResumeParser",
      action: "write_parsed_data",
      inputSummary: `candidateId=${candidateId}`,
      outputSummary: `skills=${(skills ?? []).join(", ")}`,
      latencyMs,
      timestamp: Date.now(),
      candidateId: candidateId as never,
    });
    return { success: true };
  },
});

export const resumeParserAgent = new Agent(components.agent, {
  name: "ResumeParser",
  languageModel: getLanguageModel("resumeParser"),
  instructions:
    "You are a resume parsing specialist. Extract structured information from resume text: contact details, work history (company, title, duration, responsibilities), education, skills, certifications. Return structured JSON. Be thorough but do not infer skills not explicitly stated.",
  tools: { parseResume: parseResumeTool, writeExtractedData: writeExtractedDataTool },
});

export const runResumeParser = internalAction({
  args: { candidateId: v.id("candidates") },
  handler: async (ctx, { candidateId }) => {
    const { thread } = await resumeParserAgent.createThread(ctx, {});
    const result = await resumeParserAgent.generateText(
      ctx,
      { threadId: thread.threadId },
      {
        prompt: `Parse the resume for candidate ${candidateId}. First use the parseResume tool to fetch the resume text, then use writeExtractedData to save the structured data you extract.`,
      }
    );
    return result.text;
  },
});
