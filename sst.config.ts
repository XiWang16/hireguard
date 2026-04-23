/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "hireguard",
      home: "aws",
      region: "us-east-1",
      removal: input?.stage === "production" ? "retain" : "remove",
    };
  },
  async run() {
    const resumeBucket = new sst.aws.Bucket("HireguardResumes", {
      access: "private",
    });

    const anthropicSecret = new sst.Secret("AnthropicApiKey");

    const pdfExtract = new sst.aws.Function("PdfExtract", {
      handler: "infra/lambdas/pdf-extract.handler",
      runtime: "nodejs20.x",
      url: true,
      timeout: "30 seconds",
      memory: "1024 MB",
    });

    const statsCompute = new sst.aws.Function("StatsCompute", {
      handler: "infra/lambdas/stats-compute.handler",
      runtime: "nodejs20.x",
      url: true,
      timeout: "30 seconds",
      memory: "1024 MB",
    });

    const sesAlert = new sst.aws.Function("SesAlert", {
      handler: "infra/lambdas/ses-alert.handler",
      runtime: "nodejs20.x",
      url: true,
      timeout: "30 seconds",
      memory: "512 MB",
      environment: {
        ANTHROPIC_SECRET_ARN: anthropicSecret.arn,
      },
      permissions: [
        {
          actions: ["ses:SendEmail", "ses:SendRawEmail"],
          resources: ["*"],
        },
      ],
    });

    const sesIdentity = new sst.aws.Email("HireguardSesIdentity", {
      sender: "alerts@hireguard.dev",
    });

    return {
      ResumeBucketName: resumeBucket.name,
      PdfExtractUrl: pdfExtract.url,
      StatsComputeUrl: statsCompute.url,
      SesAlertUrl: sesAlert.url,
      AnthropicSecretArn: anthropicSecret.arn,
      SesIdentitySender: sesIdentity.sender,
    };
  },
});
