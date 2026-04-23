import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";

type SesAlertRequest = {
  to?: string;
  from?: string;
  subject?: string;
  body?: string;
};

const client = new SESv2Client({});

export const handler = async (event: { body?: string | null }) => {
  try {
    const payload: SesAlertRequest = event.body ? JSON.parse(event.body) : {};
    if (!payload.to || !payload.from || !payload.subject || !payload.body) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "to, from, subject, and body are required" }),
      };
    }

    await client.send(
      new SendEmailCommand({
        FromEmailAddress: payload.from,
        Destination: { ToAddresses: [payload.to] },
        Content: {
          Simple: {
            Subject: { Data: payload.subject, Charset: "UTF-8" },
            Body: { Text: { Data: payload.body, Charset: "UTF-8" } },
          },
        },
      })
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ sent: true }),
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : "unexpected error";
    return {
      statusCode: 500,
      body: JSON.stringify({ sent: false, error: message }),
    };
  }
};
