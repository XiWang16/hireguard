import * as pdf from "pdf-parse";

type PdfExtractRequest = {
  fileUrl?: string;
};

export const handler = async (event: { body?: string | null }) => {
  try {
    const payload: PdfExtractRequest = event.body ? JSON.parse(event.body) : {};
    if (!payload.fileUrl) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "fileUrl is required" }),
      };
    }

    const response = await fetch(payload.fileUrl);
    if (!response.ok) {
      return {
        statusCode: 502,
        body: JSON.stringify({ error: `failed to download PDF: ${response.status}` }),
      };
    }

    const buffer = Buffer.from(await response.arrayBuffer());
    const result = await pdf(buffer);

    return {
      statusCode: 200,
      body: JSON.stringify({
        text: result.text,
        pages: result.numpages,
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
