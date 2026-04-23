import { createRequire as topLevelCreateRequire } from 'module';
const require = topLevelCreateRequire(import.meta.url);
import { fileURLToPath as topLevelFileUrlToPath, URL as topLevelURL } from "url"
const __filename = topLevelFileUrlToPath(import.meta.url)
const __dirname = topLevelFileUrlToPath(new topLevelURL(".", import.meta.url))

var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// node_modules/@smithy/protocol-http/dist-es/extensions/httpExtensionConfiguration.js
var getHttpHandlerExtensionConfiguration, resolveHttpHandlerRuntimeConfig;
var init_httpExtensionConfiguration = __esm({
  "node_modules/@smithy/protocol-http/dist-es/extensions/httpExtensionConfiguration.js"() {
    getHttpHandlerExtensionConfiguration = /* @__PURE__ */ __name((runtimeConfig) => {
      return {
        setHttpHandler(handler2) {
          runtimeConfig.httpHandler = handler2;
        },
        httpHandler() {
          return runtimeConfig.httpHandler;
        },
        updateHttpClientConfig(key, value) {
          runtimeConfig.httpHandler?.updateHttpClientConfig(key, value);
        },
        httpHandlerConfigs() {
          return runtimeConfig.httpHandler.httpHandlerConfigs();
        }
      };
    }, "getHttpHandlerExtensionConfiguration");
    resolveHttpHandlerRuntimeConfig = /* @__PURE__ */ __name((httpHandlerExtensionConfiguration) => {
      return {
        httpHandler: httpHandlerExtensionConfiguration.httpHandler()
      };
    }, "resolveHttpHandlerRuntimeConfig");
  }
});

// node_modules/@smithy/protocol-http/dist-es/extensions/index.js
var init_extensions = __esm({
  "node_modules/@smithy/protocol-http/dist-es/extensions/index.js"() {
    init_httpExtensionConfiguration();
  }
});

// node_modules/@smithy/types/dist-es/abort.js
var init_abort = __esm({
  "node_modules/@smithy/types/dist-es/abort.js"() {
  }
});

// node_modules/@smithy/types/dist-es/auth/auth.js
var HttpAuthLocation;
var init_auth = __esm({
  "node_modules/@smithy/types/dist-es/auth/auth.js"() {
    (function(HttpAuthLocation2) {
      HttpAuthLocation2["HEADER"] = "header";
      HttpAuthLocation2["QUERY"] = "query";
    })(HttpAuthLocation || (HttpAuthLocation = {}));
  }
});

// node_modules/@smithy/types/dist-es/auth/HttpApiKeyAuth.js
var HttpApiKeyAuthLocation;
var init_HttpApiKeyAuth = __esm({
  "node_modules/@smithy/types/dist-es/auth/HttpApiKeyAuth.js"() {
    (function(HttpApiKeyAuthLocation2) {
      HttpApiKeyAuthLocation2["HEADER"] = "header";
      HttpApiKeyAuthLocation2["QUERY"] = "query";
    })(HttpApiKeyAuthLocation || (HttpApiKeyAuthLocation = {}));
  }
});

// node_modules/@smithy/types/dist-es/auth/HttpAuthScheme.js
var init_HttpAuthScheme = __esm({
  "node_modules/@smithy/types/dist-es/auth/HttpAuthScheme.js"() {
  }
});

// node_modules/@smithy/types/dist-es/auth/HttpAuthSchemeProvider.js
var init_HttpAuthSchemeProvider = __esm({
  "node_modules/@smithy/types/dist-es/auth/HttpAuthSchemeProvider.js"() {
  }
});

// node_modules/@smithy/types/dist-es/auth/HttpSigner.js
var init_HttpSigner = __esm({
  "node_modules/@smithy/types/dist-es/auth/HttpSigner.js"() {
  }
});

// node_modules/@smithy/types/dist-es/auth/IdentityProviderConfig.js
var init_IdentityProviderConfig = __esm({
  "node_modules/@smithy/types/dist-es/auth/IdentityProviderConfig.js"() {
  }
});

// node_modules/@smithy/types/dist-es/auth/index.js
var init_auth2 = __esm({
  "node_modules/@smithy/types/dist-es/auth/index.js"() {
    init_auth();
    init_HttpApiKeyAuth();
    init_HttpAuthScheme();
    init_HttpAuthSchemeProvider();
    init_HttpSigner();
    init_IdentityProviderConfig();
  }
});

// node_modules/@smithy/types/dist-es/blob/blob-payload-input-types.js
var init_blob_payload_input_types = __esm({
  "node_modules/@smithy/types/dist-es/blob/blob-payload-input-types.js"() {
  }
});

// node_modules/@smithy/types/dist-es/checksum.js
var init_checksum = __esm({
  "node_modules/@smithy/types/dist-es/checksum.js"() {
  }
});

// node_modules/@smithy/types/dist-es/client.js
var init_client = __esm({
  "node_modules/@smithy/types/dist-es/client.js"() {
  }
});

// node_modules/@smithy/types/dist-es/command.js
var init_command = __esm({
  "node_modules/@smithy/types/dist-es/command.js"() {
  }
});

// node_modules/@smithy/types/dist-es/connection/config.js
var init_config = __esm({
  "node_modules/@smithy/types/dist-es/connection/config.js"() {
  }
});

// node_modules/@smithy/types/dist-es/connection/manager.js
var init_manager = __esm({
  "node_modules/@smithy/types/dist-es/connection/manager.js"() {
  }
});

// node_modules/@smithy/types/dist-es/connection/pool.js
var init_pool = __esm({
  "node_modules/@smithy/types/dist-es/connection/pool.js"() {
  }
});

// node_modules/@smithy/types/dist-es/connection/index.js
var init_connection = __esm({
  "node_modules/@smithy/types/dist-es/connection/index.js"() {
    init_config();
    init_manager();
    init_pool();
  }
});

// node_modules/@smithy/types/dist-es/crypto.js
var init_crypto = __esm({
  "node_modules/@smithy/types/dist-es/crypto.js"() {
  }
});

// node_modules/@smithy/types/dist-es/encode.js
var init_encode = __esm({
  "node_modules/@smithy/types/dist-es/encode.js"() {
  }
});

// node_modules/@smithy/types/dist-es/endpoint.js
var EndpointURLScheme;
var init_endpoint = __esm({
  "node_modules/@smithy/types/dist-es/endpoint.js"() {
    (function(EndpointURLScheme2) {
      EndpointURLScheme2["HTTP"] = "http";
      EndpointURLScheme2["HTTPS"] = "https";
    })(EndpointURLScheme || (EndpointURLScheme = {}));
  }
});

// node_modules/@smithy/types/dist-es/endpoints/EndpointRuleObject.js
var init_EndpointRuleObject = __esm({
  "node_modules/@smithy/types/dist-es/endpoints/EndpointRuleObject.js"() {
  }
});

// node_modules/@smithy/types/dist-es/endpoints/ErrorRuleObject.js
var init_ErrorRuleObject = __esm({
  "node_modules/@smithy/types/dist-es/endpoints/ErrorRuleObject.js"() {
  }
});

// node_modules/@smithy/types/dist-es/endpoints/RuleSetObject.js
var init_RuleSetObject = __esm({
  "node_modules/@smithy/types/dist-es/endpoints/RuleSetObject.js"() {
  }
});

// node_modules/@smithy/types/dist-es/endpoints/shared.js
var init_shared = __esm({
  "node_modules/@smithy/types/dist-es/endpoints/shared.js"() {
  }
});

// node_modules/@smithy/types/dist-es/endpoints/TreeRuleObject.js
var init_TreeRuleObject = __esm({
  "node_modules/@smithy/types/dist-es/endpoints/TreeRuleObject.js"() {
  }
});

// node_modules/@smithy/types/dist-es/endpoints/index.js
var init_endpoints = __esm({
  "node_modules/@smithy/types/dist-es/endpoints/index.js"() {
    init_EndpointRuleObject();
    init_ErrorRuleObject();
    init_RuleSetObject();
    init_shared();
    init_TreeRuleObject();
  }
});

// node_modules/@smithy/types/dist-es/eventStream.js
var init_eventStream = __esm({
  "node_modules/@smithy/types/dist-es/eventStream.js"() {
  }
});

// node_modules/@smithy/types/dist-es/extensions/checksum.js
var AlgorithmId;
var init_checksum2 = __esm({
  "node_modules/@smithy/types/dist-es/extensions/checksum.js"() {
    (function(AlgorithmId2) {
      AlgorithmId2["MD5"] = "md5";
      AlgorithmId2["CRC32"] = "crc32";
      AlgorithmId2["CRC32C"] = "crc32c";
      AlgorithmId2["SHA1"] = "sha1";
      AlgorithmId2["SHA256"] = "sha256";
    })(AlgorithmId || (AlgorithmId = {}));
  }
});

// node_modules/@smithy/types/dist-es/extensions/defaultClientConfiguration.js
var init_defaultClientConfiguration = __esm({
  "node_modules/@smithy/types/dist-es/extensions/defaultClientConfiguration.js"() {
  }
});

// node_modules/@smithy/types/dist-es/extensions/defaultExtensionConfiguration.js
var init_defaultExtensionConfiguration = __esm({
  "node_modules/@smithy/types/dist-es/extensions/defaultExtensionConfiguration.js"() {
  }
});

// node_modules/@smithy/types/dist-es/extensions/index.js
var init_extensions2 = __esm({
  "node_modules/@smithy/types/dist-es/extensions/index.js"() {
    init_defaultClientConfiguration();
    init_defaultExtensionConfiguration();
    init_checksum2();
  }
});

// node_modules/@smithy/types/dist-es/feature-ids.js
var init_feature_ids = __esm({
  "node_modules/@smithy/types/dist-es/feature-ids.js"() {
  }
});

// node_modules/@smithy/types/dist-es/http.js
var FieldPosition;
var init_http = __esm({
  "node_modules/@smithy/types/dist-es/http.js"() {
    (function(FieldPosition2) {
      FieldPosition2[FieldPosition2["HEADER"] = 0] = "HEADER";
      FieldPosition2[FieldPosition2["TRAILER"] = 1] = "TRAILER";
    })(FieldPosition || (FieldPosition = {}));
  }
});

// node_modules/@smithy/types/dist-es/http/httpHandlerInitialization.js
var init_httpHandlerInitialization = __esm({
  "node_modules/@smithy/types/dist-es/http/httpHandlerInitialization.js"() {
  }
});

// node_modules/@smithy/types/dist-es/identity/apiKeyIdentity.js
var init_apiKeyIdentity = __esm({
  "node_modules/@smithy/types/dist-es/identity/apiKeyIdentity.js"() {
  }
});

// node_modules/@smithy/types/dist-es/identity/awsCredentialIdentity.js
var init_awsCredentialIdentity = __esm({
  "node_modules/@smithy/types/dist-es/identity/awsCredentialIdentity.js"() {
  }
});

// node_modules/@smithy/types/dist-es/identity/identity.js
var init_identity = __esm({
  "node_modules/@smithy/types/dist-es/identity/identity.js"() {
  }
});

// node_modules/@smithy/types/dist-es/identity/tokenIdentity.js
var init_tokenIdentity = __esm({
  "node_modules/@smithy/types/dist-es/identity/tokenIdentity.js"() {
  }
});

// node_modules/@smithy/types/dist-es/identity/index.js
var init_identity2 = __esm({
  "node_modules/@smithy/types/dist-es/identity/index.js"() {
    init_apiKeyIdentity();
    init_awsCredentialIdentity();
    init_identity();
    init_tokenIdentity();
  }
});

// node_modules/@smithy/types/dist-es/logger.js
var init_logger = __esm({
  "node_modules/@smithy/types/dist-es/logger.js"() {
  }
});

// node_modules/@smithy/types/dist-es/middleware.js
var SMITHY_CONTEXT_KEY;
var init_middleware = __esm({
  "node_modules/@smithy/types/dist-es/middleware.js"() {
    SMITHY_CONTEXT_KEY = "__smithy_context";
  }
});

// node_modules/@smithy/types/dist-es/pagination.js
var init_pagination = __esm({
  "node_modules/@smithy/types/dist-es/pagination.js"() {
  }
});

// node_modules/@smithy/types/dist-es/profile.js
var IniSectionType;
var init_profile = __esm({
  "node_modules/@smithy/types/dist-es/profile.js"() {
    (function(IniSectionType2) {
      IniSectionType2["PROFILE"] = "profile";
      IniSectionType2["SSO_SESSION"] = "sso-session";
      IniSectionType2["SERVICES"] = "services";
    })(IniSectionType || (IniSectionType = {}));
  }
});

// node_modules/@smithy/types/dist-es/response.js
var init_response = __esm({
  "node_modules/@smithy/types/dist-es/response.js"() {
  }
});

// node_modules/@smithy/types/dist-es/retry.js
var init_retry = __esm({
  "node_modules/@smithy/types/dist-es/retry.js"() {
  }
});

// node_modules/@smithy/types/dist-es/schema/schema.js
var init_schema = __esm({
  "node_modules/@smithy/types/dist-es/schema/schema.js"() {
  }
});

// node_modules/@smithy/types/dist-es/schema/traits.js
var init_traits = __esm({
  "node_modules/@smithy/types/dist-es/schema/traits.js"() {
  }
});

// node_modules/@smithy/types/dist-es/schema/schema-deprecated.js
var init_schema_deprecated = __esm({
  "node_modules/@smithy/types/dist-es/schema/schema-deprecated.js"() {
  }
});

// node_modules/@smithy/types/dist-es/schema/sentinels.js
var init_sentinels = __esm({
  "node_modules/@smithy/types/dist-es/schema/sentinels.js"() {
  }
});

// node_modules/@smithy/types/dist-es/schema/static-schemas.js
var init_static_schemas = __esm({
  "node_modules/@smithy/types/dist-es/schema/static-schemas.js"() {
  }
});

// node_modules/@smithy/types/dist-es/serde.js
var init_serde = __esm({
  "node_modules/@smithy/types/dist-es/serde.js"() {
  }
});

// node_modules/@smithy/types/dist-es/shapes.js
var init_shapes = __esm({
  "node_modules/@smithy/types/dist-es/shapes.js"() {
  }
});

// node_modules/@smithy/types/dist-es/signature.js
var init_signature = __esm({
  "node_modules/@smithy/types/dist-es/signature.js"() {
  }
});

// node_modules/@smithy/types/dist-es/stream.js
var init_stream = __esm({
  "node_modules/@smithy/types/dist-es/stream.js"() {
  }
});

// node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-common-types.js
var init_streaming_blob_common_types = __esm({
  "node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-common-types.js"() {
  }
});

// node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-input-types.js
var init_streaming_blob_payload_input_types = __esm({
  "node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-input-types.js"() {
  }
});

// node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-output-types.js
var init_streaming_blob_payload_output_types = __esm({
  "node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-output-types.js"() {
  }
});

// node_modules/@smithy/types/dist-es/transfer.js
var RequestHandlerProtocol;
var init_transfer = __esm({
  "node_modules/@smithy/types/dist-es/transfer.js"() {
    (function(RequestHandlerProtocol2) {
      RequestHandlerProtocol2["HTTP_0_9"] = "http/0.9";
      RequestHandlerProtocol2["HTTP_1_0"] = "http/1.0";
      RequestHandlerProtocol2["TDS_8_0"] = "tds/8.0";
    })(RequestHandlerProtocol || (RequestHandlerProtocol = {}));
  }
});

// node_modules/@smithy/types/dist-es/transform/client-payload-blob-type-narrow.js
var init_client_payload_blob_type_narrow = __esm({
  "node_modules/@smithy/types/dist-es/transform/client-payload-blob-type-narrow.js"() {
  }
});

// node_modules/@smithy/types/dist-es/transform/mutable.js
var init_mutable = __esm({
  "node_modules/@smithy/types/dist-es/transform/mutable.js"() {
  }
});

// node_modules/@smithy/types/dist-es/transform/no-undefined.js
var init_no_undefined = __esm({
  "node_modules/@smithy/types/dist-es/transform/no-undefined.js"() {
  }
});

// node_modules/@smithy/types/dist-es/transform/type-transform.js
var init_type_transform = __esm({
  "node_modules/@smithy/types/dist-es/transform/type-transform.js"() {
  }
});

// node_modules/@smithy/types/dist-es/uri.js
var init_uri = __esm({
  "node_modules/@smithy/types/dist-es/uri.js"() {
  }
});

// node_modules/@smithy/types/dist-es/util.js
var init_util = __esm({
  "node_modules/@smithy/types/dist-es/util.js"() {
  }
});

// node_modules/@smithy/types/dist-es/waiter.js
var init_waiter = __esm({
  "node_modules/@smithy/types/dist-es/waiter.js"() {
  }
});

// node_modules/@smithy/types/dist-es/index.js
var init_dist_es = __esm({
  "node_modules/@smithy/types/dist-es/index.js"() {
    init_abort();
    init_auth2();
    init_blob_payload_input_types();
    init_checksum();
    init_client();
    init_command();
    init_connection();
    init_crypto();
    init_encode();
    init_endpoint();
    init_endpoints();
    init_eventStream();
    init_extensions2();
    init_feature_ids();
    init_http();
    init_httpHandlerInitialization();
    init_identity2();
    init_logger();
    init_middleware();
    init_pagination();
    init_profile();
    init_response();
    init_retry();
    init_schema();
    init_traits();
    init_schema_deprecated();
    init_sentinels();
    init_static_schemas();
    init_serde();
    init_shapes();
    init_signature();
    init_stream();
    init_streaming_blob_common_types();
    init_streaming_blob_payload_input_types();
    init_streaming_blob_payload_output_types();
    init_transfer();
    init_client_payload_blob_type_narrow();
    init_mutable();
    init_no_undefined();
    init_type_transform();
    init_uri();
    init_util();
    init_waiter();
  }
});

// node_modules/@smithy/protocol-http/dist-es/Field.js
var init_Field = __esm({
  "node_modules/@smithy/protocol-http/dist-es/Field.js"() {
  }
});

// node_modules/@smithy/protocol-http/dist-es/Fields.js
var init_Fields = __esm({
  "node_modules/@smithy/protocol-http/dist-es/Fields.js"() {
  }
});

// node_modules/@smithy/protocol-http/dist-es/httpHandler.js
var init_httpHandler = __esm({
  "node_modules/@smithy/protocol-http/dist-es/httpHandler.js"() {
  }
});

// node_modules/@smithy/protocol-http/dist-es/httpRequest.js
function cloneQuery(query) {
  return Object.keys(query).reduce((carry, paramName) => {
    const param = query[paramName];
    return {
      ...carry,
      [paramName]: Array.isArray(param) ? [...param] : param
    };
  }, {});
}
var HttpRequest;
var init_httpRequest = __esm({
  "node_modules/@smithy/protocol-http/dist-es/httpRequest.js"() {
    HttpRequest = class _HttpRequest {
      static {
        __name(this, "HttpRequest");
      }
      method;
      protocol;
      hostname;
      port;
      path;
      query;
      headers;
      username;
      password;
      fragment;
      body;
      constructor(options) {
        this.method = options.method || "GET";
        this.hostname = options.hostname || "localhost";
        this.port = options.port;
        this.query = options.query || {};
        this.headers = options.headers || {};
        this.body = options.body;
        this.protocol = options.protocol ? options.protocol.slice(-1) !== ":" ? `${options.protocol}:` : options.protocol : "https:";
        this.path = options.path ? options.path.charAt(0) !== "/" ? `/${options.path}` : options.path : "/";
        this.username = options.username;
        this.password = options.password;
        this.fragment = options.fragment;
      }
      static clone(request2) {
        const cloned = new _HttpRequest({
          ...request2,
          headers: { ...request2.headers }
        });
        if (cloned.query) {
          cloned.query = cloneQuery(cloned.query);
        }
        return cloned;
      }
      static isInstance(request2) {
        if (!request2) {
          return false;
        }
        const req = request2;
        return "method" in req && "protocol" in req && "hostname" in req && "path" in req && typeof req["query"] === "object" && typeof req["headers"] === "object";
      }
      clone() {
        return _HttpRequest.clone(this);
      }
    };
    __name(cloneQuery, "cloneQuery");
  }
});

// node_modules/@smithy/protocol-http/dist-es/httpResponse.js
var HttpResponse;
var init_httpResponse = __esm({
  "node_modules/@smithy/protocol-http/dist-es/httpResponse.js"() {
    HttpResponse = class {
      static {
        __name(this, "HttpResponse");
      }
      statusCode;
      reason;
      headers;
      body;
      constructor(options) {
        this.statusCode = options.statusCode;
        this.reason = options.reason;
        this.headers = options.headers || {};
        this.body = options.body;
      }
      static isInstance(response) {
        if (!response)
          return false;
        const resp = response;
        return typeof resp.statusCode === "number" && typeof resp.headers === "object";
      }
    };
  }
});

// node_modules/@smithy/protocol-http/dist-es/isValidHostname.js
var init_isValidHostname = __esm({
  "node_modules/@smithy/protocol-http/dist-es/isValidHostname.js"() {
  }
});

// node_modules/@smithy/protocol-http/dist-es/types.js
var init_types = __esm({
  "node_modules/@smithy/protocol-http/dist-es/types.js"() {
  }
});

// node_modules/@smithy/protocol-http/dist-es/index.js
var init_dist_es2 = __esm({
  "node_modules/@smithy/protocol-http/dist-es/index.js"() {
    init_extensions();
    init_Field();
    init_Fields();
    init_httpHandler();
    init_httpRequest();
    init_httpResponse();
    init_isValidHostname();
    init_types();
  }
});

// node_modules/@aws-sdk/middleware-host-header/dist-es/index.js
function resolveHostHeaderConfig(input) {
  return input;
}
var hostHeaderMiddleware, hostHeaderMiddlewareOptions, getHostHeaderPlugin;
var init_dist_es3 = __esm({
  "node_modules/@aws-sdk/middleware-host-header/dist-es/index.js"() {
    init_dist_es2();
    __name(resolveHostHeaderConfig, "resolveHostHeaderConfig");
    hostHeaderMiddleware = /* @__PURE__ */ __name((options) => (next) => async (args) => {
      if (!HttpRequest.isInstance(args.request))
        return next(args);
      const { request: request2 } = args;
      const { handlerProtocol = "" } = options.requestHandler.metadata || {};
      if (handlerProtocol.indexOf("h2") >= 0 && !request2.headers[":authority"]) {
        delete request2.headers["host"];
        request2.headers[":authority"] = request2.hostname + (request2.port ? ":" + request2.port : "");
      } else if (!request2.headers["host"]) {
        let host = request2.hostname;
        if (request2.port != null)
          host += `:${request2.port}`;
        request2.headers["host"] = host;
      }
      return next(args);
    }, "hostHeaderMiddleware");
    hostHeaderMiddlewareOptions = {
      name: "hostHeaderMiddleware",
      step: "build",
      priority: "low",
      tags: ["HOST"],
      override: true
    };
    getHostHeaderPlugin = /* @__PURE__ */ __name((options) => ({
      applyToStack: /* @__PURE__ */ __name((clientStack) => {
        clientStack.add(hostHeaderMiddleware(options), hostHeaderMiddlewareOptions);
      }, "applyToStack")
    }), "getHostHeaderPlugin");
  }
});

// node_modules/@aws-sdk/middleware-logger/dist-es/loggerMiddleware.js
var loggerMiddleware, loggerMiddlewareOptions, getLoggerPlugin;
var init_loggerMiddleware = __esm({
  "node_modules/@aws-sdk/middleware-logger/dist-es/loggerMiddleware.js"() {
    loggerMiddleware = /* @__PURE__ */ __name(() => (next, context) => async (args) => {
      try {
        const response = await next(args);
        const { clientName, commandName, logger: logger2, dynamoDbDocumentClientOptions = {} } = context;
        const { overrideInputFilterSensitiveLog, overrideOutputFilterSensitiveLog } = dynamoDbDocumentClientOptions;
        const inputFilterSensitiveLog = overrideInputFilterSensitiveLog ?? context.inputFilterSensitiveLog;
        const outputFilterSensitiveLog = overrideOutputFilterSensitiveLog ?? context.outputFilterSensitiveLog;
        const { $metadata, ...outputWithoutMetadata } = response.output;
        logger2?.info?.({
          clientName,
          commandName,
          input: inputFilterSensitiveLog(args.input),
          output: outputFilterSensitiveLog(outputWithoutMetadata),
          metadata: $metadata
        });
        return response;
      } catch (error) {
        const { clientName, commandName, logger: logger2, dynamoDbDocumentClientOptions = {} } = context;
        const { overrideInputFilterSensitiveLog } = dynamoDbDocumentClientOptions;
        const inputFilterSensitiveLog = overrideInputFilterSensitiveLog ?? context.inputFilterSensitiveLog;
        logger2?.error?.({
          clientName,
          commandName,
          input: inputFilterSensitiveLog(args.input),
          error,
          metadata: error.$metadata
        });
        throw error;
      }
    }, "loggerMiddleware");
    loggerMiddlewareOptions = {
      name: "loggerMiddleware",
      tags: ["LOGGER"],
      step: "initialize",
      override: true
    };
    getLoggerPlugin = /* @__PURE__ */ __name((options) => ({
      applyToStack: /* @__PURE__ */ __name((clientStack) => {
        clientStack.add(loggerMiddleware(), loggerMiddlewareOptions);
      }, "applyToStack")
    }), "getLoggerPlugin");
  }
});

// node_modules/@aws-sdk/middleware-logger/dist-es/index.js
var init_dist_es4 = __esm({
  "node_modules/@aws-sdk/middleware-logger/dist-es/index.js"() {
    init_loggerMiddleware();
  }
});

// node_modules/@aws-sdk/middleware-recursion-detection/dist-es/configuration.js
var recursionDetectionMiddlewareOptions;
var init_configuration = __esm({
  "node_modules/@aws-sdk/middleware-recursion-detection/dist-es/configuration.js"() {
    recursionDetectionMiddlewareOptions = {
      step: "build",
      tags: ["RECURSION_DETECTION"],
      name: "recursionDetectionMiddleware",
      override: true,
      priority: "low"
    };
  }
});

// node_modules/@aws/lambda-invoke-store/dist-es/invoke-store.js
var PROTECTED_KEYS, NO_GLOBAL_AWS_LAMBDA, InvokeStoreBase, InvokeStoreSingle, InvokeStoreMulti, InvokeStore;
var init_invoke_store = __esm({
  "node_modules/@aws/lambda-invoke-store/dist-es/invoke-store.js"() {
    PROTECTED_KEYS = {
      REQUEST_ID: /* @__PURE__ */ Symbol.for("_AWS_LAMBDA_REQUEST_ID"),
      X_RAY_TRACE_ID: /* @__PURE__ */ Symbol.for("_AWS_LAMBDA_X_RAY_TRACE_ID"),
      TENANT_ID: /* @__PURE__ */ Symbol.for("_AWS_LAMBDA_TENANT_ID")
    };
    NO_GLOBAL_AWS_LAMBDA = ["true", "1"].includes(process.env?.AWS_LAMBDA_NODEJS_NO_GLOBAL_AWSLAMBDA ?? "");
    if (!NO_GLOBAL_AWS_LAMBDA) {
      globalThis.awslambda = globalThis.awslambda || {};
    }
    InvokeStoreBase = class {
      static {
        __name(this, "InvokeStoreBase");
      }
      static PROTECTED_KEYS = PROTECTED_KEYS;
      isProtectedKey(key) {
        return Object.values(PROTECTED_KEYS).includes(key);
      }
      getRequestId() {
        return this.get(PROTECTED_KEYS.REQUEST_ID) ?? "-";
      }
      getXRayTraceId() {
        return this.get(PROTECTED_KEYS.X_RAY_TRACE_ID);
      }
      getTenantId() {
        return this.get(PROTECTED_KEYS.TENANT_ID);
      }
    };
    InvokeStoreSingle = class extends InvokeStoreBase {
      static {
        __name(this, "InvokeStoreSingle");
      }
      currentContext;
      getContext() {
        return this.currentContext;
      }
      hasContext() {
        return this.currentContext !== void 0;
      }
      get(key) {
        return this.currentContext?.[key];
      }
      set(key, value) {
        if (this.isProtectedKey(key)) {
          throw new Error(`Cannot modify protected Lambda context field: ${String(key)}`);
        }
        this.currentContext = this.currentContext || {};
        this.currentContext[key] = value;
      }
      run(context, fn) {
        this.currentContext = context;
        return fn();
      }
    };
    InvokeStoreMulti = class _InvokeStoreMulti extends InvokeStoreBase {
      static {
        __name(this, "InvokeStoreMulti");
      }
      als;
      static async create() {
        const instance = new _InvokeStoreMulti();
        const asyncHooks = await import("node:async_hooks");
        instance.als = new asyncHooks.AsyncLocalStorage();
        return instance;
      }
      getContext() {
        return this.als.getStore();
      }
      hasContext() {
        return this.als.getStore() !== void 0;
      }
      get(key) {
        return this.als.getStore()?.[key];
      }
      set(key, value) {
        if (this.isProtectedKey(key)) {
          throw new Error(`Cannot modify protected Lambda context field: ${String(key)}`);
        }
        const store = this.als.getStore();
        if (!store) {
          throw new Error("No context available");
        }
        store[key] = value;
      }
      run(context, fn) {
        return this.als.run(context, fn);
      }
    };
    (function(InvokeStore2) {
      let instance = null;
      async function getInstanceAsync(forceInvokeStoreMulti) {
        if (!instance) {
          instance = (async () => {
            const isMulti = forceInvokeStoreMulti === true || "AWS_LAMBDA_MAX_CONCURRENCY" in process.env;
            const newInstance = isMulti ? await InvokeStoreMulti.create() : new InvokeStoreSingle();
            if (!NO_GLOBAL_AWS_LAMBDA && globalThis.awslambda?.InvokeStore) {
              return globalThis.awslambda.InvokeStore;
            } else if (!NO_GLOBAL_AWS_LAMBDA && globalThis.awslambda) {
              globalThis.awslambda.InvokeStore = newInstance;
              return newInstance;
            } else {
              return newInstance;
            }
          })();
        }
        return instance;
      }
      __name(getInstanceAsync, "getInstanceAsync");
      InvokeStore2.getInstanceAsync = getInstanceAsync;
      InvokeStore2._testing = process.env.AWS_LAMBDA_BENCHMARK_MODE === "1" ? {
        reset: /* @__PURE__ */ __name(() => {
          instance = null;
          if (globalThis.awslambda?.InvokeStore) {
            delete globalThis.awslambda.InvokeStore;
          }
          globalThis.awslambda = { InvokeStore: void 0 };
        }, "reset")
      } : void 0;
    })(InvokeStore || (InvokeStore = {}));
  }
});

// node_modules/@aws-sdk/middleware-recursion-detection/dist-es/recursionDetectionMiddleware.js
var TRACE_ID_HEADER_NAME, ENV_LAMBDA_FUNCTION_NAME, ENV_TRACE_ID, recursionDetectionMiddleware;
var init_recursionDetectionMiddleware = __esm({
  "node_modules/@aws-sdk/middleware-recursion-detection/dist-es/recursionDetectionMiddleware.js"() {
    init_invoke_store();
    init_dist_es2();
    TRACE_ID_HEADER_NAME = "X-Amzn-Trace-Id";
    ENV_LAMBDA_FUNCTION_NAME = "AWS_LAMBDA_FUNCTION_NAME";
    ENV_TRACE_ID = "_X_AMZN_TRACE_ID";
    recursionDetectionMiddleware = /* @__PURE__ */ __name(() => (next) => async (args) => {
      const { request: request2 } = args;
      if (!HttpRequest.isInstance(request2)) {
        return next(args);
      }
      const traceIdHeader = Object.keys(request2.headers ?? {}).find((h6) => h6.toLowerCase() === TRACE_ID_HEADER_NAME.toLowerCase()) ?? TRACE_ID_HEADER_NAME;
      if (request2.headers.hasOwnProperty(traceIdHeader)) {
        return next(args);
      }
      const functionName = process.env[ENV_LAMBDA_FUNCTION_NAME];
      const traceIdFromEnv = process.env[ENV_TRACE_ID];
      const invokeStore = await InvokeStore.getInstanceAsync();
      const traceIdFromInvokeStore = invokeStore?.getXRayTraceId();
      const traceId = traceIdFromInvokeStore ?? traceIdFromEnv;
      const nonEmptyString = /* @__PURE__ */ __name((str) => typeof str === "string" && str.length > 0, "nonEmptyString");
      if (nonEmptyString(functionName) && nonEmptyString(traceId)) {
        request2.headers[TRACE_ID_HEADER_NAME] = traceId;
      }
      return next({
        ...args,
        request: request2
      });
    }, "recursionDetectionMiddleware");
  }
});

// node_modules/@aws-sdk/middleware-recursion-detection/dist-es/getRecursionDetectionPlugin.js
var getRecursionDetectionPlugin;
var init_getRecursionDetectionPlugin = __esm({
  "node_modules/@aws-sdk/middleware-recursion-detection/dist-es/getRecursionDetectionPlugin.js"() {
    init_configuration();
    init_recursionDetectionMiddleware();
    getRecursionDetectionPlugin = /* @__PURE__ */ __name((options) => ({
      applyToStack: /* @__PURE__ */ __name((clientStack) => {
        clientStack.add(recursionDetectionMiddleware(), recursionDetectionMiddlewareOptions);
      }, "applyToStack")
    }), "getRecursionDetectionPlugin");
  }
});

// node_modules/@aws-sdk/middleware-recursion-detection/dist-es/index.js
var init_dist_es5 = __esm({
  "node_modules/@aws-sdk/middleware-recursion-detection/dist-es/index.js"() {
    init_getRecursionDetectionPlugin();
    init_recursionDetectionMiddleware();
  }
});

// node_modules/@smithy/core/dist-es/getSmithyContext.js
var init_getSmithyContext = __esm({
  "node_modules/@smithy/core/dist-es/getSmithyContext.js"() {
  }
});

// node_modules/@smithy/util-middleware/dist-es/getSmithyContext.js
var getSmithyContext;
var init_getSmithyContext2 = __esm({
  "node_modules/@smithy/util-middleware/dist-es/getSmithyContext.js"() {
    init_dist_es();
    getSmithyContext = /* @__PURE__ */ __name((context) => context[SMITHY_CONTEXT_KEY] || (context[SMITHY_CONTEXT_KEY] = {}), "getSmithyContext");
  }
});

// node_modules/@smithy/util-middleware/dist-es/normalizeProvider.js
var normalizeProvider;
var init_normalizeProvider = __esm({
  "node_modules/@smithy/util-middleware/dist-es/normalizeProvider.js"() {
    normalizeProvider = /* @__PURE__ */ __name((input) => {
      if (typeof input === "function")
        return input;
      const promisified = Promise.resolve(input);
      return () => promisified;
    }, "normalizeProvider");
  }
});

// node_modules/@smithy/util-middleware/dist-es/index.js
var init_dist_es6 = __esm({
  "node_modules/@smithy/util-middleware/dist-es/index.js"() {
    init_getSmithyContext2();
    init_normalizeProvider();
  }
});

// node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/resolveAuthOptions.js
var resolveAuthOptions;
var init_resolveAuthOptions = __esm({
  "node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/resolveAuthOptions.js"() {
    resolveAuthOptions = /* @__PURE__ */ __name((candidateAuthOptions, authSchemePreference) => {
      if (!authSchemePreference || authSchemePreference.length === 0) {
        return candidateAuthOptions;
      }
      const preferredAuthOptions = [];
      for (const preferredSchemeName of authSchemePreference) {
        for (const candidateAuthOption of candidateAuthOptions) {
          const candidateAuthSchemeName = candidateAuthOption.schemeId.split("#")[1];
          if (candidateAuthSchemeName === preferredSchemeName) {
            preferredAuthOptions.push(candidateAuthOption);
          }
        }
      }
      for (const candidateAuthOption of candidateAuthOptions) {
        if (!preferredAuthOptions.find(({ schemeId }) => schemeId === candidateAuthOption.schemeId)) {
          preferredAuthOptions.push(candidateAuthOption);
        }
      }
      return preferredAuthOptions;
    }, "resolveAuthOptions");
  }
});

// node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/httpAuthSchemeMiddleware.js
function convertHttpAuthSchemesToMap(httpAuthSchemes) {
  const map = /* @__PURE__ */ new Map();
  for (const scheme of httpAuthSchemes) {
    map.set(scheme.schemeId, scheme);
  }
  return map;
}
var httpAuthSchemeMiddleware;
var init_httpAuthSchemeMiddleware = __esm({
  "node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/httpAuthSchemeMiddleware.js"() {
    init_dist_es6();
    init_resolveAuthOptions();
    __name(convertHttpAuthSchemesToMap, "convertHttpAuthSchemesToMap");
    httpAuthSchemeMiddleware = /* @__PURE__ */ __name((config, mwOptions) => (next, context) => async (args) => {
      const options = config.httpAuthSchemeProvider(await mwOptions.httpAuthSchemeParametersProvider(config, context, args.input));
      const authSchemePreference = config.authSchemePreference ? await config.authSchemePreference() : [];
      const resolvedOptions = resolveAuthOptions(options, authSchemePreference);
      const authSchemes = convertHttpAuthSchemesToMap(config.httpAuthSchemes);
      const smithyContext = getSmithyContext(context);
      const failureReasons = [];
      for (const option of resolvedOptions) {
        const scheme = authSchemes.get(option.schemeId);
        if (!scheme) {
          failureReasons.push(`HttpAuthScheme \`${option.schemeId}\` was not enabled for this service.`);
          continue;
        }
        const identityProvider = scheme.identityProvider(await mwOptions.identityProviderConfigProvider(config));
        if (!identityProvider) {
          failureReasons.push(`HttpAuthScheme \`${option.schemeId}\` did not have an IdentityProvider configured.`);
          continue;
        }
        const { identityProperties = {}, signingProperties = {} } = option.propertiesExtractor?.(config, context) || {};
        option.identityProperties = Object.assign(option.identityProperties || {}, identityProperties);
        option.signingProperties = Object.assign(option.signingProperties || {}, signingProperties);
        smithyContext.selectedHttpAuthScheme = {
          httpAuthOption: option,
          identity: await identityProvider(option.identityProperties),
          signer: scheme.signer
        };
        break;
      }
      if (!smithyContext.selectedHttpAuthScheme) {
        throw new Error(failureReasons.join("\n"));
      }
      return next(args);
    }, "httpAuthSchemeMiddleware");
  }
});

// node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemeEndpointRuleSetPlugin.js
var httpAuthSchemeEndpointRuleSetMiddlewareOptions, getHttpAuthSchemeEndpointRuleSetPlugin;
var init_getHttpAuthSchemeEndpointRuleSetPlugin = __esm({
  "node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemeEndpointRuleSetPlugin.js"() {
    init_httpAuthSchemeMiddleware();
    httpAuthSchemeEndpointRuleSetMiddlewareOptions = {
      step: "serialize",
      tags: ["HTTP_AUTH_SCHEME"],
      name: "httpAuthSchemeMiddleware",
      override: true,
      relation: "before",
      toMiddleware: "endpointV2Middleware"
    };
    getHttpAuthSchemeEndpointRuleSetPlugin = /* @__PURE__ */ __name((config, { httpAuthSchemeParametersProvider, identityProviderConfigProvider }) => ({
      applyToStack: /* @__PURE__ */ __name((clientStack) => {
        clientStack.addRelativeTo(httpAuthSchemeMiddleware(config, {
          httpAuthSchemeParametersProvider,
          identityProviderConfigProvider
        }), httpAuthSchemeEndpointRuleSetMiddlewareOptions);
      }, "applyToStack")
    }), "getHttpAuthSchemeEndpointRuleSetPlugin");
  }
});

// node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemePlugin.js
var init_getHttpAuthSchemePlugin = __esm({
  "node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemePlugin.js"() {
  }
});

// node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/index.js
var init_middleware_http_auth_scheme = __esm({
  "node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/index.js"() {
    init_httpAuthSchemeMiddleware();
    init_getHttpAuthSchemeEndpointRuleSetPlugin();
    init_getHttpAuthSchemePlugin();
  }
});

// node_modules/@smithy/core/dist-es/middleware-http-signing/httpSigningMiddleware.js
var defaultErrorHandler, defaultSuccessHandler, httpSigningMiddleware;
var init_httpSigningMiddleware = __esm({
  "node_modules/@smithy/core/dist-es/middleware-http-signing/httpSigningMiddleware.js"() {
    init_dist_es2();
    init_dist_es6();
    defaultErrorHandler = /* @__PURE__ */ __name((signingProperties) => (error) => {
      throw error;
    }, "defaultErrorHandler");
    defaultSuccessHandler = /* @__PURE__ */ __name((httpResponse, signingProperties) => {
    }, "defaultSuccessHandler");
    httpSigningMiddleware = /* @__PURE__ */ __name((config) => (next, context) => async (args) => {
      if (!HttpRequest.isInstance(args.request)) {
        return next(args);
      }
      const smithyContext = getSmithyContext(context);
      const scheme = smithyContext.selectedHttpAuthScheme;
      if (!scheme) {
        throw new Error(`No HttpAuthScheme was selected: unable to sign request`);
      }
      const { httpAuthOption: { signingProperties = {} }, identity, signer } = scheme;
      const output = await next({
        ...args,
        request: await signer.sign(args.request, identity, signingProperties)
      }).catch((signer.errorHandler || defaultErrorHandler)(signingProperties));
      (signer.successHandler || defaultSuccessHandler)(output.response, signingProperties);
      return output;
    }, "httpSigningMiddleware");
  }
});

// node_modules/@smithy/core/dist-es/middleware-http-signing/getHttpSigningMiddleware.js
var httpSigningMiddlewareOptions, getHttpSigningPlugin;
var init_getHttpSigningMiddleware = __esm({
  "node_modules/@smithy/core/dist-es/middleware-http-signing/getHttpSigningMiddleware.js"() {
    init_httpSigningMiddleware();
    httpSigningMiddlewareOptions = {
      step: "finalizeRequest",
      tags: ["HTTP_SIGNING"],
      name: "httpSigningMiddleware",
      aliases: ["apiKeyMiddleware", "tokenMiddleware", "awsAuthMiddleware"],
      override: true,
      relation: "after",
      toMiddleware: "retryMiddleware"
    };
    getHttpSigningPlugin = /* @__PURE__ */ __name((config) => ({
      applyToStack: /* @__PURE__ */ __name((clientStack) => {
        clientStack.addRelativeTo(httpSigningMiddleware(config), httpSigningMiddlewareOptions);
      }, "applyToStack")
    }), "getHttpSigningPlugin");
  }
});

// node_modules/@smithy/core/dist-es/middleware-http-signing/index.js
var init_middleware_http_signing = __esm({
  "node_modules/@smithy/core/dist-es/middleware-http-signing/index.js"() {
    init_httpSigningMiddleware();
    init_getHttpSigningMiddleware();
  }
});

// node_modules/@smithy/core/dist-es/normalizeProvider.js
var normalizeProvider2;
var init_normalizeProvider2 = __esm({
  "node_modules/@smithy/core/dist-es/normalizeProvider.js"() {
    normalizeProvider2 = /* @__PURE__ */ __name((input) => {
      if (typeof input === "function")
        return input;
      const promisified = Promise.resolve(input);
      return () => promisified;
    }, "normalizeProvider");
  }
});

// node_modules/@smithy/is-array-buffer/dist-es/index.js
var isArrayBuffer;
var init_dist_es7 = __esm({
  "node_modules/@smithy/is-array-buffer/dist-es/index.js"() {
    isArrayBuffer = /* @__PURE__ */ __name((arg) => typeof ArrayBuffer === "function" && arg instanceof ArrayBuffer || Object.prototype.toString.call(arg) === "[object ArrayBuffer]", "isArrayBuffer");
  }
});

// node_modules/@smithy/util-buffer-from/dist-es/index.js
import { Buffer as Buffer2 } from "buffer";
var fromArrayBuffer, fromString;
var init_dist_es8 = __esm({
  "node_modules/@smithy/util-buffer-from/dist-es/index.js"() {
    init_dist_es7();
    fromArrayBuffer = /* @__PURE__ */ __name((input, offset = 0, length = input.byteLength - offset) => {
      if (!isArrayBuffer(input)) {
        throw new TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof input} (${input})`);
      }
      return Buffer2.from(input, offset, length);
    }, "fromArrayBuffer");
    fromString = /* @__PURE__ */ __name((input, encoding) => {
      if (typeof input !== "string") {
        throw new TypeError(`The "input" argument must be of type string. Received type ${typeof input} (${input})`);
      }
      return encoding ? Buffer2.from(input, encoding) : Buffer2.from(input);
    }, "fromString");
  }
});

// node_modules/@smithy/util-base64/dist-es/fromBase64.js
var BASE64_REGEX, fromBase64;
var init_fromBase64 = __esm({
  "node_modules/@smithy/util-base64/dist-es/fromBase64.js"() {
    init_dist_es8();
    BASE64_REGEX = /^[A-Za-z0-9+/]*={0,2}$/;
    fromBase64 = /* @__PURE__ */ __name((input) => {
      if (input.length * 3 % 4 !== 0) {
        throw new TypeError(`Incorrect padding on base64 string.`);
      }
      if (!BASE64_REGEX.exec(input)) {
        throw new TypeError(`Invalid base64 string.`);
      }
      const buffer = fromString(input, "base64");
      return new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
    }, "fromBase64");
  }
});

// node_modules/@smithy/util-utf8/dist-es/fromUtf8.js
var fromUtf8;
var init_fromUtf8 = __esm({
  "node_modules/@smithy/util-utf8/dist-es/fromUtf8.js"() {
    init_dist_es8();
    fromUtf8 = /* @__PURE__ */ __name((input) => {
      const buf = fromString(input, "utf8");
      return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    }, "fromUtf8");
  }
});

// node_modules/@smithy/util-utf8/dist-es/toUint8Array.js
var toUint8Array;
var init_toUint8Array = __esm({
  "node_modules/@smithy/util-utf8/dist-es/toUint8Array.js"() {
    init_fromUtf8();
    toUint8Array = /* @__PURE__ */ __name((data) => {
      if (typeof data === "string") {
        return fromUtf8(data);
      }
      if (ArrayBuffer.isView(data)) {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
      }
      return new Uint8Array(data);
    }, "toUint8Array");
  }
});

// node_modules/@smithy/util-utf8/dist-es/toUtf8.js
var toUtf8;
var init_toUtf8 = __esm({
  "node_modules/@smithy/util-utf8/dist-es/toUtf8.js"() {
    init_dist_es8();
    toUtf8 = /* @__PURE__ */ __name((input) => {
      if (typeof input === "string") {
        return input;
      }
      if (typeof input !== "object" || typeof input.byteOffset !== "number" || typeof input.byteLength !== "number") {
        throw new Error("@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.");
      }
      return fromArrayBuffer(input.buffer, input.byteOffset, input.byteLength).toString("utf8");
    }, "toUtf8");
  }
});

// node_modules/@smithy/util-utf8/dist-es/index.js
var init_dist_es9 = __esm({
  "node_modules/@smithy/util-utf8/dist-es/index.js"() {
    init_fromUtf8();
    init_toUint8Array();
    init_toUtf8();
  }
});

// node_modules/@smithy/util-base64/dist-es/toBase64.js
var toBase64;
var init_toBase64 = __esm({
  "node_modules/@smithy/util-base64/dist-es/toBase64.js"() {
    init_dist_es8();
    init_dist_es9();
    toBase64 = /* @__PURE__ */ __name((_input) => {
      let input;
      if (typeof _input === "string") {
        input = fromUtf8(_input);
      } else {
        input = _input;
      }
      if (typeof input !== "object" || typeof input.byteOffset !== "number" || typeof input.byteLength !== "number") {
        throw new Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");
      }
      return fromArrayBuffer(input.buffer, input.byteOffset, input.byteLength).toString("base64");
    }, "toBase64");
  }
});

// node_modules/@smithy/util-base64/dist-es/index.js
var init_dist_es10 = __esm({
  "node_modules/@smithy/util-base64/dist-es/index.js"() {
    init_fromBase64();
    init_toBase64();
  }
});

// node_modules/@smithy/util-stream/dist-es/blob/Uint8ArrayBlobAdapter.js
var Uint8ArrayBlobAdapter;
var init_Uint8ArrayBlobAdapter = __esm({
  "node_modules/@smithy/util-stream/dist-es/blob/Uint8ArrayBlobAdapter.js"() {
    init_dist_es10();
    init_dist_es9();
    Uint8ArrayBlobAdapter = class _Uint8ArrayBlobAdapter extends Uint8Array {
      static {
        __name(this, "Uint8ArrayBlobAdapter");
      }
      static fromString(source, encoding = "utf-8") {
        if (typeof source === "string") {
          if (encoding === "base64") {
            return _Uint8ArrayBlobAdapter.mutate(fromBase64(source));
          }
          return _Uint8ArrayBlobAdapter.mutate(fromUtf8(source));
        }
        throw new Error(`Unsupported conversion from ${typeof source} to Uint8ArrayBlobAdapter.`);
      }
      static mutate(source) {
        Object.setPrototypeOf(source, _Uint8ArrayBlobAdapter.prototype);
        return source;
      }
      transformToString(encoding = "utf-8") {
        if (encoding === "base64") {
          return toBase64(this);
        }
        return toUtf8(this);
      }
    };
  }
});

// node_modules/@smithy/util-stream/dist-es/checksum/ChecksumStream.js
var init_ChecksumStream = __esm({
  "node_modules/@smithy/util-stream/dist-es/checksum/ChecksumStream.js"() {
  }
});

// node_modules/@smithy/util-stream/dist-es/stream-type-check.js
var isReadableStream;
var init_stream_type_check = __esm({
  "node_modules/@smithy/util-stream/dist-es/stream-type-check.js"() {
    isReadableStream = /* @__PURE__ */ __name((stream) => typeof ReadableStream === "function" && (stream?.constructor?.name === ReadableStream.name || stream instanceof ReadableStream), "isReadableStream");
  }
});

// node_modules/@smithy/util-stream/dist-es/checksum/createChecksumStream.js
var init_createChecksumStream = __esm({
  "node_modules/@smithy/util-stream/dist-es/checksum/createChecksumStream.js"() {
  }
});

// node_modules/@smithy/util-stream/dist-es/createBufferedReadable.js
var init_createBufferedReadable = __esm({
  "node_modules/@smithy/util-stream/dist-es/createBufferedReadable.js"() {
  }
});

// node_modules/@smithy/util-stream/dist-es/getAwsChunkedEncodingStream.js
var init_getAwsChunkedEncodingStream = __esm({
  "node_modules/@smithy/util-stream/dist-es/getAwsChunkedEncodingStream.js"() {
  }
});

// node_modules/@smithy/util-stream/dist-es/headStream.js
var init_headStream = __esm({
  "node_modules/@smithy/util-stream/dist-es/headStream.js"() {
  }
});

// node_modules/@smithy/util-uri-escape/dist-es/escape-uri.js
var escapeUri, hexEncode;
var init_escape_uri = __esm({
  "node_modules/@smithy/util-uri-escape/dist-es/escape-uri.js"() {
    escapeUri = /* @__PURE__ */ __name((uri) => encodeURIComponent(uri).replace(/[!'()*]/g, hexEncode), "escapeUri");
    hexEncode = /* @__PURE__ */ __name((c6) => `%${c6.charCodeAt(0).toString(16).toUpperCase()}`, "hexEncode");
  }
});

// node_modules/@smithy/util-uri-escape/dist-es/escape-uri-path.js
var init_escape_uri_path = __esm({
  "node_modules/@smithy/util-uri-escape/dist-es/escape-uri-path.js"() {
  }
});

// node_modules/@smithy/util-uri-escape/dist-es/index.js
var init_dist_es11 = __esm({
  "node_modules/@smithy/util-uri-escape/dist-es/index.js"() {
    init_escape_uri();
    init_escape_uri_path();
  }
});

// node_modules/@smithy/querystring-builder/dist-es/index.js
function buildQueryString(query) {
  const parts = [];
  for (let key of Object.keys(query).sort()) {
    const value = query[key];
    key = escapeUri(key);
    if (Array.isArray(value)) {
      for (let i6 = 0, iLen = value.length; i6 < iLen; i6++) {
        parts.push(`${key}=${escapeUri(value[i6])}`);
      }
    } else {
      let qsEntry = key;
      if (value || typeof value === "string") {
        qsEntry += `=${escapeUri(value)}`;
      }
      parts.push(qsEntry);
    }
  }
  return parts.join("&");
}
var init_dist_es12 = __esm({
  "node_modules/@smithy/querystring-builder/dist-es/index.js"() {
    init_dist_es11();
    __name(buildQueryString, "buildQueryString");
  }
});

// node_modules/@smithy/node-http-handler/dist-es/build-abort-error.js
function buildAbortError(abortSignal) {
  const reason = abortSignal && typeof abortSignal === "object" && "reason" in abortSignal ? abortSignal.reason : void 0;
  if (reason) {
    if (reason instanceof Error) {
      const abortError3 = new Error("Request aborted");
      abortError3.name = "AbortError";
      abortError3.cause = reason;
      return abortError3;
    }
    const abortError2 = new Error(String(reason));
    abortError2.name = "AbortError";
    return abortError2;
  }
  const abortError = new Error("Request aborted");
  abortError.name = "AbortError";
  return abortError;
}
var init_build_abort_error = __esm({
  "node_modules/@smithy/node-http-handler/dist-es/build-abort-error.js"() {
    __name(buildAbortError, "buildAbortError");
  }
});

// node_modules/@smithy/node-http-handler/dist-es/constants.js
var NODEJS_TIMEOUT_ERROR_CODES;
var init_constants = __esm({
  "node_modules/@smithy/node-http-handler/dist-es/constants.js"() {
    NODEJS_TIMEOUT_ERROR_CODES = ["ECONNRESET", "EPIPE", "ETIMEDOUT"];
  }
});

// node_modules/@smithy/node-http-handler/dist-es/get-transformed-headers.js
var getTransformedHeaders;
var init_get_transformed_headers = __esm({
  "node_modules/@smithy/node-http-handler/dist-es/get-transformed-headers.js"() {
    getTransformedHeaders = /* @__PURE__ */ __name((headers) => {
      const transformedHeaders = {};
      for (const name of Object.keys(headers)) {
        const headerValues = headers[name];
        transformedHeaders[name] = Array.isArray(headerValues) ? headerValues.join(",") : headerValues;
      }
      return transformedHeaders;
    }, "getTransformedHeaders");
  }
});

// node_modules/@smithy/node-http-handler/dist-es/timing.js
var timing;
var init_timing = __esm({
  "node_modules/@smithy/node-http-handler/dist-es/timing.js"() {
    timing = {
      setTimeout: /* @__PURE__ */ __name((cb, ms) => setTimeout(cb, ms), "setTimeout"),
      clearTimeout: /* @__PURE__ */ __name((timeoutId) => clearTimeout(timeoutId), "clearTimeout")
    };
  }
});

// node_modules/@smithy/node-http-handler/dist-es/set-connection-timeout.js
var DEFER_EVENT_LISTENER_TIME, setConnectionTimeout;
var init_set_connection_timeout = __esm({
  "node_modules/@smithy/node-http-handler/dist-es/set-connection-timeout.js"() {
    init_timing();
    DEFER_EVENT_LISTENER_TIME = 1e3;
    setConnectionTimeout = /* @__PURE__ */ __name((request2, reject, timeoutInMs = 0) => {
      if (!timeoutInMs) {
        return -1;
      }
      const registerTimeout = /* @__PURE__ */ __name((offset) => {
        const timeoutId = timing.setTimeout(() => {
          request2.destroy();
          reject(Object.assign(new Error(`@smithy/node-http-handler - the request socket did not establish a connection with the server within the configured timeout of ${timeoutInMs} ms.`), {
            name: "TimeoutError"
          }));
        }, timeoutInMs - offset);
        const doWithSocket = /* @__PURE__ */ __name((socket) => {
          if (socket?.connecting) {
            socket.on("connect", () => {
              timing.clearTimeout(timeoutId);
            });
          } else {
            timing.clearTimeout(timeoutId);
          }
        }, "doWithSocket");
        if (request2.socket) {
          doWithSocket(request2.socket);
        } else {
          request2.on("socket", doWithSocket);
        }
      }, "registerTimeout");
      if (timeoutInMs < 2e3) {
        registerTimeout(0);
        return 0;
      }
      return timing.setTimeout(registerTimeout.bind(null, DEFER_EVENT_LISTENER_TIME), DEFER_EVENT_LISTENER_TIME);
    }, "setConnectionTimeout");
  }
});

// node_modules/@smithy/node-http-handler/dist-es/set-request-timeout.js
var setRequestTimeout;
var init_set_request_timeout = __esm({
  "node_modules/@smithy/node-http-handler/dist-es/set-request-timeout.js"() {
    init_timing();
    setRequestTimeout = /* @__PURE__ */ __name((req, reject, timeoutInMs = 0, throwOnRequestTimeout, logger2) => {
      if (timeoutInMs) {
        return timing.setTimeout(() => {
          let msg = `@smithy/node-http-handler - [${throwOnRequestTimeout ? "ERROR" : "WARN"}] a request has exceeded the configured ${timeoutInMs} ms requestTimeout.`;
          if (throwOnRequestTimeout) {
            const error = Object.assign(new Error(msg), {
              name: "TimeoutError",
              code: "ETIMEDOUT"
            });
            req.destroy(error);
            reject(error);
          } else {
            msg += ` Init client requestHandler with throwOnRequestTimeout=true to turn this into an error.`;
            logger2?.warn?.(msg);
          }
        }, timeoutInMs);
      }
      return -1;
    }, "setRequestTimeout");
  }
});

// node_modules/@smithy/node-http-handler/dist-es/set-socket-keep-alive.js
var DEFER_EVENT_LISTENER_TIME2, setSocketKeepAlive;
var init_set_socket_keep_alive = __esm({
  "node_modules/@smithy/node-http-handler/dist-es/set-socket-keep-alive.js"() {
    init_timing();
    DEFER_EVENT_LISTENER_TIME2 = 3e3;
    setSocketKeepAlive = /* @__PURE__ */ __name((request2, { keepAlive, keepAliveMsecs }, deferTimeMs = DEFER_EVENT_LISTENER_TIME2) => {
      if (keepAlive !== true) {
        return -1;
      }
      const registerListener = /* @__PURE__ */ __name(() => {
        if (request2.socket) {
          request2.socket.setKeepAlive(keepAlive, keepAliveMsecs || 0);
        } else {
          request2.on("socket", (socket) => {
            socket.setKeepAlive(keepAlive, keepAliveMsecs || 0);
          });
        }
      }, "registerListener");
      if (deferTimeMs === 0) {
        registerListener();
        return 0;
      }
      return timing.setTimeout(registerListener, deferTimeMs);
    }, "setSocketKeepAlive");
  }
});

// node_modules/@smithy/node-http-handler/dist-es/set-socket-timeout.js
var DEFER_EVENT_LISTENER_TIME3, setSocketTimeout;
var init_set_socket_timeout = __esm({
  "node_modules/@smithy/node-http-handler/dist-es/set-socket-timeout.js"() {
    init_timing();
    DEFER_EVENT_LISTENER_TIME3 = 3e3;
    setSocketTimeout = /* @__PURE__ */ __name((request2, reject, timeoutInMs = 0) => {
      const registerTimeout = /* @__PURE__ */ __name((offset) => {
        const timeout = timeoutInMs - offset;
        const onTimeout = /* @__PURE__ */ __name(() => {
          request2.destroy();
          reject(Object.assign(new Error(`@smithy/node-http-handler - the request socket timed out after ${timeoutInMs} ms of inactivity (configured by client requestHandler).`), { name: "TimeoutError" }));
        }, "onTimeout");
        if (request2.socket) {
          request2.socket.setTimeout(timeout, onTimeout);
          request2.on("close", () => request2.socket?.removeListener("timeout", onTimeout));
        } else {
          request2.setTimeout(timeout, onTimeout);
        }
      }, "registerTimeout");
      if (0 < timeoutInMs && timeoutInMs < 6e3) {
        registerTimeout(0);
        return 0;
      }
      return timing.setTimeout(registerTimeout.bind(null, timeoutInMs === 0 ? 0 : DEFER_EVENT_LISTENER_TIME3), DEFER_EVENT_LISTENER_TIME3);
    }, "setSocketTimeout");
  }
});

// node_modules/@smithy/node-http-handler/dist-es/write-request-body.js
import { Readable } from "node:stream";
async function writeRequestBody(httpRequest2, request2, maxContinueTimeoutMs = MIN_WAIT_TIME, externalAgent = false) {
  const headers = request2.headers ?? {};
  const expect = headers.Expect || headers.expect;
  let timeoutId = -1;
  let sendBody = true;
  if (!externalAgent && expect === "100-continue") {
    sendBody = await Promise.race([
      new Promise((resolve) => {
        timeoutId = Number(timing.setTimeout(() => resolve(true), Math.max(MIN_WAIT_TIME, maxContinueTimeoutMs)));
      }),
      new Promise((resolve) => {
        httpRequest2.on("continue", () => {
          timing.clearTimeout(timeoutId);
          resolve(true);
        });
        httpRequest2.on("response", () => {
          timing.clearTimeout(timeoutId);
          resolve(false);
        });
        httpRequest2.on("error", () => {
          timing.clearTimeout(timeoutId);
          resolve(false);
        });
      })
    ]);
  }
  if (sendBody) {
    writeBody(httpRequest2, request2.body);
  }
}
function writeBody(httpRequest2, body) {
  if (body instanceof Readable) {
    body.pipe(httpRequest2);
    return;
  }
  if (body) {
    const isBuffer = Buffer.isBuffer(body);
    const isString = typeof body === "string";
    if (isBuffer || isString) {
      if (isBuffer && body.byteLength === 0) {
        httpRequest2.end();
      } else {
        httpRequest2.end(body);
      }
      return;
    }
    const uint8 = body;
    if (typeof uint8 === "object" && uint8.buffer && typeof uint8.byteOffset === "number" && typeof uint8.byteLength === "number") {
      httpRequest2.end(Buffer.from(uint8.buffer, uint8.byteOffset, uint8.byteLength));
      return;
    }
    httpRequest2.end(Buffer.from(body));
    return;
  }
  httpRequest2.end();
}
var MIN_WAIT_TIME;
var init_write_request_body = __esm({
  "node_modules/@smithy/node-http-handler/dist-es/write-request-body.js"() {
    init_timing();
    MIN_WAIT_TIME = 6e3;
    __name(writeRequestBody, "writeRequestBody");
    __name(writeBody, "writeBody");
  }
});

// node_modules/@smithy/node-http-handler/dist-es/node-http-handler.js
import { Agent as hsAgent, request as hsRequest } from "node:https";
var hAgent, hRequest, NodeHttpHandler;
var init_node_http_handler = __esm({
  "node_modules/@smithy/node-http-handler/dist-es/node-http-handler.js"() {
    init_dist_es2();
    init_dist_es12();
    init_build_abort_error();
    init_constants();
    init_get_transformed_headers();
    init_set_connection_timeout();
    init_set_request_timeout();
    init_set_socket_keep_alive();
    init_set_socket_timeout();
    init_timing();
    init_write_request_body();
    hAgent = void 0;
    hRequest = void 0;
    NodeHttpHandler = class _NodeHttpHandler {
      static {
        __name(this, "NodeHttpHandler");
      }
      config;
      configProvider;
      socketWarningTimestamp = 0;
      externalAgent = false;
      metadata = { handlerProtocol: "http/1.1" };
      static create(instanceOrOptions) {
        if (typeof instanceOrOptions?.handle === "function") {
          return instanceOrOptions;
        }
        return new _NodeHttpHandler(instanceOrOptions);
      }
      static checkSocketUsage(agent, socketWarningTimestamp, logger2 = console) {
        const { sockets, requests, maxSockets } = agent;
        if (typeof maxSockets !== "number" || maxSockets === Infinity) {
          return socketWarningTimestamp;
        }
        const interval = 15e3;
        if (Date.now() - interval < socketWarningTimestamp) {
          return socketWarningTimestamp;
        }
        if (sockets && requests) {
          for (const origin in sockets) {
            const socketsInUse = sockets[origin]?.length ?? 0;
            const requestsEnqueued = requests[origin]?.length ?? 0;
            if (socketsInUse >= maxSockets && requestsEnqueued >= 2 * maxSockets) {
              logger2?.warn?.(`@smithy/node-http-handler:WARN - socket usage at capacity=${socketsInUse} and ${requestsEnqueued} additional requests are enqueued.
See https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/node-configuring-maxsockets.html
or increase socketAcquisitionWarningTimeout=(millis) in the NodeHttpHandler config.`);
              return Date.now();
            }
          }
        }
        return socketWarningTimestamp;
      }
      constructor(options) {
        this.configProvider = new Promise((resolve, reject) => {
          if (typeof options === "function") {
            options().then((_options) => {
              resolve(this.resolveDefaultConfig(_options));
            }).catch(reject);
          } else {
            resolve(this.resolveDefaultConfig(options));
          }
        });
      }
      destroy() {
        this.config?.httpAgent?.destroy();
        this.config?.httpsAgent?.destroy();
      }
      async handle(request2, { abortSignal, requestTimeout } = {}) {
        if (!this.config) {
          this.config = await this.configProvider;
        }
        const config = this.config;
        const isSSL = request2.protocol === "https:";
        if (!isSSL && !this.config.httpAgent) {
          this.config.httpAgent = await this.config.httpAgentProvider();
        }
        return new Promise((_resolve, _reject) => {
          let writeRequestBodyPromise = void 0;
          const timeouts = [];
          const resolve = /* @__PURE__ */ __name(async (arg) => {
            await writeRequestBodyPromise;
            timeouts.forEach(timing.clearTimeout);
            _resolve(arg);
          }, "resolve");
          const reject = /* @__PURE__ */ __name(async (arg) => {
            await writeRequestBodyPromise;
            timeouts.forEach(timing.clearTimeout);
            _reject(arg);
          }, "reject");
          if (abortSignal?.aborted) {
            const abortError = buildAbortError(abortSignal);
            reject(abortError);
            return;
          }
          const headers = request2.headers ?? {};
          const expectContinue = (headers.Expect ?? headers.expect) === "100-continue";
          let agent = isSSL ? config.httpsAgent : config.httpAgent;
          if (expectContinue && !this.externalAgent) {
            agent = new (isSSL ? hsAgent : hAgent)({
              keepAlive: false,
              maxSockets: Infinity
            });
          }
          timeouts.push(timing.setTimeout(() => {
            this.socketWarningTimestamp = _NodeHttpHandler.checkSocketUsage(agent, this.socketWarningTimestamp, config.logger);
          }, config.socketAcquisitionWarningTimeout ?? (config.requestTimeout ?? 2e3) + (config.connectionTimeout ?? 1e3)));
          const queryString = buildQueryString(request2.query || {});
          let auth = void 0;
          if (request2.username != null || request2.password != null) {
            const username = request2.username ?? "";
            const password = request2.password ?? "";
            auth = `${username}:${password}`;
          }
          let path = request2.path;
          if (queryString) {
            path += `?${queryString}`;
          }
          if (request2.fragment) {
            path += `#${request2.fragment}`;
          }
          let hostname = request2.hostname ?? "";
          if (hostname[0] === "[" && hostname.endsWith("]")) {
            hostname = request2.hostname.slice(1, -1);
          } else {
            hostname = request2.hostname;
          }
          const nodeHttpsOptions = {
            headers: request2.headers,
            host: hostname,
            method: request2.method,
            path,
            port: request2.port,
            agent,
            auth
          };
          const requestFunc = isSSL ? hsRequest : hRequest;
          const req = requestFunc(nodeHttpsOptions, (res) => {
            const httpResponse = new HttpResponse({
              statusCode: res.statusCode || -1,
              reason: res.statusMessage,
              headers: getTransformedHeaders(res.headers),
              body: res
            });
            resolve({ response: httpResponse });
          });
          req.on("error", (err) => {
            if (NODEJS_TIMEOUT_ERROR_CODES.includes(err.code)) {
              reject(Object.assign(err, { name: "TimeoutError" }));
            } else {
              reject(err);
            }
          });
          if (abortSignal) {
            const onAbort = /* @__PURE__ */ __name(() => {
              req.destroy();
              const abortError = buildAbortError(abortSignal);
              reject(abortError);
            }, "onAbort");
            if (typeof abortSignal.addEventListener === "function") {
              const signal = abortSignal;
              signal.addEventListener("abort", onAbort, { once: true });
              req.once("close", () => signal.removeEventListener("abort", onAbort));
            } else {
              abortSignal.onabort = onAbort;
            }
          }
          const effectiveRequestTimeout = requestTimeout ?? config.requestTimeout;
          timeouts.push(setConnectionTimeout(req, reject, config.connectionTimeout));
          timeouts.push(setRequestTimeout(req, reject, effectiveRequestTimeout, config.throwOnRequestTimeout, config.logger ?? console));
          timeouts.push(setSocketTimeout(req, reject, config.socketTimeout));
          const httpAgent = nodeHttpsOptions.agent;
          if (typeof httpAgent === "object" && "keepAlive" in httpAgent) {
            timeouts.push(setSocketKeepAlive(req, {
              keepAlive: httpAgent.keepAlive,
              keepAliveMsecs: httpAgent.keepAliveMsecs
            }));
          }
          writeRequestBodyPromise = writeRequestBody(req, request2, effectiveRequestTimeout, this.externalAgent).catch((e6) => {
            timeouts.forEach(timing.clearTimeout);
            return _reject(e6);
          });
        });
      }
      updateHttpClientConfig(key, value) {
        this.config = void 0;
        this.configProvider = this.configProvider.then((config) => {
          return {
            ...config,
            [key]: value
          };
        });
      }
      httpHandlerConfigs() {
        return this.config ?? {};
      }
      resolveDefaultConfig(options) {
        const { requestTimeout, connectionTimeout, socketTimeout, socketAcquisitionWarningTimeout, httpAgent, httpsAgent, throwOnRequestTimeout, logger: logger2 } = options || {};
        const keepAlive = true;
        const maxSockets = 50;
        return {
          connectionTimeout,
          requestTimeout,
          socketTimeout,
          socketAcquisitionWarningTimeout,
          throwOnRequestTimeout,
          httpAgentProvider: /* @__PURE__ */ __name(async () => {
            const { Agent, request: request2 } = await import("node:http");
            hRequest = request2;
            hAgent = Agent;
            if (httpAgent instanceof hAgent || typeof httpAgent?.destroy === "function") {
              this.externalAgent = true;
              return httpAgent;
            }
            return new hAgent({ keepAlive, maxSockets, ...httpAgent });
          }, "httpAgentProvider"),
          httpsAgent: (() => {
            if (httpsAgent instanceof hsAgent || typeof httpsAgent?.destroy === "function") {
              this.externalAgent = true;
              return httpsAgent;
            }
            return new hsAgent({ keepAlive, maxSockets, ...httpsAgent });
          })(),
          logger: logger2
        };
      }
    };
  }
});

// node_modules/@smithy/node-http-handler/dist-es/node-http2-handler.js
var init_node_http2_handler = __esm({
  "node_modules/@smithy/node-http-handler/dist-es/node-http2-handler.js"() {
  }
});

// node_modules/@smithy/node-http-handler/dist-es/stream-collector/collector.js
import { Writable } from "node:stream";
var Collector;
var init_collector = __esm({
  "node_modules/@smithy/node-http-handler/dist-es/stream-collector/collector.js"() {
    Collector = class extends Writable {
      static {
        __name(this, "Collector");
      }
      bufferedBytes = [];
      _write(chunk, encoding, callback) {
        this.bufferedBytes.push(chunk);
        callback();
      }
    };
  }
});

// node_modules/@smithy/node-http-handler/dist-es/stream-collector/index.js
async function collectReadableStream(stream) {
  const chunks = [];
  const reader = stream.getReader();
  let isDone = false;
  let length = 0;
  while (!isDone) {
    const { done, value } = await reader.read();
    if (value) {
      chunks.push(value);
      length += value.length;
    }
    isDone = done;
  }
  const collected = new Uint8Array(length);
  let offset = 0;
  for (const chunk of chunks) {
    collected.set(chunk, offset);
    offset += chunk.length;
  }
  return collected;
}
var streamCollector, isReadableStreamInstance;
var init_stream_collector = __esm({
  "node_modules/@smithy/node-http-handler/dist-es/stream-collector/index.js"() {
    init_collector();
    streamCollector = /* @__PURE__ */ __name((stream) => {
      if (isReadableStreamInstance(stream)) {
        return collectReadableStream(stream);
      }
      return new Promise((resolve, reject) => {
        const collector = new Collector();
        stream.pipe(collector);
        stream.on("error", (err) => {
          collector.end();
          reject(err);
        });
        collector.on("error", reject);
        collector.on("finish", function() {
          const bytes = new Uint8Array(Buffer.concat(this.bufferedBytes));
          resolve(bytes);
        });
      });
    }, "streamCollector");
    isReadableStreamInstance = /* @__PURE__ */ __name((stream) => typeof ReadableStream === "function" && stream instanceof ReadableStream, "isReadableStreamInstance");
    __name(collectReadableStream, "collectReadableStream");
  }
});

// node_modules/@smithy/node-http-handler/dist-es/index.js
var init_dist_es13 = __esm({
  "node_modules/@smithy/node-http-handler/dist-es/index.js"() {
    init_node_http_handler();
    init_node_http2_handler();
    init_stream_collector();
  }
});

// node_modules/@smithy/fetch-http-handler/dist-es/fetch-http-handler.js
var init_fetch_http_handler = __esm({
  "node_modules/@smithy/fetch-http-handler/dist-es/fetch-http-handler.js"() {
  }
});

// node_modules/@smithy/fetch-http-handler/dist-es/stream-collector.js
async function collectBlob(blob) {
  const base64 = await readToBase64(blob);
  const arrayBuffer = fromBase64(base64);
  return new Uint8Array(arrayBuffer);
}
async function collectStream(stream) {
  const chunks = [];
  const reader = stream.getReader();
  let isDone = false;
  let length = 0;
  while (!isDone) {
    const { done, value } = await reader.read();
    if (value) {
      chunks.push(value);
      length += value.length;
    }
    isDone = done;
  }
  const collected = new Uint8Array(length);
  let offset = 0;
  for (const chunk of chunks) {
    collected.set(chunk, offset);
    offset += chunk.length;
  }
  return collected;
}
function readToBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (reader.readyState !== 2) {
        return reject(new Error("Reader aborted too early"));
      }
      const result = reader.result ?? "";
      const commaIndex = result.indexOf(",");
      const dataOffset = commaIndex > -1 ? commaIndex + 1 : result.length;
      resolve(result.substring(dataOffset));
    };
    reader.onabort = () => reject(new Error("Read aborted"));
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(blob);
  });
}
var streamCollector2;
var init_stream_collector2 = __esm({
  "node_modules/@smithy/fetch-http-handler/dist-es/stream-collector.js"() {
    init_dist_es10();
    streamCollector2 = /* @__PURE__ */ __name(async (stream) => {
      if (typeof Blob === "function" && stream instanceof Blob || stream.constructor?.name === "Blob") {
        if (Blob.prototype.arrayBuffer !== void 0) {
          return new Uint8Array(await stream.arrayBuffer());
        }
        return collectBlob(stream);
      }
      return collectStream(stream);
    }, "streamCollector");
    __name(collectBlob, "collectBlob");
    __name(collectStream, "collectStream");
    __name(readToBase64, "readToBase64");
  }
});

// node_modules/@smithy/fetch-http-handler/dist-es/index.js
var init_dist_es14 = __esm({
  "node_modules/@smithy/fetch-http-handler/dist-es/index.js"() {
    init_fetch_http_handler();
    init_stream_collector2();
  }
});

// node_modules/@smithy/util-hex-encoding/dist-es/index.js
function fromHex(encoded) {
  if (encoded.length % 2 !== 0) {
    throw new Error("Hex encoded strings must have an even number length");
  }
  const out = new Uint8Array(encoded.length / 2);
  for (let i6 = 0; i6 < encoded.length; i6 += 2) {
    const encodedByte = encoded.slice(i6, i6 + 2).toLowerCase();
    if (encodedByte in HEX_TO_SHORT) {
      out[i6 / 2] = HEX_TO_SHORT[encodedByte];
    } else {
      throw new Error(`Cannot decode unrecognized sequence ${encodedByte} as hexadecimal`);
    }
  }
  return out;
}
function toHex(bytes) {
  let out = "";
  for (let i6 = 0; i6 < bytes.byteLength; i6++) {
    out += SHORT_TO_HEX[bytes[i6]];
  }
  return out;
}
var SHORT_TO_HEX, HEX_TO_SHORT;
var init_dist_es15 = __esm({
  "node_modules/@smithy/util-hex-encoding/dist-es/index.js"() {
    SHORT_TO_HEX = {};
    HEX_TO_SHORT = {};
    for (let i6 = 0; i6 < 256; i6++) {
      let encodedByte = i6.toString(16).toLowerCase();
      if (encodedByte.length === 1) {
        encodedByte = `0${encodedByte}`;
      }
      SHORT_TO_HEX[i6] = encodedByte;
      HEX_TO_SHORT[encodedByte] = i6;
    }
    __name(fromHex, "fromHex");
    __name(toHex, "toHex");
  }
});

// node_modules/@smithy/util-stream/dist-es/sdk-stream-mixin.browser.js
var ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED, sdkStreamMixin, isBlobInstance;
var init_sdk_stream_mixin_browser = __esm({
  "node_modules/@smithy/util-stream/dist-es/sdk-stream-mixin.browser.js"() {
    init_dist_es14();
    init_dist_es10();
    init_dist_es15();
    init_dist_es9();
    init_stream_type_check();
    ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED = "The stream has already been transformed.";
    sdkStreamMixin = /* @__PURE__ */ __name((stream) => {
      if (!isBlobInstance(stream) && !isReadableStream(stream)) {
        const name = stream?.__proto__?.constructor?.name || stream;
        throw new Error(`Unexpected stream implementation, expect Blob or ReadableStream, got ${name}`);
      }
      let transformed = false;
      const transformToByteArray = /* @__PURE__ */ __name(async () => {
        if (transformed) {
          throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED);
        }
        transformed = true;
        return await streamCollector2(stream);
      }, "transformToByteArray");
      const blobToWebStream = /* @__PURE__ */ __name((blob) => {
        if (typeof blob.stream !== "function") {
          throw new Error("Cannot transform payload Blob to web stream. Please make sure the Blob.stream() is polyfilled.\nIf you are using React Native, this API is not yet supported, see: https://react-native.canny.io/feature-requests/p/fetch-streaming-body");
        }
        return blob.stream();
      }, "blobToWebStream");
      return Object.assign(stream, {
        transformToByteArray,
        transformToString: /* @__PURE__ */ __name(async (encoding) => {
          const buf = await transformToByteArray();
          if (encoding === "base64") {
            return toBase64(buf);
          } else if (encoding === "hex") {
            return toHex(buf);
          } else if (encoding === void 0 || encoding === "utf8" || encoding === "utf-8") {
            return toUtf8(buf);
          } else if (typeof TextDecoder === "function") {
            return new TextDecoder(encoding).decode(buf);
          } else {
            throw new Error("TextDecoder is not available, please make sure polyfill is provided.");
          }
        }, "transformToString"),
        transformToWebStream: /* @__PURE__ */ __name(() => {
          if (transformed) {
            throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED);
          }
          transformed = true;
          if (isBlobInstance(stream)) {
            return blobToWebStream(stream);
          } else if (isReadableStream(stream)) {
            return stream;
          } else {
            throw new Error(`Cannot transform payload to web stream, got ${stream}`);
          }
        }, "transformToWebStream")
      });
    }, "sdkStreamMixin");
    isBlobInstance = /* @__PURE__ */ __name((stream) => typeof Blob === "function" && stream instanceof Blob, "isBlobInstance");
  }
});

// node_modules/@smithy/util-stream/dist-es/sdk-stream-mixin.js
import { Readable as Readable2 } from "stream";
var ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED2, sdkStreamMixin2;
var init_sdk_stream_mixin = __esm({
  "node_modules/@smithy/util-stream/dist-es/sdk-stream-mixin.js"() {
    init_dist_es13();
    init_dist_es8();
    init_sdk_stream_mixin_browser();
    ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED2 = "The stream has already been transformed.";
    sdkStreamMixin2 = /* @__PURE__ */ __name((stream) => {
      if (!(stream instanceof Readable2)) {
        try {
          return sdkStreamMixin(stream);
        } catch (e6) {
          const name = stream?.__proto__?.constructor?.name || stream;
          throw new Error(`Unexpected stream implementation, expect Stream.Readable instance, got ${name}`);
        }
      }
      let transformed = false;
      const transformToByteArray = /* @__PURE__ */ __name(async () => {
        if (transformed) {
          throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED2);
        }
        transformed = true;
        return await streamCollector(stream);
      }, "transformToByteArray");
      return Object.assign(stream, {
        transformToByteArray,
        transformToString: /* @__PURE__ */ __name(async (encoding) => {
          const buf = await transformToByteArray();
          if (encoding === void 0 || Buffer.isEncoding(encoding)) {
            return fromArrayBuffer(buf.buffer, buf.byteOffset, buf.byteLength).toString(encoding);
          } else {
            const decoder = new TextDecoder(encoding);
            return decoder.decode(buf);
          }
        }, "transformToString"),
        transformToWebStream: /* @__PURE__ */ __name(() => {
          if (transformed) {
            throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED2);
          }
          if (stream.readableFlowing !== null) {
            throw new Error("The stream has been consumed by other callbacks.");
          }
          if (typeof Readable2.toWeb !== "function") {
            throw new Error("Readable.toWeb() is not supported. Please ensure a polyfill is available.");
          }
          transformed = true;
          return Readable2.toWeb(stream);
        }, "transformToWebStream")
      });
    }, "sdkStreamMixin");
  }
});

// node_modules/@smithy/util-stream/dist-es/splitStream.js
var init_splitStream = __esm({
  "node_modules/@smithy/util-stream/dist-es/splitStream.js"() {
  }
});

// node_modules/@smithy/util-stream/dist-es/index.js
var init_dist_es16 = __esm({
  "node_modules/@smithy/util-stream/dist-es/index.js"() {
    init_Uint8ArrayBlobAdapter();
    init_ChecksumStream();
    init_createChecksumStream();
    init_createBufferedReadable();
    init_getAwsChunkedEncodingStream();
    init_headStream();
    init_sdk_stream_mixin();
    init_splitStream();
  }
});

// node_modules/@smithy/core/dist-es/submodules/protocols/collect-stream-body.js
var collectBody;
var init_collect_stream_body = __esm({
  "node_modules/@smithy/core/dist-es/submodules/protocols/collect-stream-body.js"() {
    init_dist_es16();
    collectBody = /* @__PURE__ */ __name(async (streamBody = new Uint8Array(), context) => {
      if (streamBody instanceof Uint8Array) {
        return Uint8ArrayBlobAdapter.mutate(streamBody);
      }
      if (!streamBody) {
        return Uint8ArrayBlobAdapter.mutate(new Uint8Array());
      }
      const fromContext = context.streamCollector(streamBody);
      return Uint8ArrayBlobAdapter.mutate(await fromContext);
    }, "collectBody");
  }
});

// node_modules/@smithy/core/dist-es/submodules/protocols/extended-encode-uri-component.js
function extendedEncodeURIComponent(str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function(c6) {
    return "%" + c6.charCodeAt(0).toString(16).toUpperCase();
  });
}
var init_extended_encode_uri_component = __esm({
  "node_modules/@smithy/core/dist-es/submodules/protocols/extended-encode-uri-component.js"() {
    __name(extendedEncodeURIComponent, "extendedEncodeURIComponent");
  }
});

// node_modules/@smithy/core/dist-es/submodules/schema/deref.js
var deref;
var init_deref = __esm({
  "node_modules/@smithy/core/dist-es/submodules/schema/deref.js"() {
    deref = /* @__PURE__ */ __name((schemaRef) => {
      if (typeof schemaRef === "function") {
        return schemaRef();
      }
      return schemaRef;
    }, "deref");
  }
});

// node_modules/@smithy/core/dist-es/submodules/schema/schemas/operation.js
var operation;
var init_operation = __esm({
  "node_modules/@smithy/core/dist-es/submodules/schema/schemas/operation.js"() {
    operation = /* @__PURE__ */ __name((namespace, name, traits, input, output) => ({
      name,
      namespace,
      traits,
      input,
      output
    }), "operation");
  }
});

// node_modules/@smithy/core/dist-es/submodules/schema/middleware/schemaDeserializationMiddleware.js
var schemaDeserializationMiddleware, findHeader;
var init_schemaDeserializationMiddleware = __esm({
  "node_modules/@smithy/core/dist-es/submodules/schema/middleware/schemaDeserializationMiddleware.js"() {
    init_dist_es2();
    init_dist_es6();
    init_operation();
    schemaDeserializationMiddleware = /* @__PURE__ */ __name((config) => (next, context) => async (args) => {
      const { response } = await next(args);
      const { operationSchema } = getSmithyContext(context);
      const [, ns, n2, t, i6, o2] = operationSchema ?? [];
      try {
        const parsed = await config.protocol.deserializeResponse(operation(ns, n2, t, i6, o2), {
          ...config,
          ...context
        }, response);
        return {
          response,
          output: parsed
        };
      } catch (error) {
        Object.defineProperty(error, "$response", {
          value: response,
          enumerable: false,
          writable: false,
          configurable: false
        });
        if (!("$metadata" in error)) {
          const hint = `Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.`;
          try {
            error.message += "\n  " + hint;
          } catch (e6) {
            if (!context.logger || context.logger?.constructor?.name === "NoOpLogger") {
              console.warn(hint);
            } else {
              context.logger?.warn?.(hint);
            }
          }
          if (typeof error.$responseBodyText !== "undefined") {
            if (error.$response) {
              error.$response.body = error.$responseBodyText;
            }
          }
          try {
            if (HttpResponse.isInstance(response)) {
              const { headers = {} } = response;
              const headerEntries = Object.entries(headers);
              error.$metadata = {
                httpStatusCode: response.statusCode,
                requestId: findHeader(/^x-[\w-]+-request-?id$/, headerEntries),
                extendedRequestId: findHeader(/^x-[\w-]+-id-2$/, headerEntries),
                cfId: findHeader(/^x-[\w-]+-cf-id$/, headerEntries)
              };
            }
          } catch (e6) {
          }
        }
        throw error;
      }
    }, "schemaDeserializationMiddleware");
    findHeader = /* @__PURE__ */ __name((pattern, headers) => {
      return (headers.find(([k6]) => {
        return k6.match(pattern);
      }) || [void 0, void 0])[1];
    }, "findHeader");
  }
});

// node_modules/@smithy/querystring-parser/dist-es/index.js
function parseQueryString(querystring) {
  const query = {};
  querystring = querystring.replace(/^\?/, "");
  if (querystring) {
    for (const pair of querystring.split("&")) {
      let [key, value = null] = pair.split("=");
      key = decodeURIComponent(key);
      if (value) {
        value = decodeURIComponent(value);
      }
      if (!(key in query)) {
        query[key] = value;
      } else if (Array.isArray(query[key])) {
        query[key].push(value);
      } else {
        query[key] = [query[key], value];
      }
    }
  }
  return query;
}
var init_dist_es17 = __esm({
  "node_modules/@smithy/querystring-parser/dist-es/index.js"() {
    __name(parseQueryString, "parseQueryString");
  }
});

// node_modules/@smithy/url-parser/dist-es/index.js
var parseUrl;
var init_dist_es18 = __esm({
  "node_modules/@smithy/url-parser/dist-es/index.js"() {
    init_dist_es17();
    parseUrl = /* @__PURE__ */ __name((url) => {
      if (typeof url === "string") {
        return parseUrl(new URL(url));
      }
      const { hostname, pathname, port, protocol, search } = url;
      let query;
      if (search) {
        query = parseQueryString(search);
      }
      return {
        hostname,
        port: port ? parseInt(port) : void 0,
        protocol,
        path: pathname,
        query
      };
    }, "parseUrl");
  }
});

// node_modules/@smithy/core/dist-es/submodules/endpoints/toEndpointV1.js
var toEndpointV1;
var init_toEndpointV1 = __esm({
  "node_modules/@smithy/core/dist-es/submodules/endpoints/toEndpointV1.js"() {
    init_dist_es18();
    toEndpointV1 = /* @__PURE__ */ __name((endpoint) => {
      if (typeof endpoint === "object") {
        if ("url" in endpoint) {
          const v1Endpoint = parseUrl(endpoint.url);
          if (endpoint.headers) {
            v1Endpoint.headers = {};
            for (const name in endpoint.headers) {
              v1Endpoint.headers[name.toLowerCase()] = endpoint.headers[name].join(", ");
            }
          }
          return v1Endpoint;
        }
        return endpoint;
      }
      return parseUrl(endpoint);
    }, "toEndpointV1");
  }
});

// node_modules/@smithy/core/dist-es/submodules/endpoints/index.js
var init_endpoints2 = __esm({
  "node_modules/@smithy/core/dist-es/submodules/endpoints/index.js"() {
    init_toEndpointV1();
  }
});

// node_modules/@smithy/core/dist-es/submodules/schema/middleware/schemaSerializationMiddleware.js
var schemaSerializationMiddleware;
var init_schemaSerializationMiddleware = __esm({
  "node_modules/@smithy/core/dist-es/submodules/schema/middleware/schemaSerializationMiddleware.js"() {
    init_endpoints2();
    init_dist_es6();
    init_operation();
    schemaSerializationMiddleware = /* @__PURE__ */ __name((config) => (next, context) => async (args) => {
      const { operationSchema } = getSmithyContext(context);
      const [, ns, n2, t, i6, o2] = operationSchema ?? [];
      const endpoint = context.endpointV2 ? async () => toEndpointV1(context.endpointV2) : config.endpoint;
      const request2 = await config.protocol.serializeRequest(operation(ns, n2, t, i6, o2), args.input, {
        ...config,
        ...context,
        endpoint
      });
      return next({
        ...args,
        request: request2
      });
    }, "schemaSerializationMiddleware");
  }
});

// node_modules/@smithy/core/dist-es/submodules/schema/middleware/getSchemaSerdePlugin.js
function getSchemaSerdePlugin(config) {
  return {
    applyToStack: /* @__PURE__ */ __name((commandStack) => {
      commandStack.add(schemaSerializationMiddleware(config), serializerMiddlewareOption);
      commandStack.add(schemaDeserializationMiddleware(config), deserializerMiddlewareOption);
      config.protocol.setSerdeContext(config);
    }, "applyToStack")
  };
}
var deserializerMiddlewareOption, serializerMiddlewareOption;
var init_getSchemaSerdePlugin = __esm({
  "node_modules/@smithy/core/dist-es/submodules/schema/middleware/getSchemaSerdePlugin.js"() {
    init_schemaDeserializationMiddleware();
    init_schemaSerializationMiddleware();
    deserializerMiddlewareOption = {
      name: "deserializerMiddleware",
      step: "deserialize",
      tags: ["DESERIALIZER"],
      override: true
    };
    serializerMiddlewareOption = {
      name: "serializerMiddleware",
      step: "serialize",
      tags: ["SERIALIZER"],
      override: true
    };
    __name(getSchemaSerdePlugin, "getSchemaSerdePlugin");
  }
});

// node_modules/@smithy/core/dist-es/submodules/schema/schemas/Schema.js
var init_Schema = __esm({
  "node_modules/@smithy/core/dist-es/submodules/schema/schemas/Schema.js"() {
  }
});

// node_modules/@smithy/core/dist-es/submodules/schema/schemas/ListSchema.js
var init_ListSchema = __esm({
  "node_modules/@smithy/core/dist-es/submodules/schema/schemas/ListSchema.js"() {
  }
});

// node_modules/@smithy/core/dist-es/submodules/schema/schemas/MapSchema.js
var init_MapSchema = __esm({
  "node_modules/@smithy/core/dist-es/submodules/schema/schemas/MapSchema.js"() {
  }
});

// node_modules/@smithy/core/dist-es/submodules/schema/schemas/OperationSchema.js
var init_OperationSchema = __esm({
  "node_modules/@smithy/core/dist-es/submodules/schema/schemas/OperationSchema.js"() {
  }
});

// node_modules/@smithy/core/dist-es/submodules/schema/schemas/StructureSchema.js
var init_StructureSchema = __esm({
  "node_modules/@smithy/core/dist-es/submodules/schema/schemas/StructureSchema.js"() {
  }
});

// node_modules/@smithy/core/dist-es/submodules/schema/schemas/ErrorSchema.js
var init_ErrorSchema = __esm({
  "node_modules/@smithy/core/dist-es/submodules/schema/schemas/ErrorSchema.js"() {
  }
});

// node_modules/@smithy/core/dist-es/submodules/schema/schemas/translateTraits.js
function translateTraits(indicator) {
  if (typeof indicator === "object") {
    return indicator;
  }
  indicator = indicator | 0;
  if (traitsCache[indicator]) {
    return traitsCache[indicator];
  }
  const traits = {};
  let i6 = 0;
  for (const trait of [
    "httpLabel",
    "idempotent",
    "idempotencyToken",
    "sensitive",
    "httpPayload",
    "httpResponseCode",
    "httpQueryParams"
  ]) {
    if ((indicator >> i6++ & 1) === 1) {
      traits[trait] = 1;
    }
  }
  return traitsCache[indicator] = traits;
}
var traitsCache;
var init_translateTraits = __esm({
  "node_modules/@smithy/core/dist-es/submodules/schema/schemas/translateTraits.js"() {
    traitsCache = [];
    __name(translateTraits, "translateTraits");
  }
});

// node_modules/@smithy/core/dist-es/submodules/schema/schemas/NormalizedSchema.js
function member(memberSchema, memberName) {
  if (memberSchema instanceof NormalizedSchema) {
    return Object.assign(memberSchema, {
      memberName,
      _isMemberSchema: true
    });
  }
  const internalCtorAccess = NormalizedSchema;
  return new internalCtorAccess(memberSchema, memberName);
}
var anno, simpleSchemaCacheN, simpleSchemaCacheS, NormalizedSchema, isMemberSchema, isStaticSchema;
var init_NormalizedSchema = __esm({
  "node_modules/@smithy/core/dist-es/submodules/schema/schemas/NormalizedSchema.js"() {
    init_deref();
    init_translateTraits();
    anno = {
      it: /* @__PURE__ */ Symbol.for("@smithy/nor-struct-it"),
      ns: /* @__PURE__ */ Symbol.for("@smithy/ns")
    };
    simpleSchemaCacheN = [];
    simpleSchemaCacheS = {};
    NormalizedSchema = class _NormalizedSchema {
      static {
        __name(this, "NormalizedSchema");
      }
      ref;
      memberName;
      static symbol = /* @__PURE__ */ Symbol.for("@smithy/nor");
      symbol = _NormalizedSchema.symbol;
      name;
      schema;
      _isMemberSchema;
      traits;
      memberTraits;
      normalizedTraits;
      constructor(ref, memberName) {
        this.ref = ref;
        this.memberName = memberName;
        const traitStack = [];
        let _ref = ref;
        let schema = ref;
        this._isMemberSchema = false;
        while (isMemberSchema(_ref)) {
          traitStack.push(_ref[1]);
          _ref = _ref[0];
          schema = deref(_ref);
          this._isMemberSchema = true;
        }
        if (traitStack.length > 0) {
          this.memberTraits = {};
          for (let i6 = traitStack.length - 1; i6 >= 0; --i6) {
            const traitSet = traitStack[i6];
            Object.assign(this.memberTraits, translateTraits(traitSet));
          }
        } else {
          this.memberTraits = 0;
        }
        if (schema instanceof _NormalizedSchema) {
          const computedMemberTraits = this.memberTraits;
          Object.assign(this, schema);
          this.memberTraits = Object.assign({}, computedMemberTraits, schema.getMemberTraits(), this.getMemberTraits());
          this.normalizedTraits = void 0;
          this.memberName = memberName ?? schema.memberName;
          return;
        }
        this.schema = deref(schema);
        if (isStaticSchema(this.schema)) {
          this.name = `${this.schema[1]}#${this.schema[2]}`;
          this.traits = this.schema[3];
        } else {
          this.name = this.memberName ?? String(schema);
          this.traits = 0;
        }
        if (this._isMemberSchema && !memberName) {
          throw new Error(`@smithy/core/schema - NormalizedSchema member init ${this.getName(true)} missing member name.`);
        }
      }
      static [Symbol.hasInstance](lhs) {
        const isPrototype = this.prototype.isPrototypeOf(lhs);
        if (!isPrototype && typeof lhs === "object" && lhs !== null) {
          const ns = lhs;
          return ns.symbol === this.symbol;
        }
        return isPrototype;
      }
      static of(ref) {
        const keyAble = typeof ref === "function" || typeof ref === "object" && ref !== null;
        if (typeof ref === "number") {
          if (simpleSchemaCacheN[ref]) {
            return simpleSchemaCacheN[ref];
          }
        } else if (typeof ref === "string") {
          if (simpleSchemaCacheS[ref]) {
            return simpleSchemaCacheS[ref];
          }
        } else if (keyAble) {
          if (ref[anno.ns]) {
            return ref[anno.ns];
          }
        }
        const sc = deref(ref);
        if (sc instanceof _NormalizedSchema) {
          return sc;
        }
        if (isMemberSchema(sc)) {
          const [ns2, traits] = sc;
          if (ns2 instanceof _NormalizedSchema) {
            Object.assign(ns2.getMergedTraits(), translateTraits(traits));
            return ns2;
          }
          throw new Error(`@smithy/core/schema - may not init unwrapped member schema=${JSON.stringify(ref, null, 2)}.`);
        }
        const ns = new _NormalizedSchema(sc);
        if (keyAble) {
          return ref[anno.ns] = ns;
        }
        if (typeof sc === "string") {
          return simpleSchemaCacheS[sc] = ns;
        }
        if (typeof sc === "number") {
          return simpleSchemaCacheN[sc] = ns;
        }
        return ns;
      }
      getSchema() {
        const sc = this.schema;
        if (Array.isArray(sc) && sc[0] === 0) {
          return sc[4];
        }
        return sc;
      }
      getName(withNamespace = false) {
        const { name } = this;
        const short = !withNamespace && name && name.includes("#");
        return short ? name.split("#")[1] : name || void 0;
      }
      getMemberName() {
        return this.memberName;
      }
      isMemberSchema() {
        return this._isMemberSchema;
      }
      isListSchema() {
        const sc = this.getSchema();
        return typeof sc === "number" ? sc >= 64 && sc < 128 : sc[0] === 1;
      }
      isMapSchema() {
        const sc = this.getSchema();
        return typeof sc === "number" ? sc >= 128 && sc <= 255 : sc[0] === 2;
      }
      isStructSchema() {
        const sc = this.getSchema();
        if (typeof sc !== "object") {
          return false;
        }
        const id = sc[0];
        return id === 3 || id === -3 || id === 4;
      }
      isUnionSchema() {
        const sc = this.getSchema();
        if (typeof sc !== "object") {
          return false;
        }
        return sc[0] === 4;
      }
      isBlobSchema() {
        const sc = this.getSchema();
        return sc === 21 || sc === 42;
      }
      isTimestampSchema() {
        const sc = this.getSchema();
        return typeof sc === "number" && sc >= 4 && sc <= 7;
      }
      isUnitSchema() {
        return this.getSchema() === "unit";
      }
      isDocumentSchema() {
        return this.getSchema() === 15;
      }
      isStringSchema() {
        return this.getSchema() === 0;
      }
      isBooleanSchema() {
        return this.getSchema() === 2;
      }
      isNumericSchema() {
        return this.getSchema() === 1;
      }
      isBigIntegerSchema() {
        return this.getSchema() === 17;
      }
      isBigDecimalSchema() {
        return this.getSchema() === 19;
      }
      isStreaming() {
        const { streaming } = this.getMergedTraits();
        return !!streaming || this.getSchema() === 42;
      }
      isIdempotencyToken() {
        return !!this.getMergedTraits().idempotencyToken;
      }
      getMergedTraits() {
        return this.normalizedTraits ?? (this.normalizedTraits = {
          ...this.getOwnTraits(),
          ...this.getMemberTraits()
        });
      }
      getMemberTraits() {
        return translateTraits(this.memberTraits);
      }
      getOwnTraits() {
        return translateTraits(this.traits);
      }
      getKeySchema() {
        const [isDoc, isMap] = [this.isDocumentSchema(), this.isMapSchema()];
        if (!isDoc && !isMap) {
          throw new Error(`@smithy/core/schema - cannot get key for non-map: ${this.getName(true)}`);
        }
        const schema = this.getSchema();
        const memberSchema = isDoc ? 15 : schema[4] ?? 0;
        return member([memberSchema, 0], "key");
      }
      getValueSchema() {
        const sc = this.getSchema();
        const [isDoc, isMap, isList] = [this.isDocumentSchema(), this.isMapSchema(), this.isListSchema()];
        const memberSchema = typeof sc === "number" ? 63 & sc : sc && typeof sc === "object" && (isMap || isList) ? sc[3 + sc[0]] : isDoc ? 15 : void 0;
        if (memberSchema != null) {
          return member([memberSchema, 0], isMap ? "value" : "member");
        }
        throw new Error(`@smithy/core/schema - ${this.getName(true)} has no value member.`);
      }
      getMemberSchema(memberName) {
        const struct = this.getSchema();
        if (this.isStructSchema() && struct[4].includes(memberName)) {
          const i6 = struct[4].indexOf(memberName);
          const memberSchema = struct[5][i6];
          return member(isMemberSchema(memberSchema) ? memberSchema : [memberSchema, 0], memberName);
        }
        if (this.isDocumentSchema()) {
          return member([15, 0], memberName);
        }
        throw new Error(`@smithy/core/schema - ${this.getName(true)} has no member=${memberName}.`);
      }
      getMemberSchemas() {
        const buffer = {};
        try {
          for (const [k6, v] of this.structIterator()) {
            buffer[k6] = v;
          }
        } catch (ignored) {
        }
        return buffer;
      }
      getEventStreamMember() {
        if (this.isStructSchema()) {
          for (const [memberName, memberSchema] of this.structIterator()) {
            if (memberSchema.isStreaming() && memberSchema.isStructSchema()) {
              return memberName;
            }
          }
        }
        return "";
      }
      *structIterator() {
        if (this.isUnitSchema()) {
          return;
        }
        if (!this.isStructSchema()) {
          throw new Error("@smithy/core/schema - cannot iterate non-struct schema.");
        }
        const struct = this.getSchema();
        const z = struct[4].length;
        let it = struct[anno.it];
        if (it && z === it.length) {
          yield* it;
          return;
        }
        it = Array(z);
        for (let i6 = 0; i6 < z; ++i6) {
          const k6 = struct[4][i6];
          const v = member([struct[5][i6], 0], k6);
          yield it[i6] = [k6, v];
        }
        struct[anno.it] = it;
      }
    };
    __name(member, "member");
    isMemberSchema = /* @__PURE__ */ __name((sc) => Array.isArray(sc) && sc.length === 2, "isMemberSchema");
    isStaticSchema = /* @__PURE__ */ __name((sc) => Array.isArray(sc) && sc.length >= 5, "isStaticSchema");
  }
});

// node_modules/@smithy/core/dist-es/submodules/schema/schemas/SimpleSchema.js
var init_SimpleSchema = __esm({
  "node_modules/@smithy/core/dist-es/submodules/schema/schemas/SimpleSchema.js"() {
  }
});

// node_modules/@smithy/core/dist-es/submodules/schema/schemas/sentinels.js
var init_sentinels2 = __esm({
  "node_modules/@smithy/core/dist-es/submodules/schema/schemas/sentinels.js"() {
  }
});

// node_modules/@smithy/core/dist-es/submodules/schema/TypeRegistry.js
var TypeRegistry;
var init_TypeRegistry = __esm({
  "node_modules/@smithy/core/dist-es/submodules/schema/TypeRegistry.js"() {
    TypeRegistry = class _TypeRegistry {
      static {
        __name(this, "TypeRegistry");
      }
      namespace;
      schemas;
      exceptions;
      static registries = /* @__PURE__ */ new Map();
      constructor(namespace, schemas = /* @__PURE__ */ new Map(), exceptions = /* @__PURE__ */ new Map()) {
        this.namespace = namespace;
        this.schemas = schemas;
        this.exceptions = exceptions;
      }
      static for(namespace) {
        if (!_TypeRegistry.registries.has(namespace)) {
          _TypeRegistry.registries.set(namespace, new _TypeRegistry(namespace));
        }
        return _TypeRegistry.registries.get(namespace);
      }
      copyFrom(other) {
        const { schemas, exceptions } = this;
        for (const [k6, v] of other.schemas) {
          if (!schemas.has(k6)) {
            schemas.set(k6, v);
          }
        }
        for (const [k6, v] of other.exceptions) {
          if (!exceptions.has(k6)) {
            exceptions.set(k6, v);
          }
        }
      }
      register(shapeId, schema) {
        const qualifiedName = this.normalizeShapeId(shapeId);
        for (const r6 of [this, _TypeRegistry.for(qualifiedName.split("#")[0])]) {
          r6.schemas.set(qualifiedName, schema);
        }
      }
      getSchema(shapeId) {
        const id = this.normalizeShapeId(shapeId);
        if (!this.schemas.has(id)) {
          throw new Error(`@smithy/core/schema - schema not found for ${id}`);
        }
        return this.schemas.get(id);
      }
      registerError(es, ctor) {
        const $error = es;
        const ns = $error[1];
        for (const r6 of [this, _TypeRegistry.for(ns)]) {
          r6.schemas.set(ns + "#" + $error[2], $error);
          r6.exceptions.set($error, ctor);
        }
      }
      getErrorCtor(es) {
        const $error = es;
        if (this.exceptions.has($error)) {
          return this.exceptions.get($error);
        }
        const registry = _TypeRegistry.for($error[1]);
        return registry.exceptions.get($error);
      }
      getBaseException() {
        for (const exceptionKey of this.exceptions.keys()) {
          if (Array.isArray(exceptionKey)) {
            const [, ns, name] = exceptionKey;
            const id = ns + "#" + name;
            if (id.startsWith("smithy.ts.sdk.synthetic.") && id.endsWith("ServiceException")) {
              return exceptionKey;
            }
          }
        }
        return void 0;
      }
      find(predicate) {
        for (const schema of this.schemas.values()) {
          if (predicate(schema)) {
            return schema;
          }
        }
        return void 0;
      }
      clear() {
        this.schemas.clear();
        this.exceptions.clear();
      }
      normalizeShapeId(shapeId) {
        if (shapeId.includes("#")) {
          return shapeId;
        }
        return this.namespace + "#" + shapeId;
      }
    };
  }
});

// node_modules/@smithy/core/dist-es/submodules/schema/index.js
var init_schema2 = __esm({
  "node_modules/@smithy/core/dist-es/submodules/schema/index.js"() {
    init_deref();
    init_getSchemaSerdePlugin();
    init_ListSchema();
    init_MapSchema();
    init_OperationSchema();
    init_operation();
    init_ErrorSchema();
    init_NormalizedSchema();
    init_Schema();
    init_SimpleSchema();
    init_StructureSchema();
    init_sentinels2();
    init_translateTraits();
    init_TypeRegistry();
  }
});

// node_modules/@smithy/core/dist-es/submodules/serde/copyDocumentWithTransform.js
var init_copyDocumentWithTransform = __esm({
  "node_modules/@smithy/core/dist-es/submodules/serde/copyDocumentWithTransform.js"() {
  }
});

// node_modules/@smithy/core/dist-es/submodules/serde/parse-utils.js
var expectNumber, MAX_FLOAT, expectFloat32, expectLong, expectShort, expectByte, expectSizedInt, castInt, strictParseDouble, strictParseFloat32, NUMBER_REGEX, parseNumber, strictParseShort, strictParseByte, stackTraceWarning, logger;
var init_parse_utils = __esm({
  "node_modules/@smithy/core/dist-es/submodules/serde/parse-utils.js"() {
    expectNumber = /* @__PURE__ */ __name((value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (typeof value === "string") {
        const parsed = parseFloat(value);
        if (!Number.isNaN(parsed)) {
          if (String(parsed) !== String(value)) {
            logger.warn(stackTraceWarning(`Expected number but observed string: ${value}`));
          }
          return parsed;
        }
      }
      if (typeof value === "number") {
        return value;
      }
      throw new TypeError(`Expected number, got ${typeof value}: ${value}`);
    }, "expectNumber");
    MAX_FLOAT = Math.ceil(2 ** 127 * (2 - 2 ** -23));
    expectFloat32 = /* @__PURE__ */ __name((value) => {
      const expected = expectNumber(value);
      if (expected !== void 0 && !Number.isNaN(expected) && expected !== Infinity && expected !== -Infinity) {
        if (Math.abs(expected) > MAX_FLOAT) {
          throw new TypeError(`Expected 32-bit float, got ${value}`);
        }
      }
      return expected;
    }, "expectFloat32");
    expectLong = /* @__PURE__ */ __name((value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (Number.isInteger(value) && !Number.isNaN(value)) {
        return value;
      }
      throw new TypeError(`Expected integer, got ${typeof value}: ${value}`);
    }, "expectLong");
    expectShort = /* @__PURE__ */ __name((value) => expectSizedInt(value, 16), "expectShort");
    expectByte = /* @__PURE__ */ __name((value) => expectSizedInt(value, 8), "expectByte");
    expectSizedInt = /* @__PURE__ */ __name((value, size) => {
      const expected = expectLong(value);
      if (expected !== void 0 && castInt(expected, size) !== expected) {
        throw new TypeError(`Expected ${size}-bit integer, got ${value}`);
      }
      return expected;
    }, "expectSizedInt");
    castInt = /* @__PURE__ */ __name((value, size) => {
      switch (size) {
        case 32:
          return Int32Array.of(value)[0];
        case 16:
          return Int16Array.of(value)[0];
        case 8:
          return Int8Array.of(value)[0];
      }
    }, "castInt");
    strictParseDouble = /* @__PURE__ */ __name((value) => {
      if (typeof value == "string") {
        return expectNumber(parseNumber(value));
      }
      return expectNumber(value);
    }, "strictParseDouble");
    strictParseFloat32 = /* @__PURE__ */ __name((value) => {
      if (typeof value == "string") {
        return expectFloat32(parseNumber(value));
      }
      return expectFloat32(value);
    }, "strictParseFloat32");
    NUMBER_REGEX = /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g;
    parseNumber = /* @__PURE__ */ __name((value) => {
      const matches = value.match(NUMBER_REGEX);
      if (matches === null || matches[0].length !== value.length) {
        throw new TypeError(`Expected real number, got implicit NaN`);
      }
      return parseFloat(value);
    }, "parseNumber");
    strictParseShort = /* @__PURE__ */ __name((value) => {
      if (typeof value === "string") {
        return expectShort(parseNumber(value));
      }
      return expectShort(value);
    }, "strictParseShort");
    strictParseByte = /* @__PURE__ */ __name((value) => {
      if (typeof value === "string") {
        return expectByte(parseNumber(value));
      }
      return expectByte(value);
    }, "strictParseByte");
    stackTraceWarning = /* @__PURE__ */ __name((message) => {
      return String(new TypeError(message).stack || message).split("\n").slice(0, 5).filter((s) => !s.includes("stackTraceWarning")).join("\n");
    }, "stackTraceWarning");
    logger = {
      warn: console.warn
    };
  }
});

// node_modules/@smithy/core/dist-es/submodules/serde/date-utils.js
function dateToUtcString(date2) {
  const year2 = date2.getUTCFullYear();
  const month = date2.getUTCMonth();
  const dayOfWeek = date2.getUTCDay();
  const dayOfMonthInt = date2.getUTCDate();
  const hoursInt = date2.getUTCHours();
  const minutesInt = date2.getUTCMinutes();
  const secondsInt = date2.getUTCSeconds();
  const dayOfMonthString = dayOfMonthInt < 10 ? `0${dayOfMonthInt}` : `${dayOfMonthInt}`;
  const hoursString = hoursInt < 10 ? `0${hoursInt}` : `${hoursInt}`;
  const minutesString = minutesInt < 10 ? `0${minutesInt}` : `${minutesInt}`;
  const secondsString = secondsInt < 10 ? `0${secondsInt}` : `${secondsInt}`;
  return `${DAYS[dayOfWeek]}, ${dayOfMonthString} ${MONTHS[month]} ${year2} ${hoursString}:${minutesString}:${secondsString} GMT`;
}
var DAYS, MONTHS, RFC3339, parseRfc3339DateTime, RFC3339_WITH_OFFSET, parseRfc3339DateTimeWithOffset, IMF_FIXDATE, RFC_850_DATE, ASC_TIME, parseRfc7231DateTime, parseEpochTimestamp, buildDate, parseTwoDigitYear, FIFTY_YEARS_IN_MILLIS, adjustRfc850Year, parseMonthByShortName, DAYS_IN_MONTH, validateDayOfMonth, isLeapYear, parseDateValue, parseMilliseconds, parseOffsetToMilliseconds, stripLeadingZeroes;
var init_date_utils = __esm({
  "node_modules/@smithy/core/dist-es/submodules/serde/date-utils.js"() {
    init_parse_utils();
    DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    __name(dateToUtcString, "dateToUtcString");
    RFC3339 = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?[zZ]$/);
    parseRfc3339DateTime = /* @__PURE__ */ __name((value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (typeof value !== "string") {
        throw new TypeError("RFC-3339 date-times must be expressed as strings");
      }
      const match = RFC3339.exec(value);
      if (!match) {
        throw new TypeError("Invalid RFC-3339 date-time value");
      }
      const [_, yearStr, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds] = match;
      const year2 = strictParseShort(stripLeadingZeroes(yearStr));
      const month = parseDateValue(monthStr, "month", 1, 12);
      const day = parseDateValue(dayStr, "day", 1, 31);
      return buildDate(year2, month, day, { hours, minutes, seconds, fractionalMilliseconds });
    }, "parseRfc3339DateTime");
    RFC3339_WITH_OFFSET = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}\:\d{2})|[zZ])$/);
    parseRfc3339DateTimeWithOffset = /* @__PURE__ */ __name((value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (typeof value !== "string") {
        throw new TypeError("RFC-3339 date-times must be expressed as strings");
      }
      const match = RFC3339_WITH_OFFSET.exec(value);
      if (!match) {
        throw new TypeError("Invalid RFC-3339 date-time value");
      }
      const [_, yearStr, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds, offsetStr] = match;
      const year2 = strictParseShort(stripLeadingZeroes(yearStr));
      const month = parseDateValue(monthStr, "month", 1, 12);
      const day = parseDateValue(dayStr, "day", 1, 31);
      const date2 = buildDate(year2, month, day, { hours, minutes, seconds, fractionalMilliseconds });
      if (offsetStr.toUpperCase() != "Z") {
        date2.setTime(date2.getTime() - parseOffsetToMilliseconds(offsetStr));
      }
      return date2;
    }, "parseRfc3339DateTimeWithOffset");
    IMF_FIXDATE = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/);
    RFC_850_DATE = new RegExp(/^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/);
    ASC_TIME = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( [1-9]|\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? (\d{4})$/);
    parseRfc7231DateTime = /* @__PURE__ */ __name((value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (typeof value !== "string") {
        throw new TypeError("RFC-7231 date-times must be expressed as strings");
      }
      let match = IMF_FIXDATE.exec(value);
      if (match) {
        const [_, dayStr, monthStr, yearStr, hours, minutes, seconds, fractionalMilliseconds] = match;
        return buildDate(strictParseShort(stripLeadingZeroes(yearStr)), parseMonthByShortName(monthStr), parseDateValue(dayStr, "day", 1, 31), { hours, minutes, seconds, fractionalMilliseconds });
      }
      match = RFC_850_DATE.exec(value);
      if (match) {
        const [_, dayStr, monthStr, yearStr, hours, minutes, seconds, fractionalMilliseconds] = match;
        return adjustRfc850Year(buildDate(parseTwoDigitYear(yearStr), parseMonthByShortName(monthStr), parseDateValue(dayStr, "day", 1, 31), {
          hours,
          minutes,
          seconds,
          fractionalMilliseconds
        }));
      }
      match = ASC_TIME.exec(value);
      if (match) {
        const [_, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds, yearStr] = match;
        return buildDate(strictParseShort(stripLeadingZeroes(yearStr)), parseMonthByShortName(monthStr), parseDateValue(dayStr.trimLeft(), "day", 1, 31), { hours, minutes, seconds, fractionalMilliseconds });
      }
      throw new TypeError("Invalid RFC-7231 date-time value");
    }, "parseRfc7231DateTime");
    parseEpochTimestamp = /* @__PURE__ */ __name((value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      let valueAsDouble;
      if (typeof value === "number") {
        valueAsDouble = value;
      } else if (typeof value === "string") {
        valueAsDouble = strictParseDouble(value);
      } else if (typeof value === "object" && value.tag === 1) {
        valueAsDouble = value.value;
      } else {
        throw new TypeError("Epoch timestamps must be expressed as floating point numbers or their string representation");
      }
      if (Number.isNaN(valueAsDouble) || valueAsDouble === Infinity || valueAsDouble === -Infinity) {
        throw new TypeError("Epoch timestamps must be valid, non-Infinite, non-NaN numerics");
      }
      return new Date(Math.round(valueAsDouble * 1e3));
    }, "parseEpochTimestamp");
    buildDate = /* @__PURE__ */ __name((year2, month, day, time2) => {
      const adjustedMonth = month - 1;
      validateDayOfMonth(year2, adjustedMonth, day);
      return new Date(Date.UTC(year2, adjustedMonth, day, parseDateValue(time2.hours, "hour", 0, 23), parseDateValue(time2.minutes, "minute", 0, 59), parseDateValue(time2.seconds, "seconds", 0, 60), parseMilliseconds(time2.fractionalMilliseconds)));
    }, "buildDate");
    parseTwoDigitYear = /* @__PURE__ */ __name((value) => {
      const thisYear = (/* @__PURE__ */ new Date()).getUTCFullYear();
      const valueInThisCentury = Math.floor(thisYear / 100) * 100 + strictParseShort(stripLeadingZeroes(value));
      if (valueInThisCentury < thisYear) {
        return valueInThisCentury + 100;
      }
      return valueInThisCentury;
    }, "parseTwoDigitYear");
    FIFTY_YEARS_IN_MILLIS = 50 * 365 * 24 * 60 * 60 * 1e3;
    adjustRfc850Year = /* @__PURE__ */ __name((input) => {
      if (input.getTime() - (/* @__PURE__ */ new Date()).getTime() > FIFTY_YEARS_IN_MILLIS) {
        return new Date(Date.UTC(input.getUTCFullYear() - 100, input.getUTCMonth(), input.getUTCDate(), input.getUTCHours(), input.getUTCMinutes(), input.getUTCSeconds(), input.getUTCMilliseconds()));
      }
      return input;
    }, "adjustRfc850Year");
    parseMonthByShortName = /* @__PURE__ */ __name((value) => {
      const monthIdx = MONTHS.indexOf(value);
      if (monthIdx < 0) {
        throw new TypeError(`Invalid month: ${value}`);
      }
      return monthIdx + 1;
    }, "parseMonthByShortName");
    DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    validateDayOfMonth = /* @__PURE__ */ __name((year2, month, day) => {
      let maxDays = DAYS_IN_MONTH[month];
      if (month === 1 && isLeapYear(year2)) {
        maxDays = 29;
      }
      if (day > maxDays) {
        throw new TypeError(`Invalid day for ${MONTHS[month]} in ${year2}: ${day}`);
      }
    }, "validateDayOfMonth");
    isLeapYear = /* @__PURE__ */ __name((year2) => {
      return year2 % 4 === 0 && (year2 % 100 !== 0 || year2 % 400 === 0);
    }, "isLeapYear");
    parseDateValue = /* @__PURE__ */ __name((value, type, lower, upper) => {
      const dateVal = strictParseByte(stripLeadingZeroes(value));
      if (dateVal < lower || dateVal > upper) {
        throw new TypeError(`${type} must be between ${lower} and ${upper}, inclusive`);
      }
      return dateVal;
    }, "parseDateValue");
    parseMilliseconds = /* @__PURE__ */ __name((value) => {
      if (value === null || value === void 0) {
        return 0;
      }
      return strictParseFloat32("0." + value) * 1e3;
    }, "parseMilliseconds");
    parseOffsetToMilliseconds = /* @__PURE__ */ __name((value) => {
      const directionStr = value[0];
      let direction = 1;
      if (directionStr == "+") {
        direction = 1;
      } else if (directionStr == "-") {
        direction = -1;
      } else {
        throw new TypeError(`Offset direction, ${directionStr}, must be "+" or "-"`);
      }
      const hour = Number(value.substring(1, 3));
      const minute = Number(value.substring(4, 6));
      return direction * (hour * 60 + minute) * 60 * 1e3;
    }, "parseOffsetToMilliseconds");
    stripLeadingZeroes = /* @__PURE__ */ __name((value) => {
      let idx = 0;
      while (idx < value.length - 1 && value.charAt(idx) === "0") {
        idx++;
      }
      if (idx === 0) {
        return value;
      }
      return value.slice(idx);
    }, "stripLeadingZeroes");
  }
});

// node_modules/@smithy/uuid/dist-es/randomUUID.js
import crypto2 from "crypto";
var randomUUID;
var init_randomUUID = __esm({
  "node_modules/@smithy/uuid/dist-es/randomUUID.js"() {
    randomUUID = crypto2.randomUUID.bind(crypto2);
  }
});

// node_modules/@smithy/uuid/dist-es/v4.js
var decimalToHex, v4;
var init_v4 = __esm({
  "node_modules/@smithy/uuid/dist-es/v4.js"() {
    init_randomUUID();
    decimalToHex = Array.from({ length: 256 }, (_, i6) => i6.toString(16).padStart(2, "0"));
    v4 = /* @__PURE__ */ __name(() => {
      if (randomUUID) {
        return randomUUID();
      }
      const rnds = new Uint8Array(16);
      crypto.getRandomValues(rnds);
      rnds[6] = rnds[6] & 15 | 64;
      rnds[8] = rnds[8] & 63 | 128;
      return decimalToHex[rnds[0]] + decimalToHex[rnds[1]] + decimalToHex[rnds[2]] + decimalToHex[rnds[3]] + "-" + decimalToHex[rnds[4]] + decimalToHex[rnds[5]] + "-" + decimalToHex[rnds[6]] + decimalToHex[rnds[7]] + "-" + decimalToHex[rnds[8]] + decimalToHex[rnds[9]] + "-" + decimalToHex[rnds[10]] + decimalToHex[rnds[11]] + decimalToHex[rnds[12]] + decimalToHex[rnds[13]] + decimalToHex[rnds[14]] + decimalToHex[rnds[15]];
    }, "v4");
  }
});

// node_modules/@smithy/uuid/dist-es/index.js
var init_dist_es19 = __esm({
  "node_modules/@smithy/uuid/dist-es/index.js"() {
    init_v4();
  }
});

// node_modules/@smithy/core/dist-es/submodules/serde/generateIdempotencyToken.js
var init_generateIdempotencyToken = __esm({
  "node_modules/@smithy/core/dist-es/submodules/serde/generateIdempotencyToken.js"() {
    init_dist_es19();
  }
});

// node_modules/@smithy/core/dist-es/submodules/serde/lazy-json.js
var LazyJsonString;
var init_lazy_json = __esm({
  "node_modules/@smithy/core/dist-es/submodules/serde/lazy-json.js"() {
    LazyJsonString = /* @__PURE__ */ __name(function LazyJsonString2(val) {
      const str = Object.assign(new String(val), {
        deserializeJSON() {
          return JSON.parse(String(val));
        },
        toString() {
          return String(val);
        },
        toJSON() {
          return String(val);
        }
      });
      return str;
    }, "LazyJsonString");
    LazyJsonString.from = (object) => {
      if (object && typeof object === "object" && (object instanceof LazyJsonString || "deserializeJSON" in object)) {
        return object;
      } else if (typeof object === "string" || Object.getPrototypeOf(object) === String.prototype) {
        return LazyJsonString(String(object));
      }
      return LazyJsonString(JSON.stringify(object));
    };
    LazyJsonString.fromObject = LazyJsonString.from;
  }
});

// node_modules/@smithy/core/dist-es/submodules/serde/quote-header.js
function quoteHeader(part) {
  if (part.includes(",") || part.includes('"')) {
    part = `"${part.replace(/"/g, '\\"')}"`;
  }
  return part;
}
var init_quote_header = __esm({
  "node_modules/@smithy/core/dist-es/submodules/serde/quote-header.js"() {
    __name(quoteHeader, "quoteHeader");
  }
});

// node_modules/@smithy/core/dist-es/submodules/serde/schema-serde-lib/schema-date-utils.js
function range(v, min, max) {
  const _v = Number(v);
  if (_v < min || _v > max) {
    throw new Error(`Value ${_v} out of range [${min}, ${max}]`);
  }
}
var ddd, mmm, time, date, year, RFC3339_WITH_OFFSET2, IMF_FIXDATE2, RFC_850_DATE2, ASC_TIME2, months, _parseEpochTimestamp, _parseRfc3339DateTimeWithOffset, _parseRfc7231DateTime;
var init_schema_date_utils = __esm({
  "node_modules/@smithy/core/dist-es/submodules/serde/schema-serde-lib/schema-date-utils.js"() {
    ddd = `(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun)(?:[ne|u?r]?s?day)?`;
    mmm = `(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)`;
    time = `(\\d?\\d):(\\d{2}):(\\d{2})(?:\\.(\\d+))?`;
    date = `(\\d?\\d)`;
    year = `(\\d{4})`;
    RFC3339_WITH_OFFSET2 = new RegExp(/^(\d{4})-(\d\d)-(\d\d)[tT](\d\d):(\d\d):(\d\d)(\.(\d+))?(([-+]\d\d:\d\d)|[zZ])$/);
    IMF_FIXDATE2 = new RegExp(`^${ddd}, ${date} ${mmm} ${year} ${time} GMT$`);
    RFC_850_DATE2 = new RegExp(`^${ddd}, ${date}-${mmm}-(\\d\\d) ${time} GMT$`);
    ASC_TIME2 = new RegExp(`^${ddd} ${mmm} ( [1-9]|\\d\\d) ${time} ${year}$`);
    months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    _parseEpochTimestamp = /* @__PURE__ */ __name((value) => {
      if (value == null) {
        return void 0;
      }
      let num = NaN;
      if (typeof value === "number") {
        num = value;
      } else if (typeof value === "string") {
        if (!/^-?\d*\.?\d+$/.test(value)) {
          throw new TypeError(`parseEpochTimestamp - numeric string invalid.`);
        }
        num = Number.parseFloat(value);
      } else if (typeof value === "object" && value.tag === 1) {
        num = value.value;
      }
      if (isNaN(num) || Math.abs(num) === Infinity) {
        throw new TypeError("Epoch timestamps must be valid finite numbers.");
      }
      return new Date(Math.round(num * 1e3));
    }, "_parseEpochTimestamp");
    _parseRfc3339DateTimeWithOffset = /* @__PURE__ */ __name((value) => {
      if (value == null) {
        return void 0;
      }
      if (typeof value !== "string") {
        throw new TypeError("RFC3339 timestamps must be strings");
      }
      const matches = RFC3339_WITH_OFFSET2.exec(value);
      if (!matches) {
        throw new TypeError(`Invalid RFC3339 timestamp format ${value}`);
      }
      const [, yearStr, monthStr, dayStr, hours, minutes, seconds, , ms, offsetStr] = matches;
      range(monthStr, 1, 12);
      range(dayStr, 1, 31);
      range(hours, 0, 23);
      range(minutes, 0, 59);
      range(seconds, 0, 60);
      const date2 = new Date(Date.UTC(Number(yearStr), Number(monthStr) - 1, Number(dayStr), Number(hours), Number(minutes), Number(seconds), Number(ms) ? Math.round(parseFloat(`0.${ms}`) * 1e3) : 0));
      date2.setUTCFullYear(Number(yearStr));
      if (offsetStr.toUpperCase() != "Z") {
        const [, sign2, offsetH, offsetM] = /([+-])(\d\d):(\d\d)/.exec(offsetStr) || [void 0, "+", 0, 0];
        const scalar = sign2 === "-" ? 1 : -1;
        date2.setTime(date2.getTime() + scalar * (Number(offsetH) * 60 * 60 * 1e3 + Number(offsetM) * 60 * 1e3));
      }
      return date2;
    }, "_parseRfc3339DateTimeWithOffset");
    _parseRfc7231DateTime = /* @__PURE__ */ __name((value) => {
      if (value == null) {
        return void 0;
      }
      if (typeof value !== "string") {
        throw new TypeError("RFC7231 timestamps must be strings.");
      }
      let day;
      let month;
      let year2;
      let hour;
      let minute;
      let second;
      let fraction;
      let matches;
      if (matches = IMF_FIXDATE2.exec(value)) {
        [, day, month, year2, hour, minute, second, fraction] = matches;
      } else if (matches = RFC_850_DATE2.exec(value)) {
        [, day, month, year2, hour, minute, second, fraction] = matches;
        year2 = (Number(year2) + 1900).toString();
      } else if (matches = ASC_TIME2.exec(value)) {
        [, month, day, hour, minute, second, fraction, year2] = matches;
      }
      if (year2 && second) {
        const timestamp = Date.UTC(Number(year2), months.indexOf(month), Number(day), Number(hour), Number(minute), Number(second), fraction ? Math.round(parseFloat(`0.${fraction}`) * 1e3) : 0);
        range(day, 1, 31);
        range(hour, 0, 23);
        range(minute, 0, 59);
        range(second, 0, 60);
        const date2 = new Date(timestamp);
        date2.setUTCFullYear(Number(year2));
        return date2;
      }
      throw new TypeError(`Invalid RFC7231 date-time value ${value}.`);
    }, "_parseRfc7231DateTime");
    __name(range, "range");
  }
});

// node_modules/@smithy/core/dist-es/submodules/serde/split-every.js
function splitEvery(value, delimiter, numDelimiters) {
  if (numDelimiters <= 0 || !Number.isInteger(numDelimiters)) {
    throw new Error("Invalid number of delimiters (" + numDelimiters + ") for splitEvery.");
  }
  const segments = value.split(delimiter);
  if (numDelimiters === 1) {
    return segments;
  }
  const compoundSegments = [];
  let currentSegment = "";
  for (let i6 = 0; i6 < segments.length; i6++) {
    if (currentSegment === "") {
      currentSegment = segments[i6];
    } else {
      currentSegment += delimiter + segments[i6];
    }
    if ((i6 + 1) % numDelimiters === 0) {
      compoundSegments.push(currentSegment);
      currentSegment = "";
    }
  }
  if (currentSegment !== "") {
    compoundSegments.push(currentSegment);
  }
  return compoundSegments;
}
var init_split_every = __esm({
  "node_modules/@smithy/core/dist-es/submodules/serde/split-every.js"() {
    __name(splitEvery, "splitEvery");
  }
});

// node_modules/@smithy/core/dist-es/submodules/serde/split-header.js
var splitHeader;
var init_split_header = __esm({
  "node_modules/@smithy/core/dist-es/submodules/serde/split-header.js"() {
    splitHeader = /* @__PURE__ */ __name((value) => {
      const z = value.length;
      const values = [];
      let withinQuotes = false;
      let prevChar = void 0;
      let anchor = 0;
      for (let i6 = 0; i6 < z; ++i6) {
        const char = value[i6];
        switch (char) {
          case `"`:
            if (prevChar !== "\\") {
              withinQuotes = !withinQuotes;
            }
            break;
          case ",":
            if (!withinQuotes) {
              values.push(value.slice(anchor, i6));
              anchor = i6 + 1;
            }
            break;
          default:
        }
        prevChar = char;
      }
      values.push(value.slice(anchor));
      return values.map((v) => {
        v = v.trim();
        const z2 = v.length;
        if (z2 < 2) {
          return v;
        }
        if (v[0] === `"` && v[z2 - 1] === `"`) {
          v = v.slice(1, z2 - 1);
        }
        return v.replace(/\\"/g, '"');
      });
    }, "splitHeader");
  }
});

// node_modules/@smithy/core/dist-es/submodules/serde/value/NumericValue.js
var format, NumericValue;
var init_NumericValue = __esm({
  "node_modules/@smithy/core/dist-es/submodules/serde/value/NumericValue.js"() {
    format = /^-?\d*(\.\d+)?$/;
    NumericValue = class _NumericValue {
      static {
        __name(this, "NumericValue");
      }
      string;
      type;
      constructor(string, type) {
        this.string = string;
        this.type = type;
        if (!format.test(string)) {
          throw new Error(`@smithy/core/serde - NumericValue must only contain [0-9], at most one decimal point ".", and an optional negation prefix "-".`);
        }
      }
      toString() {
        return this.string;
      }
      static [Symbol.hasInstance](object) {
        if (!object || typeof object !== "object") {
          return false;
        }
        const _nv = object;
        return _NumericValue.prototype.isPrototypeOf(object) || _nv.type === "bigDecimal" && format.test(_nv.string);
      }
    };
  }
});

// node_modules/@smithy/core/dist-es/submodules/serde/index.js
var init_serde2 = __esm({
  "node_modules/@smithy/core/dist-es/submodules/serde/index.js"() {
    init_copyDocumentWithTransform();
    init_date_utils();
    init_generateIdempotencyToken();
    init_lazy_json();
    init_parse_utils();
    init_quote_header();
    init_schema_date_utils();
    init_split_every();
    init_split_header();
    init_NumericValue();
  }
});

// node_modules/@smithy/core/dist-es/submodules/protocols/SerdeContext.js
var SerdeContext;
var init_SerdeContext = __esm({
  "node_modules/@smithy/core/dist-es/submodules/protocols/SerdeContext.js"() {
    SerdeContext = class {
      static {
        __name(this, "SerdeContext");
      }
      serdeContext;
      setSerdeContext(serdeContext) {
        this.serdeContext = serdeContext;
      }
    };
  }
});

// node_modules/@smithy/core/dist-es/submodules/event-streams/EventStreamSerde.js
var EventStreamSerde;
var init_EventStreamSerde = __esm({
  "node_modules/@smithy/core/dist-es/submodules/event-streams/EventStreamSerde.js"() {
    init_dist_es9();
    EventStreamSerde = class {
      static {
        __name(this, "EventStreamSerde");
      }
      marshaller;
      serializer;
      deserializer;
      serdeContext;
      defaultContentType;
      constructor({ marshaller, serializer, deserializer, serdeContext, defaultContentType }) {
        this.marshaller = marshaller;
        this.serializer = serializer;
        this.deserializer = deserializer;
        this.serdeContext = serdeContext;
        this.defaultContentType = defaultContentType;
      }
      async serializeEventStream({ eventStream, requestSchema, initialRequest }) {
        const marshaller = this.marshaller;
        const eventStreamMember = requestSchema.getEventStreamMember();
        const unionSchema = requestSchema.getMemberSchema(eventStreamMember);
        const serializer = this.serializer;
        const defaultContentType = this.defaultContentType;
        const initialRequestMarker = /* @__PURE__ */ Symbol("initialRequestMarker");
        const eventStreamIterable = {
          async *[Symbol.asyncIterator]() {
            if (initialRequest) {
              const headers = {
                ":event-type": { type: "string", value: "initial-request" },
                ":message-type": { type: "string", value: "event" },
                ":content-type": { type: "string", value: defaultContentType }
              };
              serializer.write(requestSchema, initialRequest);
              const body = serializer.flush();
              yield {
                [initialRequestMarker]: true,
                headers,
                body
              };
            }
            for await (const page of eventStream) {
              yield page;
            }
          }
        };
        return marshaller.serialize(eventStreamIterable, (event) => {
          if (event[initialRequestMarker]) {
            return {
              headers: event.headers,
              body: event.body
            };
          }
          let unionMember = "";
          for (const key in event) {
            if (key !== "__type") {
              unionMember = key;
              break;
            }
          }
          const { additionalHeaders, body, eventType, explicitPayloadContentType } = this.writeEventBody(unionMember, unionSchema, event);
          const headers = {
            ":event-type": { type: "string", value: eventType },
            ":message-type": { type: "string", value: "event" },
            ":content-type": { type: "string", value: explicitPayloadContentType ?? defaultContentType },
            ...additionalHeaders
          };
          return {
            headers,
            body
          };
        });
      }
      async deserializeEventStream({ response, responseSchema, initialResponseContainer }) {
        const marshaller = this.marshaller;
        const eventStreamMember = responseSchema.getEventStreamMember();
        const unionSchema = responseSchema.getMemberSchema(eventStreamMember);
        const memberSchemas = unionSchema.getMemberSchemas();
        const initialResponseMarker = /* @__PURE__ */ Symbol("initialResponseMarker");
        const asyncIterable = marshaller.deserialize(response.body, async (event) => {
          let unionMember = "";
          for (const key in event) {
            if (key !== "__type") {
              unionMember = key;
              break;
            }
          }
          const body = event[unionMember].body;
          if (unionMember === "initial-response") {
            const dataObject = await this.deserializer.read(responseSchema, body);
            delete dataObject[eventStreamMember];
            return {
              [initialResponseMarker]: true,
              ...dataObject
            };
          } else if (unionMember in memberSchemas) {
            const eventStreamSchema = memberSchemas[unionMember];
            if (eventStreamSchema.isStructSchema()) {
              const out = {};
              let hasBindings = false;
              for (const [name, member2] of eventStreamSchema.structIterator()) {
                const { eventHeader, eventPayload } = member2.getMergedTraits();
                hasBindings = hasBindings || Boolean(eventHeader || eventPayload);
                if (eventPayload) {
                  if (member2.isBlobSchema()) {
                    out[name] = body;
                  } else if (member2.isStringSchema()) {
                    out[name] = (this.serdeContext?.utf8Encoder ?? toUtf8)(body);
                  } else if (member2.isStructSchema()) {
                    out[name] = await this.deserializer.read(member2, body);
                  }
                } else if (eventHeader) {
                  const value = event[unionMember].headers[name]?.value;
                  if (value != null) {
                    if (member2.isNumericSchema()) {
                      if (value && typeof value === "object" && "bytes" in value) {
                        out[name] = BigInt(value.toString());
                      } else {
                        out[name] = Number(value);
                      }
                    } else {
                      out[name] = value;
                    }
                  }
                }
              }
              if (hasBindings) {
                return {
                  [unionMember]: out
                };
              }
              if (body.byteLength === 0) {
                return {
                  [unionMember]: {}
                };
              }
            }
            return {
              [unionMember]: await this.deserializer.read(eventStreamSchema, body)
            };
          } else {
            return {
              $unknown: event
            };
          }
        });
        const asyncIterator = asyncIterable[Symbol.asyncIterator]();
        const firstEvent = await asyncIterator.next();
        if (firstEvent.done) {
          return asyncIterable;
        }
        if (firstEvent.value?.[initialResponseMarker]) {
          if (!responseSchema) {
            throw new Error("@smithy::core/protocols - initial-response event encountered in event stream but no response schema given.");
          }
          for (const key in firstEvent.value) {
            initialResponseContainer[key] = firstEvent.value[key];
          }
        }
        return {
          async *[Symbol.asyncIterator]() {
            if (!firstEvent?.value?.[initialResponseMarker]) {
              yield firstEvent.value;
            }
            while (true) {
              const { done, value } = await asyncIterator.next();
              if (done) {
                break;
              }
              yield value;
            }
          }
        };
      }
      writeEventBody(unionMember, unionSchema, event) {
        const serializer = this.serializer;
        let eventType = unionMember;
        let explicitPayloadMember = null;
        let explicitPayloadContentType;
        const isKnownSchema = (() => {
          const struct = unionSchema.getSchema();
          return struct[4].includes(unionMember);
        })();
        const additionalHeaders = {};
        if (!isKnownSchema) {
          const [type, value] = event[unionMember];
          eventType = type;
          serializer.write(15, value);
        } else {
          const eventSchema = unionSchema.getMemberSchema(unionMember);
          if (eventSchema.isStructSchema()) {
            for (const [memberName, memberSchema] of eventSchema.structIterator()) {
              const { eventHeader, eventPayload } = memberSchema.getMergedTraits();
              if (eventPayload) {
                explicitPayloadMember = memberName;
              } else if (eventHeader) {
                const value = event[unionMember][memberName];
                let type = "binary";
                if (memberSchema.isNumericSchema()) {
                  if ((-2) ** 31 <= value && value <= 2 ** 31 - 1) {
                    type = "integer";
                  } else {
                    type = "long";
                  }
                } else if (memberSchema.isTimestampSchema()) {
                  type = "timestamp";
                } else if (memberSchema.isStringSchema()) {
                  type = "string";
                } else if (memberSchema.isBooleanSchema()) {
                  type = "boolean";
                }
                if (value != null) {
                  additionalHeaders[memberName] = {
                    type,
                    value
                  };
                  delete event[unionMember][memberName];
                }
              }
            }
            if (explicitPayloadMember !== null) {
              const payloadSchema = eventSchema.getMemberSchema(explicitPayloadMember);
              if (payloadSchema.isBlobSchema()) {
                explicitPayloadContentType = "application/octet-stream";
              } else if (payloadSchema.isStringSchema()) {
                explicitPayloadContentType = "text/plain";
              }
              serializer.write(payloadSchema, event[unionMember][explicitPayloadMember]);
            } else {
              serializer.write(eventSchema, event[unionMember]);
            }
          } else if (eventSchema.isUnitSchema()) {
            serializer.write(eventSchema, {});
          } else {
            throw new Error("@smithy/core/event-streams - non-struct member not supported in event stream union.");
          }
        }
        const messageSerialization = serializer.flush() ?? new Uint8Array();
        const body = typeof messageSerialization === "string" ? (this.serdeContext?.utf8Decoder ?? fromUtf8)(messageSerialization) : messageSerialization;
        return {
          body,
          eventType,
          explicitPayloadContentType,
          additionalHeaders
        };
      }
    };
  }
});

// node_modules/@smithy/core/dist-es/submodules/event-streams/index.js
var event_streams_exports = {};
__export(event_streams_exports, {
  EventStreamSerde: () => EventStreamSerde
});
var init_event_streams = __esm({
  "node_modules/@smithy/core/dist-es/submodules/event-streams/index.js"() {
    init_EventStreamSerde();
  }
});

// node_modules/@smithy/core/dist-es/submodules/protocols/HttpProtocol.js
var HttpProtocol;
var init_HttpProtocol = __esm({
  "node_modules/@smithy/core/dist-es/submodules/protocols/HttpProtocol.js"() {
    init_schema2();
    init_dist_es2();
    init_SerdeContext();
    HttpProtocol = class extends SerdeContext {
      static {
        __name(this, "HttpProtocol");
      }
      options;
      compositeErrorRegistry;
      constructor(options) {
        super();
        this.options = options;
        this.compositeErrorRegistry = TypeRegistry.for(options.defaultNamespace);
        for (const etr of options.errorTypeRegistries ?? []) {
          this.compositeErrorRegistry.copyFrom(etr);
        }
      }
      getRequestType() {
        return HttpRequest;
      }
      getResponseType() {
        return HttpResponse;
      }
      setSerdeContext(serdeContext) {
        this.serdeContext = serdeContext;
        this.serializer.setSerdeContext(serdeContext);
        this.deserializer.setSerdeContext(serdeContext);
        if (this.getPayloadCodec()) {
          this.getPayloadCodec().setSerdeContext(serdeContext);
        }
      }
      updateServiceEndpoint(request2, endpoint) {
        if ("url" in endpoint) {
          request2.protocol = endpoint.url.protocol;
          request2.hostname = endpoint.url.hostname;
          request2.port = endpoint.url.port ? Number(endpoint.url.port) : void 0;
          request2.path = endpoint.url.pathname;
          request2.fragment = endpoint.url.hash || void 0;
          request2.username = endpoint.url.username || void 0;
          request2.password = endpoint.url.password || void 0;
          if (!request2.query) {
            request2.query = {};
          }
          for (const [k6, v] of endpoint.url.searchParams.entries()) {
            request2.query[k6] = v;
          }
          if (endpoint.headers) {
            for (const name in endpoint.headers) {
              request2.headers[name] = endpoint.headers[name].join(", ");
            }
          }
          return request2;
        } else {
          request2.protocol = endpoint.protocol;
          request2.hostname = endpoint.hostname;
          request2.port = endpoint.port ? Number(endpoint.port) : void 0;
          request2.path = endpoint.path;
          request2.query = {
            ...endpoint.query
          };
          if (endpoint.headers) {
            for (const name in endpoint.headers) {
              request2.headers[name] = endpoint.headers[name];
            }
          }
          return request2;
        }
      }
      setHostPrefix(request2, operationSchema, input) {
        if (this.serdeContext?.disableHostPrefix) {
          return;
        }
        const inputNs = NormalizedSchema.of(operationSchema.input);
        const opTraits = translateTraits(operationSchema.traits ?? {});
        if (opTraits.endpoint) {
          let hostPrefix = opTraits.endpoint?.[0];
          if (typeof hostPrefix === "string") {
            for (const [name, member2] of inputNs.structIterator()) {
              if (!member2.getMergedTraits().hostLabel) {
                continue;
              }
              const replacement = input[name];
              if (typeof replacement !== "string") {
                throw new Error(`@smithy/core/schema - ${name} in input must be a string as hostLabel.`);
              }
              hostPrefix = hostPrefix.replace(`{${name}}`, replacement);
            }
            request2.hostname = hostPrefix + request2.hostname;
          }
        }
      }
      deserializeMetadata(output) {
        return {
          httpStatusCode: output.statusCode,
          requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
          extendedRequestId: output.headers["x-amz-id-2"],
          cfId: output.headers["x-amz-cf-id"]
        };
      }
      async serializeEventStream({ eventStream, requestSchema, initialRequest }) {
        const eventStreamSerde = await this.loadEventStreamCapability();
        return eventStreamSerde.serializeEventStream({
          eventStream,
          requestSchema,
          initialRequest
        });
      }
      async deserializeEventStream({ response, responseSchema, initialResponseContainer }) {
        const eventStreamSerde = await this.loadEventStreamCapability();
        return eventStreamSerde.deserializeEventStream({
          response,
          responseSchema,
          initialResponseContainer
        });
      }
      async loadEventStreamCapability() {
        const { EventStreamSerde: EventStreamSerde2 } = await Promise.resolve().then(() => (init_event_streams(), event_streams_exports));
        return new EventStreamSerde2({
          marshaller: this.getEventStreamMarshaller(),
          serializer: this.serializer,
          deserializer: this.deserializer,
          serdeContext: this.serdeContext,
          defaultContentType: this.getDefaultContentType()
        });
      }
      getDefaultContentType() {
        throw new Error(`@smithy/core/protocols - ${this.constructor.name} getDefaultContentType() implementation missing.`);
      }
      async deserializeHttpMessage(schema, context, response, arg4, arg5) {
        void schema;
        void context;
        void response;
        void arg4;
        void arg5;
        return [];
      }
      getEventStreamMarshaller() {
        const context = this.serdeContext;
        if (!context.eventStreamMarshaller) {
          throw new Error("@smithy/core - HttpProtocol: eventStreamMarshaller missing in serdeContext.");
        }
        return context.eventStreamMarshaller;
      }
    };
  }
});

// node_modules/@smithy/core/dist-es/submodules/protocols/HttpBindingProtocol.js
var HttpBindingProtocol;
var init_HttpBindingProtocol = __esm({
  "node_modules/@smithy/core/dist-es/submodules/protocols/HttpBindingProtocol.js"() {
    init_schema2();
    init_serde2();
    init_dist_es2();
    init_dist_es16();
    init_collect_stream_body();
    init_extended_encode_uri_component();
    init_HttpProtocol();
    HttpBindingProtocol = class extends HttpProtocol {
      static {
        __name(this, "HttpBindingProtocol");
      }
      async serializeRequest(operationSchema, _input, context) {
        const input = _input && typeof _input === "object" ? _input : {};
        const serializer = this.serializer;
        const query = {};
        const headers = {};
        const endpoint = await context.endpoint();
        const ns = NormalizedSchema.of(operationSchema?.input);
        const payloadMemberNames = [];
        const payloadMemberSchemas = [];
        let hasNonHttpBindingMember = false;
        let payload;
        const request2 = new HttpRequest({
          protocol: "",
          hostname: "",
          port: void 0,
          path: "",
          fragment: void 0,
          query,
          headers,
          body: void 0
        });
        if (endpoint) {
          this.updateServiceEndpoint(request2, endpoint);
          this.setHostPrefix(request2, operationSchema, input);
          const opTraits = translateTraits(operationSchema.traits);
          if (opTraits.http) {
            request2.method = opTraits.http[0];
            const [path, search] = opTraits.http[1].split("?");
            if (request2.path == "/") {
              request2.path = path;
            } else {
              request2.path += path;
            }
            const traitSearchParams = new URLSearchParams(search ?? "");
            for (const [key, value] of traitSearchParams) {
              query[key] = value;
            }
          }
        }
        for (const [memberName, memberNs] of ns.structIterator()) {
          const memberTraits = memberNs.getMergedTraits() ?? {};
          const inputMemberValue = input[memberName];
          if (inputMemberValue == null && !memberNs.isIdempotencyToken()) {
            if (memberTraits.httpLabel) {
              if (request2.path.includes(`{${memberName}+}`) || request2.path.includes(`{${memberName}}`)) {
                throw new Error(`No value provided for input HTTP label: ${memberName}.`);
              }
            }
            continue;
          }
          if (memberTraits.httpPayload) {
            const isStreaming = memberNs.isStreaming();
            if (isStreaming) {
              const isEventStream = memberNs.isStructSchema();
              if (isEventStream) {
                if (input[memberName]) {
                  payload = await this.serializeEventStream({
                    eventStream: input[memberName],
                    requestSchema: ns
                  });
                }
              } else {
                payload = inputMemberValue;
              }
            } else {
              serializer.write(memberNs, inputMemberValue);
              payload = serializer.flush();
            }
          } else if (memberTraits.httpLabel) {
            serializer.write(memberNs, inputMemberValue);
            const replacement = serializer.flush();
            if (request2.path.includes(`{${memberName}+}`)) {
              request2.path = request2.path.replace(`{${memberName}+}`, replacement.split("/").map(extendedEncodeURIComponent).join("/"));
            } else if (request2.path.includes(`{${memberName}}`)) {
              request2.path = request2.path.replace(`{${memberName}}`, extendedEncodeURIComponent(replacement));
            }
          } else if (memberTraits.httpHeader) {
            serializer.write(memberNs, inputMemberValue);
            headers[memberTraits.httpHeader.toLowerCase()] = String(serializer.flush());
          } else if (typeof memberTraits.httpPrefixHeaders === "string") {
            for (const key in inputMemberValue) {
              const val = inputMemberValue[key];
              const amalgam = memberTraits.httpPrefixHeaders + key;
              serializer.write([memberNs.getValueSchema(), { httpHeader: amalgam }], val);
              headers[amalgam.toLowerCase()] = serializer.flush();
            }
          } else if (memberTraits.httpQuery || memberTraits.httpQueryParams) {
            this.serializeQuery(memberNs, inputMemberValue, query);
          } else {
            hasNonHttpBindingMember = true;
            payloadMemberNames.push(memberName);
            payloadMemberSchemas.push(memberNs);
          }
        }
        if (hasNonHttpBindingMember && input) {
          const [namespace, name] = (ns.getName(true) ?? "#Unknown").split("#");
          const requiredMembers = ns.getSchema()[6];
          const payloadSchema = [
            3,
            namespace,
            name,
            ns.getMergedTraits(),
            payloadMemberNames,
            payloadMemberSchemas,
            void 0
          ];
          if (requiredMembers) {
            payloadSchema[6] = requiredMembers;
          } else {
            payloadSchema.pop();
          }
          serializer.write(payloadSchema, input);
          payload = serializer.flush();
        }
        request2.headers = headers;
        request2.query = query;
        request2.body = payload;
        return request2;
      }
      serializeQuery(ns, data, query) {
        const serializer = this.serializer;
        const traits = ns.getMergedTraits();
        if (traits.httpQueryParams) {
          for (const key in data) {
            if (!(key in query)) {
              const val = data[key];
              const valueSchema = ns.getValueSchema();
              Object.assign(valueSchema.getMergedTraits(), {
                ...traits,
                httpQuery: key,
                httpQueryParams: void 0
              });
              this.serializeQuery(valueSchema, val, query);
            }
          }
          return;
        }
        if (ns.isListSchema()) {
          const sparse = !!ns.getMergedTraits().sparse;
          const buffer = [];
          for (const item of data) {
            serializer.write([ns.getValueSchema(), traits], item);
            const serializable = serializer.flush();
            if (sparse || serializable !== void 0) {
              buffer.push(serializable);
            }
          }
          query[traits.httpQuery] = buffer;
        } else {
          serializer.write([ns, traits], data);
          query[traits.httpQuery] = serializer.flush();
        }
      }
      async deserializeResponse(operationSchema, context, response) {
        const deserializer = this.deserializer;
        const ns = NormalizedSchema.of(operationSchema.output);
        const dataObject = {};
        if (response.statusCode >= 300) {
          const bytes = await collectBody(response.body, context);
          if (bytes.byteLength > 0) {
            Object.assign(dataObject, await deserializer.read(15, bytes));
          }
          await this.handleError(operationSchema, context, response, dataObject, this.deserializeMetadata(response));
          throw new Error("@smithy/core/protocols - HTTP Protocol error handler failed to throw.");
        }
        for (const header in response.headers) {
          const value = response.headers[header];
          delete response.headers[header];
          response.headers[header.toLowerCase()] = value;
        }
        const nonHttpBindingMembers = await this.deserializeHttpMessage(ns, context, response, dataObject);
        if (nonHttpBindingMembers.length) {
          const bytes = await collectBody(response.body, context);
          if (bytes.byteLength > 0) {
            const dataFromBody = await deserializer.read(ns, bytes);
            for (const member2 of nonHttpBindingMembers) {
              if (dataFromBody[member2] != null) {
                dataObject[member2] = dataFromBody[member2];
              }
            }
          }
        } else if (nonHttpBindingMembers.discardResponseBody) {
          await collectBody(response.body, context);
        }
        dataObject.$metadata = this.deserializeMetadata(response);
        return dataObject;
      }
      async deserializeHttpMessage(schema, context, response, arg4, arg5) {
        let dataObject;
        if (arg4 instanceof Set) {
          dataObject = arg5;
        } else {
          dataObject = arg4;
        }
        let discardResponseBody = true;
        const deserializer = this.deserializer;
        const ns = NormalizedSchema.of(schema);
        const nonHttpBindingMembers = [];
        for (const [memberName, memberSchema] of ns.structIterator()) {
          const memberTraits = memberSchema.getMemberTraits();
          if (memberTraits.httpPayload) {
            discardResponseBody = false;
            const isStreaming = memberSchema.isStreaming();
            if (isStreaming) {
              const isEventStream = memberSchema.isStructSchema();
              if (isEventStream) {
                dataObject[memberName] = await this.deserializeEventStream({
                  response,
                  responseSchema: ns
                });
              } else {
                dataObject[memberName] = sdkStreamMixin2(response.body);
              }
            } else if (response.body) {
              const bytes = await collectBody(response.body, context);
              if (bytes.byteLength > 0) {
                dataObject[memberName] = await deserializer.read(memberSchema, bytes);
              }
            }
          } else if (memberTraits.httpHeader) {
            const key = String(memberTraits.httpHeader).toLowerCase();
            const value = response.headers[key];
            if (null != value) {
              if (memberSchema.isListSchema()) {
                const headerListValueSchema = memberSchema.getValueSchema();
                headerListValueSchema.getMergedTraits().httpHeader = key;
                let sections;
                if (headerListValueSchema.isTimestampSchema() && headerListValueSchema.getSchema() === 4) {
                  sections = splitEvery(value, ",", 2);
                } else {
                  sections = splitHeader(value);
                }
                const list = [];
                for (const section of sections) {
                  list.push(await deserializer.read(headerListValueSchema, section.trim()));
                }
                dataObject[memberName] = list;
              } else {
                dataObject[memberName] = await deserializer.read(memberSchema, value);
              }
            }
          } else if (memberTraits.httpPrefixHeaders !== void 0) {
            dataObject[memberName] = {};
            for (const header in response.headers) {
              if (header.startsWith(memberTraits.httpPrefixHeaders)) {
                const value = response.headers[header];
                const valueSchema = memberSchema.getValueSchema();
                valueSchema.getMergedTraits().httpHeader = header;
                dataObject[memberName][header.slice(memberTraits.httpPrefixHeaders.length)] = await deserializer.read(valueSchema, value);
              }
            }
          } else if (memberTraits.httpResponseCode) {
            dataObject[memberName] = response.statusCode;
          } else {
            nonHttpBindingMembers.push(memberName);
          }
        }
        nonHttpBindingMembers.discardResponseBody = discardResponseBody;
        return nonHttpBindingMembers;
      }
    };
  }
});

// node_modules/@smithy/core/dist-es/submodules/protocols/RpcProtocol.js
var RpcProtocol;
var init_RpcProtocol = __esm({
  "node_modules/@smithy/core/dist-es/submodules/protocols/RpcProtocol.js"() {
    init_schema2();
    init_dist_es2();
    init_collect_stream_body();
    init_HttpProtocol();
    RpcProtocol = class extends HttpProtocol {
      static {
        __name(this, "RpcProtocol");
      }
      async serializeRequest(operationSchema, _input, context) {
        const serializer = this.serializer;
        const query = {};
        const headers = {};
        const endpoint = await context.endpoint();
        const ns = NormalizedSchema.of(operationSchema?.input);
        const schema = ns.getSchema();
        let payload;
        const input = _input && typeof _input === "object" ? _input : {};
        const request2 = new HttpRequest({
          protocol: "",
          hostname: "",
          port: void 0,
          path: "/",
          fragment: void 0,
          query,
          headers,
          body: void 0
        });
        if (endpoint) {
          this.updateServiceEndpoint(request2, endpoint);
          this.setHostPrefix(request2, operationSchema, input);
        }
        if (input) {
          const eventStreamMember = ns.getEventStreamMember();
          if (eventStreamMember) {
            if (input[eventStreamMember]) {
              const initialRequest = {};
              for (const [memberName, memberSchema] of ns.structIterator()) {
                if (memberName !== eventStreamMember && input[memberName]) {
                  serializer.write(memberSchema, input[memberName]);
                  initialRequest[memberName] = serializer.flush();
                }
              }
              payload = await this.serializeEventStream({
                eventStream: input[eventStreamMember],
                requestSchema: ns,
                initialRequest
              });
            }
          } else {
            serializer.write(schema, input);
            payload = serializer.flush();
          }
        }
        request2.headers = Object.assign(request2.headers, headers);
        request2.query = query;
        request2.body = payload;
        request2.method = "POST";
        return request2;
      }
      async deserializeResponse(operationSchema, context, response) {
        const deserializer = this.deserializer;
        const ns = NormalizedSchema.of(operationSchema.output);
        const dataObject = {};
        if (response.statusCode >= 300) {
          const bytes = await collectBody(response.body, context);
          if (bytes.byteLength > 0) {
            Object.assign(dataObject, await deserializer.read(15, bytes));
          }
          await this.handleError(operationSchema, context, response, dataObject, this.deserializeMetadata(response));
          throw new Error("@smithy/core/protocols - RPC Protocol error handler failed to throw.");
        }
        for (const header in response.headers) {
          const value = response.headers[header];
          delete response.headers[header];
          response.headers[header.toLowerCase()] = value;
        }
        const eventStreamMember = ns.getEventStreamMember();
        if (eventStreamMember) {
          dataObject[eventStreamMember] = await this.deserializeEventStream({
            response,
            responseSchema: ns,
            initialResponseContainer: dataObject
          });
        } else {
          const bytes = await collectBody(response.body, context);
          if (bytes.byteLength > 0) {
            Object.assign(dataObject, await deserializer.read(ns, bytes));
          }
        }
        dataObject.$metadata = this.deserializeMetadata(response);
        return dataObject;
      }
    };
  }
});

// node_modules/@smithy/core/dist-es/submodules/protocols/resolve-path.js
var init_resolve_path = __esm({
  "node_modules/@smithy/core/dist-es/submodules/protocols/resolve-path.js"() {
  }
});

// node_modules/@smithy/core/dist-es/submodules/protocols/requestBuilder.js
var init_requestBuilder = __esm({
  "node_modules/@smithy/core/dist-es/submodules/protocols/requestBuilder.js"() {
  }
});

// node_modules/@smithy/core/dist-es/submodules/protocols/serde/determineTimestampFormat.js
function determineTimestampFormat(ns, settings) {
  if (settings.timestampFormat.useTrait) {
    if (ns.isTimestampSchema() && (ns.getSchema() === 5 || ns.getSchema() === 6 || ns.getSchema() === 7)) {
      return ns.getSchema();
    }
  }
  const { httpLabel, httpPrefixHeaders, httpHeader, httpQuery } = ns.getMergedTraits();
  const bindingFormat = settings.httpBindings ? typeof httpPrefixHeaders === "string" || Boolean(httpHeader) ? 6 : Boolean(httpQuery) || Boolean(httpLabel) ? 5 : void 0 : void 0;
  return bindingFormat ?? settings.timestampFormat.default;
}
var init_determineTimestampFormat = __esm({
  "node_modules/@smithy/core/dist-es/submodules/protocols/serde/determineTimestampFormat.js"() {
    __name(determineTimestampFormat, "determineTimestampFormat");
  }
});

// node_modules/@smithy/core/dist-es/submodules/protocols/serde/FromStringShapeDeserializer.js
var FromStringShapeDeserializer;
var init_FromStringShapeDeserializer = __esm({
  "node_modules/@smithy/core/dist-es/submodules/protocols/serde/FromStringShapeDeserializer.js"() {
    init_schema2();
    init_serde2();
    init_dist_es10();
    init_dist_es9();
    init_SerdeContext();
    init_determineTimestampFormat();
    FromStringShapeDeserializer = class extends SerdeContext {
      static {
        __name(this, "FromStringShapeDeserializer");
      }
      settings;
      constructor(settings) {
        super();
        this.settings = settings;
      }
      read(_schema, data) {
        const ns = NormalizedSchema.of(_schema);
        if (ns.isListSchema()) {
          return splitHeader(data).map((item) => this.read(ns.getValueSchema(), item));
        }
        if (ns.isBlobSchema()) {
          return (this.serdeContext?.base64Decoder ?? fromBase64)(data);
        }
        if (ns.isTimestampSchema()) {
          const format2 = determineTimestampFormat(ns, this.settings);
          switch (format2) {
            case 5:
              return _parseRfc3339DateTimeWithOffset(data);
            case 6:
              return _parseRfc7231DateTime(data);
            case 7:
              return _parseEpochTimestamp(data);
            default:
              console.warn("Missing timestamp format, parsing value with Date constructor:", data);
              return new Date(data);
          }
        }
        if (ns.isStringSchema()) {
          const mediaType = ns.getMergedTraits().mediaType;
          let intermediateValue = data;
          if (mediaType) {
            if (ns.getMergedTraits().httpHeader) {
              intermediateValue = this.base64ToUtf8(intermediateValue);
            }
            const isJson = mediaType === "application/json" || mediaType.endsWith("+json");
            if (isJson) {
              intermediateValue = LazyJsonString.from(intermediateValue);
            }
            return intermediateValue;
          }
        }
        if (ns.isNumericSchema()) {
          return Number(data);
        }
        if (ns.isBigIntegerSchema()) {
          return BigInt(data);
        }
        if (ns.isBigDecimalSchema()) {
          return new NumericValue(data, "bigDecimal");
        }
        if (ns.isBooleanSchema()) {
          return String(data).toLowerCase() === "true";
        }
        return data;
      }
      base64ToUtf8(base64String) {
        return (this.serdeContext?.utf8Encoder ?? toUtf8)((this.serdeContext?.base64Decoder ?? fromBase64)(base64String));
      }
    };
  }
});

// node_modules/@smithy/core/dist-es/submodules/protocols/serde/HttpInterceptingShapeDeserializer.js
var HttpInterceptingShapeDeserializer;
var init_HttpInterceptingShapeDeserializer = __esm({
  "node_modules/@smithy/core/dist-es/submodules/protocols/serde/HttpInterceptingShapeDeserializer.js"() {
    init_schema2();
    init_dist_es9();
    init_SerdeContext();
    init_FromStringShapeDeserializer();
    HttpInterceptingShapeDeserializer = class extends SerdeContext {
      static {
        __name(this, "HttpInterceptingShapeDeserializer");
      }
      codecDeserializer;
      stringDeserializer;
      constructor(codecDeserializer, codecSettings) {
        super();
        this.codecDeserializer = codecDeserializer;
        this.stringDeserializer = new FromStringShapeDeserializer(codecSettings);
      }
      setSerdeContext(serdeContext) {
        this.stringDeserializer.setSerdeContext(serdeContext);
        this.codecDeserializer.setSerdeContext(serdeContext);
        this.serdeContext = serdeContext;
      }
      read(schema, data) {
        const ns = NormalizedSchema.of(schema);
        const traits = ns.getMergedTraits();
        const toString = this.serdeContext?.utf8Encoder ?? toUtf8;
        if (traits.httpHeader || traits.httpResponseCode) {
          return this.stringDeserializer.read(ns, toString(data));
        }
        if (traits.httpPayload) {
          if (ns.isBlobSchema()) {
            const toBytes = this.serdeContext?.utf8Decoder ?? fromUtf8;
            if (typeof data === "string") {
              return toBytes(data);
            }
            return data;
          } else if (ns.isStringSchema()) {
            if ("byteLength" in data) {
              return toString(data);
            }
            return data;
          }
        }
        return this.codecDeserializer.read(ns, data);
      }
    };
  }
});

// node_modules/@smithy/core/dist-es/submodules/protocols/serde/ToStringShapeSerializer.js
var ToStringShapeSerializer;
var init_ToStringShapeSerializer = __esm({
  "node_modules/@smithy/core/dist-es/submodules/protocols/serde/ToStringShapeSerializer.js"() {
    init_schema2();
    init_serde2();
    init_dist_es10();
    init_SerdeContext();
    init_determineTimestampFormat();
    ToStringShapeSerializer = class extends SerdeContext {
      static {
        __name(this, "ToStringShapeSerializer");
      }
      settings;
      stringBuffer = "";
      constructor(settings) {
        super();
        this.settings = settings;
      }
      write(schema, value) {
        const ns = NormalizedSchema.of(schema);
        switch (typeof value) {
          case "object":
            if (value === null) {
              this.stringBuffer = "null";
              return;
            }
            if (ns.isTimestampSchema()) {
              if (!(value instanceof Date)) {
                throw new Error(`@smithy/core/protocols - received non-Date value ${value} when schema expected Date in ${ns.getName(true)}`);
              }
              const format2 = determineTimestampFormat(ns, this.settings);
              switch (format2) {
                case 5:
                  this.stringBuffer = value.toISOString().replace(".000Z", "Z");
                  break;
                case 6:
                  this.stringBuffer = dateToUtcString(value);
                  break;
                case 7:
                  this.stringBuffer = String(value.getTime() / 1e3);
                  break;
                default:
                  console.warn("Missing timestamp format, using epoch seconds", value);
                  this.stringBuffer = String(value.getTime() / 1e3);
              }
              return;
            }
            if (ns.isBlobSchema() && "byteLength" in value) {
              this.stringBuffer = (this.serdeContext?.base64Encoder ?? toBase64)(value);
              return;
            }
            if (ns.isListSchema() && Array.isArray(value)) {
              let buffer = "";
              for (const item of value) {
                this.write([ns.getValueSchema(), ns.getMergedTraits()], item);
                const headerItem = this.flush();
                const serialized = ns.getValueSchema().isTimestampSchema() ? headerItem : quoteHeader(headerItem);
                if (buffer !== "") {
                  buffer += ", ";
                }
                buffer += serialized;
              }
              this.stringBuffer = buffer;
              return;
            }
            this.stringBuffer = JSON.stringify(value, null, 2);
            break;
          case "string":
            const mediaType = ns.getMergedTraits().mediaType;
            let intermediateValue = value;
            if (mediaType) {
              const isJson = mediaType === "application/json" || mediaType.endsWith("+json");
              if (isJson) {
                intermediateValue = LazyJsonString.from(intermediateValue);
              }
              if (ns.getMergedTraits().httpHeader) {
                this.stringBuffer = (this.serdeContext?.base64Encoder ?? toBase64)(intermediateValue.toString());
                return;
              }
            }
            this.stringBuffer = value;
            break;
          default:
            if (ns.isIdempotencyToken()) {
              this.stringBuffer = v4();
            } else {
              this.stringBuffer = String(value);
            }
        }
      }
      flush() {
        const buffer = this.stringBuffer;
        this.stringBuffer = "";
        return buffer;
      }
    };
  }
});

// node_modules/@smithy/core/dist-es/submodules/protocols/serde/HttpInterceptingShapeSerializer.js
var HttpInterceptingShapeSerializer;
var init_HttpInterceptingShapeSerializer = __esm({
  "node_modules/@smithy/core/dist-es/submodules/protocols/serde/HttpInterceptingShapeSerializer.js"() {
    init_schema2();
    init_ToStringShapeSerializer();
    HttpInterceptingShapeSerializer = class {
      static {
        __name(this, "HttpInterceptingShapeSerializer");
      }
      codecSerializer;
      stringSerializer;
      buffer;
      constructor(codecSerializer, codecSettings, stringSerializer = new ToStringShapeSerializer(codecSettings)) {
        this.codecSerializer = codecSerializer;
        this.stringSerializer = stringSerializer;
      }
      setSerdeContext(serdeContext) {
        this.codecSerializer.setSerdeContext(serdeContext);
        this.stringSerializer.setSerdeContext(serdeContext);
      }
      write(schema, value) {
        const ns = NormalizedSchema.of(schema);
        const traits = ns.getMergedTraits();
        if (traits.httpHeader || traits.httpLabel || traits.httpQuery) {
          this.stringSerializer.write(ns, value);
          this.buffer = this.stringSerializer.flush();
          return;
        }
        return this.codecSerializer.write(ns, value);
      }
      flush() {
        if (this.buffer !== void 0) {
          const buffer = this.buffer;
          this.buffer = void 0;
          return buffer;
        }
        return this.codecSerializer.flush();
      }
    };
  }
});

// node_modules/@smithy/core/dist-es/submodules/protocols/index.js
var init_protocols = __esm({
  "node_modules/@smithy/core/dist-es/submodules/protocols/index.js"() {
    init_collect_stream_body();
    init_extended_encode_uri_component();
    init_HttpBindingProtocol();
    init_HttpProtocol();
    init_RpcProtocol();
    init_requestBuilder();
    init_resolve_path();
    init_FromStringShapeDeserializer();
    init_HttpInterceptingShapeDeserializer();
    init_HttpInterceptingShapeSerializer();
    init_ToStringShapeSerializer();
    init_determineTimestampFormat();
    init_SerdeContext();
  }
});

// node_modules/@smithy/core/dist-es/request-builder/requestBuilder.js
var init_requestBuilder2 = __esm({
  "node_modules/@smithy/core/dist-es/request-builder/requestBuilder.js"() {
  }
});

// node_modules/@smithy/core/dist-es/setFeature.js
function setFeature(context, feature, value) {
  if (!context.__smithy_context) {
    context.__smithy_context = {
      features: {}
    };
  } else if (!context.__smithy_context.features) {
    context.__smithy_context.features = {};
  }
  context.__smithy_context.features[feature] = value;
}
var init_setFeature = __esm({
  "node_modules/@smithy/core/dist-es/setFeature.js"() {
    __name(setFeature, "setFeature");
  }
});

// node_modules/@smithy/core/dist-es/util-identity-and-auth/DefaultIdentityProviderConfig.js
var DefaultIdentityProviderConfig;
var init_DefaultIdentityProviderConfig = __esm({
  "node_modules/@smithy/core/dist-es/util-identity-and-auth/DefaultIdentityProviderConfig.js"() {
    DefaultIdentityProviderConfig = class {
      static {
        __name(this, "DefaultIdentityProviderConfig");
      }
      authSchemes = /* @__PURE__ */ new Map();
      constructor(config) {
        for (const key in config) {
          const value = config[key];
          if (value !== void 0) {
            this.authSchemes.set(key, value);
          }
        }
      }
      getIdentityProvider(schemeId) {
        return this.authSchemes.get(schemeId);
      }
    };
  }
});

// node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/httpApiKeyAuth.js
var init_httpApiKeyAuth = __esm({
  "node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/httpApiKeyAuth.js"() {
  }
});

// node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/httpBearerAuth.js
var init_httpBearerAuth = __esm({
  "node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/httpBearerAuth.js"() {
  }
});

// node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/noAuth.js
var NoAuthSigner;
var init_noAuth = __esm({
  "node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/noAuth.js"() {
    NoAuthSigner = class {
      static {
        __name(this, "NoAuthSigner");
      }
      async sign(httpRequest2, identity, signingProperties) {
        return httpRequest2;
      }
    };
  }
});

// node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/index.js
var init_httpAuthSchemes = __esm({
  "node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/index.js"() {
    init_httpApiKeyAuth();
    init_httpBearerAuth();
    init_noAuth();
  }
});

// node_modules/@smithy/core/dist-es/util-identity-and-auth/memoizeIdentityProvider.js
var createIsIdentityExpiredFunction, EXPIRATION_MS, isIdentityExpired, doesIdentityRequireRefresh, memoizeIdentityProvider;
var init_memoizeIdentityProvider = __esm({
  "node_modules/@smithy/core/dist-es/util-identity-and-auth/memoizeIdentityProvider.js"() {
    createIsIdentityExpiredFunction = /* @__PURE__ */ __name((expirationMs) => /* @__PURE__ */ __name(function isIdentityExpired2(identity) {
      return doesIdentityRequireRefresh(identity) && identity.expiration.getTime() - Date.now() < expirationMs;
    }, "isIdentityExpired"), "createIsIdentityExpiredFunction");
    EXPIRATION_MS = 3e5;
    isIdentityExpired = createIsIdentityExpiredFunction(EXPIRATION_MS);
    doesIdentityRequireRefresh = /* @__PURE__ */ __name((identity) => identity.expiration !== void 0, "doesIdentityRequireRefresh");
    memoizeIdentityProvider = /* @__PURE__ */ __name((provider, isExpired, requiresRefresh) => {
      if (provider === void 0) {
        return void 0;
      }
      const normalizedProvider = typeof provider !== "function" ? async () => Promise.resolve(provider) : provider;
      let resolved;
      let pending;
      let hasResult;
      let isConstant = false;
      const coalesceProvider = /* @__PURE__ */ __name(async (options) => {
        if (!pending) {
          pending = normalizedProvider(options);
        }
        try {
          resolved = await pending;
          hasResult = true;
          isConstant = false;
        } finally {
          pending = void 0;
        }
        return resolved;
      }, "coalesceProvider");
      if (isExpired === void 0) {
        return async (options) => {
          if (!hasResult || options?.forceRefresh) {
            resolved = await coalesceProvider(options);
          }
          return resolved;
        };
      }
      return async (options) => {
        if (!hasResult || options?.forceRefresh) {
          resolved = await coalesceProvider(options);
        }
        if (isConstant) {
          return resolved;
        }
        if (!requiresRefresh(resolved)) {
          isConstant = true;
          return resolved;
        }
        if (isExpired(resolved)) {
          await coalesceProvider(options);
          return resolved;
        }
        return resolved;
      };
    }, "memoizeIdentityProvider");
  }
});

// node_modules/@smithy/core/dist-es/util-identity-and-auth/index.js
var init_util_identity_and_auth = __esm({
  "node_modules/@smithy/core/dist-es/util-identity-and-auth/index.js"() {
    init_DefaultIdentityProviderConfig();
    init_httpAuthSchemes();
    init_memoizeIdentityProvider();
  }
});

// node_modules/@smithy/core/dist-es/index.js
var init_dist_es20 = __esm({
  "node_modules/@smithy/core/dist-es/index.js"() {
    init_getSmithyContext();
    init_middleware_http_auth_scheme();
    init_middleware_http_signing();
    init_normalizeProvider2();
    init_requestBuilder2();
    init_setFeature();
    init_util_identity_and_auth();
  }
});

// node_modules/@aws-sdk/middleware-user-agent/dist-es/configurations.js
function isValidUserAgentAppId(appId) {
  if (appId === void 0) {
    return true;
  }
  return typeof appId === "string" && appId.length <= 50;
}
function resolveUserAgentConfig(input) {
  const normalizedAppIdProvider = normalizeProvider2(input.userAgentAppId ?? DEFAULT_UA_APP_ID);
  const { customUserAgent } = input;
  return Object.assign(input, {
    customUserAgent: typeof customUserAgent === "string" ? [[customUserAgent]] : customUserAgent,
    userAgentAppId: /* @__PURE__ */ __name(async () => {
      const appId = await normalizedAppIdProvider();
      if (!isValidUserAgentAppId(appId)) {
        const logger2 = input.logger?.constructor?.name === "NoOpLogger" || !input.logger ? console : input.logger;
        if (typeof appId !== "string") {
          logger2?.warn("userAgentAppId must be a string or undefined.");
        } else if (appId.length > 50) {
          logger2?.warn("The provided userAgentAppId exceeds the maximum length of 50 characters.");
        }
      }
      return appId;
    }, "userAgentAppId")
  });
}
var DEFAULT_UA_APP_ID;
var init_configurations = __esm({
  "node_modules/@aws-sdk/middleware-user-agent/dist-es/configurations.js"() {
    init_dist_es20();
    DEFAULT_UA_APP_ID = void 0;
    __name(isValidUserAgentAppId, "isValidUserAgentAppId");
    __name(resolveUserAgentConfig, "resolveUserAgentConfig");
  }
});

// node_modules/@smithy/util-endpoints/dist-es/bdd/BinaryDecisionDiagram.js
var BinaryDecisionDiagram;
var init_BinaryDecisionDiagram = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/bdd/BinaryDecisionDiagram.js"() {
    BinaryDecisionDiagram = class _BinaryDecisionDiagram {
      static {
        __name(this, "BinaryDecisionDiagram");
      }
      nodes;
      root;
      conditions;
      results;
      constructor(bdd6, root6, conditions, results) {
        this.nodes = bdd6;
        this.root = root6;
        this.conditions = conditions;
        this.results = results;
      }
      static from(bdd6, root6, conditions, results) {
        return new _BinaryDecisionDiagram(bdd6, root6, conditions, results);
      }
    };
  }
});

// node_modules/@smithy/util-endpoints/dist-es/cache/EndpointCache.js
var EndpointCache;
var init_EndpointCache = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/cache/EndpointCache.js"() {
    EndpointCache = class {
      static {
        __name(this, "EndpointCache");
      }
      capacity;
      data = /* @__PURE__ */ new Map();
      parameters = [];
      constructor({ size, params }) {
        this.capacity = size ?? 50;
        if (params) {
          this.parameters = params;
        }
      }
      get(endpointParams, resolver) {
        const key = this.hash(endpointParams);
        if (key === false) {
          return resolver();
        }
        if (!this.data.has(key)) {
          if (this.data.size > this.capacity + 10) {
            const keys = this.data.keys();
            let i6 = 0;
            while (true) {
              const { value, done } = keys.next();
              this.data.delete(value);
              if (done || ++i6 > 10) {
                break;
              }
            }
          }
          this.data.set(key, resolver());
        }
        return this.data.get(key);
      }
      size() {
        return this.data.size;
      }
      hash(endpointParams) {
        let buffer = "";
        const { parameters } = this;
        if (parameters.length === 0) {
          return false;
        }
        for (const param of parameters) {
          const val = String(endpointParams[param] ?? "");
          if (val.includes("|;")) {
            return false;
          }
          buffer += val + "|;";
        }
        return buffer;
      }
    };
  }
});

// node_modules/@smithy/util-endpoints/dist-es/types/EndpointError.js
var EndpointError;
var init_EndpointError = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/types/EndpointError.js"() {
    EndpointError = class extends Error {
      static {
        __name(this, "EndpointError");
      }
      constructor(message) {
        super(message);
        this.name = "EndpointError";
      }
    };
  }
});

// node_modules/@smithy/util-endpoints/dist-es/types/EndpointFunctions.js
var init_EndpointFunctions = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/types/EndpointFunctions.js"() {
  }
});

// node_modules/@smithy/util-endpoints/dist-es/types/EndpointRuleObject.js
var init_EndpointRuleObject2 = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/types/EndpointRuleObject.js"() {
  }
});

// node_modules/@smithy/util-endpoints/dist-es/types/ErrorRuleObject.js
var init_ErrorRuleObject2 = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/types/ErrorRuleObject.js"() {
  }
});

// node_modules/@smithy/util-endpoints/dist-es/types/RuleSetObject.js
var init_RuleSetObject2 = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/types/RuleSetObject.js"() {
  }
});

// node_modules/@smithy/util-endpoints/dist-es/types/TreeRuleObject.js
var init_TreeRuleObject2 = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/types/TreeRuleObject.js"() {
  }
});

// node_modules/@smithy/util-endpoints/dist-es/types/shared.js
var init_shared2 = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/types/shared.js"() {
  }
});

// node_modules/@smithy/util-endpoints/dist-es/types/index.js
var init_types2 = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/types/index.js"() {
    init_EndpointError();
    init_EndpointFunctions();
    init_EndpointRuleObject2();
    init_ErrorRuleObject2();
    init_RuleSetObject2();
    init_TreeRuleObject2();
    init_shared2();
  }
});

// node_modules/@smithy/util-endpoints/dist-es/debug/debugId.js
var debugId;
var init_debugId = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/debug/debugId.js"() {
    debugId = "endpoints";
  }
});

// node_modules/@smithy/util-endpoints/dist-es/debug/toDebugString.js
function toDebugString(input) {
  if (typeof input !== "object" || input == null) {
    return input;
  }
  if ("ref" in input) {
    return `$${toDebugString(input.ref)}`;
  }
  if ("fn" in input) {
    return `${input.fn}(${(input.argv || []).map(toDebugString).join(", ")})`;
  }
  return JSON.stringify(input, null, 2);
}
var init_toDebugString = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/debug/toDebugString.js"() {
    __name(toDebugString, "toDebugString");
  }
});

// node_modules/@smithy/util-endpoints/dist-es/debug/index.js
var init_debug = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/debug/index.js"() {
    init_debugId();
    init_toDebugString();
  }
});

// node_modules/@smithy/util-endpoints/dist-es/utils/customEndpointFunctions.js
var customEndpointFunctions;
var init_customEndpointFunctions = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/utils/customEndpointFunctions.js"() {
    customEndpointFunctions = {};
  }
});

// node_modules/@smithy/util-endpoints/dist-es/lib/booleanEquals.js
var booleanEquals;
var init_booleanEquals = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/lib/booleanEquals.js"() {
    booleanEquals = /* @__PURE__ */ __name((value1, value2) => value1 === value2, "booleanEquals");
  }
});

// node_modules/@smithy/util-endpoints/dist-es/lib/coalesce.js
function coalesce(...args) {
  for (const arg of args) {
    if (arg != null) {
      return arg;
    }
  }
  return void 0;
}
var init_coalesce = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/lib/coalesce.js"() {
    __name(coalesce, "coalesce");
  }
});

// node_modules/@smithy/util-endpoints/dist-es/lib/getAttrPathList.js
var getAttrPathList;
var init_getAttrPathList = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/lib/getAttrPathList.js"() {
    init_types2();
    getAttrPathList = /* @__PURE__ */ __name((path) => {
      const parts = path.split(".");
      const pathList = [];
      for (const part of parts) {
        const squareBracketIndex = part.indexOf("[");
        if (squareBracketIndex !== -1) {
          if (part.indexOf("]") !== part.length - 1) {
            throw new EndpointError(`Path: '${path}' does not end with ']'`);
          }
          const arrayIndex = part.slice(squareBracketIndex + 1, -1);
          if (Number.isNaN(parseInt(arrayIndex))) {
            throw new EndpointError(`Invalid array index: '${arrayIndex}' in path: '${path}'`);
          }
          if (squareBracketIndex !== 0) {
            pathList.push(part.slice(0, squareBracketIndex));
          }
          pathList.push(arrayIndex);
        } else {
          pathList.push(part);
        }
      }
      return pathList;
    }, "getAttrPathList");
  }
});

// node_modules/@smithy/util-endpoints/dist-es/lib/getAttr.js
var getAttr;
var init_getAttr = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/lib/getAttr.js"() {
    init_types2();
    init_getAttrPathList();
    getAttr = /* @__PURE__ */ __name((value, path) => getAttrPathList(path).reduce((acc, index) => {
      if (typeof acc !== "object") {
        throw new EndpointError(`Index '${index}' in '${path}' not found in '${JSON.stringify(value)}'`);
      } else if (Array.isArray(acc)) {
        const i6 = parseInt(index);
        return acc[i6 < 0 ? acc.length + i6 : i6];
      }
      return acc[index];
    }, value), "getAttr");
  }
});

// node_modules/@smithy/util-endpoints/dist-es/lib/isSet.js
var isSet;
var init_isSet = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/lib/isSet.js"() {
    isSet = /* @__PURE__ */ __name((value) => value != null, "isSet");
  }
});

// node_modules/@smithy/util-endpoints/dist-es/lib/isValidHostLabel.js
var VALID_HOST_LABEL_REGEX, isValidHostLabel;
var init_isValidHostLabel = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/lib/isValidHostLabel.js"() {
    VALID_HOST_LABEL_REGEX = new RegExp(`^(?!.*-$)(?!-)[a-zA-Z0-9-]{1,63}$`);
    isValidHostLabel = /* @__PURE__ */ __name((value, allowSubDomains = false) => {
      if (!allowSubDomains) {
        return VALID_HOST_LABEL_REGEX.test(value);
      }
      const labels = value.split(".");
      for (const label of labels) {
        if (!isValidHostLabel(label)) {
          return false;
        }
      }
      return true;
    }, "isValidHostLabel");
  }
});

// node_modules/@smithy/util-endpoints/dist-es/lib/ite.js
function ite(condition, trueValue, falseValue) {
  return condition ? trueValue : falseValue;
}
var init_ite = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/lib/ite.js"() {
    __name(ite, "ite");
  }
});

// node_modules/@smithy/util-endpoints/dist-es/lib/not.js
var not;
var init_not = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/lib/not.js"() {
    not = /* @__PURE__ */ __name((value) => !value, "not");
  }
});

// node_modules/@smithy/util-endpoints/dist-es/lib/isIpAddress.js
var IP_V4_REGEX, isIpAddress;
var init_isIpAddress = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/lib/isIpAddress.js"() {
    IP_V4_REGEX = new RegExp(`^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$`);
    isIpAddress = /* @__PURE__ */ __name((value) => IP_V4_REGEX.test(value) || value.startsWith("[") && value.endsWith("]"), "isIpAddress");
  }
});

// node_modules/@smithy/util-endpoints/dist-es/lib/parseURL.js
var DEFAULT_PORTS, parseURL;
var init_parseURL = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/lib/parseURL.js"() {
    init_dist_es();
    init_isIpAddress();
    DEFAULT_PORTS = {
      [EndpointURLScheme.HTTP]: 80,
      [EndpointURLScheme.HTTPS]: 443
    };
    parseURL = /* @__PURE__ */ __name((value) => {
      const whatwgURL = (() => {
        try {
          if (value instanceof URL) {
            return value;
          }
          if (typeof value === "object" && "hostname" in value) {
            const { hostname: hostname2, port, protocol: protocol2 = "", path = "", query = {} } = value;
            const url = new URL(`${protocol2}//${hostname2}${port ? `:${port}` : ""}${path}`);
            url.search = Object.entries(query).map(([k6, v]) => `${k6}=${v}`).join("&");
            return url;
          }
          return new URL(value);
        } catch (error) {
          return null;
        }
      })();
      if (!whatwgURL) {
        console.error(`Unable to parse ${JSON.stringify(value)} as a whatwg URL.`);
        return null;
      }
      const urlString = whatwgURL.href;
      const { host, hostname, pathname, protocol, search } = whatwgURL;
      if (search) {
        return null;
      }
      const scheme = protocol.slice(0, -1);
      if (!Object.values(EndpointURLScheme).includes(scheme)) {
        return null;
      }
      const isIp = isIpAddress(hostname);
      const inputContainsDefaultPort = urlString.includes(`${host}:${DEFAULT_PORTS[scheme]}`) || typeof value === "string" && value.includes(`${host}:${DEFAULT_PORTS[scheme]}`);
      const authority = `${host}${inputContainsDefaultPort ? `:${DEFAULT_PORTS[scheme]}` : ``}`;
      return {
        scheme,
        authority,
        path: pathname,
        normalizedPath: pathname.endsWith("/") ? pathname : `${pathname}/`,
        isIp
      };
    }, "parseURL");
  }
});

// node_modules/@smithy/util-endpoints/dist-es/lib/split.js
function split(value, delimiter, limit) {
  if (limit === 1) {
    return [value];
  }
  if (value === "") {
    return [""];
  }
  const parts = value.split(delimiter);
  if (limit === 0) {
    return parts;
  }
  return parts.slice(0, limit - 1).concat(parts.slice(1).join(delimiter));
}
var init_split = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/lib/split.js"() {
    __name(split, "split");
  }
});

// node_modules/@smithy/util-endpoints/dist-es/lib/stringEquals.js
var stringEquals;
var init_stringEquals = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/lib/stringEquals.js"() {
    stringEquals = /* @__PURE__ */ __name((value1, value2) => value1 === value2, "stringEquals");
  }
});

// node_modules/@smithy/util-endpoints/dist-es/lib/substring.js
var substring;
var init_substring = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/lib/substring.js"() {
    substring = /* @__PURE__ */ __name((input, start, stop, reverse) => {
      if (input == null || start >= stop || input.length < stop || /[^\u0000-\u007f]/.test(input)) {
        return null;
      }
      if (!reverse) {
        return input.substring(start, stop);
      }
      return input.substring(input.length - stop, input.length - start);
    }, "substring");
  }
});

// node_modules/@smithy/util-endpoints/dist-es/lib/uriEncode.js
var uriEncode;
var init_uriEncode = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/lib/uriEncode.js"() {
    uriEncode = /* @__PURE__ */ __name((value) => encodeURIComponent(value).replace(/[!*'()]/g, (c6) => `%${c6.charCodeAt(0).toString(16).toUpperCase()}`), "uriEncode");
  }
});

// node_modules/@smithy/util-endpoints/dist-es/lib/index.js
var init_lib = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/lib/index.js"() {
    init_booleanEquals();
    init_coalesce();
    init_getAttr();
    init_isSet();
    init_isValidHostLabel();
    init_ite();
    init_not();
    init_parseURL();
    init_split();
    init_stringEquals();
    init_substring();
    init_uriEncode();
  }
});

// node_modules/@smithy/util-endpoints/dist-es/utils/endpointFunctions.js
var endpointFunctions;
var init_endpointFunctions = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/utils/endpointFunctions.js"() {
    init_lib();
    endpointFunctions = {
      booleanEquals,
      coalesce,
      getAttr,
      isSet,
      isValidHostLabel,
      ite,
      not,
      parseURL,
      split,
      stringEquals,
      substring,
      uriEncode
    };
  }
});

// node_modules/@smithy/util-endpoints/dist-es/utils/evaluateTemplate.js
var evaluateTemplate;
var init_evaluateTemplate = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/utils/evaluateTemplate.js"() {
    init_lib();
    evaluateTemplate = /* @__PURE__ */ __name((template, options) => {
      const evaluatedTemplateArr = [];
      const { referenceRecord, endpointParams } = options;
      let currentIndex = 0;
      while (currentIndex < template.length) {
        const openingBraceIndex = template.indexOf("{", currentIndex);
        if (openingBraceIndex === -1) {
          evaluatedTemplateArr.push(template.slice(currentIndex));
          break;
        }
        evaluatedTemplateArr.push(template.slice(currentIndex, openingBraceIndex));
        const closingBraceIndex = template.indexOf("}", openingBraceIndex);
        if (closingBraceIndex === -1) {
          evaluatedTemplateArr.push(template.slice(openingBraceIndex));
          break;
        }
        if (template[openingBraceIndex + 1] === "{" && template[closingBraceIndex + 1] === "}") {
          evaluatedTemplateArr.push(template.slice(openingBraceIndex + 1, closingBraceIndex));
          currentIndex = closingBraceIndex + 2;
        }
        const parameterName = template.substring(openingBraceIndex + 1, closingBraceIndex);
        if (parameterName.includes("#")) {
          const [refName, attrName] = parameterName.split("#");
          evaluatedTemplateArr.push(getAttr(referenceRecord[refName] ?? endpointParams[refName], attrName));
        } else {
          evaluatedTemplateArr.push(referenceRecord[parameterName] ?? endpointParams[parameterName]);
        }
        currentIndex = closingBraceIndex + 1;
      }
      return evaluatedTemplateArr.join("");
    }, "evaluateTemplate");
  }
});

// node_modules/@smithy/util-endpoints/dist-es/utils/getReferenceValue.js
var getReferenceValue;
var init_getReferenceValue = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/utils/getReferenceValue.js"() {
    getReferenceValue = /* @__PURE__ */ __name(({ ref }, options) => {
      return options.referenceRecord[ref] ?? options.endpointParams[ref];
    }, "getReferenceValue");
  }
});

// node_modules/@smithy/util-endpoints/dist-es/utils/evaluateExpression.js
var evaluateExpression, callFunction, group;
var init_evaluateExpression = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/utils/evaluateExpression.js"() {
    init_types2();
    init_customEndpointFunctions();
    init_endpointFunctions();
    init_evaluateTemplate();
    init_getReferenceValue();
    evaluateExpression = /* @__PURE__ */ __name((obj, keyName, options) => {
      if (typeof obj === "string") {
        return evaluateTemplate(obj, options);
      } else if (obj["fn"]) {
        return group.callFunction(obj, options);
      } else if (obj["ref"]) {
        return getReferenceValue(obj, options);
      }
      throw new EndpointError(`'${keyName}': ${String(obj)} is not a string, function or reference.`);
    }, "evaluateExpression");
    callFunction = /* @__PURE__ */ __name(({ fn, argv }, options) => {
      const evaluatedArgs = Array(argv.length);
      for (let i6 = 0; i6 < evaluatedArgs.length; ++i6) {
        const arg = argv[i6];
        if (typeof arg === "boolean" || typeof arg === "number") {
          evaluatedArgs[i6] = arg;
        } else {
          evaluatedArgs[i6] = group.evaluateExpression(arg, "arg", options);
        }
      }
      const namespaceSeparatorIndex = fn.indexOf(".");
      if (namespaceSeparatorIndex !== -1) {
        const namespaceFunctions = customEndpointFunctions[fn.slice(0, namespaceSeparatorIndex)];
        const customFunction = namespaceFunctions?.[fn.slice(namespaceSeparatorIndex + 1)];
        if (typeof customFunction === "function") {
          return customFunction(...evaluatedArgs);
        }
      }
      const callable = endpointFunctions[fn];
      if (typeof callable === "function") {
        return callable(...evaluatedArgs);
      }
      throw new Error(`function ${fn} not loaded in endpointFunctions.`);
    }, "callFunction");
    group = {
      evaluateExpression,
      callFunction
    };
  }
});

// node_modules/@smithy/util-endpoints/dist-es/utils/callFunction.js
var init_callFunction = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/utils/callFunction.js"() {
    init_evaluateExpression();
  }
});

// node_modules/@smithy/util-endpoints/dist-es/utils/evaluateCondition.js
var evaluateCondition;
var init_evaluateCondition = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/utils/evaluateCondition.js"() {
    init_debug();
    init_types2();
    init_callFunction();
    evaluateCondition = /* @__PURE__ */ __name((condition, options) => {
      const { assign } = condition;
      if (assign && assign in options.referenceRecord) {
        throw new EndpointError(`'${assign}' is already defined in Reference Record.`);
      }
      const value = callFunction(condition, options);
      options.logger?.debug?.(`${debugId} evaluateCondition: ${toDebugString(condition)} = ${toDebugString(value)}`);
      const result = value === "" ? true : !!value;
      if (assign != null) {
        return { result, toAssign: { name: assign, value } };
      }
      return { result };
    }, "evaluateCondition");
  }
});

// node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointHeaders.js
var getEndpointHeaders;
var init_getEndpointHeaders = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointHeaders.js"() {
    init_types2();
    init_evaluateExpression();
    getEndpointHeaders = /* @__PURE__ */ __name((headers, options) => Object.entries(headers ?? {}).reduce((acc, [headerKey, headerVal]) => {
      acc[headerKey] = headerVal.map((headerValEntry) => {
        const processedExpr = evaluateExpression(headerValEntry, "Header value entry", options);
        if (typeof processedExpr !== "string") {
          throw new EndpointError(`Header '${headerKey}' value '${processedExpr}' is not a string`);
        }
        return processedExpr;
      });
      return acc;
    }, {}), "getEndpointHeaders");
  }
});

// node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointProperties.js
var getEndpointProperties, getEndpointProperty, group2;
var init_getEndpointProperties = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointProperties.js"() {
    init_types2();
    init_evaluateTemplate();
    getEndpointProperties = /* @__PURE__ */ __name((properties, options) => Object.entries(properties).reduce((acc, [propertyKey, propertyVal]) => {
      acc[propertyKey] = group2.getEndpointProperty(propertyVal, options);
      return acc;
    }, {}), "getEndpointProperties");
    getEndpointProperty = /* @__PURE__ */ __name((property, options) => {
      if (Array.isArray(property)) {
        return property.map((propertyEntry) => getEndpointProperty(propertyEntry, options));
      }
      switch (typeof property) {
        case "string":
          return evaluateTemplate(property, options);
        case "object":
          if (property === null) {
            throw new EndpointError(`Unexpected endpoint property: ${property}`);
          }
          return group2.getEndpointProperties(property, options);
        case "boolean":
          return property;
        default:
          throw new EndpointError(`Unexpected endpoint property type: ${typeof property}`);
      }
    }, "getEndpointProperty");
    group2 = {
      getEndpointProperty,
      getEndpointProperties
    };
  }
});

// node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointUrl.js
var getEndpointUrl;
var init_getEndpointUrl = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointUrl.js"() {
    init_types2();
    init_evaluateExpression();
    getEndpointUrl = /* @__PURE__ */ __name((endpointUrl, options) => {
      const expression = evaluateExpression(endpointUrl, "Endpoint URL", options);
      if (typeof expression === "string") {
        try {
          return new URL(expression);
        } catch (error) {
          console.error(`Failed to construct URL with ${expression}`, error);
          throw error;
        }
      }
      throw new EndpointError(`Endpoint URL must be a string, got ${typeof expression}`);
    }, "getEndpointUrl");
  }
});

// node_modules/@smithy/util-endpoints/dist-es/decideEndpoint.js
var RESULT, decideEndpoint;
var init_decideEndpoint = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/decideEndpoint.js"() {
    init_types2();
    init_evaluateCondition();
    init_evaluateExpression();
    init_getEndpointHeaders();
    init_getEndpointProperties();
    init_getEndpointUrl();
    RESULT = 1e8;
    decideEndpoint = /* @__PURE__ */ __name((bdd6, options) => {
      const { nodes: nodes6, root: root6, results, conditions } = bdd6;
      let ref = root6;
      const referenceRecord = {};
      const closure = {
        referenceRecord,
        endpointParams: options.endpointParams,
        logger: options.logger
      };
      while (ref !== 1 && ref !== -1 && ref < RESULT) {
        const node_i = 3 * (Math.abs(ref) - 1);
        const [condition_i, highRef, lowRef] = [nodes6[node_i], nodes6[node_i + 1], nodes6[node_i + 2]];
        const [fn, argv, assign] = conditions[condition_i];
        const evaluation = evaluateCondition({ fn, assign, argv }, closure);
        if (evaluation.toAssign) {
          const { name, value } = evaluation.toAssign;
          referenceRecord[name] = value;
        }
        ref = ref >= 0 === evaluation.result ? highRef : lowRef;
      }
      if (ref >= RESULT) {
        const result = results[ref - RESULT];
        if (result[0] === -1) {
          const [, errorExpression] = result;
          throw new EndpointError(evaluateExpression(errorExpression, "Error", closure));
        }
        const [url, properties, headers] = result;
        return {
          url: getEndpointUrl(url, closure),
          properties: getEndpointProperties(properties, closure),
          headers: getEndpointHeaders(headers ?? {}, closure)
        };
      }
      throw new EndpointError(`No matching endpoint.`);
    }, "decideEndpoint");
  }
});

// node_modules/@smithy/util-endpoints/dist-es/resolveEndpoint.js
var init_resolveEndpoint = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/resolveEndpoint.js"() {
  }
});

// node_modules/@smithy/util-endpoints/dist-es/index.js
var init_dist_es21 = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/index.js"() {
    init_BinaryDecisionDiagram();
    init_EndpointCache();
    init_decideEndpoint();
    init_isIpAddress();
    init_isValidHostLabel();
    init_customEndpointFunctions();
    init_resolveEndpoint();
    init_types2();
  }
});

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/isIpAddress.js
var init_isIpAddress2 = __esm({
  "node_modules/@aws-sdk/util-endpoints/dist-es/lib/isIpAddress.js"() {
    init_dist_es21();
  }
});

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/isVirtualHostableS3Bucket.js
var isVirtualHostableS3Bucket;
var init_isVirtualHostableS3Bucket = __esm({
  "node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/isVirtualHostableS3Bucket.js"() {
    init_dist_es21();
    init_isIpAddress2();
    isVirtualHostableS3Bucket = /* @__PURE__ */ __name((value, allowSubDomains = false) => {
      if (allowSubDomains) {
        for (const label of value.split(".")) {
          if (!isVirtualHostableS3Bucket(label)) {
            return false;
          }
        }
        return true;
      }
      if (!isValidHostLabel(value)) {
        return false;
      }
      if (value.length < 3 || value.length > 63) {
        return false;
      }
      if (value !== value.toLowerCase()) {
        return false;
      }
      if (isIpAddress(value)) {
        return false;
      }
      return true;
    }, "isVirtualHostableS3Bucket");
  }
});

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/parseArn.js
var ARN_DELIMITER, RESOURCE_DELIMITER, parseArn;
var init_parseArn = __esm({
  "node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/parseArn.js"() {
    ARN_DELIMITER = ":";
    RESOURCE_DELIMITER = "/";
    parseArn = /* @__PURE__ */ __name((value) => {
      const segments = value.split(ARN_DELIMITER);
      if (segments.length < 6)
        return null;
      const [arn, partition2, service, region, accountId, ...resourcePath] = segments;
      if (arn !== "arn" || partition2 === "" || service === "" || resourcePath.join(ARN_DELIMITER) === "")
        return null;
      const resourceId = resourcePath.map((resource) => resource.split(RESOURCE_DELIMITER)).flat();
      return {
        partition: partition2,
        service,
        region,
        accountId,
        resourceId
      };
    }, "parseArn");
  }
});

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partitions.json
var partitions_default;
var init_partitions = __esm({
  "node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partitions.json"() {
    partitions_default = {
      partitions: [{
        id: "aws",
        outputs: {
          dnsSuffix: "amazonaws.com",
          dualStackDnsSuffix: "api.aws",
          implicitGlobalRegion: "us-east-1",
          name: "aws",
          supportsDualStack: true,
          supportsFIPS: true
        },
        regionRegex: "^(us|eu|ap|sa|ca|me|af|il|mx)\\-\\w+\\-\\d+$",
        regions: {
          "af-south-1": {
            description: "Africa (Cape Town)"
          },
          "ap-east-1": {
            description: "Asia Pacific (Hong Kong)"
          },
          "ap-east-2": {
            description: "Asia Pacific (Taipei)"
          },
          "ap-northeast-1": {
            description: "Asia Pacific (Tokyo)"
          },
          "ap-northeast-2": {
            description: "Asia Pacific (Seoul)"
          },
          "ap-northeast-3": {
            description: "Asia Pacific (Osaka)"
          },
          "ap-south-1": {
            description: "Asia Pacific (Mumbai)"
          },
          "ap-south-2": {
            description: "Asia Pacific (Hyderabad)"
          },
          "ap-southeast-1": {
            description: "Asia Pacific (Singapore)"
          },
          "ap-southeast-2": {
            description: "Asia Pacific (Sydney)"
          },
          "ap-southeast-3": {
            description: "Asia Pacific (Jakarta)"
          },
          "ap-southeast-4": {
            description: "Asia Pacific (Melbourne)"
          },
          "ap-southeast-5": {
            description: "Asia Pacific (Malaysia)"
          },
          "ap-southeast-6": {
            description: "Asia Pacific (New Zealand)"
          },
          "ap-southeast-7": {
            description: "Asia Pacific (Thailand)"
          },
          "aws-global": {
            description: "aws global region"
          },
          "ca-central-1": {
            description: "Canada (Central)"
          },
          "ca-west-1": {
            description: "Canada West (Calgary)"
          },
          "eu-central-1": {
            description: "Europe (Frankfurt)"
          },
          "eu-central-2": {
            description: "Europe (Zurich)"
          },
          "eu-north-1": {
            description: "Europe (Stockholm)"
          },
          "eu-south-1": {
            description: "Europe (Milan)"
          },
          "eu-south-2": {
            description: "Europe (Spain)"
          },
          "eu-west-1": {
            description: "Europe (Ireland)"
          },
          "eu-west-2": {
            description: "Europe (London)"
          },
          "eu-west-3": {
            description: "Europe (Paris)"
          },
          "il-central-1": {
            description: "Israel (Tel Aviv)"
          },
          "me-central-1": {
            description: "Middle East (UAE)"
          },
          "me-south-1": {
            description: "Middle East (Bahrain)"
          },
          "mx-central-1": {
            description: "Mexico (Central)"
          },
          "sa-east-1": {
            description: "South America (Sao Paulo)"
          },
          "us-east-1": {
            description: "US East (N. Virginia)"
          },
          "us-east-2": {
            description: "US East (Ohio)"
          },
          "us-west-1": {
            description: "US West (N. California)"
          },
          "us-west-2": {
            description: "US West (Oregon)"
          }
        }
      }, {
        id: "aws-cn",
        outputs: {
          dnsSuffix: "amazonaws.com.cn",
          dualStackDnsSuffix: "api.amazonwebservices.com.cn",
          implicitGlobalRegion: "cn-northwest-1",
          name: "aws-cn",
          supportsDualStack: true,
          supportsFIPS: true
        },
        regionRegex: "^cn\\-\\w+\\-\\d+$",
        regions: {
          "aws-cn-global": {
            description: "aws-cn global region"
          },
          "cn-north-1": {
            description: "China (Beijing)"
          },
          "cn-northwest-1": {
            description: "China (Ningxia)"
          }
        }
      }, {
        id: "aws-eusc",
        outputs: {
          dnsSuffix: "amazonaws.eu",
          dualStackDnsSuffix: "api.amazonwebservices.eu",
          implicitGlobalRegion: "eusc-de-east-1",
          name: "aws-eusc",
          supportsDualStack: true,
          supportsFIPS: true
        },
        regionRegex: "^eusc\\-(de)\\-\\w+\\-\\d+$",
        regions: {
          "eusc-de-east-1": {
            description: "AWS European Sovereign Cloud (Germany)"
          }
        }
      }, {
        id: "aws-iso",
        outputs: {
          dnsSuffix: "c2s.ic.gov",
          dualStackDnsSuffix: "api.aws.ic.gov",
          implicitGlobalRegion: "us-iso-east-1",
          name: "aws-iso",
          supportsDualStack: true,
          supportsFIPS: true
        },
        regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
        regions: {
          "aws-iso-global": {
            description: "aws-iso global region"
          },
          "us-iso-east-1": {
            description: "US ISO East"
          },
          "us-iso-west-1": {
            description: "US ISO WEST"
          }
        }
      }, {
        id: "aws-iso-b",
        outputs: {
          dnsSuffix: "sc2s.sgov.gov",
          dualStackDnsSuffix: "api.aws.scloud",
          implicitGlobalRegion: "us-isob-east-1",
          name: "aws-iso-b",
          supportsDualStack: true,
          supportsFIPS: true
        },
        regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
        regions: {
          "aws-iso-b-global": {
            description: "aws-iso-b global region"
          },
          "us-isob-east-1": {
            description: "US ISOB East (Ohio)"
          },
          "us-isob-west-1": {
            description: "US ISOB West"
          }
        }
      }, {
        id: "aws-iso-e",
        outputs: {
          dnsSuffix: "cloud.adc-e.uk",
          dualStackDnsSuffix: "api.cloud-aws.adc-e.uk",
          implicitGlobalRegion: "eu-isoe-west-1",
          name: "aws-iso-e",
          supportsDualStack: true,
          supportsFIPS: true
        },
        regionRegex: "^eu\\-isoe\\-\\w+\\-\\d+$",
        regions: {
          "aws-iso-e-global": {
            description: "aws-iso-e global region"
          },
          "eu-isoe-west-1": {
            description: "EU ISOE West"
          }
        }
      }, {
        id: "aws-iso-f",
        outputs: {
          dnsSuffix: "csp.hci.ic.gov",
          dualStackDnsSuffix: "api.aws.hci.ic.gov",
          implicitGlobalRegion: "us-isof-south-1",
          name: "aws-iso-f",
          supportsDualStack: true,
          supportsFIPS: true
        },
        regionRegex: "^us\\-isof\\-\\w+\\-\\d+$",
        regions: {
          "aws-iso-f-global": {
            description: "aws-iso-f global region"
          },
          "us-isof-east-1": {
            description: "US ISOF EAST"
          },
          "us-isof-south-1": {
            description: "US ISOF SOUTH"
          }
        }
      }, {
        id: "aws-us-gov",
        outputs: {
          dnsSuffix: "amazonaws.com",
          dualStackDnsSuffix: "api.aws",
          implicitGlobalRegion: "us-gov-west-1",
          name: "aws-us-gov",
          supportsDualStack: true,
          supportsFIPS: true
        },
        regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
        regions: {
          "aws-us-gov-global": {
            description: "aws-us-gov global region"
          },
          "us-gov-east-1": {
            description: "AWS GovCloud (US-East)"
          },
          "us-gov-west-1": {
            description: "AWS GovCloud (US-West)"
          }
        }
      }],
      version: "1.1"
    };
  }
});

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partition.js
var selectedPartitionsInfo, selectedUserAgentPrefix, partition, getUserAgentPrefix;
var init_partition = __esm({
  "node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partition.js"() {
    init_partitions();
    selectedPartitionsInfo = partitions_default;
    selectedUserAgentPrefix = "";
    partition = /* @__PURE__ */ __name((value) => {
      const { partitions } = selectedPartitionsInfo;
      for (const partition2 of partitions) {
        const { regions, outputs } = partition2;
        for (const [region, regionData] of Object.entries(regions)) {
          if (region === value) {
            return {
              ...outputs,
              ...regionData
            };
          }
        }
      }
      for (const partition2 of partitions) {
        const { regionRegex, outputs } = partition2;
        if (new RegExp(regionRegex).test(value)) {
          return {
            ...outputs
          };
        }
      }
      const DEFAULT_PARTITION = partitions.find((partition2) => partition2.id === "aws");
      if (!DEFAULT_PARTITION) {
        throw new Error("Provided region was not found in the partition array or regex, and default partition with id 'aws' doesn't exist.");
      }
      return {
        ...DEFAULT_PARTITION.outputs
      };
    }, "partition");
    getUserAgentPrefix = /* @__PURE__ */ __name(() => selectedUserAgentPrefix, "getUserAgentPrefix");
  }
});

// node_modules/@aws-sdk/util-endpoints/dist-es/aws.js
var awsEndpointFunctions;
var init_aws = __esm({
  "node_modules/@aws-sdk/util-endpoints/dist-es/aws.js"() {
    init_dist_es21();
    init_isVirtualHostableS3Bucket();
    init_parseArn();
    init_partition();
    awsEndpointFunctions = {
      isVirtualHostableS3Bucket,
      parseArn,
      partition
    };
    customEndpointFunctions.aws = awsEndpointFunctions;
  }
});

// node_modules/@aws-sdk/util-endpoints/dist-es/resolveDefaultAwsRegionalEndpointsConfig.js
var init_resolveDefaultAwsRegionalEndpointsConfig = __esm({
  "node_modules/@aws-sdk/util-endpoints/dist-es/resolveDefaultAwsRegionalEndpointsConfig.js"() {
  }
});

// node_modules/@aws-sdk/util-endpoints/dist-es/resolveEndpoint.js
var init_resolveEndpoint2 = __esm({
  "node_modules/@aws-sdk/util-endpoints/dist-es/resolveEndpoint.js"() {
  }
});

// node_modules/@aws-sdk/util-endpoints/dist-es/types/EndpointError.js
var init_EndpointError2 = __esm({
  "node_modules/@aws-sdk/util-endpoints/dist-es/types/EndpointError.js"() {
  }
});

// node_modules/@aws-sdk/util-endpoints/dist-es/types/EndpointRuleObject.js
var init_EndpointRuleObject3 = __esm({
  "node_modules/@aws-sdk/util-endpoints/dist-es/types/EndpointRuleObject.js"() {
  }
});

// node_modules/@aws-sdk/util-endpoints/dist-es/types/ErrorRuleObject.js
var init_ErrorRuleObject3 = __esm({
  "node_modules/@aws-sdk/util-endpoints/dist-es/types/ErrorRuleObject.js"() {
  }
});

// node_modules/@aws-sdk/util-endpoints/dist-es/types/RuleSetObject.js
var init_RuleSetObject3 = __esm({
  "node_modules/@aws-sdk/util-endpoints/dist-es/types/RuleSetObject.js"() {
  }
});

// node_modules/@aws-sdk/util-endpoints/dist-es/types/TreeRuleObject.js
var init_TreeRuleObject3 = __esm({
  "node_modules/@aws-sdk/util-endpoints/dist-es/types/TreeRuleObject.js"() {
  }
});

// node_modules/@aws-sdk/util-endpoints/dist-es/types/shared.js
var init_shared3 = __esm({
  "node_modules/@aws-sdk/util-endpoints/dist-es/types/shared.js"() {
  }
});

// node_modules/@aws-sdk/util-endpoints/dist-es/types/index.js
var init_types3 = __esm({
  "node_modules/@aws-sdk/util-endpoints/dist-es/types/index.js"() {
    init_EndpointError2();
    init_EndpointRuleObject3();
    init_ErrorRuleObject3();
    init_RuleSetObject3();
    init_TreeRuleObject3();
    init_shared3();
  }
});

// node_modules/@aws-sdk/util-endpoints/dist-es/index.js
var init_dist_es22 = __esm({
  "node_modules/@aws-sdk/util-endpoints/dist-es/index.js"() {
    init_aws();
    init_partition();
    init_isIpAddress2();
    init_resolveDefaultAwsRegionalEndpointsConfig();
    init_resolveEndpoint2();
    init_types3();
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/client/emitWarningIfUnsupportedVersion.js
var state, emitWarningIfUnsupportedVersion;
var init_emitWarningIfUnsupportedVersion = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/client/emitWarningIfUnsupportedVersion.js"() {
    state = {
      warningEmitted: false
    };
    emitWarningIfUnsupportedVersion = /* @__PURE__ */ __name((version) => {
      if (version && !state.warningEmitted && parseInt(version.substring(1, version.indexOf("."))) < 20) {
        state.warningEmitted = true;
        process.emitWarning(`NodeDeprecationWarning: The AWS SDK for JavaScript (v3) will
no longer support Node.js ${version} in January 2026.

To continue receiving updates to AWS services, bug fixes, and security
updates please upgrade to a supported Node.js LTS version.

More information can be found at: https://a.co/c895JFp`);
      }
    }, "emitWarningIfUnsupportedVersion");
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/client/setCredentialFeature.js
function setCredentialFeature(credentials, feature, value) {
  if (!credentials.$source) {
    credentials.$source = {};
  }
  credentials.$source[feature] = value;
  return credentials;
}
var init_setCredentialFeature = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/client/setCredentialFeature.js"() {
    __name(setCredentialFeature, "setCredentialFeature");
  }
});

// node_modules/@smithy/util-retry/dist-es/config.js
var RETRY_MODES, DEFAULT_MAX_ATTEMPTS, DEFAULT_RETRY_MODE;
var init_config2 = __esm({
  "node_modules/@smithy/util-retry/dist-es/config.js"() {
    (function(RETRY_MODES2) {
      RETRY_MODES2["STANDARD"] = "standard";
      RETRY_MODES2["ADAPTIVE"] = "adaptive";
    })(RETRY_MODES || (RETRY_MODES = {}));
    DEFAULT_MAX_ATTEMPTS = 3;
    DEFAULT_RETRY_MODE = RETRY_MODES.STANDARD;
  }
});

// node_modules/@smithy/service-error-classification/dist-es/constants.js
var THROTTLING_ERROR_CODES, TRANSIENT_ERROR_CODES, TRANSIENT_ERROR_STATUS_CODES, NODEJS_TIMEOUT_ERROR_CODES2, NODEJS_NETWORK_ERROR_CODES;
var init_constants2 = __esm({
  "node_modules/@smithy/service-error-classification/dist-es/constants.js"() {
    THROTTLING_ERROR_CODES = [
      "BandwidthLimitExceeded",
      "EC2ThrottledException",
      "LimitExceededException",
      "PriorRequestNotComplete",
      "ProvisionedThroughputExceededException",
      "RequestLimitExceeded",
      "RequestThrottled",
      "RequestThrottledException",
      "SlowDown",
      "ThrottledException",
      "Throttling",
      "ThrottlingException",
      "TooManyRequestsException",
      "TransactionInProgressException"
    ];
    TRANSIENT_ERROR_CODES = ["TimeoutError", "RequestTimeout", "RequestTimeoutException"];
    TRANSIENT_ERROR_STATUS_CODES = [500, 502, 503, 504];
    NODEJS_TIMEOUT_ERROR_CODES2 = ["ECONNRESET", "ECONNREFUSED", "EPIPE", "ETIMEDOUT"];
    NODEJS_NETWORK_ERROR_CODES = ["EHOSTUNREACH", "ENETUNREACH", "ENOTFOUND"];
  }
});

// node_modules/@smithy/service-error-classification/dist-es/index.js
function isNodeJsHttp2TransientError(error) {
  return error.code === "ERR_HTTP2_STREAM_ERROR" && error.message.includes("NGHTTP2_REFUSED_STREAM");
}
var isRetryableByTrait, isClockSkewCorrectedError, isBrowserNetworkError, isThrottlingError, isTransientError, isServerError;
var init_dist_es23 = __esm({
  "node_modules/@smithy/service-error-classification/dist-es/index.js"() {
    init_constants2();
    isRetryableByTrait = /* @__PURE__ */ __name((error) => error?.$retryable !== void 0, "isRetryableByTrait");
    isClockSkewCorrectedError = /* @__PURE__ */ __name((error) => error.$metadata?.clockSkewCorrected, "isClockSkewCorrectedError");
    isBrowserNetworkError = /* @__PURE__ */ __name((error) => {
      const errorMessages = /* @__PURE__ */ new Set([
        "Failed to fetch",
        "NetworkError when attempting to fetch resource",
        "The Internet connection appears to be offline",
        "Load failed",
        "Network request failed"
      ]);
      const isValid = error && error instanceof TypeError;
      if (!isValid) {
        return false;
      }
      return errorMessages.has(error.message);
    }, "isBrowserNetworkError");
    isThrottlingError = /* @__PURE__ */ __name((error) => error.$metadata?.httpStatusCode === 429 || THROTTLING_ERROR_CODES.includes(error.name) || error.$retryable?.throttling == true, "isThrottlingError");
    isTransientError = /* @__PURE__ */ __name((error, depth = 0) => isRetryableByTrait(error) || isClockSkewCorrectedError(error) || TRANSIENT_ERROR_CODES.includes(error.name) || NODEJS_TIMEOUT_ERROR_CODES2.includes(error?.code || "") || NODEJS_NETWORK_ERROR_CODES.includes(error?.code || "") || TRANSIENT_ERROR_STATUS_CODES.includes(error.$metadata?.httpStatusCode || 0) || isBrowserNetworkError(error) || isNodeJsHttp2TransientError(error) || error.cause !== void 0 && depth <= 10 && isTransientError(error.cause, depth + 1), "isTransientError");
    isServerError = /* @__PURE__ */ __name((error) => {
      if (error.$metadata?.httpStatusCode !== void 0) {
        const statusCode = error.$metadata.httpStatusCode;
        if (500 <= statusCode && statusCode <= 599 && !isTransientError(error)) {
          return true;
        }
        return false;
      }
      return false;
    }, "isServerError");
    __name(isNodeJsHttp2TransientError, "isNodeJsHttp2TransientError");
  }
});

// node_modules/@smithy/util-retry/dist-es/DefaultRateLimiter.js
var DefaultRateLimiter;
var init_DefaultRateLimiter = __esm({
  "node_modules/@smithy/util-retry/dist-es/DefaultRateLimiter.js"() {
    init_dist_es23();
    DefaultRateLimiter = class _DefaultRateLimiter {
      static {
        __name(this, "DefaultRateLimiter");
      }
      static setTimeoutFn = setTimeout;
      beta;
      minCapacity;
      minFillRate;
      scaleConstant;
      smooth;
      enabled = false;
      availableTokens = 0;
      lastMaxRate = 0;
      measuredTxRate = 0;
      requestCount = 0;
      fillRate;
      lastThrottleTime;
      lastTimestamp = 0;
      lastTxRateBucket;
      maxCapacity;
      timeWindow = 0;
      constructor(options) {
        this.beta = options?.beta ?? 0.7;
        this.minCapacity = options?.minCapacity ?? 1;
        this.minFillRate = options?.minFillRate ?? 0.5;
        this.scaleConstant = options?.scaleConstant ?? 0.4;
        this.smooth = options?.smooth ?? 0.8;
        this.lastThrottleTime = this.getCurrentTimeInSeconds();
        this.lastTxRateBucket = Math.floor(this.getCurrentTimeInSeconds());
        this.fillRate = this.minFillRate;
        this.maxCapacity = this.minCapacity;
      }
      async getSendToken() {
        return this.acquireTokenBucket(1);
      }
      updateClientSendingRate(response) {
        let calculatedRate;
        this.updateMeasuredRate();
        const retryErrorInfo = response;
        const isThrottling = retryErrorInfo?.errorType === "THROTTLING" || isThrottlingError(retryErrorInfo?.error ?? response);
        if (isThrottling) {
          const rateToUse = !this.enabled ? this.measuredTxRate : Math.min(this.measuredTxRate, this.fillRate);
          this.lastMaxRate = rateToUse;
          this.calculateTimeWindow();
          this.lastThrottleTime = this.getCurrentTimeInSeconds();
          calculatedRate = this.cubicThrottle(rateToUse);
          this.enableTokenBucket();
        } else {
          this.calculateTimeWindow();
          calculatedRate = this.cubicSuccess(this.getCurrentTimeInSeconds());
        }
        const newRate = Math.min(calculatedRate, 2 * this.measuredTxRate);
        this.updateTokenBucketRate(newRate);
      }
      getCurrentTimeInSeconds() {
        return Date.now() / 1e3;
      }
      async acquireTokenBucket(amount) {
        if (!this.enabled) {
          return;
        }
        this.refillTokenBucket();
        if (amount > this.availableTokens) {
          const delay = (amount - this.availableTokens) / this.fillRate * 1e3;
          await new Promise((resolve) => _DefaultRateLimiter.setTimeoutFn(resolve, delay));
        }
        this.availableTokens = this.availableTokens - amount;
      }
      refillTokenBucket() {
        const timestamp = this.getCurrentTimeInSeconds();
        if (!this.lastTimestamp) {
          this.lastTimestamp = timestamp;
          return;
        }
        const fillAmount = (timestamp - this.lastTimestamp) * this.fillRate;
        this.availableTokens = Math.min(this.maxCapacity, this.availableTokens + fillAmount);
        this.lastTimestamp = timestamp;
      }
      calculateTimeWindow() {
        this.timeWindow = this.getPrecise(Math.pow(this.lastMaxRate * (1 - this.beta) / this.scaleConstant, 1 / 3));
      }
      cubicThrottle(rateToUse) {
        return this.getPrecise(rateToUse * this.beta);
      }
      cubicSuccess(timestamp) {
        return this.getPrecise(this.scaleConstant * Math.pow(timestamp - this.lastThrottleTime - this.timeWindow, 3) + this.lastMaxRate);
      }
      enableTokenBucket() {
        this.enabled = true;
      }
      updateTokenBucketRate(newRate) {
        this.refillTokenBucket();
        this.fillRate = Math.max(newRate, this.minFillRate);
        this.maxCapacity = Math.max(newRate, this.minCapacity);
        this.availableTokens = Math.min(this.availableTokens, this.maxCapacity);
      }
      updateMeasuredRate() {
        const t = this.getCurrentTimeInSeconds();
        const timeBucket = Math.floor(t * 2) / 2;
        this.requestCount++;
        if (timeBucket > this.lastTxRateBucket) {
          const currentRate = this.requestCount / (timeBucket - this.lastTxRateBucket);
          this.measuredTxRate = this.getPrecise(currentRate * this.smooth + this.measuredTxRate * (1 - this.smooth));
          this.requestCount = 0;
          this.lastTxRateBucket = timeBucket;
        }
      }
      getPrecise(num) {
        return parseFloat(num.toFixed(8));
      }
    };
  }
});

// node_modules/@smithy/util-retry/dist-es/constants.js
var MAXIMUM_RETRY_DELAY, INITIAL_RETRY_TOKENS, NO_RETRY_INCREMENT, INVOCATION_ID_HEADER, REQUEST_HEADER;
var init_constants3 = __esm({
  "node_modules/@smithy/util-retry/dist-es/constants.js"() {
    MAXIMUM_RETRY_DELAY = 20 * 1e3;
    INITIAL_RETRY_TOKENS = 500;
    NO_RETRY_INCREMENT = 1;
    INVOCATION_ID_HEADER = "amz-sdk-invocation-id";
    REQUEST_HEADER = "amz-sdk-request";
  }
});

// node_modules/@smithy/util-retry/dist-es/retries-2026-config.js
var Retry;
var init_retries_2026_config = __esm({
  "node_modules/@smithy/util-retry/dist-es/retries-2026-config.js"() {
    Retry = class _Retry {
      static {
        __name(this, "Retry");
      }
      static v2026 = typeof process !== "undefined" && process.env?.SMITHY_NEW_RETRIES_2026 === "true";
      static delay() {
        return _Retry.v2026 ? 50 : 100;
      }
      static throttlingDelay() {
        return _Retry.v2026 ? 1e3 : 500;
      }
      static cost() {
        return _Retry.v2026 ? 14 : 5;
      }
      static throttlingCost() {
        return _Retry.v2026 ? 5 : 10;
      }
      static modifiedCostType() {
        return _Retry.v2026 ? "THROTTLING" : "TRANSIENT";
      }
    };
  }
});

// node_modules/@smithy/util-retry/dist-es/DefaultRetryBackoffStrategy.js
var DefaultRetryBackoffStrategy;
var init_DefaultRetryBackoffStrategy = __esm({
  "node_modules/@smithy/util-retry/dist-es/DefaultRetryBackoffStrategy.js"() {
    init_constants3();
    init_retries_2026_config();
    DefaultRetryBackoffStrategy = class {
      static {
        __name(this, "DefaultRetryBackoffStrategy");
      }
      x = Retry.delay();
      computeNextBackoffDelay(i6) {
        const b6 = Math.random();
        const r6 = 2;
        const t_i = b6 * Math.min(this.x * r6 ** i6, MAXIMUM_RETRY_DELAY);
        return Math.floor(t_i);
      }
      setDelayBase(delay) {
        this.x = delay;
      }
    };
  }
});

// node_modules/@smithy/util-retry/dist-es/DefaultRetryToken.js
var DefaultRetryToken;
var init_DefaultRetryToken = __esm({
  "node_modules/@smithy/util-retry/dist-es/DefaultRetryToken.js"() {
    init_constants3();
    DefaultRetryToken = class {
      static {
        __name(this, "DefaultRetryToken");
      }
      delay;
      count;
      cost;
      longPoll;
      constructor(delay, count, cost, longPoll) {
        this.delay = delay;
        this.count = count;
        this.cost = cost;
        this.longPoll = longPoll;
      }
      getRetryCount() {
        return this.count;
      }
      getRetryDelay() {
        return Math.min(MAXIMUM_RETRY_DELAY, this.delay);
      }
      getRetryCost() {
        return this.cost;
      }
      isLongPoll() {
        return this.longPoll;
      }
    };
  }
});

// node_modules/@smithy/util-retry/dist-es/StandardRetryStrategy.js
var StandardRetryStrategy;
var init_StandardRetryStrategy = __esm({
  "node_modules/@smithy/util-retry/dist-es/StandardRetryStrategy.js"() {
    init_config2();
    init_constants3();
    init_DefaultRetryBackoffStrategy();
    init_DefaultRetryToken();
    init_retries_2026_config();
    StandardRetryStrategy = class {
      static {
        __name(this, "StandardRetryStrategy");
      }
      mode = RETRY_MODES.STANDARD;
      capacity = INITIAL_RETRY_TOKENS;
      retryBackoffStrategy;
      maxAttemptsProvider;
      baseDelay;
      constructor(arg1) {
        if (typeof arg1 === "number") {
          this.maxAttemptsProvider = async () => arg1;
        } else if (typeof arg1 === "function") {
          this.maxAttemptsProvider = arg1;
        } else if (arg1 && typeof arg1 === "object") {
          this.maxAttemptsProvider = async () => arg1.maxAttempts;
          this.baseDelay = arg1.baseDelay;
          this.retryBackoffStrategy = arg1.backoff;
        }
        this.maxAttemptsProvider ??= async () => DEFAULT_MAX_ATTEMPTS;
        this.baseDelay ??= Retry.delay();
        this.retryBackoffStrategy ??= new DefaultRetryBackoffStrategy();
      }
      async acquireInitialRetryToken(retryTokenScope) {
        return new DefaultRetryToken(Retry.delay(), 0, void 0, Retry.v2026 && retryTokenScope.includes(":longpoll"));
      }
      async refreshRetryTokenForRetry(token, errorInfo) {
        const maxAttempts = await this.getMaxAttempts();
        const shouldRetry = this.shouldRetry(token, errorInfo, maxAttempts);
        if (shouldRetry || token.isLongPoll?.()) {
          const errorType = errorInfo.errorType;
          this.retryBackoffStrategy.setDelayBase(errorType === "THROTTLING" ? Retry.throttlingDelay() : this.baseDelay);
          const delayFromErrorType = this.retryBackoffStrategy.computeNextBackoffDelay(token.getRetryCount());
          let retryDelay = delayFromErrorType;
          if (errorInfo.retryAfterHint instanceof Date) {
            retryDelay = Math.max(delayFromErrorType, Math.min(errorInfo.retryAfterHint.getTime() - Date.now(), delayFromErrorType + 5e3));
          }
          if (!shouldRetry) {
            throw Object.assign(new Error("No retry token available"), { $backoff: Retry.v2026 ? retryDelay : 0 });
          } else {
            const capacityCost = this.getCapacityCost(errorType);
            this.capacity -= capacityCost;
            return new DefaultRetryToken(retryDelay, token.getRetryCount() + 1, capacityCost, token.isLongPoll?.() ?? false);
          }
        }
        throw new Error("No retry token available");
      }
      recordSuccess(token) {
        this.capacity = Math.min(INITIAL_RETRY_TOKENS, this.capacity + (token.getRetryCost() ?? NO_RETRY_INCREMENT));
      }
      getCapacity() {
        return this.capacity;
      }
      async getMaxAttempts() {
        try {
          return await this.maxAttemptsProvider();
        } catch (error) {
          console.warn(`Max attempts provider could not resolve. Using default of ${DEFAULT_MAX_ATTEMPTS}`);
          return DEFAULT_MAX_ATTEMPTS;
        }
      }
      shouldRetry(tokenToRenew, errorInfo, maxAttempts) {
        const attempts = tokenToRenew.getRetryCount() + 1;
        return attempts < maxAttempts && this.capacity >= this.getCapacityCost(errorInfo.errorType) && this.isRetryableError(errorInfo.errorType);
      }
      getCapacityCost(errorType) {
        return errorType === Retry.modifiedCostType() ? Retry.throttlingCost() : Retry.cost();
      }
      isRetryableError(errorType) {
        return errorType === "THROTTLING" || errorType === "TRANSIENT";
      }
      async maxAttempts() {
        return this.maxAttemptsProvider();
      }
    };
  }
});

// node_modules/@smithy/util-retry/dist-es/AdaptiveRetryStrategy.js
var AdaptiveRetryStrategy;
var init_AdaptiveRetryStrategy = __esm({
  "node_modules/@smithy/util-retry/dist-es/AdaptiveRetryStrategy.js"() {
    init_config2();
    init_DefaultRateLimiter();
    init_StandardRetryStrategy();
    AdaptiveRetryStrategy = class {
      static {
        __name(this, "AdaptiveRetryStrategy");
      }
      mode = RETRY_MODES.ADAPTIVE;
      rateLimiter;
      standardRetryStrategy;
      constructor(maxAttemptsProvider, options) {
        const { rateLimiter } = options ?? {};
        this.rateLimiter = rateLimiter ?? new DefaultRateLimiter();
        this.standardRetryStrategy = options ? new StandardRetryStrategy({
          maxAttempts: typeof maxAttemptsProvider === "number" ? maxAttemptsProvider : 3,
          ...options
        }) : new StandardRetryStrategy(maxAttemptsProvider);
      }
      async acquireInitialRetryToken(retryTokenScope) {
        await this.rateLimiter.getSendToken();
        return this.standardRetryStrategy.acquireInitialRetryToken(retryTokenScope);
      }
      async refreshRetryTokenForRetry(tokenToRenew, errorInfo) {
        this.rateLimiter.updateClientSendingRate(errorInfo);
        return this.standardRetryStrategy.refreshRetryTokenForRetry(tokenToRenew, errorInfo);
      }
      recordSuccess(token) {
        this.rateLimiter.updateClientSendingRate({});
        this.standardRetryStrategy.recordSuccess(token);
      }
      async maxAttemptsProvider() {
        return this.standardRetryStrategy.maxAttempts();
      }
    };
  }
});

// node_modules/@smithy/util-retry/dist-es/ConfiguredRetryStrategy.js
var init_ConfiguredRetryStrategy = __esm({
  "node_modules/@smithy/util-retry/dist-es/ConfiguredRetryStrategy.js"() {
  }
});

// node_modules/@smithy/util-retry/dist-es/types.js
var init_types4 = __esm({
  "node_modules/@smithy/util-retry/dist-es/types.js"() {
  }
});

// node_modules/@smithy/util-retry/dist-es/index.js
var init_dist_es24 = __esm({
  "node_modules/@smithy/util-retry/dist-es/index.js"() {
    init_AdaptiveRetryStrategy();
    init_ConfiguredRetryStrategy();
    init_DefaultRateLimiter();
    init_StandardRetryStrategy();
    init_config2();
    init_constants3();
    init_types4();
    init_retries_2026_config();
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/client/setFeature.js
function setFeature2(context, feature, value) {
  if (!context.__aws_sdk_context) {
    context.__aws_sdk_context = {
      features: {}
    };
  } else if (!context.__aws_sdk_context.features) {
    context.__aws_sdk_context.features = {};
  }
  context.__aws_sdk_context.features[feature] = value;
}
var init_setFeature2 = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/client/setFeature.js"() {
    init_dist_es24();
    Retry.v2026 ||= typeof process === "object" && process.env?.AWS_NEW_RETRIES_2026 === "true";
    __name(setFeature2, "setFeature");
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/client/setTokenFeature.js
var init_setTokenFeature = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/client/setTokenFeature.js"() {
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/client/index.js
var init_client2 = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/client/index.js"() {
    init_emitWarningIfUnsupportedVersion();
    init_setCredentialFeature();
    init_setFeature2();
    init_setTokenFeature();
  }
});

// node_modules/@aws-sdk/middleware-user-agent/dist-es/check-features.js
async function checkFeatures(context, config, args) {
  const request2 = args.request;
  if (request2?.headers?.["smithy-protocol"] === "rpc-v2-cbor") {
    setFeature2(context, "PROTOCOL_RPC_V2_CBOR", "M");
  }
  if (typeof config.retryStrategy === "function") {
    const retryStrategy = await config.retryStrategy();
    if (typeof retryStrategy.mode === "string") {
      switch (retryStrategy.mode) {
        case RETRY_MODES.ADAPTIVE:
          setFeature2(context, "RETRY_MODE_ADAPTIVE", "F");
          break;
        case RETRY_MODES.STANDARD:
          setFeature2(context, "RETRY_MODE_STANDARD", "E");
          break;
      }
    }
  }
  if (typeof config.accountIdEndpointMode === "function") {
    const endpointV2 = context.endpointV2;
    if (String(endpointV2?.url?.hostname).match(ACCOUNT_ID_ENDPOINT_REGEX)) {
      setFeature2(context, "ACCOUNT_ID_ENDPOINT", "O");
    }
    switch (await config.accountIdEndpointMode?.()) {
      case "disabled":
        setFeature2(context, "ACCOUNT_ID_MODE_DISABLED", "Q");
        break;
      case "preferred":
        setFeature2(context, "ACCOUNT_ID_MODE_PREFERRED", "P");
        break;
      case "required":
        setFeature2(context, "ACCOUNT_ID_MODE_REQUIRED", "R");
        break;
    }
  }
  const identity = context.__smithy_context?.selectedHttpAuthScheme?.identity;
  if (identity?.$source) {
    const credentials = identity;
    if (credentials.accountId) {
      setFeature2(context, "RESOLVED_ACCOUNT_ID", "T");
    }
    for (const [key, value] of Object.entries(credentials.$source ?? {})) {
      setFeature2(context, key, value);
    }
  }
}
var ACCOUNT_ID_ENDPOINT_REGEX;
var init_check_features = __esm({
  "node_modules/@aws-sdk/middleware-user-agent/dist-es/check-features.js"() {
    init_client2();
    init_dist_es24();
    ACCOUNT_ID_ENDPOINT_REGEX = /\d{12}\.ddb/;
    __name(checkFeatures, "checkFeatures");
  }
});

// node_modules/@aws-sdk/middleware-user-agent/dist-es/constants.js
var USER_AGENT, X_AMZ_USER_AGENT, SPACE, UA_NAME_SEPARATOR, UA_NAME_ESCAPE_REGEX, UA_VALUE_ESCAPE_REGEX, UA_ESCAPE_CHAR;
var init_constants4 = __esm({
  "node_modules/@aws-sdk/middleware-user-agent/dist-es/constants.js"() {
    USER_AGENT = "user-agent";
    X_AMZ_USER_AGENT = "x-amz-user-agent";
    SPACE = " ";
    UA_NAME_SEPARATOR = "/";
    UA_NAME_ESCAPE_REGEX = /[^!$%&'*+\-.^_`|~\w]/g;
    UA_VALUE_ESCAPE_REGEX = /[^!$%&'*+\-.^_`|~\w#]/g;
    UA_ESCAPE_CHAR = "-";
  }
});

// node_modules/@aws-sdk/middleware-user-agent/dist-es/encode-features.js
function encodeFeatures(features) {
  let buffer = "";
  for (const key in features) {
    const val = features[key];
    if (buffer.length + val.length + 1 <= BYTE_LIMIT) {
      if (buffer.length) {
        buffer += "," + val;
      } else {
        buffer += val;
      }
      continue;
    }
    break;
  }
  return buffer;
}
var BYTE_LIMIT;
var init_encode_features = __esm({
  "node_modules/@aws-sdk/middleware-user-agent/dist-es/encode-features.js"() {
    BYTE_LIMIT = 1024;
    __name(encodeFeatures, "encodeFeatures");
  }
});

// node_modules/@aws-sdk/middleware-user-agent/dist-es/user-agent-middleware.js
var userAgentMiddleware, escapeUserAgent, getUserAgentMiddlewareOptions, getUserAgentPlugin;
var init_user_agent_middleware = __esm({
  "node_modules/@aws-sdk/middleware-user-agent/dist-es/user-agent-middleware.js"() {
    init_dist_es22();
    init_dist_es2();
    init_check_features();
    init_constants4();
    init_encode_features();
    userAgentMiddleware = /* @__PURE__ */ __name((options) => (next, context) => async (args) => {
      const { request: request2 } = args;
      if (!HttpRequest.isInstance(request2)) {
        return next(args);
      }
      const { headers } = request2;
      const userAgent = context?.userAgent?.map(escapeUserAgent) || [];
      const defaultUserAgent = (await options.defaultUserAgentProvider()).map(escapeUserAgent);
      await checkFeatures(context, options, args);
      const awsContext = context;
      defaultUserAgent.push(`m/${encodeFeatures(Object.assign({}, context.__smithy_context?.features, awsContext.__aws_sdk_context?.features))}`);
      const customUserAgent = options?.customUserAgent?.map(escapeUserAgent) || [];
      const appId = await options.userAgentAppId();
      if (appId) {
        defaultUserAgent.push(escapeUserAgent([`app`, `${appId}`]));
      }
      const prefix = getUserAgentPrefix();
      const sdkUserAgentValue = (prefix ? [prefix] : []).concat([...defaultUserAgent, ...userAgent, ...customUserAgent]).join(SPACE);
      const normalUAValue = [
        ...defaultUserAgent.filter((section) => section.startsWith("aws-sdk-")),
        ...customUserAgent
      ].join(SPACE);
      if (options.runtime !== "browser") {
        if (normalUAValue) {
          headers[X_AMZ_USER_AGENT] = headers[X_AMZ_USER_AGENT] ? `${headers[USER_AGENT]} ${normalUAValue}` : normalUAValue;
        }
        headers[USER_AGENT] = sdkUserAgentValue;
      } else {
        headers[X_AMZ_USER_AGENT] = sdkUserAgentValue;
      }
      return next({
        ...args,
        request: request2
      });
    }, "userAgentMiddleware");
    escapeUserAgent = /* @__PURE__ */ __name((userAgentPair) => {
      const name = userAgentPair[0].split(UA_NAME_SEPARATOR).map((part) => part.replace(UA_NAME_ESCAPE_REGEX, UA_ESCAPE_CHAR)).join(UA_NAME_SEPARATOR);
      const version = userAgentPair[1]?.replace(UA_VALUE_ESCAPE_REGEX, UA_ESCAPE_CHAR);
      const prefixSeparatorIndex = name.indexOf(UA_NAME_SEPARATOR);
      const prefix = name.substring(0, prefixSeparatorIndex);
      let uaName = name.substring(prefixSeparatorIndex + 1);
      if (prefix === "api") {
        uaName = uaName.toLowerCase();
      }
      return [prefix, uaName, version].filter((item) => item && item.length > 0).reduce((acc, item, index) => {
        switch (index) {
          case 0:
            return item;
          case 1:
            return `${acc}/${item}`;
          default:
            return `${acc}#${item}`;
        }
      }, "");
    }, "escapeUserAgent");
    getUserAgentMiddlewareOptions = {
      name: "getUserAgentMiddleware",
      step: "build",
      priority: "low",
      tags: ["SET_USER_AGENT", "USER_AGENT"],
      override: true
    };
    getUserAgentPlugin = /* @__PURE__ */ __name((config) => ({
      applyToStack: /* @__PURE__ */ __name((clientStack) => {
        clientStack.add(userAgentMiddleware(config), getUserAgentMiddlewareOptions);
      }, "applyToStack")
    }), "getUserAgentPlugin");
  }
});

// node_modules/@aws-sdk/middleware-user-agent/dist-es/index.js
var init_dist_es25 = __esm({
  "node_modules/@aws-sdk/middleware-user-agent/dist-es/index.js"() {
    init_configurations();
    init_user_agent_middleware();
  }
});

// node_modules/@smithy/util-config-provider/dist-es/booleanSelector.js
var booleanSelector;
var init_booleanSelector = __esm({
  "node_modules/@smithy/util-config-provider/dist-es/booleanSelector.js"() {
    booleanSelector = /* @__PURE__ */ __name((obj, key, type) => {
      if (!(key in obj))
        return void 0;
      if (obj[key] === "true")
        return true;
      if (obj[key] === "false")
        return false;
      throw new Error(`Cannot load ${type} "${key}". Expected "true" or "false", got ${obj[key]}.`);
    }, "booleanSelector");
  }
});

// node_modules/@smithy/util-config-provider/dist-es/numberSelector.js
var init_numberSelector = __esm({
  "node_modules/@smithy/util-config-provider/dist-es/numberSelector.js"() {
  }
});

// node_modules/@smithy/util-config-provider/dist-es/types.js
var SelectorType;
var init_types5 = __esm({
  "node_modules/@smithy/util-config-provider/dist-es/types.js"() {
    (function(SelectorType2) {
      SelectorType2["ENV"] = "env";
      SelectorType2["CONFIG"] = "shared config entry";
    })(SelectorType || (SelectorType = {}));
  }
});

// node_modules/@smithy/util-config-provider/dist-es/index.js
var init_dist_es26 = __esm({
  "node_modules/@smithy/util-config-provider/dist-es/index.js"() {
    init_booleanSelector();
    init_numberSelector();
    init_types5();
  }
});

// node_modules/@smithy/config-resolver/dist-es/endpointsConfig/NodeUseDualstackEndpointConfigOptions.js
var ENV_USE_DUALSTACK_ENDPOINT, CONFIG_USE_DUALSTACK_ENDPOINT, NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS;
var init_NodeUseDualstackEndpointConfigOptions = __esm({
  "node_modules/@smithy/config-resolver/dist-es/endpointsConfig/NodeUseDualstackEndpointConfigOptions.js"() {
    init_dist_es26();
    ENV_USE_DUALSTACK_ENDPOINT = "AWS_USE_DUALSTACK_ENDPOINT";
    CONFIG_USE_DUALSTACK_ENDPOINT = "use_dualstack_endpoint";
    NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS = {
      environmentVariableSelector: /* @__PURE__ */ __name((env2) => booleanSelector(env2, ENV_USE_DUALSTACK_ENDPOINT, SelectorType.ENV), "environmentVariableSelector"),
      configFileSelector: /* @__PURE__ */ __name((profile) => booleanSelector(profile, CONFIG_USE_DUALSTACK_ENDPOINT, SelectorType.CONFIG), "configFileSelector"),
      default: false
    };
  }
});

// node_modules/@smithy/config-resolver/dist-es/endpointsConfig/NodeUseFipsEndpointConfigOptions.js
var ENV_USE_FIPS_ENDPOINT, CONFIG_USE_FIPS_ENDPOINT, NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS;
var init_NodeUseFipsEndpointConfigOptions = __esm({
  "node_modules/@smithy/config-resolver/dist-es/endpointsConfig/NodeUseFipsEndpointConfigOptions.js"() {
    init_dist_es26();
    ENV_USE_FIPS_ENDPOINT = "AWS_USE_FIPS_ENDPOINT";
    CONFIG_USE_FIPS_ENDPOINT = "use_fips_endpoint";
    NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS = {
      environmentVariableSelector: /* @__PURE__ */ __name((env2) => booleanSelector(env2, ENV_USE_FIPS_ENDPOINT, SelectorType.ENV), "environmentVariableSelector"),
      configFileSelector: /* @__PURE__ */ __name((profile) => booleanSelector(profile, CONFIG_USE_FIPS_ENDPOINT, SelectorType.CONFIG), "configFileSelector"),
      default: false
    };
  }
});

// node_modules/@smithy/config-resolver/dist-es/endpointsConfig/resolveCustomEndpointsConfig.js
var init_resolveCustomEndpointsConfig = __esm({
  "node_modules/@smithy/config-resolver/dist-es/endpointsConfig/resolveCustomEndpointsConfig.js"() {
  }
});

// node_modules/@smithy/config-resolver/dist-es/endpointsConfig/resolveEndpointsConfig.js
var init_resolveEndpointsConfig = __esm({
  "node_modules/@smithy/config-resolver/dist-es/endpointsConfig/resolveEndpointsConfig.js"() {
  }
});

// node_modules/@smithy/config-resolver/dist-es/endpointsConfig/index.js
var init_endpointsConfig = __esm({
  "node_modules/@smithy/config-resolver/dist-es/endpointsConfig/index.js"() {
    init_NodeUseDualstackEndpointConfigOptions();
    init_NodeUseFipsEndpointConfigOptions();
    init_resolveCustomEndpointsConfig();
    init_resolveEndpointsConfig();
  }
});

// node_modules/@smithy/config-resolver/dist-es/regionConfig/config.js
var REGION_ENV_NAME, REGION_INI_NAME, NODE_REGION_CONFIG_OPTIONS, NODE_REGION_CONFIG_FILE_OPTIONS;
var init_config3 = __esm({
  "node_modules/@smithy/config-resolver/dist-es/regionConfig/config.js"() {
    REGION_ENV_NAME = "AWS_REGION";
    REGION_INI_NAME = "region";
    NODE_REGION_CONFIG_OPTIONS = {
      environmentVariableSelector: /* @__PURE__ */ __name((env2) => env2[REGION_ENV_NAME], "environmentVariableSelector"),
      configFileSelector: /* @__PURE__ */ __name((profile) => profile[REGION_INI_NAME], "configFileSelector"),
      default: /* @__PURE__ */ __name(() => {
        throw new Error("Region is missing");
      }, "default")
    };
    NODE_REGION_CONFIG_FILE_OPTIONS = {
      preferredFile: "credentials"
    };
  }
});

// node_modules/@smithy/config-resolver/dist-es/regionConfig/checkRegion.js
var validRegions, checkRegion;
var init_checkRegion = __esm({
  "node_modules/@smithy/config-resolver/dist-es/regionConfig/checkRegion.js"() {
    init_dist_es21();
    validRegions = /* @__PURE__ */ new Set();
    checkRegion = /* @__PURE__ */ __name((region, check = isValidHostLabel) => {
      if (!validRegions.has(region) && !check(region)) {
        if (region === "*") {
          console.warn(`@smithy/config-resolver WARN - Please use the caller region instead of "*". See "sigv4a" in https://github.com/aws/aws-sdk-js-v3/blob/main/supplemental-docs/CLIENTS.md.`);
        } else {
          throw new Error(`Region not accepted: region="${region}" is not a valid hostname component.`);
        }
      } else {
        validRegions.add(region);
      }
    }, "checkRegion");
  }
});

// node_modules/@smithy/config-resolver/dist-es/regionConfig/isFipsRegion.js
var isFipsRegion;
var init_isFipsRegion = __esm({
  "node_modules/@smithy/config-resolver/dist-es/regionConfig/isFipsRegion.js"() {
    isFipsRegion = /* @__PURE__ */ __name((region) => typeof region === "string" && (region.startsWith("fips-") || region.endsWith("-fips")), "isFipsRegion");
  }
});

// node_modules/@smithy/config-resolver/dist-es/regionConfig/getRealRegion.js
var getRealRegion;
var init_getRealRegion = __esm({
  "node_modules/@smithy/config-resolver/dist-es/regionConfig/getRealRegion.js"() {
    init_isFipsRegion();
    getRealRegion = /* @__PURE__ */ __name((region) => isFipsRegion(region) ? ["fips-aws-global", "aws-fips"].includes(region) ? "us-east-1" : region.replace(/fips-(dkr-|prod-)?|-fips/, "") : region, "getRealRegion");
  }
});

// node_modules/@smithy/config-resolver/dist-es/regionConfig/resolveRegionConfig.js
var resolveRegionConfig;
var init_resolveRegionConfig = __esm({
  "node_modules/@smithy/config-resolver/dist-es/regionConfig/resolveRegionConfig.js"() {
    init_checkRegion();
    init_getRealRegion();
    init_isFipsRegion();
    resolveRegionConfig = /* @__PURE__ */ __name((input) => {
      const { region, useFipsEndpoint } = input;
      if (!region) {
        throw new Error("Region is missing");
      }
      return Object.assign(input, {
        region: /* @__PURE__ */ __name(async () => {
          const providedRegion = typeof region === "function" ? await region() : region;
          const realRegion = getRealRegion(providedRegion);
          checkRegion(realRegion);
          return realRegion;
        }, "region"),
        useFipsEndpoint: /* @__PURE__ */ __name(async () => {
          const providedRegion = typeof region === "string" ? region : await region();
          if (isFipsRegion(providedRegion)) {
            return true;
          }
          return typeof useFipsEndpoint !== "function" ? Promise.resolve(!!useFipsEndpoint) : useFipsEndpoint();
        }, "useFipsEndpoint")
      });
    }, "resolveRegionConfig");
  }
});

// node_modules/@smithy/config-resolver/dist-es/regionConfig/index.js
var init_regionConfig = __esm({
  "node_modules/@smithy/config-resolver/dist-es/regionConfig/index.js"() {
    init_config3();
    init_resolveRegionConfig();
  }
});

// node_modules/@smithy/config-resolver/dist-es/regionInfo/PartitionHash.js
var init_PartitionHash = __esm({
  "node_modules/@smithy/config-resolver/dist-es/regionInfo/PartitionHash.js"() {
  }
});

// node_modules/@smithy/config-resolver/dist-es/regionInfo/RegionHash.js
var init_RegionHash = __esm({
  "node_modules/@smithy/config-resolver/dist-es/regionInfo/RegionHash.js"() {
  }
});

// node_modules/@smithy/config-resolver/dist-es/regionInfo/getRegionInfo.js
var init_getRegionInfo = __esm({
  "node_modules/@smithy/config-resolver/dist-es/regionInfo/getRegionInfo.js"() {
  }
});

// node_modules/@smithy/config-resolver/dist-es/regionInfo/index.js
var init_regionInfo = __esm({
  "node_modules/@smithy/config-resolver/dist-es/regionInfo/index.js"() {
    init_PartitionHash();
    init_RegionHash();
    init_getRegionInfo();
  }
});

// node_modules/@smithy/config-resolver/dist-es/index.js
var init_dist_es27 = __esm({
  "node_modules/@smithy/config-resolver/dist-es/index.js"() {
    init_endpointsConfig();
    init_regionConfig();
    init_regionInfo();
  }
});

// node_modules/@smithy/middleware-content-length/dist-es/index.js
function contentLengthMiddleware(bodyLengthChecker) {
  return (next) => async (args) => {
    const request2 = args.request;
    if (HttpRequest.isInstance(request2)) {
      const { body, headers } = request2;
      if (body && Object.keys(headers).map((str) => str.toLowerCase()).indexOf(CONTENT_LENGTH_HEADER) === -1) {
        try {
          const length = bodyLengthChecker(body);
          request2.headers = {
            ...request2.headers,
            [CONTENT_LENGTH_HEADER]: String(length)
          };
        } catch (error) {
        }
      }
    }
    return next({
      ...args,
      request: request2
    });
  };
}
var CONTENT_LENGTH_HEADER, contentLengthMiddlewareOptions, getContentLengthPlugin;
var init_dist_es28 = __esm({
  "node_modules/@smithy/middleware-content-length/dist-es/index.js"() {
    init_dist_es2();
    CONTENT_LENGTH_HEADER = "content-length";
    __name(contentLengthMiddleware, "contentLengthMiddleware");
    contentLengthMiddlewareOptions = {
      step: "build",
      tags: ["SET_CONTENT_LENGTH", "CONTENT_LENGTH"],
      name: "contentLengthMiddleware",
      override: true
    };
    getContentLengthPlugin = /* @__PURE__ */ __name((options) => ({
      applyToStack: /* @__PURE__ */ __name((clientStack) => {
        clientStack.add(contentLengthMiddleware(options.bodyLengthChecker), contentLengthMiddlewareOptions);
      }, "applyToStack")
    }), "getContentLengthPlugin");
  }
});

// node_modules/@smithy/middleware-endpoint/dist-es/service-customizations/s3.js
var resolveParamsForS3, DOMAIN_PATTERN, IP_ADDRESS_PATTERN, DOTS_PATTERN, isDnsCompatibleBucketName, isArnBucketName;
var init_s3 = __esm({
  "node_modules/@smithy/middleware-endpoint/dist-es/service-customizations/s3.js"() {
    resolveParamsForS3 = /* @__PURE__ */ __name(async (endpointParams) => {
      const bucket = endpointParams?.Bucket || "";
      if (typeof endpointParams.Bucket === "string") {
        endpointParams.Bucket = bucket.replace(/#/g, encodeURIComponent("#")).replace(/\?/g, encodeURIComponent("?"));
      }
      if (isArnBucketName(bucket)) {
        if (endpointParams.ForcePathStyle === true) {
          throw new Error("Path-style addressing cannot be used with ARN buckets");
        }
      } else if (!isDnsCompatibleBucketName(bucket) || bucket.indexOf(".") !== -1 && !String(endpointParams.Endpoint).startsWith("http:") || bucket.toLowerCase() !== bucket || bucket.length < 3) {
        endpointParams.ForcePathStyle = true;
      }
      if (endpointParams.DisableMultiRegionAccessPoints) {
        endpointParams.disableMultiRegionAccessPoints = true;
        endpointParams.DisableMRAP = true;
      }
      return endpointParams;
    }, "resolveParamsForS3");
    DOMAIN_PATTERN = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/;
    IP_ADDRESS_PATTERN = /(\d+\.){3}\d+/;
    DOTS_PATTERN = /\.\./;
    isDnsCompatibleBucketName = /* @__PURE__ */ __name((bucketName) => DOMAIN_PATTERN.test(bucketName) && !IP_ADDRESS_PATTERN.test(bucketName) && !DOTS_PATTERN.test(bucketName), "isDnsCompatibleBucketName");
    isArnBucketName = /* @__PURE__ */ __name((bucketName) => {
      const [arn, partition2, service, , , bucket] = bucketName.split(":");
      const isArn = arn === "arn" && bucketName.split(":").length >= 6;
      const isValidArn = Boolean(isArn && partition2 && service && bucket);
      if (isArn && !isValidArn) {
        throw new Error(`Invalid ARN: ${bucketName} was an invalid ARN.`);
      }
      return isValidArn;
    }, "isArnBucketName");
  }
});

// node_modules/@smithy/middleware-endpoint/dist-es/service-customizations/index.js
var init_service_customizations = __esm({
  "node_modules/@smithy/middleware-endpoint/dist-es/service-customizations/index.js"() {
    init_s3();
  }
});

// node_modules/@smithy/middleware-endpoint/dist-es/adaptors/createConfigValueProvider.js
var createConfigValueProvider;
var init_createConfigValueProvider = __esm({
  "node_modules/@smithy/middleware-endpoint/dist-es/adaptors/createConfigValueProvider.js"() {
    createConfigValueProvider = /* @__PURE__ */ __name((configKey, canonicalEndpointParamKey, config, isClientContextParam = false) => {
      const configProvider = /* @__PURE__ */ __name(async () => {
        let configValue;
        if (isClientContextParam) {
          const clientContextParams = config.clientContextParams;
          const nestedValue = clientContextParams?.[configKey];
          configValue = nestedValue ?? config[configKey] ?? config[canonicalEndpointParamKey];
        } else {
          configValue = config[configKey] ?? config[canonicalEndpointParamKey];
        }
        if (typeof configValue === "function") {
          return configValue();
        }
        return configValue;
      }, "configProvider");
      if (configKey === "credentialScope" || canonicalEndpointParamKey === "CredentialScope") {
        return async () => {
          const credentials = typeof config.credentials === "function" ? await config.credentials() : config.credentials;
          const configValue = credentials?.credentialScope ?? credentials?.CredentialScope;
          return configValue;
        };
      }
      if (configKey === "accountId" || canonicalEndpointParamKey === "AccountId") {
        return async () => {
          const credentials = typeof config.credentials === "function" ? await config.credentials() : config.credentials;
          const configValue = credentials?.accountId ?? credentials?.AccountId;
          return configValue;
        };
      }
      if (configKey === "endpoint" || canonicalEndpointParamKey === "endpoint") {
        return async () => {
          if (config.isCustomEndpoint === false) {
            return void 0;
          }
          const endpoint = await configProvider();
          if (endpoint && typeof endpoint === "object") {
            if ("url" in endpoint) {
              return endpoint.url.href;
            }
            if ("hostname" in endpoint) {
              const { protocol, hostname, port, path } = endpoint;
              return `${protocol}//${hostname}${port ? ":" + port : ""}${path}`;
            }
          }
          return endpoint;
        };
      }
      return configProvider;
    }, "createConfigValueProvider");
  }
});

// node_modules/@smithy/property-provider/dist-es/ProviderError.js
var ProviderError;
var init_ProviderError = __esm({
  "node_modules/@smithy/property-provider/dist-es/ProviderError.js"() {
    ProviderError = class _ProviderError extends Error {
      static {
        __name(this, "ProviderError");
      }
      name = "ProviderError";
      tryNextLink;
      constructor(message, options = true) {
        let logger2;
        let tryNextLink = true;
        if (typeof options === "boolean") {
          logger2 = void 0;
          tryNextLink = options;
        } else if (options != null && typeof options === "object") {
          logger2 = options.logger;
          tryNextLink = options.tryNextLink ?? true;
        }
        super(message);
        this.tryNextLink = tryNextLink;
        Object.setPrototypeOf(this, _ProviderError.prototype);
        logger2?.debug?.(`@smithy/property-provider ${tryNextLink ? "->" : "(!)"} ${message}`);
      }
      static from(error, options = true) {
        return Object.assign(new this(error.message, options), error);
      }
    };
  }
});

// node_modules/@smithy/property-provider/dist-es/CredentialsProviderError.js
var CredentialsProviderError;
var init_CredentialsProviderError = __esm({
  "node_modules/@smithy/property-provider/dist-es/CredentialsProviderError.js"() {
    init_ProviderError();
    CredentialsProviderError = class _CredentialsProviderError extends ProviderError {
      static {
        __name(this, "CredentialsProviderError");
      }
      name = "CredentialsProviderError";
      constructor(message, options = true) {
        super(message, options);
        Object.setPrototypeOf(this, _CredentialsProviderError.prototype);
      }
    };
  }
});

// node_modules/@smithy/property-provider/dist-es/TokenProviderError.js
var TokenProviderError;
var init_TokenProviderError = __esm({
  "node_modules/@smithy/property-provider/dist-es/TokenProviderError.js"() {
    init_ProviderError();
    TokenProviderError = class _TokenProviderError extends ProviderError {
      static {
        __name(this, "TokenProviderError");
      }
      name = "TokenProviderError";
      constructor(message, options = true) {
        super(message, options);
        Object.setPrototypeOf(this, _TokenProviderError.prototype);
      }
    };
  }
});

// node_modules/@smithy/property-provider/dist-es/chain.js
var chain;
var init_chain = __esm({
  "node_modules/@smithy/property-provider/dist-es/chain.js"() {
    init_ProviderError();
    chain = /* @__PURE__ */ __name((...providers) => async () => {
      if (providers.length === 0) {
        throw new ProviderError("No providers in chain");
      }
      let lastProviderError;
      for (const provider of providers) {
        try {
          const credentials = await provider();
          return credentials;
        } catch (err) {
          lastProviderError = err;
          if (err?.tryNextLink) {
            continue;
          }
          throw err;
        }
      }
      throw lastProviderError;
    }, "chain");
  }
});

// node_modules/@smithy/property-provider/dist-es/fromStatic.js
var fromStatic;
var init_fromStatic = __esm({
  "node_modules/@smithy/property-provider/dist-es/fromStatic.js"() {
    fromStatic = /* @__PURE__ */ __name((staticValue) => () => Promise.resolve(staticValue), "fromStatic");
  }
});

// node_modules/@smithy/property-provider/dist-es/memoize.js
var memoize;
var init_memoize = __esm({
  "node_modules/@smithy/property-provider/dist-es/memoize.js"() {
    memoize = /* @__PURE__ */ __name((provider, isExpired, requiresRefresh) => {
      let resolved;
      let pending;
      let hasResult;
      let isConstant = false;
      const coalesceProvider = /* @__PURE__ */ __name(async () => {
        if (!pending) {
          pending = provider();
        }
        try {
          resolved = await pending;
          hasResult = true;
          isConstant = false;
        } finally {
          pending = void 0;
        }
        return resolved;
      }, "coalesceProvider");
      if (isExpired === void 0) {
        return async (options) => {
          if (!hasResult || options?.forceRefresh) {
            resolved = await coalesceProvider();
          }
          return resolved;
        };
      }
      return async (options) => {
        if (!hasResult || options?.forceRefresh) {
          resolved = await coalesceProvider();
        }
        if (isConstant) {
          return resolved;
        }
        if (requiresRefresh && !requiresRefresh(resolved)) {
          isConstant = true;
          return resolved;
        }
        if (isExpired(resolved)) {
          await coalesceProvider();
          return resolved;
        }
        return resolved;
      };
    }, "memoize");
  }
});

// node_modules/@smithy/property-provider/dist-es/index.js
var init_dist_es29 = __esm({
  "node_modules/@smithy/property-provider/dist-es/index.js"() {
    init_CredentialsProviderError();
    init_ProviderError();
    init_TokenProviderError();
    init_chain();
    init_fromStatic();
    init_memoize();
  }
});

// node_modules/@smithy/node-config-provider/dist-es/getSelectorName.js
function getSelectorName(functionString) {
  try {
    const constants = new Set(Array.from(functionString.match(/([A-Z_]){3,}/g) ?? []));
    constants.delete("CONFIG");
    constants.delete("CONFIG_PREFIX_SEPARATOR");
    constants.delete("ENV");
    return [...constants].join(", ");
  } catch (e6) {
    return functionString;
  }
}
var init_getSelectorName = __esm({
  "node_modules/@smithy/node-config-provider/dist-es/getSelectorName.js"() {
    __name(getSelectorName, "getSelectorName");
  }
});

// node_modules/@smithy/node-config-provider/dist-es/fromEnv.js
var fromEnv;
var init_fromEnv = __esm({
  "node_modules/@smithy/node-config-provider/dist-es/fromEnv.js"() {
    init_dist_es29();
    init_getSelectorName();
    fromEnv = /* @__PURE__ */ __name((envVarSelector, options) => async () => {
      try {
        const config = envVarSelector(process.env, options);
        if (config === void 0) {
          throw new Error();
        }
        return config;
      } catch (e6) {
        throw new CredentialsProviderError(e6.message || `Not found in ENV: ${getSelectorName(envVarSelector.toString())}`, { logger: options?.logger });
      }
    }, "fromEnv");
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-es/getHomeDir.js
import { homedir } from "os";
import { sep } from "path";
var homeDirCache, getHomeDirCacheKey, getHomeDir;
var init_getHomeDir = __esm({
  "node_modules/@smithy/shared-ini-file-loader/dist-es/getHomeDir.js"() {
    homeDirCache = {};
    getHomeDirCacheKey = /* @__PURE__ */ __name(() => {
      if (process && process.geteuid) {
        return `${process.geteuid()}`;
      }
      return "DEFAULT";
    }, "getHomeDirCacheKey");
    getHomeDir = /* @__PURE__ */ __name(() => {
      const { HOME, USERPROFILE, HOMEPATH, HOMEDRIVE = `C:${sep}` } = process.env;
      if (HOME)
        return HOME;
      if (USERPROFILE)
        return USERPROFILE;
      if (HOMEPATH)
        return `${HOMEDRIVE}${HOMEPATH}`;
      const homeDirCacheKey = getHomeDirCacheKey();
      if (!homeDirCache[homeDirCacheKey])
        homeDirCache[homeDirCacheKey] = homedir();
      return homeDirCache[homeDirCacheKey];
    }, "getHomeDir");
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-es/getProfileName.js
var ENV_PROFILE, DEFAULT_PROFILE, getProfileName;
var init_getProfileName = __esm({
  "node_modules/@smithy/shared-ini-file-loader/dist-es/getProfileName.js"() {
    ENV_PROFILE = "AWS_PROFILE";
    DEFAULT_PROFILE = "default";
    getProfileName = /* @__PURE__ */ __name((init) => init.profile || process.env[ENV_PROFILE] || DEFAULT_PROFILE, "getProfileName");
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-es/getSSOTokenFilepath.js
import { createHash } from "crypto";
import { join } from "path";
var getSSOTokenFilepath;
var init_getSSOTokenFilepath = __esm({
  "node_modules/@smithy/shared-ini-file-loader/dist-es/getSSOTokenFilepath.js"() {
    init_getHomeDir();
    getSSOTokenFilepath = /* @__PURE__ */ __name((id) => {
      const hasher = createHash("sha1");
      const cacheName = hasher.update(id).digest("hex");
      return join(getHomeDir(), ".aws", "sso", "cache", `${cacheName}.json`);
    }, "getSSOTokenFilepath");
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-es/getSSOTokenFromFile.js
import { readFile } from "fs/promises";
var tokenIntercept, getSSOTokenFromFile;
var init_getSSOTokenFromFile = __esm({
  "node_modules/@smithy/shared-ini-file-loader/dist-es/getSSOTokenFromFile.js"() {
    init_getSSOTokenFilepath();
    tokenIntercept = {};
    getSSOTokenFromFile = /* @__PURE__ */ __name(async (id) => {
      if (tokenIntercept[id]) {
        return tokenIntercept[id];
      }
      const ssoTokenFilepath = getSSOTokenFilepath(id);
      const ssoTokenText = await readFile(ssoTokenFilepath, "utf8");
      return JSON.parse(ssoTokenText);
    }, "getSSOTokenFromFile");
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-es/constants.js
var CONFIG_PREFIX_SEPARATOR;
var init_constants5 = __esm({
  "node_modules/@smithy/shared-ini-file-loader/dist-es/constants.js"() {
    CONFIG_PREFIX_SEPARATOR = ".";
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-es/getConfigData.js
var getConfigData;
var init_getConfigData = __esm({
  "node_modules/@smithy/shared-ini-file-loader/dist-es/getConfigData.js"() {
    init_dist_es();
    init_constants5();
    getConfigData = /* @__PURE__ */ __name((data) => Object.entries(data).filter(([key]) => {
      const indexOfSeparator = key.indexOf(CONFIG_PREFIX_SEPARATOR);
      if (indexOfSeparator === -1) {
        return false;
      }
      return Object.values(IniSectionType).includes(key.substring(0, indexOfSeparator));
    }).reduce((acc, [key, value]) => {
      const indexOfSeparator = key.indexOf(CONFIG_PREFIX_SEPARATOR);
      const updatedKey = key.substring(0, indexOfSeparator) === IniSectionType.PROFILE ? key.substring(indexOfSeparator + 1) : key;
      acc[updatedKey] = value;
      return acc;
    }, {
      ...data.default && { default: data.default }
    }), "getConfigData");
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-es/getConfigFilepath.js
import { join as join2 } from "path";
var ENV_CONFIG_PATH, getConfigFilepath;
var init_getConfigFilepath = __esm({
  "node_modules/@smithy/shared-ini-file-loader/dist-es/getConfigFilepath.js"() {
    init_getHomeDir();
    ENV_CONFIG_PATH = "AWS_CONFIG_FILE";
    getConfigFilepath = /* @__PURE__ */ __name(() => process.env[ENV_CONFIG_PATH] || join2(getHomeDir(), ".aws", "config"), "getConfigFilepath");
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-es/getCredentialsFilepath.js
import { join as join3 } from "path";
var ENV_CREDENTIALS_PATH, getCredentialsFilepath;
var init_getCredentialsFilepath = __esm({
  "node_modules/@smithy/shared-ini-file-loader/dist-es/getCredentialsFilepath.js"() {
    init_getHomeDir();
    ENV_CREDENTIALS_PATH = "AWS_SHARED_CREDENTIALS_FILE";
    getCredentialsFilepath = /* @__PURE__ */ __name(() => process.env[ENV_CREDENTIALS_PATH] || join3(getHomeDir(), ".aws", "credentials"), "getCredentialsFilepath");
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-es/parseIni.js
var prefixKeyRegex, profileNameBlockList, parseIni;
var init_parseIni = __esm({
  "node_modules/@smithy/shared-ini-file-loader/dist-es/parseIni.js"() {
    init_dist_es();
    init_constants5();
    prefixKeyRegex = /^([\w-]+)\s(["'])?([\w-@\+\.%:/]+)\2$/;
    profileNameBlockList = ["__proto__", "profile __proto__"];
    parseIni = /* @__PURE__ */ __name((iniData) => {
      const map = {};
      let currentSection;
      let currentSubSection;
      for (const iniLine of iniData.split(/\r?\n/)) {
        const trimmedLine = iniLine.split(/(^|\s)[;#]/)[0].trim();
        const isSection = trimmedLine[0] === "[" && trimmedLine[trimmedLine.length - 1] === "]";
        if (isSection) {
          currentSection = void 0;
          currentSubSection = void 0;
          const sectionName = trimmedLine.substring(1, trimmedLine.length - 1);
          const matches = prefixKeyRegex.exec(sectionName);
          if (matches) {
            const [, prefix, , name] = matches;
            if (Object.values(IniSectionType).includes(prefix)) {
              currentSection = [prefix, name].join(CONFIG_PREFIX_SEPARATOR);
            }
          } else {
            currentSection = sectionName;
          }
          if (profileNameBlockList.includes(sectionName)) {
            throw new Error(`Found invalid profile name "${sectionName}"`);
          }
        } else if (currentSection) {
          const indexOfEqualsSign = trimmedLine.indexOf("=");
          if (![0, -1].includes(indexOfEqualsSign)) {
            const [name, value] = [
              trimmedLine.substring(0, indexOfEqualsSign).trim(),
              trimmedLine.substring(indexOfEqualsSign + 1).trim()
            ];
            if (value === "") {
              currentSubSection = name;
            } else {
              if (currentSubSection && iniLine.trimStart() === iniLine) {
                currentSubSection = void 0;
              }
              map[currentSection] = map[currentSection] || {};
              const key = currentSubSection ? [currentSubSection, name].join(CONFIG_PREFIX_SEPARATOR) : name;
              map[currentSection][key] = value;
            }
          }
        }
      }
      return map;
    }, "parseIni");
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-es/readFile.js
import { readFile as fsReadFile } from "node:fs/promises";
var filePromises, fileIntercept, readFile2;
var init_readFile = __esm({
  "node_modules/@smithy/shared-ini-file-loader/dist-es/readFile.js"() {
    filePromises = {};
    fileIntercept = {};
    readFile2 = /* @__PURE__ */ __name((path, options) => {
      if (fileIntercept[path] !== void 0) {
        return fileIntercept[path];
      }
      if (!filePromises[path] || options?.ignoreCache) {
        filePromises[path] = fsReadFile(path, "utf8");
      }
      return filePromises[path];
    }, "readFile");
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-es/loadSharedConfigFiles.js
import { join as join4 } from "path";
var swallowError, loadSharedConfigFiles;
var init_loadSharedConfigFiles = __esm({
  "node_modules/@smithy/shared-ini-file-loader/dist-es/loadSharedConfigFiles.js"() {
    init_getConfigData();
    init_getConfigFilepath();
    init_getCredentialsFilepath();
    init_getHomeDir();
    init_parseIni();
    init_readFile();
    init_constants5();
    swallowError = /* @__PURE__ */ __name(() => ({}), "swallowError");
    loadSharedConfigFiles = /* @__PURE__ */ __name(async (init = {}) => {
      const { filepath = getCredentialsFilepath(), configFilepath = getConfigFilepath() } = init;
      const homeDir = getHomeDir();
      const relativeHomeDirPrefix = "~/";
      let resolvedFilepath = filepath;
      if (filepath.startsWith(relativeHomeDirPrefix)) {
        resolvedFilepath = join4(homeDir, filepath.slice(2));
      }
      let resolvedConfigFilepath = configFilepath;
      if (configFilepath.startsWith(relativeHomeDirPrefix)) {
        resolvedConfigFilepath = join4(homeDir, configFilepath.slice(2));
      }
      const parsedFiles = await Promise.all([
        readFile2(resolvedConfigFilepath, {
          ignoreCache: init.ignoreCache
        }).then(parseIni).then(getConfigData).catch(swallowError),
        readFile2(resolvedFilepath, {
          ignoreCache: init.ignoreCache
        }).then(parseIni).catch(swallowError)
      ]);
      return {
        configFile: parsedFiles[0],
        credentialsFile: parsedFiles[1]
      };
    }, "loadSharedConfigFiles");
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-es/getSsoSessionData.js
var getSsoSessionData;
var init_getSsoSessionData = __esm({
  "node_modules/@smithy/shared-ini-file-loader/dist-es/getSsoSessionData.js"() {
    init_dist_es();
    init_loadSharedConfigFiles();
    getSsoSessionData = /* @__PURE__ */ __name((data) => Object.entries(data).filter(([key]) => key.startsWith(IniSectionType.SSO_SESSION + CONFIG_PREFIX_SEPARATOR)).reduce((acc, [key, value]) => ({ ...acc, [key.substring(key.indexOf(CONFIG_PREFIX_SEPARATOR) + 1)]: value }), {}), "getSsoSessionData");
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-es/loadSsoSessionData.js
var swallowError2, loadSsoSessionData;
var init_loadSsoSessionData = __esm({
  "node_modules/@smithy/shared-ini-file-loader/dist-es/loadSsoSessionData.js"() {
    init_getConfigFilepath();
    init_getSsoSessionData();
    init_parseIni();
    init_readFile();
    swallowError2 = /* @__PURE__ */ __name(() => ({}), "swallowError");
    loadSsoSessionData = /* @__PURE__ */ __name(async (init = {}) => readFile2(init.configFilepath ?? getConfigFilepath()).then(parseIni).then(getSsoSessionData).catch(swallowError2), "loadSsoSessionData");
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-es/mergeConfigFiles.js
var mergeConfigFiles;
var init_mergeConfigFiles = __esm({
  "node_modules/@smithy/shared-ini-file-loader/dist-es/mergeConfigFiles.js"() {
    mergeConfigFiles = /* @__PURE__ */ __name((...files) => {
      const merged = {};
      for (const file of files) {
        for (const [key, values] of Object.entries(file)) {
          if (merged[key] !== void 0) {
            Object.assign(merged[key], values);
          } else {
            merged[key] = values;
          }
        }
      }
      return merged;
    }, "mergeConfigFiles");
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-es/parseKnownFiles.js
var parseKnownFiles;
var init_parseKnownFiles = __esm({
  "node_modules/@smithy/shared-ini-file-loader/dist-es/parseKnownFiles.js"() {
    init_loadSharedConfigFiles();
    init_mergeConfigFiles();
    parseKnownFiles = /* @__PURE__ */ __name(async (init) => {
      const parsedFiles = await loadSharedConfigFiles(init);
      return mergeConfigFiles(parsedFiles.configFile, parsedFiles.credentialsFile);
    }, "parseKnownFiles");
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-es/externalDataInterceptor.js
var externalDataInterceptor;
var init_externalDataInterceptor = __esm({
  "node_modules/@smithy/shared-ini-file-loader/dist-es/externalDataInterceptor.js"() {
    init_getSSOTokenFromFile();
    init_readFile();
    externalDataInterceptor = {
      getFileRecord() {
        return fileIntercept;
      },
      interceptFile(path, contents) {
        fileIntercept[path] = Promise.resolve(contents);
      },
      getTokenRecord() {
        return tokenIntercept;
      },
      interceptToken(id, contents) {
        tokenIntercept[id] = contents;
      }
    };
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-es/types.js
var init_types6 = __esm({
  "node_modules/@smithy/shared-ini-file-loader/dist-es/types.js"() {
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-es/index.js
var init_dist_es30 = __esm({
  "node_modules/@smithy/shared-ini-file-loader/dist-es/index.js"() {
    init_getHomeDir();
    init_getProfileName();
    init_getSSOTokenFilepath();
    init_getSSOTokenFromFile();
    init_loadSharedConfigFiles();
    init_loadSsoSessionData();
    init_parseKnownFiles();
    init_externalDataInterceptor();
    init_types6();
    init_readFile();
  }
});

// node_modules/@smithy/node-config-provider/dist-es/fromSharedConfigFiles.js
var fromSharedConfigFiles;
var init_fromSharedConfigFiles = __esm({
  "node_modules/@smithy/node-config-provider/dist-es/fromSharedConfigFiles.js"() {
    init_dist_es29();
    init_dist_es30();
    init_getSelectorName();
    fromSharedConfigFiles = /* @__PURE__ */ __name((configSelector, { preferredFile = "config", ...init } = {}) => async () => {
      const profile = getProfileName(init);
      const { configFile, credentialsFile } = await loadSharedConfigFiles(init);
      const profileFromCredentials = credentialsFile[profile] || {};
      const profileFromConfig = configFile[profile] || {};
      const mergedProfile = preferredFile === "config" ? { ...profileFromCredentials, ...profileFromConfig } : { ...profileFromConfig, ...profileFromCredentials };
      try {
        const cfgFile = preferredFile === "config" ? configFile : credentialsFile;
        const configValue = configSelector(mergedProfile, cfgFile);
        if (configValue === void 0) {
          throw new Error();
        }
        return configValue;
      } catch (e6) {
        throw new CredentialsProviderError(e6.message || `Not found in config files w/ profile [${profile}]: ${getSelectorName(configSelector.toString())}`, { logger: init.logger });
      }
    }, "fromSharedConfigFiles");
  }
});

// node_modules/@smithy/node-config-provider/dist-es/fromStatic.js
var isFunction, fromStatic2;
var init_fromStatic2 = __esm({
  "node_modules/@smithy/node-config-provider/dist-es/fromStatic.js"() {
    init_dist_es29();
    isFunction = /* @__PURE__ */ __name((func) => typeof func === "function", "isFunction");
    fromStatic2 = /* @__PURE__ */ __name((defaultValue) => isFunction(defaultValue) ? async () => await defaultValue() : fromStatic(defaultValue), "fromStatic");
  }
});

// node_modules/@smithy/node-config-provider/dist-es/configLoader.js
var loadConfig;
var init_configLoader = __esm({
  "node_modules/@smithy/node-config-provider/dist-es/configLoader.js"() {
    init_dist_es29();
    init_fromEnv();
    init_fromSharedConfigFiles();
    init_fromStatic2();
    loadConfig = /* @__PURE__ */ __name(({ environmentVariableSelector, configFileSelector, default: defaultValue }, configuration = {}) => {
      const { signingName, logger: logger2 } = configuration;
      const envOptions = { signingName, logger: logger2 };
      return memoize(chain(fromEnv(environmentVariableSelector, envOptions), fromSharedConfigFiles(configFileSelector, configuration), fromStatic2(defaultValue)));
    }, "loadConfig");
  }
});

// node_modules/@smithy/node-config-provider/dist-es/index.js
var init_dist_es31 = __esm({
  "node_modules/@smithy/node-config-provider/dist-es/index.js"() {
    init_configLoader();
  }
});

// node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointUrlConfig.js
var ENV_ENDPOINT_URL, CONFIG_ENDPOINT_URL, getEndpointUrlConfig;
var init_getEndpointUrlConfig = __esm({
  "node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointUrlConfig.js"() {
    init_dist_es30();
    ENV_ENDPOINT_URL = "AWS_ENDPOINT_URL";
    CONFIG_ENDPOINT_URL = "endpoint_url";
    getEndpointUrlConfig = /* @__PURE__ */ __name((serviceId) => ({
      environmentVariableSelector: /* @__PURE__ */ __name((env2) => {
        const serviceSuffixParts = serviceId.split(" ").map((w) => w.toUpperCase());
        const serviceEndpointUrl = env2[[ENV_ENDPOINT_URL, ...serviceSuffixParts].join("_")];
        if (serviceEndpointUrl)
          return serviceEndpointUrl;
        const endpointUrl = env2[ENV_ENDPOINT_URL];
        if (endpointUrl)
          return endpointUrl;
        return void 0;
      }, "environmentVariableSelector"),
      configFileSelector: /* @__PURE__ */ __name((profile, config) => {
        if (config && profile.services) {
          const servicesSection = config[["services", profile.services].join(CONFIG_PREFIX_SEPARATOR)];
          if (servicesSection) {
            const servicePrefixParts = serviceId.split(" ").map((w) => w.toLowerCase());
            const endpointUrl2 = servicesSection[[servicePrefixParts.join("_"), CONFIG_ENDPOINT_URL].join(CONFIG_PREFIX_SEPARATOR)];
            if (endpointUrl2)
              return endpointUrl2;
          }
        }
        const endpointUrl = profile[CONFIG_ENDPOINT_URL];
        if (endpointUrl)
          return endpointUrl;
        return void 0;
      }, "configFileSelector"),
      default: void 0
    }), "getEndpointUrlConfig");
  }
});

// node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromConfig.js
var getEndpointFromConfig;
var init_getEndpointFromConfig = __esm({
  "node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromConfig.js"() {
    init_dist_es31();
    init_getEndpointUrlConfig();
    getEndpointFromConfig = /* @__PURE__ */ __name(async (serviceId) => loadConfig(getEndpointUrlConfig(serviceId ?? ""))(), "getEndpointFromConfig");
  }
});

// node_modules/@smithy/middleware-endpoint/dist-es/adaptors/toEndpointV1.js
var toEndpointV12;
var init_toEndpointV12 = __esm({
  "node_modules/@smithy/middleware-endpoint/dist-es/adaptors/toEndpointV1.js"() {
    init_dist_es18();
    toEndpointV12 = /* @__PURE__ */ __name((endpoint) => {
      if (typeof endpoint === "object") {
        if ("url" in endpoint) {
          const v1Endpoint = parseUrl(endpoint.url);
          if (endpoint.headers) {
            v1Endpoint.headers = {};
            for (const [name, values] of Object.entries(endpoint.headers)) {
              v1Endpoint.headers[name.toLowerCase()] = values.join(", ");
            }
          }
          return v1Endpoint;
        }
        return endpoint;
      }
      return parseUrl(endpoint);
    }, "toEndpointV1");
  }
});

// node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromInstructions.js
var getEndpointFromInstructions, resolveParams;
var init_getEndpointFromInstructions = __esm({
  "node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromInstructions.js"() {
    init_service_customizations();
    init_createConfigValueProvider();
    init_getEndpointFromConfig();
    init_toEndpointV12();
    getEndpointFromInstructions = /* @__PURE__ */ __name(async (commandInput, instructionsSupplier, clientConfig, context) => {
      if (!clientConfig.isCustomEndpoint) {
        let endpointFromConfig;
        if (clientConfig.serviceConfiguredEndpoint) {
          endpointFromConfig = await clientConfig.serviceConfiguredEndpoint();
        } else {
          endpointFromConfig = await getEndpointFromConfig(clientConfig.serviceId);
        }
        if (endpointFromConfig) {
          clientConfig.endpoint = () => Promise.resolve(toEndpointV12(endpointFromConfig));
          clientConfig.isCustomEndpoint = true;
        }
      }
      const endpointParams = await resolveParams(commandInput, instructionsSupplier, clientConfig);
      if (typeof clientConfig.endpointProvider !== "function") {
        throw new Error("config.endpointProvider is not set.");
      }
      const endpoint = clientConfig.endpointProvider(endpointParams, context);
      if (clientConfig.isCustomEndpoint && clientConfig.endpoint) {
        const customEndpoint = await clientConfig.endpoint();
        if (customEndpoint?.headers) {
          endpoint.headers ??= {};
          for (const [name, value] of Object.entries(customEndpoint.headers)) {
            endpoint.headers[name] = Array.isArray(value) ? value : [value];
          }
        }
      }
      return endpoint;
    }, "getEndpointFromInstructions");
    resolveParams = /* @__PURE__ */ __name(async (commandInput, instructionsSupplier, clientConfig) => {
      const endpointParams = {};
      const instructions = instructionsSupplier?.getEndpointParameterInstructions?.() || {};
      for (const [name, instruction] of Object.entries(instructions)) {
        switch (instruction.type) {
          case "staticContextParams":
            endpointParams[name] = instruction.value;
            break;
          case "contextParams":
            endpointParams[name] = commandInput[instruction.name];
            break;
          case "clientContextParams":
          case "builtInParams":
            endpointParams[name] = await createConfigValueProvider(instruction.name, name, clientConfig, instruction.type !== "builtInParams")();
            break;
          case "operationContextParams":
            endpointParams[name] = instruction.get(commandInput);
            break;
          default:
            throw new Error("Unrecognized endpoint parameter instruction: " + JSON.stringify(instruction));
        }
      }
      if (Object.keys(instructions).length === 0) {
        Object.assign(endpointParams, clientConfig);
      }
      if (String(clientConfig.serviceId).toLowerCase() === "s3") {
        await resolveParamsForS3(endpointParams);
      }
      return endpointParams;
    }, "resolveParams");
  }
});

// node_modules/@smithy/middleware-endpoint/dist-es/adaptors/index.js
var init_adaptors = __esm({
  "node_modules/@smithy/middleware-endpoint/dist-es/adaptors/index.js"() {
    init_getEndpointFromInstructions();
    init_toEndpointV12();
  }
});

// node_modules/@smithy/middleware-endpoint/dist-es/endpointMiddleware.js
var endpointMiddleware;
var init_endpointMiddleware = __esm({
  "node_modules/@smithy/middleware-endpoint/dist-es/endpointMiddleware.js"() {
    init_dist_es20();
    init_dist_es6();
    init_getEndpointFromInstructions();
    endpointMiddleware = /* @__PURE__ */ __name(({ config, instructions }) => {
      return (next, context) => async (args) => {
        if (config.isCustomEndpoint) {
          setFeature(context, "ENDPOINT_OVERRIDE", "N");
        }
        const endpoint = await getEndpointFromInstructions(args.input, {
          getEndpointParameterInstructions() {
            return instructions;
          }
        }, { ...config }, context);
        context.endpointV2 = endpoint;
        context.authSchemes = endpoint.properties?.authSchemes;
        const authScheme = context.authSchemes?.[0];
        if (authScheme) {
          context["signing_region"] = authScheme.signingRegion;
          context["signing_service"] = authScheme.signingName;
          const smithyContext = getSmithyContext(context);
          const httpAuthOption = smithyContext?.selectedHttpAuthScheme?.httpAuthOption;
          if (httpAuthOption) {
            httpAuthOption.signingProperties = Object.assign(httpAuthOption.signingProperties || {}, {
              signing_region: authScheme.signingRegion,
              signingRegion: authScheme.signingRegion,
              signing_service: authScheme.signingName,
              signingName: authScheme.signingName,
              signingRegionSet: authScheme.signingRegionSet
            }, authScheme.properties);
          }
        }
        return next({
          ...args
        });
      };
    }, "endpointMiddleware");
  }
});

// node_modules/@smithy/middleware-serde/dist-es/deserializerMiddleware.js
var init_deserializerMiddleware = __esm({
  "node_modules/@smithy/middleware-serde/dist-es/deserializerMiddleware.js"() {
  }
});

// node_modules/@smithy/middleware-serde/dist-es/serializerMiddleware.js
var init_serializerMiddleware = __esm({
  "node_modules/@smithy/middleware-serde/dist-es/serializerMiddleware.js"() {
  }
});

// node_modules/@smithy/middleware-serde/dist-es/serdePlugin.js
var serializerMiddlewareOption2;
var init_serdePlugin = __esm({
  "node_modules/@smithy/middleware-serde/dist-es/serdePlugin.js"() {
    serializerMiddlewareOption2 = {
      name: "serializerMiddleware",
      step: "serialize",
      tags: ["SERIALIZER"],
      override: true
    };
  }
});

// node_modules/@smithy/middleware-serde/dist-es/index.js
var init_dist_es32 = __esm({
  "node_modules/@smithy/middleware-serde/dist-es/index.js"() {
    init_deserializerMiddleware();
    init_serdePlugin();
    init_serializerMiddleware();
  }
});

// node_modules/@smithy/middleware-endpoint/dist-es/getEndpointPlugin.js
var endpointMiddlewareOptions, getEndpointPlugin;
var init_getEndpointPlugin = __esm({
  "node_modules/@smithy/middleware-endpoint/dist-es/getEndpointPlugin.js"() {
    init_dist_es32();
    init_endpointMiddleware();
    endpointMiddlewareOptions = {
      step: "serialize",
      tags: ["ENDPOINT_PARAMETERS", "ENDPOINT_V2", "ENDPOINT"],
      name: "endpointV2Middleware",
      override: true,
      relation: "before",
      toMiddleware: serializerMiddlewareOption2.name
    };
    getEndpointPlugin = /* @__PURE__ */ __name((config, instructions) => ({
      applyToStack: /* @__PURE__ */ __name((clientStack) => {
        clientStack.addRelativeTo(endpointMiddleware({
          config,
          instructions
        }), endpointMiddlewareOptions);
      }, "applyToStack")
    }), "getEndpointPlugin");
  }
});

// node_modules/@smithy/middleware-endpoint/dist-es/resolveEndpointConfig.js
var resolveEndpointConfig;
var init_resolveEndpointConfig = __esm({
  "node_modules/@smithy/middleware-endpoint/dist-es/resolveEndpointConfig.js"() {
    init_dist_es6();
    init_getEndpointFromConfig();
    init_toEndpointV12();
    resolveEndpointConfig = /* @__PURE__ */ __name((input) => {
      const tls = input.tls ?? true;
      const { endpoint, useDualstackEndpoint, useFipsEndpoint } = input;
      const customEndpointProvider = endpoint != null ? async () => toEndpointV12(await normalizeProvider(endpoint)()) : void 0;
      const isCustomEndpoint = !!endpoint;
      const resolvedConfig = Object.assign(input, {
        endpoint: customEndpointProvider,
        tls,
        isCustomEndpoint,
        useDualstackEndpoint: normalizeProvider(useDualstackEndpoint ?? false),
        useFipsEndpoint: normalizeProvider(useFipsEndpoint ?? false)
      });
      let configuredEndpointPromise = void 0;
      resolvedConfig.serviceConfiguredEndpoint = async () => {
        if (input.serviceId && !configuredEndpointPromise) {
          configuredEndpointPromise = getEndpointFromConfig(input.serviceId);
        }
        return configuredEndpointPromise;
      };
      return resolvedConfig;
    }, "resolveEndpointConfig");
  }
});

// node_modules/@smithy/middleware-endpoint/dist-es/resolveEndpointRequiredConfig.js
var init_resolveEndpointRequiredConfig = __esm({
  "node_modules/@smithy/middleware-endpoint/dist-es/resolveEndpointRequiredConfig.js"() {
  }
});

// node_modules/@smithy/middleware-endpoint/dist-es/types.js
var init_types7 = __esm({
  "node_modules/@smithy/middleware-endpoint/dist-es/types.js"() {
  }
});

// node_modules/@smithy/middleware-endpoint/dist-es/index.js
var init_dist_es33 = __esm({
  "node_modules/@smithy/middleware-endpoint/dist-es/index.js"() {
    init_adaptors();
    init_endpointMiddleware();
    init_getEndpointPlugin();
    init_resolveEndpointConfig();
    init_resolveEndpointRequiredConfig();
    init_types7();
  }
});

// node_modules/@smithy/middleware-retry/dist-es/util.js
var asSdkError;
var init_util2 = __esm({
  "node_modules/@smithy/middleware-retry/dist-es/util.js"() {
    asSdkError = /* @__PURE__ */ __name((error) => {
      if (error instanceof Error)
        return error;
      if (error instanceof Object)
        return Object.assign(new Error(), error);
      if (typeof error === "string")
        return new Error(error);
      return new Error(`AWS SDK error wrapper for ${error}`);
    }, "asSdkError");
  }
});

// node_modules/@smithy/middleware-retry/dist-es/retry-pre-sra-deprecated/delayDecider.js
var init_delayDecider = __esm({
  "node_modules/@smithy/middleware-retry/dist-es/retry-pre-sra-deprecated/delayDecider.js"() {
  }
});

// node_modules/@smithy/middleware-retry/dist-es/retry-pre-sra-deprecated/retryDecider.js
var init_retryDecider = __esm({
  "node_modules/@smithy/middleware-retry/dist-es/retry-pre-sra-deprecated/retryDecider.js"() {
  }
});

// node_modules/@smithy/middleware-retry/dist-es/retry-pre-sra-deprecated/StandardRetryStrategy.js
var init_StandardRetryStrategy2 = __esm({
  "node_modules/@smithy/middleware-retry/dist-es/retry-pre-sra-deprecated/StandardRetryStrategy.js"() {
  }
});

// node_modules/@smithy/middleware-retry/dist-es/retry-pre-sra-deprecated/AdaptiveRetryStrategy.js
var init_AdaptiveRetryStrategy2 = __esm({
  "node_modules/@smithy/middleware-retry/dist-es/retry-pre-sra-deprecated/AdaptiveRetryStrategy.js"() {
  }
});

// node_modules/@smithy/middleware-retry/dist-es/configurations.js
var ENV_MAX_ATTEMPTS, CONFIG_MAX_ATTEMPTS, NODE_MAX_ATTEMPT_CONFIG_OPTIONS, resolveRetryConfig, ENV_RETRY_MODE, CONFIG_RETRY_MODE, NODE_RETRY_MODE_CONFIG_OPTIONS;
var init_configurations2 = __esm({
  "node_modules/@smithy/middleware-retry/dist-es/configurations.js"() {
    init_dist_es6();
    init_dist_es24();
    ENV_MAX_ATTEMPTS = "AWS_MAX_ATTEMPTS";
    CONFIG_MAX_ATTEMPTS = "max_attempts";
    NODE_MAX_ATTEMPT_CONFIG_OPTIONS = {
      environmentVariableSelector: /* @__PURE__ */ __name((env2) => {
        const value = env2[ENV_MAX_ATTEMPTS];
        if (!value)
          return void 0;
        const maxAttempt = parseInt(value);
        if (Number.isNaN(maxAttempt)) {
          throw new Error(`Environment variable ${ENV_MAX_ATTEMPTS} mast be a number, got "${value}"`);
        }
        return maxAttempt;
      }, "environmentVariableSelector"),
      configFileSelector: /* @__PURE__ */ __name((profile) => {
        const value = profile[CONFIG_MAX_ATTEMPTS];
        if (!value)
          return void 0;
        const maxAttempt = parseInt(value);
        if (Number.isNaN(maxAttempt)) {
          throw new Error(`Shared config file entry ${CONFIG_MAX_ATTEMPTS} mast be a number, got "${value}"`);
        }
        return maxAttempt;
      }, "configFileSelector"),
      default: DEFAULT_MAX_ATTEMPTS
    };
    resolveRetryConfig = /* @__PURE__ */ __name((input) => {
      const { retryStrategy, retryMode } = input;
      const maxAttempts = normalizeProvider(input.maxAttempts ?? DEFAULT_MAX_ATTEMPTS);
      let controller = retryStrategy ? Promise.resolve(retryStrategy) : void 0;
      const getDefault = /* @__PURE__ */ __name(async () => await normalizeProvider(retryMode)() === RETRY_MODES.ADAPTIVE ? new AdaptiveRetryStrategy(maxAttempts) : new StandardRetryStrategy(maxAttempts), "getDefault");
      return Object.assign(input, {
        maxAttempts,
        retryStrategy: /* @__PURE__ */ __name(() => controller ??= getDefault(), "retryStrategy")
      });
    }, "resolveRetryConfig");
    ENV_RETRY_MODE = "AWS_RETRY_MODE";
    CONFIG_RETRY_MODE = "retry_mode";
    NODE_RETRY_MODE_CONFIG_OPTIONS = {
      environmentVariableSelector: /* @__PURE__ */ __name((env2) => env2[ENV_RETRY_MODE], "environmentVariableSelector"),
      configFileSelector: /* @__PURE__ */ __name((profile) => profile[CONFIG_RETRY_MODE], "configFileSelector"),
      default: DEFAULT_RETRY_MODE
    };
  }
});

// node_modules/@smithy/middleware-retry/dist-es/omitRetryHeadersMiddleware.js
var init_omitRetryHeadersMiddleware = __esm({
  "node_modules/@smithy/middleware-retry/dist-es/omitRetryHeadersMiddleware.js"() {
  }
});

// node_modules/@smithy/middleware-stack/dist-es/MiddlewareStack.js
var getAllAliases, getMiddlewareNameWithAliases, constructStack, stepWeights, priorityWeights;
var init_MiddlewareStack = __esm({
  "node_modules/@smithy/middleware-stack/dist-es/MiddlewareStack.js"() {
    getAllAliases = /* @__PURE__ */ __name((name, aliases) => {
      const _aliases = [];
      if (name) {
        _aliases.push(name);
      }
      if (aliases) {
        for (const alias of aliases) {
          _aliases.push(alias);
        }
      }
      return _aliases;
    }, "getAllAliases");
    getMiddlewareNameWithAliases = /* @__PURE__ */ __name((name, aliases) => {
      return `${name || "anonymous"}${aliases && aliases.length > 0 ? ` (a.k.a. ${aliases.join(",")})` : ""}`;
    }, "getMiddlewareNameWithAliases");
    constructStack = /* @__PURE__ */ __name(() => {
      let absoluteEntries = [];
      let relativeEntries = [];
      let identifyOnResolve = false;
      const entriesNameSet = /* @__PURE__ */ new Set();
      const sort = /* @__PURE__ */ __name((entries) => entries.sort((a6, b6) => stepWeights[b6.step] - stepWeights[a6.step] || priorityWeights[b6.priority || "normal"] - priorityWeights[a6.priority || "normal"]), "sort");
      const removeByName = /* @__PURE__ */ __name((toRemove) => {
        let isRemoved = false;
        const filterCb = /* @__PURE__ */ __name((entry) => {
          const aliases = getAllAliases(entry.name, entry.aliases);
          if (aliases.includes(toRemove)) {
            isRemoved = true;
            for (const alias of aliases) {
              entriesNameSet.delete(alias);
            }
            return false;
          }
          return true;
        }, "filterCb");
        absoluteEntries = absoluteEntries.filter(filterCb);
        relativeEntries = relativeEntries.filter(filterCb);
        return isRemoved;
      }, "removeByName");
      const removeByReference = /* @__PURE__ */ __name((toRemove) => {
        let isRemoved = false;
        const filterCb = /* @__PURE__ */ __name((entry) => {
          if (entry.middleware === toRemove) {
            isRemoved = true;
            for (const alias of getAllAliases(entry.name, entry.aliases)) {
              entriesNameSet.delete(alias);
            }
            return false;
          }
          return true;
        }, "filterCb");
        absoluteEntries = absoluteEntries.filter(filterCb);
        relativeEntries = relativeEntries.filter(filterCb);
        return isRemoved;
      }, "removeByReference");
      const cloneTo = /* @__PURE__ */ __name((toStack) => {
        absoluteEntries.forEach((entry) => {
          toStack.add(entry.middleware, { ...entry });
        });
        relativeEntries.forEach((entry) => {
          toStack.addRelativeTo(entry.middleware, { ...entry });
        });
        toStack.identifyOnResolve?.(stack.identifyOnResolve());
        return toStack;
      }, "cloneTo");
      const expandRelativeMiddlewareList = /* @__PURE__ */ __name((from) => {
        const expandedMiddlewareList = [];
        from.before.forEach((entry) => {
          if (entry.before.length === 0 && entry.after.length === 0) {
            expandedMiddlewareList.push(entry);
          } else {
            expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
          }
        });
        expandedMiddlewareList.push(from);
        from.after.reverse().forEach((entry) => {
          if (entry.before.length === 0 && entry.after.length === 0) {
            expandedMiddlewareList.push(entry);
          } else {
            expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
          }
        });
        return expandedMiddlewareList;
      }, "expandRelativeMiddlewareList");
      const getMiddlewareList = /* @__PURE__ */ __name((debug = false) => {
        const normalizedAbsoluteEntries = [];
        const normalizedRelativeEntries = [];
        const normalizedEntriesNameMap = {};
        absoluteEntries.forEach((entry) => {
          const normalizedEntry = {
            ...entry,
            before: [],
            after: []
          };
          for (const alias of getAllAliases(normalizedEntry.name, normalizedEntry.aliases)) {
            normalizedEntriesNameMap[alias] = normalizedEntry;
          }
          normalizedAbsoluteEntries.push(normalizedEntry);
        });
        relativeEntries.forEach((entry) => {
          const normalizedEntry = {
            ...entry,
            before: [],
            after: []
          };
          for (const alias of getAllAliases(normalizedEntry.name, normalizedEntry.aliases)) {
            normalizedEntriesNameMap[alias] = normalizedEntry;
          }
          normalizedRelativeEntries.push(normalizedEntry);
        });
        normalizedRelativeEntries.forEach((entry) => {
          if (entry.toMiddleware) {
            const toMiddleware = normalizedEntriesNameMap[entry.toMiddleware];
            if (toMiddleware === void 0) {
              if (debug) {
                return;
              }
              throw new Error(`${entry.toMiddleware} is not found when adding ${getMiddlewareNameWithAliases(entry.name, entry.aliases)} middleware ${entry.relation} ${entry.toMiddleware}`);
            }
            if (entry.relation === "after") {
              toMiddleware.after.push(entry);
            }
            if (entry.relation === "before") {
              toMiddleware.before.push(entry);
            }
          }
        });
        const mainChain = sort(normalizedAbsoluteEntries).map(expandRelativeMiddlewareList).reduce((wholeList, expandedMiddlewareList) => {
          wholeList.push(...expandedMiddlewareList);
          return wholeList;
        }, []);
        return mainChain;
      }, "getMiddlewareList");
      const stack = {
        add: /* @__PURE__ */ __name((middleware, options = {}) => {
          const { name, override, aliases: _aliases } = options;
          const entry = {
            step: "initialize",
            priority: "normal",
            middleware,
            ...options
          };
          const aliases = getAllAliases(name, _aliases);
          if (aliases.length > 0) {
            if (aliases.some((alias) => entriesNameSet.has(alias))) {
              if (!override)
                throw new Error(`Duplicate middleware name '${getMiddlewareNameWithAliases(name, _aliases)}'`);
              for (const alias of aliases) {
                const toOverrideIndex = absoluteEntries.findIndex((entry2) => entry2.name === alias || entry2.aliases?.some((a6) => a6 === alias));
                if (toOverrideIndex === -1) {
                  continue;
                }
                const toOverride = absoluteEntries[toOverrideIndex];
                if (toOverride.step !== entry.step || entry.priority !== toOverride.priority) {
                  throw new Error(`"${getMiddlewareNameWithAliases(toOverride.name, toOverride.aliases)}" middleware with ${toOverride.priority} priority in ${toOverride.step} step cannot be overridden by "${getMiddlewareNameWithAliases(name, _aliases)}" middleware with ${entry.priority} priority in ${entry.step} step.`);
                }
                absoluteEntries.splice(toOverrideIndex, 1);
              }
            }
            for (const alias of aliases) {
              entriesNameSet.add(alias);
            }
          }
          absoluteEntries.push(entry);
        }, "add"),
        addRelativeTo: /* @__PURE__ */ __name((middleware, options) => {
          const { name, override, aliases: _aliases } = options;
          const entry = {
            middleware,
            ...options
          };
          const aliases = getAllAliases(name, _aliases);
          if (aliases.length > 0) {
            if (aliases.some((alias) => entriesNameSet.has(alias))) {
              if (!override)
                throw new Error(`Duplicate middleware name '${getMiddlewareNameWithAliases(name, _aliases)}'`);
              for (const alias of aliases) {
                const toOverrideIndex = relativeEntries.findIndex((entry2) => entry2.name === alias || entry2.aliases?.some((a6) => a6 === alias));
                if (toOverrideIndex === -1) {
                  continue;
                }
                const toOverride = relativeEntries[toOverrideIndex];
                if (toOverride.toMiddleware !== entry.toMiddleware || toOverride.relation !== entry.relation) {
                  throw new Error(`"${getMiddlewareNameWithAliases(toOverride.name, toOverride.aliases)}" middleware ${toOverride.relation} "${toOverride.toMiddleware}" middleware cannot be overridden by "${getMiddlewareNameWithAliases(name, _aliases)}" middleware ${entry.relation} "${entry.toMiddleware}" middleware.`);
                }
                relativeEntries.splice(toOverrideIndex, 1);
              }
            }
            for (const alias of aliases) {
              entriesNameSet.add(alias);
            }
          }
          relativeEntries.push(entry);
        }, "addRelativeTo"),
        clone: /* @__PURE__ */ __name(() => cloneTo(constructStack()), "clone"),
        use: /* @__PURE__ */ __name((plugin) => {
          plugin.applyToStack(stack);
        }, "use"),
        remove: /* @__PURE__ */ __name((toRemove) => {
          if (typeof toRemove === "string")
            return removeByName(toRemove);
          else
            return removeByReference(toRemove);
        }, "remove"),
        removeByTag: /* @__PURE__ */ __name((toRemove) => {
          let isRemoved = false;
          const filterCb = /* @__PURE__ */ __name((entry) => {
            const { tags, name, aliases: _aliases } = entry;
            if (tags && tags.includes(toRemove)) {
              const aliases = getAllAliases(name, _aliases);
              for (const alias of aliases) {
                entriesNameSet.delete(alias);
              }
              isRemoved = true;
              return false;
            }
            return true;
          }, "filterCb");
          absoluteEntries = absoluteEntries.filter(filterCb);
          relativeEntries = relativeEntries.filter(filterCb);
          return isRemoved;
        }, "removeByTag"),
        concat: /* @__PURE__ */ __name((from) => {
          const cloned = cloneTo(constructStack());
          cloned.use(from);
          cloned.identifyOnResolve(identifyOnResolve || cloned.identifyOnResolve() || (from.identifyOnResolve?.() ?? false));
          return cloned;
        }, "concat"),
        applyToStack: cloneTo,
        identify: /* @__PURE__ */ __name(() => {
          return getMiddlewareList(true).map((mw) => {
            const step = mw.step ?? mw.relation + " " + mw.toMiddleware;
            return getMiddlewareNameWithAliases(mw.name, mw.aliases) + " - " + step;
          });
        }, "identify"),
        identifyOnResolve(toggle) {
          if (typeof toggle === "boolean")
            identifyOnResolve = toggle;
          return identifyOnResolve;
        },
        resolve: /* @__PURE__ */ __name((handler2, context) => {
          for (const middleware of getMiddlewareList().map((entry) => entry.middleware).reverse()) {
            handler2 = middleware(handler2, context);
          }
          if (identifyOnResolve) {
            console.log(stack.identify());
          }
          return handler2;
        }, "resolve")
      };
      return stack;
    }, "constructStack");
    stepWeights = {
      initialize: 5,
      serialize: 4,
      build: 3,
      finalizeRequest: 2,
      deserialize: 1
    };
    priorityWeights = {
      high: 3,
      normal: 2,
      low: 1
    };
  }
});

// node_modules/@smithy/middleware-stack/dist-es/index.js
var init_dist_es34 = __esm({
  "node_modules/@smithy/middleware-stack/dist-es/index.js"() {
    init_MiddlewareStack();
  }
});

// node_modules/@smithy/smithy-client/dist-es/client.js
var Client;
var init_client3 = __esm({
  "node_modules/@smithy/smithy-client/dist-es/client.js"() {
    init_dist_es34();
    Client = class {
      static {
        __name(this, "Client");
      }
      config;
      middlewareStack = constructStack();
      initConfig;
      handlers;
      constructor(config) {
        this.config = config;
        const { protocol, protocolSettings } = config;
        if (protocolSettings) {
          if (typeof protocol === "function") {
            config.protocol = new protocol(protocolSettings);
          }
        }
      }
      send(command, optionsOrCb, cb) {
        const options = typeof optionsOrCb !== "function" ? optionsOrCb : void 0;
        const callback = typeof optionsOrCb === "function" ? optionsOrCb : cb;
        const useHandlerCache = options === void 0 && this.config.cacheMiddleware === true;
        let handler2;
        if (useHandlerCache) {
          if (!this.handlers) {
            this.handlers = /* @__PURE__ */ new WeakMap();
          }
          const handlers = this.handlers;
          if (handlers.has(command.constructor)) {
            handler2 = handlers.get(command.constructor);
          } else {
            handler2 = command.resolveMiddleware(this.middlewareStack, this.config, options);
            handlers.set(command.constructor, handler2);
          }
        } else {
          delete this.handlers;
          handler2 = command.resolveMiddleware(this.middlewareStack, this.config, options);
        }
        if (callback) {
          handler2(command).then((result) => callback(null, result.output), (err) => callback(err)).catch(() => {
          });
        } else {
          return handler2(command).then((result) => result.output);
        }
      }
      destroy() {
        this.config?.requestHandler?.destroy?.();
        delete this.handlers;
      }
    };
  }
});

// node_modules/@smithy/smithy-client/dist-es/collect-stream-body.js
var init_collect_stream_body2 = __esm({
  "node_modules/@smithy/smithy-client/dist-es/collect-stream-body.js"() {
    init_protocols();
  }
});

// node_modules/@smithy/smithy-client/dist-es/schemaLogFilter.js
function schemaLogFilter(schema, data) {
  if (data == null) {
    return data;
  }
  const ns = NormalizedSchema.of(schema);
  if (ns.getMergedTraits().sensitive) {
    return SENSITIVE_STRING;
  }
  if (ns.isListSchema()) {
    const isSensitive = !!ns.getValueSchema().getMergedTraits().sensitive;
    if (isSensitive) {
      return SENSITIVE_STRING;
    }
  } else if (ns.isMapSchema()) {
    const isSensitive = !!ns.getKeySchema().getMergedTraits().sensitive || !!ns.getValueSchema().getMergedTraits().sensitive;
    if (isSensitive) {
      return SENSITIVE_STRING;
    }
  } else if (ns.isStructSchema() && typeof data === "object") {
    const object = data;
    const newObject = {};
    for (const [member2, memberNs] of ns.structIterator()) {
      if (object[member2] != null) {
        newObject[member2] = schemaLogFilter(memberNs, object[member2]);
      }
    }
    return newObject;
  }
  return data;
}
var SENSITIVE_STRING;
var init_schemaLogFilter = __esm({
  "node_modules/@smithy/smithy-client/dist-es/schemaLogFilter.js"() {
    init_schema2();
    SENSITIVE_STRING = "***SensitiveInformation***";
    __name(schemaLogFilter, "schemaLogFilter");
  }
});

// node_modules/@smithy/smithy-client/dist-es/command.js
var Command, ClassBuilder;
var init_command2 = __esm({
  "node_modules/@smithy/smithy-client/dist-es/command.js"() {
    init_dist_es34();
    init_dist_es();
    init_schemaLogFilter();
    Command = class {
      static {
        __name(this, "Command");
      }
      middlewareStack = constructStack();
      schema;
      static classBuilder() {
        return new ClassBuilder();
      }
      resolveMiddlewareWithContext(clientStack, configuration, options, { middlewareFn, clientName, commandName, inputFilterSensitiveLog, outputFilterSensitiveLog, smithyContext, additionalContext, CommandCtor }) {
        for (const mw of middlewareFn.bind(this)(CommandCtor, clientStack, configuration, options)) {
          this.middlewareStack.use(mw);
        }
        const stack = clientStack.concat(this.middlewareStack);
        const { logger: logger2 } = configuration;
        const handlerExecutionContext = {
          logger: logger2,
          clientName,
          commandName,
          inputFilterSensitiveLog,
          outputFilterSensitiveLog,
          [SMITHY_CONTEXT_KEY]: {
            commandInstance: this,
            ...smithyContext
          },
          ...additionalContext
        };
        const { requestHandler } = configuration;
        let requestOptions = options ?? {};
        if (smithyContext.eventStream) {
          requestOptions = {
            isEventStream: true,
            ...requestOptions
          };
        }
        return stack.resolve((request2) => requestHandler.handle(request2.request, requestOptions), handlerExecutionContext);
      }
    };
    ClassBuilder = class {
      static {
        __name(this, "ClassBuilder");
      }
      _init = /* @__PURE__ */ __name(() => {
      }, "_init");
      _ep = {};
      _middlewareFn = /* @__PURE__ */ __name(() => [], "_middlewareFn");
      _commandName = "";
      _clientName = "";
      _additionalContext = {};
      _smithyContext = {};
      _inputFilterSensitiveLog = void 0;
      _outputFilterSensitiveLog = void 0;
      _serializer = null;
      _deserializer = null;
      _operationSchema;
      init(cb) {
        this._init = cb;
      }
      ep(endpointParameterInstructions) {
        this._ep = endpointParameterInstructions;
        return this;
      }
      m(middlewareSupplier) {
        this._middlewareFn = middlewareSupplier;
        return this;
      }
      s(service, operation2, smithyContext = {}) {
        this._smithyContext = {
          service,
          operation: operation2,
          ...smithyContext
        };
        return this;
      }
      c(additionalContext = {}) {
        this._additionalContext = additionalContext;
        return this;
      }
      n(clientName, commandName) {
        this._clientName = clientName;
        this._commandName = commandName;
        return this;
      }
      f(inputFilter = (_) => _, outputFilter = (_) => _) {
        this._inputFilterSensitiveLog = inputFilter;
        this._outputFilterSensitiveLog = outputFilter;
        return this;
      }
      ser(serializer) {
        this._serializer = serializer;
        return this;
      }
      de(deserializer) {
        this._deserializer = deserializer;
        return this;
      }
      sc(operation2) {
        this._operationSchema = operation2;
        this._smithyContext.operationSchema = operation2;
        return this;
      }
      build() {
        const closure = this;
        let CommandRef;
        return CommandRef = class extends Command {
          static {
            __name(this, "CommandRef");
          }
          input;
          static getEndpointParameterInstructions() {
            return closure._ep;
          }
          constructor(...[input]) {
            super();
            this.input = input ?? {};
            closure._init(this);
            this.schema = closure._operationSchema;
          }
          resolveMiddleware(stack, configuration, options) {
            const op = closure._operationSchema;
            const input = op?.[4] ?? op?.input;
            const output = op?.[5] ?? op?.output;
            return this.resolveMiddlewareWithContext(stack, configuration, options, {
              CommandCtor: CommandRef,
              middlewareFn: closure._middlewareFn,
              clientName: closure._clientName,
              commandName: closure._commandName,
              inputFilterSensitiveLog: closure._inputFilterSensitiveLog ?? (op ? schemaLogFilter.bind(null, input) : (_) => _),
              outputFilterSensitiveLog: closure._outputFilterSensitiveLog ?? (op ? schemaLogFilter.bind(null, output) : (_) => _),
              smithyContext: closure._smithyContext,
              additionalContext: closure._additionalContext
            });
          }
          serialize = closure._serializer;
          deserialize = closure._deserializer;
        };
      }
    };
  }
});

// node_modules/@smithy/smithy-client/dist-es/constants.js
var init_constants6 = __esm({
  "node_modules/@smithy/smithy-client/dist-es/constants.js"() {
  }
});

// node_modules/@smithy/smithy-client/dist-es/create-aggregated-client.js
var createAggregatedClient;
var init_create_aggregated_client = __esm({
  "node_modules/@smithy/smithy-client/dist-es/create-aggregated-client.js"() {
    createAggregatedClient = /* @__PURE__ */ __name((commands5, Client2, options) => {
      for (const [command, CommandCtor] of Object.entries(commands5)) {
        const methodImpl = /* @__PURE__ */ __name(async function(args, optionsOrCb, cb) {
          const command2 = new CommandCtor(args);
          if (typeof optionsOrCb === "function") {
            this.send(command2, optionsOrCb);
          } else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
              throw new Error(`Expected http options but got ${typeof optionsOrCb}`);
            this.send(command2, optionsOrCb || {}, cb);
          } else {
            return this.send(command2, optionsOrCb);
          }
        }, "methodImpl");
        const methodName = (command[0].toLowerCase() + command.slice(1)).replace(/Command$/, "");
        Client2.prototype[methodName] = methodImpl;
      }
      const { paginators = {}, waiters = {} } = options ?? {};
      for (const [paginatorName, paginatorFn] of Object.entries(paginators)) {
        if (Client2.prototype[paginatorName] === void 0) {
          Client2.prototype[paginatorName] = function(commandInput = {}, paginationConfiguration, ...rest) {
            return paginatorFn({
              ...paginationConfiguration,
              client: this
            }, commandInput, ...rest);
          };
        }
      }
      for (const [waiterName, waiterFn] of Object.entries(waiters)) {
        if (Client2.prototype[waiterName] === void 0) {
          Client2.prototype[waiterName] = async function(commandInput = {}, waiterConfiguration, ...rest) {
            let config = waiterConfiguration;
            if (typeof waiterConfiguration === "number") {
              config = {
                maxWaitTime: waiterConfiguration
              };
            }
            return waiterFn({
              ...config,
              client: this
            }, commandInput, ...rest);
          };
        }
      }
    }, "createAggregatedClient");
  }
});

// node_modules/@smithy/smithy-client/dist-es/exceptions.js
var ServiceException, decorateServiceException;
var init_exceptions = __esm({
  "node_modules/@smithy/smithy-client/dist-es/exceptions.js"() {
    ServiceException = class _ServiceException extends Error {
      static {
        __name(this, "ServiceException");
      }
      $fault;
      $response;
      $retryable;
      $metadata;
      constructor(options) {
        super(options.message);
        Object.setPrototypeOf(this, Object.getPrototypeOf(this).constructor.prototype);
        this.name = options.name;
        this.$fault = options.$fault;
        this.$metadata = options.$metadata;
      }
      static isInstance(value) {
        if (!value)
          return false;
        const candidate = value;
        return _ServiceException.prototype.isPrototypeOf(candidate) || Boolean(candidate.$fault) && Boolean(candidate.$metadata) && (candidate.$fault === "client" || candidate.$fault === "server");
      }
      static [Symbol.hasInstance](instance) {
        if (!instance)
          return false;
        const candidate = instance;
        if (this === _ServiceException) {
          return _ServiceException.isInstance(instance);
        }
        if (_ServiceException.isInstance(instance)) {
          if (candidate.name && this.name) {
            return this.prototype.isPrototypeOf(instance) || candidate.name === this.name;
          }
          return this.prototype.isPrototypeOf(instance);
        }
        return false;
      }
    };
    decorateServiceException = /* @__PURE__ */ __name((exception, additions = {}) => {
      Object.entries(additions).filter(([, v]) => v !== void 0).forEach(([k6, v]) => {
        if (exception[k6] == void 0 || exception[k6] === "") {
          exception[k6] = v;
        }
      });
      const message = exception.message || exception.Message || "UnknownError";
      exception.message = message;
      delete exception.Message;
      return exception;
    }, "decorateServiceException");
  }
});

// node_modules/@smithy/smithy-client/dist-es/default-error-handler.js
var init_default_error_handler = __esm({
  "node_modules/@smithy/smithy-client/dist-es/default-error-handler.js"() {
  }
});

// node_modules/@smithy/smithy-client/dist-es/defaults-mode.js
var loadConfigsForDefaultMode;
var init_defaults_mode = __esm({
  "node_modules/@smithy/smithy-client/dist-es/defaults-mode.js"() {
    loadConfigsForDefaultMode = /* @__PURE__ */ __name((mode) => {
      switch (mode) {
        case "standard":
          return {
            retryMode: "standard",
            connectionTimeout: 3100
          };
        case "in-region":
          return {
            retryMode: "standard",
            connectionTimeout: 1100
          };
        case "cross-region":
          return {
            retryMode: "standard",
            connectionTimeout: 3100
          };
        case "mobile":
          return {
            retryMode: "standard",
            connectionTimeout: 3e4
          };
        default:
          return {};
      }
    }, "loadConfigsForDefaultMode");
  }
});

// node_modules/@smithy/smithy-client/dist-es/emitWarningIfUnsupportedVersion.js
var warningEmitted, emitWarningIfUnsupportedVersion2;
var init_emitWarningIfUnsupportedVersion2 = __esm({
  "node_modules/@smithy/smithy-client/dist-es/emitWarningIfUnsupportedVersion.js"() {
    warningEmitted = false;
    emitWarningIfUnsupportedVersion2 = /* @__PURE__ */ __name((version) => {
      if (version && !warningEmitted && parseInt(version.substring(1, version.indexOf("."))) < 16) {
        warningEmitted = true;
      }
    }, "emitWarningIfUnsupportedVersion");
  }
});

// node_modules/@smithy/smithy-client/dist-es/extended-encode-uri-component.js
var init_extended_encode_uri_component2 = __esm({
  "node_modules/@smithy/smithy-client/dist-es/extended-encode-uri-component.js"() {
  }
});

// node_modules/@smithy/smithy-client/dist-es/extensions/checksum.js
var knownAlgorithms, getChecksumConfiguration, resolveChecksumRuntimeConfig;
var init_checksum3 = __esm({
  "node_modules/@smithy/smithy-client/dist-es/extensions/checksum.js"() {
    init_dist_es();
    knownAlgorithms = Object.values(AlgorithmId);
    getChecksumConfiguration = /* @__PURE__ */ __name((runtimeConfig) => {
      const checksumAlgorithms = [];
      for (const id in AlgorithmId) {
        const algorithmId = AlgorithmId[id];
        if (runtimeConfig[algorithmId] === void 0) {
          continue;
        }
        checksumAlgorithms.push({
          algorithmId: /* @__PURE__ */ __name(() => algorithmId, "algorithmId"),
          checksumConstructor: /* @__PURE__ */ __name(() => runtimeConfig[algorithmId], "checksumConstructor")
        });
      }
      for (const [id, ChecksumCtor] of Object.entries(runtimeConfig.checksumAlgorithms ?? {})) {
        checksumAlgorithms.push({
          algorithmId: /* @__PURE__ */ __name(() => id, "algorithmId"),
          checksumConstructor: /* @__PURE__ */ __name(() => ChecksumCtor, "checksumConstructor")
        });
      }
      return {
        addChecksumAlgorithm(algo) {
          runtimeConfig.checksumAlgorithms = runtimeConfig.checksumAlgorithms ?? {};
          const id = algo.algorithmId();
          const ctor = algo.checksumConstructor();
          if (knownAlgorithms.includes(id)) {
            runtimeConfig.checksumAlgorithms[id.toUpperCase()] = ctor;
          } else {
            runtimeConfig.checksumAlgorithms[id] = ctor;
          }
          checksumAlgorithms.push(algo);
        },
        checksumAlgorithms() {
          return checksumAlgorithms;
        }
      };
    }, "getChecksumConfiguration");
    resolveChecksumRuntimeConfig = /* @__PURE__ */ __name((clientConfig) => {
      const runtimeConfig = {};
      clientConfig.checksumAlgorithms().forEach((checksumAlgorithm) => {
        const id = checksumAlgorithm.algorithmId();
        if (knownAlgorithms.includes(id)) {
          runtimeConfig[id] = checksumAlgorithm.checksumConstructor();
        }
      });
      return runtimeConfig;
    }, "resolveChecksumRuntimeConfig");
  }
});

// node_modules/@smithy/smithy-client/dist-es/extensions/retry.js
var getRetryConfiguration, resolveRetryRuntimeConfig;
var init_retry2 = __esm({
  "node_modules/@smithy/smithy-client/dist-es/extensions/retry.js"() {
    getRetryConfiguration = /* @__PURE__ */ __name((runtimeConfig) => {
      return {
        setRetryStrategy(retryStrategy) {
          runtimeConfig.retryStrategy = retryStrategy;
        },
        retryStrategy() {
          return runtimeConfig.retryStrategy;
        }
      };
    }, "getRetryConfiguration");
    resolveRetryRuntimeConfig = /* @__PURE__ */ __name((retryStrategyConfiguration) => {
      const runtimeConfig = {};
      runtimeConfig.retryStrategy = retryStrategyConfiguration.retryStrategy();
      return runtimeConfig;
    }, "resolveRetryRuntimeConfig");
  }
});

// node_modules/@smithy/smithy-client/dist-es/extensions/defaultExtensionConfiguration.js
var getDefaultExtensionConfiguration, resolveDefaultRuntimeConfig;
var init_defaultExtensionConfiguration2 = __esm({
  "node_modules/@smithy/smithy-client/dist-es/extensions/defaultExtensionConfiguration.js"() {
    init_checksum3();
    init_retry2();
    getDefaultExtensionConfiguration = /* @__PURE__ */ __name((runtimeConfig) => {
      return Object.assign(getChecksumConfiguration(runtimeConfig), getRetryConfiguration(runtimeConfig));
    }, "getDefaultExtensionConfiguration");
    resolveDefaultRuntimeConfig = /* @__PURE__ */ __name((config) => {
      return Object.assign(resolveChecksumRuntimeConfig(config), resolveRetryRuntimeConfig(config));
    }, "resolveDefaultRuntimeConfig");
  }
});

// node_modules/@smithy/smithy-client/dist-es/extensions/index.js
var init_extensions3 = __esm({
  "node_modules/@smithy/smithy-client/dist-es/extensions/index.js"() {
    init_defaultExtensionConfiguration2();
  }
});

// node_modules/@smithy/smithy-client/dist-es/get-array-if-single-item.js
var init_get_array_if_single_item = __esm({
  "node_modules/@smithy/smithy-client/dist-es/get-array-if-single-item.js"() {
  }
});

// node_modules/@smithy/smithy-client/dist-es/get-value-from-text-node.js
var getValueFromTextNode;
var init_get_value_from_text_node = __esm({
  "node_modules/@smithy/smithy-client/dist-es/get-value-from-text-node.js"() {
    getValueFromTextNode = /* @__PURE__ */ __name((obj) => {
      const textNodeName = "#text";
      for (const key in obj) {
        if (obj.hasOwnProperty(key) && obj[key][textNodeName] !== void 0) {
          obj[key] = obj[key][textNodeName];
        } else if (typeof obj[key] === "object" && obj[key] !== null) {
          obj[key] = getValueFromTextNode(obj[key]);
        }
      }
      return obj;
    }, "getValueFromTextNode");
  }
});

// node_modules/@smithy/smithy-client/dist-es/is-serializable-header-value.js
var init_is_serializable_header_value = __esm({
  "node_modules/@smithy/smithy-client/dist-es/is-serializable-header-value.js"() {
  }
});

// node_modules/@smithy/smithy-client/dist-es/NoOpLogger.js
var NoOpLogger;
var init_NoOpLogger = __esm({
  "node_modules/@smithy/smithy-client/dist-es/NoOpLogger.js"() {
    NoOpLogger = class {
      static {
        __name(this, "NoOpLogger");
      }
      trace() {
      }
      debug() {
      }
      info() {
      }
      warn() {
      }
      error() {
      }
    };
  }
});

// node_modules/@smithy/smithy-client/dist-es/object-mapping.js
var init_object_mapping = __esm({
  "node_modules/@smithy/smithy-client/dist-es/object-mapping.js"() {
  }
});

// node_modules/@smithy/smithy-client/dist-es/resolve-path.js
var init_resolve_path2 = __esm({
  "node_modules/@smithy/smithy-client/dist-es/resolve-path.js"() {
  }
});

// node_modules/@smithy/smithy-client/dist-es/ser-utils.js
var init_ser_utils = __esm({
  "node_modules/@smithy/smithy-client/dist-es/ser-utils.js"() {
  }
});

// node_modules/@smithy/smithy-client/dist-es/serde-json.js
var init_serde_json = __esm({
  "node_modules/@smithy/smithy-client/dist-es/serde-json.js"() {
  }
});

// node_modules/@smithy/smithy-client/dist-es/index.js
var init_dist_es35 = __esm({
  "node_modules/@smithy/smithy-client/dist-es/index.js"() {
    init_client3();
    init_collect_stream_body2();
    init_command2();
    init_constants6();
    init_create_aggregated_client();
    init_default_error_handler();
    init_defaults_mode();
    init_emitWarningIfUnsupportedVersion2();
    init_exceptions();
    init_extended_encode_uri_component2();
    init_extensions3();
    init_get_array_if_single_item();
    init_get_value_from_text_node();
    init_is_serializable_header_value();
    init_NoOpLogger();
    init_object_mapping();
    init_resolve_path2();
    init_ser_utils();
    init_serde_json();
    init_serde2();
  }
});

// node_modules/@smithy/middleware-retry/dist-es/isStreamingPayload/isStreamingPayload.js
import { Readable as Readable3 } from "stream";
var isStreamingPayload;
var init_isStreamingPayload = __esm({
  "node_modules/@smithy/middleware-retry/dist-es/isStreamingPayload/isStreamingPayload.js"() {
    isStreamingPayload = /* @__PURE__ */ __name((request2) => request2?.body instanceof Readable3 || typeof ReadableStream !== "undefined" && request2?.body instanceof ReadableStream, "isStreamingPayload");
  }
});

// node_modules/@smithy/middleware-retry/dist-es/parseRetryAfterHeader.js
function parseRetryAfterHeader(response, logger2) {
  if (!HttpResponse.isInstance(response)) {
    return;
  }
  for (const header of Object.keys(response.headers)) {
    const h6 = header.toLowerCase();
    if (h6 === "retry-after") {
      const retryAfter = response.headers[header];
      let retryAfterSeconds = NaN;
      if (retryAfter.endsWith("GMT")) {
        try {
          const date2 = parseRfc7231DateTime(retryAfter);
          retryAfterSeconds = (date2.getTime() - Date.now()) / 1e3;
        } catch (e6) {
          logger2?.trace?.("Failed to parse retry-after header");
          logger2?.trace?.(e6);
        }
      } else if (retryAfter.match(/ GMT, ((\d+)|(\d+\.\d+))$/)) {
        retryAfterSeconds = Number(retryAfter.match(/ GMT, ([\d.]+)$/)?.[1]);
      } else if (retryAfter.match(/^((\d+)|(\d+\.\d+))$/)) {
        retryAfterSeconds = Number(retryAfter);
      } else if (Date.parse(retryAfter) >= Date.now()) {
        retryAfterSeconds = (Date.parse(retryAfter) - Date.now()) / 1e3;
      }
      if (isNaN(retryAfterSeconds)) {
        return;
      }
      return new Date(Date.now() + retryAfterSeconds * 1e3);
    } else if (h6 === "x-amz-retry-after") {
      const v = response.headers[header];
      const backoffMilliseconds = Number(v);
      if (isNaN(backoffMilliseconds)) {
        logger2?.trace?.(`Failed to parse x-amz-retry-after=${v}`);
        return;
      }
      return new Date(Date.now() + backoffMilliseconds);
    }
  }
}
var init_parseRetryAfterHeader = __esm({
  "node_modules/@smithy/middleware-retry/dist-es/parseRetryAfterHeader.js"() {
    init_serde2();
    init_dist_es2();
    __name(parseRetryAfterHeader, "parseRetryAfterHeader");
  }
});

// node_modules/@smithy/middleware-retry/dist-es/retryMiddleware.js
var retryMiddleware, cooldown, isRetryStrategyV2, getRetryErrorInfo, getRetryErrorType, retryMiddlewareOptions, getRetryPlugin;
var init_retryMiddleware = __esm({
  "node_modules/@smithy/middleware-retry/dist-es/retryMiddleware.js"() {
    init_dist_es2();
    init_dist_es23();
    init_dist_es35();
    init_dist_es24();
    init_dist_es19();
    init_isStreamingPayload();
    init_parseRetryAfterHeader();
    init_util2();
    retryMiddleware = /* @__PURE__ */ __name((options) => (next, context) => async (args) => {
      let retryStrategy = await options.retryStrategy();
      const maxAttempts = await options.maxAttempts();
      if (isRetryStrategyV2(retryStrategy)) {
        retryStrategy = retryStrategy;
        let retryToken = await retryStrategy.acquireInitialRetryToken((context["partition_id"] ?? "") + (context.__retryLongPoll ? ":longpoll" : ""));
        let lastError = new Error();
        let attempts = 0;
        let totalRetryDelay = 0;
        const { request: request2 } = args;
        const isRequest = HttpRequest.isInstance(request2);
        if (isRequest) {
          request2.headers[INVOCATION_ID_HEADER] = v4();
        }
        while (true) {
          try {
            if (isRequest) {
              request2.headers[REQUEST_HEADER] = `attempt=${attempts + 1}; max=${maxAttempts}`;
            }
            const { response, output } = await next(args);
            retryStrategy.recordSuccess(retryToken);
            output.$metadata.attempts = attempts + 1;
            output.$metadata.totalRetryDelay = totalRetryDelay;
            return { response, output };
          } catch (e6) {
            const retryErrorInfo = getRetryErrorInfo(e6, options.logger);
            lastError = asSdkError(e6);
            if (isRequest && isStreamingPayload(request2)) {
              (context.logger instanceof NoOpLogger ? console : context.logger)?.warn("An error was encountered in a non-retryable streaming request.");
              throw lastError;
            }
            try {
              retryToken = await retryStrategy.refreshRetryTokenForRetry(retryToken, retryErrorInfo);
            } catch (refreshError) {
              if (typeof refreshError.$backoff === "number") {
                await cooldown(refreshError.$backoff);
              }
              if (!lastError.$metadata) {
                lastError.$metadata = {};
              }
              lastError.$metadata.attempts = attempts + 1;
              lastError.$metadata.totalRetryDelay = totalRetryDelay;
              throw lastError;
            }
            attempts = retryToken.getRetryCount();
            const delay = retryToken.getRetryDelay();
            totalRetryDelay += delay;
            await cooldown(delay);
          }
        }
      } else {
        retryStrategy = retryStrategy;
        if (retryStrategy?.mode) {
          context.userAgent = [...context.userAgent || [], ["cfg/retry-mode", retryStrategy.mode]];
        }
        return retryStrategy.retry(next, args);
      }
    }, "retryMiddleware");
    cooldown = /* @__PURE__ */ __name((ms) => new Promise((resolve) => setTimeout(resolve, ms)), "cooldown");
    isRetryStrategyV2 = /* @__PURE__ */ __name((retryStrategy) => typeof retryStrategy.acquireInitialRetryToken !== "undefined" && typeof retryStrategy.refreshRetryTokenForRetry !== "undefined" && typeof retryStrategy.recordSuccess !== "undefined", "isRetryStrategyV2");
    getRetryErrorInfo = /* @__PURE__ */ __name((error, logger2) => {
      const errorInfo = {
        error,
        errorType: getRetryErrorType(error)
      };
      const retryAfterHint = parseRetryAfterHeader(error.$response, logger2);
      if (retryAfterHint) {
        errorInfo.retryAfterHint = retryAfterHint;
      }
      return errorInfo;
    }, "getRetryErrorInfo");
    getRetryErrorType = /* @__PURE__ */ __name((error) => {
      if (isThrottlingError(error))
        return "THROTTLING";
      if (isTransientError(error))
        return "TRANSIENT";
      if (isServerError(error))
        return "SERVER_ERROR";
      return "CLIENT_ERROR";
    }, "getRetryErrorType");
    retryMiddlewareOptions = {
      name: "retryMiddleware",
      tags: ["RETRY"],
      step: "finalizeRequest",
      priority: "high",
      override: true
    };
    getRetryPlugin = /* @__PURE__ */ __name((options) => ({
      applyToStack: /* @__PURE__ */ __name((clientStack) => {
        clientStack.add(retryMiddleware(options), retryMiddlewareOptions);
      }, "applyToStack")
    }), "getRetryPlugin");
  }
});

// node_modules/@smithy/middleware-retry/dist-es/index.js
var init_dist_es36 = __esm({
  "node_modules/@smithy/middleware-retry/dist-es/index.js"() {
    init_AdaptiveRetryStrategy2();
    init_StandardRetryStrategy2();
    init_delayDecider();
    init_retryDecider();
    init_configurations2();
    init_omitRetryHeadersMiddleware();
    init_retryMiddleware();
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getDateHeader.js
var getDateHeader;
var init_getDateHeader = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getDateHeader.js"() {
    init_dist_es2();
    getDateHeader = /* @__PURE__ */ __name((response) => HttpResponse.isInstance(response) ? response.headers?.date ?? response.headers?.Date : void 0, "getDateHeader");
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getSkewCorrectedDate.js
var getSkewCorrectedDate;
var init_getSkewCorrectedDate = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getSkewCorrectedDate.js"() {
    getSkewCorrectedDate = /* @__PURE__ */ __name((systemClockOffset) => new Date(Date.now() + systemClockOffset), "getSkewCorrectedDate");
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/isClockSkewed.js
var isClockSkewed;
var init_isClockSkewed = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/isClockSkewed.js"() {
    init_getSkewCorrectedDate();
    isClockSkewed = /* @__PURE__ */ __name((clockTime, systemClockOffset) => Math.abs(getSkewCorrectedDate(systemClockOffset).getTime() - clockTime) >= 3e5, "isClockSkewed");
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getUpdatedSystemClockOffset.js
var getUpdatedSystemClockOffset;
var init_getUpdatedSystemClockOffset = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getUpdatedSystemClockOffset.js"() {
    init_isClockSkewed();
    getUpdatedSystemClockOffset = /* @__PURE__ */ __name((clockTime, currentSystemClockOffset) => {
      const clockTimeInMs = Date.parse(clockTime);
      if (isClockSkewed(clockTimeInMs, currentSystemClockOffset)) {
        return clockTimeInMs - Date.now();
      }
      return currentSystemClockOffset;
    }, "getUpdatedSystemClockOffset");
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/index.js
var init_utils = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/index.js"() {
    init_getDateHeader();
    init_getSkewCorrectedDate();
    init_getUpdatedSystemClockOffset();
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/AwsSdkSigV4Signer.js
var throwSigningPropertyError, validateSigningProperties, AwsSdkSigV4Signer;
var init_AwsSdkSigV4Signer = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/AwsSdkSigV4Signer.js"() {
    init_dist_es2();
    init_utils();
    throwSigningPropertyError = /* @__PURE__ */ __name((name, property) => {
      if (!property) {
        throw new Error(`Property \`${name}\` is not resolved for AWS SDK SigV4Auth`);
      }
      return property;
    }, "throwSigningPropertyError");
    validateSigningProperties = /* @__PURE__ */ __name(async (signingProperties) => {
      const context = throwSigningPropertyError("context", signingProperties.context);
      const config = throwSigningPropertyError("config", signingProperties.config);
      const authScheme = context.endpointV2?.properties?.authSchemes?.[0];
      const signerFunction = throwSigningPropertyError("signer", config.signer);
      const signer = await signerFunction(authScheme);
      const signingRegion = signingProperties?.signingRegion;
      const signingRegionSet = signingProperties?.signingRegionSet;
      const signingName = signingProperties?.signingName;
      return {
        config,
        signer,
        signingRegion,
        signingRegionSet,
        signingName
      };
    }, "validateSigningProperties");
    AwsSdkSigV4Signer = class {
      static {
        __name(this, "AwsSdkSigV4Signer");
      }
      async sign(httpRequest2, identity, signingProperties) {
        if (!HttpRequest.isInstance(httpRequest2)) {
          throw new Error("The request is not an instance of `HttpRequest` and cannot be signed");
        }
        const validatedProps = await validateSigningProperties(signingProperties);
        const { config, signer } = validatedProps;
        let { signingRegion, signingName } = validatedProps;
        const handlerExecutionContext = signingProperties.context;
        if (handlerExecutionContext?.authSchemes?.length ?? 0 > 1) {
          const [first, second] = handlerExecutionContext.authSchemes;
          if (first?.name === "sigv4a" && second?.name === "sigv4") {
            signingRegion = second?.signingRegion ?? signingRegion;
            signingName = second?.signingName ?? signingName;
          }
        }
        const signedRequest = await signer.sign(httpRequest2, {
          signingDate: getSkewCorrectedDate(config.systemClockOffset),
          signingRegion,
          signingService: signingName
        });
        return signedRequest;
      }
      errorHandler(signingProperties) {
        return (error) => {
          const serverTime = error.ServerTime ?? getDateHeader(error.$response);
          if (serverTime) {
            const config = throwSigningPropertyError("config", signingProperties.config);
            const initialSystemClockOffset = config.systemClockOffset;
            config.systemClockOffset = getUpdatedSystemClockOffset(serverTime, config.systemClockOffset);
            const clockSkewCorrected = config.systemClockOffset !== initialSystemClockOffset;
            if (clockSkewCorrected && error.$metadata) {
              error.$metadata.clockSkewCorrected = true;
            }
          }
          throw error;
        };
      }
      successHandler(httpResponse, signingProperties) {
        const dateHeader = getDateHeader(httpResponse);
        if (dateHeader) {
          const config = throwSigningPropertyError("config", signingProperties.config);
          config.systemClockOffset = getUpdatedSystemClockOffset(dateHeader, config.systemClockOffset);
        }
      }
    };
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/AwsSdkSigV4ASigner.js
var AwsSdkSigV4ASigner;
var init_AwsSdkSigV4ASigner = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/AwsSdkSigV4ASigner.js"() {
    init_dist_es2();
    init_utils();
    init_AwsSdkSigV4Signer();
    AwsSdkSigV4ASigner = class extends AwsSdkSigV4Signer {
      static {
        __name(this, "AwsSdkSigV4ASigner");
      }
      async sign(httpRequest2, identity, signingProperties) {
        if (!HttpRequest.isInstance(httpRequest2)) {
          throw new Error("The request is not an instance of `HttpRequest` and cannot be signed");
        }
        const { config, signer, signingRegion, signingRegionSet, signingName } = await validateSigningProperties(signingProperties);
        const configResolvedSigningRegionSet = await config.sigv4aSigningRegionSet?.();
        const multiRegionOverride = (configResolvedSigningRegionSet ?? signingRegionSet ?? [signingRegion]).join(",");
        const signedRequest = await signer.sign(httpRequest2, {
          signingDate: getSkewCorrectedDate(config.systemClockOffset),
          signingRegion: multiRegionOverride,
          signingService: signingName
        });
        return signedRequest;
      }
    };
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getArrayForCommaSeparatedString.js
var getArrayForCommaSeparatedString;
var init_getArrayForCommaSeparatedString = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getArrayForCommaSeparatedString.js"() {
    getArrayForCommaSeparatedString = /* @__PURE__ */ __name((str) => typeof str === "string" && str.length > 0 ? str.split(",").map((item) => item.trim()) : [], "getArrayForCommaSeparatedString");
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getBearerTokenEnvKey.js
var getBearerTokenEnvKey;
var init_getBearerTokenEnvKey = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getBearerTokenEnvKey.js"() {
    getBearerTokenEnvKey = /* @__PURE__ */ __name((signingName) => `AWS_BEARER_TOKEN_${signingName.replace(/[\s-]/g, "_").toUpperCase()}`, "getBearerTokenEnvKey");
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/NODE_AUTH_SCHEME_PREFERENCE_OPTIONS.js
var NODE_AUTH_SCHEME_PREFERENCE_ENV_KEY, NODE_AUTH_SCHEME_PREFERENCE_CONFIG_KEY, NODE_AUTH_SCHEME_PREFERENCE_OPTIONS;
var init_NODE_AUTH_SCHEME_PREFERENCE_OPTIONS = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/NODE_AUTH_SCHEME_PREFERENCE_OPTIONS.js"() {
    init_getArrayForCommaSeparatedString();
    init_getBearerTokenEnvKey();
    NODE_AUTH_SCHEME_PREFERENCE_ENV_KEY = "AWS_AUTH_SCHEME_PREFERENCE";
    NODE_AUTH_SCHEME_PREFERENCE_CONFIG_KEY = "auth_scheme_preference";
    NODE_AUTH_SCHEME_PREFERENCE_OPTIONS = {
      environmentVariableSelector: /* @__PURE__ */ __name((env2, options) => {
        if (options?.signingName) {
          const bearerTokenKey = getBearerTokenEnvKey(options.signingName);
          if (bearerTokenKey in env2)
            return ["httpBearerAuth"];
        }
        if (!(NODE_AUTH_SCHEME_PREFERENCE_ENV_KEY in env2))
          return void 0;
        return getArrayForCommaSeparatedString(env2[NODE_AUTH_SCHEME_PREFERENCE_ENV_KEY]);
      }, "environmentVariableSelector"),
      configFileSelector: /* @__PURE__ */ __name((profile) => {
        if (!(NODE_AUTH_SCHEME_PREFERENCE_CONFIG_KEY in profile))
          return void 0;
        return getArrayForCommaSeparatedString(profile[NODE_AUTH_SCHEME_PREFERENCE_CONFIG_KEY]);
      }, "configFileSelector"),
      default: []
    };
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/resolveAwsSdkSigV4AConfig.js
var resolveAwsSdkSigV4AConfig, NODE_SIGV4A_CONFIG_OPTIONS;
var init_resolveAwsSdkSigV4AConfig = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/resolveAwsSdkSigV4AConfig.js"() {
    init_dist_es20();
    init_dist_es29();
    resolveAwsSdkSigV4AConfig = /* @__PURE__ */ __name((config) => {
      config.sigv4aSigningRegionSet = normalizeProvider2(config.sigv4aSigningRegionSet);
      return config;
    }, "resolveAwsSdkSigV4AConfig");
    NODE_SIGV4A_CONFIG_OPTIONS = {
      environmentVariableSelector(env2) {
        if (env2.AWS_SIGV4A_SIGNING_REGION_SET) {
          return env2.AWS_SIGV4A_SIGNING_REGION_SET.split(",").map((_) => _.trim());
        }
        throw new ProviderError("AWS_SIGV4A_SIGNING_REGION_SET not set in env.", {
          tryNextLink: true
        });
      },
      configFileSelector(profile) {
        if (profile.sigv4a_signing_region_set) {
          return (profile.sigv4a_signing_region_set ?? "").split(",").map((_) => _.trim());
        }
        throw new ProviderError("sigv4a_signing_region_set not set in profile.", {
          tryNextLink: true
        });
      },
      default: void 0
    };
  }
});

// node_modules/@smithy/signature-v4/dist-es/constants.js
var ALGORITHM_QUERY_PARAM, CREDENTIAL_QUERY_PARAM, AMZ_DATE_QUERY_PARAM, SIGNED_HEADERS_QUERY_PARAM, EXPIRES_QUERY_PARAM, SIGNATURE_QUERY_PARAM, TOKEN_QUERY_PARAM, AUTH_HEADER, AMZ_DATE_HEADER, DATE_HEADER, GENERATED_HEADERS, SIGNATURE_HEADER, SHA256_HEADER, TOKEN_HEADER, ALWAYS_UNSIGNABLE_HEADERS, PROXY_HEADER_PATTERN, SEC_HEADER_PATTERN, ALGORITHM_IDENTIFIER, EVENT_ALGORITHM_IDENTIFIER, UNSIGNED_PAYLOAD, MAX_CACHE_SIZE, KEY_TYPE_IDENTIFIER, MAX_PRESIGNED_TTL;
var init_constants7 = __esm({
  "node_modules/@smithy/signature-v4/dist-es/constants.js"() {
    ALGORITHM_QUERY_PARAM = "X-Amz-Algorithm";
    CREDENTIAL_QUERY_PARAM = "X-Amz-Credential";
    AMZ_DATE_QUERY_PARAM = "X-Amz-Date";
    SIGNED_HEADERS_QUERY_PARAM = "X-Amz-SignedHeaders";
    EXPIRES_QUERY_PARAM = "X-Amz-Expires";
    SIGNATURE_QUERY_PARAM = "X-Amz-Signature";
    TOKEN_QUERY_PARAM = "X-Amz-Security-Token";
    AUTH_HEADER = "authorization";
    AMZ_DATE_HEADER = AMZ_DATE_QUERY_PARAM.toLowerCase();
    DATE_HEADER = "date";
    GENERATED_HEADERS = [AUTH_HEADER, AMZ_DATE_HEADER, DATE_HEADER];
    SIGNATURE_HEADER = SIGNATURE_QUERY_PARAM.toLowerCase();
    SHA256_HEADER = "x-amz-content-sha256";
    TOKEN_HEADER = TOKEN_QUERY_PARAM.toLowerCase();
    ALWAYS_UNSIGNABLE_HEADERS = {
      authorization: true,
      "cache-control": true,
      connection: true,
      expect: true,
      from: true,
      "keep-alive": true,
      "max-forwards": true,
      pragma: true,
      referer: true,
      te: true,
      trailer: true,
      "transfer-encoding": true,
      upgrade: true,
      "user-agent": true,
      "x-amzn-trace-id": true
    };
    PROXY_HEADER_PATTERN = /^proxy-/;
    SEC_HEADER_PATTERN = /^sec-/;
    ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256";
    EVENT_ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256-PAYLOAD";
    UNSIGNED_PAYLOAD = "UNSIGNED-PAYLOAD";
    MAX_CACHE_SIZE = 50;
    KEY_TYPE_IDENTIFIER = "aws4_request";
    MAX_PRESIGNED_TTL = 60 * 60 * 24 * 7;
  }
});

// node_modules/@smithy/signature-v4/dist-es/credentialDerivation.js
var signingKeyCache, cacheQueue, createScope, getSigningKey, hmac;
var init_credentialDerivation = __esm({
  "node_modules/@smithy/signature-v4/dist-es/credentialDerivation.js"() {
    init_dist_es15();
    init_dist_es9();
    init_constants7();
    signingKeyCache = {};
    cacheQueue = [];
    createScope = /* @__PURE__ */ __name((shortDate, region, service) => `${shortDate}/${region}/${service}/${KEY_TYPE_IDENTIFIER}`, "createScope");
    getSigningKey = /* @__PURE__ */ __name(async (sha256Constructor, credentials, shortDate, region, service) => {
      const credsHash = await hmac(sha256Constructor, credentials.secretAccessKey, credentials.accessKeyId);
      const cacheKey = `${shortDate}:${region}:${service}:${toHex(credsHash)}:${credentials.sessionToken}`;
      if (cacheKey in signingKeyCache) {
        return signingKeyCache[cacheKey];
      }
      cacheQueue.push(cacheKey);
      while (cacheQueue.length > MAX_CACHE_SIZE) {
        delete signingKeyCache[cacheQueue.shift()];
      }
      let key = `AWS4${credentials.secretAccessKey}`;
      for (const signable of [shortDate, region, service, KEY_TYPE_IDENTIFIER]) {
        key = await hmac(sha256Constructor, key, signable);
      }
      return signingKeyCache[cacheKey] = key;
    }, "getSigningKey");
    hmac = /* @__PURE__ */ __name((ctor, secret, data) => {
      const hash = new ctor(secret);
      hash.update(toUint8Array(data));
      return hash.digest();
    }, "hmac");
  }
});

// node_modules/@smithy/signature-v4/dist-es/getCanonicalHeaders.js
var getCanonicalHeaders;
var init_getCanonicalHeaders = __esm({
  "node_modules/@smithy/signature-v4/dist-es/getCanonicalHeaders.js"() {
    init_constants7();
    getCanonicalHeaders = /* @__PURE__ */ __name(({ headers }, unsignableHeaders, signableHeaders) => {
      const canonical = {};
      for (const headerName of Object.keys(headers).sort()) {
        if (headers[headerName] == void 0) {
          continue;
        }
        const canonicalHeaderName = headerName.toLowerCase();
        if (canonicalHeaderName in ALWAYS_UNSIGNABLE_HEADERS || unsignableHeaders?.has(canonicalHeaderName) || PROXY_HEADER_PATTERN.test(canonicalHeaderName) || SEC_HEADER_PATTERN.test(canonicalHeaderName)) {
          if (!signableHeaders || signableHeaders && !signableHeaders.has(canonicalHeaderName)) {
            continue;
          }
        }
        canonical[canonicalHeaderName] = headers[headerName].trim().replace(/\s+/g, " ");
      }
      return canonical;
    }, "getCanonicalHeaders");
  }
});

// node_modules/@smithy/signature-v4/dist-es/getPayloadHash.js
var getPayloadHash;
var init_getPayloadHash = __esm({
  "node_modules/@smithy/signature-v4/dist-es/getPayloadHash.js"() {
    init_dist_es7();
    init_dist_es15();
    init_dist_es9();
    init_constants7();
    getPayloadHash = /* @__PURE__ */ __name(async ({ headers, body }, hashConstructor) => {
      for (const headerName of Object.keys(headers)) {
        if (headerName.toLowerCase() === SHA256_HEADER) {
          return headers[headerName];
        }
      }
      if (body == void 0) {
        return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
      } else if (typeof body === "string" || ArrayBuffer.isView(body) || isArrayBuffer(body)) {
        const hashCtor = new hashConstructor();
        hashCtor.update(toUint8Array(body));
        return toHex(await hashCtor.digest());
      }
      return UNSIGNED_PAYLOAD;
    }, "getPayloadHash");
  }
});

// node_modules/@smithy/signature-v4/dist-es/HeaderFormatter.js
function negate(bytes) {
  for (let i6 = 0; i6 < 8; i6++) {
    bytes[i6] ^= 255;
  }
  for (let i6 = 7; i6 > -1; i6--) {
    bytes[i6]++;
    if (bytes[i6] !== 0)
      break;
  }
}
var HeaderFormatter, HEADER_VALUE_TYPE, UUID_PATTERN, Int64;
var init_HeaderFormatter = __esm({
  "node_modules/@smithy/signature-v4/dist-es/HeaderFormatter.js"() {
    init_dist_es15();
    init_dist_es9();
    HeaderFormatter = class {
      static {
        __name(this, "HeaderFormatter");
      }
      format(headers) {
        const chunks = [];
        for (const headerName of Object.keys(headers)) {
          const bytes = fromUtf8(headerName);
          chunks.push(Uint8Array.from([bytes.byteLength]), bytes, this.formatHeaderValue(headers[headerName]));
        }
        const out = new Uint8Array(chunks.reduce((carry, bytes) => carry + bytes.byteLength, 0));
        let position = 0;
        for (const chunk of chunks) {
          out.set(chunk, position);
          position += chunk.byteLength;
        }
        return out;
      }
      formatHeaderValue(header) {
        switch (header.type) {
          case "boolean":
            return Uint8Array.from([header.value ? 0 : 1]);
          case "byte":
            return Uint8Array.from([2, header.value]);
          case "short":
            const shortView = new DataView(new ArrayBuffer(3));
            shortView.setUint8(0, 3);
            shortView.setInt16(1, header.value, false);
            return new Uint8Array(shortView.buffer);
          case "integer":
            const intView = new DataView(new ArrayBuffer(5));
            intView.setUint8(0, 4);
            intView.setInt32(1, header.value, false);
            return new Uint8Array(intView.buffer);
          case "long":
            const longBytes = new Uint8Array(9);
            longBytes[0] = 5;
            longBytes.set(header.value.bytes, 1);
            return longBytes;
          case "binary":
            const binView = new DataView(new ArrayBuffer(3 + header.value.byteLength));
            binView.setUint8(0, 6);
            binView.setUint16(1, header.value.byteLength, false);
            const binBytes = new Uint8Array(binView.buffer);
            binBytes.set(header.value, 3);
            return binBytes;
          case "string":
            const utf8Bytes = fromUtf8(header.value);
            const strView = new DataView(new ArrayBuffer(3 + utf8Bytes.byteLength));
            strView.setUint8(0, 7);
            strView.setUint16(1, utf8Bytes.byteLength, false);
            const strBytes = new Uint8Array(strView.buffer);
            strBytes.set(utf8Bytes, 3);
            return strBytes;
          case "timestamp":
            const tsBytes = new Uint8Array(9);
            tsBytes[0] = 8;
            tsBytes.set(Int64.fromNumber(header.value.valueOf()).bytes, 1);
            return tsBytes;
          case "uuid":
            if (!UUID_PATTERN.test(header.value)) {
              throw new Error(`Invalid UUID received: ${header.value}`);
            }
            const uuidBytes = new Uint8Array(17);
            uuidBytes[0] = 9;
            uuidBytes.set(fromHex(header.value.replace(/\-/g, "")), 1);
            return uuidBytes;
        }
      }
    };
    (function(HEADER_VALUE_TYPE2) {
      HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["boolTrue"] = 0] = "boolTrue";
      HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["boolFalse"] = 1] = "boolFalse";
      HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["byte"] = 2] = "byte";
      HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["short"] = 3] = "short";
      HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["integer"] = 4] = "integer";
      HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["long"] = 5] = "long";
      HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["byteArray"] = 6] = "byteArray";
      HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["string"] = 7] = "string";
      HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["timestamp"] = 8] = "timestamp";
      HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["uuid"] = 9] = "uuid";
    })(HEADER_VALUE_TYPE || (HEADER_VALUE_TYPE = {}));
    UUID_PATTERN = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
    Int64 = class _Int64 {
      static {
        __name(this, "Int64");
      }
      bytes;
      constructor(bytes) {
        this.bytes = bytes;
        if (bytes.byteLength !== 8) {
          throw new Error("Int64 buffers must be exactly 8 bytes");
        }
      }
      static fromNumber(number) {
        if (number > 9223372036854776e3 || number < -9223372036854776e3) {
          throw new Error(`${number} is too large (or, if negative, too small) to represent as an Int64`);
        }
        const bytes = new Uint8Array(8);
        for (let i6 = 7, remaining = Math.abs(Math.round(number)); i6 > -1 && remaining > 0; i6--, remaining /= 256) {
          bytes[i6] = remaining;
        }
        if (number < 0) {
          negate(bytes);
        }
        return new _Int64(bytes);
      }
      valueOf() {
        const bytes = this.bytes.slice(0);
        const negative = bytes[0] & 128;
        if (negative) {
          negate(bytes);
        }
        return parseInt(toHex(bytes), 16) * (negative ? -1 : 1);
      }
      toString() {
        return String(this.valueOf());
      }
    };
    __name(negate, "negate");
  }
});

// node_modules/@smithy/signature-v4/dist-es/headerUtil.js
var hasHeader;
var init_headerUtil = __esm({
  "node_modules/@smithy/signature-v4/dist-es/headerUtil.js"() {
    hasHeader = /* @__PURE__ */ __name((soughtHeader, headers) => {
      soughtHeader = soughtHeader.toLowerCase();
      for (const headerName of Object.keys(headers)) {
        if (soughtHeader === headerName.toLowerCase()) {
          return true;
        }
      }
      return false;
    }, "hasHeader");
  }
});

// node_modules/@smithy/signature-v4/dist-es/moveHeadersToQuery.js
var moveHeadersToQuery;
var init_moveHeadersToQuery = __esm({
  "node_modules/@smithy/signature-v4/dist-es/moveHeadersToQuery.js"() {
    init_dist_es2();
    moveHeadersToQuery = /* @__PURE__ */ __name((request2, options = {}) => {
      const { headers, query = {} } = HttpRequest.clone(request2);
      for (const name of Object.keys(headers)) {
        const lname = name.toLowerCase();
        if (lname.slice(0, 6) === "x-amz-" && !options.unhoistableHeaders?.has(lname) || options.hoistableHeaders?.has(lname)) {
          query[name] = headers[name];
          delete headers[name];
        }
      }
      return {
        ...request2,
        headers,
        query
      };
    }, "moveHeadersToQuery");
  }
});

// node_modules/@smithy/signature-v4/dist-es/prepareRequest.js
var prepareRequest;
var init_prepareRequest = __esm({
  "node_modules/@smithy/signature-v4/dist-es/prepareRequest.js"() {
    init_dist_es2();
    init_constants7();
    prepareRequest = /* @__PURE__ */ __name((request2) => {
      request2 = HttpRequest.clone(request2);
      for (const headerName of Object.keys(request2.headers)) {
        if (GENERATED_HEADERS.indexOf(headerName.toLowerCase()) > -1) {
          delete request2.headers[headerName];
        }
      }
      return request2;
    }, "prepareRequest");
  }
});

// node_modules/@smithy/signature-v4/dist-es/getCanonicalQuery.js
var getCanonicalQuery;
var init_getCanonicalQuery = __esm({
  "node_modules/@smithy/signature-v4/dist-es/getCanonicalQuery.js"() {
    init_dist_es11();
    init_constants7();
    getCanonicalQuery = /* @__PURE__ */ __name(({ query = {} }) => {
      const keys = [];
      const serialized = {};
      for (const key of Object.keys(query)) {
        if (key.toLowerCase() === SIGNATURE_HEADER) {
          continue;
        }
        const encodedKey = escapeUri(key);
        keys.push(encodedKey);
        const value = query[key];
        if (typeof value === "string") {
          serialized[encodedKey] = `${encodedKey}=${escapeUri(value)}`;
        } else if (Array.isArray(value)) {
          serialized[encodedKey] = value.slice(0).reduce((encoded, value2) => encoded.concat([`${encodedKey}=${escapeUri(value2)}`]), []).sort().join("&");
        }
      }
      return keys.sort().map((key) => serialized[key]).filter((serialized2) => serialized2).join("&");
    }, "getCanonicalQuery");
  }
});

// node_modules/@smithy/signature-v4/dist-es/utilDate.js
var iso8601, toDate;
var init_utilDate = __esm({
  "node_modules/@smithy/signature-v4/dist-es/utilDate.js"() {
    iso8601 = /* @__PURE__ */ __name((time2) => toDate(time2).toISOString().replace(/\.\d{3}Z$/, "Z"), "iso8601");
    toDate = /* @__PURE__ */ __name((time2) => {
      if (typeof time2 === "number") {
        return new Date(time2 * 1e3);
      }
      if (typeof time2 === "string") {
        if (Number(time2)) {
          return new Date(Number(time2) * 1e3);
        }
        return new Date(time2);
      }
      return time2;
    }, "toDate");
  }
});

// node_modules/@smithy/signature-v4/dist-es/SignatureV4Base.js
var SignatureV4Base;
var init_SignatureV4Base = __esm({
  "node_modules/@smithy/signature-v4/dist-es/SignatureV4Base.js"() {
    init_dist_es15();
    init_dist_es6();
    init_dist_es11();
    init_dist_es9();
    init_getCanonicalQuery();
    init_utilDate();
    SignatureV4Base = class {
      static {
        __name(this, "SignatureV4Base");
      }
      service;
      regionProvider;
      credentialProvider;
      sha256;
      uriEscapePath;
      applyChecksum;
      constructor({ applyChecksum, credentials, region, service, sha256, uriEscapePath = true }) {
        this.service = service;
        this.sha256 = sha256;
        this.uriEscapePath = uriEscapePath;
        this.applyChecksum = typeof applyChecksum === "boolean" ? applyChecksum : true;
        this.regionProvider = normalizeProvider(region);
        this.credentialProvider = normalizeProvider(credentials);
      }
      createCanonicalRequest(request2, canonicalHeaders, payloadHash) {
        const sortedHeaders = Object.keys(canonicalHeaders).sort();
        return `${request2.method}
${this.getCanonicalPath(request2)}
${getCanonicalQuery(request2)}
${sortedHeaders.map((name) => `${name}:${canonicalHeaders[name]}`).join("\n")}

${sortedHeaders.join(";")}
${payloadHash}`;
      }
      async createStringToSign(longDate, credentialScope, canonicalRequest, algorithmIdentifier) {
        const hash = new this.sha256();
        hash.update(toUint8Array(canonicalRequest));
        const hashedRequest = await hash.digest();
        return `${algorithmIdentifier}
${longDate}
${credentialScope}
${toHex(hashedRequest)}`;
      }
      getCanonicalPath({ path }) {
        if (this.uriEscapePath) {
          const normalizedPathSegments = [];
          for (const pathSegment of path.split("/")) {
            if (pathSegment?.length === 0)
              continue;
            if (pathSegment === ".")
              continue;
            if (pathSegment === "..") {
              normalizedPathSegments.pop();
            } else {
              normalizedPathSegments.push(pathSegment);
            }
          }
          const normalizedPath = `${path?.startsWith("/") ? "/" : ""}${normalizedPathSegments.join("/")}${normalizedPathSegments.length > 0 && path?.endsWith("/") ? "/" : ""}`;
          const doubleEncoded = escapeUri(normalizedPath);
          return doubleEncoded.replace(/%2F/g, "/");
        }
        return path;
      }
      validateResolvedCredentials(credentials) {
        if (typeof credentials !== "object" || typeof credentials.accessKeyId !== "string" || typeof credentials.secretAccessKey !== "string") {
          throw new Error("Resolved credential object is not valid");
        }
      }
      formatDate(now) {
        const longDate = iso8601(now).replace(/[\-:]/g, "");
        return {
          longDate,
          shortDate: longDate.slice(0, 8)
        };
      }
      getCanonicalHeaderList(headers) {
        return Object.keys(headers).sort().join(";");
      }
    };
  }
});

// node_modules/@smithy/signature-v4/dist-es/SignatureV4.js
var SignatureV4;
var init_SignatureV4 = __esm({
  "node_modules/@smithy/signature-v4/dist-es/SignatureV4.js"() {
    init_dist_es15();
    init_dist_es9();
    init_constants7();
    init_credentialDerivation();
    init_getCanonicalHeaders();
    init_getPayloadHash();
    init_HeaderFormatter();
    init_headerUtil();
    init_moveHeadersToQuery();
    init_prepareRequest();
    init_SignatureV4Base();
    SignatureV4 = class extends SignatureV4Base {
      static {
        __name(this, "SignatureV4");
      }
      headerFormatter = new HeaderFormatter();
      constructor({ applyChecksum, credentials, region, service, sha256, uriEscapePath = true }) {
        super({
          applyChecksum,
          credentials,
          region,
          service,
          sha256,
          uriEscapePath
        });
      }
      async presign(originalRequest, options = {}) {
        const { signingDate = /* @__PURE__ */ new Date(), expiresIn = 3600, unsignableHeaders, unhoistableHeaders, signableHeaders, hoistableHeaders, signingRegion, signingService } = options;
        const credentials = await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion ?? await this.regionProvider();
        const { longDate, shortDate } = this.formatDate(signingDate);
        if (expiresIn > MAX_PRESIGNED_TTL) {
          return Promise.reject("Signature version 4 presigned URLs must have an expiration date less than one week in the future");
        }
        const scope = createScope(shortDate, region, signingService ?? this.service);
        const request2 = moveHeadersToQuery(prepareRequest(originalRequest), { unhoistableHeaders, hoistableHeaders });
        if (credentials.sessionToken) {
          request2.query[TOKEN_QUERY_PARAM] = credentials.sessionToken;
        }
        request2.query[ALGORITHM_QUERY_PARAM] = ALGORITHM_IDENTIFIER;
        request2.query[CREDENTIAL_QUERY_PARAM] = `${credentials.accessKeyId}/${scope}`;
        request2.query[AMZ_DATE_QUERY_PARAM] = longDate;
        request2.query[EXPIRES_QUERY_PARAM] = expiresIn.toString(10);
        const canonicalHeaders = getCanonicalHeaders(request2, unsignableHeaders, signableHeaders);
        request2.query[SIGNED_HEADERS_QUERY_PARAM] = this.getCanonicalHeaderList(canonicalHeaders);
        request2.query[SIGNATURE_QUERY_PARAM] = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request2, canonicalHeaders, await getPayloadHash(originalRequest, this.sha256)));
        return request2;
      }
      async sign(toSign, options) {
        if (typeof toSign === "string") {
          return this.signString(toSign, options);
        } else if (toSign.headers && toSign.payload) {
          return this.signEvent(toSign, options);
        } else if (toSign.message) {
          return this.signMessage(toSign, options);
        } else {
          return this.signRequest(toSign, options);
        }
      }
      async signEvent({ headers, payload }, { signingDate = /* @__PURE__ */ new Date(), priorSignature, signingRegion, signingService, eventStreamCredentials }) {
        const region = signingRegion ?? await this.regionProvider();
        const { shortDate, longDate } = this.formatDate(signingDate);
        const scope = createScope(shortDate, region, signingService ?? this.service);
        const hashedPayload = await getPayloadHash({ headers: {}, body: payload }, this.sha256);
        const hash = new this.sha256();
        hash.update(headers);
        const hashedHeaders = toHex(await hash.digest());
        const stringToSign = [
          EVENT_ALGORITHM_IDENTIFIER,
          longDate,
          scope,
          priorSignature,
          hashedHeaders,
          hashedPayload
        ].join("\n");
        return this.signString(stringToSign, {
          signingDate,
          signingRegion: region,
          signingService,
          eventStreamCredentials
        });
      }
      async signMessage(signableMessage, { signingDate = /* @__PURE__ */ new Date(), signingRegion, signingService, eventStreamCredentials }) {
        const promise = this.signEvent({
          headers: this.headerFormatter.format(signableMessage.message.headers),
          payload: signableMessage.message.body
        }, {
          signingDate,
          signingRegion,
          signingService,
          priorSignature: signableMessage.priorSignature,
          eventStreamCredentials
        });
        return promise.then((signature) => {
          return { message: signableMessage.message, signature };
        });
      }
      async signString(stringToSign, { signingDate = /* @__PURE__ */ new Date(), signingRegion, signingService, eventStreamCredentials } = {}) {
        const credentials = eventStreamCredentials ?? await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion ?? await this.regionProvider();
        const { shortDate } = this.formatDate(signingDate);
        const hash = new this.sha256(await this.getSigningKey(credentials, region, shortDate, signingService));
        hash.update(toUint8Array(stringToSign));
        return toHex(await hash.digest());
      }
      async signRequest(requestToSign, { signingDate = /* @__PURE__ */ new Date(), signableHeaders, unsignableHeaders, signingRegion, signingService } = {}) {
        const credentials = await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion ?? await this.regionProvider();
        const request2 = prepareRequest(requestToSign);
        const { longDate, shortDate } = this.formatDate(signingDate);
        const scope = createScope(shortDate, region, signingService ?? this.service);
        request2.headers[AMZ_DATE_HEADER] = longDate;
        if (credentials.sessionToken) {
          request2.headers[TOKEN_HEADER] = credentials.sessionToken;
        }
        const payloadHash = await getPayloadHash(request2, this.sha256);
        if (!hasHeader(SHA256_HEADER, request2.headers) && this.applyChecksum) {
          request2.headers[SHA256_HEADER] = payloadHash;
        }
        const canonicalHeaders = getCanonicalHeaders(request2, unsignableHeaders, signableHeaders);
        const signature = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request2, canonicalHeaders, payloadHash));
        request2.headers[AUTH_HEADER] = `${ALGORITHM_IDENTIFIER} Credential=${credentials.accessKeyId}/${scope}, SignedHeaders=${this.getCanonicalHeaderList(canonicalHeaders)}, Signature=${signature}`;
        return request2;
      }
      async getSignature(longDate, credentialScope, keyPromise, canonicalRequest) {
        const stringToSign = await this.createStringToSign(longDate, credentialScope, canonicalRequest, ALGORITHM_IDENTIFIER);
        const hash = new this.sha256(await keyPromise);
        hash.update(toUint8Array(stringToSign));
        return toHex(await hash.digest());
      }
      getSigningKey(credentials, region, shortDate, service) {
        return getSigningKey(this.sha256, credentials, shortDate, region, service || this.service);
      }
    };
  }
});

// node_modules/@smithy/signature-v4/dist-es/signature-v4a-container.js
var signatureV4aContainer;
var init_signature_v4a_container = __esm({
  "node_modules/@smithy/signature-v4/dist-es/signature-v4a-container.js"() {
    signatureV4aContainer = {
      SignatureV4a: null
    };
  }
});

// node_modules/@smithy/signature-v4/dist-es/index.js
var init_dist_es37 = __esm({
  "node_modules/@smithy/signature-v4/dist-es/index.js"() {
    init_SignatureV4();
    init_constants7();
    init_credentialDerivation();
    init_signature_v4a_container();
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/resolveAwsSdkSigV4Config.js
function normalizeCredentialProvider(config, { credentials, credentialDefaultProvider }) {
  let credentialsProvider;
  if (credentials) {
    if (!credentials?.memoized) {
      credentialsProvider = memoizeIdentityProvider(credentials, isIdentityExpired, doesIdentityRequireRefresh);
    } else {
      credentialsProvider = credentials;
    }
  } else {
    if (credentialDefaultProvider) {
      credentialsProvider = normalizeProvider2(credentialDefaultProvider(Object.assign({}, config, {
        parentClientConfig: config
      })));
    } else {
      credentialsProvider = /* @__PURE__ */ __name(async () => {
        throw new Error("@aws-sdk/core::resolveAwsSdkSigV4Config - `credentials` not provided and no credentialDefaultProvider was configured.");
      }, "credentialsProvider");
    }
  }
  credentialsProvider.memoized = true;
  return credentialsProvider;
}
function bindCallerConfig(config, credentialsProvider) {
  if (credentialsProvider.configBound) {
    return credentialsProvider;
  }
  const fn = /* @__PURE__ */ __name(async (options) => credentialsProvider({ ...options, callerClientConfig: config }), "fn");
  fn.memoized = credentialsProvider.memoized;
  fn.configBound = true;
  return fn;
}
var resolveAwsSdkSigV4Config;
var init_resolveAwsSdkSigV4Config = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/resolveAwsSdkSigV4Config.js"() {
    init_client2();
    init_dist_es20();
    init_dist_es37();
    resolveAwsSdkSigV4Config = /* @__PURE__ */ __name((config) => {
      let inputCredentials = config.credentials;
      let isUserSupplied = !!config.credentials;
      let resolvedCredentials = void 0;
      Object.defineProperty(config, "credentials", {
        set(credentials) {
          if (credentials && credentials !== inputCredentials && credentials !== resolvedCredentials) {
            isUserSupplied = true;
          }
          inputCredentials = credentials;
          const memoizedProvider = normalizeCredentialProvider(config, {
            credentials: inputCredentials,
            credentialDefaultProvider: config.credentialDefaultProvider
          });
          const boundProvider = bindCallerConfig(config, memoizedProvider);
          if (isUserSupplied && !boundProvider.attributed) {
            const isCredentialObject = typeof inputCredentials === "object" && inputCredentials !== null;
            resolvedCredentials = /* @__PURE__ */ __name(async (options) => {
              const creds = await boundProvider(options);
              const attributedCreds = creds;
              if (isCredentialObject && (!attributedCreds.$source || Object.keys(attributedCreds.$source).length === 0)) {
                return setCredentialFeature(attributedCreds, "CREDENTIALS_CODE", "e");
              }
              return attributedCreds;
            }, "resolvedCredentials");
            resolvedCredentials.memoized = boundProvider.memoized;
            resolvedCredentials.configBound = boundProvider.configBound;
            resolvedCredentials.attributed = true;
          } else {
            resolvedCredentials = boundProvider;
          }
        },
        get() {
          return resolvedCredentials;
        },
        enumerable: true,
        configurable: true
      });
      config.credentials = inputCredentials;
      const { signingEscapePath = true, systemClockOffset = config.systemClockOffset || 0, sha256 } = config;
      let signer;
      if (config.signer) {
        signer = normalizeProvider2(config.signer);
      } else if (config.regionInfoProvider) {
        signer = /* @__PURE__ */ __name(() => normalizeProvider2(config.region)().then(async (region) => [
          await config.regionInfoProvider(region, {
            useFipsEndpoint: await config.useFipsEndpoint(),
            useDualstackEndpoint: await config.useDualstackEndpoint()
          }) || {},
          region
        ]).then(([regionInfo, region]) => {
          const { signingRegion, signingService } = regionInfo;
          config.signingRegion = config.signingRegion || signingRegion || region;
          config.signingName = config.signingName || signingService || config.serviceId;
          const params = {
            ...config,
            credentials: config.credentials,
            region: config.signingRegion,
            service: config.signingName,
            sha256,
            uriEscapePath: signingEscapePath
          };
          const SignerCtor = config.signerConstructor || SignatureV4;
          return new SignerCtor(params);
        }), "signer");
      } else {
        signer = /* @__PURE__ */ __name(async (authScheme) => {
          authScheme = Object.assign({}, {
            name: "sigv4",
            signingName: config.signingName || config.defaultSigningName,
            signingRegion: await normalizeProvider2(config.region)(),
            properties: {}
          }, authScheme);
          const signingRegion = authScheme.signingRegion;
          const signingService = authScheme.signingName;
          config.signingRegion = config.signingRegion || signingRegion;
          config.signingName = config.signingName || signingService || config.serviceId;
          const params = {
            ...config,
            credentials: config.credentials,
            region: config.signingRegion,
            service: config.signingName,
            sha256,
            uriEscapePath: signingEscapePath
          };
          const SignerCtor = config.signerConstructor || SignatureV4;
          return new SignerCtor(params);
        }, "signer");
      }
      const resolvedConfig = Object.assign(config, {
        systemClockOffset,
        signingEscapePath,
        signer
      });
      return resolvedConfig;
    }, "resolveAwsSdkSigV4Config");
    __name(normalizeCredentialProvider, "normalizeCredentialProvider");
    __name(bindCallerConfig, "bindCallerConfig");
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/index.js
var init_aws_sdk = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/index.js"() {
    init_AwsSdkSigV4Signer();
    init_AwsSdkSigV4ASigner();
    init_NODE_AUTH_SCHEME_PREFERENCE_OPTIONS();
    init_resolveAwsSdkSigV4AConfig();
    init_resolveAwsSdkSigV4Config();
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/index.js
var init_httpAuthSchemes2 = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/index.js"() {
    init_aws_sdk();
    init_getBearerTokenEnvKey();
  }
});

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/check-content-length-header.js
var init_check_content_length_header = __esm({
  "node_modules/@aws-sdk/middleware-sdk-s3/dist-es/check-content-length-header.js"() {
  }
});

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/region-redirect-endpoint-middleware.js
var init_region_redirect_endpoint_middleware = __esm({
  "node_modules/@aws-sdk/middleware-sdk-s3/dist-es/region-redirect-endpoint-middleware.js"() {
  }
});

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/region-redirect-middleware.js
var init_region_redirect_middleware = __esm({
  "node_modules/@aws-sdk/middleware-sdk-s3/dist-es/region-redirect-middleware.js"() {
  }
});

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-expires-middleware.js
var init_s3_expires_middleware = __esm({
  "node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-expires-middleware.js"() {
  }
});

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/constants.js
var SESSION_TOKEN_QUERY_PARAM, SESSION_TOKEN_HEADER;
var init_constants8 = __esm({
  "node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/constants.js"() {
    SESSION_TOKEN_QUERY_PARAM = "X-Amz-S3session-Token";
    SESSION_TOKEN_HEADER = SESSION_TOKEN_QUERY_PARAM.toLowerCase();
  }
});

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/classes/SignatureV4S3Express.js
function getCredentialsWithoutSessionToken(credentials) {
  const credentialsWithoutSessionToken = {
    accessKeyId: credentials.accessKeyId,
    secretAccessKey: credentials.secretAccessKey,
    expiration: credentials.expiration
  };
  return credentialsWithoutSessionToken;
}
function setSingleOverride(privateAccess, credentialsWithoutSessionToken) {
  const id = setTimeout(() => {
    throw new Error("SignatureV4S3Express credential override was created but not called.");
  }, 10);
  const currentCredentialProvider = privateAccess.credentialProvider;
  const overrideCredentialsProviderOnce = /* @__PURE__ */ __name(() => {
    clearTimeout(id);
    privateAccess.credentialProvider = currentCredentialProvider;
    return Promise.resolve(credentialsWithoutSessionToken);
  }, "overrideCredentialsProviderOnce");
  privateAccess.credentialProvider = overrideCredentialsProviderOnce;
}
var SignatureV4S3Express;
var init_SignatureV4S3Express = __esm({
  "node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/classes/SignatureV4S3Express.js"() {
    init_dist_es37();
    init_constants8();
    SignatureV4S3Express = class extends SignatureV4 {
      static {
        __name(this, "SignatureV4S3Express");
      }
      async signWithCredentials(requestToSign, credentials, options) {
        const credentialsWithoutSessionToken = getCredentialsWithoutSessionToken(credentials);
        requestToSign.headers[SESSION_TOKEN_HEADER] = credentials.sessionToken;
        const privateAccess = this;
        setSingleOverride(privateAccess, credentialsWithoutSessionToken);
        return privateAccess.signRequest(requestToSign, options ?? {});
      }
      async presignWithCredentials(requestToSign, credentials, options) {
        const credentialsWithoutSessionToken = getCredentialsWithoutSessionToken(credentials);
        delete requestToSign.headers[SESSION_TOKEN_HEADER];
        requestToSign.headers[SESSION_TOKEN_QUERY_PARAM] = credentials.sessionToken;
        requestToSign.query = requestToSign.query ?? {};
        requestToSign.query[SESSION_TOKEN_QUERY_PARAM] = credentials.sessionToken;
        const privateAccess = this;
        setSingleOverride(privateAccess, credentialsWithoutSessionToken);
        return this.presign(requestToSign, options);
      }
    };
    __name(getCredentialsWithoutSessionToken, "getCredentialsWithoutSessionToken");
    __name(setSingleOverride, "setSingleOverride");
  }
});

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/index.js
var init_s3_express = __esm({
  "node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/index.js"() {
    init_SignatureV4S3Express();
  }
});

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3Configuration.js
var init_s3Configuration = __esm({
  "node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3Configuration.js"() {
  }
});

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/throw-200-exceptions.js
var init_throw_200_exceptions = __esm({
  "node_modules/@aws-sdk/middleware-sdk-s3/dist-es/throw-200-exceptions.js"() {
  }
});

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/validate-bucket-name.js
var init_validate_bucket_name = __esm({
  "node_modules/@aws-sdk/middleware-sdk-s3/dist-es/validate-bucket-name.js"() {
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/ProtocolLib.js
var ProtocolLib;
var init_ProtocolLib = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/protocols/ProtocolLib.js"() {
    init_schema2();
    init_dist_es35();
    ProtocolLib = class {
      static {
        __name(this, "ProtocolLib");
      }
      queryCompat;
      errorRegistry;
      constructor(queryCompat = false) {
        this.queryCompat = queryCompat;
      }
      resolveRestContentType(defaultContentType, inputSchema) {
        const members = inputSchema.getMemberSchemas();
        const httpPayloadMember = Object.values(members).find((m4) => {
          return !!m4.getMergedTraits().httpPayload;
        });
        if (httpPayloadMember) {
          const mediaType = httpPayloadMember.getMergedTraits().mediaType;
          if (mediaType) {
            return mediaType;
          } else if (httpPayloadMember.isStringSchema()) {
            return "text/plain";
          } else if (httpPayloadMember.isBlobSchema()) {
            return "application/octet-stream";
          } else {
            return defaultContentType;
          }
        } else if (!inputSchema.isUnitSchema()) {
          const hasBody = Object.values(members).find((m4) => {
            const { httpQuery, httpQueryParams, httpHeader, httpLabel, httpPrefixHeaders } = m4.getMergedTraits();
            const noPrefixHeaders = httpPrefixHeaders === void 0;
            return !httpQuery && !httpQueryParams && !httpHeader && !httpLabel && noPrefixHeaders;
          });
          if (hasBody) {
            return defaultContentType;
          }
        }
      }
      async getErrorSchemaOrThrowBaseException(errorIdentifier, defaultNamespace, response, dataObject, metadata, getErrorSchema) {
        let errorName = errorIdentifier;
        if (errorIdentifier.includes("#")) {
          [, errorName] = errorIdentifier.split("#");
        }
        const errorMetadata = {
          $metadata: metadata,
          $fault: response.statusCode < 500 ? "client" : "server"
        };
        if (!this.errorRegistry) {
          throw new Error("@aws-sdk/core/protocols - error handler not initialized.");
        }
        try {
          const errorSchema = getErrorSchema?.(this.errorRegistry, errorName) ?? this.errorRegistry.getSchema(errorIdentifier);
          return { errorSchema, errorMetadata };
        } catch (e6) {
          dataObject.message = dataObject.message ?? dataObject.Message ?? "UnknownError";
          const synthetic = this.errorRegistry;
          const baseExceptionSchema = synthetic.getBaseException();
          if (baseExceptionSchema) {
            const ErrorCtor = synthetic.getErrorCtor(baseExceptionSchema) ?? Error;
            throw this.decorateServiceException(Object.assign(new ErrorCtor({ name: errorName }), errorMetadata), dataObject);
          }
          const d6 = dataObject;
          const message = d6?.message ?? d6?.Message ?? d6?.Error?.Message ?? d6?.Error?.message;
          throw this.decorateServiceException(Object.assign(new Error(message), {
            name: errorName
          }, errorMetadata), dataObject);
        }
      }
      compose(composite, errorIdentifier, defaultNamespace) {
        let namespace = defaultNamespace;
        if (errorIdentifier.includes("#")) {
          [namespace] = errorIdentifier.split("#");
        }
        const staticRegistry = TypeRegistry.for(namespace);
        const defaultSyntheticRegistry = TypeRegistry.for("smithy.ts.sdk.synthetic." + defaultNamespace);
        composite.copyFrom(staticRegistry);
        composite.copyFrom(defaultSyntheticRegistry);
        this.errorRegistry = composite;
      }
      decorateServiceException(exception, additions = {}) {
        if (this.queryCompat) {
          const msg = exception.Message ?? additions.Message;
          const error = decorateServiceException(exception, additions);
          if (msg) {
            error.message = msg;
          }
          const errorObj = error.Error ?? {};
          errorObj.Type = error.Error?.Type;
          errorObj.Code = error.Error?.Code;
          errorObj.Message = error.Error?.message ?? error.Error?.Message ?? msg;
          error.Error = errorObj;
          const reqId = error.$metadata.requestId;
          if (reqId) {
            error.RequestId = reqId;
          }
          return error;
        }
        return decorateServiceException(exception, additions);
      }
      setQueryCompatError(output, response) {
        const queryErrorHeader = response.headers?.["x-amzn-query-error"];
        if (output !== void 0 && queryErrorHeader != null) {
          const [Code, Type] = queryErrorHeader.split(";");
          const keys = Object.keys(output);
          const Error2 = {
            Code,
            Type
          };
          output.Code = Code;
          output.Type = Type;
          for (let i6 = 0; i6 < keys.length; i6++) {
            const k6 = keys[i6];
            Error2[k6 === "message" ? "Message" : k6] = output[k6];
          }
          delete Error2.__type;
          output.Error = Error2;
        }
      }
      queryCompatOutput(queryCompatErrorData, errorData) {
        if (queryCompatErrorData.Error) {
          errorData.Error = queryCompatErrorData.Error;
        }
        if (queryCompatErrorData.Type) {
          errorData.Type = queryCompatErrorData.Type;
        }
        if (queryCompatErrorData.Code) {
          errorData.Code = queryCompatErrorData.Code;
        }
      }
      findQueryCompatibleError(registry, errorName) {
        try {
          return registry.getSchema(errorName);
        } catch (e6) {
          return registry.find((schema) => NormalizedSchema.of(schema).getMergedTraits().awsQueryError?.[0] === errorName);
        }
      }
    };
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/cbor/AwsSmithyRpcV2CborProtocol.js
var init_AwsSmithyRpcV2CborProtocol = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/protocols/cbor/AwsSmithyRpcV2CborProtocol.js"() {
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/coercing-serializers.js
var init_coercing_serializers = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/protocols/coercing-serializers.js"() {
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/ConfigurableSerdeContext.js
var SerdeContextConfig;
var init_ConfigurableSerdeContext = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/protocols/ConfigurableSerdeContext.js"() {
    SerdeContextConfig = class {
      static {
        __name(this, "SerdeContextConfig");
      }
      serdeContext;
      setSerdeContext(serdeContext) {
        this.serdeContext = serdeContext;
      }
    };
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/UnionSerde.js
var UnionSerde;
var init_UnionSerde = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/protocols/UnionSerde.js"() {
    UnionSerde = class {
      static {
        __name(this, "UnionSerde");
      }
      from;
      to;
      keys;
      constructor(from, to) {
        this.from = from;
        this.to = to;
        const keys = Object.keys(this.from);
        const set = new Set(keys);
        set.delete("__type");
        this.keys = set;
      }
      mark(key) {
        this.keys.delete(key);
      }
      hasUnknown() {
        return this.keys.size === 1 && Object.keys(this.to).length === 0;
      }
      writeUnknown() {
        if (this.hasUnknown()) {
          const k6 = this.keys.values().next().value;
          const v = this.from[k6];
          this.to.$unknown = [k6, v];
        }
      }
    };
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/jsonReviver.js
function jsonReviver(key, value, context) {
  if (context?.source) {
    const numericString = context.source;
    if (typeof value === "number") {
      if (value > Number.MAX_SAFE_INTEGER || value < Number.MIN_SAFE_INTEGER || numericString !== String(value)) {
        const isFractional = numericString.includes(".");
        if (isFractional) {
          return new NumericValue(numericString, "bigDecimal");
        } else {
          return BigInt(numericString);
        }
      }
    }
  }
  return value;
}
var init_jsonReviver = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/jsonReviver.js"() {
    init_serde2();
    __name(jsonReviver, "jsonReviver");
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/common.js
var collectBodyString;
var init_common = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/protocols/common.js"() {
    init_dist_es35();
    init_dist_es9();
    collectBodyString = /* @__PURE__ */ __name((streamBody, context) => collectBody(streamBody, context).then((body) => (context?.utf8Encoder ?? toUtf8)(body)), "collectBodyString");
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/parseJsonBody.js
var parseJsonBody, findKey, sanitizeErrorCode, loadRestJsonErrorCode;
var init_parseJsonBody = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/parseJsonBody.js"() {
    init_common();
    parseJsonBody = /* @__PURE__ */ __name((streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
      if (encoded.length) {
        try {
          return JSON.parse(encoded);
        } catch (e6) {
          if (e6?.name === "SyntaxError") {
            Object.defineProperty(e6, "$responseBodyText", {
              value: encoded
            });
          }
          throw e6;
        }
      }
      return {};
    }), "parseJsonBody");
    findKey = /* @__PURE__ */ __name((object, key) => Object.keys(object).find((k6) => k6.toLowerCase() === key.toLowerCase()), "findKey");
    sanitizeErrorCode = /* @__PURE__ */ __name((rawValue) => {
      let cleanValue = rawValue;
      if (typeof cleanValue === "number") {
        cleanValue = cleanValue.toString();
      }
      if (cleanValue.indexOf(",") >= 0) {
        cleanValue = cleanValue.split(",")[0];
      }
      if (cleanValue.indexOf(":") >= 0) {
        cleanValue = cleanValue.split(":")[0];
      }
      if (cleanValue.indexOf("#") >= 0) {
        cleanValue = cleanValue.split("#")[1];
      }
      return cleanValue;
    }, "sanitizeErrorCode");
    loadRestJsonErrorCode = /* @__PURE__ */ __name((output, data) => {
      const headerKey = findKey(output.headers, "x-amzn-errortype");
      if (headerKey !== void 0) {
        return sanitizeErrorCode(output.headers[headerKey]);
      }
      if (data && typeof data === "object") {
        const codeKey = findKey(data, "code");
        if (codeKey && data[codeKey] !== void 0) {
          return sanitizeErrorCode(data[codeKey]);
        }
        if (data["__type"] !== void 0) {
          return sanitizeErrorCode(data["__type"]);
        }
      }
    }, "loadRestJsonErrorCode");
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/JsonShapeDeserializer.js
var JsonShapeDeserializer;
var init_JsonShapeDeserializer = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/JsonShapeDeserializer.js"() {
    init_protocols();
    init_schema2();
    init_serde2();
    init_dist_es10();
    init_ConfigurableSerdeContext();
    init_UnionSerde();
    init_jsonReviver();
    init_parseJsonBody();
    JsonShapeDeserializer = class extends SerdeContextConfig {
      static {
        __name(this, "JsonShapeDeserializer");
      }
      settings;
      constructor(settings) {
        super();
        this.settings = settings;
      }
      async read(schema, data) {
        return this._read(schema, typeof data === "string" ? JSON.parse(data, jsonReviver) : await parseJsonBody(data, this.serdeContext));
      }
      readObject(schema, data) {
        return this._read(schema, data);
      }
      _read(schema, value) {
        const isObject = value !== null && typeof value === "object";
        const ns = NormalizedSchema.of(schema);
        if (isObject) {
          if (ns.isStructSchema()) {
            const record = value;
            const union = ns.isUnionSchema();
            const out = {};
            let nameMap = void 0;
            const { jsonName } = this.settings;
            if (jsonName) {
              nameMap = {};
            }
            let unionSerde;
            if (union) {
              unionSerde = new UnionSerde(record, out);
            }
            for (const [memberName, memberSchema] of ns.structIterator()) {
              let fromKey = memberName;
              if (jsonName) {
                fromKey = memberSchema.getMergedTraits().jsonName ?? fromKey;
                nameMap[fromKey] = memberName;
              }
              if (union) {
                unionSerde.mark(fromKey);
              }
              if (record[fromKey] != null) {
                out[memberName] = this._read(memberSchema, record[fromKey]);
              }
            }
            if (union) {
              unionSerde.writeUnknown();
            } else if (typeof record.__type === "string") {
              for (const k6 in record) {
                const v = record[k6];
                const t = jsonName ? nameMap[k6] ?? k6 : k6;
                if (!(t in out)) {
                  out[t] = v;
                }
              }
            }
            return out;
          }
          if (Array.isArray(value) && ns.isListSchema()) {
            const listMember = ns.getValueSchema();
            const out = [];
            for (const item of value) {
              out.push(this._read(listMember, item));
            }
            return out;
          }
          if (ns.isMapSchema()) {
            const mapMember = ns.getValueSchema();
            const out = {};
            for (const _k in value) {
              out[_k] = this._read(mapMember, value[_k]);
            }
            return out;
          }
        }
        if (ns.isBlobSchema() && typeof value === "string") {
          return fromBase64(value);
        }
        const mediaType = ns.getMergedTraits().mediaType;
        if (ns.isStringSchema() && typeof value === "string" && mediaType) {
          const isJson = mediaType === "application/json" || mediaType.endsWith("+json");
          if (isJson) {
            return LazyJsonString.from(value);
          }
          return value;
        }
        if (ns.isTimestampSchema() && value != null) {
          const format2 = determineTimestampFormat(ns, this.settings);
          switch (format2) {
            case 5:
              return parseRfc3339DateTimeWithOffset(value);
            case 6:
              return parseRfc7231DateTime(value);
            case 7:
              return parseEpochTimestamp(value);
            default:
              console.warn("Missing timestamp format, parsing value with Date constructor:", value);
              return new Date(value);
          }
        }
        if (ns.isBigIntegerSchema() && (typeof value === "number" || typeof value === "string")) {
          return BigInt(value);
        }
        if (ns.isBigDecimalSchema() && value != void 0) {
          if (value instanceof NumericValue) {
            return value;
          }
          const untyped = value;
          if (untyped.type === "bigDecimal" && "string" in untyped) {
            return new NumericValue(untyped.string, untyped.type);
          }
          return new NumericValue(String(value), "bigDecimal");
        }
        if (ns.isNumericSchema() && typeof value === "string") {
          switch (value) {
            case "Infinity":
              return Infinity;
            case "-Infinity":
              return -Infinity;
            case "NaN":
              return NaN;
          }
          return value;
        }
        if (ns.isDocumentSchema()) {
          if (isObject) {
            const out = Array.isArray(value) ? [] : {};
            for (const k6 in value) {
              const v = value[k6];
              if (v instanceof NumericValue) {
                out[k6] = v;
              } else {
                out[k6] = this._read(ns, v);
              }
            }
            return out;
          } else {
            return structuredClone(value);
          }
        }
        return value;
      }
    };
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/jsonReplacer.js
var NUMERIC_CONTROL_CHAR, JsonReplacer;
var init_jsonReplacer = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/jsonReplacer.js"() {
    init_serde2();
    NUMERIC_CONTROL_CHAR = String.fromCharCode(925);
    JsonReplacer = class {
      static {
        __name(this, "JsonReplacer");
      }
      values = /* @__PURE__ */ new Map();
      counter = 0;
      stage = 0;
      createReplacer() {
        if (this.stage === 1) {
          throw new Error("@aws-sdk/core/protocols - JsonReplacer already created.");
        }
        if (this.stage === 2) {
          throw new Error("@aws-sdk/core/protocols - JsonReplacer exhausted.");
        }
        this.stage = 1;
        return (key, value) => {
          if (value instanceof NumericValue) {
            const v = `${NUMERIC_CONTROL_CHAR + "nv" + this.counter++}_` + value.string;
            this.values.set(`"${v}"`, value.string);
            return v;
          }
          if (typeof value === "bigint") {
            const s = value.toString();
            const v = `${NUMERIC_CONTROL_CHAR + "b" + this.counter++}_` + s;
            this.values.set(`"${v}"`, s);
            return v;
          }
          return value;
        };
      }
      replaceInJson(json) {
        if (this.stage === 0) {
          throw new Error("@aws-sdk/core/protocols - JsonReplacer not created yet.");
        }
        if (this.stage === 2) {
          throw new Error("@aws-sdk/core/protocols - JsonReplacer exhausted.");
        }
        this.stage = 2;
        if (this.counter === 0) {
          return json;
        }
        for (const [key, value] of this.values) {
          json = json.replace(key, value);
        }
        return json;
      }
    };
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/JsonShapeSerializer.js
var JsonShapeSerializer;
var init_JsonShapeSerializer = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/JsonShapeSerializer.js"() {
    init_protocols();
    init_schema2();
    init_serde2();
    init_dist_es10();
    init_ConfigurableSerdeContext();
    init_jsonReplacer();
    JsonShapeSerializer = class extends SerdeContextConfig {
      static {
        __name(this, "JsonShapeSerializer");
      }
      settings;
      buffer;
      useReplacer = false;
      rootSchema;
      constructor(settings) {
        super();
        this.settings = settings;
      }
      write(schema, value) {
        this.rootSchema = NormalizedSchema.of(schema);
        this.buffer = this._write(this.rootSchema, value);
      }
      flush() {
        const { rootSchema, useReplacer } = this;
        this.rootSchema = void 0;
        this.useReplacer = false;
        if (rootSchema?.isStructSchema() || rootSchema?.isDocumentSchema()) {
          if (!useReplacer) {
            return JSON.stringify(this.buffer);
          }
          const replacer = new JsonReplacer();
          return replacer.replaceInJson(JSON.stringify(this.buffer, replacer.createReplacer(), 0));
        }
        return this.buffer;
      }
      writeDiscriminatedDocument(schema, value) {
        this.write(schema, value);
        if (typeof this.buffer === "object") {
          this.buffer.__type = NormalizedSchema.of(schema).getName(true);
        }
      }
      _write(schema, value, container) {
        const isObject = value !== null && typeof value === "object";
        const ns = NormalizedSchema.of(schema);
        if (isObject) {
          if (ns.isStructSchema()) {
            const record = value;
            const out = {};
            const { jsonName } = this.settings;
            let nameMap = void 0;
            if (jsonName) {
              nameMap = {};
            }
            let outCount = 0;
            for (const [memberName, memberSchema] of ns.structIterator()) {
              const serializableValue = this._write(memberSchema, record[memberName], ns);
              if (serializableValue !== void 0) {
                let targetKey = memberName;
                if (jsonName) {
                  targetKey = memberSchema.getMergedTraits().jsonName ?? memberName;
                  nameMap[memberName] = targetKey;
                }
                out[targetKey] = serializableValue;
                outCount++;
              }
            }
            if (ns.isUnionSchema() && outCount === 0) {
              const { $unknown } = record;
              if (Array.isArray($unknown)) {
                const [k6, v] = $unknown;
                out[k6] = this._write(15, v);
              }
            } else if (typeof record.__type === "string") {
              for (const k6 in record) {
                const v = record[k6];
                const targetKey = jsonName ? nameMap[k6] ?? k6 : k6;
                if (!(targetKey in out)) {
                  out[targetKey] = this._write(15, v);
                }
              }
            }
            return out;
          }
          if (Array.isArray(value) && ns.isListSchema()) {
            const listMember = ns.getValueSchema();
            const out = [];
            const sparse = !!ns.getMergedTraits().sparse;
            for (const item of value) {
              if (sparse || item != null) {
                out.push(this._write(listMember, item));
              }
            }
            return out;
          }
          if (ns.isMapSchema()) {
            const mapMember = ns.getValueSchema();
            const out = {};
            const sparse = !!ns.getMergedTraits().sparse;
            for (const _k in value) {
              const _v = value[_k];
              if (sparse || _v != null) {
                out[_k] = this._write(mapMember, _v);
              }
            }
            return out;
          }
          if (value instanceof Uint8Array && (ns.isBlobSchema() || ns.isDocumentSchema())) {
            if (ns === this.rootSchema) {
              return value;
            }
            return (this.serdeContext?.base64Encoder ?? toBase64)(value);
          }
          if (value instanceof Date && (ns.isTimestampSchema() || ns.isDocumentSchema())) {
            const format2 = determineTimestampFormat(ns, this.settings);
            switch (format2) {
              case 5:
                return value.toISOString().replace(".000Z", "Z");
              case 6:
                return dateToUtcString(value);
              case 7:
                return value.getTime() / 1e3;
              default:
                console.warn("Missing timestamp format, using epoch seconds", value);
                return value.getTime() / 1e3;
            }
          }
          if (value instanceof NumericValue) {
            this.useReplacer = true;
          }
        }
        if (value === null && container?.isStructSchema()) {
          return void 0;
        }
        if (ns.isStringSchema()) {
          if (typeof value === "undefined" && ns.isIdempotencyToken()) {
            return v4();
          }
          const mediaType = ns.getMergedTraits().mediaType;
          if (value != null && mediaType) {
            const isJson = mediaType === "application/json" || mediaType.endsWith("+json");
            if (isJson) {
              return LazyJsonString.from(value);
            }
          }
          return value;
        }
        if (typeof value === "number" && ns.isNumericSchema()) {
          if (Math.abs(value) === Infinity || isNaN(value)) {
            return String(value);
          }
          return value;
        }
        if (typeof value === "string" && ns.isBlobSchema()) {
          if (ns === this.rootSchema) {
            return value;
          }
          return (this.serdeContext?.base64Encoder ?? toBase64)(value);
        }
        if (typeof value === "bigint") {
          this.useReplacer = true;
        }
        if (ns.isDocumentSchema()) {
          if (isObject) {
            const out = Array.isArray(value) ? [] : {};
            for (const k6 in value) {
              const v = value[k6];
              if (v instanceof NumericValue) {
                this.useReplacer = true;
                out[k6] = v;
              } else {
                out[k6] = this._write(ns, v);
              }
            }
            return out;
          } else {
            return structuredClone(value);
          }
        }
        return value;
      }
    };
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/JsonCodec.js
var JsonCodec;
var init_JsonCodec = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/JsonCodec.js"() {
    init_ConfigurableSerdeContext();
    init_JsonShapeDeserializer();
    init_JsonShapeSerializer();
    JsonCodec = class extends SerdeContextConfig {
      static {
        __name(this, "JsonCodec");
      }
      settings;
      constructor(settings) {
        super();
        this.settings = settings;
      }
      createSerializer() {
        const serializer = new JsonShapeSerializer(this.settings);
        serializer.setSerdeContext(this.serdeContext);
        return serializer;
      }
      createDeserializer() {
        const deserializer = new JsonShapeDeserializer(this.settings);
        deserializer.setSerdeContext(this.serdeContext);
        return deserializer;
      }
    };
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/AwsJsonRpcProtocol.js
var init_AwsJsonRpcProtocol = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/AwsJsonRpcProtocol.js"() {
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/AwsJson1_0Protocol.js
var init_AwsJson1_0Protocol = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/AwsJson1_0Protocol.js"() {
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/AwsJson1_1Protocol.js
var init_AwsJson1_1Protocol = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/AwsJson1_1Protocol.js"() {
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/AwsRestJsonProtocol.js
var AwsRestJsonProtocol;
var init_AwsRestJsonProtocol = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/AwsRestJsonProtocol.js"() {
    init_protocols();
    init_schema2();
    init_ProtocolLib();
    init_JsonCodec();
    init_parseJsonBody();
    AwsRestJsonProtocol = class extends HttpBindingProtocol {
      static {
        __name(this, "AwsRestJsonProtocol");
      }
      serializer;
      deserializer;
      codec;
      mixin = new ProtocolLib();
      constructor({ defaultNamespace, errorTypeRegistries: errorTypeRegistries6 }) {
        super({
          defaultNamespace,
          errorTypeRegistries: errorTypeRegistries6
        });
        const settings = {
          timestampFormat: {
            useTrait: true,
            default: 7
          },
          httpBindings: true,
          jsonName: true
        };
        this.codec = new JsonCodec(settings);
        this.serializer = new HttpInterceptingShapeSerializer(this.codec.createSerializer(), settings);
        this.deserializer = new HttpInterceptingShapeDeserializer(this.codec.createDeserializer(), settings);
      }
      getShapeId() {
        return "aws.protocols#restJson1";
      }
      getPayloadCodec() {
        return this.codec;
      }
      setSerdeContext(serdeContext) {
        this.codec.setSerdeContext(serdeContext);
        super.setSerdeContext(serdeContext);
      }
      async serializeRequest(operationSchema, input, context) {
        const request2 = await super.serializeRequest(operationSchema, input, context);
        const inputSchema = NormalizedSchema.of(operationSchema.input);
        if (!request2.headers["content-type"]) {
          const contentType = this.mixin.resolveRestContentType(this.getDefaultContentType(), inputSchema);
          if (contentType) {
            request2.headers["content-type"] = contentType;
          }
        }
        if (request2.body == null && request2.headers["content-type"] === this.getDefaultContentType()) {
          request2.body = "{}";
        }
        return request2;
      }
      async deserializeResponse(operationSchema, context, response) {
        const output = await super.deserializeResponse(operationSchema, context, response);
        const outputSchema = NormalizedSchema.of(operationSchema.output);
        for (const [name, member2] of outputSchema.structIterator()) {
          if (member2.getMemberTraits().httpPayload && !(name in output)) {
            output[name] = null;
          }
        }
        return output;
      }
      async handleError(operationSchema, context, response, dataObject, metadata) {
        const errorIdentifier = loadRestJsonErrorCode(response, dataObject) ?? "Unknown";
        this.mixin.compose(this.compositeErrorRegistry, errorIdentifier, this.options.defaultNamespace);
        const { errorSchema, errorMetadata } = await this.mixin.getErrorSchemaOrThrowBaseException(errorIdentifier, this.options.defaultNamespace, response, dataObject, metadata);
        const ns = NormalizedSchema.of(errorSchema);
        const message = dataObject.message ?? dataObject.Message ?? "UnknownError";
        const ErrorCtor = this.compositeErrorRegistry.getErrorCtor(errorSchema) ?? Error;
        const exception = new ErrorCtor(message);
        await this.deserializeHttpMessage(errorSchema, context, response, dataObject);
        const output = {};
        const errorDeserializer = this.codec.createDeserializer();
        for (const [name, member2] of ns.structIterator()) {
          const target = member2.getMergedTraits().jsonName ?? name;
          output[name] = errorDeserializer.readObject(member2, dataObject[target]);
        }
        throw this.mixin.decorateServiceException(Object.assign(exception, errorMetadata, {
          $fault: ns.getMergedTraits().error,
          message
        }, output), dataObject);
      }
      getDefaultContentType() {
        return "application/json";
      }
    };
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/awsExpectUnion.js
var init_awsExpectUnion = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/awsExpectUnion.js"() {
  }
});

// node_modules/@aws-sdk/xml-builder/dist-es/XmlText.js
var init_XmlText = __esm({
  "node_modules/@aws-sdk/xml-builder/dist-es/XmlText.js"() {
  }
});

// node_modules/@aws-sdk/xml-builder/dist-es/XmlNode.js
var init_XmlNode = __esm({
  "node_modules/@aws-sdk/xml-builder/dist-es/XmlNode.js"() {
  }
});

// node_modules/fast-xml-parser/src/util.js
function getAllMatches(string, regex) {
  const matches = [];
  let match = regex.exec(string);
  while (match) {
    const allmatches = [];
    allmatches.startIndex = regex.lastIndex - match[0].length;
    const len = match.length;
    for (let index = 0; index < len; index++) {
      allmatches.push(match[index]);
    }
    matches.push(allmatches);
    match = regex.exec(string);
  }
  return matches;
}
function isExist(v) {
  return typeof v !== "undefined";
}
var nameStartChar, nameChar, nameRegexp, regexName, isName, DANGEROUS_PROPERTY_NAMES, criticalProperties;
var init_util3 = __esm({
  "node_modules/fast-xml-parser/src/util.js"() {
    "use strict";
    nameStartChar = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
    nameChar = nameStartChar + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
    nameRegexp = "[" + nameStartChar + "][" + nameChar + "]*";
    regexName = new RegExp("^" + nameRegexp + "$");
    __name(getAllMatches, "getAllMatches");
    isName = /* @__PURE__ */ __name(function(string) {
      const match = regexName.exec(string);
      return !(match === null || typeof match === "undefined");
    }, "isName");
    __name(isExist, "isExist");
    DANGEROUS_PROPERTY_NAMES = [
      // '__proto__',
      // 'constructor',
      // 'prototype',
      "hasOwnProperty",
      "toString",
      "valueOf",
      "__defineGetter__",
      "__defineSetter__",
      "__lookupGetter__",
      "__lookupSetter__"
    ];
    criticalProperties = ["__proto__", "constructor", "prototype"];
  }
});

// node_modules/fast-xml-parser/src/validator.js
function validate(xmlData, options) {
  options = Object.assign({}, defaultOptions, options);
  const tags = [];
  let tagFound = false;
  let reachedRoot = false;
  if (xmlData[0] === "\uFEFF") {
    xmlData = xmlData.substr(1);
  }
  for (let i6 = 0; i6 < xmlData.length; i6++) {
    if (xmlData[i6] === "<" && xmlData[i6 + 1] === "?") {
      i6 += 2;
      i6 = readPI(xmlData, i6);
      if (i6.err) return i6;
    } else if (xmlData[i6] === "<") {
      let tagStartPos = i6;
      i6++;
      if (xmlData[i6] === "!") {
        i6 = readCommentAndCDATA(xmlData, i6);
        continue;
      } else {
        let closingTag = false;
        if (xmlData[i6] === "/") {
          closingTag = true;
          i6++;
        }
        let tagName = "";
        for (; i6 < xmlData.length && xmlData[i6] !== ">" && xmlData[i6] !== " " && xmlData[i6] !== "	" && xmlData[i6] !== "\n" && xmlData[i6] !== "\r"; i6++) {
          tagName += xmlData[i6];
        }
        tagName = tagName.trim();
        if (tagName[tagName.length - 1] === "/") {
          tagName = tagName.substring(0, tagName.length - 1);
          i6--;
        }
        if (!validateTagName(tagName)) {
          let msg;
          if (tagName.trim().length === 0) {
            msg = "Invalid space after '<'.";
          } else {
            msg = "Tag '" + tagName + "' is an invalid name.";
          }
          return getErrorObject("InvalidTag", msg, getLineNumberForPosition(xmlData, i6));
        }
        const result = readAttributeStr(xmlData, i6);
        if (result === false) {
          return getErrorObject("InvalidAttr", "Attributes for '" + tagName + "' have open quote.", getLineNumberForPosition(xmlData, i6));
        }
        let attrStr = result.value;
        i6 = result.index;
        if (attrStr[attrStr.length - 1] === "/") {
          const attrStrStart = i6 - attrStr.length;
          attrStr = attrStr.substring(0, attrStr.length - 1);
          const isValid = validateAttributeString(attrStr, options);
          if (isValid === true) {
            tagFound = true;
          } else {
            return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, attrStrStart + isValid.err.line));
          }
        } else if (closingTag) {
          if (!result.tagClosed) {
            return getErrorObject("InvalidTag", "Closing tag '" + tagName + "' doesn't have proper closing.", getLineNumberForPosition(xmlData, i6));
          } else if (attrStr.trim().length > 0) {
            return getErrorObject("InvalidTag", "Closing tag '" + tagName + "' can't have attributes or invalid starting.", getLineNumberForPosition(xmlData, tagStartPos));
          } else if (tags.length === 0) {
            return getErrorObject("InvalidTag", "Closing tag '" + tagName + "' has not been opened.", getLineNumberForPosition(xmlData, tagStartPos));
          } else {
            const otg = tags.pop();
            if (tagName !== otg.tagName) {
              let openPos = getLineNumberForPosition(xmlData, otg.tagStartPos);
              return getErrorObject(
                "InvalidTag",
                "Expected closing tag '" + otg.tagName + "' (opened in line " + openPos.line + ", col " + openPos.col + ") instead of closing tag '" + tagName + "'.",
                getLineNumberForPosition(xmlData, tagStartPos)
              );
            }
            if (tags.length == 0) {
              reachedRoot = true;
            }
          }
        } else {
          const isValid = validateAttributeString(attrStr, options);
          if (isValid !== true) {
            return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, i6 - attrStr.length + isValid.err.line));
          }
          if (reachedRoot === true) {
            return getErrorObject("InvalidXml", "Multiple possible root nodes found.", getLineNumberForPosition(xmlData, i6));
          } else if (options.unpairedTags.indexOf(tagName) !== -1) {
          } else {
            tags.push({ tagName, tagStartPos });
          }
          tagFound = true;
        }
        for (i6++; i6 < xmlData.length; i6++) {
          if (xmlData[i6] === "<") {
            if (xmlData[i6 + 1] === "!") {
              i6++;
              i6 = readCommentAndCDATA(xmlData, i6);
              continue;
            } else if (xmlData[i6 + 1] === "?") {
              i6 = readPI(xmlData, ++i6);
              if (i6.err) return i6;
            } else {
              break;
            }
          } else if (xmlData[i6] === "&") {
            const afterAmp = validateAmpersand(xmlData, i6);
            if (afterAmp == -1)
              return getErrorObject("InvalidChar", "char '&' is not expected.", getLineNumberForPosition(xmlData, i6));
            i6 = afterAmp;
          } else {
            if (reachedRoot === true && !isWhiteSpace(xmlData[i6])) {
              return getErrorObject("InvalidXml", "Extra text at the end", getLineNumberForPosition(xmlData, i6));
            }
          }
        }
        if (xmlData[i6] === "<") {
          i6--;
        }
      }
    } else {
      if (isWhiteSpace(xmlData[i6])) {
        continue;
      }
      return getErrorObject("InvalidChar", "char '" + xmlData[i6] + "' is not expected.", getLineNumberForPosition(xmlData, i6));
    }
  }
  if (!tagFound) {
    return getErrorObject("InvalidXml", "Start tag expected.", 1);
  } else if (tags.length == 1) {
    return getErrorObject("InvalidTag", "Unclosed tag '" + tags[0].tagName + "'.", getLineNumberForPosition(xmlData, tags[0].tagStartPos));
  } else if (tags.length > 0) {
    return getErrorObject("InvalidXml", "Invalid '" + JSON.stringify(tags.map((t) => t.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
  }
  return true;
}
function isWhiteSpace(char) {
  return char === " " || char === "	" || char === "\n" || char === "\r";
}
function readPI(xmlData, i6) {
  const start = i6;
  for (; i6 < xmlData.length; i6++) {
    if (xmlData[i6] == "?" || xmlData[i6] == " ") {
      const tagname = xmlData.substr(start, i6 - start);
      if (i6 > 5 && tagname === "xml") {
        return getErrorObject("InvalidXml", "XML declaration allowed only at the start of the document.", getLineNumberForPosition(xmlData, i6));
      } else if (xmlData[i6] == "?" && xmlData[i6 + 1] == ">") {
        i6++;
        break;
      } else {
        continue;
      }
    }
  }
  return i6;
}
function readCommentAndCDATA(xmlData, i6) {
  if (xmlData.length > i6 + 5 && xmlData[i6 + 1] === "-" && xmlData[i6 + 2] === "-") {
    for (i6 += 3; i6 < xmlData.length; i6++) {
      if (xmlData[i6] === "-" && xmlData[i6 + 1] === "-" && xmlData[i6 + 2] === ">") {
        i6 += 2;
        break;
      }
    }
  } else if (xmlData.length > i6 + 8 && xmlData[i6 + 1] === "D" && xmlData[i6 + 2] === "O" && xmlData[i6 + 3] === "C" && xmlData[i6 + 4] === "T" && xmlData[i6 + 5] === "Y" && xmlData[i6 + 6] === "P" && xmlData[i6 + 7] === "E") {
    let angleBracketsCount = 1;
    for (i6 += 8; i6 < xmlData.length; i6++) {
      if (xmlData[i6] === "<") {
        angleBracketsCount++;
      } else if (xmlData[i6] === ">") {
        angleBracketsCount--;
        if (angleBracketsCount === 0) {
          break;
        }
      }
    }
  } else if (xmlData.length > i6 + 9 && xmlData[i6 + 1] === "[" && xmlData[i6 + 2] === "C" && xmlData[i6 + 3] === "D" && xmlData[i6 + 4] === "A" && xmlData[i6 + 5] === "T" && xmlData[i6 + 6] === "A" && xmlData[i6 + 7] === "[") {
    for (i6 += 8; i6 < xmlData.length; i6++) {
      if (xmlData[i6] === "]" && xmlData[i6 + 1] === "]" && xmlData[i6 + 2] === ">") {
        i6 += 2;
        break;
      }
    }
  }
  return i6;
}
function readAttributeStr(xmlData, i6) {
  let attrStr = "";
  let startChar = "";
  let tagClosed = false;
  for (; i6 < xmlData.length; i6++) {
    if (xmlData[i6] === doubleQuote || xmlData[i6] === singleQuote) {
      if (startChar === "") {
        startChar = xmlData[i6];
      } else if (startChar !== xmlData[i6]) {
      } else {
        startChar = "";
      }
    } else if (xmlData[i6] === ">") {
      if (startChar === "") {
        tagClosed = true;
        break;
      }
    }
    attrStr += xmlData[i6];
  }
  if (startChar !== "") {
    return false;
  }
  return {
    value: attrStr,
    index: i6,
    tagClosed
  };
}
function validateAttributeString(attrStr, options) {
  const matches = getAllMatches(attrStr, validAttrStrRegxp);
  const attrNames = {};
  for (let i6 = 0; i6 < matches.length; i6++) {
    if (matches[i6][1].length === 0) {
      return getErrorObject("InvalidAttr", "Attribute '" + matches[i6][2] + "' has no space in starting.", getPositionFromMatch(matches[i6]));
    } else if (matches[i6][3] !== void 0 && matches[i6][4] === void 0) {
      return getErrorObject("InvalidAttr", "Attribute '" + matches[i6][2] + "' is without value.", getPositionFromMatch(matches[i6]));
    } else if (matches[i6][3] === void 0 && !options.allowBooleanAttributes) {
      return getErrorObject("InvalidAttr", "boolean attribute '" + matches[i6][2] + "' is not allowed.", getPositionFromMatch(matches[i6]));
    }
    const attrName = matches[i6][2];
    if (!validateAttrName(attrName)) {
      return getErrorObject("InvalidAttr", "Attribute '" + attrName + "' is an invalid name.", getPositionFromMatch(matches[i6]));
    }
    if (!Object.prototype.hasOwnProperty.call(attrNames, attrName)) {
      attrNames[attrName] = 1;
    } else {
      return getErrorObject("InvalidAttr", "Attribute '" + attrName + "' is repeated.", getPositionFromMatch(matches[i6]));
    }
  }
  return true;
}
function validateNumberAmpersand(xmlData, i6) {
  let re = /\d/;
  if (xmlData[i6] === "x") {
    i6++;
    re = /[\da-fA-F]/;
  }
  for (; i6 < xmlData.length; i6++) {
    if (xmlData[i6] === ";")
      return i6;
    if (!xmlData[i6].match(re))
      break;
  }
  return -1;
}
function validateAmpersand(xmlData, i6) {
  i6++;
  if (xmlData[i6] === ";")
    return -1;
  if (xmlData[i6] === "#") {
    i6++;
    return validateNumberAmpersand(xmlData, i6);
  }
  let count = 0;
  for (; i6 < xmlData.length; i6++, count++) {
    if (xmlData[i6].match(/\w/) && count < 20)
      continue;
    if (xmlData[i6] === ";")
      break;
    return -1;
  }
  return i6;
}
function getErrorObject(code, message, lineNumber) {
  return {
    err: {
      code,
      msg: message,
      line: lineNumber.line || lineNumber,
      col: lineNumber.col
    }
  };
}
function validateAttrName(attrName) {
  return isName(attrName);
}
function validateTagName(tagname) {
  return isName(tagname);
}
function getLineNumberForPosition(xmlData, index) {
  const lines = xmlData.substring(0, index).split(/\r?\n/);
  return {
    line: lines.length,
    // column number is last line's length + 1, because column numbering starts at 1:
    col: lines[lines.length - 1].length + 1
  };
}
function getPositionFromMatch(match) {
  return match.startIndex + match[1].length;
}
var defaultOptions, doubleQuote, singleQuote, validAttrStrRegxp;
var init_validator = __esm({
  "node_modules/fast-xml-parser/src/validator.js"() {
    "use strict";
    init_util3();
    defaultOptions = {
      allowBooleanAttributes: false,
      //A tag can have attributes without any value
      unpairedTags: []
    };
    __name(validate, "validate");
    __name(isWhiteSpace, "isWhiteSpace");
    __name(readPI, "readPI");
    __name(readCommentAndCDATA, "readCommentAndCDATA");
    doubleQuote = '"';
    singleQuote = "'";
    __name(readAttributeStr, "readAttributeStr");
    validAttrStrRegxp = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
    __name(validateAttributeString, "validateAttributeString");
    __name(validateNumberAmpersand, "validateNumberAmpersand");
    __name(validateAmpersand, "validateAmpersand");
    __name(getErrorObject, "getErrorObject");
    __name(validateAttrName, "validateAttrName");
    __name(validateTagName, "validateTagName");
    __name(getLineNumberForPosition, "getLineNumberForPosition");
    __name(getPositionFromMatch, "getPositionFromMatch");
  }
});

// node_modules/fast-xml-parser/src/xmlparser/OptionsBuilder.js
function validatePropertyName(propertyName, optionName) {
  if (typeof propertyName !== "string") {
    return;
  }
  const normalized = propertyName.toLowerCase();
  if (DANGEROUS_PROPERTY_NAMES.some((dangerous) => normalized === dangerous.toLowerCase())) {
    throw new Error(
      `[SECURITY] Invalid ${optionName}: "${propertyName}" is a reserved JavaScript keyword that could cause prototype pollution`
    );
  }
  if (criticalProperties.some((dangerous) => normalized === dangerous.toLowerCase())) {
    throw new Error(
      `[SECURITY] Invalid ${optionName}: "${propertyName}" is a reserved JavaScript keyword that could cause prototype pollution`
    );
  }
}
function normalizeProcessEntities(value) {
  if (typeof value === "boolean") {
    return {
      enabled: value,
      // true or false
      maxEntitySize: 1e4,
      maxExpansionDepth: 10,
      maxTotalExpansions: 1e3,
      maxExpandedLength: 1e5,
      maxEntityCount: 100,
      allowedTags: null,
      tagFilter: null
    };
  }
  if (typeof value === "object" && value !== null) {
    return {
      enabled: value.enabled !== false,
      maxEntitySize: Math.max(1, value.maxEntitySize ?? 1e4),
      maxExpansionDepth: Math.max(1, value.maxExpansionDepth ?? 10),
      maxTotalExpansions: Math.max(1, value.maxTotalExpansions ?? 1e3),
      maxExpandedLength: Math.max(1, value.maxExpandedLength ?? 1e5),
      maxEntityCount: Math.max(1, value.maxEntityCount ?? 100),
      allowedTags: value.allowedTags ?? null,
      tagFilter: value.tagFilter ?? null
    };
  }
  return normalizeProcessEntities(true);
}
var defaultOnDangerousProperty, defaultOptions2, buildOptions;
var init_OptionsBuilder = __esm({
  "node_modules/fast-xml-parser/src/xmlparser/OptionsBuilder.js"() {
    init_util3();
    defaultOnDangerousProperty = /* @__PURE__ */ __name((name) => {
      if (DANGEROUS_PROPERTY_NAMES.includes(name)) {
        return "__" + name;
      }
      return name;
    }, "defaultOnDangerousProperty");
    defaultOptions2 = {
      preserveOrder: false,
      attributeNamePrefix: "@_",
      attributesGroupName: false,
      textNodeName: "#text",
      ignoreAttributes: true,
      removeNSPrefix: false,
      // remove NS from tag name or attribute name if true
      allowBooleanAttributes: false,
      //a tag can have attributes without any value
      //ignoreRootElement : false,
      parseTagValue: true,
      parseAttributeValue: false,
      trimValues: true,
      //Trim string values of tag and attributes
      cdataPropName: false,
      numberParseOptions: {
        hex: true,
        leadingZeros: true,
        eNotation: true
      },
      tagValueProcessor: /* @__PURE__ */ __name(function(tagName, val) {
        return val;
      }, "tagValueProcessor"),
      attributeValueProcessor: /* @__PURE__ */ __name(function(attrName, val) {
        return val;
      }, "attributeValueProcessor"),
      stopNodes: [],
      //nested tags will not be parsed even for errors
      alwaysCreateTextNode: false,
      isArray: /* @__PURE__ */ __name(() => false, "isArray"),
      commentPropName: false,
      unpairedTags: [],
      processEntities: true,
      htmlEntities: false,
      ignoreDeclaration: false,
      ignorePiTags: false,
      transformTagName: false,
      transformAttributeName: false,
      updateTag: /* @__PURE__ */ __name(function(tagName, jPath, attrs) {
        return tagName;
      }, "updateTag"),
      // skipEmptyListItem: false
      captureMetaData: false,
      maxNestedTags: 100,
      strictReservedNames: true,
      jPath: true,
      // if true, pass jPath string to callbacks; if false, pass matcher instance
      onDangerousProperty: defaultOnDangerousProperty
    };
    __name(validatePropertyName, "validatePropertyName");
    __name(normalizeProcessEntities, "normalizeProcessEntities");
    buildOptions = /* @__PURE__ */ __name(function(options) {
      const built = Object.assign({}, defaultOptions2, options);
      const propertyNameOptions = [
        { value: built.attributeNamePrefix, name: "attributeNamePrefix" },
        { value: built.attributesGroupName, name: "attributesGroupName" },
        { value: built.textNodeName, name: "textNodeName" },
        { value: built.cdataPropName, name: "cdataPropName" },
        { value: built.commentPropName, name: "commentPropName" }
      ];
      for (const { value, name } of propertyNameOptions) {
        if (value) {
          validatePropertyName(value, name);
        }
      }
      if (built.onDangerousProperty === null) {
        built.onDangerousProperty = defaultOnDangerousProperty;
      }
      built.processEntities = normalizeProcessEntities(built.processEntities);
      if (built.stopNodes && Array.isArray(built.stopNodes)) {
        built.stopNodes = built.stopNodes.map((node) => {
          if (typeof node === "string" && node.startsWith("*.")) {
            return ".." + node.substring(2);
          }
          return node;
        });
      }
      return built;
    }, "buildOptions");
  }
});

// node_modules/fast-xml-parser/src/xmlparser/xmlNode.js
var METADATA_SYMBOL, XmlNode;
var init_xmlNode = __esm({
  "node_modules/fast-xml-parser/src/xmlparser/xmlNode.js"() {
    "use strict";
    if (typeof Symbol !== "function") {
      METADATA_SYMBOL = "@@xmlMetadata";
    } else {
      METADATA_SYMBOL = /* @__PURE__ */ Symbol("XML Node Metadata");
    }
    XmlNode = class {
      static {
        __name(this, "XmlNode");
      }
      constructor(tagname) {
        this.tagname = tagname;
        this.child = [];
        this[":@"] = /* @__PURE__ */ Object.create(null);
      }
      add(key, val) {
        if (key === "__proto__") key = "#__proto__";
        this.child.push({ [key]: val });
      }
      addChild(node, startIndex) {
        if (node.tagname === "__proto__") node.tagname = "#__proto__";
        if (node[":@"] && Object.keys(node[":@"]).length > 0) {
          this.child.push({ [node.tagname]: node.child, [":@"]: node[":@"] });
        } else {
          this.child.push({ [node.tagname]: node.child });
        }
        if (startIndex !== void 0) {
          this.child[this.child.length - 1][METADATA_SYMBOL] = { startIndex };
        }
      }
      /** symbol used for metadata */
      static getMetaDataSymbol() {
        return METADATA_SYMBOL;
      }
    };
  }
});

// node_modules/fast-xml-parser/src/xmlparser/DocTypeReader.js
function hasSeq(data, seq, i6) {
  for (let j6 = 0; j6 < seq.length; j6++) {
    if (seq[j6] !== data[i6 + j6 + 1]) return false;
  }
  return true;
}
function validateEntityName(name) {
  if (isName(name))
    return name;
  else
    throw new Error(`Invalid entity name ${name}`);
}
var DocTypeReader, skipWhitespace;
var init_DocTypeReader = __esm({
  "node_modules/fast-xml-parser/src/xmlparser/DocTypeReader.js"() {
    init_util3();
    DocTypeReader = class {
      static {
        __name(this, "DocTypeReader");
      }
      constructor(options) {
        this.suppressValidationErr = !options;
        this.options = options;
      }
      readDocType(xmlData, i6) {
        const entities = /* @__PURE__ */ Object.create(null);
        let entityCount = 0;
        if (xmlData[i6 + 3] === "O" && xmlData[i6 + 4] === "C" && xmlData[i6 + 5] === "T" && xmlData[i6 + 6] === "Y" && xmlData[i6 + 7] === "P" && xmlData[i6 + 8] === "E") {
          i6 = i6 + 9;
          let angleBracketsCount = 1;
          let hasBody = false, comment = false;
          let exp = "";
          for (; i6 < xmlData.length; i6++) {
            if (xmlData[i6] === "<" && !comment) {
              if (hasBody && hasSeq(xmlData, "!ENTITY", i6)) {
                i6 += 7;
                let entityName, val;
                [entityName, val, i6] = this.readEntityExp(xmlData, i6 + 1, this.suppressValidationErr);
                if (val.indexOf("&") === -1) {
                  if (this.options.enabled !== false && this.options.maxEntityCount != null && entityCount >= this.options.maxEntityCount) {
                    throw new Error(
                      `Entity count (${entityCount + 1}) exceeds maximum allowed (${this.options.maxEntityCount})`
                    );
                  }
                  const escaped = entityName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
                  entities[entityName] = {
                    regx: RegExp(`&${escaped};`, "g"),
                    val
                  };
                  entityCount++;
                }
              } else if (hasBody && hasSeq(xmlData, "!ELEMENT", i6)) {
                i6 += 8;
                const { index } = this.readElementExp(xmlData, i6 + 1);
                i6 = index;
              } else if (hasBody && hasSeq(xmlData, "!ATTLIST", i6)) {
                i6 += 8;
              } else if (hasBody && hasSeq(xmlData, "!NOTATION", i6)) {
                i6 += 9;
                const { index } = this.readNotationExp(xmlData, i6 + 1, this.suppressValidationErr);
                i6 = index;
              } else if (hasSeq(xmlData, "!--", i6)) comment = true;
              else throw new Error(`Invalid DOCTYPE`);
              angleBracketsCount++;
              exp = "";
            } else if (xmlData[i6] === ">") {
              if (comment) {
                if (xmlData[i6 - 1] === "-" && xmlData[i6 - 2] === "-") {
                  comment = false;
                  angleBracketsCount--;
                }
              } else {
                angleBracketsCount--;
              }
              if (angleBracketsCount === 0) {
                break;
              }
            } else if (xmlData[i6] === "[") {
              hasBody = true;
            } else {
              exp += xmlData[i6];
            }
          }
          if (angleBracketsCount !== 0) {
            throw new Error(`Unclosed DOCTYPE`);
          }
        } else {
          throw new Error(`Invalid Tag instead of DOCTYPE`);
        }
        return { entities, i: i6 };
      }
      readEntityExp(xmlData, i6) {
        i6 = skipWhitespace(xmlData, i6);
        const startIndex = i6;
        while (i6 < xmlData.length && !/\s/.test(xmlData[i6]) && xmlData[i6] !== '"' && xmlData[i6] !== "'") {
          i6++;
        }
        let entityName = xmlData.substring(startIndex, i6);
        validateEntityName(entityName);
        i6 = skipWhitespace(xmlData, i6);
        if (!this.suppressValidationErr) {
          if (xmlData.substring(i6, i6 + 6).toUpperCase() === "SYSTEM") {
            throw new Error("External entities are not supported");
          } else if (xmlData[i6] === "%") {
            throw new Error("Parameter entities are not supported");
          }
        }
        let entityValue = "";
        [i6, entityValue] = this.readIdentifierVal(xmlData, i6, "entity");
        if (this.options.enabled !== false && this.options.maxEntitySize != null && entityValue.length > this.options.maxEntitySize) {
          throw new Error(
            `Entity "${entityName}" size (${entityValue.length}) exceeds maximum allowed size (${this.options.maxEntitySize})`
          );
        }
        i6--;
        return [entityName, entityValue, i6];
      }
      readNotationExp(xmlData, i6) {
        i6 = skipWhitespace(xmlData, i6);
        const startIndex = i6;
        while (i6 < xmlData.length && !/\s/.test(xmlData[i6])) {
          i6++;
        }
        let notationName = xmlData.substring(startIndex, i6);
        !this.suppressValidationErr && validateEntityName(notationName);
        i6 = skipWhitespace(xmlData, i6);
        const identifierType = xmlData.substring(i6, i6 + 6).toUpperCase();
        if (!this.suppressValidationErr && identifierType !== "SYSTEM" && identifierType !== "PUBLIC") {
          throw new Error(`Expected SYSTEM or PUBLIC, found "${identifierType}"`);
        }
        i6 += identifierType.length;
        i6 = skipWhitespace(xmlData, i6);
        let publicIdentifier = null;
        let systemIdentifier = null;
        if (identifierType === "PUBLIC") {
          [i6, publicIdentifier] = this.readIdentifierVal(xmlData, i6, "publicIdentifier");
          i6 = skipWhitespace(xmlData, i6);
          if (xmlData[i6] === '"' || xmlData[i6] === "'") {
            [i6, systemIdentifier] = this.readIdentifierVal(xmlData, i6, "systemIdentifier");
          }
        } else if (identifierType === "SYSTEM") {
          [i6, systemIdentifier] = this.readIdentifierVal(xmlData, i6, "systemIdentifier");
          if (!this.suppressValidationErr && !systemIdentifier) {
            throw new Error("Missing mandatory system identifier for SYSTEM notation");
          }
        }
        return { notationName, publicIdentifier, systemIdentifier, index: --i6 };
      }
      readIdentifierVal(xmlData, i6, type) {
        let identifierVal = "";
        const startChar = xmlData[i6];
        if (startChar !== '"' && startChar !== "'") {
          throw new Error(`Expected quoted string, found "${startChar}"`);
        }
        i6++;
        const startIndex = i6;
        while (i6 < xmlData.length && xmlData[i6] !== startChar) {
          i6++;
        }
        identifierVal = xmlData.substring(startIndex, i6);
        if (xmlData[i6] !== startChar) {
          throw new Error(`Unterminated ${type} value`);
        }
        i6++;
        return [i6, identifierVal];
      }
      readElementExp(xmlData, i6) {
        i6 = skipWhitespace(xmlData, i6);
        const startIndex = i6;
        while (i6 < xmlData.length && !/\s/.test(xmlData[i6])) {
          i6++;
        }
        let elementName = xmlData.substring(startIndex, i6);
        if (!this.suppressValidationErr && !isName(elementName)) {
          throw new Error(`Invalid element name: "${elementName}"`);
        }
        i6 = skipWhitespace(xmlData, i6);
        let contentModel = "";
        if (xmlData[i6] === "E" && hasSeq(xmlData, "MPTY", i6)) i6 += 4;
        else if (xmlData[i6] === "A" && hasSeq(xmlData, "NY", i6)) i6 += 2;
        else if (xmlData[i6] === "(") {
          i6++;
          const startIndex2 = i6;
          while (i6 < xmlData.length && xmlData[i6] !== ")") {
            i6++;
          }
          contentModel = xmlData.substring(startIndex2, i6);
          if (xmlData[i6] !== ")") {
            throw new Error("Unterminated content model");
          }
        } else if (!this.suppressValidationErr) {
          throw new Error(`Invalid Element Expression, found "${xmlData[i6]}"`);
        }
        return {
          elementName,
          contentModel: contentModel.trim(),
          index: i6
        };
      }
      readAttlistExp(xmlData, i6) {
        i6 = skipWhitespace(xmlData, i6);
        let startIndex = i6;
        while (i6 < xmlData.length && !/\s/.test(xmlData[i6])) {
          i6++;
        }
        let elementName = xmlData.substring(startIndex, i6);
        validateEntityName(elementName);
        i6 = skipWhitespace(xmlData, i6);
        startIndex = i6;
        while (i6 < xmlData.length && !/\s/.test(xmlData[i6])) {
          i6++;
        }
        let attributeName = xmlData.substring(startIndex, i6);
        if (!validateEntityName(attributeName)) {
          throw new Error(`Invalid attribute name: "${attributeName}"`);
        }
        i6 = skipWhitespace(xmlData, i6);
        let attributeType = "";
        if (xmlData.substring(i6, i6 + 8).toUpperCase() === "NOTATION") {
          attributeType = "NOTATION";
          i6 += 8;
          i6 = skipWhitespace(xmlData, i6);
          if (xmlData[i6] !== "(") {
            throw new Error(`Expected '(', found "${xmlData[i6]}"`);
          }
          i6++;
          let allowedNotations = [];
          while (i6 < xmlData.length && xmlData[i6] !== ")") {
            const startIndex2 = i6;
            while (i6 < xmlData.length && xmlData[i6] !== "|" && xmlData[i6] !== ")") {
              i6++;
            }
            let notation = xmlData.substring(startIndex2, i6);
            notation = notation.trim();
            if (!validateEntityName(notation)) {
              throw new Error(`Invalid notation name: "${notation}"`);
            }
            allowedNotations.push(notation);
            if (xmlData[i6] === "|") {
              i6++;
              i6 = skipWhitespace(xmlData, i6);
            }
          }
          if (xmlData[i6] !== ")") {
            throw new Error("Unterminated list of notations");
          }
          i6++;
          attributeType += " (" + allowedNotations.join("|") + ")";
        } else {
          const startIndex2 = i6;
          while (i6 < xmlData.length && !/\s/.test(xmlData[i6])) {
            i6++;
          }
          attributeType += xmlData.substring(startIndex2, i6);
          const validTypes = ["CDATA", "ID", "IDREF", "IDREFS", "ENTITY", "ENTITIES", "NMTOKEN", "NMTOKENS"];
          if (!this.suppressValidationErr && !validTypes.includes(attributeType.toUpperCase())) {
            throw new Error(`Invalid attribute type: "${attributeType}"`);
          }
        }
        i6 = skipWhitespace(xmlData, i6);
        let defaultValue = "";
        if (xmlData.substring(i6, i6 + 8).toUpperCase() === "#REQUIRED") {
          defaultValue = "#REQUIRED";
          i6 += 8;
        } else if (xmlData.substring(i6, i6 + 7).toUpperCase() === "#IMPLIED") {
          defaultValue = "#IMPLIED";
          i6 += 7;
        } else {
          [i6, defaultValue] = this.readIdentifierVal(xmlData, i6, "ATTLIST");
        }
        return {
          elementName,
          attributeName,
          attributeType,
          defaultValue,
          index: i6
        };
      }
    };
    skipWhitespace = /* @__PURE__ */ __name((data, index) => {
      while (index < data.length && /\s/.test(data[index])) {
        index++;
      }
      return index;
    }, "skipWhitespace");
    __name(hasSeq, "hasSeq");
    __name(validateEntityName, "validateEntityName");
  }
});

// node_modules/strnum/strnum.js
function toNumber(str, options = {}) {
  options = Object.assign({}, consider, options);
  if (!str || typeof str !== "string") return str;
  let trimmedStr = str.trim();
  if (trimmedStr.length === 0) return str;
  else if (options.skipLike !== void 0 && options.skipLike.test(trimmedStr)) return str;
  else if (trimmedStr === "0") return 0;
  else if (options.hex && hexRegex.test(trimmedStr)) {
    return parse_int(trimmedStr, 16);
  } else if (!isFinite(trimmedStr)) {
    return handleInfinity(str, Number(trimmedStr), options);
  } else if (trimmedStr.includes("e") || trimmedStr.includes("E")) {
    return resolveEnotation(str, trimmedStr, options);
  } else {
    const match = numRegex.exec(trimmedStr);
    if (match) {
      const sign2 = match[1] || "";
      const leadingZeros = match[2];
      let numTrimmedByZeros = trimZeros(match[3]);
      const decimalAdjacentToLeadingZeros = sign2 ? (
        // 0., -00., 000.
        str[leadingZeros.length + 1] === "."
      ) : str[leadingZeros.length] === ".";
      if (!options.leadingZeros && (leadingZeros.length > 1 || leadingZeros.length === 1 && !decimalAdjacentToLeadingZeros)) {
        return str;
      } else {
        const num = Number(trimmedStr);
        const parsedStr = String(num);
        if (num === 0) return num;
        if (parsedStr.search(/[eE]/) !== -1) {
          if (options.eNotation) return num;
          else return str;
        } else if (trimmedStr.indexOf(".") !== -1) {
          if (parsedStr === "0") return num;
          else if (parsedStr === numTrimmedByZeros) return num;
          else if (parsedStr === `${sign2}${numTrimmedByZeros}`) return num;
          else return str;
        }
        let n2 = leadingZeros ? numTrimmedByZeros : trimmedStr;
        if (leadingZeros) {
          return n2 === parsedStr || sign2 + n2 === parsedStr ? num : str;
        } else {
          return n2 === parsedStr || n2 === sign2 + parsedStr ? num : str;
        }
      }
    } else {
      return str;
    }
  }
}
function resolveEnotation(str, trimmedStr, options) {
  if (!options.eNotation) return str;
  const notation = trimmedStr.match(eNotationRegx);
  if (notation) {
    let sign2 = notation[1] || "";
    const eChar = notation[3].indexOf("e") === -1 ? "E" : "e";
    const leadingZeros = notation[2];
    const eAdjacentToLeadingZeros = sign2 ? (
      // 0E.
      str[leadingZeros.length + 1] === eChar
    ) : str[leadingZeros.length] === eChar;
    if (leadingZeros.length > 1 && eAdjacentToLeadingZeros) return str;
    else if (leadingZeros.length === 1 && (notation[3].startsWith(`.${eChar}`) || notation[3][0] === eChar)) {
      return Number(trimmedStr);
    } else if (leadingZeros.length > 0) {
      if (options.leadingZeros && !eAdjacentToLeadingZeros) {
        trimmedStr = (notation[1] || "") + notation[3];
        return Number(trimmedStr);
      } else return str;
    } else {
      return Number(trimmedStr);
    }
  } else {
    return str;
  }
}
function trimZeros(numStr) {
  if (numStr && numStr.indexOf(".") !== -1) {
    numStr = numStr.replace(/0+$/, "");
    if (numStr === ".") numStr = "0";
    else if (numStr[0] === ".") numStr = "0" + numStr;
    else if (numStr[numStr.length - 1] === ".") numStr = numStr.substring(0, numStr.length - 1);
    return numStr;
  }
  return numStr;
}
function parse_int(numStr, base) {
  if (parseInt) return parseInt(numStr, base);
  else if (Number.parseInt) return Number.parseInt(numStr, base);
  else if (window && window.parseInt) return window.parseInt(numStr, base);
  else throw new Error("parseInt, Number.parseInt, window.parseInt are not supported");
}
function handleInfinity(str, num, options) {
  const isPositive = num === Infinity;
  switch (options.infinity.toLowerCase()) {
    case "null":
      return null;
    case "infinity":
      return num;
    // Return Infinity or -Infinity
    case "string":
      return isPositive ? "Infinity" : "-Infinity";
    case "original":
    default:
      return str;
  }
}
var hexRegex, numRegex, consider, eNotationRegx;
var init_strnum = __esm({
  "node_modules/strnum/strnum.js"() {
    hexRegex = /^[-+]?0x[a-fA-F0-9]+$/;
    numRegex = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/;
    consider = {
      hex: true,
      // oct: false,
      leadingZeros: true,
      decimalPoint: ".",
      eNotation: true,
      //skipLike: /regex/,
      infinity: "original"
      // "null", "infinity" (Infinity type), "string" ("Infinity" (the string literal))
    };
    __name(toNumber, "toNumber");
    eNotationRegx = /^([-+])?(0*)(\d*(\.\d*)?[eE][-\+]?\d+)$/;
    __name(resolveEnotation, "resolveEnotation");
    __name(trimZeros, "trimZeros");
    __name(parse_int, "parse_int");
    __name(handleInfinity, "handleInfinity");
  }
});

// node_modules/fast-xml-parser/src/ignoreAttributes.js
function getIgnoreAttributesFn(ignoreAttributes) {
  if (typeof ignoreAttributes === "function") {
    return ignoreAttributes;
  }
  if (Array.isArray(ignoreAttributes)) {
    return (attrName) => {
      for (const pattern of ignoreAttributes) {
        if (typeof pattern === "string" && attrName === pattern) {
          return true;
        }
        if (pattern instanceof RegExp && pattern.test(attrName)) {
          return true;
        }
      }
    };
  }
  return () => false;
}
var init_ignoreAttributes = __esm({
  "node_modules/fast-xml-parser/src/ignoreAttributes.js"() {
    __name(getIgnoreAttributesFn, "getIgnoreAttributesFn");
  }
});

// node_modules/path-expression-matcher/src/Expression.js
var Expression;
var init_Expression = __esm({
  "node_modules/path-expression-matcher/src/Expression.js"() {
    Expression = class {
      static {
        __name(this, "Expression");
      }
      /**
       * Create a new Expression
       * @param {string} pattern - Pattern string (e.g., "root.users.user", "..user[id]")
       * @param {Object} options - Configuration options
       * @param {string} options.separator - Path separator (default: '.')
       */
      constructor(pattern, options = {}, data) {
        this.pattern = pattern;
        this.separator = options.separator || ".";
        this.segments = this._parse(pattern);
        this.data = data;
        this._hasDeepWildcard = this.segments.some((seg) => seg.type === "deep-wildcard");
        this._hasAttributeCondition = this.segments.some((seg) => seg.attrName !== void 0);
        this._hasPositionSelector = this.segments.some((seg) => seg.position !== void 0);
      }
      /**
       * Parse pattern string into segments
       * @private
       * @param {string} pattern - Pattern to parse
       * @returns {Array} Array of segment objects
       */
      _parse(pattern) {
        const segments = [];
        let i6 = 0;
        let currentPart = "";
        while (i6 < pattern.length) {
          if (pattern[i6] === this.separator) {
            if (i6 + 1 < pattern.length && pattern[i6 + 1] === this.separator) {
              if (currentPart.trim()) {
                segments.push(this._parseSegment(currentPart.trim()));
                currentPart = "";
              }
              segments.push({ type: "deep-wildcard" });
              i6 += 2;
            } else {
              if (currentPart.trim()) {
                segments.push(this._parseSegment(currentPart.trim()));
              }
              currentPart = "";
              i6++;
            }
          } else {
            currentPart += pattern[i6];
            i6++;
          }
        }
        if (currentPart.trim()) {
          segments.push(this._parseSegment(currentPart.trim()));
        }
        return segments;
      }
      /**
       * Parse a single segment
       * @private
       * @param {string} part - Segment string (e.g., "user", "ns::user", "user[id]", "ns::user:first")
       * @returns {Object} Segment object
       */
      _parseSegment(part) {
        const segment = { type: "tag" };
        let bracketContent = null;
        let withoutBrackets = part;
        const bracketMatch = part.match(/^([^\[]+)(\[[^\]]*\])(.*)$/);
        if (bracketMatch) {
          withoutBrackets = bracketMatch[1] + bracketMatch[3];
          if (bracketMatch[2]) {
            const content = bracketMatch[2].slice(1, -1);
            if (content) {
              bracketContent = content;
            }
          }
        }
        let namespace = void 0;
        let tagAndPosition = withoutBrackets;
        if (withoutBrackets.includes("::")) {
          const nsIndex = withoutBrackets.indexOf("::");
          namespace = withoutBrackets.substring(0, nsIndex).trim();
          tagAndPosition = withoutBrackets.substring(nsIndex + 2).trim();
          if (!namespace) {
            throw new Error(`Invalid namespace in pattern: ${part}`);
          }
        }
        let tag = void 0;
        let positionMatch = null;
        if (tagAndPosition.includes(":")) {
          const colonIndex = tagAndPosition.lastIndexOf(":");
          const tagPart = tagAndPosition.substring(0, colonIndex).trim();
          const posPart = tagAndPosition.substring(colonIndex + 1).trim();
          const isPositionKeyword = ["first", "last", "odd", "even"].includes(posPart) || /^nth\(\d+\)$/.test(posPart);
          if (isPositionKeyword) {
            tag = tagPart;
            positionMatch = posPart;
          } else {
            tag = tagAndPosition;
          }
        } else {
          tag = tagAndPosition;
        }
        if (!tag) {
          throw new Error(`Invalid segment pattern: ${part}`);
        }
        segment.tag = tag;
        if (namespace) {
          segment.namespace = namespace;
        }
        if (bracketContent) {
          if (bracketContent.includes("=")) {
            const eqIndex = bracketContent.indexOf("=");
            segment.attrName = bracketContent.substring(0, eqIndex).trim();
            segment.attrValue = bracketContent.substring(eqIndex + 1).trim();
          } else {
            segment.attrName = bracketContent.trim();
          }
        }
        if (positionMatch) {
          const nthMatch = positionMatch.match(/^nth\((\d+)\)$/);
          if (nthMatch) {
            segment.position = "nth";
            segment.positionValue = parseInt(nthMatch[1], 10);
          } else {
            segment.position = positionMatch;
          }
        }
        return segment;
      }
      /**
       * Get the number of segments
       * @returns {number}
       */
      get length() {
        return this.segments.length;
      }
      /**
       * Check if expression contains deep wildcard
       * @returns {boolean}
       */
      hasDeepWildcard() {
        return this._hasDeepWildcard;
      }
      /**
       * Check if expression has attribute conditions
       * @returns {boolean}
       */
      hasAttributeCondition() {
        return this._hasAttributeCondition;
      }
      /**
       * Check if expression has position selectors
       * @returns {boolean}
       */
      hasPositionSelector() {
        return this._hasPositionSelector;
      }
      /**
       * Get string representation
       * @returns {string}
       */
      toString() {
        return this.pattern;
      }
    };
  }
});

// node_modules/path-expression-matcher/src/Matcher.js
var MatcherView, Matcher;
var init_Matcher = __esm({
  "node_modules/path-expression-matcher/src/Matcher.js"() {
    MatcherView = class {
      static {
        __name(this, "MatcherView");
      }
      /**
       * @param {Matcher} matcher - The parent Matcher instance to read from.
       */
      constructor(matcher) {
        this._matcher = matcher;
      }
      /**
       * Get the path separator used by the parent matcher.
       * @returns {string}
       */
      get separator() {
        return this._matcher.separator;
      }
      /**
       * Get current tag name.
       * @returns {string|undefined}
       */
      getCurrentTag() {
        const path = this._matcher.path;
        return path.length > 0 ? path[path.length - 1].tag : void 0;
      }
      /**
       * Get current namespace.
       * @returns {string|undefined}
       */
      getCurrentNamespace() {
        const path = this._matcher.path;
        return path.length > 0 ? path[path.length - 1].namespace : void 0;
      }
      /**
       * Get current node's attribute value.
       * @param {string} attrName
       * @returns {*}
       */
      getAttrValue(attrName) {
        const path = this._matcher.path;
        if (path.length === 0) return void 0;
        return path[path.length - 1].values?.[attrName];
      }
      /**
       * Check if current node has an attribute.
       * @param {string} attrName
       * @returns {boolean}
       */
      hasAttr(attrName) {
        const path = this._matcher.path;
        if (path.length === 0) return false;
        const current = path[path.length - 1];
        return current.values !== void 0 && attrName in current.values;
      }
      /**
       * Get current node's sibling position (child index in parent).
       * @returns {number}
       */
      getPosition() {
        const path = this._matcher.path;
        if (path.length === 0) return -1;
        return path[path.length - 1].position ?? 0;
      }
      /**
       * Get current node's repeat counter (occurrence count of this tag name).
       * @returns {number}
       */
      getCounter() {
        const path = this._matcher.path;
        if (path.length === 0) return -1;
        return path[path.length - 1].counter ?? 0;
      }
      /**
       * Get current node's sibling index (alias for getPosition).
       * @returns {number}
       * @deprecated Use getPosition() or getCounter() instead
       */
      getIndex() {
        return this.getPosition();
      }
      /**
       * Get current path depth.
       * @returns {number}
       */
      getDepth() {
        return this._matcher.path.length;
      }
      /**
       * Get path as string.
       * @param {string} [separator] - Optional separator (uses default if not provided)
       * @param {boolean} [includeNamespace=true]
       * @returns {string}
       */
      toString(separator, includeNamespace = true) {
        return this._matcher.toString(separator, includeNamespace);
      }
      /**
       * Get path as array of tag names.
       * @returns {string[]}
       */
      toArray() {
        return this._matcher.path.map((n2) => n2.tag);
      }
      /**
       * Match current path against an Expression.
       * @param {Expression} expression
       * @returns {boolean}
       */
      matches(expression) {
        return this._matcher.matches(expression);
      }
      /**
       * Match any expression in the given set against the current path.
       * @param {ExpressionSet} exprSet
       * @returns {boolean}
       */
      matchesAny(exprSet) {
        return exprSet.matchesAny(this._matcher);
      }
    };
    Matcher = class {
      static {
        __name(this, "Matcher");
      }
      /**
       * Create a new Matcher.
       * @param {Object} [options={}]
       * @param {string} [options.separator='.'] - Default path separator
       */
      constructor(options = {}) {
        this.separator = options.separator || ".";
        this.path = [];
        this.siblingStacks = [];
        this._pathStringCache = null;
        this._view = new MatcherView(this);
      }
      /**
       * Push a new tag onto the path.
       * @param {string} tagName
       * @param {Object|null} [attrValues=null]
       * @param {string|null} [namespace=null]
       */
      push(tagName, attrValues = null, namespace = null) {
        this._pathStringCache = null;
        if (this.path.length > 0) {
          this.path[this.path.length - 1].values = void 0;
        }
        const currentLevel = this.path.length;
        if (!this.siblingStacks[currentLevel]) {
          this.siblingStacks[currentLevel] = /* @__PURE__ */ new Map();
        }
        const siblings = this.siblingStacks[currentLevel];
        const siblingKey = namespace ? `${namespace}:${tagName}` : tagName;
        const counter = siblings.get(siblingKey) || 0;
        let position = 0;
        for (const count of siblings.values()) {
          position += count;
        }
        siblings.set(siblingKey, counter + 1);
        const node = {
          tag: tagName,
          position,
          counter
        };
        if (namespace !== null && namespace !== void 0) {
          node.namespace = namespace;
        }
        if (attrValues !== null && attrValues !== void 0) {
          node.values = attrValues;
        }
        this.path.push(node);
      }
      /**
       * Pop the last tag from the path.
       * @returns {Object|undefined} The popped node
       */
      pop() {
        if (this.path.length === 0) return void 0;
        this._pathStringCache = null;
        const node = this.path.pop();
        if (this.siblingStacks.length > this.path.length + 1) {
          this.siblingStacks.length = this.path.length + 1;
        }
        return node;
      }
      /**
       * Update current node's attribute values.
       * Useful when attributes are parsed after push.
       * @param {Object} attrValues
       */
      updateCurrent(attrValues) {
        if (this.path.length > 0) {
          const current = this.path[this.path.length - 1];
          if (attrValues !== null && attrValues !== void 0) {
            current.values = attrValues;
          }
        }
      }
      /**
       * Get current tag name.
       * @returns {string|undefined}
       */
      getCurrentTag() {
        return this.path.length > 0 ? this.path[this.path.length - 1].tag : void 0;
      }
      /**
       * Get current namespace.
       * @returns {string|undefined}
       */
      getCurrentNamespace() {
        return this.path.length > 0 ? this.path[this.path.length - 1].namespace : void 0;
      }
      /**
       * Get current node's attribute value.
       * @param {string} attrName
       * @returns {*}
       */
      getAttrValue(attrName) {
        if (this.path.length === 0) return void 0;
        return this.path[this.path.length - 1].values?.[attrName];
      }
      /**
       * Check if current node has an attribute.
       * @param {string} attrName
       * @returns {boolean}
       */
      hasAttr(attrName) {
        if (this.path.length === 0) return false;
        const current = this.path[this.path.length - 1];
        return current.values !== void 0 && attrName in current.values;
      }
      /**
       * Get current node's sibling position (child index in parent).
       * @returns {number}
       */
      getPosition() {
        if (this.path.length === 0) return -1;
        return this.path[this.path.length - 1].position ?? 0;
      }
      /**
       * Get current node's repeat counter (occurrence count of this tag name).
       * @returns {number}
       */
      getCounter() {
        if (this.path.length === 0) return -1;
        return this.path[this.path.length - 1].counter ?? 0;
      }
      /**
       * Get current node's sibling index (alias for getPosition).
       * @returns {number}
       * @deprecated Use getPosition() or getCounter() instead
       */
      getIndex() {
        return this.getPosition();
      }
      /**
       * Get current path depth.
       * @returns {number}
       */
      getDepth() {
        return this.path.length;
      }
      /**
       * Get path as string.
       * @param {string} [separator] - Optional separator (uses default if not provided)
       * @param {boolean} [includeNamespace=true]
       * @returns {string}
       */
      toString(separator, includeNamespace = true) {
        const sep3 = separator || this.separator;
        const isDefault = sep3 === this.separator && includeNamespace === true;
        if (isDefault) {
          if (this._pathStringCache !== null) {
            return this._pathStringCache;
          }
          const result = this.path.map(
            (n2) => n2.namespace ? `${n2.namespace}:${n2.tag}` : n2.tag
          ).join(sep3);
          this._pathStringCache = result;
          return result;
        }
        return this.path.map(
          (n2) => includeNamespace && n2.namespace ? `${n2.namespace}:${n2.tag}` : n2.tag
        ).join(sep3);
      }
      /**
       * Get path as array of tag names.
       * @returns {string[]}
       */
      toArray() {
        return this.path.map((n2) => n2.tag);
      }
      /**
       * Reset the path to empty.
       */
      reset() {
        this._pathStringCache = null;
        this.path = [];
        this.siblingStacks = [];
      }
      /**
       * Match current path against an Expression.
       * @param {Expression} expression
       * @returns {boolean}
       */
      matches(expression) {
        const segments = expression.segments;
        if (segments.length === 0) {
          return false;
        }
        if (expression.hasDeepWildcard()) {
          return this._matchWithDeepWildcard(segments);
        }
        return this._matchSimple(segments);
      }
      /**
       * @private
       */
      _matchSimple(segments) {
        if (this.path.length !== segments.length) {
          return false;
        }
        for (let i6 = 0; i6 < segments.length; i6++) {
          if (!this._matchSegment(segments[i6], this.path[i6], i6 === this.path.length - 1)) {
            return false;
          }
        }
        return true;
      }
      /**
       * @private
       */
      _matchWithDeepWildcard(segments) {
        let pathIdx = this.path.length - 1;
        let segIdx = segments.length - 1;
        while (segIdx >= 0 && pathIdx >= 0) {
          const segment = segments[segIdx];
          if (segment.type === "deep-wildcard") {
            segIdx--;
            if (segIdx < 0) {
              return true;
            }
            const nextSeg = segments[segIdx];
            let found = false;
            for (let i6 = pathIdx; i6 >= 0; i6--) {
              if (this._matchSegment(nextSeg, this.path[i6], i6 === this.path.length - 1)) {
                pathIdx = i6 - 1;
                segIdx--;
                found = true;
                break;
              }
            }
            if (!found) {
              return false;
            }
          } else {
            if (!this._matchSegment(segment, this.path[pathIdx], pathIdx === this.path.length - 1)) {
              return false;
            }
            pathIdx--;
            segIdx--;
          }
        }
        return segIdx < 0;
      }
      /**
       * @private
       */
      _matchSegment(segment, node, isCurrentNode) {
        if (segment.tag !== "*" && segment.tag !== node.tag) {
          return false;
        }
        if (segment.namespace !== void 0) {
          if (segment.namespace !== "*" && segment.namespace !== node.namespace) {
            return false;
          }
        }
        if (segment.attrName !== void 0) {
          if (!isCurrentNode) {
            return false;
          }
          if (!node.values || !(segment.attrName in node.values)) {
            return false;
          }
          if (segment.attrValue !== void 0) {
            if (String(node.values[segment.attrName]) !== String(segment.attrValue)) {
              return false;
            }
          }
        }
        if (segment.position !== void 0) {
          if (!isCurrentNode) {
            return false;
          }
          const counter = node.counter ?? 0;
          if (segment.position === "first" && counter !== 0) {
            return false;
          } else if (segment.position === "odd" && counter % 2 !== 1) {
            return false;
          } else if (segment.position === "even" && counter % 2 !== 0) {
            return false;
          } else if (segment.position === "nth" && counter !== segment.positionValue) {
            return false;
          }
        }
        return true;
      }
      /**
       * Match any expression in the given set against the current path.
       * @param {ExpressionSet} exprSet
       * @returns {boolean}
       */
      matchesAny(exprSet) {
        return exprSet.matchesAny(this);
      }
      /**
       * Create a snapshot of current state.
       * @returns {Object}
       */
      snapshot() {
        return {
          path: this.path.map((node) => ({ ...node })),
          siblingStacks: this.siblingStacks.map((map) => new Map(map))
        };
      }
      /**
       * Restore state from snapshot.
       * @param {Object} snapshot
       */
      restore(snapshot) {
        this._pathStringCache = null;
        this.path = snapshot.path.map((node) => ({ ...node }));
        this.siblingStacks = snapshot.siblingStacks.map((map) => new Map(map));
      }
      /**
       * Return the read-only {@link MatcherView} for this matcher.
       *
       * The same instance is returned on every call — no allocation occurs.
       * It always reflects the current parser state and is safe to pass to
       * user callbacks without risk of accidental mutation.
       *
       * @returns {MatcherView}
       *
       * @example
       * const view = matcher.readOnly();
       * // pass view to callbacks — it stays in sync automatically
       * view.matches(expr);       // ✓
       * view.getCurrentTag();     // ✓
       * // view.push(...)         // ✗ method does not exist — caught by TypeScript
       */
      readOnly() {
        return this._view;
      }
    };
  }
});

// node_modules/path-expression-matcher/src/index.js
var init_src = __esm({
  "node_modules/path-expression-matcher/src/index.js"() {
    init_Expression();
    init_Matcher();
  }
});

// node_modules/fast-xml-parser/src/xmlparser/OrderedObjParser.js
function extractRawAttributes(prefixedAttrs, options) {
  if (!prefixedAttrs) return {};
  const attrs = options.attributesGroupName ? prefixedAttrs[options.attributesGroupName] : prefixedAttrs;
  if (!attrs) return {};
  const rawAttrs = {};
  for (const key in attrs) {
    if (key.startsWith(options.attributeNamePrefix)) {
      const rawName = key.substring(options.attributeNamePrefix.length);
      rawAttrs[rawName] = attrs[key];
    } else {
      rawAttrs[key] = attrs[key];
    }
  }
  return rawAttrs;
}
function extractNamespace(rawTagName) {
  if (!rawTagName || typeof rawTagName !== "string") return void 0;
  const colonIndex = rawTagName.indexOf(":");
  if (colonIndex !== -1 && colonIndex > 0) {
    const ns = rawTagName.substring(0, colonIndex);
    if (ns !== "xmlns") {
      return ns;
    }
  }
  return void 0;
}
function addExternalEntities(externalEntities) {
  const entKeys = Object.keys(externalEntities);
  for (let i6 = 0; i6 < entKeys.length; i6++) {
    const ent = entKeys[i6];
    const escaped = ent.replace(/[.\-+*:]/g, "\\.");
    this.lastEntities[ent] = {
      regex: new RegExp("&" + escaped + ";", "g"),
      val: externalEntities[ent]
    };
  }
}
function parseTextData(val, tagName, jPath, dontTrim, hasAttributes, isLeafNode, escapeEntities) {
  if (val !== void 0) {
    if (this.options.trimValues && !dontTrim) {
      val = val.trim();
    }
    if (val.length > 0) {
      if (!escapeEntities) val = this.replaceEntitiesValue(val, tagName, jPath);
      const jPathOrMatcher = this.options.jPath ? jPath.toString() : jPath;
      const newval = this.options.tagValueProcessor(tagName, val, jPathOrMatcher, hasAttributes, isLeafNode);
      if (newval === null || newval === void 0) {
        return val;
      } else if (typeof newval !== typeof val || newval !== val) {
        return newval;
      } else if (this.options.trimValues) {
        return parseValue(val, this.options.parseTagValue, this.options.numberParseOptions);
      } else {
        const trimmedVal = val.trim();
        if (trimmedVal === val) {
          return parseValue(val, this.options.parseTagValue, this.options.numberParseOptions);
        } else {
          return val;
        }
      }
    }
  }
}
function resolveNameSpace(tagname) {
  if (this.options.removeNSPrefix) {
    const tags = tagname.split(":");
    const prefix = tagname.charAt(0) === "/" ? "/" : "";
    if (tags[0] === "xmlns") {
      return "";
    }
    if (tags.length === 2) {
      tagname = prefix + tags[1];
    }
  }
  return tagname;
}
function buildAttributesMap(attrStr, jPath, tagName) {
  if (this.options.ignoreAttributes !== true && typeof attrStr === "string") {
    const matches = getAllMatches(attrStr, attrsRegx);
    const len = matches.length;
    const attrs = {};
    const rawAttrsForMatcher = {};
    for (let i6 = 0; i6 < len; i6++) {
      const attrName = this.resolveNameSpace(matches[i6][1]);
      const oldVal = matches[i6][4];
      if (attrName.length && oldVal !== void 0) {
        let parsedVal = oldVal;
        if (this.options.trimValues) {
          parsedVal = parsedVal.trim();
        }
        parsedVal = this.replaceEntitiesValue(parsedVal, tagName, this.readonlyMatcher);
        rawAttrsForMatcher[attrName] = parsedVal;
      }
    }
    if (Object.keys(rawAttrsForMatcher).length > 0 && typeof jPath === "object" && jPath.updateCurrent) {
      jPath.updateCurrent(rawAttrsForMatcher);
    }
    for (let i6 = 0; i6 < len; i6++) {
      const attrName = this.resolveNameSpace(matches[i6][1]);
      const jPathStr = this.options.jPath ? jPath.toString() : this.readonlyMatcher;
      if (this.ignoreAttributesFn(attrName, jPathStr)) {
        continue;
      }
      let oldVal = matches[i6][4];
      let aName = this.options.attributeNamePrefix + attrName;
      if (attrName.length) {
        if (this.options.transformAttributeName) {
          aName = this.options.transformAttributeName(aName);
        }
        aName = sanitizeName(aName, this.options);
        if (oldVal !== void 0) {
          if (this.options.trimValues) {
            oldVal = oldVal.trim();
          }
          oldVal = this.replaceEntitiesValue(oldVal, tagName, this.readonlyMatcher);
          const jPathOrMatcher = this.options.jPath ? jPath.toString() : this.readonlyMatcher;
          const newVal = this.options.attributeValueProcessor(attrName, oldVal, jPathOrMatcher);
          if (newVal === null || newVal === void 0) {
            attrs[aName] = oldVal;
          } else if (typeof newVal !== typeof oldVal || newVal !== oldVal) {
            attrs[aName] = newVal;
          } else {
            attrs[aName] = parseValue(
              oldVal,
              this.options.parseAttributeValue,
              this.options.numberParseOptions
            );
          }
        } else if (this.options.allowBooleanAttributes) {
          attrs[aName] = true;
        }
      }
    }
    if (!Object.keys(attrs).length) {
      return;
    }
    if (this.options.attributesGroupName) {
      const attrCollection = {};
      attrCollection[this.options.attributesGroupName] = attrs;
      return attrCollection;
    }
    return attrs;
  }
}
function addChild(currentNode, childNode, matcher, startIndex) {
  if (!this.options.captureMetaData) startIndex = void 0;
  const jPathOrMatcher = this.options.jPath ? matcher.toString() : matcher;
  const result = this.options.updateTag(childNode.tagname, jPathOrMatcher, childNode[":@"]);
  if (result === false) {
  } else if (typeof result === "string") {
    childNode.tagname = result;
    currentNode.addChild(childNode, startIndex);
  } else {
    currentNode.addChild(childNode, startIndex);
  }
}
function replaceEntitiesValue(val, tagName, jPath) {
  const entityConfig = this.options.processEntities;
  if (!entityConfig || !entityConfig.enabled) {
    return val;
  }
  if (entityConfig.allowedTags) {
    const jPathOrMatcher = this.options.jPath ? jPath.toString() : jPath;
    const allowed = Array.isArray(entityConfig.allowedTags) ? entityConfig.allowedTags.includes(tagName) : entityConfig.allowedTags(tagName, jPathOrMatcher);
    if (!allowed) {
      return val;
    }
  }
  if (entityConfig.tagFilter) {
    const jPathOrMatcher = this.options.jPath ? jPath.toString() : jPath;
    if (!entityConfig.tagFilter(tagName, jPathOrMatcher)) {
      return val;
    }
  }
  for (const entityName of Object.keys(this.docTypeEntities)) {
    const entity = this.docTypeEntities[entityName];
    const matches = val.match(entity.regx);
    if (matches) {
      this.entityExpansionCount += matches.length;
      if (entityConfig.maxTotalExpansions && this.entityExpansionCount > entityConfig.maxTotalExpansions) {
        throw new Error(
          `Entity expansion limit exceeded: ${this.entityExpansionCount} > ${entityConfig.maxTotalExpansions}`
        );
      }
      const lengthBefore = val.length;
      val = val.replace(entity.regx, entity.val);
      if (entityConfig.maxExpandedLength) {
        this.currentExpandedLength += val.length - lengthBefore;
        if (this.currentExpandedLength > entityConfig.maxExpandedLength) {
          throw new Error(
            `Total expanded content size exceeded: ${this.currentExpandedLength} > ${entityConfig.maxExpandedLength}`
          );
        }
      }
    }
  }
  for (const entityName of Object.keys(this.lastEntities)) {
    const entity = this.lastEntities[entityName];
    const matches = val.match(entity.regex);
    if (matches) {
      this.entityExpansionCount += matches.length;
      if (entityConfig.maxTotalExpansions && this.entityExpansionCount > entityConfig.maxTotalExpansions) {
        throw new Error(
          `Entity expansion limit exceeded: ${this.entityExpansionCount} > ${entityConfig.maxTotalExpansions}`
        );
      }
    }
    val = val.replace(entity.regex, entity.val);
  }
  if (val.indexOf("&") === -1) return val;
  if (this.options.htmlEntities) {
    for (const entityName of Object.keys(this.htmlEntities)) {
      const entity = this.htmlEntities[entityName];
      const matches = val.match(entity.regex);
      if (matches) {
        this.entityExpansionCount += matches.length;
        if (entityConfig.maxTotalExpansions && this.entityExpansionCount > entityConfig.maxTotalExpansions) {
          throw new Error(
            `Entity expansion limit exceeded: ${this.entityExpansionCount} > ${entityConfig.maxTotalExpansions}`
          );
        }
      }
      val = val.replace(entity.regex, entity.val);
    }
  }
  val = val.replace(this.ampEntity.regex, this.ampEntity.val);
  return val;
}
function saveTextToParentTag(textData, parentNode, matcher, isLeafNode) {
  if (textData) {
    if (isLeafNode === void 0) isLeafNode = parentNode.child.length === 0;
    textData = this.parseTextData(
      textData,
      parentNode.tagname,
      matcher,
      false,
      parentNode[":@"] ? Object.keys(parentNode[":@"]).length !== 0 : false,
      isLeafNode
    );
    if (textData !== void 0 && textData !== "")
      parentNode.add(this.options.textNodeName, textData);
    textData = "";
  }
  return textData;
}
function isItStopNode(stopNodeExpressions, matcher) {
  if (!stopNodeExpressions || stopNodeExpressions.length === 0) return false;
  for (let i6 = 0; i6 < stopNodeExpressions.length; i6++) {
    if (matcher.matches(stopNodeExpressions[i6])) {
      return true;
    }
  }
  return false;
}
function tagExpWithClosingIndex(xmlData, i6, closingChar = ">") {
  let attrBoundary;
  let tagExp = "";
  for (let index = i6; index < xmlData.length; index++) {
    let ch = xmlData[index];
    if (attrBoundary) {
      if (ch === attrBoundary) attrBoundary = "";
    } else if (ch === '"' || ch === "'") {
      attrBoundary = ch;
    } else if (ch === closingChar[0]) {
      if (closingChar[1]) {
        if (xmlData[index + 1] === closingChar[1]) {
          return {
            data: tagExp,
            index
          };
        }
      } else {
        return {
          data: tagExp,
          index
        };
      }
    } else if (ch === "	") {
      ch = " ";
    }
    tagExp += ch;
  }
}
function findClosingIndex(xmlData, str, i6, errMsg) {
  const closingIndex = xmlData.indexOf(str, i6);
  if (closingIndex === -1) {
    throw new Error(errMsg);
  } else {
    return closingIndex + str.length - 1;
  }
}
function readTagExp(xmlData, i6, removeNSPrefix, closingChar = ">") {
  const result = tagExpWithClosingIndex(xmlData, i6 + 1, closingChar);
  if (!result) return;
  let tagExp = result.data;
  const closeIndex = result.index;
  const separatorIndex = tagExp.search(/\s/);
  let tagName = tagExp;
  let attrExpPresent = true;
  if (separatorIndex !== -1) {
    tagName = tagExp.substring(0, separatorIndex);
    tagExp = tagExp.substring(separatorIndex + 1).trimStart();
  }
  const rawTagName = tagName;
  if (removeNSPrefix) {
    const colonIndex = tagName.indexOf(":");
    if (colonIndex !== -1) {
      tagName = tagName.substr(colonIndex + 1);
      attrExpPresent = tagName !== result.data.substr(colonIndex + 1);
    }
  }
  return {
    tagName,
    tagExp,
    closeIndex,
    attrExpPresent,
    rawTagName
  };
}
function readStopNodeData(xmlData, tagName, i6) {
  const startIndex = i6;
  let openTagCount = 1;
  for (; i6 < xmlData.length; i6++) {
    if (xmlData[i6] === "<") {
      if (xmlData[i6 + 1] === "/") {
        const closeIndex = findClosingIndex(xmlData, ">", i6, `${tagName} is not closed`);
        let closeTagName = xmlData.substring(i6 + 2, closeIndex).trim();
        if (closeTagName === tagName) {
          openTagCount--;
          if (openTagCount === 0) {
            return {
              tagContent: xmlData.substring(startIndex, i6),
              i: closeIndex
            };
          }
        }
        i6 = closeIndex;
      } else if (xmlData[i6 + 1] === "?") {
        const closeIndex = findClosingIndex(xmlData, "?>", i6 + 1, "StopNode is not closed.");
        i6 = closeIndex;
      } else if (xmlData.substr(i6 + 1, 3) === "!--") {
        const closeIndex = findClosingIndex(xmlData, "-->", i6 + 3, "StopNode is not closed.");
        i6 = closeIndex;
      } else if (xmlData.substr(i6 + 1, 2) === "![") {
        const closeIndex = findClosingIndex(xmlData, "]]>", i6, "StopNode is not closed.") - 2;
        i6 = closeIndex;
      } else {
        const tagData = readTagExp(xmlData, i6, ">");
        if (tagData) {
          const openTagName = tagData && tagData.tagName;
          if (openTagName === tagName && tagData.tagExp[tagData.tagExp.length - 1] !== "/") {
            openTagCount++;
          }
          i6 = tagData.closeIndex;
        }
      }
    }
  }
}
function parseValue(val, shouldParse, options) {
  if (shouldParse && typeof val === "string") {
    const newval = val.trim();
    if (newval === "true") return true;
    else if (newval === "false") return false;
    else return toNumber(val, options);
  } else {
    if (isExist(val)) {
      return val;
    } else {
      return "";
    }
  }
}
function fromCodePoint(str, base, prefix) {
  const codePoint = Number.parseInt(str, base);
  if (codePoint >= 0 && codePoint <= 1114111) {
    return String.fromCodePoint(codePoint);
  } else {
    return prefix + str + ";";
  }
}
function transformTagName(fn, tagName, tagExp, options) {
  if (fn) {
    const newTagName = fn(tagName);
    if (tagExp === tagName) {
      tagExp = newTagName;
    }
    tagName = newTagName;
  }
  tagName = sanitizeName(tagName, options);
  return { tagName, tagExp };
}
function sanitizeName(name, options) {
  if (criticalProperties.includes(name)) {
    throw new Error(`[SECURITY] Invalid name: "${name}" is a reserved JavaScript keyword that could cause prototype pollution`);
  } else if (DANGEROUS_PROPERTY_NAMES.includes(name)) {
    return options.onDangerousProperty(name);
  }
  return name;
}
var OrderedObjParser, attrsRegx, parseXml;
var init_OrderedObjParser = __esm({
  "node_modules/fast-xml-parser/src/xmlparser/OrderedObjParser.js"() {
    "use strict";
    init_util3();
    init_xmlNode();
    init_DocTypeReader();
    init_strnum();
    init_ignoreAttributes();
    init_src();
    __name(extractRawAttributes, "extractRawAttributes");
    __name(extractNamespace, "extractNamespace");
    OrderedObjParser = class {
      static {
        __name(this, "OrderedObjParser");
      }
      constructor(options) {
        this.options = options;
        this.currentNode = null;
        this.tagsNodeStack = [];
        this.docTypeEntities = {};
        this.lastEntities = {
          "apos": { regex: /&(apos|#39|#x27);/g, val: "'" },
          "gt": { regex: /&(gt|#62|#x3E);/g, val: ">" },
          "lt": { regex: /&(lt|#60|#x3C);/g, val: "<" },
          "quot": { regex: /&(quot|#34|#x22);/g, val: '"' }
        };
        this.ampEntity = { regex: /&(amp|#38|#x26);/g, val: "&" };
        this.htmlEntities = {
          "space": { regex: /&(nbsp|#160);/g, val: " " },
          // "lt" : { regex: /&(lt|#60);/g, val: "<" },
          // "gt" : { regex: /&(gt|#62);/g, val: ">" },
          // "amp" : { regex: /&(amp|#38);/g, val: "&" },
          // "quot" : { regex: /&(quot|#34);/g, val: "\"" },
          // "apos" : { regex: /&(apos|#39);/g, val: "'" },
          "cent": { regex: /&(cent|#162);/g, val: "\xA2" },
          "pound": { regex: /&(pound|#163);/g, val: "\xA3" },
          "yen": { regex: /&(yen|#165);/g, val: "\xA5" },
          "euro": { regex: /&(euro|#8364);/g, val: "\u20AC" },
          "copyright": { regex: /&(copy|#169);/g, val: "\xA9" },
          "reg": { regex: /&(reg|#174);/g, val: "\xAE" },
          "inr": { regex: /&(inr|#8377);/g, val: "\u20B9" },
          "num_dec": { regex: /&#([0-9]{1,7});/g, val: /* @__PURE__ */ __name((_, str) => fromCodePoint(str, 10, "&#"), "val") },
          "num_hex": { regex: /&#x([0-9a-fA-F]{1,6});/g, val: /* @__PURE__ */ __name((_, str) => fromCodePoint(str, 16, "&#x"), "val") }
        };
        this.addExternalEntities = addExternalEntities;
        this.parseXml = parseXml;
        this.parseTextData = parseTextData;
        this.resolveNameSpace = resolveNameSpace;
        this.buildAttributesMap = buildAttributesMap;
        this.isItStopNode = isItStopNode;
        this.replaceEntitiesValue = replaceEntitiesValue;
        this.readStopNodeData = readStopNodeData;
        this.saveTextToParentTag = saveTextToParentTag;
        this.addChild = addChild;
        this.ignoreAttributesFn = getIgnoreAttributesFn(this.options.ignoreAttributes);
        this.entityExpansionCount = 0;
        this.currentExpandedLength = 0;
        this.matcher = new Matcher();
        this.readonlyMatcher = this.matcher.readOnly();
        this.isCurrentNodeStopNode = false;
        if (this.options.stopNodes && this.options.stopNodes.length > 0) {
          this.stopNodeExpressions = [];
          for (let i6 = 0; i6 < this.options.stopNodes.length; i6++) {
            const stopNodeExp = this.options.stopNodes[i6];
            if (typeof stopNodeExp === "string") {
              this.stopNodeExpressions.push(new Expression(stopNodeExp));
            } else if (stopNodeExp instanceof Expression) {
              this.stopNodeExpressions.push(stopNodeExp);
            }
          }
        }
      }
    };
    __name(addExternalEntities, "addExternalEntities");
    __name(parseTextData, "parseTextData");
    __name(resolveNameSpace, "resolveNameSpace");
    attrsRegx = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
    __name(buildAttributesMap, "buildAttributesMap");
    parseXml = /* @__PURE__ */ __name(function(xmlData) {
      xmlData = xmlData.replace(/\r\n?/g, "\n");
      const xmlObj = new XmlNode("!xml");
      let currentNode = xmlObj;
      let textData = "";
      this.matcher.reset();
      this.entityExpansionCount = 0;
      this.currentExpandedLength = 0;
      const docTypeReader = new DocTypeReader(this.options.processEntities);
      for (let i6 = 0; i6 < xmlData.length; i6++) {
        const ch = xmlData[i6];
        if (ch === "<") {
          if (xmlData[i6 + 1] === "/") {
            const closeIndex = findClosingIndex(xmlData, ">", i6, "Closing Tag is not closed.");
            let tagName = xmlData.substring(i6 + 2, closeIndex).trim();
            if (this.options.removeNSPrefix) {
              const colonIndex = tagName.indexOf(":");
              if (colonIndex !== -1) {
                tagName = tagName.substr(colonIndex + 1);
              }
            }
            tagName = transformTagName(this.options.transformTagName, tagName, "", this.options).tagName;
            if (currentNode) {
              textData = this.saveTextToParentTag(textData, currentNode, this.readonlyMatcher);
            }
            const lastTagName = this.matcher.getCurrentTag();
            if (tagName && this.options.unpairedTags.indexOf(tagName) !== -1) {
              throw new Error(`Unpaired tag can not be used as closing tag: </${tagName}>`);
            }
            if (lastTagName && this.options.unpairedTags.indexOf(lastTagName) !== -1) {
              this.matcher.pop();
              this.tagsNodeStack.pop();
            }
            this.matcher.pop();
            this.isCurrentNodeStopNode = false;
            currentNode = this.tagsNodeStack.pop();
            textData = "";
            i6 = closeIndex;
          } else if (xmlData[i6 + 1] === "?") {
            let tagData = readTagExp(xmlData, i6, false, "?>");
            if (!tagData) throw new Error("Pi Tag is not closed.");
            textData = this.saveTextToParentTag(textData, currentNode, this.readonlyMatcher);
            if (this.options.ignoreDeclaration && tagData.tagName === "?xml" || this.options.ignorePiTags) {
            } else {
              const childNode = new XmlNode(tagData.tagName);
              childNode.add(this.options.textNodeName, "");
              if (tagData.tagName !== tagData.tagExp && tagData.attrExpPresent) {
                childNode[":@"] = this.buildAttributesMap(tagData.tagExp, this.matcher, tagData.tagName);
              }
              this.addChild(currentNode, childNode, this.readonlyMatcher, i6);
            }
            i6 = tagData.closeIndex + 1;
          } else if (xmlData.substr(i6 + 1, 3) === "!--") {
            const endIndex = findClosingIndex(xmlData, "-->", i6 + 4, "Comment is not closed.");
            if (this.options.commentPropName) {
              const comment = xmlData.substring(i6 + 4, endIndex - 2);
              textData = this.saveTextToParentTag(textData, currentNode, this.readonlyMatcher);
              currentNode.add(this.options.commentPropName, [{ [this.options.textNodeName]: comment }]);
            }
            i6 = endIndex;
          } else if (xmlData.substr(i6 + 1, 2) === "!D") {
            const result = docTypeReader.readDocType(xmlData, i6);
            this.docTypeEntities = result.entities;
            i6 = result.i;
          } else if (xmlData.substr(i6 + 1, 2) === "![") {
            const closeIndex = findClosingIndex(xmlData, "]]>", i6, "CDATA is not closed.") - 2;
            const tagExp = xmlData.substring(i6 + 9, closeIndex);
            textData = this.saveTextToParentTag(textData, currentNode, this.readonlyMatcher);
            let val = this.parseTextData(tagExp, currentNode.tagname, this.readonlyMatcher, true, false, true, true);
            if (val == void 0) val = "";
            if (this.options.cdataPropName) {
              currentNode.add(this.options.cdataPropName, [{ [this.options.textNodeName]: tagExp }]);
            } else {
              currentNode.add(this.options.textNodeName, val);
            }
            i6 = closeIndex + 2;
          } else {
            let result = readTagExp(xmlData, i6, this.options.removeNSPrefix);
            if (!result) {
              const context = xmlData.substring(Math.max(0, i6 - 50), Math.min(xmlData.length, i6 + 50));
              throw new Error(`readTagExp returned undefined at position ${i6}. Context: "${context}"`);
            }
            let tagName = result.tagName;
            const rawTagName = result.rawTagName;
            let tagExp = result.tagExp;
            let attrExpPresent = result.attrExpPresent;
            let closeIndex = result.closeIndex;
            ({ tagName, tagExp } = transformTagName(this.options.transformTagName, tagName, tagExp, this.options));
            if (this.options.strictReservedNames && (tagName === this.options.commentPropName || tagName === this.options.cdataPropName || tagName === this.options.textNodeName || tagName === this.options.attributesGroupName)) {
              throw new Error(`Invalid tag name: ${tagName}`);
            }
            if (currentNode && textData) {
              if (currentNode.tagname !== "!xml") {
                textData = this.saveTextToParentTag(textData, currentNode, this.readonlyMatcher, false);
              }
            }
            const lastTag = currentNode;
            if (lastTag && this.options.unpairedTags.indexOf(lastTag.tagname) !== -1) {
              currentNode = this.tagsNodeStack.pop();
              this.matcher.pop();
            }
            let isSelfClosing = false;
            if (tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1) {
              isSelfClosing = true;
              if (tagName[tagName.length - 1] === "/") {
                tagName = tagName.substr(0, tagName.length - 1);
                tagExp = tagName;
              } else {
                tagExp = tagExp.substr(0, tagExp.length - 1);
              }
              attrExpPresent = tagName !== tagExp;
            }
            let prefixedAttrs = null;
            let rawAttrs = {};
            let namespace = void 0;
            namespace = extractNamespace(rawTagName);
            if (tagName !== xmlObj.tagname) {
              this.matcher.push(tagName, {}, namespace);
            }
            if (tagName !== tagExp && attrExpPresent) {
              prefixedAttrs = this.buildAttributesMap(tagExp, this.matcher, tagName);
              if (prefixedAttrs) {
                rawAttrs = extractRawAttributes(prefixedAttrs, this.options);
              }
            }
            if (tagName !== xmlObj.tagname) {
              this.isCurrentNodeStopNode = this.isItStopNode(this.stopNodeExpressions, this.matcher);
            }
            const startIndex = i6;
            if (this.isCurrentNodeStopNode) {
              let tagContent = "";
              if (isSelfClosing) {
                i6 = result.closeIndex;
              } else if (this.options.unpairedTags.indexOf(tagName) !== -1) {
                i6 = result.closeIndex;
              } else {
                const result2 = this.readStopNodeData(xmlData, rawTagName, closeIndex + 1);
                if (!result2) throw new Error(`Unexpected end of ${rawTagName}`);
                i6 = result2.i;
                tagContent = result2.tagContent;
              }
              const childNode = new XmlNode(tagName);
              if (prefixedAttrs) {
                childNode[":@"] = prefixedAttrs;
              }
              childNode.add(this.options.textNodeName, tagContent);
              this.matcher.pop();
              this.isCurrentNodeStopNode = false;
              this.addChild(currentNode, childNode, this.readonlyMatcher, startIndex);
            } else {
              if (isSelfClosing) {
                ({ tagName, tagExp } = transformTagName(this.options.transformTagName, tagName, tagExp, this.options));
                const childNode = new XmlNode(tagName);
                if (prefixedAttrs) {
                  childNode[":@"] = prefixedAttrs;
                }
                this.addChild(currentNode, childNode, this.readonlyMatcher, startIndex);
                this.matcher.pop();
                this.isCurrentNodeStopNode = false;
              } else if (this.options.unpairedTags.indexOf(tagName) !== -1) {
                const childNode = new XmlNode(tagName);
                if (prefixedAttrs) {
                  childNode[":@"] = prefixedAttrs;
                }
                this.addChild(currentNode, childNode, this.readonlyMatcher, startIndex);
                this.matcher.pop();
                this.isCurrentNodeStopNode = false;
                i6 = result.closeIndex;
                continue;
              } else {
                const childNode = new XmlNode(tagName);
                if (this.tagsNodeStack.length > this.options.maxNestedTags) {
                  throw new Error("Maximum nested tags exceeded");
                }
                this.tagsNodeStack.push(currentNode);
                if (prefixedAttrs) {
                  childNode[":@"] = prefixedAttrs;
                }
                this.addChild(currentNode, childNode, this.readonlyMatcher, startIndex);
                currentNode = childNode;
              }
              textData = "";
              i6 = closeIndex;
            }
          }
        } else {
          textData += xmlData[i6];
        }
      }
      return xmlObj.child;
    }, "parseXml");
    __name(addChild, "addChild");
    __name(replaceEntitiesValue, "replaceEntitiesValue");
    __name(saveTextToParentTag, "saveTextToParentTag");
    __name(isItStopNode, "isItStopNode");
    __name(tagExpWithClosingIndex, "tagExpWithClosingIndex");
    __name(findClosingIndex, "findClosingIndex");
    __name(readTagExp, "readTagExp");
    __name(readStopNodeData, "readStopNodeData");
    __name(parseValue, "parseValue");
    __name(fromCodePoint, "fromCodePoint");
    __name(transformTagName, "transformTagName");
    __name(sanitizeName, "sanitizeName");
  }
});

// node_modules/fast-xml-parser/src/xmlparser/node2json.js
function stripAttributePrefix(attrs, prefix) {
  if (!attrs || typeof attrs !== "object") return {};
  if (!prefix) return attrs;
  const rawAttrs = {};
  for (const key in attrs) {
    if (key.startsWith(prefix)) {
      const rawName = key.substring(prefix.length);
      rawAttrs[rawName] = attrs[key];
    } else {
      rawAttrs[key] = attrs[key];
    }
  }
  return rawAttrs;
}
function prettify(node, options, matcher, readonlyMatcher) {
  return compress(node, options, matcher, readonlyMatcher);
}
function compress(arr, options, matcher, readonlyMatcher) {
  let text;
  const compressedObj = {};
  for (let i6 = 0; i6 < arr.length; i6++) {
    const tagObj = arr[i6];
    const property = propName(tagObj);
    if (property !== void 0 && property !== options.textNodeName) {
      const rawAttrs = stripAttributePrefix(
        tagObj[":@"] || {},
        options.attributeNamePrefix
      );
      matcher.push(property, rawAttrs);
    }
    if (property === options.textNodeName) {
      if (text === void 0) text = tagObj[property];
      else text += "" + tagObj[property];
    } else if (property === void 0) {
      continue;
    } else if (tagObj[property]) {
      let val = compress(tagObj[property], options, matcher, readonlyMatcher);
      const isLeaf = isLeafTag(val, options);
      if (tagObj[":@"]) {
        assignAttributes(val, tagObj[":@"], readonlyMatcher, options);
      } else if (Object.keys(val).length === 1 && val[options.textNodeName] !== void 0 && !options.alwaysCreateTextNode) {
        val = val[options.textNodeName];
      } else if (Object.keys(val).length === 0) {
        if (options.alwaysCreateTextNode) val[options.textNodeName] = "";
        else val = "";
      }
      if (tagObj[METADATA_SYMBOL2] !== void 0 && typeof val === "object" && val !== null) {
        val[METADATA_SYMBOL2] = tagObj[METADATA_SYMBOL2];
      }
      if (compressedObj[property] !== void 0 && Object.prototype.hasOwnProperty.call(compressedObj, property)) {
        if (!Array.isArray(compressedObj[property])) {
          compressedObj[property] = [compressedObj[property]];
        }
        compressedObj[property].push(val);
      } else {
        const jPathOrMatcher = options.jPath ? readonlyMatcher.toString() : readonlyMatcher;
        if (options.isArray(property, jPathOrMatcher, isLeaf)) {
          compressedObj[property] = [val];
        } else {
          compressedObj[property] = val;
        }
      }
      if (property !== void 0 && property !== options.textNodeName) {
        matcher.pop();
      }
    }
  }
  if (typeof text === "string") {
    if (text.length > 0) compressedObj[options.textNodeName] = text;
  } else if (text !== void 0) compressedObj[options.textNodeName] = text;
  return compressedObj;
}
function propName(obj) {
  const keys = Object.keys(obj);
  for (let i6 = 0; i6 < keys.length; i6++) {
    const key = keys[i6];
    if (key !== ":@") return key;
  }
}
function assignAttributes(obj, attrMap, readonlyMatcher, options) {
  if (attrMap) {
    const keys = Object.keys(attrMap);
    const len = keys.length;
    for (let i6 = 0; i6 < len; i6++) {
      const atrrName = keys[i6];
      const rawAttrName = atrrName.startsWith(options.attributeNamePrefix) ? atrrName.substring(options.attributeNamePrefix.length) : atrrName;
      const jPathOrMatcher = options.jPath ? readonlyMatcher.toString() + "." + rawAttrName : readonlyMatcher;
      if (options.isArray(atrrName, jPathOrMatcher, true, true)) {
        obj[atrrName] = [attrMap[atrrName]];
      } else {
        obj[atrrName] = attrMap[atrrName];
      }
    }
  }
}
function isLeafTag(obj, options) {
  const { textNodeName } = options;
  const propCount = Object.keys(obj).length;
  if (propCount === 0) {
    return true;
  }
  if (propCount === 1 && (obj[textNodeName] || typeof obj[textNodeName] === "boolean" || obj[textNodeName] === 0)) {
    return true;
  }
  return false;
}
var METADATA_SYMBOL2;
var init_node2json = __esm({
  "node_modules/fast-xml-parser/src/xmlparser/node2json.js"() {
    "use strict";
    init_xmlNode();
    METADATA_SYMBOL2 = XmlNode.getMetaDataSymbol();
    __name(stripAttributePrefix, "stripAttributePrefix");
    __name(prettify, "prettify");
    __name(compress, "compress");
    __name(propName, "propName");
    __name(assignAttributes, "assignAttributes");
    __name(isLeafTag, "isLeafTag");
  }
});

// node_modules/fast-xml-parser/src/xmlparser/XMLParser.js
var XMLParser;
var init_XMLParser = __esm({
  "node_modules/fast-xml-parser/src/xmlparser/XMLParser.js"() {
    init_OptionsBuilder();
    init_OrderedObjParser();
    init_node2json();
    init_validator();
    init_xmlNode();
    XMLParser = class {
      static {
        __name(this, "XMLParser");
      }
      constructor(options) {
        this.externalEntities = {};
        this.options = buildOptions(options);
      }
      /**
       * Parse XML dats to JS object 
       * @param {string|Uint8Array} xmlData 
       * @param {boolean|Object} validationOption 
       */
      parse(xmlData, validationOption) {
        if (typeof xmlData !== "string" && xmlData.toString) {
          xmlData = xmlData.toString();
        } else if (typeof xmlData !== "string") {
          throw new Error("XML data is accepted in String or Bytes[] form.");
        }
        if (validationOption) {
          if (validationOption === true) validationOption = {};
          const result = validate(xmlData, validationOption);
          if (result !== true) {
            throw Error(`${result.err.msg}:${result.err.line}:${result.err.col}`);
          }
        }
        const orderedObjParser = new OrderedObjParser(this.options);
        orderedObjParser.addExternalEntities(this.externalEntities);
        const orderedResult = orderedObjParser.parseXml(xmlData);
        if (this.options.preserveOrder || orderedResult === void 0) return orderedResult;
        else return prettify(orderedResult, this.options, orderedObjParser.matcher, orderedObjParser.readonlyMatcher);
      }
      /**
       * Add Entity which is not by default supported by this library
       * @param {string} key 
       * @param {string} value 
       */
      addEntity(key, value) {
        if (value.indexOf("&") !== -1) {
          throw new Error("Entity value can't have '&'");
        } else if (key.indexOf("&") !== -1 || key.indexOf(";") !== -1) {
          throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
        } else if (value === "&") {
          throw new Error("An entity with value '&' is not permitted");
        } else {
          this.externalEntities[key] = value;
        }
      }
      /**
       * Returns a Symbol that can be used to access the metadata
       * property on a node.
       * 
       * If Symbol is not available in the environment, an ordinary property is used
       * and the name of the property is here returned.
       * 
       * The XMLMetaData property is only present when `captureMetaData`
       * is true in the options.
       */
      static getMetaDataSymbol() {
        return XmlNode.getMetaDataSymbol();
      }
    };
  }
});

// node_modules/fast-xml-parser/src/fxp.js
var init_fxp = __esm({
  "node_modules/fast-xml-parser/src/fxp.js"() {
    "use strict";
    init_XMLParser();
  }
});

// node_modules/@aws-sdk/xml-builder/dist-es/xml-parser.js
function parseXML(xmlString) {
  return parser.parse(xmlString, true);
}
var parser;
var init_xml_parser = __esm({
  "node_modules/@aws-sdk/xml-builder/dist-es/xml-parser.js"() {
    init_fxp();
    parser = new XMLParser({
      attributeNamePrefix: "",
      processEntities: {
        enabled: true,
        maxTotalExpansions: Infinity
      },
      htmlEntities: true,
      ignoreAttributes: false,
      ignoreDeclaration: true,
      parseTagValue: false,
      trimValues: false,
      tagValueProcessor: /* @__PURE__ */ __name((_, val) => val.trim() === "" && val.includes("\n") ? "" : void 0, "tagValueProcessor"),
      maxNestedTags: Infinity
    });
    parser.addEntity("#xD", "\r");
    parser.addEntity("#10", "\n");
    __name(parseXML, "parseXML");
  }
});

// node_modules/@aws-sdk/xml-builder/dist-es/index.js
var init_dist_es38 = __esm({
  "node_modules/@aws-sdk/xml-builder/dist-es/index.js"() {
    init_XmlNode();
    init_XmlText();
    init_xml_parser();
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/xml/XmlShapeDeserializer.js
var XmlShapeDeserializer;
var init_XmlShapeDeserializer = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/protocols/xml/XmlShapeDeserializer.js"() {
    init_dist_es38();
    init_protocols();
    init_schema2();
    init_dist_es35();
    init_dist_es9();
    init_ConfigurableSerdeContext();
    init_UnionSerde();
    XmlShapeDeserializer = class extends SerdeContextConfig {
      static {
        __name(this, "XmlShapeDeserializer");
      }
      settings;
      stringDeserializer;
      constructor(settings) {
        super();
        this.settings = settings;
        this.stringDeserializer = new FromStringShapeDeserializer(settings);
      }
      setSerdeContext(serdeContext) {
        this.serdeContext = serdeContext;
        this.stringDeserializer.setSerdeContext(serdeContext);
      }
      read(schema, bytes, key) {
        const ns = NormalizedSchema.of(schema);
        const memberSchemas = ns.getMemberSchemas();
        const isEventPayload = ns.isStructSchema() && ns.isMemberSchema() && !!Object.values(memberSchemas).find((memberNs) => {
          return !!memberNs.getMemberTraits().eventPayload;
        });
        if (isEventPayload) {
          const output = {};
          const memberName = Object.keys(memberSchemas)[0];
          const eventMemberSchema = memberSchemas[memberName];
          if (eventMemberSchema.isBlobSchema()) {
            output[memberName] = bytes;
          } else {
            output[memberName] = this.read(memberSchemas[memberName], bytes);
          }
          return output;
        }
        const xmlString = (this.serdeContext?.utf8Encoder ?? toUtf8)(bytes);
        const parsedObject = this.parseXml(xmlString);
        return this.readSchema(schema, key ? parsedObject[key] : parsedObject);
      }
      readSchema(_schema, value) {
        const ns = NormalizedSchema.of(_schema);
        if (ns.isUnitSchema()) {
          return;
        }
        const traits = ns.getMergedTraits();
        if (ns.isListSchema() && !Array.isArray(value)) {
          return this.readSchema(ns, [value]);
        }
        if (value == null) {
          return value;
        }
        if (typeof value === "object") {
          const flat = !!traits.xmlFlattened;
          if (ns.isListSchema()) {
            const listValue = ns.getValueSchema();
            const buffer2 = [];
            const sourceKey = listValue.getMergedTraits().xmlName ?? "member";
            const source = flat ? value : (value[0] ?? value)[sourceKey];
            if (source == null) {
              return buffer2;
            }
            const sourceArray = Array.isArray(source) ? source : [source];
            for (const v of sourceArray) {
              buffer2.push(this.readSchema(listValue, v));
            }
            return buffer2;
          }
          const buffer = {};
          if (ns.isMapSchema()) {
            const keyNs = ns.getKeySchema();
            const memberNs = ns.getValueSchema();
            let entries;
            if (flat) {
              entries = Array.isArray(value) ? value : [value];
            } else {
              entries = Array.isArray(value.entry) ? value.entry : [value.entry];
            }
            const keyProperty = keyNs.getMergedTraits().xmlName ?? "key";
            const valueProperty = memberNs.getMergedTraits().xmlName ?? "value";
            for (const entry of entries) {
              const key = entry[keyProperty];
              const value2 = entry[valueProperty];
              buffer[key] = this.readSchema(memberNs, value2);
            }
            return buffer;
          }
          if (ns.isStructSchema()) {
            const union = ns.isUnionSchema();
            let unionSerde;
            if (union) {
              unionSerde = new UnionSerde(value, buffer);
            }
            for (const [memberName, memberSchema] of ns.structIterator()) {
              const memberTraits = memberSchema.getMergedTraits();
              const xmlObjectKey = !memberTraits.httpPayload ? memberSchema.getMemberTraits().xmlName ?? memberName : memberTraits.xmlName ?? memberSchema.getName();
              if (union) {
                unionSerde.mark(xmlObjectKey);
              }
              if (value[xmlObjectKey] != null) {
                buffer[memberName] = this.readSchema(memberSchema, value[xmlObjectKey]);
              }
            }
            if (union) {
              unionSerde.writeUnknown();
            }
            return buffer;
          }
          if (ns.isDocumentSchema()) {
            return value;
          }
          throw new Error(`@aws-sdk/core/protocols - xml deserializer unhandled schema type for ${ns.getName(true)}`);
        }
        if (ns.isListSchema()) {
          return [];
        }
        if (ns.isMapSchema() || ns.isStructSchema()) {
          return {};
        }
        return this.stringDeserializer.read(ns, value);
      }
      parseXml(xml) {
        if (xml.length) {
          let parsedObj;
          try {
            parsedObj = parseXML(xml);
          } catch (e6) {
            if (e6 && typeof e6 === "object") {
              Object.defineProperty(e6, "$responseBodyText", {
                value: xml
              });
            }
            throw e6;
          }
          const textNodeName = "#text";
          const key = Object.keys(parsedObj)[0];
          const parsedObjToReturn = parsedObj[key];
          if (parsedObjToReturn[textNodeName]) {
            parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
            delete parsedObjToReturn[textNodeName];
          }
          return getValueFromTextNode(parsedObjToReturn);
        }
        return {};
      }
    };
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/query/QueryShapeSerializer.js
var QueryShapeSerializer;
var init_QueryShapeSerializer = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/protocols/query/QueryShapeSerializer.js"() {
    init_protocols();
    init_schema2();
    init_serde2();
    init_dist_es35();
    init_dist_es10();
    init_ConfigurableSerdeContext();
    QueryShapeSerializer = class extends SerdeContextConfig {
      static {
        __name(this, "QueryShapeSerializer");
      }
      settings;
      buffer;
      constructor(settings) {
        super();
        this.settings = settings;
      }
      write(schema, value, prefix = "") {
        if (this.buffer === void 0) {
          this.buffer = "";
        }
        const ns = NormalizedSchema.of(schema);
        if (prefix && !prefix.endsWith(".")) {
          prefix += ".";
        }
        if (ns.isBlobSchema()) {
          if (typeof value === "string" || value instanceof Uint8Array) {
            this.writeKey(prefix);
            this.writeValue((this.serdeContext?.base64Encoder ?? toBase64)(value));
          }
        } else if (ns.isBooleanSchema() || ns.isNumericSchema() || ns.isStringSchema()) {
          if (value != null) {
            this.writeKey(prefix);
            this.writeValue(String(value));
          } else if (ns.isIdempotencyToken()) {
            this.writeKey(prefix);
            this.writeValue(v4());
          }
        } else if (ns.isBigIntegerSchema()) {
          if (value != null) {
            this.writeKey(prefix);
            this.writeValue(String(value));
          }
        } else if (ns.isBigDecimalSchema()) {
          if (value != null) {
            this.writeKey(prefix);
            this.writeValue(value instanceof NumericValue ? value.string : String(value));
          }
        } else if (ns.isTimestampSchema()) {
          if (value instanceof Date) {
            this.writeKey(prefix);
            const format2 = determineTimestampFormat(ns, this.settings);
            switch (format2) {
              case 5:
                this.writeValue(value.toISOString().replace(".000Z", "Z"));
                break;
              case 6:
                this.writeValue(dateToUtcString(value));
                break;
              case 7:
                this.writeValue(String(value.getTime() / 1e3));
                break;
            }
          }
        } else if (ns.isDocumentSchema()) {
          if (Array.isArray(value)) {
            this.write(64 | 15, value, prefix);
          } else if (value instanceof Date) {
            this.write(4, value, prefix);
          } else if (value instanceof Uint8Array) {
            this.write(21, value, prefix);
          } else if (value && typeof value === "object") {
            this.write(128 | 15, value, prefix);
          } else {
            this.writeKey(prefix);
            this.writeValue(String(value));
          }
        } else if (ns.isListSchema()) {
          if (Array.isArray(value)) {
            if (value.length === 0) {
              if (this.settings.serializeEmptyLists) {
                this.writeKey(prefix);
                this.writeValue("");
              }
            } else {
              const member2 = ns.getValueSchema();
              const flat = this.settings.flattenLists || ns.getMergedTraits().xmlFlattened;
              let i6 = 1;
              for (const item of value) {
                if (item == null) {
                  continue;
                }
                const traits = member2.getMergedTraits();
                const suffix = this.getKey("member", traits.xmlName, traits.ec2QueryName);
                const key = flat ? `${prefix}${i6}` : `${prefix}${suffix}.${i6}`;
                this.write(member2, item, key);
                ++i6;
              }
            }
          }
        } else if (ns.isMapSchema()) {
          if (value && typeof value === "object") {
            const keySchema = ns.getKeySchema();
            const memberSchema = ns.getValueSchema();
            const flat = ns.getMergedTraits().xmlFlattened;
            let i6 = 1;
            for (const k6 in value) {
              const v = value[k6];
              if (v == null) {
                continue;
              }
              const keyTraits = keySchema.getMergedTraits();
              const keySuffix = this.getKey("key", keyTraits.xmlName, keyTraits.ec2QueryName);
              const key = flat ? `${prefix}${i6}.${keySuffix}` : `${prefix}entry.${i6}.${keySuffix}`;
              const valTraits = memberSchema.getMergedTraits();
              const valueSuffix = this.getKey("value", valTraits.xmlName, valTraits.ec2QueryName);
              const valueKey = flat ? `${prefix}${i6}.${valueSuffix}` : `${prefix}entry.${i6}.${valueSuffix}`;
              this.write(keySchema, k6, key);
              this.write(memberSchema, v, valueKey);
              ++i6;
            }
          }
        } else if (ns.isStructSchema()) {
          if (value && typeof value === "object") {
            let didWriteMember = false;
            for (const [memberName, member2] of ns.structIterator()) {
              if (value[memberName] == null && !member2.isIdempotencyToken()) {
                continue;
              }
              const traits = member2.getMergedTraits();
              const suffix = this.getKey(memberName, traits.xmlName, traits.ec2QueryName, "struct");
              const key = `${prefix}${suffix}`;
              this.write(member2, value[memberName], key);
              didWriteMember = true;
            }
            if (!didWriteMember && ns.isUnionSchema()) {
              const { $unknown } = value;
              if (Array.isArray($unknown)) {
                const [k6, v] = $unknown;
                const key = `${prefix}${k6}`;
                this.write(15, v, key);
              }
            }
          }
        } else if (ns.isUnitSchema()) {
        } else {
          throw new Error(`@aws-sdk/core/protocols - QuerySerializer unrecognized schema type ${ns.getName(true)}`);
        }
      }
      flush() {
        if (this.buffer === void 0) {
          throw new Error("@aws-sdk/core/protocols - QuerySerializer cannot flush with nothing written to buffer.");
        }
        const str = this.buffer;
        delete this.buffer;
        return str;
      }
      getKey(memberName, xmlName, ec2QueryName, keySource) {
        const { ec2, capitalizeKeys } = this.settings;
        if (ec2 && ec2QueryName) {
          return ec2QueryName;
        }
        const key = xmlName ?? memberName;
        if (capitalizeKeys && keySource === "struct") {
          return key[0].toUpperCase() + key.slice(1);
        }
        return key;
      }
      writeKey(key) {
        if (key.endsWith(".")) {
          key = key.slice(0, key.length - 1);
        }
        this.buffer += `&${extendedEncodeURIComponent(key)}=`;
      }
      writeValue(value) {
        this.buffer += extendedEncodeURIComponent(value);
      }
    };
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/query/AwsQueryProtocol.js
var AwsQueryProtocol;
var init_AwsQueryProtocol = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/protocols/query/AwsQueryProtocol.js"() {
    init_protocols();
    init_schema2();
    init_ProtocolLib();
    init_XmlShapeDeserializer();
    init_QueryShapeSerializer();
    AwsQueryProtocol = class extends RpcProtocol {
      static {
        __name(this, "AwsQueryProtocol");
      }
      options;
      serializer;
      deserializer;
      mixin = new ProtocolLib();
      constructor(options) {
        super({
          defaultNamespace: options.defaultNamespace,
          errorTypeRegistries: options.errorTypeRegistries
        });
        this.options = options;
        const settings = {
          timestampFormat: {
            useTrait: true,
            default: 5
          },
          httpBindings: false,
          xmlNamespace: options.xmlNamespace,
          serviceNamespace: options.defaultNamespace,
          serializeEmptyLists: true
        };
        this.serializer = new QueryShapeSerializer(settings);
        this.deserializer = new XmlShapeDeserializer(settings);
      }
      getShapeId() {
        return "aws.protocols#awsQuery";
      }
      setSerdeContext(serdeContext) {
        this.serializer.setSerdeContext(serdeContext);
        this.deserializer.setSerdeContext(serdeContext);
      }
      getPayloadCodec() {
        throw new Error("AWSQuery protocol has no payload codec.");
      }
      async serializeRequest(operationSchema, input, context) {
        const request2 = await super.serializeRequest(operationSchema, input, context);
        if (!request2.path.endsWith("/")) {
          request2.path += "/";
        }
        request2.headers["content-type"] = "application/x-www-form-urlencoded";
        if (deref(operationSchema.input) === "unit" || !request2.body) {
          request2.body = "";
        }
        const action = operationSchema.name.split("#")[1] ?? operationSchema.name;
        request2.body = `Action=${action}&Version=${this.options.version}` + request2.body;
        if (request2.body.endsWith("&")) {
          request2.body = request2.body.slice(-1);
        }
        return request2;
      }
      async deserializeResponse(operationSchema, context, response) {
        const deserializer = this.deserializer;
        const ns = NormalizedSchema.of(operationSchema.output);
        const dataObject = {};
        if (response.statusCode >= 300) {
          const bytes2 = await collectBody(response.body, context);
          if (bytes2.byteLength > 0) {
            Object.assign(dataObject, await deserializer.read(15, bytes2));
          }
          await this.handleError(operationSchema, context, response, dataObject, this.deserializeMetadata(response));
        }
        for (const header in response.headers) {
          const value = response.headers[header];
          delete response.headers[header];
          response.headers[header.toLowerCase()] = value;
        }
        const shortName = operationSchema.name.split("#")[1] ?? operationSchema.name;
        const awsQueryResultKey = ns.isStructSchema() && this.useNestedResult() ? shortName + "Result" : void 0;
        const bytes = await collectBody(response.body, context);
        if (bytes.byteLength > 0) {
          Object.assign(dataObject, await deserializer.read(ns, bytes, awsQueryResultKey));
        }
        dataObject.$metadata = this.deserializeMetadata(response);
        return dataObject;
      }
      useNestedResult() {
        return true;
      }
      async handleError(operationSchema, context, response, dataObject, metadata) {
        const errorIdentifier = this.loadQueryErrorCode(response, dataObject) ?? "Unknown";
        this.mixin.compose(this.compositeErrorRegistry, errorIdentifier, this.options.defaultNamespace);
        const errorData = this.loadQueryError(dataObject) ?? {};
        const message = this.loadQueryErrorMessage(dataObject);
        errorData.message = message;
        errorData.Error = {
          Type: errorData.Type,
          Code: errorData.Code,
          Message: message
        };
        const { errorSchema, errorMetadata } = await this.mixin.getErrorSchemaOrThrowBaseException(errorIdentifier, this.options.defaultNamespace, response, errorData, metadata, this.mixin.findQueryCompatibleError);
        const ns = NormalizedSchema.of(errorSchema);
        const ErrorCtor = this.compositeErrorRegistry.getErrorCtor(errorSchema) ?? Error;
        const exception = new ErrorCtor(message);
        const output = {
          Type: errorData.Error.Type,
          Code: errorData.Error.Code,
          Error: errorData.Error
        };
        for (const [name, member2] of ns.structIterator()) {
          const target = member2.getMergedTraits().xmlName ?? name;
          const value = errorData[target] ?? dataObject[target];
          output[name] = this.deserializer.readSchema(member2, value);
        }
        throw this.mixin.decorateServiceException(Object.assign(exception, errorMetadata, {
          $fault: ns.getMergedTraits().error,
          message
        }, output), dataObject);
      }
      loadQueryErrorCode(output, data) {
        const code = (data.Errors?.[0]?.Error ?? data.Errors?.Error ?? data.Error)?.Code;
        if (code !== void 0) {
          return code;
        }
        if (output.statusCode == 404) {
          return "NotFound";
        }
      }
      loadQueryError(data) {
        return data.Errors?.[0]?.Error ?? data.Errors?.Error ?? data.Error;
      }
      loadQueryErrorMessage(data) {
        const errorData = this.loadQueryError(data);
        return errorData?.message ?? errorData?.Message ?? data.message ?? data.Message ?? "Unknown";
      }
      getDefaultContentType() {
        return "application/x-www-form-urlencoded";
      }
    };
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/query/AwsEc2QueryProtocol.js
var init_AwsEc2QueryProtocol = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/protocols/query/AwsEc2QueryProtocol.js"() {
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/query/QuerySerializerSettings.js
var init_QuerySerializerSettings = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/protocols/query/QuerySerializerSettings.js"() {
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/xml/parseXmlBody.js
var init_parseXmlBody = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/protocols/xml/parseXmlBody.js"() {
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/xml/XmlShapeSerializer.js
var init_XmlShapeSerializer = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/protocols/xml/XmlShapeSerializer.js"() {
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/xml/XmlCodec.js
var init_XmlCodec = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/protocols/xml/XmlCodec.js"() {
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/xml/AwsRestXmlProtocol.js
var init_AwsRestXmlProtocol = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/protocols/xml/AwsRestXmlProtocol.js"() {
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/index.js
var init_protocols2 = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/protocols/index.js"() {
    init_AwsSmithyRpcV2CborProtocol();
    init_coercing_serializers();
    init_AwsJson1_0Protocol();
    init_AwsJson1_1Protocol();
    init_AwsJsonRpcProtocol();
    init_AwsRestJsonProtocol();
    init_JsonCodec();
    init_JsonShapeDeserializer();
    init_JsonShapeSerializer();
    init_awsExpectUnion();
    init_parseJsonBody();
    init_AwsEc2QueryProtocol();
    init_AwsQueryProtocol();
    init_QuerySerializerSettings();
    init_QueryShapeSerializer();
    init_AwsRestXmlProtocol();
    init_XmlCodec();
    init_XmlShapeDeserializer();
    init_XmlShapeSerializer();
    init_parseXmlBody();
  }
});

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/index.js
var init_dist_es39 = __esm({
  "node_modules/@aws-sdk/middleware-sdk-s3/dist-es/index.js"() {
    init_check_content_length_header();
    init_region_redirect_endpoint_middleware();
    init_region_redirect_middleware();
    init_s3_expires_middleware();
    init_s3_express();
    init_s3Configuration();
    init_throw_200_exceptions();
    init_validate_bucket_name();
  }
});

// node_modules/@aws-sdk/signature-v4-multi-region/dist-es/signature-v4-crt-container.js
var signatureV4CrtContainer;
var init_signature_v4_crt_container = __esm({
  "node_modules/@aws-sdk/signature-v4-multi-region/dist-es/signature-v4-crt-container.js"() {
    signatureV4CrtContainer = {
      CrtSignerV4: null
    };
  }
});

// node_modules/@aws-sdk/signature-v4-multi-region/dist-es/SignatureV4MultiRegion.js
var SignatureV4MultiRegion;
var init_SignatureV4MultiRegion = __esm({
  "node_modules/@aws-sdk/signature-v4-multi-region/dist-es/SignatureV4MultiRegion.js"() {
    init_dist_es39();
    init_dist_es37();
    init_signature_v4_crt_container();
    SignatureV4MultiRegion = class {
      static {
        __name(this, "SignatureV4MultiRegion");
      }
      sigv4aSigner;
      sigv4Signer;
      signerOptions;
      static sigv4aDependency() {
        if (typeof signatureV4CrtContainer.CrtSignerV4 === "function") {
          return "crt";
        } else if (typeof signatureV4aContainer.SignatureV4a === "function") {
          return "js";
        }
        return "none";
      }
      constructor(options) {
        this.sigv4Signer = new SignatureV4S3Express(options);
        this.signerOptions = options;
      }
      async sign(requestToSign, options = {}) {
        if (options.signingRegion === "*") {
          return this.getSigv4aSigner().sign(requestToSign, options);
        }
        return this.sigv4Signer.sign(requestToSign, options);
      }
      async signWithCredentials(requestToSign, credentials, options = {}) {
        if (options.signingRegion === "*") {
          const signer = this.getSigv4aSigner();
          const CrtSignerV4 = signatureV4CrtContainer.CrtSignerV4;
          if (CrtSignerV4 && signer instanceof CrtSignerV4) {
            return signer.signWithCredentials(requestToSign, credentials, options);
          } else {
            throw new Error(`signWithCredentials with signingRegion '*' is only supported when using the CRT dependency @aws-sdk/signature-v4-crt. Please check whether you have installed the "@aws-sdk/signature-v4-crt" package explicitly. You must also register the package by calling [require("@aws-sdk/signature-v4-crt");] or an ESM equivalent such as [import "@aws-sdk/signature-v4-crt";]. For more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt`);
          }
        }
        return this.sigv4Signer.signWithCredentials(requestToSign, credentials, options);
      }
      async presign(originalRequest, options = {}) {
        if (options.signingRegion === "*") {
          const signer = this.getSigv4aSigner();
          const CrtSignerV4 = signatureV4CrtContainer.CrtSignerV4;
          if (CrtSignerV4 && signer instanceof CrtSignerV4) {
            return signer.presign(originalRequest, options);
          } else {
            throw new Error(`presign with signingRegion '*' is only supported when using the CRT dependency @aws-sdk/signature-v4-crt. Please check whether you have installed the "@aws-sdk/signature-v4-crt" package explicitly. You must also register the package by calling [require("@aws-sdk/signature-v4-crt");] or an ESM equivalent such as [import "@aws-sdk/signature-v4-crt";]. For more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt`);
          }
        }
        return this.sigv4Signer.presign(originalRequest, options);
      }
      async presignWithCredentials(originalRequest, credentials, options = {}) {
        if (options.signingRegion === "*") {
          throw new Error("Method presignWithCredentials is not supported for [signingRegion=*].");
        }
        return this.sigv4Signer.presignWithCredentials(originalRequest, credentials, options);
      }
      getSigv4aSigner() {
        if (!this.sigv4aSigner) {
          const CrtSignerV4 = signatureV4CrtContainer.CrtSignerV4;
          const JsSigV4aSigner = signatureV4aContainer.SignatureV4a;
          if (this.signerOptions.runtime === "node") {
            if (!CrtSignerV4 && !JsSigV4aSigner) {
              throw new Error("Neither CRT nor JS SigV4a implementation is available. Please load either @aws-sdk/signature-v4-crt or @aws-sdk/signature-v4a. For more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt");
            }
            if (CrtSignerV4 && typeof CrtSignerV4 === "function") {
              this.sigv4aSigner = new CrtSignerV4({
                ...this.signerOptions,
                signingAlgorithm: 1
              });
            } else if (JsSigV4aSigner && typeof JsSigV4aSigner === "function") {
              this.sigv4aSigner = new JsSigV4aSigner({
                ...this.signerOptions
              });
            } else {
              throw new Error("Available SigV4a implementation is not a valid constructor. Please ensure you've properly imported @aws-sdk/signature-v4-crt or @aws-sdk/signature-v4a.For more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt");
            }
          } else {
            if (!JsSigV4aSigner || typeof JsSigV4aSigner !== "function") {
              throw new Error("JS SigV4a implementation is not available or not a valid constructor. Please check whether you have installed the @aws-sdk/signature-v4a package explicitly. The CRT implementation is not available for browsers. You must also register the package by calling [require('@aws-sdk/signature-v4a');] or an ESM equivalent such as [import '@aws-sdk/signature-v4a';]. For more information please go to https://github.com/aws/aws-sdk-js-v3#using-javascript-non-crt-implementation-of-sigv4a");
            }
            this.sigv4aSigner = new JsSigV4aSigner({
              ...this.signerOptions
            });
          }
        }
        return this.sigv4aSigner;
      }
    };
  }
});

// node_modules/@aws-sdk/signature-v4-multi-region/dist-es/index.js
var init_dist_es40 = __esm({
  "node_modules/@aws-sdk/signature-v4-multi-region/dist-es/index.js"() {
    init_SignatureV4MultiRegion();
    init_signature_v4_crt_container();
  }
});

// node_modules/@aws-sdk/credential-provider-env/dist-es/fromEnv.js
var ENV_KEY, ENV_SECRET, ENV_SESSION, ENV_EXPIRATION, ENV_CREDENTIAL_SCOPE, ENV_ACCOUNT_ID, fromEnv2;
var init_fromEnv2 = __esm({
  "node_modules/@aws-sdk/credential-provider-env/dist-es/fromEnv.js"() {
    init_client2();
    init_dist_es29();
    ENV_KEY = "AWS_ACCESS_KEY_ID";
    ENV_SECRET = "AWS_SECRET_ACCESS_KEY";
    ENV_SESSION = "AWS_SESSION_TOKEN";
    ENV_EXPIRATION = "AWS_CREDENTIAL_EXPIRATION";
    ENV_CREDENTIAL_SCOPE = "AWS_CREDENTIAL_SCOPE";
    ENV_ACCOUNT_ID = "AWS_ACCOUNT_ID";
    fromEnv2 = /* @__PURE__ */ __name((init) => async () => {
      init?.logger?.debug("@aws-sdk/credential-provider-env - fromEnv");
      const accessKeyId = process.env[ENV_KEY];
      const secretAccessKey = process.env[ENV_SECRET];
      const sessionToken = process.env[ENV_SESSION];
      const expiry = process.env[ENV_EXPIRATION];
      const credentialScope = process.env[ENV_CREDENTIAL_SCOPE];
      const accountId = process.env[ENV_ACCOUNT_ID];
      if (accessKeyId && secretAccessKey) {
        const credentials = {
          accessKeyId,
          secretAccessKey,
          ...sessionToken && { sessionToken },
          ...expiry && { expiration: new Date(expiry) },
          ...credentialScope && { credentialScope },
          ...accountId && { accountId }
        };
        setCredentialFeature(credentials, "CREDENTIALS_ENV_VARS", "g");
        return credentials;
      }
      throw new CredentialsProviderError("Unable to find environment variable credentials.", { logger: init?.logger });
    }, "fromEnv");
  }
});

// node_modules/@aws-sdk/credential-provider-env/dist-es/index.js
var dist_es_exports = {};
__export(dist_es_exports, {
  ENV_ACCOUNT_ID: () => ENV_ACCOUNT_ID,
  ENV_CREDENTIAL_SCOPE: () => ENV_CREDENTIAL_SCOPE,
  ENV_EXPIRATION: () => ENV_EXPIRATION,
  ENV_KEY: () => ENV_KEY,
  ENV_SECRET: () => ENV_SECRET,
  ENV_SESSION: () => ENV_SESSION,
  fromEnv: () => fromEnv2
});
var init_dist_es41 = __esm({
  "node_modules/@aws-sdk/credential-provider-env/dist-es/index.js"() {
    init_fromEnv2();
  }
});

// node_modules/@smithy/credential-provider-imds/dist-es/remoteProvider/httpRequest.js
import { Buffer as Buffer3 } from "buffer";
import { request } from "http";
function httpRequest(options) {
  return new Promise((resolve, reject) => {
    const req = request({
      method: "GET",
      ...options,
      hostname: options.hostname?.replace(/^\[(.+)\]$/, "$1")
    });
    req.on("error", (err) => {
      reject(Object.assign(new ProviderError("Unable to connect to instance metadata service"), err));
      req.destroy();
    });
    req.on("timeout", () => {
      reject(new ProviderError("TimeoutError from instance metadata service"));
      req.destroy();
    });
    req.on("response", (res) => {
      const { statusCode = 400 } = res;
      if (statusCode < 200 || 300 <= statusCode) {
        reject(Object.assign(new ProviderError("Error response received from instance metadata service"), { statusCode }));
        req.destroy();
      }
      const chunks = [];
      res.on("data", (chunk) => {
        chunks.push(chunk);
      });
      res.on("end", () => {
        resolve(Buffer3.concat(chunks));
        req.destroy();
      });
    });
    req.end();
  });
}
var init_httpRequest2 = __esm({
  "node_modules/@smithy/credential-provider-imds/dist-es/remoteProvider/httpRequest.js"() {
    init_dist_es29();
    __name(httpRequest, "httpRequest");
  }
});

// node_modules/@smithy/credential-provider-imds/dist-es/remoteProvider/ImdsCredentials.js
var isImdsCredentials, fromImdsCredentials;
var init_ImdsCredentials = __esm({
  "node_modules/@smithy/credential-provider-imds/dist-es/remoteProvider/ImdsCredentials.js"() {
    isImdsCredentials = /* @__PURE__ */ __name((arg) => Boolean(arg) && typeof arg === "object" && typeof arg.AccessKeyId === "string" && typeof arg.SecretAccessKey === "string" && typeof arg.Token === "string" && typeof arg.Expiration === "string", "isImdsCredentials");
    fromImdsCredentials = /* @__PURE__ */ __name((creds) => ({
      accessKeyId: creds.AccessKeyId,
      secretAccessKey: creds.SecretAccessKey,
      sessionToken: creds.Token,
      expiration: new Date(creds.Expiration),
      ...creds.AccountId && { accountId: creds.AccountId }
    }), "fromImdsCredentials");
  }
});

// node_modules/@smithy/credential-provider-imds/dist-es/remoteProvider/RemoteProviderInit.js
var DEFAULT_TIMEOUT, DEFAULT_MAX_RETRIES, providerConfigFromInit;
var init_RemoteProviderInit = __esm({
  "node_modules/@smithy/credential-provider-imds/dist-es/remoteProvider/RemoteProviderInit.js"() {
    DEFAULT_TIMEOUT = 1e3;
    DEFAULT_MAX_RETRIES = 0;
    providerConfigFromInit = /* @__PURE__ */ __name(({ maxRetries = DEFAULT_MAX_RETRIES, timeout = DEFAULT_TIMEOUT }) => ({ maxRetries, timeout }), "providerConfigFromInit");
  }
});

// node_modules/@smithy/credential-provider-imds/dist-es/remoteProvider/retry.js
var retry;
var init_retry3 = __esm({
  "node_modules/@smithy/credential-provider-imds/dist-es/remoteProvider/retry.js"() {
    retry = /* @__PURE__ */ __name((toRetry, maxRetries) => {
      let promise = toRetry();
      for (let i6 = 0; i6 < maxRetries; i6++) {
        promise = promise.catch(toRetry);
      }
      return promise;
    }, "retry");
  }
});

// node_modules/@smithy/credential-provider-imds/dist-es/fromContainerMetadata.js
import { parse } from "url";
var ENV_CMDS_FULL_URI, ENV_CMDS_RELATIVE_URI, ENV_CMDS_AUTH_TOKEN, fromContainerMetadata, requestFromEcsImds, CMDS_IP, GREENGRASS_HOSTS, GREENGRASS_PROTOCOLS, getCmdsUri;
var init_fromContainerMetadata = __esm({
  "node_modules/@smithy/credential-provider-imds/dist-es/fromContainerMetadata.js"() {
    init_dist_es29();
    init_httpRequest2();
    init_ImdsCredentials();
    init_RemoteProviderInit();
    init_retry3();
    ENV_CMDS_FULL_URI = "AWS_CONTAINER_CREDENTIALS_FULL_URI";
    ENV_CMDS_RELATIVE_URI = "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI";
    ENV_CMDS_AUTH_TOKEN = "AWS_CONTAINER_AUTHORIZATION_TOKEN";
    fromContainerMetadata = /* @__PURE__ */ __name((init = {}) => {
      const { timeout, maxRetries } = providerConfigFromInit(init);
      return () => retry(async () => {
        const requestOptions = await getCmdsUri({ logger: init.logger });
        const credsResponse = JSON.parse(await requestFromEcsImds(timeout, requestOptions));
        if (!isImdsCredentials(credsResponse)) {
          throw new CredentialsProviderError("Invalid response received from instance metadata service.", {
            logger: init.logger
          });
        }
        return fromImdsCredentials(credsResponse);
      }, maxRetries);
    }, "fromContainerMetadata");
    requestFromEcsImds = /* @__PURE__ */ __name(async (timeout, options) => {
      if (process.env[ENV_CMDS_AUTH_TOKEN]) {
        options.headers = {
          ...options.headers,
          Authorization: process.env[ENV_CMDS_AUTH_TOKEN]
        };
      }
      const buffer = await httpRequest({
        ...options,
        timeout
      });
      return buffer.toString();
    }, "requestFromEcsImds");
    CMDS_IP = "169.254.170.2";
    GREENGRASS_HOSTS = {
      localhost: true,
      "127.0.0.1": true
    };
    GREENGRASS_PROTOCOLS = {
      "http:": true,
      "https:": true
    };
    getCmdsUri = /* @__PURE__ */ __name(async ({ logger: logger2 }) => {
      if (process.env[ENV_CMDS_RELATIVE_URI]) {
        return {
          hostname: CMDS_IP,
          path: process.env[ENV_CMDS_RELATIVE_URI]
        };
      }
      if (process.env[ENV_CMDS_FULL_URI]) {
        const parsed = parse(process.env[ENV_CMDS_FULL_URI]);
        if (!parsed.hostname || !(parsed.hostname in GREENGRASS_HOSTS)) {
          throw new CredentialsProviderError(`${parsed.hostname} is not a valid container metadata service hostname`, {
            tryNextLink: false,
            logger: logger2
          });
        }
        if (!parsed.protocol || !(parsed.protocol in GREENGRASS_PROTOCOLS)) {
          throw new CredentialsProviderError(`${parsed.protocol} is not a valid container metadata service protocol`, {
            tryNextLink: false,
            logger: logger2
          });
        }
        return {
          ...parsed,
          port: parsed.port ? parseInt(parsed.port, 10) : void 0
        };
      }
      throw new CredentialsProviderError(`The container metadata credential provider cannot be used unless the ${ENV_CMDS_RELATIVE_URI} or ${ENV_CMDS_FULL_URI} environment variable is set`, {
        tryNextLink: false,
        logger: logger2
      });
    }, "getCmdsUri");
  }
});

// node_modules/@smithy/credential-provider-imds/dist-es/error/InstanceMetadataV1FallbackError.js
var InstanceMetadataV1FallbackError;
var init_InstanceMetadataV1FallbackError = __esm({
  "node_modules/@smithy/credential-provider-imds/dist-es/error/InstanceMetadataV1FallbackError.js"() {
    init_dist_es29();
    InstanceMetadataV1FallbackError = class _InstanceMetadataV1FallbackError extends CredentialsProviderError {
      static {
        __name(this, "InstanceMetadataV1FallbackError");
      }
      tryNextLink;
      name = "InstanceMetadataV1FallbackError";
      constructor(message, tryNextLink = true) {
        super(message, tryNextLink);
        this.tryNextLink = tryNextLink;
        Object.setPrototypeOf(this, _InstanceMetadataV1FallbackError.prototype);
      }
    };
  }
});

// node_modules/@smithy/credential-provider-imds/dist-es/config/Endpoint.js
var Endpoint;
var init_Endpoint = __esm({
  "node_modules/@smithy/credential-provider-imds/dist-es/config/Endpoint.js"() {
    (function(Endpoint2) {
      Endpoint2["IPv4"] = "http://169.254.169.254";
      Endpoint2["IPv6"] = "http://[fd00:ec2::254]";
    })(Endpoint || (Endpoint = {}));
  }
});

// node_modules/@smithy/credential-provider-imds/dist-es/config/EndpointConfigOptions.js
var ENV_ENDPOINT_NAME, CONFIG_ENDPOINT_NAME, ENDPOINT_CONFIG_OPTIONS;
var init_EndpointConfigOptions = __esm({
  "node_modules/@smithy/credential-provider-imds/dist-es/config/EndpointConfigOptions.js"() {
    ENV_ENDPOINT_NAME = "AWS_EC2_METADATA_SERVICE_ENDPOINT";
    CONFIG_ENDPOINT_NAME = "ec2_metadata_service_endpoint";
    ENDPOINT_CONFIG_OPTIONS = {
      environmentVariableSelector: /* @__PURE__ */ __name((env2) => env2[ENV_ENDPOINT_NAME], "environmentVariableSelector"),
      configFileSelector: /* @__PURE__ */ __name((profile) => profile[CONFIG_ENDPOINT_NAME], "configFileSelector"),
      default: void 0
    };
  }
});

// node_modules/@smithy/credential-provider-imds/dist-es/config/EndpointMode.js
var EndpointMode;
var init_EndpointMode = __esm({
  "node_modules/@smithy/credential-provider-imds/dist-es/config/EndpointMode.js"() {
    (function(EndpointMode2) {
      EndpointMode2["IPv4"] = "IPv4";
      EndpointMode2["IPv6"] = "IPv6";
    })(EndpointMode || (EndpointMode = {}));
  }
});

// node_modules/@smithy/credential-provider-imds/dist-es/config/EndpointModeConfigOptions.js
var ENV_ENDPOINT_MODE_NAME, CONFIG_ENDPOINT_MODE_NAME, ENDPOINT_MODE_CONFIG_OPTIONS;
var init_EndpointModeConfigOptions = __esm({
  "node_modules/@smithy/credential-provider-imds/dist-es/config/EndpointModeConfigOptions.js"() {
    init_EndpointMode();
    ENV_ENDPOINT_MODE_NAME = "AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE";
    CONFIG_ENDPOINT_MODE_NAME = "ec2_metadata_service_endpoint_mode";
    ENDPOINT_MODE_CONFIG_OPTIONS = {
      environmentVariableSelector: /* @__PURE__ */ __name((env2) => env2[ENV_ENDPOINT_MODE_NAME], "environmentVariableSelector"),
      configFileSelector: /* @__PURE__ */ __name((profile) => profile[CONFIG_ENDPOINT_MODE_NAME], "configFileSelector"),
      default: EndpointMode.IPv4
    };
  }
});

// node_modules/@smithy/credential-provider-imds/dist-es/utils/getInstanceMetadataEndpoint.js
var getInstanceMetadataEndpoint, getFromEndpointConfig, getFromEndpointModeConfig;
var init_getInstanceMetadataEndpoint = __esm({
  "node_modules/@smithy/credential-provider-imds/dist-es/utils/getInstanceMetadataEndpoint.js"() {
    init_dist_es31();
    init_dist_es18();
    init_Endpoint();
    init_EndpointConfigOptions();
    init_EndpointMode();
    init_EndpointModeConfigOptions();
    getInstanceMetadataEndpoint = /* @__PURE__ */ __name(async () => parseUrl(await getFromEndpointConfig() || await getFromEndpointModeConfig()), "getInstanceMetadataEndpoint");
    getFromEndpointConfig = /* @__PURE__ */ __name(async () => loadConfig(ENDPOINT_CONFIG_OPTIONS)(), "getFromEndpointConfig");
    getFromEndpointModeConfig = /* @__PURE__ */ __name(async () => {
      const endpointMode = await loadConfig(ENDPOINT_MODE_CONFIG_OPTIONS)();
      switch (endpointMode) {
        case EndpointMode.IPv4:
          return Endpoint.IPv4;
        case EndpointMode.IPv6:
          return Endpoint.IPv6;
        default:
          throw new Error(`Unsupported endpoint mode: ${endpointMode}. Select from ${Object.values(EndpointMode)}`);
      }
    }, "getFromEndpointModeConfig");
  }
});

// node_modules/@smithy/credential-provider-imds/dist-es/utils/getExtendedInstanceMetadataCredentials.js
var STATIC_STABILITY_REFRESH_INTERVAL_SECONDS, STATIC_STABILITY_REFRESH_INTERVAL_JITTER_WINDOW_SECONDS, STATIC_STABILITY_DOC_URL, getExtendedInstanceMetadataCredentials;
var init_getExtendedInstanceMetadataCredentials = __esm({
  "node_modules/@smithy/credential-provider-imds/dist-es/utils/getExtendedInstanceMetadataCredentials.js"() {
    STATIC_STABILITY_REFRESH_INTERVAL_SECONDS = 5 * 60;
    STATIC_STABILITY_REFRESH_INTERVAL_JITTER_WINDOW_SECONDS = 5 * 60;
    STATIC_STABILITY_DOC_URL = "https://docs.aws.amazon.com/sdkref/latest/guide/feature-static-credentials.html";
    getExtendedInstanceMetadataCredentials = /* @__PURE__ */ __name((credentials, logger2) => {
      const refreshInterval = STATIC_STABILITY_REFRESH_INTERVAL_SECONDS + Math.floor(Math.random() * STATIC_STABILITY_REFRESH_INTERVAL_JITTER_WINDOW_SECONDS);
      const newExpiration = new Date(Date.now() + refreshInterval * 1e3);
      logger2.warn(`Attempting credential expiration extension due to a credential service availability issue. A refresh of these credentials will be attempted after ${new Date(newExpiration)}.
For more information, please visit: ` + STATIC_STABILITY_DOC_URL);
      const originalExpiration = credentials.originalExpiration ?? credentials.expiration;
      return {
        ...credentials,
        ...originalExpiration ? { originalExpiration } : {},
        expiration: newExpiration
      };
    }, "getExtendedInstanceMetadataCredentials");
  }
});

// node_modules/@smithy/credential-provider-imds/dist-es/utils/staticStabilityProvider.js
var staticStabilityProvider;
var init_staticStabilityProvider = __esm({
  "node_modules/@smithy/credential-provider-imds/dist-es/utils/staticStabilityProvider.js"() {
    init_getExtendedInstanceMetadataCredentials();
    staticStabilityProvider = /* @__PURE__ */ __name((provider, options = {}) => {
      const logger2 = options?.logger || console;
      let pastCredentials;
      return async () => {
        let credentials;
        try {
          credentials = await provider();
          if (credentials.expiration && credentials.expiration.getTime() < Date.now()) {
            credentials = getExtendedInstanceMetadataCredentials(credentials, logger2);
          }
        } catch (e6) {
          if (pastCredentials) {
            logger2.warn("Credential renew failed: ", e6);
            credentials = getExtendedInstanceMetadataCredentials(pastCredentials, logger2);
          } else {
            throw e6;
          }
        }
        pastCredentials = credentials;
        return credentials;
      };
    }, "staticStabilityProvider");
  }
});

// node_modules/@smithy/credential-provider-imds/dist-es/fromInstanceMetadata.js
var IMDS_PATH, IMDS_TOKEN_PATH, AWS_EC2_METADATA_V1_DISABLED, PROFILE_AWS_EC2_METADATA_V1_DISABLED, X_AWS_EC2_METADATA_TOKEN, fromInstanceMetadata, getInstanceMetadataProvider, getMetadataToken, getProfile, getCredentialsFromProfile;
var init_fromInstanceMetadata = __esm({
  "node_modules/@smithy/credential-provider-imds/dist-es/fromInstanceMetadata.js"() {
    init_dist_es31();
    init_dist_es29();
    init_InstanceMetadataV1FallbackError();
    init_httpRequest2();
    init_ImdsCredentials();
    init_RemoteProviderInit();
    init_retry3();
    init_getInstanceMetadataEndpoint();
    init_staticStabilityProvider();
    IMDS_PATH = "/latest/meta-data/iam/security-credentials/";
    IMDS_TOKEN_PATH = "/latest/api/token";
    AWS_EC2_METADATA_V1_DISABLED = "AWS_EC2_METADATA_V1_DISABLED";
    PROFILE_AWS_EC2_METADATA_V1_DISABLED = "ec2_metadata_v1_disabled";
    X_AWS_EC2_METADATA_TOKEN = "x-aws-ec2-metadata-token";
    fromInstanceMetadata = /* @__PURE__ */ __name((init = {}) => staticStabilityProvider(getInstanceMetadataProvider(init), { logger: init.logger }), "fromInstanceMetadata");
    getInstanceMetadataProvider = /* @__PURE__ */ __name((init = {}) => {
      let disableFetchToken = false;
      const { logger: logger2, profile } = init;
      const { timeout, maxRetries } = providerConfigFromInit(init);
      const getCredentials2 = /* @__PURE__ */ __name(async (maxRetries2, options) => {
        const isImdsV1Fallback = disableFetchToken || options.headers?.[X_AWS_EC2_METADATA_TOKEN] == null;
        if (isImdsV1Fallback) {
          let fallbackBlockedFromProfile = false;
          let fallbackBlockedFromProcessEnv = false;
          const configValue = await loadConfig({
            environmentVariableSelector: /* @__PURE__ */ __name((env2) => {
              const envValue = env2[AWS_EC2_METADATA_V1_DISABLED];
              fallbackBlockedFromProcessEnv = !!envValue && envValue !== "false";
              if (envValue === void 0) {
                throw new CredentialsProviderError(`${AWS_EC2_METADATA_V1_DISABLED} not set in env, checking config file next.`, { logger: init.logger });
              }
              return fallbackBlockedFromProcessEnv;
            }, "environmentVariableSelector"),
            configFileSelector: /* @__PURE__ */ __name((profile2) => {
              const profileValue = profile2[PROFILE_AWS_EC2_METADATA_V1_DISABLED];
              fallbackBlockedFromProfile = !!profileValue && profileValue !== "false";
              return fallbackBlockedFromProfile;
            }, "configFileSelector"),
            default: false
          }, {
            profile
          })();
          if (init.ec2MetadataV1Disabled || configValue) {
            const causes = [];
            if (init.ec2MetadataV1Disabled)
              causes.push("credential provider initialization (runtime option ec2MetadataV1Disabled)");
            if (fallbackBlockedFromProfile)
              causes.push(`config file profile (${PROFILE_AWS_EC2_METADATA_V1_DISABLED})`);
            if (fallbackBlockedFromProcessEnv)
              causes.push(`process environment variable (${AWS_EC2_METADATA_V1_DISABLED})`);
            throw new InstanceMetadataV1FallbackError(`AWS EC2 Metadata v1 fallback has been blocked by AWS SDK configuration in the following: [${causes.join(", ")}].`);
          }
        }
        const imdsProfile = (await retry(async () => {
          let profile2;
          try {
            profile2 = await getProfile(options);
          } catch (err) {
            if (err.statusCode === 401) {
              disableFetchToken = false;
            }
            throw err;
          }
          return profile2;
        }, maxRetries2)).trim();
        return retry(async () => {
          let creds;
          try {
            creds = await getCredentialsFromProfile(imdsProfile, options, init);
          } catch (err) {
            if (err.statusCode === 401) {
              disableFetchToken = false;
            }
            throw err;
          }
          return creds;
        }, maxRetries2);
      }, "getCredentials");
      return async () => {
        const endpoint = await getInstanceMetadataEndpoint();
        if (disableFetchToken) {
          logger2?.debug("AWS SDK Instance Metadata", "using v1 fallback (no token fetch)");
          return getCredentials2(maxRetries, { ...endpoint, timeout });
        } else {
          let token;
          try {
            token = (await getMetadataToken({ ...endpoint, timeout })).toString();
          } catch (error) {
            if (error?.statusCode === 400) {
              throw Object.assign(error, {
                message: "EC2 Metadata token request returned error"
              });
            } else if (error.message === "TimeoutError" || [403, 404, 405].includes(error.statusCode)) {
              disableFetchToken = true;
            }
            logger2?.debug("AWS SDK Instance Metadata", "using v1 fallback (initial)");
            return getCredentials2(maxRetries, { ...endpoint, timeout });
          }
          return getCredentials2(maxRetries, {
            ...endpoint,
            headers: {
              [X_AWS_EC2_METADATA_TOKEN]: token
            },
            timeout
          });
        }
      };
    }, "getInstanceMetadataProvider");
    getMetadataToken = /* @__PURE__ */ __name(async (options) => httpRequest({
      ...options,
      path: IMDS_TOKEN_PATH,
      method: "PUT",
      headers: {
        "x-aws-ec2-metadata-token-ttl-seconds": "21600"
      }
    }), "getMetadataToken");
    getProfile = /* @__PURE__ */ __name(async (options) => (await httpRequest({ ...options, path: IMDS_PATH })).toString(), "getProfile");
    getCredentialsFromProfile = /* @__PURE__ */ __name(async (profile, options, init) => {
      const credentialsResponse = JSON.parse((await httpRequest({
        ...options,
        path: IMDS_PATH + profile
      })).toString());
      if (!isImdsCredentials(credentialsResponse)) {
        throw new CredentialsProviderError("Invalid response received from instance metadata service.", {
          logger: init.logger
        });
      }
      return fromImdsCredentials(credentialsResponse);
    }, "getCredentialsFromProfile");
  }
});

// node_modules/@smithy/credential-provider-imds/dist-es/types.js
var init_types8 = __esm({
  "node_modules/@smithy/credential-provider-imds/dist-es/types.js"() {
  }
});

// node_modules/@smithy/credential-provider-imds/dist-es/index.js
var dist_es_exports2 = {};
__export(dist_es_exports2, {
  DEFAULT_MAX_RETRIES: () => DEFAULT_MAX_RETRIES,
  DEFAULT_TIMEOUT: () => DEFAULT_TIMEOUT,
  ENV_CMDS_AUTH_TOKEN: () => ENV_CMDS_AUTH_TOKEN,
  ENV_CMDS_FULL_URI: () => ENV_CMDS_FULL_URI,
  ENV_CMDS_RELATIVE_URI: () => ENV_CMDS_RELATIVE_URI,
  Endpoint: () => Endpoint,
  fromContainerMetadata: () => fromContainerMetadata,
  fromInstanceMetadata: () => fromInstanceMetadata,
  getInstanceMetadataEndpoint: () => getInstanceMetadataEndpoint,
  httpRequest: () => httpRequest,
  providerConfigFromInit: () => providerConfigFromInit
});
var init_dist_es42 = __esm({
  "node_modules/@smithy/credential-provider-imds/dist-es/index.js"() {
    init_fromContainerMetadata();
    init_fromInstanceMetadata();
    init_RemoteProviderInit();
    init_types8();
    init_httpRequest2();
    init_getInstanceMetadataEndpoint();
    init_Endpoint();
  }
});

// node_modules/@aws-sdk/credential-provider-http/dist-es/fromHttp/checkUrl.js
var ECS_CONTAINER_HOST, EKS_CONTAINER_HOST_IPv4, EKS_CONTAINER_HOST_IPv6, checkUrl;
var init_checkUrl = __esm({
  "node_modules/@aws-sdk/credential-provider-http/dist-es/fromHttp/checkUrl.js"() {
    init_dist_es29();
    ECS_CONTAINER_HOST = "169.254.170.2";
    EKS_CONTAINER_HOST_IPv4 = "169.254.170.23";
    EKS_CONTAINER_HOST_IPv6 = "[fd00:ec2::23]";
    checkUrl = /* @__PURE__ */ __name((url, logger2) => {
      if (url.protocol === "https:") {
        return;
      }
      if (url.hostname === ECS_CONTAINER_HOST || url.hostname === EKS_CONTAINER_HOST_IPv4 || url.hostname === EKS_CONTAINER_HOST_IPv6) {
        return;
      }
      if (url.hostname.includes("[")) {
        if (url.hostname === "[::1]" || url.hostname === "[0000:0000:0000:0000:0000:0000:0000:0001]") {
          return;
        }
      } else {
        if (url.hostname === "localhost") {
          return;
        }
        const ipComponents = url.hostname.split(".");
        const inRange = /* @__PURE__ */ __name((component) => {
          const num = parseInt(component, 10);
          return 0 <= num && num <= 255;
        }, "inRange");
        if (ipComponents[0] === "127" && inRange(ipComponents[1]) && inRange(ipComponents[2]) && inRange(ipComponents[3]) && ipComponents.length === 4) {
          return;
        }
      }
      throw new CredentialsProviderError(`URL not accepted. It must either be HTTPS or match one of the following:
  - loopback CIDR 127.0.0.0/8 or [::1/128]
  - ECS container host 169.254.170.2
  - EKS container host 169.254.170.23 or [fd00:ec2::23]`, { logger: logger2 });
    }, "checkUrl");
  }
});

// node_modules/@aws-sdk/credential-provider-http/dist-es/fromHttp/requestHelpers.js
function createGetRequest(url) {
  return new HttpRequest({
    protocol: url.protocol,
    hostname: url.hostname,
    port: Number(url.port),
    path: url.pathname,
    query: Array.from(url.searchParams.entries()).reduce((acc, [k6, v]) => {
      acc[k6] = v;
      return acc;
    }, {}),
    fragment: url.hash
  });
}
async function getCredentials(response, logger2) {
  const stream = sdkStreamMixin2(response.body);
  const str = await stream.transformToString();
  if (response.statusCode === 200) {
    const parsed = JSON.parse(str);
    if (typeof parsed.AccessKeyId !== "string" || typeof parsed.SecretAccessKey !== "string" || typeof parsed.Token !== "string" || typeof parsed.Expiration !== "string") {
      throw new CredentialsProviderError("HTTP credential provider response not of the required format, an object matching: { AccessKeyId: string, SecretAccessKey: string, Token: string, Expiration: string(rfc3339) }", { logger: logger2 });
    }
    return {
      accessKeyId: parsed.AccessKeyId,
      secretAccessKey: parsed.SecretAccessKey,
      sessionToken: parsed.Token,
      expiration: parseRfc3339DateTime(parsed.Expiration)
    };
  }
  if (response.statusCode >= 400 && response.statusCode < 500) {
    let parsedBody = {};
    try {
      parsedBody = JSON.parse(str);
    } catch (e6) {
    }
    throw Object.assign(new CredentialsProviderError(`Server responded with status: ${response.statusCode}`, { logger: logger2 }), {
      Code: parsedBody.Code,
      Message: parsedBody.Message
    });
  }
  throw new CredentialsProviderError(`Server responded with status: ${response.statusCode}`, { logger: logger2 });
}
var init_requestHelpers = __esm({
  "node_modules/@aws-sdk/credential-provider-http/dist-es/fromHttp/requestHelpers.js"() {
    init_dist_es29();
    init_dist_es2();
    init_dist_es35();
    init_dist_es16();
    __name(createGetRequest, "createGetRequest");
    __name(getCredentials, "getCredentials");
  }
});

// node_modules/@aws-sdk/credential-provider-http/dist-es/fromHttp/retry-wrapper.js
var retryWrapper;
var init_retry_wrapper = __esm({
  "node_modules/@aws-sdk/credential-provider-http/dist-es/fromHttp/retry-wrapper.js"() {
    retryWrapper = /* @__PURE__ */ __name((toRetry, maxRetries, delayMs) => {
      return async () => {
        for (let i6 = 0; i6 < maxRetries; ++i6) {
          try {
            return await toRetry();
          } catch (e6) {
            await new Promise((resolve) => setTimeout(resolve, delayMs));
          }
        }
        return await toRetry();
      };
    }, "retryWrapper");
  }
});

// node_modules/@aws-sdk/credential-provider-http/dist-es/fromHttp/fromHttp.js
import fs from "node:fs/promises";
var AWS_CONTAINER_CREDENTIALS_RELATIVE_URI, DEFAULT_LINK_LOCAL_HOST, AWS_CONTAINER_CREDENTIALS_FULL_URI, AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE, AWS_CONTAINER_AUTHORIZATION_TOKEN, fromHttp;
var init_fromHttp = __esm({
  "node_modules/@aws-sdk/credential-provider-http/dist-es/fromHttp/fromHttp.js"() {
    init_client2();
    init_dist_es13();
    init_dist_es29();
    init_checkUrl();
    init_requestHelpers();
    init_retry_wrapper();
    AWS_CONTAINER_CREDENTIALS_RELATIVE_URI = "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI";
    DEFAULT_LINK_LOCAL_HOST = "http://169.254.170.2";
    AWS_CONTAINER_CREDENTIALS_FULL_URI = "AWS_CONTAINER_CREDENTIALS_FULL_URI";
    AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE = "AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE";
    AWS_CONTAINER_AUTHORIZATION_TOKEN = "AWS_CONTAINER_AUTHORIZATION_TOKEN";
    fromHttp = /* @__PURE__ */ __name((options = {}) => {
      options.logger?.debug("@aws-sdk/credential-provider-http - fromHttp");
      let host;
      const relative = options.awsContainerCredentialsRelativeUri ?? process.env[AWS_CONTAINER_CREDENTIALS_RELATIVE_URI];
      const full = options.awsContainerCredentialsFullUri ?? process.env[AWS_CONTAINER_CREDENTIALS_FULL_URI];
      const token = options.awsContainerAuthorizationToken ?? process.env[AWS_CONTAINER_AUTHORIZATION_TOKEN];
      const tokenFile = options.awsContainerAuthorizationTokenFile ?? process.env[AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE];
      const warn = options.logger?.constructor?.name === "NoOpLogger" || !options.logger?.warn ? console.warn : options.logger.warn.bind(options.logger);
      if (relative && full) {
        warn("@aws-sdk/credential-provider-http: you have set both awsContainerCredentialsRelativeUri and awsContainerCredentialsFullUri.");
        warn("awsContainerCredentialsFullUri will take precedence.");
      }
      if (token && tokenFile) {
        warn("@aws-sdk/credential-provider-http: you have set both awsContainerAuthorizationToken and awsContainerAuthorizationTokenFile.");
        warn("awsContainerAuthorizationToken will take precedence.");
      }
      if (full) {
        host = full;
      } else if (relative) {
        host = `${DEFAULT_LINK_LOCAL_HOST}${relative}`;
      } else {
        throw new CredentialsProviderError(`No HTTP credential provider host provided.
Set AWS_CONTAINER_CREDENTIALS_FULL_URI or AWS_CONTAINER_CREDENTIALS_RELATIVE_URI.`, { logger: options.logger });
      }
      const url = new URL(host);
      checkUrl(url, options.logger);
      const requestHandler = NodeHttpHandler.create({
        requestTimeout: options.timeout ?? 1e3,
        connectionTimeout: options.timeout ?? 1e3
      });
      return retryWrapper(async () => {
        const request2 = createGetRequest(url);
        if (token) {
          request2.headers.Authorization = token;
        } else if (tokenFile) {
          request2.headers.Authorization = (await fs.readFile(tokenFile)).toString();
        }
        try {
          const result = await requestHandler.handle(request2);
          return getCredentials(result.response).then((creds) => setCredentialFeature(creds, "CREDENTIALS_HTTP", "z"));
        } catch (e6) {
          throw new CredentialsProviderError(String(e6), { logger: options.logger });
        }
      }, options.maxRetries ?? 3, options.timeout ?? 1e3);
    }, "fromHttp");
  }
});

// node_modules/@aws-sdk/credential-provider-http/dist-es/index.js
var dist_es_exports3 = {};
__export(dist_es_exports3, {
  fromHttp: () => fromHttp
});
var init_dist_es43 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/dist-es/index.js"() {
    init_fromHttp();
  }
});

// node_modules/@aws-sdk/credential-provider-sso/dist-es/isSsoProfile.js
var isSsoProfile;
var init_isSsoProfile = __esm({
  "node_modules/@aws-sdk/credential-provider-sso/dist-es/isSsoProfile.js"() {
    isSsoProfile = /* @__PURE__ */ __name((arg) => arg && (typeof arg.sso_start_url === "string" || typeof arg.sso_account_id === "string" || typeof arg.sso_session === "string" || typeof arg.sso_region === "string" || typeof arg.sso_role_name === "string"), "isSsoProfile");
  }
});

// node_modules/@aws-sdk/token-providers/dist-es/fromEnvSigningName.js
var init_fromEnvSigningName = __esm({
  "node_modules/@aws-sdk/token-providers/dist-es/fromEnvSigningName.js"() {
  }
});

// node_modules/@aws-sdk/token-providers/dist-es/constants.js
var EXPIRE_WINDOW_MS, REFRESH_MESSAGE;
var init_constants9 = __esm({
  "node_modules/@aws-sdk/token-providers/dist-es/constants.js"() {
    EXPIRE_WINDOW_MS = 5 * 60 * 1e3;
    REFRESH_MESSAGE = `To refresh this SSO session run 'aws sso login' with the corresponding profile.`;
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/auth/httpAuthSchemeProvider.js
function createAwsAuthSigv4HttpAuthOption2(authParameters) {
  return {
    schemeId: "aws.auth#sigv4",
    signingProperties: {
      name: "sso-oauth",
      region: authParameters.region
    },
    propertiesExtractor: /* @__PURE__ */ __name((config, context) => ({
      signingProperties: {
        config,
        context
      }
    }), "propertiesExtractor")
  };
}
function createSmithyApiNoAuthHttpAuthOption(authParameters) {
  return {
    schemeId: "smithy.api#noAuth"
  };
}
var defaultSSOOIDCHttpAuthSchemeParametersProvider, defaultSSOOIDCHttpAuthSchemeProvider, resolveHttpAuthSchemeConfig2;
var init_httpAuthSchemeProvider = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/auth/httpAuthSchemeProvider.js"() {
    init_httpAuthSchemes2();
    init_dist_es6();
    defaultSSOOIDCHttpAuthSchemeParametersProvider = /* @__PURE__ */ __name(async (config, context, input) => {
      return {
        operation: getSmithyContext(context).operation,
        region: await normalizeProvider(config.region)() || (() => {
          throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
        })()
      };
    }, "defaultSSOOIDCHttpAuthSchemeParametersProvider");
    __name(createAwsAuthSigv4HttpAuthOption2, "createAwsAuthSigv4HttpAuthOption");
    __name(createSmithyApiNoAuthHttpAuthOption, "createSmithyApiNoAuthHttpAuthOption");
    defaultSSOOIDCHttpAuthSchemeProvider = /* @__PURE__ */ __name((authParameters) => {
      const options = [];
      switch (authParameters.operation) {
        case "CreateToken": {
          options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
          break;
        }
        default: {
          options.push(createAwsAuthSigv4HttpAuthOption2(authParameters));
        }
      }
      return options;
    }, "defaultSSOOIDCHttpAuthSchemeProvider");
    resolveHttpAuthSchemeConfig2 = /* @__PURE__ */ __name((config) => {
      const config_0 = resolveAwsSdkSigV4Config(config);
      return Object.assign(config_0, {
        authSchemePreference: normalizeProvider(config.authSchemePreference ?? [])
      });
    }, "resolveHttpAuthSchemeConfig");
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/endpoint/EndpointParameters.js
var resolveClientEndpointParameters2, commonParams2;
var init_EndpointParameters = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/endpoint/EndpointParameters.js"() {
    resolveClientEndpointParameters2 = /* @__PURE__ */ __name((options) => {
      return Object.assign(options, {
        useDualstackEndpoint: options.useDualstackEndpoint ?? false,
        useFipsEndpoint: options.useFipsEndpoint ?? false,
        defaultSigningName: "sso-oauth"
      });
    }, "resolveClientEndpointParameters");
    commonParams2 = {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
    };
  }
});

// node_modules/@aws-sdk/nested-clients/package.json
var package_default2;
var init_package = __esm({
  "node_modules/@aws-sdk/nested-clients/package.json"() {
    package_default2 = {
      name: "@aws-sdk/nested-clients",
      version: "3.997.2",
      description: "Nested clients for AWS SDK packages.",
      main: "./dist-cjs/index.js",
      module: "./dist-es/index.js",
      types: "./dist-types/index.d.ts",
      scripts: {
        build: "yarn lint && concurrently 'yarn:build:types' 'yarn:build:es' && yarn build:cjs",
        "build:cjs": "node ../../scripts/compilation/inline nested-clients",
        "build:es": "tsc -p tsconfig.es.json",
        "build:include:deps": 'yarn g:turbo run build -F="$npm_package_name"',
        "build:types": "tsc -p tsconfig.types.json",
        "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
        clean: "premove dist-cjs dist-es dist-types tsconfig.cjs.tsbuildinfo tsconfig.es.tsbuildinfo tsconfig.types.tsbuildinfo",
        lint: "node ../../scripts/validation/submodules-linter.js --pkg nested-clients",
        test: "yarn g:vitest run",
        "test:watch": "yarn g:vitest watch"
      },
      engines: {
        node: ">=20.0.0"
      },
      sideEffects: false,
      author: {
        name: "AWS SDK for JavaScript Team",
        url: "https://aws.amazon.com/javascript/"
      },
      license: "Apache-2.0",
      dependencies: {
        "@aws-crypto/sha256-browser": "5.2.0",
        "@aws-crypto/sha256-js": "5.2.0",
        "@aws-sdk/core": "^3.974.4",
        "@aws-sdk/middleware-host-header": "^3.972.10",
        "@aws-sdk/middleware-logger": "^3.972.10",
        "@aws-sdk/middleware-recursion-detection": "^3.972.11",
        "@aws-sdk/middleware-user-agent": "^3.972.34",
        "@aws-sdk/region-config-resolver": "^3.972.13",
        "@aws-sdk/signature-v4-multi-region": "^3.996.21",
        "@aws-sdk/types": "^3.973.8",
        "@aws-sdk/util-endpoints": "^3.996.8",
        "@aws-sdk/util-user-agent-browser": "^3.972.10",
        "@aws-sdk/util-user-agent-node": "^3.973.20",
        "@smithy/config-resolver": "^4.4.17",
        "@smithy/core": "^3.23.16",
        "@smithy/fetch-http-handler": "^5.3.17",
        "@smithy/hash-node": "^4.2.14",
        "@smithy/invalid-dependency": "^4.2.14",
        "@smithy/middleware-content-length": "^4.2.14",
        "@smithy/middleware-endpoint": "^4.4.31",
        "@smithy/middleware-retry": "^4.5.4",
        "@smithy/middleware-serde": "^4.2.19",
        "@smithy/middleware-stack": "^4.2.14",
        "@smithy/node-config-provider": "^4.3.14",
        "@smithy/node-http-handler": "^4.6.0",
        "@smithy/protocol-http": "^5.3.14",
        "@smithy/smithy-client": "^4.12.12",
        "@smithy/types": "^4.14.1",
        "@smithy/url-parser": "^4.2.14",
        "@smithy/util-base64": "^4.3.2",
        "@smithy/util-body-length-browser": "^4.2.2",
        "@smithy/util-body-length-node": "^4.2.3",
        "@smithy/util-defaults-mode-browser": "^4.3.48",
        "@smithy/util-defaults-mode-node": "^4.2.53",
        "@smithy/util-endpoints": "^3.4.2",
        "@smithy/util-middleware": "^4.2.14",
        "@smithy/util-retry": "^4.3.3",
        "@smithy/util-utf8": "^4.2.2",
        tslib: "^2.6.2"
      },
      devDependencies: {
        concurrently: "7.0.0",
        "downlevel-dts": "0.10.1",
        premove: "4.0.0",
        typescript: "~5.8.3"
      },
      typesVersions: {
        "<4.5": {
          "dist-types/*": [
            "dist-types/ts3.4/*"
          ]
        }
      },
      files: [
        "./cognito-identity.d.ts",
        "./cognito-identity.js",
        "./signin.d.ts",
        "./signin.js",
        "./sso-oidc.d.ts",
        "./sso-oidc.js",
        "./sso.d.ts",
        "./sso.js",
        "./sts.d.ts",
        "./sts.js",
        "dist-*/**"
      ],
      browser: {
        "./dist-es/submodules/cognito-identity/runtimeConfig": "./dist-es/submodules/cognito-identity/runtimeConfig.browser",
        "./dist-es/submodules/signin/runtimeConfig": "./dist-es/submodules/signin/runtimeConfig.browser",
        "./dist-es/submodules/sso-oidc/runtimeConfig": "./dist-es/submodules/sso-oidc/runtimeConfig.browser",
        "./dist-es/submodules/sso/runtimeConfig": "./dist-es/submodules/sso/runtimeConfig.browser",
        "./dist-es/submodules/sts/runtimeConfig": "./dist-es/submodules/sts/runtimeConfig.browser"
      },
      "react-native": {},
      homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/packages/nested-clients",
      repository: {
        type: "git",
        url: "https://github.com/aws/aws-sdk-js-v3.git",
        directory: "packages/nested-clients"
      },
      exports: {
        "./package.json": "./package.json",
        "./sso-oidc": {
          types: "./dist-types/submodules/sso-oidc/index.d.ts",
          module: "./dist-es/submodules/sso-oidc/index.js",
          node: "./dist-cjs/submodules/sso-oidc/index.js",
          import: "./dist-es/submodules/sso-oidc/index.js",
          require: "./dist-cjs/submodules/sso-oidc/index.js"
        },
        "./sts": {
          types: "./dist-types/submodules/sts/index.d.ts",
          module: "./dist-es/submodules/sts/index.js",
          node: "./dist-cjs/submodules/sts/index.js",
          import: "./dist-es/submodules/sts/index.js",
          require: "./dist-cjs/submodules/sts/index.js"
        },
        "./signin": {
          types: "./dist-types/submodules/signin/index.d.ts",
          module: "./dist-es/submodules/signin/index.js",
          node: "./dist-cjs/submodules/signin/index.js",
          import: "./dist-es/submodules/signin/index.js",
          require: "./dist-cjs/submodules/signin/index.js"
        },
        "./cognito-identity": {
          types: "./dist-types/submodules/cognito-identity/index.d.ts",
          module: "./dist-es/submodules/cognito-identity/index.js",
          node: "./dist-cjs/submodules/cognito-identity/index.js",
          import: "./dist-es/submodules/cognito-identity/index.js",
          require: "./dist-cjs/submodules/cognito-identity/index.js"
        },
        "./sso": {
          types: "./dist-types/submodules/sso/index.d.ts",
          module: "./dist-es/submodules/sso/index.js",
          node: "./dist-cjs/submodules/sso/index.js",
          import: "./dist-es/submodules/sso/index.js",
          require: "./dist-cjs/submodules/sso/index.js"
        }
      }
    };
  }
});

// node_modules/@aws-sdk/util-user-agent-node/dist-es/getRuntimeUserAgentPair.js
import { versions } from "node:process";
var getRuntimeUserAgentPair;
var init_getRuntimeUserAgentPair = __esm({
  "node_modules/@aws-sdk/util-user-agent-node/dist-es/getRuntimeUserAgentPair.js"() {
    getRuntimeUserAgentPair = /* @__PURE__ */ __name(() => {
      const runtimesToCheck = ["deno", "bun", "llrt"];
      for (const runtime of runtimesToCheck) {
        if (versions[runtime]) {
          return [`md/${runtime}`, versions[runtime]];
        }
      }
      return ["md/nodejs", versions.node];
    }, "getRuntimeUserAgentPair");
  }
});

// node_modules/@aws-sdk/util-user-agent-node/dist-es/getNodeModulesParentDirs.js
import { normalize, sep as sep2 } from "node:path";
var getNodeModulesParentDirs;
var init_getNodeModulesParentDirs = __esm({
  "node_modules/@aws-sdk/util-user-agent-node/dist-es/getNodeModulesParentDirs.js"() {
    getNodeModulesParentDirs = /* @__PURE__ */ __name((dirname2) => {
      const cwd = process.cwd();
      if (!dirname2) {
        return [cwd];
      }
      const normalizedPath = normalize(dirname2);
      const parts = normalizedPath.split(sep2);
      const nodeModulesIndex = parts.indexOf("node_modules");
      const parentDir = nodeModulesIndex !== -1 ? parts.slice(0, nodeModulesIndex).join(sep2) : normalizedPath;
      if (cwd === parentDir) {
        return [cwd];
      }
      return [parentDir, cwd];
    }, "getNodeModulesParentDirs");
  }
});

// node_modules/@aws-sdk/util-user-agent-node/dist-es/getSanitizedTypeScriptVersion.js
var SEMVER_REGEX, getSanitizedTypeScriptVersion;
var init_getSanitizedTypeScriptVersion = __esm({
  "node_modules/@aws-sdk/util-user-agent-node/dist-es/getSanitizedTypeScriptVersion.js"() {
    SEMVER_REGEX = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+[0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*)?$/;
    getSanitizedTypeScriptVersion = /* @__PURE__ */ __name((version = "") => {
      const match = version.match(SEMVER_REGEX);
      if (!match) {
        return void 0;
      }
      const [major, minor, patch, prerelease] = [match[1], match[2], match[3], match[4]];
      return prerelease ? `${major}.${minor}.${patch}-${prerelease}` : `${major}.${minor}.${patch}`;
    }, "getSanitizedTypeScriptVersion");
  }
});

// node_modules/@aws-sdk/util-user-agent-node/dist-es/getSanitizedDevTypeScriptVersion.js
var ALLOWED_PREFIXES, ALLOWED_DIST_TAGS, getSanitizedDevTypeScriptVersion;
var init_getSanitizedDevTypeScriptVersion = __esm({
  "node_modules/@aws-sdk/util-user-agent-node/dist-es/getSanitizedDevTypeScriptVersion.js"() {
    init_getSanitizedTypeScriptVersion();
    ALLOWED_PREFIXES = ["^", "~", ">=", "<=", ">", "<"];
    ALLOWED_DIST_TAGS = ["latest", "beta", "dev", "rc", "insiders", "next"];
    getSanitizedDevTypeScriptVersion = /* @__PURE__ */ __name((version = "") => {
      if (ALLOWED_DIST_TAGS.includes(version)) {
        return version;
      }
      const prefix = ALLOWED_PREFIXES.find((p2) => version.startsWith(p2)) ?? "";
      const sanitizedTypeScriptVersion = getSanitizedTypeScriptVersion(version.slice(prefix.length));
      if (!sanitizedTypeScriptVersion) {
        return void 0;
      }
      return `${prefix}${sanitizedTypeScriptVersion}`;
    }, "getSanitizedDevTypeScriptVersion");
  }
});

// node_modules/@aws-sdk/util-user-agent-node/dist-es/getTypeScriptUserAgentPair.js
import { readFile as readFile3 } from "node:fs/promises";
import { join as join5 } from "node:path";
var tscVersion, TS_PACKAGE_JSON, getTypeScriptUserAgentPair;
var init_getTypeScriptUserAgentPair = __esm({
  "node_modules/@aws-sdk/util-user-agent-node/dist-es/getTypeScriptUserAgentPair.js"() {
    init_dist_es26();
    init_getNodeModulesParentDirs();
    init_getSanitizedDevTypeScriptVersion();
    init_getSanitizedTypeScriptVersion();
    TS_PACKAGE_JSON = join5("node_modules", "typescript", "package.json");
    getTypeScriptUserAgentPair = /* @__PURE__ */ __name(async () => {
      if (tscVersion === null) {
        return void 0;
      } else if (typeof tscVersion === "string") {
        return ["md/tsc", tscVersion];
      }
      let isTypeScriptDetectionDisabled = false;
      try {
        isTypeScriptDetectionDisabled = booleanSelector(process.env, "AWS_SDK_JS_TYPESCRIPT_DETECTION_DISABLED", SelectorType.ENV) || false;
      } catch {
      }
      if (isTypeScriptDetectionDisabled) {
        tscVersion = null;
        return void 0;
      }
      const dirname2 = typeof __dirname !== "undefined" ? __dirname : void 0;
      const nodeModulesParentDirs = getNodeModulesParentDirs(dirname2);
      let versionFromApp;
      for (const nodeModulesParentDir of nodeModulesParentDirs) {
        try {
          const appPackageJsonPath = join5(nodeModulesParentDir, "package.json");
          const packageJson = await readFile3(appPackageJsonPath, "utf-8");
          const { dependencies, devDependencies } = JSON.parse(packageJson);
          const version = devDependencies?.typescript ?? dependencies?.typescript;
          if (typeof version !== "string") {
            continue;
          }
          versionFromApp = version;
          break;
        } catch {
        }
      }
      if (!versionFromApp) {
        tscVersion = null;
        return void 0;
      }
      let versionFromNodeModules;
      for (const nodeModulesParentDir of nodeModulesParentDirs) {
        try {
          const tsPackageJsonPath = join5(nodeModulesParentDir, TS_PACKAGE_JSON);
          const packageJson = await readFile3(tsPackageJsonPath, "utf-8");
          const { version } = JSON.parse(packageJson);
          const sanitizedVersion2 = getSanitizedTypeScriptVersion(version);
          if (typeof sanitizedVersion2 !== "string") {
            continue;
          }
          versionFromNodeModules = sanitizedVersion2;
          break;
        } catch {
        }
      }
      if (versionFromNodeModules) {
        tscVersion = versionFromNodeModules;
        return ["md/tsc", tscVersion];
      }
      const sanitizedVersion = getSanitizedDevTypeScriptVersion(versionFromApp);
      if (typeof sanitizedVersion !== "string") {
        tscVersion = null;
        return void 0;
      }
      tscVersion = `dev_${sanitizedVersion}`;
      return ["md/tsc", tscVersion];
    }, "getTypeScriptUserAgentPair");
  }
});

// node_modules/@aws-sdk/util-user-agent-node/dist-es/crt-availability.js
var crtAvailability;
var init_crt_availability = __esm({
  "node_modules/@aws-sdk/util-user-agent-node/dist-es/crt-availability.js"() {
    crtAvailability = {
      isCrtAvailable: false
    };
  }
});

// node_modules/@aws-sdk/util-user-agent-node/dist-es/is-crt-available.js
var isCrtAvailable;
var init_is_crt_available = __esm({
  "node_modules/@aws-sdk/util-user-agent-node/dist-es/is-crt-available.js"() {
    init_crt_availability();
    isCrtAvailable = /* @__PURE__ */ __name(() => {
      if (crtAvailability.isCrtAvailable) {
        return ["md/crt-avail"];
      }
      return null;
    }, "isCrtAvailable");
  }
});

// node_modules/@aws-sdk/util-user-agent-node/dist-es/defaultUserAgent.js
import { platform, release } from "node:os";
import { env } from "node:process";
var createDefaultUserAgentProvider;
var init_defaultUserAgent = __esm({
  "node_modules/@aws-sdk/util-user-agent-node/dist-es/defaultUserAgent.js"() {
    init_getRuntimeUserAgentPair();
    init_getTypeScriptUserAgentPair();
    init_is_crt_available();
    createDefaultUserAgentProvider = /* @__PURE__ */ __name(({ serviceId, clientVersion }) => {
      const runtimeUserAgentPair = getRuntimeUserAgentPair();
      return async (config) => {
        const sections = [
          ["aws-sdk-js", clientVersion],
          ["ua", "2.1"],
          [`os/${platform()}`, release()],
          ["lang/js"],
          runtimeUserAgentPair
        ];
        const typescriptUserAgentPair = await getTypeScriptUserAgentPair();
        if (typescriptUserAgentPair) {
          sections.push(typescriptUserAgentPair);
        }
        const crtAvailable = isCrtAvailable();
        if (crtAvailable) {
          sections.push(crtAvailable);
        }
        if (serviceId) {
          sections.push([`api/${serviceId}`, clientVersion]);
        }
        if (env.AWS_EXECUTION_ENV) {
          sections.push([`exec-env/${env.AWS_EXECUTION_ENV}`]);
        }
        const appId = await config?.userAgentAppId?.();
        const resolvedUserAgent = appId ? [...sections, [`app/${appId}`]] : [...sections];
        return resolvedUserAgent;
      };
    }, "createDefaultUserAgentProvider");
  }
});

// node_modules/@aws-sdk/util-user-agent-node/dist-es/nodeAppIdConfigOptions.js
var UA_APP_ID_ENV_NAME, UA_APP_ID_INI_NAME, UA_APP_ID_INI_NAME_DEPRECATED, NODE_APP_ID_CONFIG_OPTIONS;
var init_nodeAppIdConfigOptions = __esm({
  "node_modules/@aws-sdk/util-user-agent-node/dist-es/nodeAppIdConfigOptions.js"() {
    init_dist_es25();
    UA_APP_ID_ENV_NAME = "AWS_SDK_UA_APP_ID";
    UA_APP_ID_INI_NAME = "sdk_ua_app_id";
    UA_APP_ID_INI_NAME_DEPRECATED = "sdk-ua-app-id";
    NODE_APP_ID_CONFIG_OPTIONS = {
      environmentVariableSelector: /* @__PURE__ */ __name((env2) => env2[UA_APP_ID_ENV_NAME], "environmentVariableSelector"),
      configFileSelector: /* @__PURE__ */ __name((profile) => profile[UA_APP_ID_INI_NAME] ?? profile[UA_APP_ID_INI_NAME_DEPRECATED], "configFileSelector"),
      default: DEFAULT_UA_APP_ID
    };
  }
});

// node_modules/@aws-sdk/util-user-agent-node/dist-es/index.js
var init_dist_es44 = __esm({
  "node_modules/@aws-sdk/util-user-agent-node/dist-es/index.js"() {
    init_defaultUserAgent();
    init_nodeAppIdConfigOptions();
  }
});

// node_modules/@smithy/hash-node/dist-es/index.js
import { Buffer as Buffer4 } from "buffer";
import { createHash as createHash2, createHmac } from "crypto";
function castSourceData(toCast, encoding) {
  if (Buffer4.isBuffer(toCast)) {
    return toCast;
  }
  if (typeof toCast === "string") {
    return fromString(toCast, encoding);
  }
  if (ArrayBuffer.isView(toCast)) {
    return fromArrayBuffer(toCast.buffer, toCast.byteOffset, toCast.byteLength);
  }
  return fromArrayBuffer(toCast);
}
var Hash;
var init_dist_es45 = __esm({
  "node_modules/@smithy/hash-node/dist-es/index.js"() {
    init_dist_es8();
    init_dist_es9();
    Hash = class {
      static {
        __name(this, "Hash");
      }
      algorithmIdentifier;
      secret;
      hash;
      constructor(algorithmIdentifier, secret) {
        this.algorithmIdentifier = algorithmIdentifier;
        this.secret = secret;
        this.reset();
      }
      update(toHash, encoding) {
        this.hash.update(toUint8Array(castSourceData(toHash, encoding)));
      }
      digest() {
        return Promise.resolve(this.hash.digest());
      }
      reset() {
        this.hash = this.secret ? createHmac(this.algorithmIdentifier, castSourceData(this.secret)) : createHash2(this.algorithmIdentifier);
      }
    };
    __name(castSourceData, "castSourceData");
  }
});

// node_modules/@smithy/util-body-length-node/dist-es/calculateBodyLength.js
import { fstatSync, lstatSync, ReadStream } from "node:fs";
var calculateBodyLength;
var init_calculateBodyLength = __esm({
  "node_modules/@smithy/util-body-length-node/dist-es/calculateBodyLength.js"() {
    calculateBodyLength = /* @__PURE__ */ __name((body) => {
      if (!body) {
        return 0;
      }
      if (typeof body === "string") {
        return Buffer.byteLength(body);
      } else if (typeof body.byteLength === "number") {
        return body.byteLength;
      } else if (typeof body.size === "number") {
        return body.size;
      } else if (typeof body.start === "number" && typeof body.end === "number") {
        return body.end + 1 - body.start;
      } else if (body instanceof ReadStream) {
        if (body.path != null) {
          return lstatSync(body.path).size;
        } else if (typeof body.fd === "number") {
          return fstatSync(body.fd).size;
        }
      }
      throw new Error(`Body Length computation failed for ${body}`);
    }, "calculateBodyLength");
  }
});

// node_modules/@smithy/util-body-length-node/dist-es/index.js
var init_dist_es46 = __esm({
  "node_modules/@smithy/util-body-length-node/dist-es/index.js"() {
    init_calculateBodyLength();
  }
});

// node_modules/@smithy/util-defaults-mode-node/dist-es/constants.js
var AWS_EXECUTION_ENV, AWS_REGION_ENV, AWS_DEFAULT_REGION_ENV, ENV_IMDS_DISABLED2, DEFAULTS_MODE_OPTIONS, IMDS_REGION_PATH;
var init_constants10 = __esm({
  "node_modules/@smithy/util-defaults-mode-node/dist-es/constants.js"() {
    AWS_EXECUTION_ENV = "AWS_EXECUTION_ENV";
    AWS_REGION_ENV = "AWS_REGION";
    AWS_DEFAULT_REGION_ENV = "AWS_DEFAULT_REGION";
    ENV_IMDS_DISABLED2 = "AWS_EC2_METADATA_DISABLED";
    DEFAULTS_MODE_OPTIONS = ["in-region", "cross-region", "mobile", "standard", "legacy"];
    IMDS_REGION_PATH = "/latest/meta-data/placement/region";
  }
});

// node_modules/@smithy/util-defaults-mode-node/dist-es/defaultsModeConfig.js
var AWS_DEFAULTS_MODE_ENV, AWS_DEFAULTS_MODE_CONFIG, NODE_DEFAULTS_MODE_CONFIG_OPTIONS;
var init_defaultsModeConfig = __esm({
  "node_modules/@smithy/util-defaults-mode-node/dist-es/defaultsModeConfig.js"() {
    AWS_DEFAULTS_MODE_ENV = "AWS_DEFAULTS_MODE";
    AWS_DEFAULTS_MODE_CONFIG = "defaults_mode";
    NODE_DEFAULTS_MODE_CONFIG_OPTIONS = {
      environmentVariableSelector: /* @__PURE__ */ __name((env2) => {
        return env2[AWS_DEFAULTS_MODE_ENV];
      }, "environmentVariableSelector"),
      configFileSelector: /* @__PURE__ */ __name((profile) => {
        return profile[AWS_DEFAULTS_MODE_CONFIG];
      }, "configFileSelector"),
      default: "legacy"
    };
  }
});

// node_modules/@smithy/util-defaults-mode-node/dist-es/resolveDefaultsModeConfig.js
var resolveDefaultsModeConfig, resolveNodeDefaultsModeAuto, inferPhysicalRegion;
var init_resolveDefaultsModeConfig = __esm({
  "node_modules/@smithy/util-defaults-mode-node/dist-es/resolveDefaultsModeConfig.js"() {
    init_dist_es27();
    init_dist_es31();
    init_dist_es29();
    init_constants10();
    init_defaultsModeConfig();
    resolveDefaultsModeConfig = /* @__PURE__ */ __name(({ region = loadConfig(NODE_REGION_CONFIG_OPTIONS), defaultsMode = loadConfig(NODE_DEFAULTS_MODE_CONFIG_OPTIONS) } = {}) => memoize(async () => {
      const mode = typeof defaultsMode === "function" ? await defaultsMode() : defaultsMode;
      switch (mode?.toLowerCase()) {
        case "auto":
          return resolveNodeDefaultsModeAuto(region);
        case "in-region":
        case "cross-region":
        case "mobile":
        case "standard":
        case "legacy":
          return Promise.resolve(mode?.toLocaleLowerCase());
        case void 0:
          return Promise.resolve("legacy");
        default:
          throw new Error(`Invalid parameter for "defaultsMode", expect ${DEFAULTS_MODE_OPTIONS.join(", ")}, got ${mode}`);
      }
    }), "resolveDefaultsModeConfig");
    resolveNodeDefaultsModeAuto = /* @__PURE__ */ __name(async (clientRegion) => {
      if (clientRegion) {
        const resolvedRegion = typeof clientRegion === "function" ? await clientRegion() : clientRegion;
        const inferredRegion = await inferPhysicalRegion();
        if (!inferredRegion) {
          return "standard";
        }
        if (resolvedRegion === inferredRegion) {
          return "in-region";
        } else {
          return "cross-region";
        }
      }
      return "standard";
    }, "resolveNodeDefaultsModeAuto");
    inferPhysicalRegion = /* @__PURE__ */ __name(async () => {
      if (process.env[AWS_EXECUTION_ENV] && (process.env[AWS_REGION_ENV] || process.env[AWS_DEFAULT_REGION_ENV])) {
        return process.env[AWS_REGION_ENV] ?? process.env[AWS_DEFAULT_REGION_ENV];
      }
      if (!process.env[ENV_IMDS_DISABLED2]) {
        try {
          const { getInstanceMetadataEndpoint: getInstanceMetadataEndpoint2, httpRequest: httpRequest2 } = await Promise.resolve().then(() => (init_dist_es42(), dist_es_exports2));
          const endpoint = await getInstanceMetadataEndpoint2();
          return (await httpRequest2({ ...endpoint, path: IMDS_REGION_PATH })).toString();
        } catch (e6) {
        }
      }
    }, "inferPhysicalRegion");
  }
});

// node_modules/@smithy/util-defaults-mode-node/dist-es/index.js
var init_dist_es47 = __esm({
  "node_modules/@smithy/util-defaults-mode-node/dist-es/index.js"() {
    init_resolveDefaultsModeConfig();
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/endpoint/bdd.js
var k2, a2, b2, c2, d2, e2, f2, g2, h2, i2, j2, _data2, root2, r2, nodes2, bdd2;
var init_bdd = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/endpoint/bdd.js"() {
    init_dist_es21();
    k2 = "ref";
    a2 = -1;
    b2 = true;
    c2 = "isSet";
    d2 = "PartitionResult";
    e2 = "booleanEquals";
    f2 = "getAttr";
    g2 = { [k2]: "Endpoint" };
    h2 = { [k2]: d2 };
    i2 = {};
    j2 = [{ [k2]: "Region" }];
    _data2 = {
      conditions: [
        [c2, [g2]],
        [c2, j2],
        ["aws.partition", j2, d2],
        [e2, [{ [k2]: "UseFIPS" }, b2]],
        [e2, [{ [k2]: "UseDualStack" }, b2]],
        [e2, [{ fn: f2, argv: [h2, "supportsDualStack"] }, b2]],
        [e2, [{ fn: f2, argv: [h2, "supportsFIPS"] }, b2]],
        ["stringEquals", [{ fn: f2, argv: [h2, "name"] }, "aws-us-gov"]]
      ],
      results: [
        [a2],
        [a2, "Invalid Configuration: FIPS and custom endpoint are not supported"],
        [a2, "Invalid Configuration: Dualstack and custom endpoint are not supported"],
        [g2, i2],
        ["https://oidc-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", i2],
        [a2, "FIPS and DualStack are enabled, but this partition does not support one or both"],
        ["https://oidc.{Region}.amazonaws.com", i2],
        ["https://oidc-fips.{Region}.{PartitionResult#dnsSuffix}", i2],
        [a2, "FIPS is enabled but this partition does not support FIPS"],
        ["https://oidc.{Region}.{PartitionResult#dualStackDnsSuffix}", i2],
        [a2, "DualStack is enabled but this partition does not support DualStack"],
        ["https://oidc.{Region}.{PartitionResult#dnsSuffix}", i2],
        [a2, "Invalid Configuration: Missing Region"]
      ]
    };
    root2 = 2;
    r2 = 1e8;
    nodes2 = new Int32Array([
      -1,
      1,
      -1,
      0,
      13,
      3,
      1,
      4,
      r2 + 12,
      2,
      5,
      r2 + 12,
      3,
      8,
      6,
      4,
      7,
      r2 + 11,
      5,
      r2 + 9,
      r2 + 10,
      4,
      11,
      9,
      6,
      10,
      r2 + 8,
      7,
      r2 + 6,
      r2 + 7,
      5,
      12,
      r2 + 5,
      6,
      r2 + 4,
      r2 + 5,
      3,
      r2 + 1,
      14,
      4,
      r2 + 2,
      r2 + 3
    ]);
    bdd2 = BinaryDecisionDiagram.from(nodes2, root2, _data2.conditions, _data2.results);
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/endpoint/endpointResolver.js
var cache2, defaultEndpointResolver2;
var init_endpointResolver = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/endpoint/endpointResolver.js"() {
    init_dist_es22();
    init_dist_es21();
    init_bdd();
    cache2 = new EndpointCache({
      size: 50,
      params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"]
    });
    defaultEndpointResolver2 = /* @__PURE__ */ __name((endpointParams, context = {}) => {
      return cache2.get(endpointParams, () => decideEndpoint(bdd2, {
        endpointParams,
        logger: context.logger
      }));
    }, "defaultEndpointResolver");
    customEndpointFunctions.aws = awsEndpointFunctions;
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/models/SSOOIDCServiceException.js
var SSOOIDCServiceException;
var init_SSOOIDCServiceException = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/models/SSOOIDCServiceException.js"() {
    init_dist_es35();
    SSOOIDCServiceException = class _SSOOIDCServiceException extends ServiceException {
      static {
        __name(this, "SSOOIDCServiceException");
      }
      constructor(options) {
        super(options);
        Object.setPrototypeOf(this, _SSOOIDCServiceException.prototype);
      }
    };
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/models/errors.js
var AccessDeniedException, AuthorizationPendingException, ExpiredTokenException, InternalServerException, InvalidClientException, InvalidGrantException, InvalidRequestException, InvalidScopeException, SlowDownException, UnauthorizedClientException, UnsupportedGrantTypeException;
var init_errors = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/models/errors.js"() {
    init_SSOOIDCServiceException();
    AccessDeniedException = class _AccessDeniedException extends SSOOIDCServiceException {
      static {
        __name(this, "AccessDeniedException");
      }
      name = "AccessDeniedException";
      $fault = "client";
      error;
      reason;
      error_description;
      constructor(opts) {
        super({
          name: "AccessDeniedException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _AccessDeniedException.prototype);
        this.error = opts.error;
        this.reason = opts.reason;
        this.error_description = opts.error_description;
      }
    };
    AuthorizationPendingException = class _AuthorizationPendingException extends SSOOIDCServiceException {
      static {
        __name(this, "AuthorizationPendingException");
      }
      name = "AuthorizationPendingException";
      $fault = "client";
      error;
      error_description;
      constructor(opts) {
        super({
          name: "AuthorizationPendingException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _AuthorizationPendingException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    ExpiredTokenException = class _ExpiredTokenException extends SSOOIDCServiceException {
      static {
        __name(this, "ExpiredTokenException");
      }
      name = "ExpiredTokenException";
      $fault = "client";
      error;
      error_description;
      constructor(opts) {
        super({
          name: "ExpiredTokenException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _ExpiredTokenException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    InternalServerException = class _InternalServerException extends SSOOIDCServiceException {
      static {
        __name(this, "InternalServerException");
      }
      name = "InternalServerException";
      $fault = "server";
      error;
      error_description;
      constructor(opts) {
        super({
          name: "InternalServerException",
          $fault: "server",
          ...opts
        });
        Object.setPrototypeOf(this, _InternalServerException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    InvalidClientException = class _InvalidClientException extends SSOOIDCServiceException {
      static {
        __name(this, "InvalidClientException");
      }
      name = "InvalidClientException";
      $fault = "client";
      error;
      error_description;
      constructor(opts) {
        super({
          name: "InvalidClientException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _InvalidClientException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    InvalidGrantException = class _InvalidGrantException extends SSOOIDCServiceException {
      static {
        __name(this, "InvalidGrantException");
      }
      name = "InvalidGrantException";
      $fault = "client";
      error;
      error_description;
      constructor(opts) {
        super({
          name: "InvalidGrantException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _InvalidGrantException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    InvalidRequestException = class _InvalidRequestException extends SSOOIDCServiceException {
      static {
        __name(this, "InvalidRequestException");
      }
      name = "InvalidRequestException";
      $fault = "client";
      error;
      reason;
      error_description;
      constructor(opts) {
        super({
          name: "InvalidRequestException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _InvalidRequestException.prototype);
        this.error = opts.error;
        this.reason = opts.reason;
        this.error_description = opts.error_description;
      }
    };
    InvalidScopeException = class _InvalidScopeException extends SSOOIDCServiceException {
      static {
        __name(this, "InvalidScopeException");
      }
      name = "InvalidScopeException";
      $fault = "client";
      error;
      error_description;
      constructor(opts) {
        super({
          name: "InvalidScopeException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _InvalidScopeException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    SlowDownException = class _SlowDownException extends SSOOIDCServiceException {
      static {
        __name(this, "SlowDownException");
      }
      name = "SlowDownException";
      $fault = "client";
      error;
      error_description;
      constructor(opts) {
        super({
          name: "SlowDownException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _SlowDownException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    UnauthorizedClientException = class _UnauthorizedClientException extends SSOOIDCServiceException {
      static {
        __name(this, "UnauthorizedClientException");
      }
      name = "UnauthorizedClientException";
      $fault = "client";
      error;
      error_description;
      constructor(opts) {
        super({
          name: "UnauthorizedClientException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _UnauthorizedClientException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    UnsupportedGrantTypeException = class _UnsupportedGrantTypeException extends SSOOIDCServiceException {
      static {
        __name(this, "UnsupportedGrantTypeException");
      }
      name = "UnsupportedGrantTypeException";
      $fault = "client";
      error;
      error_description;
      constructor(opts) {
        super({
          name: "UnsupportedGrantTypeException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _UnsupportedGrantTypeException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/schemas/schemas_0.js
var _ADE, _APE, _AT, _CS, _CT, _CTR, _CTRr, _CV, _ETE, _ICE, _IGE, _IRE, _ISE, _ISEn, _IT, _RT, _SDE, _UCE, _UGTE, _aT, _c, _cI, _cS, _cV, _co, _dC, _e, _eI, _ed, _gT, _h, _hE, _iT, _r, _rT, _rU, _s, _sc, _se, _tT, n0, _s_registry, SSOOIDCServiceException$, n0_registry, AccessDeniedException$, AuthorizationPendingException$, ExpiredTokenException$, InternalServerException$, InvalidClientException$, InvalidGrantException$, InvalidRequestException$, InvalidScopeException$, SlowDownException$, UnauthorizedClientException$, UnsupportedGrantTypeException$, errorTypeRegistries, AccessToken, ClientSecret, CodeVerifier, IdToken, RefreshToken, CreateTokenRequest$, CreateTokenResponse$, Scopes, CreateToken$;
var init_schemas_0 = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/schemas/schemas_0.js"() {
    init_schema2();
    init_errors();
    init_SSOOIDCServiceException();
    _ADE = "AccessDeniedException";
    _APE = "AuthorizationPendingException";
    _AT = "AccessToken";
    _CS = "ClientSecret";
    _CT = "CreateToken";
    _CTR = "CreateTokenRequest";
    _CTRr = "CreateTokenResponse";
    _CV = "CodeVerifier";
    _ETE = "ExpiredTokenException";
    _ICE = "InvalidClientException";
    _IGE = "InvalidGrantException";
    _IRE = "InvalidRequestException";
    _ISE = "InternalServerException";
    _ISEn = "InvalidScopeException";
    _IT = "IdToken";
    _RT = "RefreshToken";
    _SDE = "SlowDownException";
    _UCE = "UnauthorizedClientException";
    _UGTE = "UnsupportedGrantTypeException";
    _aT = "accessToken";
    _c = "client";
    _cI = "clientId";
    _cS = "clientSecret";
    _cV = "codeVerifier";
    _co = "code";
    _dC = "deviceCode";
    _e = "error";
    _eI = "expiresIn";
    _ed = "error_description";
    _gT = "grantType";
    _h = "http";
    _hE = "httpError";
    _iT = "idToken";
    _r = "reason";
    _rT = "refreshToken";
    _rU = "redirectUri";
    _s = "smithy.ts.sdk.synthetic.com.amazonaws.ssooidc";
    _sc = "scope";
    _se = "server";
    _tT = "tokenType";
    n0 = "com.amazonaws.ssooidc";
    _s_registry = TypeRegistry.for(_s);
    SSOOIDCServiceException$ = [-3, _s, "SSOOIDCServiceException", 0, [], []];
    _s_registry.registerError(SSOOIDCServiceException$, SSOOIDCServiceException);
    n0_registry = TypeRegistry.for(n0);
    AccessDeniedException$ = [
      -3,
      n0,
      _ADE,
      { [_e]: _c, [_hE]: 400 },
      [_e, _r, _ed],
      [0, 0, 0]
    ];
    n0_registry.registerError(AccessDeniedException$, AccessDeniedException);
    AuthorizationPendingException$ = [
      -3,
      n0,
      _APE,
      { [_e]: _c, [_hE]: 400 },
      [_e, _ed],
      [0, 0]
    ];
    n0_registry.registerError(AuthorizationPendingException$, AuthorizationPendingException);
    ExpiredTokenException$ = [-3, n0, _ETE, { [_e]: _c, [_hE]: 400 }, [_e, _ed], [0, 0]];
    n0_registry.registerError(ExpiredTokenException$, ExpiredTokenException);
    InternalServerException$ = [-3, n0, _ISE, { [_e]: _se, [_hE]: 500 }, [_e, _ed], [0, 0]];
    n0_registry.registerError(InternalServerException$, InternalServerException);
    InvalidClientException$ = [-3, n0, _ICE, { [_e]: _c, [_hE]: 401 }, [_e, _ed], [0, 0]];
    n0_registry.registerError(InvalidClientException$, InvalidClientException);
    InvalidGrantException$ = [-3, n0, _IGE, { [_e]: _c, [_hE]: 400 }, [_e, _ed], [0, 0]];
    n0_registry.registerError(InvalidGrantException$, InvalidGrantException);
    InvalidRequestException$ = [
      -3,
      n0,
      _IRE,
      { [_e]: _c, [_hE]: 400 },
      [_e, _r, _ed],
      [0, 0, 0]
    ];
    n0_registry.registerError(InvalidRequestException$, InvalidRequestException);
    InvalidScopeException$ = [-3, n0, _ISEn, { [_e]: _c, [_hE]: 400 }, [_e, _ed], [0, 0]];
    n0_registry.registerError(InvalidScopeException$, InvalidScopeException);
    SlowDownException$ = [-3, n0, _SDE, { [_e]: _c, [_hE]: 400 }, [_e, _ed], [0, 0]];
    n0_registry.registerError(SlowDownException$, SlowDownException);
    UnauthorizedClientException$ = [
      -3,
      n0,
      _UCE,
      { [_e]: _c, [_hE]: 400 },
      [_e, _ed],
      [0, 0]
    ];
    n0_registry.registerError(UnauthorizedClientException$, UnauthorizedClientException);
    UnsupportedGrantTypeException$ = [
      -3,
      n0,
      _UGTE,
      { [_e]: _c, [_hE]: 400 },
      [_e, _ed],
      [0, 0]
    ];
    n0_registry.registerError(UnsupportedGrantTypeException$, UnsupportedGrantTypeException);
    errorTypeRegistries = [_s_registry, n0_registry];
    AccessToken = [0, n0, _AT, 8, 0];
    ClientSecret = [0, n0, _CS, 8, 0];
    CodeVerifier = [0, n0, _CV, 8, 0];
    IdToken = [0, n0, _IT, 8, 0];
    RefreshToken = [0, n0, _RT, 8, 0];
    CreateTokenRequest$ = [
      3,
      n0,
      _CTR,
      0,
      [_cI, _cS, _gT, _dC, _co, _rT, _sc, _rU, _cV],
      [0, [() => ClientSecret, 0], 0, 0, 0, [() => RefreshToken, 0], 64 | 0, 0, [() => CodeVerifier, 0]],
      3
    ];
    CreateTokenResponse$ = [
      3,
      n0,
      _CTRr,
      0,
      [_aT, _tT, _eI, _rT, _iT],
      [[() => AccessToken, 0], 0, 1, [() => RefreshToken, 0], [() => IdToken, 0]]
    ];
    Scopes = 64 | 0;
    CreateToken$ = [
      9,
      n0,
      _CT,
      { [_h]: ["POST", "/token", 200] },
      () => CreateTokenRequest$,
      () => CreateTokenResponse$
    ];
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/runtimeConfig.shared.js
var getRuntimeConfig;
var init_runtimeConfig_shared = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/runtimeConfig.shared.js"() {
    init_httpAuthSchemes2();
    init_protocols2();
    init_dist_es20();
    init_dist_es35();
    init_dist_es18();
    init_dist_es10();
    init_dist_es9();
    init_httpAuthSchemeProvider();
    init_endpointResolver();
    init_schemas_0();
    getRuntimeConfig = /* @__PURE__ */ __name((config) => {
      return {
        apiVersion: "2019-06-10",
        base64Decoder: config?.base64Decoder ?? fromBase64,
        base64Encoder: config?.base64Encoder ?? toBase64,
        disableHostPrefix: config?.disableHostPrefix ?? false,
        endpointProvider: config?.endpointProvider ?? defaultEndpointResolver2,
        extensions: config?.extensions ?? [],
        httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? defaultSSOOIDCHttpAuthSchemeProvider,
        httpAuthSchemes: config?.httpAuthSchemes ?? [
          {
            schemeId: "aws.auth#sigv4",
            identityProvider: /* @__PURE__ */ __name((ipc) => ipc.getIdentityProvider("aws.auth#sigv4"), "identityProvider"),
            signer: new AwsSdkSigV4Signer()
          },
          {
            schemeId: "smithy.api#noAuth",
            identityProvider: /* @__PURE__ */ __name((ipc) => ipc.getIdentityProvider("smithy.api#noAuth") || (async () => ({})), "identityProvider"),
            signer: new NoAuthSigner()
          }
        ],
        logger: config?.logger ?? new NoOpLogger(),
        protocol: config?.protocol ?? AwsRestJsonProtocol,
        protocolSettings: config?.protocolSettings ?? {
          defaultNamespace: "com.amazonaws.ssooidc",
          errorTypeRegistries,
          version: "2019-06-10",
          serviceTarget: "AWSSSOOIDCService"
        },
        serviceId: config?.serviceId ?? "SSO OIDC",
        urlParser: config?.urlParser ?? parseUrl,
        utf8Decoder: config?.utf8Decoder ?? fromUtf8,
        utf8Encoder: config?.utf8Encoder ?? toUtf8
      };
    }, "getRuntimeConfig");
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/runtimeConfig.js
var getRuntimeConfig2;
var init_runtimeConfig = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/runtimeConfig.js"() {
    init_package();
    init_client2();
    init_httpAuthSchemes2();
    init_dist_es44();
    init_dist_es27();
    init_dist_es45();
    init_dist_es36();
    init_dist_es31();
    init_dist_es13();
    init_dist_es35();
    init_dist_es46();
    init_dist_es47();
    init_dist_es24();
    init_runtimeConfig_shared();
    getRuntimeConfig2 = /* @__PURE__ */ __name((config) => {
      emitWarningIfUnsupportedVersion2(process.version);
      const defaultsMode = resolveDefaultsModeConfig(config);
      const defaultConfigProvider = /* @__PURE__ */ __name(() => defaultsMode().then(loadConfigsForDefaultMode), "defaultConfigProvider");
      const clientSharedValues = getRuntimeConfig(config);
      emitWarningIfUnsupportedVersion(process.version);
      const loaderConfig = {
        profile: config?.profile,
        logger: clientSharedValues.logger
      };
      return {
        ...clientSharedValues,
        ...config,
        runtime: "node",
        defaultsMode,
        authSchemePreference: config?.authSchemePreference ?? loadConfig(NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, loaderConfig),
        bodyLengthChecker: config?.bodyLengthChecker ?? calculateBodyLength,
        defaultUserAgentProvider: config?.defaultUserAgentProvider ?? createDefaultUserAgentProvider({ serviceId: clientSharedValues.serviceId, clientVersion: package_default2.version }),
        maxAttempts: config?.maxAttempts ?? loadConfig(NODE_MAX_ATTEMPT_CONFIG_OPTIONS, config),
        region: config?.region ?? loadConfig(NODE_REGION_CONFIG_OPTIONS, { ...NODE_REGION_CONFIG_FILE_OPTIONS, ...loaderConfig }),
        requestHandler: NodeHttpHandler.create(config?.requestHandler ?? defaultConfigProvider),
        retryMode: config?.retryMode ?? loadConfig({
          ...NODE_RETRY_MODE_CONFIG_OPTIONS,
          default: /* @__PURE__ */ __name(async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE, "default")
        }, config),
        sha256: config?.sha256 ?? Hash.bind(null, "sha256"),
        streamCollector: config?.streamCollector ?? streamCollector,
        useDualstackEndpoint: config?.useDualstackEndpoint ?? loadConfig(NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, loaderConfig),
        useFipsEndpoint: config?.useFipsEndpoint ?? loadConfig(NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, loaderConfig),
        userAgentAppId: config?.userAgentAppId ?? loadConfig(NODE_APP_ID_CONFIG_OPTIONS, loaderConfig)
      };
    }, "getRuntimeConfig");
  }
});

// node_modules/@aws-sdk/region-config-resolver/dist-es/extensions/index.js
var getAwsRegionExtensionConfiguration, resolveAwsRegionExtensionConfiguration;
var init_extensions4 = __esm({
  "node_modules/@aws-sdk/region-config-resolver/dist-es/extensions/index.js"() {
    getAwsRegionExtensionConfiguration = /* @__PURE__ */ __name((runtimeConfig) => {
      return {
        setRegion(region) {
          runtimeConfig.region = region;
        },
        region() {
          return runtimeConfig.region;
        }
      };
    }, "getAwsRegionExtensionConfiguration");
    resolveAwsRegionExtensionConfiguration = /* @__PURE__ */ __name((awsRegionExtensionConfiguration) => {
      return {
        region: awsRegionExtensionConfiguration.region()
      };
    }, "resolveAwsRegionExtensionConfiguration");
  }
});

// node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/awsRegionConfig.js
var init_awsRegionConfig = __esm({
  "node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/awsRegionConfig.js"() {
  }
});

// node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/stsRegionDefaultResolver.js
function stsRegionDefaultResolver(loaderConfig = {}) {
  return loadConfig({
    ...NODE_REGION_CONFIG_OPTIONS,
    async default() {
      if (!warning.silence) {
        console.warn("@aws-sdk - WARN - default STS region of us-east-1 used. See @aws-sdk/credential-providers README and set a region explicitly.");
      }
      return "us-east-1";
    }
  }, { ...NODE_REGION_CONFIG_FILE_OPTIONS, ...loaderConfig });
}
var warning;
var init_stsRegionDefaultResolver = __esm({
  "node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/stsRegionDefaultResolver.js"() {
    init_dist_es27();
    init_dist_es31();
    __name(stsRegionDefaultResolver, "stsRegionDefaultResolver");
    warning = {
      silence: false
    };
  }
});

// node_modules/@aws-sdk/region-config-resolver/dist-es/index.js
var init_dist_es48 = __esm({
  "node_modules/@aws-sdk/region-config-resolver/dist-es/index.js"() {
    init_extensions4();
    init_awsRegionConfig();
    init_stsRegionDefaultResolver();
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/auth/httpAuthExtensionConfiguration.js
var getHttpAuthExtensionConfiguration, resolveHttpAuthRuntimeConfig;
var init_httpAuthExtensionConfiguration = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/auth/httpAuthExtensionConfiguration.js"() {
    getHttpAuthExtensionConfiguration = /* @__PURE__ */ __name((runtimeConfig) => {
      const _httpAuthSchemes = runtimeConfig.httpAuthSchemes;
      let _httpAuthSchemeProvider = runtimeConfig.httpAuthSchemeProvider;
      let _credentials = runtimeConfig.credentials;
      return {
        setHttpAuthScheme(httpAuthScheme) {
          const index = _httpAuthSchemes.findIndex((scheme) => scheme.schemeId === httpAuthScheme.schemeId);
          if (index === -1) {
            _httpAuthSchemes.push(httpAuthScheme);
          } else {
            _httpAuthSchemes.splice(index, 1, httpAuthScheme);
          }
        },
        httpAuthSchemes() {
          return _httpAuthSchemes;
        },
        setHttpAuthSchemeProvider(httpAuthSchemeProvider) {
          _httpAuthSchemeProvider = httpAuthSchemeProvider;
        },
        httpAuthSchemeProvider() {
          return _httpAuthSchemeProvider;
        },
        setCredentials(credentials) {
          _credentials = credentials;
        },
        credentials() {
          return _credentials;
        }
      };
    }, "getHttpAuthExtensionConfiguration");
    resolveHttpAuthRuntimeConfig = /* @__PURE__ */ __name((config) => {
      return {
        httpAuthSchemes: config.httpAuthSchemes(),
        httpAuthSchemeProvider: config.httpAuthSchemeProvider(),
        credentials: config.credentials()
      };
    }, "resolveHttpAuthRuntimeConfig");
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/runtimeExtensions.js
var resolveRuntimeExtensions;
var init_runtimeExtensions = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/runtimeExtensions.js"() {
    init_dist_es48();
    init_dist_es2();
    init_dist_es35();
    init_httpAuthExtensionConfiguration();
    resolveRuntimeExtensions = /* @__PURE__ */ __name((runtimeConfig, extensions) => {
      const extensionConfiguration = Object.assign(getAwsRegionExtensionConfiguration(runtimeConfig), getDefaultExtensionConfiguration(runtimeConfig), getHttpHandlerExtensionConfiguration(runtimeConfig), getHttpAuthExtensionConfiguration(runtimeConfig));
      extensions.forEach((extension) => extension.configure(extensionConfiguration));
      return Object.assign(runtimeConfig, resolveAwsRegionExtensionConfiguration(extensionConfiguration), resolveDefaultRuntimeConfig(extensionConfiguration), resolveHttpHandlerRuntimeConfig(extensionConfiguration), resolveHttpAuthRuntimeConfig(extensionConfiguration));
    }, "resolveRuntimeExtensions");
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/SSOOIDCClient.js
var SSOOIDCClient;
var init_SSOOIDCClient = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/SSOOIDCClient.js"() {
    init_dist_es3();
    init_dist_es4();
    init_dist_es5();
    init_dist_es25();
    init_dist_es27();
    init_dist_es20();
    init_schema2();
    init_dist_es28();
    init_dist_es33();
    init_dist_es36();
    init_dist_es35();
    init_httpAuthSchemeProvider();
    init_EndpointParameters();
    init_runtimeConfig();
    init_runtimeExtensions();
    SSOOIDCClient = class extends Client {
      static {
        __name(this, "SSOOIDCClient");
      }
      config;
      constructor(...[configuration]) {
        const _config_0 = getRuntimeConfig2(configuration || {});
        super(_config_0);
        this.initConfig = _config_0;
        const _config_1 = resolveClientEndpointParameters2(_config_0);
        const _config_2 = resolveUserAgentConfig(_config_1);
        const _config_3 = resolveRetryConfig(_config_2);
        const _config_4 = resolveRegionConfig(_config_3);
        const _config_5 = resolveHostHeaderConfig(_config_4);
        const _config_6 = resolveEndpointConfig(_config_5);
        const _config_7 = resolveHttpAuthSchemeConfig2(_config_6);
        const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
        this.config = _config_8;
        this.middlewareStack.use(getSchemaSerdePlugin(this.config));
        this.middlewareStack.use(getUserAgentPlugin(this.config));
        this.middlewareStack.use(getRetryPlugin(this.config));
        this.middlewareStack.use(getContentLengthPlugin(this.config));
        this.middlewareStack.use(getHostHeaderPlugin(this.config));
        this.middlewareStack.use(getLoggerPlugin(this.config));
        this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
        this.middlewareStack.use(getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
          httpAuthSchemeParametersProvider: defaultSSOOIDCHttpAuthSchemeParametersProvider,
          identityProviderConfigProvider: /* @__PURE__ */ __name(async (config) => new DefaultIdentityProviderConfig({
            "aws.auth#sigv4": config.credentials
          }), "identityProviderConfigProvider")
        }));
        this.middlewareStack.use(getHttpSigningPlugin(this.config));
      }
      destroy() {
        super.destroy();
      }
    };
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/commands/CreateTokenCommand.js
var CreateTokenCommand;
var init_CreateTokenCommand = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/commands/CreateTokenCommand.js"() {
    init_dist_es33();
    init_dist_es35();
    init_EndpointParameters();
    init_schemas_0();
    CreateTokenCommand = class extends Command.classBuilder().ep(commonParams2).m(function(Command2, cs, config, o2) {
      return [getEndpointPlugin(config, Command2.getEndpointParameterInstructions())];
    }).s("AWSSSOOIDCService", "CreateToken", {}).n("SSOOIDCClient", "CreateTokenCommand").sc(CreateToken$).build() {
      static {
        __name(this, "CreateTokenCommand");
      }
    };
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/SSOOIDC.js
var commands, SSOOIDC;
var init_SSOOIDC = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/SSOOIDC.js"() {
    init_dist_es35();
    init_CreateTokenCommand();
    init_SSOOIDCClient();
    commands = {
      CreateTokenCommand
    };
    SSOOIDC = class extends SSOOIDCClient {
      static {
        __name(this, "SSOOIDC");
      }
    };
    createAggregatedClient(commands, SSOOIDC);
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/commands/index.js
var init_commands = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/commands/index.js"() {
    init_CreateTokenCommand();
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/models/enums.js
var AccessDeniedExceptionReason, InvalidRequestExceptionReason;
var init_enums = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/models/enums.js"() {
    AccessDeniedExceptionReason = {
      KMS_ACCESS_DENIED: "KMS_AccessDeniedException"
    };
    InvalidRequestExceptionReason = {
      KMS_DISABLED_KEY: "KMS_DisabledException",
      KMS_INVALID_KEY_USAGE: "KMS_InvalidKeyUsageException",
      KMS_INVALID_STATE: "KMS_InvalidStateException",
      KMS_KEY_NOT_FOUND: "KMS_NotFoundException"
    };
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/models/models_0.js
var init_models_0 = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/models/models_0.js"() {
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/index.js
var sso_oidc_exports = {};
__export(sso_oidc_exports, {
  $Command: () => Command,
  AccessDeniedException: () => AccessDeniedException,
  AccessDeniedException$: () => AccessDeniedException$,
  AccessDeniedExceptionReason: () => AccessDeniedExceptionReason,
  AuthorizationPendingException: () => AuthorizationPendingException,
  AuthorizationPendingException$: () => AuthorizationPendingException$,
  CreateToken$: () => CreateToken$,
  CreateTokenCommand: () => CreateTokenCommand,
  CreateTokenRequest$: () => CreateTokenRequest$,
  CreateTokenResponse$: () => CreateTokenResponse$,
  ExpiredTokenException: () => ExpiredTokenException,
  ExpiredTokenException$: () => ExpiredTokenException$,
  InternalServerException: () => InternalServerException,
  InternalServerException$: () => InternalServerException$,
  InvalidClientException: () => InvalidClientException,
  InvalidClientException$: () => InvalidClientException$,
  InvalidGrantException: () => InvalidGrantException,
  InvalidGrantException$: () => InvalidGrantException$,
  InvalidRequestException: () => InvalidRequestException,
  InvalidRequestException$: () => InvalidRequestException$,
  InvalidRequestExceptionReason: () => InvalidRequestExceptionReason,
  InvalidScopeException: () => InvalidScopeException,
  InvalidScopeException$: () => InvalidScopeException$,
  SSOOIDC: () => SSOOIDC,
  SSOOIDCClient: () => SSOOIDCClient,
  SSOOIDCServiceException: () => SSOOIDCServiceException,
  SSOOIDCServiceException$: () => SSOOIDCServiceException$,
  SlowDownException: () => SlowDownException,
  SlowDownException$: () => SlowDownException$,
  UnauthorizedClientException: () => UnauthorizedClientException,
  UnauthorizedClientException$: () => UnauthorizedClientException$,
  UnsupportedGrantTypeException: () => UnsupportedGrantTypeException,
  UnsupportedGrantTypeException$: () => UnsupportedGrantTypeException$,
  __Client: () => Client,
  errorTypeRegistries: () => errorTypeRegistries
});
var init_sso_oidc = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/index.js"() {
    init_SSOOIDCClient();
    init_SSOOIDC();
    init_commands();
    init_schemas_0();
    init_enums();
    init_errors();
    init_models_0();
    init_SSOOIDCServiceException();
  }
});

// node_modules/@aws-sdk/token-providers/dist-es/getSsoOidcClient.js
var getSsoOidcClient;
var init_getSsoOidcClient = __esm({
  "node_modules/@aws-sdk/token-providers/dist-es/getSsoOidcClient.js"() {
    getSsoOidcClient = /* @__PURE__ */ __name(async (ssoRegion, init = {}, callerClientConfig) => {
      const { SSOOIDCClient: SSOOIDCClient2 } = await Promise.resolve().then(() => (init_sso_oidc(), sso_oidc_exports));
      const coalesce2 = /* @__PURE__ */ __name((prop) => init.clientConfig?.[prop] ?? init.parentClientConfig?.[prop] ?? callerClientConfig?.[prop], "coalesce");
      const ssoOidcClient = new SSOOIDCClient2(Object.assign({}, init.clientConfig ?? {}, {
        region: ssoRegion ?? init.clientConfig?.region,
        logger: coalesce2("logger"),
        userAgentAppId: coalesce2("userAgentAppId")
      }));
      return ssoOidcClient;
    }, "getSsoOidcClient");
  }
});

// node_modules/@aws-sdk/token-providers/dist-es/getNewSsoOidcToken.js
var getNewSsoOidcToken;
var init_getNewSsoOidcToken = __esm({
  "node_modules/@aws-sdk/token-providers/dist-es/getNewSsoOidcToken.js"() {
    init_getSsoOidcClient();
    getNewSsoOidcToken = /* @__PURE__ */ __name(async (ssoToken, ssoRegion, init = {}, callerClientConfig) => {
      const { CreateTokenCommand: CreateTokenCommand2 } = await Promise.resolve().then(() => (init_sso_oidc(), sso_oidc_exports));
      const ssoOidcClient = await getSsoOidcClient(ssoRegion, init, callerClientConfig);
      return ssoOidcClient.send(new CreateTokenCommand2({
        clientId: ssoToken.clientId,
        clientSecret: ssoToken.clientSecret,
        refreshToken: ssoToken.refreshToken,
        grantType: "refresh_token"
      }));
    }, "getNewSsoOidcToken");
  }
});

// node_modules/@aws-sdk/token-providers/dist-es/validateTokenExpiry.js
var validateTokenExpiry;
var init_validateTokenExpiry = __esm({
  "node_modules/@aws-sdk/token-providers/dist-es/validateTokenExpiry.js"() {
    init_dist_es29();
    init_constants9();
    validateTokenExpiry = /* @__PURE__ */ __name((token) => {
      if (token.expiration && token.expiration.getTime() < Date.now()) {
        throw new TokenProviderError(`Token is expired. ${REFRESH_MESSAGE}`, false);
      }
    }, "validateTokenExpiry");
  }
});

// node_modules/@aws-sdk/token-providers/dist-es/validateTokenKey.js
var validateTokenKey;
var init_validateTokenKey = __esm({
  "node_modules/@aws-sdk/token-providers/dist-es/validateTokenKey.js"() {
    init_dist_es29();
    init_constants9();
    validateTokenKey = /* @__PURE__ */ __name((key, value, forRefresh = false) => {
      if (typeof value === "undefined") {
        throw new TokenProviderError(`Value not present for '${key}' in SSO Token${forRefresh ? ". Cannot refresh" : ""}. ${REFRESH_MESSAGE}`, false);
      }
    }, "validateTokenKey");
  }
});

// node_modules/@aws-sdk/token-providers/dist-es/writeSSOTokenToFile.js
import { promises as fsPromises } from "node:fs";
var writeFile, writeSSOTokenToFile;
var init_writeSSOTokenToFile = __esm({
  "node_modules/@aws-sdk/token-providers/dist-es/writeSSOTokenToFile.js"() {
    init_dist_es30();
    ({ writeFile } = fsPromises);
    writeSSOTokenToFile = /* @__PURE__ */ __name((id, ssoToken) => {
      const tokenFilepath = getSSOTokenFilepath(id);
      const tokenString = JSON.stringify(ssoToken, null, 2);
      return writeFile(tokenFilepath, tokenString);
    }, "writeSSOTokenToFile");
  }
});

// node_modules/@aws-sdk/token-providers/dist-es/fromSso.js
var lastRefreshAttemptTime, fromSso;
var init_fromSso = __esm({
  "node_modules/@aws-sdk/token-providers/dist-es/fromSso.js"() {
    init_dist_es29();
    init_dist_es30();
    init_constants9();
    init_getNewSsoOidcToken();
    init_validateTokenExpiry();
    init_validateTokenKey();
    init_writeSSOTokenToFile();
    lastRefreshAttemptTime = /* @__PURE__ */ new Date(0);
    fromSso = /* @__PURE__ */ __name((init = {}) => async ({ callerClientConfig } = {}) => {
      init.logger?.debug("@aws-sdk/token-providers - fromSso");
      const profiles = await parseKnownFiles(init);
      const profileName = getProfileName({
        profile: init.profile ?? callerClientConfig?.profile
      });
      const profile = profiles[profileName];
      if (!profile) {
        throw new TokenProviderError(`Profile '${profileName}' could not be found in shared credentials file.`, false);
      } else if (!profile["sso_session"]) {
        throw new TokenProviderError(`Profile '${profileName}' is missing required property 'sso_session'.`);
      }
      const ssoSessionName = profile["sso_session"];
      const ssoSessions = await loadSsoSessionData(init);
      const ssoSession = ssoSessions[ssoSessionName];
      if (!ssoSession) {
        throw new TokenProviderError(`Sso session '${ssoSessionName}' could not be found in shared credentials file.`, false);
      }
      for (const ssoSessionRequiredKey of ["sso_start_url", "sso_region"]) {
        if (!ssoSession[ssoSessionRequiredKey]) {
          throw new TokenProviderError(`Sso session '${ssoSessionName}' is missing required property '${ssoSessionRequiredKey}'.`, false);
        }
      }
      const ssoStartUrl = ssoSession["sso_start_url"];
      const ssoRegion = ssoSession["sso_region"];
      let ssoToken;
      try {
        ssoToken = await getSSOTokenFromFile(ssoSessionName);
      } catch (e6) {
        throw new TokenProviderError(`The SSO session token associated with profile=${profileName} was not found or is invalid. ${REFRESH_MESSAGE}`, false);
      }
      validateTokenKey("accessToken", ssoToken.accessToken);
      validateTokenKey("expiresAt", ssoToken.expiresAt);
      const { accessToken, expiresAt } = ssoToken;
      const existingToken = { token: accessToken, expiration: new Date(expiresAt) };
      if (existingToken.expiration.getTime() - Date.now() > EXPIRE_WINDOW_MS) {
        return existingToken;
      }
      if (Date.now() - lastRefreshAttemptTime.getTime() < 30 * 1e3) {
        validateTokenExpiry(existingToken);
        return existingToken;
      }
      validateTokenKey("clientId", ssoToken.clientId, true);
      validateTokenKey("clientSecret", ssoToken.clientSecret, true);
      validateTokenKey("refreshToken", ssoToken.refreshToken, true);
      try {
        lastRefreshAttemptTime.setTime(Date.now());
        const newSsoOidcToken = await getNewSsoOidcToken(ssoToken, ssoRegion, init, callerClientConfig);
        validateTokenKey("accessToken", newSsoOidcToken.accessToken);
        validateTokenKey("expiresIn", newSsoOidcToken.expiresIn);
        const newTokenExpiration = new Date(Date.now() + newSsoOidcToken.expiresIn * 1e3);
        try {
          await writeSSOTokenToFile(ssoSessionName, {
            ...ssoToken,
            accessToken: newSsoOidcToken.accessToken,
            expiresAt: newTokenExpiration.toISOString(),
            refreshToken: newSsoOidcToken.refreshToken
          });
        } catch (error) {
        }
        return {
          token: newSsoOidcToken.accessToken,
          expiration: newTokenExpiration
        };
      } catch (error) {
        validateTokenExpiry(existingToken);
        return existingToken;
      }
    }, "fromSso");
  }
});

// node_modules/@aws-sdk/token-providers/dist-es/fromStatic.js
var init_fromStatic3 = __esm({
  "node_modules/@aws-sdk/token-providers/dist-es/fromStatic.js"() {
  }
});

// node_modules/@aws-sdk/token-providers/dist-es/nodeProvider.js
var init_nodeProvider = __esm({
  "node_modules/@aws-sdk/token-providers/dist-es/nodeProvider.js"() {
  }
});

// node_modules/@aws-sdk/token-providers/dist-es/index.js
var init_dist_es49 = __esm({
  "node_modules/@aws-sdk/token-providers/dist-es/index.js"() {
    init_fromEnvSigningName();
    init_fromSso();
    init_fromStatic3();
    init_nodeProvider();
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso/auth/httpAuthSchemeProvider.js
function createAwsAuthSigv4HttpAuthOption3(authParameters) {
  return {
    schemeId: "aws.auth#sigv4",
    signingProperties: {
      name: "awsssoportal",
      region: authParameters.region
    },
    propertiesExtractor: /* @__PURE__ */ __name((config, context) => ({
      signingProperties: {
        config,
        context
      }
    }), "propertiesExtractor")
  };
}
function createSmithyApiNoAuthHttpAuthOption2(authParameters) {
  return {
    schemeId: "smithy.api#noAuth"
  };
}
var defaultSSOHttpAuthSchemeParametersProvider, defaultSSOHttpAuthSchemeProvider, resolveHttpAuthSchemeConfig3;
var init_httpAuthSchemeProvider2 = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso/auth/httpAuthSchemeProvider.js"() {
    init_httpAuthSchemes2();
    init_dist_es6();
    defaultSSOHttpAuthSchemeParametersProvider = /* @__PURE__ */ __name(async (config, context, input) => {
      return {
        operation: getSmithyContext(context).operation,
        region: await normalizeProvider(config.region)() || (() => {
          throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
        })()
      };
    }, "defaultSSOHttpAuthSchemeParametersProvider");
    __name(createAwsAuthSigv4HttpAuthOption3, "createAwsAuthSigv4HttpAuthOption");
    __name(createSmithyApiNoAuthHttpAuthOption2, "createSmithyApiNoAuthHttpAuthOption");
    defaultSSOHttpAuthSchemeProvider = /* @__PURE__ */ __name((authParameters) => {
      const options = [];
      switch (authParameters.operation) {
        case "GetRoleCredentials": {
          options.push(createSmithyApiNoAuthHttpAuthOption2(authParameters));
          break;
        }
        default: {
          options.push(createAwsAuthSigv4HttpAuthOption3(authParameters));
        }
      }
      return options;
    }, "defaultSSOHttpAuthSchemeProvider");
    resolveHttpAuthSchemeConfig3 = /* @__PURE__ */ __name((config) => {
      const config_0 = resolveAwsSdkSigV4Config(config);
      return Object.assign(config_0, {
        authSchemePreference: normalizeProvider(config.authSchemePreference ?? [])
      });
    }, "resolveHttpAuthSchemeConfig");
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso/endpoint/EndpointParameters.js
var resolveClientEndpointParameters3, commonParams3;
var init_EndpointParameters2 = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso/endpoint/EndpointParameters.js"() {
    resolveClientEndpointParameters3 = /* @__PURE__ */ __name((options) => {
      return Object.assign(options, {
        useDualstackEndpoint: options.useDualstackEndpoint ?? false,
        useFipsEndpoint: options.useFipsEndpoint ?? false,
        defaultSigningName: "awsssoportal"
      });
    }, "resolveClientEndpointParameters");
    commonParams3 = {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
    };
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso/endpoint/bdd.js
var k3, a3, b3, c3, d3, e3, f3, g3, h3, i3, j3, _data3, root3, r3, nodes3, bdd3;
var init_bdd2 = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso/endpoint/bdd.js"() {
    init_dist_es21();
    k3 = "ref";
    a3 = -1;
    b3 = true;
    c3 = "isSet";
    d3 = "PartitionResult";
    e3 = "booleanEquals";
    f3 = "getAttr";
    g3 = { [k3]: "Endpoint" };
    h3 = { [k3]: d3 };
    i3 = {};
    j3 = [{ [k3]: "Region" }];
    _data3 = {
      conditions: [
        [c3, [g3]],
        [c3, j3],
        ["aws.partition", j3, d3],
        [e3, [{ [k3]: "UseFIPS" }, b3]],
        [e3, [{ [k3]: "UseDualStack" }, b3]],
        [e3, [{ fn: f3, argv: [h3, "supportsDualStack"] }, b3]],
        [e3, [{ fn: f3, argv: [h3, "supportsFIPS"] }, b3]],
        ["stringEquals", [{ fn: f3, argv: [h3, "name"] }, "aws-us-gov"]]
      ],
      results: [
        [a3],
        [a3, "Invalid Configuration: FIPS and custom endpoint are not supported"],
        [a3, "Invalid Configuration: Dualstack and custom endpoint are not supported"],
        [g3, i3],
        ["https://portal.sso-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", i3],
        [a3, "FIPS and DualStack are enabled, but this partition does not support one or both"],
        ["https://portal.sso.{Region}.amazonaws.com", i3],
        ["https://portal.sso-fips.{Region}.{PartitionResult#dnsSuffix}", i3],
        [a3, "FIPS is enabled but this partition does not support FIPS"],
        ["https://portal.sso.{Region}.{PartitionResult#dualStackDnsSuffix}", i3],
        [a3, "DualStack is enabled but this partition does not support DualStack"],
        ["https://portal.sso.{Region}.{PartitionResult#dnsSuffix}", i3],
        [a3, "Invalid Configuration: Missing Region"]
      ]
    };
    root3 = 2;
    r3 = 1e8;
    nodes3 = new Int32Array([
      -1,
      1,
      -1,
      0,
      13,
      3,
      1,
      4,
      r3 + 12,
      2,
      5,
      r3 + 12,
      3,
      8,
      6,
      4,
      7,
      r3 + 11,
      5,
      r3 + 9,
      r3 + 10,
      4,
      11,
      9,
      6,
      10,
      r3 + 8,
      7,
      r3 + 6,
      r3 + 7,
      5,
      12,
      r3 + 5,
      6,
      r3 + 4,
      r3 + 5,
      3,
      r3 + 1,
      14,
      4,
      r3 + 2,
      r3 + 3
    ]);
    bdd3 = BinaryDecisionDiagram.from(nodes3, root3, _data3.conditions, _data3.results);
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso/endpoint/endpointResolver.js
var cache3, defaultEndpointResolver3;
var init_endpointResolver2 = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso/endpoint/endpointResolver.js"() {
    init_dist_es22();
    init_dist_es21();
    init_bdd2();
    cache3 = new EndpointCache({
      size: 50,
      params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"]
    });
    defaultEndpointResolver3 = /* @__PURE__ */ __name((endpointParams, context = {}) => {
      return cache3.get(endpointParams, () => decideEndpoint(bdd3, {
        endpointParams,
        logger: context.logger
      }));
    }, "defaultEndpointResolver");
    customEndpointFunctions.aws = awsEndpointFunctions;
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso/models/SSOServiceException.js
var SSOServiceException;
var init_SSOServiceException = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso/models/SSOServiceException.js"() {
    init_dist_es35();
    SSOServiceException = class _SSOServiceException extends ServiceException {
      static {
        __name(this, "SSOServiceException");
      }
      constructor(options) {
        super(options);
        Object.setPrototypeOf(this, _SSOServiceException.prototype);
      }
    };
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso/models/errors.js
var InvalidRequestException2, ResourceNotFoundException, TooManyRequestsException, UnauthorizedException;
var init_errors2 = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso/models/errors.js"() {
    init_SSOServiceException();
    InvalidRequestException2 = class _InvalidRequestException extends SSOServiceException {
      static {
        __name(this, "InvalidRequestException");
      }
      name = "InvalidRequestException";
      $fault = "client";
      constructor(opts) {
        super({
          name: "InvalidRequestException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _InvalidRequestException.prototype);
      }
    };
    ResourceNotFoundException = class _ResourceNotFoundException extends SSOServiceException {
      static {
        __name(this, "ResourceNotFoundException");
      }
      name = "ResourceNotFoundException";
      $fault = "client";
      constructor(opts) {
        super({
          name: "ResourceNotFoundException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _ResourceNotFoundException.prototype);
      }
    };
    TooManyRequestsException = class _TooManyRequestsException extends SSOServiceException {
      static {
        __name(this, "TooManyRequestsException");
      }
      name = "TooManyRequestsException";
      $fault = "client";
      constructor(opts) {
        super({
          name: "TooManyRequestsException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _TooManyRequestsException.prototype);
      }
    };
    UnauthorizedException = class _UnauthorizedException extends SSOServiceException {
      static {
        __name(this, "UnauthorizedException");
      }
      name = "UnauthorizedException";
      $fault = "client";
      constructor(opts) {
        super({
          name: "UnauthorizedException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _UnauthorizedException.prototype);
      }
    };
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso/schemas/schemas_0.js
var _ATT, _GRC, _GRCR, _GRCRe, _IRE2, _RC, _RNFE, _SAKT, _STT, _TMRE, _UE, _aI, _aKI, _aT2, _ai, _c2, _e2, _ex, _h2, _hE2, _hH, _hQ, _m, _rC, _rN, _rn, _s2, _sAK, _sT, _xasbt, n02, _s_registry2, SSOServiceException$, n0_registry2, InvalidRequestException$2, ResourceNotFoundException$, TooManyRequestsException$, UnauthorizedException$, errorTypeRegistries2, AccessTokenType, SecretAccessKeyType, SessionTokenType, GetRoleCredentialsRequest$, GetRoleCredentialsResponse$, RoleCredentials$, GetRoleCredentials$;
var init_schemas_02 = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso/schemas/schemas_0.js"() {
    init_schema2();
    init_errors2();
    init_SSOServiceException();
    _ATT = "AccessTokenType";
    _GRC = "GetRoleCredentials";
    _GRCR = "GetRoleCredentialsRequest";
    _GRCRe = "GetRoleCredentialsResponse";
    _IRE2 = "InvalidRequestException";
    _RC = "RoleCredentials";
    _RNFE = "ResourceNotFoundException";
    _SAKT = "SecretAccessKeyType";
    _STT = "SessionTokenType";
    _TMRE = "TooManyRequestsException";
    _UE = "UnauthorizedException";
    _aI = "accountId";
    _aKI = "accessKeyId";
    _aT2 = "accessToken";
    _ai = "account_id";
    _c2 = "client";
    _e2 = "error";
    _ex = "expiration";
    _h2 = "http";
    _hE2 = "httpError";
    _hH = "httpHeader";
    _hQ = "httpQuery";
    _m = "message";
    _rC = "roleCredentials";
    _rN = "roleName";
    _rn = "role_name";
    _s2 = "smithy.ts.sdk.synthetic.com.amazonaws.sso";
    _sAK = "secretAccessKey";
    _sT = "sessionToken";
    _xasbt = "x-amz-sso_bearer_token";
    n02 = "com.amazonaws.sso";
    _s_registry2 = TypeRegistry.for(_s2);
    SSOServiceException$ = [-3, _s2, "SSOServiceException", 0, [], []];
    _s_registry2.registerError(SSOServiceException$, SSOServiceException);
    n0_registry2 = TypeRegistry.for(n02);
    InvalidRequestException$2 = [-3, n02, _IRE2, { [_e2]: _c2, [_hE2]: 400 }, [_m], [0]];
    n0_registry2.registerError(InvalidRequestException$2, InvalidRequestException2);
    ResourceNotFoundException$ = [-3, n02, _RNFE, { [_e2]: _c2, [_hE2]: 404 }, [_m], [0]];
    n0_registry2.registerError(ResourceNotFoundException$, ResourceNotFoundException);
    TooManyRequestsException$ = [-3, n02, _TMRE, { [_e2]: _c2, [_hE2]: 429 }, [_m], [0]];
    n0_registry2.registerError(TooManyRequestsException$, TooManyRequestsException);
    UnauthorizedException$ = [-3, n02, _UE, { [_e2]: _c2, [_hE2]: 401 }, [_m], [0]];
    n0_registry2.registerError(UnauthorizedException$, UnauthorizedException);
    errorTypeRegistries2 = [_s_registry2, n0_registry2];
    AccessTokenType = [0, n02, _ATT, 8, 0];
    SecretAccessKeyType = [0, n02, _SAKT, 8, 0];
    SessionTokenType = [0, n02, _STT, 8, 0];
    GetRoleCredentialsRequest$ = [
      3,
      n02,
      _GRCR,
      0,
      [_rN, _aI, _aT2],
      [
        [0, { [_hQ]: _rn }],
        [0, { [_hQ]: _ai }],
        [() => AccessTokenType, { [_hH]: _xasbt }]
      ],
      3
    ];
    GetRoleCredentialsResponse$ = [
      3,
      n02,
      _GRCRe,
      0,
      [_rC],
      [[() => RoleCredentials$, 0]]
    ];
    RoleCredentials$ = [
      3,
      n02,
      _RC,
      0,
      [_aKI, _sAK, _sT, _ex],
      [0, [() => SecretAccessKeyType, 0], [() => SessionTokenType, 0], 1]
    ];
    GetRoleCredentials$ = [
      9,
      n02,
      _GRC,
      { [_h2]: ["GET", "/federation/credentials", 200] },
      () => GetRoleCredentialsRequest$,
      () => GetRoleCredentialsResponse$
    ];
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso/runtimeConfig.shared.js
var getRuntimeConfig3;
var init_runtimeConfig_shared2 = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso/runtimeConfig.shared.js"() {
    init_httpAuthSchemes2();
    init_protocols2();
    init_dist_es20();
    init_dist_es35();
    init_dist_es18();
    init_dist_es10();
    init_dist_es9();
    init_httpAuthSchemeProvider2();
    init_endpointResolver2();
    init_schemas_02();
    getRuntimeConfig3 = /* @__PURE__ */ __name((config) => {
      return {
        apiVersion: "2019-06-10",
        base64Decoder: config?.base64Decoder ?? fromBase64,
        base64Encoder: config?.base64Encoder ?? toBase64,
        disableHostPrefix: config?.disableHostPrefix ?? false,
        endpointProvider: config?.endpointProvider ?? defaultEndpointResolver3,
        extensions: config?.extensions ?? [],
        httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? defaultSSOHttpAuthSchemeProvider,
        httpAuthSchemes: config?.httpAuthSchemes ?? [
          {
            schemeId: "aws.auth#sigv4",
            identityProvider: /* @__PURE__ */ __name((ipc) => ipc.getIdentityProvider("aws.auth#sigv4"), "identityProvider"),
            signer: new AwsSdkSigV4Signer()
          },
          {
            schemeId: "smithy.api#noAuth",
            identityProvider: /* @__PURE__ */ __name((ipc) => ipc.getIdentityProvider("smithy.api#noAuth") || (async () => ({})), "identityProvider"),
            signer: new NoAuthSigner()
          }
        ],
        logger: config?.logger ?? new NoOpLogger(),
        protocol: config?.protocol ?? AwsRestJsonProtocol,
        protocolSettings: config?.protocolSettings ?? {
          defaultNamespace: "com.amazonaws.sso",
          errorTypeRegistries: errorTypeRegistries2,
          version: "2019-06-10",
          serviceTarget: "SWBPortalService"
        },
        serviceId: config?.serviceId ?? "SSO",
        urlParser: config?.urlParser ?? parseUrl,
        utf8Decoder: config?.utf8Decoder ?? fromUtf8,
        utf8Encoder: config?.utf8Encoder ?? toUtf8
      };
    }, "getRuntimeConfig");
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso/runtimeConfig.js
var getRuntimeConfig4;
var init_runtimeConfig2 = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso/runtimeConfig.js"() {
    init_package();
    init_client2();
    init_httpAuthSchemes2();
    init_dist_es44();
    init_dist_es27();
    init_dist_es45();
    init_dist_es36();
    init_dist_es31();
    init_dist_es13();
    init_dist_es35();
    init_dist_es46();
    init_dist_es47();
    init_dist_es24();
    init_runtimeConfig_shared2();
    getRuntimeConfig4 = /* @__PURE__ */ __name((config) => {
      emitWarningIfUnsupportedVersion2(process.version);
      const defaultsMode = resolveDefaultsModeConfig(config);
      const defaultConfigProvider = /* @__PURE__ */ __name(() => defaultsMode().then(loadConfigsForDefaultMode), "defaultConfigProvider");
      const clientSharedValues = getRuntimeConfig3(config);
      emitWarningIfUnsupportedVersion(process.version);
      const loaderConfig = {
        profile: config?.profile,
        logger: clientSharedValues.logger
      };
      return {
        ...clientSharedValues,
        ...config,
        runtime: "node",
        defaultsMode,
        authSchemePreference: config?.authSchemePreference ?? loadConfig(NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, loaderConfig),
        bodyLengthChecker: config?.bodyLengthChecker ?? calculateBodyLength,
        defaultUserAgentProvider: config?.defaultUserAgentProvider ?? createDefaultUserAgentProvider({ serviceId: clientSharedValues.serviceId, clientVersion: package_default2.version }),
        maxAttempts: config?.maxAttempts ?? loadConfig(NODE_MAX_ATTEMPT_CONFIG_OPTIONS, config),
        region: config?.region ?? loadConfig(NODE_REGION_CONFIG_OPTIONS, { ...NODE_REGION_CONFIG_FILE_OPTIONS, ...loaderConfig }),
        requestHandler: NodeHttpHandler.create(config?.requestHandler ?? defaultConfigProvider),
        retryMode: config?.retryMode ?? loadConfig({
          ...NODE_RETRY_MODE_CONFIG_OPTIONS,
          default: /* @__PURE__ */ __name(async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE, "default")
        }, config),
        sha256: config?.sha256 ?? Hash.bind(null, "sha256"),
        streamCollector: config?.streamCollector ?? streamCollector,
        useDualstackEndpoint: config?.useDualstackEndpoint ?? loadConfig(NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, loaderConfig),
        useFipsEndpoint: config?.useFipsEndpoint ?? loadConfig(NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, loaderConfig),
        userAgentAppId: config?.userAgentAppId ?? loadConfig(NODE_APP_ID_CONFIG_OPTIONS, loaderConfig)
      };
    }, "getRuntimeConfig");
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso/auth/httpAuthExtensionConfiguration.js
var getHttpAuthExtensionConfiguration2, resolveHttpAuthRuntimeConfig2;
var init_httpAuthExtensionConfiguration2 = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso/auth/httpAuthExtensionConfiguration.js"() {
    getHttpAuthExtensionConfiguration2 = /* @__PURE__ */ __name((runtimeConfig) => {
      const _httpAuthSchemes = runtimeConfig.httpAuthSchemes;
      let _httpAuthSchemeProvider = runtimeConfig.httpAuthSchemeProvider;
      let _credentials = runtimeConfig.credentials;
      return {
        setHttpAuthScheme(httpAuthScheme) {
          const index = _httpAuthSchemes.findIndex((scheme) => scheme.schemeId === httpAuthScheme.schemeId);
          if (index === -1) {
            _httpAuthSchemes.push(httpAuthScheme);
          } else {
            _httpAuthSchemes.splice(index, 1, httpAuthScheme);
          }
        },
        httpAuthSchemes() {
          return _httpAuthSchemes;
        },
        setHttpAuthSchemeProvider(httpAuthSchemeProvider) {
          _httpAuthSchemeProvider = httpAuthSchemeProvider;
        },
        httpAuthSchemeProvider() {
          return _httpAuthSchemeProvider;
        },
        setCredentials(credentials) {
          _credentials = credentials;
        },
        credentials() {
          return _credentials;
        }
      };
    }, "getHttpAuthExtensionConfiguration");
    resolveHttpAuthRuntimeConfig2 = /* @__PURE__ */ __name((config) => {
      return {
        httpAuthSchemes: config.httpAuthSchemes(),
        httpAuthSchemeProvider: config.httpAuthSchemeProvider(),
        credentials: config.credentials()
      };
    }, "resolveHttpAuthRuntimeConfig");
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso/runtimeExtensions.js
var resolveRuntimeExtensions2;
var init_runtimeExtensions2 = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso/runtimeExtensions.js"() {
    init_dist_es48();
    init_dist_es2();
    init_dist_es35();
    init_httpAuthExtensionConfiguration2();
    resolveRuntimeExtensions2 = /* @__PURE__ */ __name((runtimeConfig, extensions) => {
      const extensionConfiguration = Object.assign(getAwsRegionExtensionConfiguration(runtimeConfig), getDefaultExtensionConfiguration(runtimeConfig), getHttpHandlerExtensionConfiguration(runtimeConfig), getHttpAuthExtensionConfiguration2(runtimeConfig));
      extensions.forEach((extension) => extension.configure(extensionConfiguration));
      return Object.assign(runtimeConfig, resolveAwsRegionExtensionConfiguration(extensionConfiguration), resolveDefaultRuntimeConfig(extensionConfiguration), resolveHttpHandlerRuntimeConfig(extensionConfiguration), resolveHttpAuthRuntimeConfig2(extensionConfiguration));
    }, "resolveRuntimeExtensions");
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso/SSOClient.js
var SSOClient;
var init_SSOClient = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso/SSOClient.js"() {
    init_dist_es3();
    init_dist_es4();
    init_dist_es5();
    init_dist_es25();
    init_dist_es27();
    init_dist_es20();
    init_schema2();
    init_dist_es28();
    init_dist_es33();
    init_dist_es36();
    init_dist_es35();
    init_httpAuthSchemeProvider2();
    init_EndpointParameters2();
    init_runtimeConfig2();
    init_runtimeExtensions2();
    SSOClient = class extends Client {
      static {
        __name(this, "SSOClient");
      }
      config;
      constructor(...[configuration]) {
        const _config_0 = getRuntimeConfig4(configuration || {});
        super(_config_0);
        this.initConfig = _config_0;
        const _config_1 = resolveClientEndpointParameters3(_config_0);
        const _config_2 = resolveUserAgentConfig(_config_1);
        const _config_3 = resolveRetryConfig(_config_2);
        const _config_4 = resolveRegionConfig(_config_3);
        const _config_5 = resolveHostHeaderConfig(_config_4);
        const _config_6 = resolveEndpointConfig(_config_5);
        const _config_7 = resolveHttpAuthSchemeConfig3(_config_6);
        const _config_8 = resolveRuntimeExtensions2(_config_7, configuration?.extensions || []);
        this.config = _config_8;
        this.middlewareStack.use(getSchemaSerdePlugin(this.config));
        this.middlewareStack.use(getUserAgentPlugin(this.config));
        this.middlewareStack.use(getRetryPlugin(this.config));
        this.middlewareStack.use(getContentLengthPlugin(this.config));
        this.middlewareStack.use(getHostHeaderPlugin(this.config));
        this.middlewareStack.use(getLoggerPlugin(this.config));
        this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
        this.middlewareStack.use(getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
          httpAuthSchemeParametersProvider: defaultSSOHttpAuthSchemeParametersProvider,
          identityProviderConfigProvider: /* @__PURE__ */ __name(async (config) => new DefaultIdentityProviderConfig({
            "aws.auth#sigv4": config.credentials
          }), "identityProviderConfigProvider")
        }));
        this.middlewareStack.use(getHttpSigningPlugin(this.config));
      }
      destroy() {
        super.destroy();
      }
    };
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso/commands/GetRoleCredentialsCommand.js
var GetRoleCredentialsCommand;
var init_GetRoleCredentialsCommand = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso/commands/GetRoleCredentialsCommand.js"() {
    init_dist_es33();
    init_dist_es35();
    init_EndpointParameters2();
    init_schemas_02();
    GetRoleCredentialsCommand = class extends Command.classBuilder().ep(commonParams3).m(function(Command2, cs, config, o2) {
      return [getEndpointPlugin(config, Command2.getEndpointParameterInstructions())];
    }).s("SWBPortalService", "GetRoleCredentials", {}).n("SSOClient", "GetRoleCredentialsCommand").sc(GetRoleCredentials$).build() {
      static {
        __name(this, "GetRoleCredentialsCommand");
      }
    };
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso/SSO.js
var commands2, SSO;
var init_SSO = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso/SSO.js"() {
    init_dist_es35();
    init_GetRoleCredentialsCommand();
    init_SSOClient();
    commands2 = {
      GetRoleCredentialsCommand
    };
    SSO = class extends SSOClient {
      static {
        __name(this, "SSO");
      }
    };
    createAggregatedClient(commands2, SSO);
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso/commands/index.js
var init_commands2 = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso/commands/index.js"() {
    init_GetRoleCredentialsCommand();
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso/models/models_0.js
var init_models_02 = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso/models/models_0.js"() {
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso/index.js
var init_sso = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso/index.js"() {
    init_SSOClient();
    init_SSO();
    init_commands2();
    init_schemas_02();
    init_errors2();
    init_models_02();
  }
});

// node_modules/@aws-sdk/credential-provider-sso/dist-es/loadSso.js
var loadSso_exports = {};
__export(loadSso_exports, {
  GetRoleCredentialsCommand: () => GetRoleCredentialsCommand,
  SSOClient: () => SSOClient
});
var init_loadSso = __esm({
  "node_modules/@aws-sdk/credential-provider-sso/dist-es/loadSso.js"() {
    init_sso();
  }
});

// node_modules/@aws-sdk/credential-provider-sso/dist-es/resolveSSOCredentials.js
var SHOULD_FAIL_CREDENTIAL_CHAIN, resolveSSOCredentials;
var init_resolveSSOCredentials = __esm({
  "node_modules/@aws-sdk/credential-provider-sso/dist-es/resolveSSOCredentials.js"() {
    init_client2();
    init_dist_es49();
    init_dist_es29();
    init_dist_es30();
    SHOULD_FAIL_CREDENTIAL_CHAIN = false;
    resolveSSOCredentials = /* @__PURE__ */ __name(async ({ ssoStartUrl, ssoSession, ssoAccountId, ssoRegion, ssoRoleName, ssoClient, clientConfig, parentClientConfig, callerClientConfig, profile, filepath, configFilepath, ignoreCache, logger: logger2 }) => {
      let token;
      const refreshMessage = `To refresh this SSO session run aws sso login with the corresponding profile.`;
      if (ssoSession) {
        try {
          const _token = await fromSso({
            profile,
            filepath,
            configFilepath,
            ignoreCache
          })();
          token = {
            accessToken: _token.token,
            expiresAt: new Date(_token.expiration).toISOString()
          };
        } catch (e6) {
          throw new CredentialsProviderError(e6.message, {
            tryNextLink: SHOULD_FAIL_CREDENTIAL_CHAIN,
            logger: logger2
          });
        }
      } else {
        try {
          token = await getSSOTokenFromFile(ssoStartUrl);
        } catch (e6) {
          throw new CredentialsProviderError(`The SSO session associated with this profile is invalid. ${refreshMessage}`, {
            tryNextLink: SHOULD_FAIL_CREDENTIAL_CHAIN,
            logger: logger2
          });
        }
      }
      if (new Date(token.expiresAt).getTime() - Date.now() <= 0) {
        throw new CredentialsProviderError(`The SSO session associated with this profile has expired. ${refreshMessage}`, {
          tryNextLink: SHOULD_FAIL_CREDENTIAL_CHAIN,
          logger: logger2
        });
      }
      const { accessToken } = token;
      const { SSOClient: SSOClient2, GetRoleCredentialsCommand: GetRoleCredentialsCommand2 } = await Promise.resolve().then(() => (init_loadSso(), loadSso_exports));
      const sso = ssoClient || new SSOClient2(Object.assign({}, clientConfig ?? {}, {
        logger: clientConfig?.logger ?? callerClientConfig?.logger ?? parentClientConfig?.logger,
        region: clientConfig?.region ?? ssoRegion,
        userAgentAppId: clientConfig?.userAgentAppId ?? callerClientConfig?.userAgentAppId ?? parentClientConfig?.userAgentAppId
      }));
      let ssoResp;
      try {
        ssoResp = await sso.send(new GetRoleCredentialsCommand2({
          accountId: ssoAccountId,
          roleName: ssoRoleName,
          accessToken
        }));
      } catch (e6) {
        throw new CredentialsProviderError(e6, {
          tryNextLink: SHOULD_FAIL_CREDENTIAL_CHAIN,
          logger: logger2
        });
      }
      const { roleCredentials: { accessKeyId, secretAccessKey, sessionToken, expiration, credentialScope, accountId } = {} } = ssoResp;
      if (!accessKeyId || !secretAccessKey || !sessionToken || !expiration) {
        throw new CredentialsProviderError("SSO returns an invalid temporary credential.", {
          tryNextLink: SHOULD_FAIL_CREDENTIAL_CHAIN,
          logger: logger2
        });
      }
      const credentials = {
        accessKeyId,
        secretAccessKey,
        sessionToken,
        expiration: new Date(expiration),
        ...credentialScope && { credentialScope },
        ...accountId && { accountId }
      };
      if (ssoSession) {
        setCredentialFeature(credentials, "CREDENTIALS_SSO", "s");
      } else {
        setCredentialFeature(credentials, "CREDENTIALS_SSO_LEGACY", "u");
      }
      return credentials;
    }, "resolveSSOCredentials");
  }
});

// node_modules/@aws-sdk/credential-provider-sso/dist-es/validateSsoProfile.js
var validateSsoProfile;
var init_validateSsoProfile = __esm({
  "node_modules/@aws-sdk/credential-provider-sso/dist-es/validateSsoProfile.js"() {
    init_dist_es29();
    validateSsoProfile = /* @__PURE__ */ __name((profile, logger2) => {
      const { sso_start_url, sso_account_id, sso_region, sso_role_name } = profile;
      if (!sso_start_url || !sso_account_id || !sso_region || !sso_role_name) {
        throw new CredentialsProviderError(`Profile is configured with invalid SSO credentials. Required parameters "sso_account_id", "sso_region", "sso_role_name", "sso_start_url". Got ${Object.keys(profile).join(", ")}
Reference: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html`, { tryNextLink: false, logger: logger2 });
      }
      return profile;
    }, "validateSsoProfile");
  }
});

// node_modules/@aws-sdk/credential-provider-sso/dist-es/fromSSO.js
var fromSSO;
var init_fromSSO = __esm({
  "node_modules/@aws-sdk/credential-provider-sso/dist-es/fromSSO.js"() {
    init_dist_es29();
    init_dist_es30();
    init_isSsoProfile();
    init_resolveSSOCredentials();
    init_validateSsoProfile();
    fromSSO = /* @__PURE__ */ __name((init = {}) => async ({ callerClientConfig } = {}) => {
      init.logger?.debug("@aws-sdk/credential-provider-sso - fromSSO");
      const { ssoStartUrl, ssoAccountId, ssoRegion, ssoRoleName, ssoSession } = init;
      const { ssoClient } = init;
      const profileName = getProfileName({
        profile: init.profile ?? callerClientConfig?.profile
      });
      if (!ssoStartUrl && !ssoAccountId && !ssoRegion && !ssoRoleName && !ssoSession) {
        const profiles = await parseKnownFiles(init);
        const profile = profiles[profileName];
        if (!profile) {
          throw new CredentialsProviderError(`Profile ${profileName} was not found.`, { logger: init.logger });
        }
        if (!isSsoProfile(profile)) {
          throw new CredentialsProviderError(`Profile ${profileName} is not configured with SSO credentials.`, {
            logger: init.logger
          });
        }
        if (profile?.sso_session) {
          const ssoSessions = await loadSsoSessionData(init);
          const session = ssoSessions[profile.sso_session];
          const conflictMsg = ` configurations in profile ${profileName} and sso-session ${profile.sso_session}`;
          if (ssoRegion && ssoRegion !== session.sso_region) {
            throw new CredentialsProviderError(`Conflicting SSO region` + conflictMsg, {
              tryNextLink: false,
              logger: init.logger
            });
          }
          if (ssoStartUrl && ssoStartUrl !== session.sso_start_url) {
            throw new CredentialsProviderError(`Conflicting SSO start_url` + conflictMsg, {
              tryNextLink: false,
              logger: init.logger
            });
          }
          profile.sso_region = session.sso_region;
          profile.sso_start_url = session.sso_start_url;
        }
        const { sso_start_url, sso_account_id, sso_region, sso_role_name, sso_session } = validateSsoProfile(profile, init.logger);
        return resolveSSOCredentials({
          ssoStartUrl: sso_start_url,
          ssoSession: sso_session,
          ssoAccountId: sso_account_id,
          ssoRegion: sso_region,
          ssoRoleName: sso_role_name,
          ssoClient,
          clientConfig: init.clientConfig,
          parentClientConfig: init.parentClientConfig,
          callerClientConfig: init.callerClientConfig,
          profile: profileName,
          filepath: init.filepath,
          configFilepath: init.configFilepath,
          ignoreCache: init.ignoreCache,
          logger: init.logger
        });
      } else if (!ssoStartUrl || !ssoAccountId || !ssoRegion || !ssoRoleName) {
        throw new CredentialsProviderError('Incomplete configuration. The fromSSO() argument hash must include "ssoStartUrl", "ssoAccountId", "ssoRegion", "ssoRoleName"', { tryNextLink: false, logger: init.logger });
      } else {
        return resolveSSOCredentials({
          ssoStartUrl,
          ssoSession,
          ssoAccountId,
          ssoRegion,
          ssoRoleName,
          ssoClient,
          clientConfig: init.clientConfig,
          parentClientConfig: init.parentClientConfig,
          callerClientConfig: init.callerClientConfig,
          profile: profileName,
          filepath: init.filepath,
          configFilepath: init.configFilepath,
          ignoreCache: init.ignoreCache,
          logger: init.logger
        });
      }
    }, "fromSSO");
  }
});

// node_modules/@aws-sdk/credential-provider-sso/dist-es/types.js
var init_types9 = __esm({
  "node_modules/@aws-sdk/credential-provider-sso/dist-es/types.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-sso/dist-es/index.js
var dist_es_exports4 = {};
__export(dist_es_exports4, {
  fromSSO: () => fromSSO,
  isSsoProfile: () => isSsoProfile,
  validateSsoProfile: () => validateSsoProfile
});
var init_dist_es50 = __esm({
  "node_modules/@aws-sdk/credential-provider-sso/dist-es/index.js"() {
    init_fromSSO();
    init_isSsoProfile();
    init_types9();
    init_validateSsoProfile();
  }
});

// node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveCredentialSource.js
var resolveCredentialSource, setNamedProvider;
var init_resolveCredentialSource = __esm({
  "node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveCredentialSource.js"() {
    init_client2();
    init_dist_es29();
    resolveCredentialSource = /* @__PURE__ */ __name((credentialSource, profileName, logger2) => {
      const sourceProvidersMap = {
        EcsContainer: /* @__PURE__ */ __name(async (options) => {
          const { fromHttp: fromHttp2 } = await Promise.resolve().then(() => (init_dist_es43(), dist_es_exports3));
          const { fromContainerMetadata: fromContainerMetadata2 } = await Promise.resolve().then(() => (init_dist_es42(), dist_es_exports2));
          logger2?.debug("@aws-sdk/credential-provider-ini - credential_source is EcsContainer");
          return async () => chain(fromHttp2(options ?? {}), fromContainerMetadata2(options))().then(setNamedProvider);
        }, "EcsContainer"),
        Ec2InstanceMetadata: /* @__PURE__ */ __name(async (options) => {
          logger2?.debug("@aws-sdk/credential-provider-ini - credential_source is Ec2InstanceMetadata");
          const { fromInstanceMetadata: fromInstanceMetadata2 } = await Promise.resolve().then(() => (init_dist_es42(), dist_es_exports2));
          return async () => fromInstanceMetadata2(options)().then(setNamedProvider);
        }, "Ec2InstanceMetadata"),
        Environment: /* @__PURE__ */ __name(async (options) => {
          logger2?.debug("@aws-sdk/credential-provider-ini - credential_source is Environment");
          const { fromEnv: fromEnv3 } = await Promise.resolve().then(() => (init_dist_es41(), dist_es_exports));
          return async () => fromEnv3(options)().then(setNamedProvider);
        }, "Environment")
      };
      if (credentialSource in sourceProvidersMap) {
        return sourceProvidersMap[credentialSource];
      } else {
        throw new CredentialsProviderError(`Unsupported credential source in profile ${profileName}. Got ${credentialSource}, expected EcsContainer or Ec2InstanceMetadata or Environment.`, { logger: logger2 });
      }
    }, "resolveCredentialSource");
    setNamedProvider = /* @__PURE__ */ __name((creds) => setCredentialFeature(creds, "CREDENTIALS_PROFILE_NAMED_PROVIDER", "p"), "setNamedProvider");
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/endpoint/bdd.js
var q, a4, b4, c4, d4, e4, f4, g4, h4, i4, j4, k4, l2, m2, n, o, p, _data4, root4, r4, nodes4, bdd4;
var init_bdd3 = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/endpoint/bdd.js"() {
    init_dist_es21();
    q = "ref";
    a4 = -1;
    b4 = true;
    c4 = "isSet";
    d4 = "PartitionResult";
    e4 = "booleanEquals";
    f4 = "stringEquals";
    g4 = "getAttr";
    h4 = "us-east-1";
    i4 = "sigv4";
    j4 = "sts";
    k4 = "https://sts.{Region}.{PartitionResult#dnsSuffix}";
    l2 = { [q]: "Endpoint" };
    m2 = { [q]: "Region" };
    n = { [q]: d4 };
    o = {};
    p = [m2];
    _data4 = {
      conditions: [
        [c4, [l2]],
        [c4, p],
        ["aws.partition", p, d4],
        [e4, [{ [q]: "UseFIPS" }, b4]],
        [e4, [{ [q]: "UseDualStack" }, b4]],
        [f4, [m2, "aws-global"]],
        [e4, [{ [q]: "UseGlobalEndpoint" }, b4]],
        [f4, [m2, "eu-central-1"]],
        [e4, [{ fn: g4, argv: [n, "supportsDualStack"] }, b4]],
        [e4, [{ fn: g4, argv: [n, "supportsFIPS"] }, b4]],
        [f4, [m2, "ap-south-1"]],
        [f4, [m2, "eu-north-1"]],
        [f4, [m2, "eu-west-1"]],
        [f4, [m2, "eu-west-2"]],
        [f4, [m2, "eu-west-3"]],
        [f4, [m2, "sa-east-1"]],
        [f4, [m2, h4]],
        [f4, [m2, "us-east-2"]],
        [f4, [m2, "us-west-2"]],
        [f4, [m2, "us-west-1"]],
        [f4, [m2, "ca-central-1"]],
        [f4, [m2, "ap-southeast-1"]],
        [f4, [m2, "ap-northeast-1"]],
        [f4, [m2, "ap-southeast-2"]],
        [f4, [{ fn: g4, argv: [n, "name"] }, "aws-us-gov"]]
      ],
      results: [
        [a4],
        ["https://sts.amazonaws.com", { authSchemes: [{ name: i4, signingName: j4, signingRegion: h4 }] }],
        [k4, { authSchemes: [{ name: i4, signingName: j4, signingRegion: "{Region}" }] }],
        [a4, "Invalid Configuration: FIPS and custom endpoint are not supported"],
        [a4, "Invalid Configuration: Dualstack and custom endpoint are not supported"],
        [l2, o],
        ["https://sts-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", o],
        [a4, "FIPS and DualStack are enabled, but this partition does not support one or both"],
        ["https://sts.{Region}.amazonaws.com", o],
        ["https://sts-fips.{Region}.{PartitionResult#dnsSuffix}", o],
        [a4, "FIPS is enabled but this partition does not support FIPS"],
        ["https://sts.{Region}.{PartitionResult#dualStackDnsSuffix}", o],
        [a4, "DualStack is enabled but this partition does not support DualStack"],
        [k4, o],
        [a4, "Invalid Configuration: Missing Region"]
      ]
    };
    root4 = 2;
    r4 = 1e8;
    nodes4 = new Int32Array([
      -1,
      1,
      -1,
      0,
      30,
      3,
      1,
      4,
      r4 + 14,
      2,
      5,
      r4 + 14,
      3,
      25,
      6,
      4,
      24,
      7,
      5,
      r4 + 1,
      8,
      6,
      9,
      r4 + 13,
      7,
      r4 + 1,
      10,
      10,
      r4 + 1,
      11,
      11,
      r4 + 1,
      12,
      12,
      r4 + 1,
      13,
      13,
      r4 + 1,
      14,
      14,
      r4 + 1,
      15,
      15,
      r4 + 1,
      16,
      16,
      r4 + 1,
      17,
      17,
      r4 + 1,
      18,
      18,
      r4 + 1,
      19,
      19,
      r4 + 1,
      20,
      20,
      r4 + 1,
      21,
      21,
      r4 + 1,
      22,
      22,
      r4 + 1,
      23,
      23,
      r4 + 1,
      r4 + 2,
      8,
      r4 + 11,
      r4 + 12,
      4,
      28,
      26,
      9,
      27,
      r4 + 10,
      24,
      r4 + 8,
      r4 + 9,
      8,
      29,
      r4 + 7,
      9,
      r4 + 6,
      r4 + 7,
      3,
      r4 + 3,
      31,
      4,
      r4 + 4,
      r4 + 5
    ]);
    bdd4 = BinaryDecisionDiagram.from(nodes4, root4, _data4.conditions, _data4.results);
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/endpoint/endpointResolver.js
var cache4, defaultEndpointResolver4;
var init_endpointResolver3 = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/endpoint/endpointResolver.js"() {
    init_dist_es22();
    init_dist_es21();
    init_bdd3();
    cache4 = new EndpointCache({
      size: 50,
      params: ["Endpoint", "Region", "UseDualStack", "UseFIPS", "UseGlobalEndpoint"]
    });
    defaultEndpointResolver4 = /* @__PURE__ */ __name((endpointParams, context = {}) => {
      return cache4.get(endpointParams, () => decideEndpoint(bdd4, {
        endpointParams,
        logger: context.logger
      }));
    }, "defaultEndpointResolver");
    customEndpointFunctions.aws = awsEndpointFunctions;
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/auth/httpAuthSchemeProvider.js
function createAwsAuthSigv4HttpAuthOption4(authParameters) {
  return {
    schemeId: "aws.auth#sigv4",
    signingProperties: {
      name: "sts",
      region: authParameters.region
    },
    propertiesExtractor: /* @__PURE__ */ __name((config, context) => ({
      signingProperties: {
        config,
        context
      }
    }), "propertiesExtractor")
  };
}
function createAwsAuthSigv4aHttpAuthOption2(authParameters) {
  return {
    schemeId: "aws.auth#sigv4a",
    signingProperties: {
      name: "sts",
      region: authParameters.region
    },
    propertiesExtractor: /* @__PURE__ */ __name((config, context) => ({
      signingProperties: {
        config,
        context
      }
    }), "propertiesExtractor")
  };
}
function createSmithyApiNoAuthHttpAuthOption3(authParameters) {
  return {
    schemeId: "smithy.api#noAuth"
  };
}
var createEndpointRuleSetHttpAuthSchemeParametersProvider2, _defaultSTSHttpAuthSchemeParametersProvider, defaultSTSHttpAuthSchemeParametersProvider, createEndpointRuleSetHttpAuthSchemeProvider2, _defaultSTSHttpAuthSchemeProvider, defaultSTSHttpAuthSchemeProvider, resolveStsAuthConfig, resolveHttpAuthSchemeConfig4;
var init_httpAuthSchemeProvider3 = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/auth/httpAuthSchemeProvider.js"() {
    init_httpAuthSchemes2();
    init_dist_es40();
    init_dist_es33();
    init_dist_es6();
    init_endpointResolver3();
    init_STSClient();
    createEndpointRuleSetHttpAuthSchemeParametersProvider2 = /* @__PURE__ */ __name((defaultHttpAuthSchemeParametersProvider) => async (config, context, input) => {
      if (!input) {
        throw new Error("Could not find `input` for `defaultEndpointRuleSetHttpAuthSchemeParametersProvider`");
      }
      const defaultParameters = await defaultHttpAuthSchemeParametersProvider(config, context, input);
      const instructionsFn = getSmithyContext(context)?.commandInstance?.constructor?.getEndpointParameterInstructions;
      if (!instructionsFn) {
        throw new Error(`getEndpointParameterInstructions() is not defined on '${context.commandName}'`);
      }
      const endpointParameters = await resolveParams(input, { getEndpointParameterInstructions: instructionsFn }, config);
      return Object.assign(defaultParameters, endpointParameters);
    }, "createEndpointRuleSetHttpAuthSchemeParametersProvider");
    _defaultSTSHttpAuthSchemeParametersProvider = /* @__PURE__ */ __name(async (config, context, input) => {
      return {
        operation: getSmithyContext(context).operation,
        region: await normalizeProvider(config.region)() || (() => {
          throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
        })()
      };
    }, "_defaultSTSHttpAuthSchemeParametersProvider");
    defaultSTSHttpAuthSchemeParametersProvider = createEndpointRuleSetHttpAuthSchemeParametersProvider2(_defaultSTSHttpAuthSchemeParametersProvider);
    __name(createAwsAuthSigv4HttpAuthOption4, "createAwsAuthSigv4HttpAuthOption");
    __name(createAwsAuthSigv4aHttpAuthOption2, "createAwsAuthSigv4aHttpAuthOption");
    __name(createSmithyApiNoAuthHttpAuthOption3, "createSmithyApiNoAuthHttpAuthOption");
    createEndpointRuleSetHttpAuthSchemeProvider2 = /* @__PURE__ */ __name((defaultEndpointResolver6, defaultHttpAuthSchemeResolver, createHttpAuthOptionFunctions) => {
      const endpointRuleSetHttpAuthSchemeProvider = /* @__PURE__ */ __name((authParameters) => {
        const endpoint = defaultEndpointResolver6(authParameters);
        const authSchemes = endpoint.properties?.authSchemes;
        if (!authSchemes) {
          return defaultHttpAuthSchemeResolver(authParameters);
        }
        const options = [];
        for (const scheme of authSchemes) {
          const { name: resolvedName, properties = {}, ...rest } = scheme;
          const name = resolvedName.toLowerCase();
          if (resolvedName !== name) {
            console.warn(`HttpAuthScheme has been normalized with lowercasing: '${resolvedName}' to '${name}'`);
          }
          let schemeId;
          if (name === "sigv4a") {
            schemeId = "aws.auth#sigv4a";
            const sigv4Present = authSchemes.find((s) => {
              const name2 = s.name.toLowerCase();
              return name2 !== "sigv4a" && name2.startsWith("sigv4");
            });
            if (SignatureV4MultiRegion.sigv4aDependency() === "none" && sigv4Present) {
              continue;
            }
          } else if (name.startsWith("sigv4")) {
            schemeId = "aws.auth#sigv4";
          } else {
            throw new Error(`Unknown HttpAuthScheme found in '@smithy.rules#endpointRuleSet': '${name}'`);
          }
          const createOption = createHttpAuthOptionFunctions[schemeId];
          if (!createOption) {
            throw new Error(`Could not find HttpAuthOption create function for '${schemeId}'`);
          }
          const option = createOption(authParameters);
          option.schemeId = schemeId;
          option.signingProperties = { ...option.signingProperties || {}, ...rest, ...properties };
          options.push(option);
        }
        return options;
      }, "endpointRuleSetHttpAuthSchemeProvider");
      return endpointRuleSetHttpAuthSchemeProvider;
    }, "createEndpointRuleSetHttpAuthSchemeProvider");
    _defaultSTSHttpAuthSchemeProvider = /* @__PURE__ */ __name((authParameters) => {
      const options = [];
      switch (authParameters.operation) {
        case "AssumeRoleWithWebIdentity": {
          options.push(createSmithyApiNoAuthHttpAuthOption3(authParameters));
          options.push(createAwsAuthSigv4aHttpAuthOption2(authParameters));
          break;
        }
        default: {
          options.push(createAwsAuthSigv4HttpAuthOption4(authParameters));
          options.push(createAwsAuthSigv4aHttpAuthOption2(authParameters));
        }
      }
      return options;
    }, "_defaultSTSHttpAuthSchemeProvider");
    defaultSTSHttpAuthSchemeProvider = createEndpointRuleSetHttpAuthSchemeProvider2(defaultEndpointResolver4, _defaultSTSHttpAuthSchemeProvider, {
      "aws.auth#sigv4": createAwsAuthSigv4HttpAuthOption4,
      "aws.auth#sigv4a": createAwsAuthSigv4aHttpAuthOption2,
      "smithy.api#noAuth": createSmithyApiNoAuthHttpAuthOption3
    });
    resolveStsAuthConfig = /* @__PURE__ */ __name((input) => Object.assign(input, {
      stsClientCtor: STSClient
    }), "resolveStsAuthConfig");
    resolveHttpAuthSchemeConfig4 = /* @__PURE__ */ __name((config) => {
      const config_0 = resolveStsAuthConfig(config);
      const config_1 = resolveAwsSdkSigV4Config(config_0);
      const config_2 = resolveAwsSdkSigV4AConfig(config_1);
      return Object.assign(config_2, {
        authSchemePreference: normalizeProvider(config.authSchemePreference ?? [])
      });
    }, "resolveHttpAuthSchemeConfig");
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/endpoint/EndpointParameters.js
var resolveClientEndpointParameters4, commonParams4;
var init_EndpointParameters3 = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/endpoint/EndpointParameters.js"() {
    resolveClientEndpointParameters4 = /* @__PURE__ */ __name((options) => {
      return Object.assign(options, {
        useDualstackEndpoint: options.useDualstackEndpoint ?? false,
        useFipsEndpoint: options.useFipsEndpoint ?? false,
        useGlobalEndpoint: options.useGlobalEndpoint ?? false,
        defaultSigningName: "sts"
      });
    }, "resolveClientEndpointParameters");
    commonParams4 = {
      UseGlobalEndpoint: { type: "builtInParams", name: "useGlobalEndpoint" },
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
    };
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/models/STSServiceException.js
var STSServiceException;
var init_STSServiceException = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/models/STSServiceException.js"() {
    init_dist_es35();
    STSServiceException = class _STSServiceException extends ServiceException {
      static {
        __name(this, "STSServiceException");
      }
      constructor(options) {
        super(options);
        Object.setPrototypeOf(this, _STSServiceException.prototype);
      }
    };
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/models/errors.js
var ExpiredTokenException2, MalformedPolicyDocumentException, PackedPolicyTooLargeException, RegionDisabledException, IDPRejectedClaimException, InvalidIdentityTokenException, IDPCommunicationErrorException;
var init_errors3 = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/models/errors.js"() {
    init_STSServiceException();
    ExpiredTokenException2 = class _ExpiredTokenException extends STSServiceException {
      static {
        __name(this, "ExpiredTokenException");
      }
      name = "ExpiredTokenException";
      $fault = "client";
      constructor(opts) {
        super({
          name: "ExpiredTokenException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _ExpiredTokenException.prototype);
      }
    };
    MalformedPolicyDocumentException = class _MalformedPolicyDocumentException extends STSServiceException {
      static {
        __name(this, "MalformedPolicyDocumentException");
      }
      name = "MalformedPolicyDocumentException";
      $fault = "client";
      constructor(opts) {
        super({
          name: "MalformedPolicyDocumentException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _MalformedPolicyDocumentException.prototype);
      }
    };
    PackedPolicyTooLargeException = class _PackedPolicyTooLargeException extends STSServiceException {
      static {
        __name(this, "PackedPolicyTooLargeException");
      }
      name = "PackedPolicyTooLargeException";
      $fault = "client";
      constructor(opts) {
        super({
          name: "PackedPolicyTooLargeException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _PackedPolicyTooLargeException.prototype);
      }
    };
    RegionDisabledException = class _RegionDisabledException extends STSServiceException {
      static {
        __name(this, "RegionDisabledException");
      }
      name = "RegionDisabledException";
      $fault = "client";
      constructor(opts) {
        super({
          name: "RegionDisabledException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _RegionDisabledException.prototype);
      }
    };
    IDPRejectedClaimException = class _IDPRejectedClaimException extends STSServiceException {
      static {
        __name(this, "IDPRejectedClaimException");
      }
      name = "IDPRejectedClaimException";
      $fault = "client";
      constructor(opts) {
        super({
          name: "IDPRejectedClaimException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _IDPRejectedClaimException.prototype);
      }
    };
    InvalidIdentityTokenException = class _InvalidIdentityTokenException extends STSServiceException {
      static {
        __name(this, "InvalidIdentityTokenException");
      }
      name = "InvalidIdentityTokenException";
      $fault = "client";
      constructor(opts) {
        super({
          name: "InvalidIdentityTokenException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _InvalidIdentityTokenException.prototype);
      }
    };
    IDPCommunicationErrorException = class _IDPCommunicationErrorException extends STSServiceException {
      static {
        __name(this, "IDPCommunicationErrorException");
      }
      name = "IDPCommunicationErrorException";
      $fault = "client";
      $retryable = {};
      constructor(opts) {
        super({
          name: "IDPCommunicationErrorException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _IDPCommunicationErrorException.prototype);
      }
    };
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/schemas/schemas_0.js
var _A, _AKI, _AR, _ARI, _ARR, _ARRs, _ARU, _ARWWI, _ARWWIR, _ARWWIRs, _Au, _C, _CA, _DS, _E, _EI, _ETE2, _IDPCEE, _IDPRCE, _IITE, _K, _MPDE, _P, _PA, _PAr, _PC, _PCLT, _PCr, _PDT, _PI, _PPS, _PPTLE, _Pr, _RA, _RDE, _RSN, _SAK, _SFWIT, _SI, _SN, _ST, _T, _TC, _TTK, _Ta, _V, _WIT, _a, _aKST, _aQE, _c3, _cTT, _e3, _hE3, _m2, _pDLT, _s3, _tLT, n03, _s_registry3, STSServiceException$, n0_registry3, ExpiredTokenException$2, IDPCommunicationErrorException$, IDPRejectedClaimException$, InvalidIdentityTokenException$, MalformedPolicyDocumentException$, PackedPolicyTooLargeException$, RegionDisabledException$, errorTypeRegistries3, accessKeySecretType, clientTokenType, AssumedRoleUser$, AssumeRoleRequest$, AssumeRoleResponse$, AssumeRoleWithWebIdentityRequest$, AssumeRoleWithWebIdentityResponse$, Credentials$, PolicyDescriptorType$, ProvidedContext$, Tag$, policyDescriptorListType, ProvidedContextsListType, tagKeyListType, tagListType, AssumeRole$, AssumeRoleWithWebIdentity$;
var init_schemas_03 = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/schemas/schemas_0.js"() {
    init_schema2();
    init_errors3();
    init_STSServiceException();
    _A = "Arn";
    _AKI = "AccessKeyId";
    _AR = "AssumeRole";
    _ARI = "AssumedRoleId";
    _ARR = "AssumeRoleRequest";
    _ARRs = "AssumeRoleResponse";
    _ARU = "AssumedRoleUser";
    _ARWWI = "AssumeRoleWithWebIdentity";
    _ARWWIR = "AssumeRoleWithWebIdentityRequest";
    _ARWWIRs = "AssumeRoleWithWebIdentityResponse";
    _Au = "Audience";
    _C = "Credentials";
    _CA = "ContextAssertion";
    _DS = "DurationSeconds";
    _E = "Expiration";
    _EI = "ExternalId";
    _ETE2 = "ExpiredTokenException";
    _IDPCEE = "IDPCommunicationErrorException";
    _IDPRCE = "IDPRejectedClaimException";
    _IITE = "InvalidIdentityTokenException";
    _K = "Key";
    _MPDE = "MalformedPolicyDocumentException";
    _P = "Policy";
    _PA = "PolicyArns";
    _PAr = "ProviderArn";
    _PC = "ProvidedContexts";
    _PCLT = "ProvidedContextsListType";
    _PCr = "ProvidedContext";
    _PDT = "PolicyDescriptorType";
    _PI = "ProviderId";
    _PPS = "PackedPolicySize";
    _PPTLE = "PackedPolicyTooLargeException";
    _Pr = "Provider";
    _RA = "RoleArn";
    _RDE = "RegionDisabledException";
    _RSN = "RoleSessionName";
    _SAK = "SecretAccessKey";
    _SFWIT = "SubjectFromWebIdentityToken";
    _SI = "SourceIdentity";
    _SN = "SerialNumber";
    _ST = "SessionToken";
    _T = "Tags";
    _TC = "TokenCode";
    _TTK = "TransitiveTagKeys";
    _Ta = "Tag";
    _V = "Value";
    _WIT = "WebIdentityToken";
    _a = "arn";
    _aKST = "accessKeySecretType";
    _aQE = "awsQueryError";
    _c3 = "client";
    _cTT = "clientTokenType";
    _e3 = "error";
    _hE3 = "httpError";
    _m2 = "message";
    _pDLT = "policyDescriptorListType";
    _s3 = "smithy.ts.sdk.synthetic.com.amazonaws.sts";
    _tLT = "tagListType";
    n03 = "com.amazonaws.sts";
    _s_registry3 = TypeRegistry.for(_s3);
    STSServiceException$ = [-3, _s3, "STSServiceException", 0, [], []];
    _s_registry3.registerError(STSServiceException$, STSServiceException);
    n0_registry3 = TypeRegistry.for(n03);
    ExpiredTokenException$2 = [
      -3,
      n03,
      _ETE2,
      { [_aQE]: [`ExpiredTokenException`, 400], [_e3]: _c3, [_hE3]: 400 },
      [_m2],
      [0]
    ];
    n0_registry3.registerError(ExpiredTokenException$2, ExpiredTokenException2);
    IDPCommunicationErrorException$ = [
      -3,
      n03,
      _IDPCEE,
      { [_aQE]: [`IDPCommunicationError`, 400], [_e3]: _c3, [_hE3]: 400 },
      [_m2],
      [0]
    ];
    n0_registry3.registerError(IDPCommunicationErrorException$, IDPCommunicationErrorException);
    IDPRejectedClaimException$ = [
      -3,
      n03,
      _IDPRCE,
      { [_aQE]: [`IDPRejectedClaim`, 403], [_e3]: _c3, [_hE3]: 403 },
      [_m2],
      [0]
    ];
    n0_registry3.registerError(IDPRejectedClaimException$, IDPRejectedClaimException);
    InvalidIdentityTokenException$ = [
      -3,
      n03,
      _IITE,
      { [_aQE]: [`InvalidIdentityToken`, 400], [_e3]: _c3, [_hE3]: 400 },
      [_m2],
      [0]
    ];
    n0_registry3.registerError(InvalidIdentityTokenException$, InvalidIdentityTokenException);
    MalformedPolicyDocumentException$ = [
      -3,
      n03,
      _MPDE,
      { [_aQE]: [`MalformedPolicyDocument`, 400], [_e3]: _c3, [_hE3]: 400 },
      [_m2],
      [0]
    ];
    n0_registry3.registerError(MalformedPolicyDocumentException$, MalformedPolicyDocumentException);
    PackedPolicyTooLargeException$ = [
      -3,
      n03,
      _PPTLE,
      { [_aQE]: [`PackedPolicyTooLarge`, 400], [_e3]: _c3, [_hE3]: 400 },
      [_m2],
      [0]
    ];
    n0_registry3.registerError(PackedPolicyTooLargeException$, PackedPolicyTooLargeException);
    RegionDisabledException$ = [
      -3,
      n03,
      _RDE,
      { [_aQE]: [`RegionDisabledException`, 403], [_e3]: _c3, [_hE3]: 403 },
      [_m2],
      [0]
    ];
    n0_registry3.registerError(RegionDisabledException$, RegionDisabledException);
    errorTypeRegistries3 = [_s_registry3, n0_registry3];
    accessKeySecretType = [0, n03, _aKST, 8, 0];
    clientTokenType = [0, n03, _cTT, 8, 0];
    AssumedRoleUser$ = [3, n03, _ARU, 0, [_ARI, _A], [0, 0], 2];
    AssumeRoleRequest$ = [
      3,
      n03,
      _ARR,
      0,
      [_RA, _RSN, _PA, _P, _DS, _T, _TTK, _EI, _SN, _TC, _SI, _PC],
      [0, 0, () => policyDescriptorListType, 0, 1, () => tagListType, 64 | 0, 0, 0, 0, 0, () => ProvidedContextsListType],
      2
    ];
    AssumeRoleResponse$ = [
      3,
      n03,
      _ARRs,
      0,
      [_C, _ARU, _PPS, _SI],
      [[() => Credentials$, 0], () => AssumedRoleUser$, 1, 0]
    ];
    AssumeRoleWithWebIdentityRequest$ = [
      3,
      n03,
      _ARWWIR,
      0,
      [_RA, _RSN, _WIT, _PI, _PA, _P, _DS],
      [0, 0, [() => clientTokenType, 0], 0, () => policyDescriptorListType, 0, 1],
      3
    ];
    AssumeRoleWithWebIdentityResponse$ = [
      3,
      n03,
      _ARWWIRs,
      0,
      [_C, _SFWIT, _ARU, _PPS, _Pr, _Au, _SI],
      [[() => Credentials$, 0], 0, () => AssumedRoleUser$, 1, 0, 0, 0]
    ];
    Credentials$ = [
      3,
      n03,
      _C,
      0,
      [_AKI, _SAK, _ST, _E],
      [0, [() => accessKeySecretType, 0], 0, 4],
      4
    ];
    PolicyDescriptorType$ = [3, n03, _PDT, 0, [_a], [0]];
    ProvidedContext$ = [3, n03, _PCr, 0, [_PAr, _CA], [0, 0]];
    Tag$ = [3, n03, _Ta, 0, [_K, _V], [0, 0], 2];
    policyDescriptorListType = [1, n03, _pDLT, 0, () => PolicyDescriptorType$];
    ProvidedContextsListType = [1, n03, _PCLT, 0, () => ProvidedContext$];
    tagKeyListType = 64 | 0;
    tagListType = [1, n03, _tLT, 0, () => Tag$];
    AssumeRole$ = [9, n03, _AR, 0, () => AssumeRoleRequest$, () => AssumeRoleResponse$];
    AssumeRoleWithWebIdentity$ = [
      9,
      n03,
      _ARWWI,
      0,
      () => AssumeRoleWithWebIdentityRequest$,
      () => AssumeRoleWithWebIdentityResponse$
    ];
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/runtimeConfig.shared.js
var getRuntimeConfig5;
var init_runtimeConfig_shared3 = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/runtimeConfig.shared.js"() {
    init_httpAuthSchemes2();
    init_protocols2();
    init_dist_es40();
    init_dist_es20();
    init_dist_es35();
    init_dist_es18();
    init_dist_es10();
    init_dist_es9();
    init_httpAuthSchemeProvider3();
    init_endpointResolver3();
    init_schemas_03();
    getRuntimeConfig5 = /* @__PURE__ */ __name((config) => {
      return {
        apiVersion: "2011-06-15",
        base64Decoder: config?.base64Decoder ?? fromBase64,
        base64Encoder: config?.base64Encoder ?? toBase64,
        disableHostPrefix: config?.disableHostPrefix ?? false,
        endpointProvider: config?.endpointProvider ?? defaultEndpointResolver4,
        extensions: config?.extensions ?? [],
        httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? defaultSTSHttpAuthSchemeProvider,
        httpAuthSchemes: config?.httpAuthSchemes ?? [
          {
            schemeId: "aws.auth#sigv4",
            identityProvider: /* @__PURE__ */ __name((ipc) => ipc.getIdentityProvider("aws.auth#sigv4"), "identityProvider"),
            signer: new AwsSdkSigV4Signer()
          },
          {
            schemeId: "aws.auth#sigv4a",
            identityProvider: /* @__PURE__ */ __name((ipc) => ipc.getIdentityProvider("aws.auth#sigv4a"), "identityProvider"),
            signer: new AwsSdkSigV4ASigner()
          },
          {
            schemeId: "smithy.api#noAuth",
            identityProvider: /* @__PURE__ */ __name((ipc) => ipc.getIdentityProvider("smithy.api#noAuth") || (async () => ({})), "identityProvider"),
            signer: new NoAuthSigner()
          }
        ],
        logger: config?.logger ?? new NoOpLogger(),
        protocol: config?.protocol ?? AwsQueryProtocol,
        protocolSettings: config?.protocolSettings ?? {
          defaultNamespace: "com.amazonaws.sts",
          errorTypeRegistries: errorTypeRegistries3,
          xmlNamespace: "https://sts.amazonaws.com/doc/2011-06-15/",
          version: "2011-06-15",
          serviceTarget: "AWSSecurityTokenServiceV20110615"
        },
        serviceId: config?.serviceId ?? "STS",
        signerConstructor: config?.signerConstructor ?? SignatureV4MultiRegion,
        urlParser: config?.urlParser ?? parseUrl,
        utf8Decoder: config?.utf8Decoder ?? fromUtf8,
        utf8Encoder: config?.utf8Encoder ?? toUtf8
      };
    }, "getRuntimeConfig");
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/runtimeConfig.js
var getRuntimeConfig6;
var init_runtimeConfig3 = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/runtimeConfig.js"() {
    init_package();
    init_client2();
    init_httpAuthSchemes2();
    init_dist_es44();
    init_dist_es27();
    init_dist_es20();
    init_dist_es45();
    init_dist_es36();
    init_dist_es31();
    init_dist_es13();
    init_dist_es35();
    init_dist_es46();
    init_dist_es47();
    init_dist_es24();
    init_runtimeConfig_shared3();
    getRuntimeConfig6 = /* @__PURE__ */ __name((config) => {
      emitWarningIfUnsupportedVersion2(process.version);
      const defaultsMode = resolveDefaultsModeConfig(config);
      const defaultConfigProvider = /* @__PURE__ */ __name(() => defaultsMode().then(loadConfigsForDefaultMode), "defaultConfigProvider");
      const clientSharedValues = getRuntimeConfig5(config);
      emitWarningIfUnsupportedVersion(process.version);
      const loaderConfig = {
        profile: config?.profile,
        logger: clientSharedValues.logger
      };
      return {
        ...clientSharedValues,
        ...config,
        runtime: "node",
        defaultsMode,
        authSchemePreference: config?.authSchemePreference ?? loadConfig(NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, loaderConfig),
        bodyLengthChecker: config?.bodyLengthChecker ?? calculateBodyLength,
        defaultUserAgentProvider: config?.defaultUserAgentProvider ?? createDefaultUserAgentProvider({ serviceId: clientSharedValues.serviceId, clientVersion: package_default2.version }),
        httpAuthSchemes: config?.httpAuthSchemes ?? [
          {
            schemeId: "aws.auth#sigv4",
            identityProvider: /* @__PURE__ */ __name((ipc) => ipc.getIdentityProvider("aws.auth#sigv4") || (async (idProps) => await config.credentialDefaultProvider(idProps?.__config || {})()), "identityProvider"),
            signer: new AwsSdkSigV4Signer()
          },
          {
            schemeId: "aws.auth#sigv4a",
            identityProvider: /* @__PURE__ */ __name((ipc) => ipc.getIdentityProvider("aws.auth#sigv4a"), "identityProvider"),
            signer: new AwsSdkSigV4ASigner()
          },
          {
            schemeId: "smithy.api#noAuth",
            identityProvider: /* @__PURE__ */ __name((ipc) => ipc.getIdentityProvider("smithy.api#noAuth") || (async () => ({})), "identityProvider"),
            signer: new NoAuthSigner()
          }
        ],
        maxAttempts: config?.maxAttempts ?? loadConfig(NODE_MAX_ATTEMPT_CONFIG_OPTIONS, config),
        region: config?.region ?? loadConfig(NODE_REGION_CONFIG_OPTIONS, { ...NODE_REGION_CONFIG_FILE_OPTIONS, ...loaderConfig }),
        requestHandler: NodeHttpHandler.create(config?.requestHandler ?? defaultConfigProvider),
        retryMode: config?.retryMode ?? loadConfig({
          ...NODE_RETRY_MODE_CONFIG_OPTIONS,
          default: /* @__PURE__ */ __name(async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE, "default")
        }, config),
        sha256: config?.sha256 ?? Hash.bind(null, "sha256"),
        sigv4aSigningRegionSet: config?.sigv4aSigningRegionSet ?? loadConfig(NODE_SIGV4A_CONFIG_OPTIONS, loaderConfig),
        streamCollector: config?.streamCollector ?? streamCollector,
        useDualstackEndpoint: config?.useDualstackEndpoint ?? loadConfig(NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, loaderConfig),
        useFipsEndpoint: config?.useFipsEndpoint ?? loadConfig(NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, loaderConfig),
        userAgentAppId: config?.userAgentAppId ?? loadConfig(NODE_APP_ID_CONFIG_OPTIONS, loaderConfig)
      };
    }, "getRuntimeConfig");
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/auth/httpAuthExtensionConfiguration.js
var getHttpAuthExtensionConfiguration3, resolveHttpAuthRuntimeConfig3;
var init_httpAuthExtensionConfiguration3 = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/auth/httpAuthExtensionConfiguration.js"() {
    getHttpAuthExtensionConfiguration3 = /* @__PURE__ */ __name((runtimeConfig) => {
      const _httpAuthSchemes = runtimeConfig.httpAuthSchemes;
      let _httpAuthSchemeProvider = runtimeConfig.httpAuthSchemeProvider;
      let _credentials = runtimeConfig.credentials;
      return {
        setHttpAuthScheme(httpAuthScheme) {
          const index = _httpAuthSchemes.findIndex((scheme) => scheme.schemeId === httpAuthScheme.schemeId);
          if (index === -1) {
            _httpAuthSchemes.push(httpAuthScheme);
          } else {
            _httpAuthSchemes.splice(index, 1, httpAuthScheme);
          }
        },
        httpAuthSchemes() {
          return _httpAuthSchemes;
        },
        setHttpAuthSchemeProvider(httpAuthSchemeProvider) {
          _httpAuthSchemeProvider = httpAuthSchemeProvider;
        },
        httpAuthSchemeProvider() {
          return _httpAuthSchemeProvider;
        },
        setCredentials(credentials) {
          _credentials = credentials;
        },
        credentials() {
          return _credentials;
        }
      };
    }, "getHttpAuthExtensionConfiguration");
    resolveHttpAuthRuntimeConfig3 = /* @__PURE__ */ __name((config) => {
      return {
        httpAuthSchemes: config.httpAuthSchemes(),
        httpAuthSchemeProvider: config.httpAuthSchemeProvider(),
        credentials: config.credentials()
      };
    }, "resolveHttpAuthRuntimeConfig");
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/runtimeExtensions.js
var resolveRuntimeExtensions3;
var init_runtimeExtensions3 = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/runtimeExtensions.js"() {
    init_dist_es48();
    init_dist_es2();
    init_dist_es35();
    init_httpAuthExtensionConfiguration3();
    resolveRuntimeExtensions3 = /* @__PURE__ */ __name((runtimeConfig, extensions) => {
      const extensionConfiguration = Object.assign(getAwsRegionExtensionConfiguration(runtimeConfig), getDefaultExtensionConfiguration(runtimeConfig), getHttpHandlerExtensionConfiguration(runtimeConfig), getHttpAuthExtensionConfiguration3(runtimeConfig));
      extensions.forEach((extension) => extension.configure(extensionConfiguration));
      return Object.assign(runtimeConfig, resolveAwsRegionExtensionConfiguration(extensionConfiguration), resolveDefaultRuntimeConfig(extensionConfiguration), resolveHttpHandlerRuntimeConfig(extensionConfiguration), resolveHttpAuthRuntimeConfig3(extensionConfiguration));
    }, "resolveRuntimeExtensions");
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/STSClient.js
var STSClient;
var init_STSClient = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/STSClient.js"() {
    init_dist_es3();
    init_dist_es4();
    init_dist_es5();
    init_dist_es25();
    init_dist_es27();
    init_dist_es20();
    init_schema2();
    init_dist_es28();
    init_dist_es33();
    init_dist_es36();
    init_dist_es35();
    init_httpAuthSchemeProvider3();
    init_EndpointParameters3();
    init_runtimeConfig3();
    init_runtimeExtensions3();
    STSClient = class extends Client {
      static {
        __name(this, "STSClient");
      }
      config;
      constructor(...[configuration]) {
        const _config_0 = getRuntimeConfig6(configuration || {});
        super(_config_0);
        this.initConfig = _config_0;
        const _config_1 = resolveClientEndpointParameters4(_config_0);
        const _config_2 = resolveUserAgentConfig(_config_1);
        const _config_3 = resolveRetryConfig(_config_2);
        const _config_4 = resolveRegionConfig(_config_3);
        const _config_5 = resolveHostHeaderConfig(_config_4);
        const _config_6 = resolveEndpointConfig(_config_5);
        const _config_7 = resolveHttpAuthSchemeConfig4(_config_6);
        const _config_8 = resolveRuntimeExtensions3(_config_7, configuration?.extensions || []);
        this.config = _config_8;
        this.middlewareStack.use(getSchemaSerdePlugin(this.config));
        this.middlewareStack.use(getUserAgentPlugin(this.config));
        this.middlewareStack.use(getRetryPlugin(this.config));
        this.middlewareStack.use(getContentLengthPlugin(this.config));
        this.middlewareStack.use(getHostHeaderPlugin(this.config));
        this.middlewareStack.use(getLoggerPlugin(this.config));
        this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
        this.middlewareStack.use(getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
          httpAuthSchemeParametersProvider: defaultSTSHttpAuthSchemeParametersProvider,
          identityProviderConfigProvider: /* @__PURE__ */ __name(async (config) => new DefaultIdentityProviderConfig({
            "aws.auth#sigv4": config.credentials,
            "aws.auth#sigv4a": config.credentials
          }), "identityProviderConfigProvider")
        }));
        this.middlewareStack.use(getHttpSigningPlugin(this.config));
      }
      destroy() {
        super.destroy();
      }
    };
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/commands/AssumeRoleCommand.js
var AssumeRoleCommand;
var init_AssumeRoleCommand = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/commands/AssumeRoleCommand.js"() {
    init_dist_es33();
    init_dist_es35();
    init_EndpointParameters3();
    init_schemas_03();
    AssumeRoleCommand = class extends Command.classBuilder().ep(commonParams4).m(function(Command2, cs, config, o2) {
      return [getEndpointPlugin(config, Command2.getEndpointParameterInstructions())];
    }).s("AWSSecurityTokenServiceV20110615", "AssumeRole", {}).n("STSClient", "AssumeRoleCommand").sc(AssumeRole$).build() {
      static {
        __name(this, "AssumeRoleCommand");
      }
    };
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/commands/AssumeRoleWithWebIdentityCommand.js
var AssumeRoleWithWebIdentityCommand;
var init_AssumeRoleWithWebIdentityCommand = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/commands/AssumeRoleWithWebIdentityCommand.js"() {
    init_dist_es33();
    init_dist_es35();
    init_EndpointParameters3();
    init_schemas_03();
    AssumeRoleWithWebIdentityCommand = class extends Command.classBuilder().ep(commonParams4).m(function(Command2, cs, config, o2) {
      return [getEndpointPlugin(config, Command2.getEndpointParameterInstructions())];
    }).s("AWSSecurityTokenServiceV20110615", "AssumeRoleWithWebIdentity", {}).n("STSClient", "AssumeRoleWithWebIdentityCommand").sc(AssumeRoleWithWebIdentity$).build() {
      static {
        __name(this, "AssumeRoleWithWebIdentityCommand");
      }
    };
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/STS.js
var commands3, STS;
var init_STS = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/STS.js"() {
    init_dist_es35();
    init_AssumeRoleCommand();
    init_AssumeRoleWithWebIdentityCommand();
    init_STSClient();
    commands3 = {
      AssumeRoleCommand,
      AssumeRoleWithWebIdentityCommand
    };
    STS = class extends STSClient {
      static {
        __name(this, "STS");
      }
    };
    createAggregatedClient(commands3, STS);
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/commands/index.js
var init_commands3 = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/commands/index.js"() {
    init_AssumeRoleCommand();
    init_AssumeRoleWithWebIdentityCommand();
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/models/models_0.js
var init_models_03 = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/models/models_0.js"() {
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/defaultStsRoleAssumers.js
var getAccountIdFromAssumedRoleUser, resolveRegion, getDefaultRoleAssumer, getDefaultRoleAssumerWithWebIdentity, isH2;
var init_defaultStsRoleAssumers = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/defaultStsRoleAssumers.js"() {
    init_client2();
    init_dist_es48();
    init_AssumeRoleCommand();
    init_AssumeRoleWithWebIdentityCommand();
    getAccountIdFromAssumedRoleUser = /* @__PURE__ */ __name((assumedRoleUser) => {
      if (typeof assumedRoleUser?.Arn === "string") {
        const arnComponents = assumedRoleUser.Arn.split(":");
        if (arnComponents.length > 4 && arnComponents[4] !== "") {
          return arnComponents[4];
        }
      }
      return void 0;
    }, "getAccountIdFromAssumedRoleUser");
    resolveRegion = /* @__PURE__ */ __name(async (_region, _parentRegion, credentialProviderLogger, loaderConfig = {}) => {
      const region = typeof _region === "function" ? await _region() : _region;
      const parentRegion = typeof _parentRegion === "function" ? await _parentRegion() : _parentRegion;
      let stsDefaultRegion = "";
      const resolvedRegion = region ?? parentRegion ?? (stsDefaultRegion = await stsRegionDefaultResolver(loaderConfig)());
      credentialProviderLogger?.debug?.("@aws-sdk/client-sts::resolveRegion", "accepting first of:", `${region} (credential provider clientConfig)`, `${parentRegion} (contextual client)`, `${stsDefaultRegion} (STS default: AWS_REGION, profile region, or us-east-1)`);
      return resolvedRegion;
    }, "resolveRegion");
    getDefaultRoleAssumer = /* @__PURE__ */ __name((stsOptions, STSClient2) => {
      let stsClient;
      let closureSourceCreds;
      return async (sourceCreds, params) => {
        closureSourceCreds = sourceCreds;
        if (!stsClient) {
          const { logger: logger2 = stsOptions?.parentClientConfig?.logger, profile = stsOptions?.parentClientConfig?.profile, region, requestHandler = stsOptions?.parentClientConfig?.requestHandler, credentialProviderLogger, userAgentAppId = stsOptions?.parentClientConfig?.userAgentAppId } = stsOptions;
          const resolvedRegion = await resolveRegion(region, stsOptions?.parentClientConfig?.region, credentialProviderLogger, {
            logger: logger2,
            profile
          });
          const isCompatibleRequestHandler = !isH2(requestHandler);
          stsClient = new STSClient2({
            ...stsOptions,
            userAgentAppId,
            profile,
            credentialDefaultProvider: /* @__PURE__ */ __name(() => async () => closureSourceCreds, "credentialDefaultProvider"),
            region: resolvedRegion,
            requestHandler: isCompatibleRequestHandler ? requestHandler : void 0,
            logger: logger2
          });
        }
        const { Credentials, AssumedRoleUser } = await stsClient.send(new AssumeRoleCommand(params));
        if (!Credentials || !Credentials.AccessKeyId || !Credentials.SecretAccessKey) {
          throw new Error(`Invalid response from STS.assumeRole call with role ${params.RoleArn}`);
        }
        const accountId = getAccountIdFromAssumedRoleUser(AssumedRoleUser);
        const credentials = {
          accessKeyId: Credentials.AccessKeyId,
          secretAccessKey: Credentials.SecretAccessKey,
          sessionToken: Credentials.SessionToken,
          expiration: Credentials.Expiration,
          ...Credentials.CredentialScope && { credentialScope: Credentials.CredentialScope },
          ...accountId && { accountId }
        };
        setCredentialFeature(credentials, "CREDENTIALS_STS_ASSUME_ROLE", "i");
        return credentials;
      };
    }, "getDefaultRoleAssumer");
    getDefaultRoleAssumerWithWebIdentity = /* @__PURE__ */ __name((stsOptions, STSClient2) => {
      let stsClient;
      return async (params) => {
        if (!stsClient) {
          const { logger: logger2 = stsOptions?.parentClientConfig?.logger, profile = stsOptions?.parentClientConfig?.profile, region, requestHandler = stsOptions?.parentClientConfig?.requestHandler, credentialProviderLogger, userAgentAppId = stsOptions?.parentClientConfig?.userAgentAppId } = stsOptions;
          const resolvedRegion = await resolveRegion(region, stsOptions?.parentClientConfig?.region, credentialProviderLogger, {
            logger: logger2,
            profile
          });
          const isCompatibleRequestHandler = !isH2(requestHandler);
          stsClient = new STSClient2({
            ...stsOptions,
            userAgentAppId,
            profile,
            region: resolvedRegion,
            requestHandler: isCompatibleRequestHandler ? requestHandler : void 0,
            logger: logger2
          });
        }
        const { Credentials, AssumedRoleUser } = await stsClient.send(new AssumeRoleWithWebIdentityCommand(params));
        if (!Credentials || !Credentials.AccessKeyId || !Credentials.SecretAccessKey) {
          throw new Error(`Invalid response from STS.assumeRoleWithWebIdentity call with role ${params.RoleArn}`);
        }
        const accountId = getAccountIdFromAssumedRoleUser(AssumedRoleUser);
        const credentials = {
          accessKeyId: Credentials.AccessKeyId,
          secretAccessKey: Credentials.SecretAccessKey,
          sessionToken: Credentials.SessionToken,
          expiration: Credentials.Expiration,
          ...Credentials.CredentialScope && { credentialScope: Credentials.CredentialScope },
          ...accountId && { accountId }
        };
        if (accountId) {
          setCredentialFeature(credentials, "RESOLVED_ACCOUNT_ID", "T");
        }
        setCredentialFeature(credentials, "CREDENTIALS_STS_ASSUME_ROLE_WEB_ID", "k");
        return credentials;
      };
    }, "getDefaultRoleAssumerWithWebIdentity");
    isH2 = /* @__PURE__ */ __name((requestHandler) => {
      return requestHandler?.metadata?.handlerProtocol === "h2";
    }, "isH2");
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/defaultRoleAssumers.js
var getCustomizableStsClientCtor, getDefaultRoleAssumer2, getDefaultRoleAssumerWithWebIdentity2, decorateDefaultCredentialProvider;
var init_defaultRoleAssumers = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/defaultRoleAssumers.js"() {
    init_defaultStsRoleAssumers();
    init_STSClient();
    getCustomizableStsClientCtor = /* @__PURE__ */ __name((baseCtor, customizations) => {
      if (!customizations)
        return baseCtor;
      else
        return class CustomizableSTSClient extends baseCtor {
          static {
            __name(this, "CustomizableSTSClient");
          }
          constructor(config) {
            super(config);
            for (const customization of customizations) {
              this.middlewareStack.use(customization);
            }
          }
        };
    }, "getCustomizableStsClientCtor");
    getDefaultRoleAssumer2 = /* @__PURE__ */ __name((stsOptions = {}, stsPlugins) => getDefaultRoleAssumer(stsOptions, getCustomizableStsClientCtor(STSClient, stsPlugins)), "getDefaultRoleAssumer");
    getDefaultRoleAssumerWithWebIdentity2 = /* @__PURE__ */ __name((stsOptions = {}, stsPlugins) => getDefaultRoleAssumerWithWebIdentity(stsOptions, getCustomizableStsClientCtor(STSClient, stsPlugins)), "getDefaultRoleAssumerWithWebIdentity");
    decorateDefaultCredentialProvider = /* @__PURE__ */ __name((provider) => (input) => provider({
      roleAssumer: getDefaultRoleAssumer2(input),
      roleAssumerWithWebIdentity: getDefaultRoleAssumerWithWebIdentity2(input),
      ...input
    }), "decorateDefaultCredentialProvider");
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/index.js
var sts_exports = {};
__export(sts_exports, {
  $Command: () => Command,
  AssumeRole$: () => AssumeRole$,
  AssumeRoleCommand: () => AssumeRoleCommand,
  AssumeRoleRequest$: () => AssumeRoleRequest$,
  AssumeRoleResponse$: () => AssumeRoleResponse$,
  AssumeRoleWithWebIdentity$: () => AssumeRoleWithWebIdentity$,
  AssumeRoleWithWebIdentityCommand: () => AssumeRoleWithWebIdentityCommand,
  AssumeRoleWithWebIdentityRequest$: () => AssumeRoleWithWebIdentityRequest$,
  AssumeRoleWithWebIdentityResponse$: () => AssumeRoleWithWebIdentityResponse$,
  AssumedRoleUser$: () => AssumedRoleUser$,
  Credentials$: () => Credentials$,
  ExpiredTokenException: () => ExpiredTokenException2,
  ExpiredTokenException$: () => ExpiredTokenException$2,
  IDPCommunicationErrorException: () => IDPCommunicationErrorException,
  IDPCommunicationErrorException$: () => IDPCommunicationErrorException$,
  IDPRejectedClaimException: () => IDPRejectedClaimException,
  IDPRejectedClaimException$: () => IDPRejectedClaimException$,
  InvalidIdentityTokenException: () => InvalidIdentityTokenException,
  InvalidIdentityTokenException$: () => InvalidIdentityTokenException$,
  MalformedPolicyDocumentException: () => MalformedPolicyDocumentException,
  MalformedPolicyDocumentException$: () => MalformedPolicyDocumentException$,
  PackedPolicyTooLargeException: () => PackedPolicyTooLargeException,
  PackedPolicyTooLargeException$: () => PackedPolicyTooLargeException$,
  PolicyDescriptorType$: () => PolicyDescriptorType$,
  ProvidedContext$: () => ProvidedContext$,
  RegionDisabledException: () => RegionDisabledException,
  RegionDisabledException$: () => RegionDisabledException$,
  STS: () => STS,
  STSClient: () => STSClient,
  STSServiceException: () => STSServiceException,
  STSServiceException$: () => STSServiceException$,
  Tag$: () => Tag$,
  __Client: () => Client,
  decorateDefaultCredentialProvider: () => decorateDefaultCredentialProvider,
  errorTypeRegistries: () => errorTypeRegistries3,
  getDefaultRoleAssumer: () => getDefaultRoleAssumer2,
  getDefaultRoleAssumerWithWebIdentity: () => getDefaultRoleAssumerWithWebIdentity2
});
var init_sts = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/index.js"() {
    init_STSClient();
    init_STS();
    init_commands3();
    init_schemas_03();
    init_errors3();
    init_models_03();
    init_defaultRoleAssumers();
    init_STSServiceException();
  }
});

// node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveAssumeRoleCredentials.js
var isAssumeRoleProfile, isAssumeRoleWithSourceProfile, isCredentialSourceProfile, resolveAssumeRoleCredentials, isCredentialSourceWithoutRoleArn;
var init_resolveAssumeRoleCredentials = __esm({
  "node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveAssumeRoleCredentials.js"() {
    init_client2();
    init_dist_es29();
    init_dist_es30();
    init_resolveCredentialSource();
    isAssumeRoleProfile = /* @__PURE__ */ __name((arg, { profile = "default", logger: logger2 } = {}) => {
      return Boolean(arg) && typeof arg === "object" && typeof arg.role_arn === "string" && ["undefined", "string"].indexOf(typeof arg.role_session_name) > -1 && ["undefined", "string"].indexOf(typeof arg.external_id) > -1 && ["undefined", "string"].indexOf(typeof arg.mfa_serial) > -1 && (isAssumeRoleWithSourceProfile(arg, { profile, logger: logger2 }) || isCredentialSourceProfile(arg, { profile, logger: logger2 }));
    }, "isAssumeRoleProfile");
    isAssumeRoleWithSourceProfile = /* @__PURE__ */ __name((arg, { profile, logger: logger2 }) => {
      const withSourceProfile = typeof arg.source_profile === "string" && typeof arg.credential_source === "undefined";
      if (withSourceProfile) {
        logger2?.debug?.(`    ${profile} isAssumeRoleWithSourceProfile source_profile=${arg.source_profile}`);
      }
      return withSourceProfile;
    }, "isAssumeRoleWithSourceProfile");
    isCredentialSourceProfile = /* @__PURE__ */ __name((arg, { profile, logger: logger2 }) => {
      const withProviderProfile = typeof arg.credential_source === "string" && typeof arg.source_profile === "undefined";
      if (withProviderProfile) {
        logger2?.debug?.(`    ${profile} isCredentialSourceProfile credential_source=${arg.credential_source}`);
      }
      return withProviderProfile;
    }, "isCredentialSourceProfile");
    resolveAssumeRoleCredentials = /* @__PURE__ */ __name(async (profileName, profiles, options, callerClientConfig, visitedProfiles = {}, resolveProfileData2) => {
      options.logger?.debug("@aws-sdk/credential-provider-ini - resolveAssumeRoleCredentials (STS)");
      const profileData = profiles[profileName];
      const { source_profile, region } = profileData;
      if (!options.roleAssumer) {
        const { getDefaultRoleAssumer: getDefaultRoleAssumer3 } = await Promise.resolve().then(() => (init_sts(), sts_exports));
        options.roleAssumer = getDefaultRoleAssumer3({
          ...options.clientConfig,
          credentialProviderLogger: options.logger,
          parentClientConfig: {
            ...callerClientConfig,
            ...options?.parentClientConfig,
            region: region ?? options?.parentClientConfig?.region ?? callerClientConfig?.region
          }
        }, options.clientPlugins);
      }
      if (source_profile && source_profile in visitedProfiles) {
        throw new CredentialsProviderError(`Detected a cycle attempting to resolve credentials for profile ${getProfileName(options)}. Profiles visited: ` + Object.keys(visitedProfiles).join(", "), { logger: options.logger });
      }
      options.logger?.debug(`@aws-sdk/credential-provider-ini - finding credential resolver using ${source_profile ? `source_profile=[${source_profile}]` : `profile=[${profileName}]`}`);
      const sourceCredsProvider = source_profile ? resolveProfileData2(source_profile, profiles, options, callerClientConfig, {
        ...visitedProfiles,
        [source_profile]: true
      }, isCredentialSourceWithoutRoleArn(profiles[source_profile] ?? {})) : (await resolveCredentialSource(profileData.credential_source, profileName, options.logger)(options))();
      if (isCredentialSourceWithoutRoleArn(profileData)) {
        return sourceCredsProvider.then((creds) => setCredentialFeature(creds, "CREDENTIALS_PROFILE_SOURCE_PROFILE", "o"));
      } else {
        const params = {
          RoleArn: profileData.role_arn,
          RoleSessionName: profileData.role_session_name || `aws-sdk-js-${Date.now()}`,
          ExternalId: profileData.external_id,
          DurationSeconds: parseInt(profileData.duration_seconds || "3600", 10)
        };
        const { mfa_serial } = profileData;
        if (mfa_serial) {
          if (!options.mfaCodeProvider) {
            throw new CredentialsProviderError(`Profile ${profileName} requires multi-factor authentication, but no MFA code callback was provided.`, { logger: options.logger, tryNextLink: false });
          }
          params.SerialNumber = mfa_serial;
          params.TokenCode = await options.mfaCodeProvider(mfa_serial);
        }
        const sourceCreds = await sourceCredsProvider;
        return options.roleAssumer(sourceCreds, params).then((creds) => setCredentialFeature(creds, "CREDENTIALS_PROFILE_SOURCE_PROFILE", "o"));
      }
    }, "resolveAssumeRoleCredentials");
    isCredentialSourceWithoutRoleArn = /* @__PURE__ */ __name((section) => {
      return !section.role_arn && !!section.credential_source;
    }, "isCredentialSourceWithoutRoleArn");
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/auth/httpAuthSchemeProvider.js
function createAwsAuthSigv4HttpAuthOption5(authParameters) {
  return {
    schemeId: "aws.auth#sigv4",
    signingProperties: {
      name: "signin",
      region: authParameters.region
    },
    propertiesExtractor: /* @__PURE__ */ __name((config, context) => ({
      signingProperties: {
        config,
        context
      }
    }), "propertiesExtractor")
  };
}
function createSmithyApiNoAuthHttpAuthOption4(authParameters) {
  return {
    schemeId: "smithy.api#noAuth"
  };
}
var defaultSigninHttpAuthSchemeParametersProvider, defaultSigninHttpAuthSchemeProvider, resolveHttpAuthSchemeConfig5;
var init_httpAuthSchemeProvider4 = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/auth/httpAuthSchemeProvider.js"() {
    init_httpAuthSchemes2();
    init_dist_es6();
    defaultSigninHttpAuthSchemeParametersProvider = /* @__PURE__ */ __name(async (config, context, input) => {
      return {
        operation: getSmithyContext(context).operation,
        region: await normalizeProvider(config.region)() || (() => {
          throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
        })()
      };
    }, "defaultSigninHttpAuthSchemeParametersProvider");
    __name(createAwsAuthSigv4HttpAuthOption5, "createAwsAuthSigv4HttpAuthOption");
    __name(createSmithyApiNoAuthHttpAuthOption4, "createSmithyApiNoAuthHttpAuthOption");
    defaultSigninHttpAuthSchemeProvider = /* @__PURE__ */ __name((authParameters) => {
      const options = [];
      switch (authParameters.operation) {
        case "CreateOAuth2Token": {
          options.push(createSmithyApiNoAuthHttpAuthOption4(authParameters));
          break;
        }
        default: {
          options.push(createAwsAuthSigv4HttpAuthOption5(authParameters));
        }
      }
      return options;
    }, "defaultSigninHttpAuthSchemeProvider");
    resolveHttpAuthSchemeConfig5 = /* @__PURE__ */ __name((config) => {
      const config_0 = resolveAwsSdkSigV4Config(config);
      return Object.assign(config_0, {
        authSchemePreference: normalizeProvider(config.authSchemePreference ?? [])
      });
    }, "resolveHttpAuthSchemeConfig");
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/endpoint/EndpointParameters.js
var resolveClientEndpointParameters5, commonParams5;
var init_EndpointParameters4 = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/endpoint/EndpointParameters.js"() {
    resolveClientEndpointParameters5 = /* @__PURE__ */ __name((options) => {
      return Object.assign(options, {
        useDualstackEndpoint: options.useDualstackEndpoint ?? false,
        useFipsEndpoint: options.useFipsEndpoint ?? false,
        defaultSigningName: "signin"
      });
    }, "resolveClientEndpointParameters");
    commonParams5 = {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
    };
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/endpoint/bdd.js
var m3, a5, b5, c5, d5, e5, f5, g5, h5, i5, j5, k5, l3, _data5, root5, r5, nodes5, bdd5;
var init_bdd4 = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/endpoint/bdd.js"() {
    init_dist_es21();
    m3 = "ref";
    a5 = -1;
    b5 = true;
    c5 = "isSet";
    d5 = "PartitionResult";
    e5 = "booleanEquals";
    f5 = "getAttr";
    g5 = "stringEquals";
    h5 = { [m3]: "Endpoint" };
    i5 = { [m3]: d5 };
    j5 = { fn: f5, argv: [i5, "name"] };
    k5 = {};
    l3 = [{ [m3]: "Region" }];
    _data5 = {
      conditions: [
        [c5, [h5]],
        [c5, l3],
        ["aws.partition", l3, d5],
        [e5, [{ [m3]: "UseFIPS" }, b5]],
        [e5, [{ [m3]: "UseDualStack" }, b5]],
        [e5, [{ fn: f5, argv: [i5, "supportsDualStack"] }, b5]],
        [e5, [{ fn: f5, argv: [i5, "supportsFIPS"] }, b5]],
        [g5, [j5, "aws"]],
        [g5, [j5, "aws-cn"]],
        [g5, [j5, "aws-us-gov"]]
      ],
      results: [
        [a5],
        [a5, "Invalid Configuration: FIPS and custom endpoint are not supported"],
        [a5, "Invalid Configuration: Dualstack and custom endpoint are not supported"],
        [h5, k5],
        ["https://{Region}.signin.aws.amazon.com", k5],
        ["https://{Region}.signin.amazonaws.cn", k5],
        ["https://{Region}.signin.amazonaws-us-gov.com", k5],
        ["https://signin-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", k5],
        [a5, "FIPS and DualStack are enabled, but this partition does not support one or both"],
        ["https://signin-fips.{Region}.{PartitionResult#dnsSuffix}", k5],
        [a5, "FIPS is enabled but this partition does not support FIPS"],
        ["https://signin.{Region}.{PartitionResult#dualStackDnsSuffix}", k5],
        [a5, "DualStack is enabled but this partition does not support DualStack"],
        ["https://signin.{Region}.{PartitionResult#dnsSuffix}", k5],
        [a5, "Invalid Configuration: Missing Region"]
      ]
    };
    root5 = 2;
    r5 = 1e8;
    nodes5 = new Int32Array([
      -1,
      1,
      -1,
      0,
      15,
      3,
      1,
      4,
      r5 + 14,
      2,
      5,
      r5 + 14,
      3,
      11,
      6,
      4,
      10,
      7,
      7,
      r5 + 4,
      8,
      8,
      r5 + 5,
      9,
      9,
      r5 + 6,
      r5 + 13,
      5,
      r5 + 11,
      r5 + 12,
      4,
      13,
      12,
      6,
      r5 + 9,
      r5 + 10,
      5,
      14,
      r5 + 8,
      6,
      r5 + 7,
      r5 + 8,
      3,
      r5 + 1,
      16,
      4,
      r5 + 2,
      r5 + 3
    ]);
    bdd5 = BinaryDecisionDiagram.from(nodes5, root5, _data5.conditions, _data5.results);
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/endpoint/endpointResolver.js
var cache5, defaultEndpointResolver5;
var init_endpointResolver4 = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/endpoint/endpointResolver.js"() {
    init_dist_es22();
    init_dist_es21();
    init_bdd4();
    cache5 = new EndpointCache({
      size: 50,
      params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"]
    });
    defaultEndpointResolver5 = /* @__PURE__ */ __name((endpointParams, context = {}) => {
      return cache5.get(endpointParams, () => decideEndpoint(bdd5, {
        endpointParams,
        logger: context.logger
      }));
    }, "defaultEndpointResolver");
    customEndpointFunctions.aws = awsEndpointFunctions;
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/models/SigninServiceException.js
var SigninServiceException;
var init_SigninServiceException = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/models/SigninServiceException.js"() {
    init_dist_es35();
    SigninServiceException = class _SigninServiceException extends ServiceException {
      static {
        __name(this, "SigninServiceException");
      }
      constructor(options) {
        super(options);
        Object.setPrototypeOf(this, _SigninServiceException.prototype);
      }
    };
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/models/errors.js
var AccessDeniedException2, InternalServerException2, TooManyRequestsError, ValidationException;
var init_errors4 = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/models/errors.js"() {
    init_SigninServiceException();
    AccessDeniedException2 = class _AccessDeniedException extends SigninServiceException {
      static {
        __name(this, "AccessDeniedException");
      }
      name = "AccessDeniedException";
      $fault = "client";
      error;
      constructor(opts) {
        super({
          name: "AccessDeniedException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _AccessDeniedException.prototype);
        this.error = opts.error;
      }
    };
    InternalServerException2 = class _InternalServerException extends SigninServiceException {
      static {
        __name(this, "InternalServerException");
      }
      name = "InternalServerException";
      $fault = "server";
      error;
      constructor(opts) {
        super({
          name: "InternalServerException",
          $fault: "server",
          ...opts
        });
        Object.setPrototypeOf(this, _InternalServerException.prototype);
        this.error = opts.error;
      }
    };
    TooManyRequestsError = class _TooManyRequestsError extends SigninServiceException {
      static {
        __name(this, "TooManyRequestsError");
      }
      name = "TooManyRequestsError";
      $fault = "client";
      error;
      constructor(opts) {
        super({
          name: "TooManyRequestsError",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _TooManyRequestsError.prototype);
        this.error = opts.error;
      }
    };
    ValidationException = class _ValidationException extends SigninServiceException {
      static {
        __name(this, "ValidationException");
      }
      name = "ValidationException";
      $fault = "client";
      error;
      constructor(opts) {
        super({
          name: "ValidationException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _ValidationException.prototype);
        this.error = opts.error;
      }
    };
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/schemas/schemas_0.js
var _ADE2, _AT2, _COAT, _COATR, _COATRB, _COATRBr, _COATRr, _ISE2, _RT2, _TMRE2, _VE, _aKI2, _aT3, _c4, _cI2, _cV2, _co2, _e4, _eI2, _gT2, _h3, _hE4, _iT2, _jN, _m3, _rT2, _rU2, _s4, _sAK2, _sT2, _se2, _tI, _tO, _tT2, n04, _s_registry4, SigninServiceException$, n0_registry4, AccessDeniedException$2, InternalServerException$2, TooManyRequestsError$, ValidationException$, errorTypeRegistries4, RefreshToken2, AccessToken$, CreateOAuth2TokenRequest$, CreateOAuth2TokenRequestBody$, CreateOAuth2TokenResponse$, CreateOAuth2TokenResponseBody$, CreateOAuth2Token$;
var init_schemas_04 = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/schemas/schemas_0.js"() {
    init_schema2();
    init_errors4();
    init_SigninServiceException();
    _ADE2 = "AccessDeniedException";
    _AT2 = "AccessToken";
    _COAT = "CreateOAuth2Token";
    _COATR = "CreateOAuth2TokenRequest";
    _COATRB = "CreateOAuth2TokenRequestBody";
    _COATRBr = "CreateOAuth2TokenResponseBody";
    _COATRr = "CreateOAuth2TokenResponse";
    _ISE2 = "InternalServerException";
    _RT2 = "RefreshToken";
    _TMRE2 = "TooManyRequestsError";
    _VE = "ValidationException";
    _aKI2 = "accessKeyId";
    _aT3 = "accessToken";
    _c4 = "client";
    _cI2 = "clientId";
    _cV2 = "codeVerifier";
    _co2 = "code";
    _e4 = "error";
    _eI2 = "expiresIn";
    _gT2 = "grantType";
    _h3 = "http";
    _hE4 = "httpError";
    _iT2 = "idToken";
    _jN = "jsonName";
    _m3 = "message";
    _rT2 = "refreshToken";
    _rU2 = "redirectUri";
    _s4 = "smithy.ts.sdk.synthetic.com.amazonaws.signin";
    _sAK2 = "secretAccessKey";
    _sT2 = "sessionToken";
    _se2 = "server";
    _tI = "tokenInput";
    _tO = "tokenOutput";
    _tT2 = "tokenType";
    n04 = "com.amazonaws.signin";
    _s_registry4 = TypeRegistry.for(_s4);
    SigninServiceException$ = [-3, _s4, "SigninServiceException", 0, [], []];
    _s_registry4.registerError(SigninServiceException$, SigninServiceException);
    n0_registry4 = TypeRegistry.for(n04);
    AccessDeniedException$2 = [-3, n04, _ADE2, { [_e4]: _c4 }, [_e4, _m3], [0, 0], 2];
    n0_registry4.registerError(AccessDeniedException$2, AccessDeniedException2);
    InternalServerException$2 = [-3, n04, _ISE2, { [_e4]: _se2, [_hE4]: 500 }, [_e4, _m3], [0, 0], 2];
    n0_registry4.registerError(InternalServerException$2, InternalServerException2);
    TooManyRequestsError$ = [-3, n04, _TMRE2, { [_e4]: _c4, [_hE4]: 429 }, [_e4, _m3], [0, 0], 2];
    n0_registry4.registerError(TooManyRequestsError$, TooManyRequestsError);
    ValidationException$ = [-3, n04, _VE, { [_e4]: _c4, [_hE4]: 400 }, [_e4, _m3], [0, 0], 2];
    n0_registry4.registerError(ValidationException$, ValidationException);
    errorTypeRegistries4 = [_s_registry4, n0_registry4];
    RefreshToken2 = [0, n04, _RT2, 8, 0];
    AccessToken$ = [
      3,
      n04,
      _AT2,
      8,
      [_aKI2, _sAK2, _sT2],
      [
        [0, { [_jN]: _aKI2 }],
        [0, { [_jN]: _sAK2 }],
        [0, { [_jN]: _sT2 }]
      ],
      3
    ];
    CreateOAuth2TokenRequest$ = [
      3,
      n04,
      _COATR,
      0,
      [_tI],
      [[() => CreateOAuth2TokenRequestBody$, 16]],
      1
    ];
    CreateOAuth2TokenRequestBody$ = [
      3,
      n04,
      _COATRB,
      0,
      [_cI2, _gT2, _co2, _rU2, _cV2, _rT2],
      [
        [0, { [_jN]: _cI2 }],
        [0, { [_jN]: _gT2 }],
        0,
        [0, { [_jN]: _rU2 }],
        [0, { [_jN]: _cV2 }],
        [() => RefreshToken2, { [_jN]: _rT2 }]
      ],
      2
    ];
    CreateOAuth2TokenResponse$ = [
      3,
      n04,
      _COATRr,
      0,
      [_tO],
      [[() => CreateOAuth2TokenResponseBody$, 16]],
      1
    ];
    CreateOAuth2TokenResponseBody$ = [
      3,
      n04,
      _COATRBr,
      0,
      [_aT3, _tT2, _eI2, _rT2, _iT2],
      [
        [() => AccessToken$, { [_jN]: _aT3 }],
        [0, { [_jN]: _tT2 }],
        [1, { [_jN]: _eI2 }],
        [() => RefreshToken2, { [_jN]: _rT2 }],
        [0, { [_jN]: _iT2 }]
      ],
      4
    ];
    CreateOAuth2Token$ = [
      9,
      n04,
      _COAT,
      { [_h3]: ["POST", "/v1/token", 200] },
      () => CreateOAuth2TokenRequest$,
      () => CreateOAuth2TokenResponse$
    ];
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/runtimeConfig.shared.js
var getRuntimeConfig7;
var init_runtimeConfig_shared4 = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/runtimeConfig.shared.js"() {
    init_httpAuthSchemes2();
    init_protocols2();
    init_dist_es20();
    init_dist_es35();
    init_dist_es18();
    init_dist_es10();
    init_dist_es9();
    init_httpAuthSchemeProvider4();
    init_endpointResolver4();
    init_schemas_04();
    getRuntimeConfig7 = /* @__PURE__ */ __name((config) => {
      return {
        apiVersion: "2023-01-01",
        base64Decoder: config?.base64Decoder ?? fromBase64,
        base64Encoder: config?.base64Encoder ?? toBase64,
        disableHostPrefix: config?.disableHostPrefix ?? false,
        endpointProvider: config?.endpointProvider ?? defaultEndpointResolver5,
        extensions: config?.extensions ?? [],
        httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? defaultSigninHttpAuthSchemeProvider,
        httpAuthSchemes: config?.httpAuthSchemes ?? [
          {
            schemeId: "aws.auth#sigv4",
            identityProvider: /* @__PURE__ */ __name((ipc) => ipc.getIdentityProvider("aws.auth#sigv4"), "identityProvider"),
            signer: new AwsSdkSigV4Signer()
          },
          {
            schemeId: "smithy.api#noAuth",
            identityProvider: /* @__PURE__ */ __name((ipc) => ipc.getIdentityProvider("smithy.api#noAuth") || (async () => ({})), "identityProvider"),
            signer: new NoAuthSigner()
          }
        ],
        logger: config?.logger ?? new NoOpLogger(),
        protocol: config?.protocol ?? AwsRestJsonProtocol,
        protocolSettings: config?.protocolSettings ?? {
          defaultNamespace: "com.amazonaws.signin",
          errorTypeRegistries: errorTypeRegistries4,
          version: "2023-01-01",
          serviceTarget: "Signin"
        },
        serviceId: config?.serviceId ?? "Signin",
        urlParser: config?.urlParser ?? parseUrl,
        utf8Decoder: config?.utf8Decoder ?? fromUtf8,
        utf8Encoder: config?.utf8Encoder ?? toUtf8
      };
    }, "getRuntimeConfig");
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/runtimeConfig.js
var getRuntimeConfig8;
var init_runtimeConfig4 = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/runtimeConfig.js"() {
    init_package();
    init_client2();
    init_httpAuthSchemes2();
    init_dist_es44();
    init_dist_es27();
    init_dist_es45();
    init_dist_es36();
    init_dist_es31();
    init_dist_es13();
    init_dist_es35();
    init_dist_es46();
    init_dist_es47();
    init_dist_es24();
    init_runtimeConfig_shared4();
    getRuntimeConfig8 = /* @__PURE__ */ __name((config) => {
      emitWarningIfUnsupportedVersion2(process.version);
      const defaultsMode = resolveDefaultsModeConfig(config);
      const defaultConfigProvider = /* @__PURE__ */ __name(() => defaultsMode().then(loadConfigsForDefaultMode), "defaultConfigProvider");
      const clientSharedValues = getRuntimeConfig7(config);
      emitWarningIfUnsupportedVersion(process.version);
      const loaderConfig = {
        profile: config?.profile,
        logger: clientSharedValues.logger
      };
      return {
        ...clientSharedValues,
        ...config,
        runtime: "node",
        defaultsMode,
        authSchemePreference: config?.authSchemePreference ?? loadConfig(NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, loaderConfig),
        bodyLengthChecker: config?.bodyLengthChecker ?? calculateBodyLength,
        defaultUserAgentProvider: config?.defaultUserAgentProvider ?? createDefaultUserAgentProvider({ serviceId: clientSharedValues.serviceId, clientVersion: package_default2.version }),
        maxAttempts: config?.maxAttempts ?? loadConfig(NODE_MAX_ATTEMPT_CONFIG_OPTIONS, config),
        region: config?.region ?? loadConfig(NODE_REGION_CONFIG_OPTIONS, { ...NODE_REGION_CONFIG_FILE_OPTIONS, ...loaderConfig }),
        requestHandler: NodeHttpHandler.create(config?.requestHandler ?? defaultConfigProvider),
        retryMode: config?.retryMode ?? loadConfig({
          ...NODE_RETRY_MODE_CONFIG_OPTIONS,
          default: /* @__PURE__ */ __name(async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE, "default")
        }, config),
        sha256: config?.sha256 ?? Hash.bind(null, "sha256"),
        streamCollector: config?.streamCollector ?? streamCollector,
        useDualstackEndpoint: config?.useDualstackEndpoint ?? loadConfig(NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, loaderConfig),
        useFipsEndpoint: config?.useFipsEndpoint ?? loadConfig(NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, loaderConfig),
        userAgentAppId: config?.userAgentAppId ?? loadConfig(NODE_APP_ID_CONFIG_OPTIONS, loaderConfig)
      };
    }, "getRuntimeConfig");
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/auth/httpAuthExtensionConfiguration.js
var getHttpAuthExtensionConfiguration4, resolveHttpAuthRuntimeConfig4;
var init_httpAuthExtensionConfiguration4 = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/auth/httpAuthExtensionConfiguration.js"() {
    getHttpAuthExtensionConfiguration4 = /* @__PURE__ */ __name((runtimeConfig) => {
      const _httpAuthSchemes = runtimeConfig.httpAuthSchemes;
      let _httpAuthSchemeProvider = runtimeConfig.httpAuthSchemeProvider;
      let _credentials = runtimeConfig.credentials;
      return {
        setHttpAuthScheme(httpAuthScheme) {
          const index = _httpAuthSchemes.findIndex((scheme) => scheme.schemeId === httpAuthScheme.schemeId);
          if (index === -1) {
            _httpAuthSchemes.push(httpAuthScheme);
          } else {
            _httpAuthSchemes.splice(index, 1, httpAuthScheme);
          }
        },
        httpAuthSchemes() {
          return _httpAuthSchemes;
        },
        setHttpAuthSchemeProvider(httpAuthSchemeProvider) {
          _httpAuthSchemeProvider = httpAuthSchemeProvider;
        },
        httpAuthSchemeProvider() {
          return _httpAuthSchemeProvider;
        },
        setCredentials(credentials) {
          _credentials = credentials;
        },
        credentials() {
          return _credentials;
        }
      };
    }, "getHttpAuthExtensionConfiguration");
    resolveHttpAuthRuntimeConfig4 = /* @__PURE__ */ __name((config) => {
      return {
        httpAuthSchemes: config.httpAuthSchemes(),
        httpAuthSchemeProvider: config.httpAuthSchemeProvider(),
        credentials: config.credentials()
      };
    }, "resolveHttpAuthRuntimeConfig");
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/runtimeExtensions.js
var resolveRuntimeExtensions4;
var init_runtimeExtensions4 = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/runtimeExtensions.js"() {
    init_dist_es48();
    init_dist_es2();
    init_dist_es35();
    init_httpAuthExtensionConfiguration4();
    resolveRuntimeExtensions4 = /* @__PURE__ */ __name((runtimeConfig, extensions) => {
      const extensionConfiguration = Object.assign(getAwsRegionExtensionConfiguration(runtimeConfig), getDefaultExtensionConfiguration(runtimeConfig), getHttpHandlerExtensionConfiguration(runtimeConfig), getHttpAuthExtensionConfiguration4(runtimeConfig));
      extensions.forEach((extension) => extension.configure(extensionConfiguration));
      return Object.assign(runtimeConfig, resolveAwsRegionExtensionConfiguration(extensionConfiguration), resolveDefaultRuntimeConfig(extensionConfiguration), resolveHttpHandlerRuntimeConfig(extensionConfiguration), resolveHttpAuthRuntimeConfig4(extensionConfiguration));
    }, "resolveRuntimeExtensions");
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/SigninClient.js
var SigninClient;
var init_SigninClient = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/SigninClient.js"() {
    init_dist_es3();
    init_dist_es4();
    init_dist_es5();
    init_dist_es25();
    init_dist_es27();
    init_dist_es20();
    init_schema2();
    init_dist_es28();
    init_dist_es33();
    init_dist_es36();
    init_dist_es35();
    init_httpAuthSchemeProvider4();
    init_EndpointParameters4();
    init_runtimeConfig4();
    init_runtimeExtensions4();
    SigninClient = class extends Client {
      static {
        __name(this, "SigninClient");
      }
      config;
      constructor(...[configuration]) {
        const _config_0 = getRuntimeConfig8(configuration || {});
        super(_config_0);
        this.initConfig = _config_0;
        const _config_1 = resolveClientEndpointParameters5(_config_0);
        const _config_2 = resolveUserAgentConfig(_config_1);
        const _config_3 = resolveRetryConfig(_config_2);
        const _config_4 = resolveRegionConfig(_config_3);
        const _config_5 = resolveHostHeaderConfig(_config_4);
        const _config_6 = resolveEndpointConfig(_config_5);
        const _config_7 = resolveHttpAuthSchemeConfig5(_config_6);
        const _config_8 = resolveRuntimeExtensions4(_config_7, configuration?.extensions || []);
        this.config = _config_8;
        this.middlewareStack.use(getSchemaSerdePlugin(this.config));
        this.middlewareStack.use(getUserAgentPlugin(this.config));
        this.middlewareStack.use(getRetryPlugin(this.config));
        this.middlewareStack.use(getContentLengthPlugin(this.config));
        this.middlewareStack.use(getHostHeaderPlugin(this.config));
        this.middlewareStack.use(getLoggerPlugin(this.config));
        this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
        this.middlewareStack.use(getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
          httpAuthSchemeParametersProvider: defaultSigninHttpAuthSchemeParametersProvider,
          identityProviderConfigProvider: /* @__PURE__ */ __name(async (config) => new DefaultIdentityProviderConfig({
            "aws.auth#sigv4": config.credentials
          }), "identityProviderConfigProvider")
        }));
        this.middlewareStack.use(getHttpSigningPlugin(this.config));
      }
      destroy() {
        super.destroy();
      }
    };
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/commands/CreateOAuth2TokenCommand.js
var CreateOAuth2TokenCommand;
var init_CreateOAuth2TokenCommand = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/commands/CreateOAuth2TokenCommand.js"() {
    init_dist_es33();
    init_dist_es35();
    init_EndpointParameters4();
    init_schemas_04();
    CreateOAuth2TokenCommand = class extends Command.classBuilder().ep(commonParams5).m(function(Command2, cs, config, o2) {
      return [getEndpointPlugin(config, Command2.getEndpointParameterInstructions())];
    }).s("Signin", "CreateOAuth2Token", {}).n("SigninClient", "CreateOAuth2TokenCommand").sc(CreateOAuth2Token$).build() {
      static {
        __name(this, "CreateOAuth2TokenCommand");
      }
    };
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/Signin.js
var commands4, Signin;
var init_Signin = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/Signin.js"() {
    init_dist_es35();
    init_CreateOAuth2TokenCommand();
    init_SigninClient();
    commands4 = {
      CreateOAuth2TokenCommand
    };
    Signin = class extends SigninClient {
      static {
        __name(this, "Signin");
      }
    };
    createAggregatedClient(commands4, Signin);
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/commands/index.js
var init_commands4 = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/commands/index.js"() {
    init_CreateOAuth2TokenCommand();
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/models/enums.js
var OAuth2ErrorCode;
var init_enums2 = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/models/enums.js"() {
    OAuth2ErrorCode = {
      AUTHCODE_EXPIRED: "AUTHCODE_EXPIRED",
      INSUFFICIENT_PERMISSIONS: "INSUFFICIENT_PERMISSIONS",
      INVALID_REQUEST: "INVALID_REQUEST",
      SERVER_ERROR: "server_error",
      TOKEN_EXPIRED: "TOKEN_EXPIRED",
      USER_CREDENTIALS_CHANGED: "USER_CREDENTIALS_CHANGED"
    };
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/models/models_0.js
var init_models_04 = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/models/models_0.js"() {
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/index.js
var signin_exports = {};
__export(signin_exports, {
  $Command: () => Command,
  AccessDeniedException: () => AccessDeniedException2,
  AccessDeniedException$: () => AccessDeniedException$2,
  AccessToken$: () => AccessToken$,
  CreateOAuth2Token$: () => CreateOAuth2Token$,
  CreateOAuth2TokenCommand: () => CreateOAuth2TokenCommand,
  CreateOAuth2TokenRequest$: () => CreateOAuth2TokenRequest$,
  CreateOAuth2TokenRequestBody$: () => CreateOAuth2TokenRequestBody$,
  CreateOAuth2TokenResponse$: () => CreateOAuth2TokenResponse$,
  CreateOAuth2TokenResponseBody$: () => CreateOAuth2TokenResponseBody$,
  InternalServerException: () => InternalServerException2,
  InternalServerException$: () => InternalServerException$2,
  OAuth2ErrorCode: () => OAuth2ErrorCode,
  Signin: () => Signin,
  SigninClient: () => SigninClient,
  SigninServiceException: () => SigninServiceException,
  SigninServiceException$: () => SigninServiceException$,
  TooManyRequestsError: () => TooManyRequestsError,
  TooManyRequestsError$: () => TooManyRequestsError$,
  ValidationException: () => ValidationException,
  ValidationException$: () => ValidationException$,
  __Client: () => Client,
  errorTypeRegistries: () => errorTypeRegistries4
});
var init_signin = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/index.js"() {
    init_SigninClient();
    init_Signin();
    init_commands4();
    init_schemas_04();
    init_enums2();
    init_errors4();
    init_models_04();
    init_SigninServiceException();
  }
});

// node_modules/@aws-sdk/credential-provider-login/dist-es/LoginCredentialsFetcher.js
import { createHash as createHash3, createPrivateKey, createPublicKey, sign } from "node:crypto";
import { promises as fs2 } from "node:fs";
import { homedir as homedir2 } from "node:os";
import { dirname, join as join6 } from "node:path";
var LoginCredentialsFetcher;
var init_LoginCredentialsFetcher = __esm({
  "node_modules/@aws-sdk/credential-provider-login/dist-es/LoginCredentialsFetcher.js"() {
    init_dist_es29();
    init_dist_es2();
    init_dist_es30();
    LoginCredentialsFetcher = class _LoginCredentialsFetcher {
      static {
        __name(this, "LoginCredentialsFetcher");
      }
      profileData;
      init;
      callerClientConfig;
      static REFRESH_THRESHOLD = 5 * 60 * 1e3;
      constructor(profileData, init, callerClientConfig) {
        this.profileData = profileData;
        this.init = init;
        this.callerClientConfig = callerClientConfig;
      }
      async loadCredentials() {
        const token = await this.loadToken();
        if (!token) {
          throw new CredentialsProviderError(`Failed to load a token for session ${this.loginSession}, please re-authenticate using aws login`, { tryNextLink: false, logger: this.logger });
        }
        const accessToken = token.accessToken;
        const now = Date.now();
        const expiryTime = new Date(accessToken.expiresAt).getTime();
        const timeUntilExpiry = expiryTime - now;
        if (timeUntilExpiry <= _LoginCredentialsFetcher.REFRESH_THRESHOLD) {
          return this.refresh(token);
        }
        return {
          accessKeyId: accessToken.accessKeyId,
          secretAccessKey: accessToken.secretAccessKey,
          sessionToken: accessToken.sessionToken,
          accountId: accessToken.accountId,
          expiration: new Date(accessToken.expiresAt)
        };
      }
      get logger() {
        return this.init?.logger;
      }
      get loginSession() {
        return this.profileData.login_session;
      }
      async refresh(token) {
        const { SigninClient: SigninClient2, CreateOAuth2TokenCommand: CreateOAuth2TokenCommand2 } = await Promise.resolve().then(() => (init_signin(), signin_exports));
        const { logger: logger2, userAgentAppId } = this.callerClientConfig ?? {};
        const isH22 = /* @__PURE__ */ __name((requestHandler2) => {
          return requestHandler2?.metadata?.handlerProtocol === "h2";
        }, "isH2");
        const requestHandler = isH22(this.callerClientConfig?.requestHandler) ? void 0 : this.callerClientConfig?.requestHandler;
        const region = this.profileData.region ?? await this.callerClientConfig?.region?.() ?? process.env.AWS_REGION;
        const client2 = new SigninClient2({
          credentials: {
            accessKeyId: "",
            secretAccessKey: ""
          },
          region,
          requestHandler,
          logger: logger2,
          userAgentAppId,
          ...this.init?.clientConfig
        });
        this.createDPoPInterceptor(client2.middlewareStack);
        const commandInput = {
          tokenInput: {
            clientId: token.clientId,
            refreshToken: token.refreshToken,
            grantType: "refresh_token"
          }
        };
        try {
          const response = await client2.send(new CreateOAuth2TokenCommand2(commandInput));
          const { accessKeyId, secretAccessKey, sessionToken } = response.tokenOutput?.accessToken ?? {};
          const { refreshToken, expiresIn } = response.tokenOutput ?? {};
          if (!accessKeyId || !secretAccessKey || !sessionToken || !refreshToken) {
            throw new CredentialsProviderError("Token refresh response missing required fields", {
              logger: this.logger,
              tryNextLink: false
            });
          }
          const expiresInMs = (expiresIn ?? 900) * 1e3;
          const expiration = new Date(Date.now() + expiresInMs);
          const updatedToken = {
            ...token,
            accessToken: {
              ...token.accessToken,
              accessKeyId,
              secretAccessKey,
              sessionToken,
              expiresAt: expiration.toISOString()
            },
            refreshToken
          };
          await this.saveToken(updatedToken);
          const newAccessToken = updatedToken.accessToken;
          return {
            accessKeyId: newAccessToken.accessKeyId,
            secretAccessKey: newAccessToken.secretAccessKey,
            sessionToken: newAccessToken.sessionToken,
            accountId: newAccessToken.accountId,
            expiration
          };
        } catch (error) {
          if (error.name === "AccessDeniedException") {
            const errorType = error.error;
            let message;
            switch (errorType) {
              case "TOKEN_EXPIRED":
                message = "Your session has expired. Please reauthenticate.";
                break;
              case "USER_CREDENTIALS_CHANGED":
                message = "Unable to refresh credentials because of a change in your password. Please reauthenticate with your new password.";
                break;
              case "INSUFFICIENT_PERMISSIONS":
                message = "Unable to refresh credentials due to insufficient permissions. You may be missing permission for the 'CreateOAuth2Token' action.";
                break;
              default:
                message = `Failed to refresh token: ${String(error)}. Please re-authenticate using \`aws login\``;
            }
            throw new CredentialsProviderError(message, { logger: this.logger, tryNextLink: false });
          }
          throw new CredentialsProviderError(`Failed to refresh token: ${String(error)}. Please re-authenticate using aws login`, { logger: this.logger });
        }
      }
      async loadToken() {
        const tokenFilePath = this.getTokenFilePath();
        try {
          let tokenData;
          try {
            tokenData = await readFile2(tokenFilePath, { ignoreCache: this.init?.ignoreCache });
          } catch {
            tokenData = await fs2.readFile(tokenFilePath, "utf8");
          }
          const token = JSON.parse(tokenData);
          const missingFields = ["accessToken", "clientId", "refreshToken", "dpopKey"].filter((k6) => !token[k6]);
          if (!token.accessToken?.accountId) {
            missingFields.push("accountId");
          }
          if (missingFields.length > 0) {
            throw new CredentialsProviderError(`Token validation failed, missing fields: ${missingFields.join(", ")}`, {
              logger: this.logger,
              tryNextLink: false
            });
          }
          return token;
        } catch (error) {
          throw new CredentialsProviderError(`Failed to load token from ${tokenFilePath}: ${String(error)}`, {
            logger: this.logger,
            tryNextLink: false
          });
        }
      }
      async saveToken(token) {
        const tokenFilePath = this.getTokenFilePath();
        const directory = dirname(tokenFilePath);
        try {
          await fs2.mkdir(directory, { recursive: true });
        } catch (error) {
        }
        await fs2.writeFile(tokenFilePath, JSON.stringify(token, null, 2), "utf8");
      }
      getTokenFilePath() {
        const directory = process.env.AWS_LOGIN_CACHE_DIRECTORY ?? join6(homedir2(), ".aws", "login", "cache");
        const loginSessionBytes = Buffer.from(this.loginSession, "utf8");
        const loginSessionSha256 = createHash3("sha256").update(loginSessionBytes).digest("hex");
        return join6(directory, `${loginSessionSha256}.json`);
      }
      derToRawSignature(derSignature) {
        let offset = 2;
        if (derSignature[offset] !== 2) {
          throw new Error("Invalid DER signature");
        }
        offset++;
        const rLength = derSignature[offset++];
        let r6 = derSignature.subarray(offset, offset + rLength);
        offset += rLength;
        if (derSignature[offset] !== 2) {
          throw new Error("Invalid DER signature");
        }
        offset++;
        const sLength = derSignature[offset++];
        let s = derSignature.subarray(offset, offset + sLength);
        r6 = r6[0] === 0 ? r6.subarray(1) : r6;
        s = s[0] === 0 ? s.subarray(1) : s;
        const rPadded = Buffer.concat([Buffer.alloc(32 - r6.length), r6]);
        const sPadded = Buffer.concat([Buffer.alloc(32 - s.length), s]);
        return Buffer.concat([rPadded, sPadded]);
      }
      createDPoPInterceptor(middlewareStack) {
        middlewareStack.add((next) => async (args) => {
          if (HttpRequest.isInstance(args.request)) {
            const request2 = args.request;
            const actualEndpoint = `${request2.protocol}//${request2.hostname}${request2.port ? `:${request2.port}` : ""}${request2.path}`;
            const dpop = await this.generateDpop(request2.method, actualEndpoint);
            request2.headers = {
              ...request2.headers,
              DPoP: dpop
            };
          }
          return next(args);
        }, {
          step: "finalizeRequest",
          name: "dpopInterceptor",
          override: true
        });
      }
      async generateDpop(method = "POST", endpoint) {
        const token = await this.loadToken();
        try {
          const privateKey = createPrivateKey({
            key: token.dpopKey,
            format: "pem",
            type: "sec1"
          });
          const publicKey = createPublicKey(privateKey);
          const publicDer = publicKey.export({ format: "der", type: "spki" });
          let pointStart = -1;
          for (let i6 = 0; i6 < publicDer.length; i6++) {
            if (publicDer[i6] === 4) {
              pointStart = i6;
              break;
            }
          }
          const x = publicDer.slice(pointStart + 1, pointStart + 33);
          const y = publicDer.slice(pointStart + 33, pointStart + 65);
          const header = {
            alg: "ES256",
            typ: "dpop+jwt",
            jwk: {
              kty: "EC",
              crv: "P-256",
              x: x.toString("base64url"),
              y: y.toString("base64url")
            }
          };
          const payload = {
            jti: crypto.randomUUID(),
            htm: method,
            htu: endpoint,
            iat: Math.floor(Date.now() / 1e3)
          };
          const headerB64 = Buffer.from(JSON.stringify(header)).toString("base64url");
          const payloadB64 = Buffer.from(JSON.stringify(payload)).toString("base64url");
          const message = `${headerB64}.${payloadB64}`;
          const asn1Signature = sign("sha256", Buffer.from(message), privateKey);
          const rawSignature = this.derToRawSignature(asn1Signature);
          const signatureB64 = rawSignature.toString("base64url");
          return `${message}.${signatureB64}`;
        } catch (error) {
          throw new CredentialsProviderError(`Failed to generate Dpop proof: ${error instanceof Error ? error.message : String(error)}`, { logger: this.logger, tryNextLink: false });
        }
      }
    };
  }
});

// node_modules/@aws-sdk/credential-provider-login/dist-es/fromLoginCredentials.js
var fromLoginCredentials;
var init_fromLoginCredentials = __esm({
  "node_modules/@aws-sdk/credential-provider-login/dist-es/fromLoginCredentials.js"() {
    init_client2();
    init_dist_es29();
    init_dist_es30();
    init_LoginCredentialsFetcher();
    fromLoginCredentials = /* @__PURE__ */ __name((init) => async ({ callerClientConfig } = {}) => {
      init?.logger?.debug?.("@aws-sdk/credential-providers - fromLoginCredentials");
      const profiles = await parseKnownFiles(init || {});
      const profileName = getProfileName({
        profile: init?.profile ?? callerClientConfig?.profile
      });
      const profile = profiles[profileName];
      if (!profile?.login_session) {
        throw new CredentialsProviderError(`Profile ${profileName} does not contain login_session.`, {
          tryNextLink: true,
          logger: init?.logger
        });
      }
      const fetcher = new LoginCredentialsFetcher(profile, init, callerClientConfig);
      const credentials = await fetcher.loadCredentials();
      return setCredentialFeature(credentials, "CREDENTIALS_LOGIN", "AD");
    }, "fromLoginCredentials");
  }
});

// node_modules/@aws-sdk/credential-provider-login/dist-es/types.js
var init_types10 = __esm({
  "node_modules/@aws-sdk/credential-provider-login/dist-es/types.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-login/dist-es/index.js
var init_dist_es51 = __esm({
  "node_modules/@aws-sdk/credential-provider-login/dist-es/index.js"() {
    init_fromLoginCredentials();
    init_types10();
  }
});

// node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveLoginCredentials.js
var isLoginProfile, resolveLoginCredentials;
var init_resolveLoginCredentials = __esm({
  "node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveLoginCredentials.js"() {
    init_client2();
    init_dist_es51();
    isLoginProfile = /* @__PURE__ */ __name((data) => {
      return Boolean(data && data.login_session);
    }, "isLoginProfile");
    resolveLoginCredentials = /* @__PURE__ */ __name(async (profileName, options, callerClientConfig) => {
      const credentials = await fromLoginCredentials({
        ...options,
        profile: profileName
      })({ callerClientConfig });
      return setCredentialFeature(credentials, "CREDENTIALS_PROFILE_LOGIN", "AC");
    }, "resolveLoginCredentials");
  }
});

// node_modules/@aws-sdk/credential-provider-process/dist-es/getValidatedProcessCredentials.js
var getValidatedProcessCredentials;
var init_getValidatedProcessCredentials = __esm({
  "node_modules/@aws-sdk/credential-provider-process/dist-es/getValidatedProcessCredentials.js"() {
    init_client2();
    getValidatedProcessCredentials = /* @__PURE__ */ __name((profileName, data, profiles) => {
      if (data.Version !== 1) {
        throw Error(`Profile ${profileName} credential_process did not return Version 1.`);
      }
      if (data.AccessKeyId === void 0 || data.SecretAccessKey === void 0) {
        throw Error(`Profile ${profileName} credential_process returned invalid credentials.`);
      }
      if (data.Expiration) {
        const currentTime = /* @__PURE__ */ new Date();
        const expireTime = new Date(data.Expiration);
        if (expireTime < currentTime) {
          throw Error(`Profile ${profileName} credential_process returned expired credentials.`);
        }
      }
      let accountId = data.AccountId;
      if (!accountId && profiles?.[profileName]?.aws_account_id) {
        accountId = profiles[profileName].aws_account_id;
      }
      const credentials = {
        accessKeyId: data.AccessKeyId,
        secretAccessKey: data.SecretAccessKey,
        ...data.SessionToken && { sessionToken: data.SessionToken },
        ...data.Expiration && { expiration: new Date(data.Expiration) },
        ...data.CredentialScope && { credentialScope: data.CredentialScope },
        ...accountId && { accountId }
      };
      setCredentialFeature(credentials, "CREDENTIALS_PROCESS", "w");
      return credentials;
    }, "getValidatedProcessCredentials");
  }
});

// node_modules/@aws-sdk/credential-provider-process/dist-es/resolveProcessCredentials.js
import { exec } from "node:child_process";
import { promisify } from "node:util";
var resolveProcessCredentials;
var init_resolveProcessCredentials = __esm({
  "node_modules/@aws-sdk/credential-provider-process/dist-es/resolveProcessCredentials.js"() {
    init_dist_es29();
    init_dist_es30();
    init_getValidatedProcessCredentials();
    resolveProcessCredentials = /* @__PURE__ */ __name(async (profileName, profiles, logger2) => {
      const profile = profiles[profileName];
      if (profiles[profileName]) {
        const credentialProcess = profile["credential_process"];
        if (credentialProcess !== void 0) {
          const execPromise = promisify(externalDataInterceptor?.getTokenRecord?.().exec ?? exec);
          try {
            const { stdout } = await execPromise(credentialProcess);
            let data;
            try {
              data = JSON.parse(stdout.trim());
            } catch {
              throw Error(`Profile ${profileName} credential_process returned invalid JSON.`);
            }
            return getValidatedProcessCredentials(profileName, data, profiles);
          } catch (error) {
            throw new CredentialsProviderError(error.message, { logger: logger2 });
          }
        } else {
          throw new CredentialsProviderError(`Profile ${profileName} did not contain credential_process.`, { logger: logger2 });
        }
      } else {
        throw new CredentialsProviderError(`Profile ${profileName} could not be found in shared credentials file.`, {
          logger: logger2
        });
      }
    }, "resolveProcessCredentials");
  }
});

// node_modules/@aws-sdk/credential-provider-process/dist-es/fromProcess.js
var fromProcess;
var init_fromProcess = __esm({
  "node_modules/@aws-sdk/credential-provider-process/dist-es/fromProcess.js"() {
    init_dist_es30();
    init_resolveProcessCredentials();
    fromProcess = /* @__PURE__ */ __name((init = {}) => async ({ callerClientConfig } = {}) => {
      init.logger?.debug("@aws-sdk/credential-provider-process - fromProcess");
      const profiles = await parseKnownFiles(init);
      return resolveProcessCredentials(getProfileName({
        profile: init.profile ?? callerClientConfig?.profile
      }), profiles, init.logger);
    }, "fromProcess");
  }
});

// node_modules/@aws-sdk/credential-provider-process/dist-es/index.js
var dist_es_exports5 = {};
__export(dist_es_exports5, {
  fromProcess: () => fromProcess
});
var init_dist_es52 = __esm({
  "node_modules/@aws-sdk/credential-provider-process/dist-es/index.js"() {
    init_fromProcess();
  }
});

// node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveProcessCredentials.js
var isProcessProfile, resolveProcessCredentials2;
var init_resolveProcessCredentials2 = __esm({
  "node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveProcessCredentials.js"() {
    init_client2();
    isProcessProfile = /* @__PURE__ */ __name((arg) => Boolean(arg) && typeof arg === "object" && typeof arg.credential_process === "string", "isProcessProfile");
    resolveProcessCredentials2 = /* @__PURE__ */ __name(async (options, profile) => Promise.resolve().then(() => (init_dist_es52(), dist_es_exports5)).then(({ fromProcess: fromProcess2 }) => fromProcess2({
      ...options,
      profile
    })().then((creds) => setCredentialFeature(creds, "CREDENTIALS_PROFILE_PROCESS", "v"))), "resolveProcessCredentials");
  }
});

// node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveSsoCredentials.js
var resolveSsoCredentials, isSsoProfile2;
var init_resolveSsoCredentials = __esm({
  "node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveSsoCredentials.js"() {
    init_client2();
    resolveSsoCredentials = /* @__PURE__ */ __name(async (profile, profileData, options = {}, callerClientConfig) => {
      const { fromSSO: fromSSO2 } = await Promise.resolve().then(() => (init_dist_es50(), dist_es_exports4));
      return fromSSO2({
        profile,
        logger: options.logger,
        parentClientConfig: options.parentClientConfig,
        clientConfig: options.clientConfig
      })({
        callerClientConfig
      }).then((creds) => {
        if (profileData.sso_session) {
          return setCredentialFeature(creds, "CREDENTIALS_PROFILE_SSO", "r");
        } else {
          return setCredentialFeature(creds, "CREDENTIALS_PROFILE_SSO_LEGACY", "t");
        }
      });
    }, "resolveSsoCredentials");
    isSsoProfile2 = /* @__PURE__ */ __name((arg) => arg && (typeof arg.sso_start_url === "string" || typeof arg.sso_account_id === "string" || typeof arg.sso_session === "string" || typeof arg.sso_region === "string" || typeof arg.sso_role_name === "string"), "isSsoProfile");
  }
});

// node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveStaticCredentials.js
var isStaticCredsProfile, resolveStaticCredentials;
var init_resolveStaticCredentials = __esm({
  "node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveStaticCredentials.js"() {
    init_client2();
    isStaticCredsProfile = /* @__PURE__ */ __name((arg) => Boolean(arg) && typeof arg === "object" && typeof arg.aws_access_key_id === "string" && typeof arg.aws_secret_access_key === "string" && ["undefined", "string"].indexOf(typeof arg.aws_session_token) > -1 && ["undefined", "string"].indexOf(typeof arg.aws_account_id) > -1, "isStaticCredsProfile");
    resolveStaticCredentials = /* @__PURE__ */ __name(async (profile, options) => {
      options?.logger?.debug("@aws-sdk/credential-provider-ini - resolveStaticCredentials");
      const credentials = {
        accessKeyId: profile.aws_access_key_id,
        secretAccessKey: profile.aws_secret_access_key,
        sessionToken: profile.aws_session_token,
        ...profile.aws_credential_scope && { credentialScope: profile.aws_credential_scope },
        ...profile.aws_account_id && { accountId: profile.aws_account_id }
      };
      return setCredentialFeature(credentials, "CREDENTIALS_PROFILE", "n");
    }, "resolveStaticCredentials");
  }
});

// node_modules/@aws-sdk/credential-provider-web-identity/dist-es/fromWebToken.js
var fromWebToken;
var init_fromWebToken = __esm({
  "node_modules/@aws-sdk/credential-provider-web-identity/dist-es/fromWebToken.js"() {
    fromWebToken = /* @__PURE__ */ __name((init) => async (awsIdentityProperties) => {
      init.logger?.debug("@aws-sdk/credential-provider-web-identity - fromWebToken");
      const { roleArn, roleSessionName, webIdentityToken, providerId, policyArns, policy, durationSeconds } = init;
      let { roleAssumerWithWebIdentity } = init;
      if (!roleAssumerWithWebIdentity) {
        const { getDefaultRoleAssumerWithWebIdentity: getDefaultRoleAssumerWithWebIdentity3 } = await Promise.resolve().then(() => (init_sts(), sts_exports));
        roleAssumerWithWebIdentity = getDefaultRoleAssumerWithWebIdentity3({
          ...init.clientConfig,
          credentialProviderLogger: init.logger,
          parentClientConfig: {
            ...awsIdentityProperties?.callerClientConfig,
            ...init.parentClientConfig
          }
        }, init.clientPlugins);
      }
      return roleAssumerWithWebIdentity({
        RoleArn: roleArn,
        RoleSessionName: roleSessionName ?? `aws-sdk-js-session-${Date.now()}`,
        WebIdentityToken: webIdentityToken,
        ProviderId: providerId,
        PolicyArns: policyArns,
        Policy: policy,
        DurationSeconds: durationSeconds
      });
    }, "fromWebToken");
  }
});

// node_modules/@aws-sdk/credential-provider-web-identity/dist-es/fromTokenFile.js
import { readFileSync } from "node:fs";
var ENV_TOKEN_FILE, ENV_ROLE_ARN, ENV_ROLE_SESSION_NAME, fromTokenFile;
var init_fromTokenFile = __esm({
  "node_modules/@aws-sdk/credential-provider-web-identity/dist-es/fromTokenFile.js"() {
    init_client2();
    init_dist_es29();
    init_dist_es30();
    init_fromWebToken();
    ENV_TOKEN_FILE = "AWS_WEB_IDENTITY_TOKEN_FILE";
    ENV_ROLE_ARN = "AWS_ROLE_ARN";
    ENV_ROLE_SESSION_NAME = "AWS_ROLE_SESSION_NAME";
    fromTokenFile = /* @__PURE__ */ __name((init = {}) => async (awsIdentityProperties) => {
      init.logger?.debug("@aws-sdk/credential-provider-web-identity - fromTokenFile");
      const webIdentityTokenFile = init?.webIdentityTokenFile ?? process.env[ENV_TOKEN_FILE];
      const roleArn = init?.roleArn ?? process.env[ENV_ROLE_ARN];
      const roleSessionName = init?.roleSessionName ?? process.env[ENV_ROLE_SESSION_NAME];
      if (!webIdentityTokenFile || !roleArn) {
        throw new CredentialsProviderError("Web identity configuration not specified", {
          logger: init.logger
        });
      }
      const credentials = await fromWebToken({
        ...init,
        webIdentityToken: externalDataInterceptor?.getTokenRecord?.()[webIdentityTokenFile] ?? readFileSync(webIdentityTokenFile, { encoding: "ascii" }),
        roleArn,
        roleSessionName
      })(awsIdentityProperties);
      if (webIdentityTokenFile === process.env[ENV_TOKEN_FILE]) {
        setCredentialFeature(credentials, "CREDENTIALS_ENV_VARS_STS_WEB_ID_TOKEN", "h");
      }
      return credentials;
    }, "fromTokenFile");
  }
});

// node_modules/@aws-sdk/credential-provider-web-identity/dist-es/index.js
var dist_es_exports6 = {};
__export(dist_es_exports6, {
  fromTokenFile: () => fromTokenFile,
  fromWebToken: () => fromWebToken
});
var init_dist_es53 = __esm({
  "node_modules/@aws-sdk/credential-provider-web-identity/dist-es/index.js"() {
    init_fromTokenFile();
    init_fromWebToken();
  }
});

// node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveWebIdentityCredentials.js
var isWebIdentityProfile, resolveWebIdentityCredentials;
var init_resolveWebIdentityCredentials = __esm({
  "node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveWebIdentityCredentials.js"() {
    init_client2();
    isWebIdentityProfile = /* @__PURE__ */ __name((arg) => Boolean(arg) && typeof arg === "object" && typeof arg.web_identity_token_file === "string" && typeof arg.role_arn === "string" && ["undefined", "string"].indexOf(typeof arg.role_session_name) > -1, "isWebIdentityProfile");
    resolveWebIdentityCredentials = /* @__PURE__ */ __name(async (profile, options, callerClientConfig) => Promise.resolve().then(() => (init_dist_es53(), dist_es_exports6)).then(({ fromTokenFile: fromTokenFile2 }) => fromTokenFile2({
      webIdentityTokenFile: profile.web_identity_token_file,
      roleArn: profile.role_arn,
      roleSessionName: profile.role_session_name,
      roleAssumerWithWebIdentity: options.roleAssumerWithWebIdentity,
      logger: options.logger,
      parentClientConfig: options.parentClientConfig
    })({
      callerClientConfig
    }).then((creds) => setCredentialFeature(creds, "CREDENTIALS_PROFILE_STS_WEB_ID_TOKEN", "q"))), "resolveWebIdentityCredentials");
  }
});

// node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveProfileData.js
var resolveProfileData;
var init_resolveProfileData = __esm({
  "node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveProfileData.js"() {
    init_dist_es29();
    init_resolveAssumeRoleCredentials();
    init_resolveLoginCredentials();
    init_resolveProcessCredentials2();
    init_resolveSsoCredentials();
    init_resolveStaticCredentials();
    init_resolveWebIdentityCredentials();
    resolveProfileData = /* @__PURE__ */ __name(async (profileName, profiles, options, callerClientConfig, visitedProfiles = {}, isAssumeRoleRecursiveCall = false) => {
      const data = profiles[profileName];
      if (Object.keys(visitedProfiles).length > 0 && isStaticCredsProfile(data)) {
        return resolveStaticCredentials(data, options);
      }
      if (isAssumeRoleRecursiveCall || isAssumeRoleProfile(data, { profile: profileName, logger: options.logger })) {
        return resolveAssumeRoleCredentials(profileName, profiles, options, callerClientConfig, visitedProfiles, resolveProfileData);
      }
      if (isStaticCredsProfile(data)) {
        return resolveStaticCredentials(data, options);
      }
      if (isWebIdentityProfile(data)) {
        return resolveWebIdentityCredentials(data, options, callerClientConfig);
      }
      if (isProcessProfile(data)) {
        return resolveProcessCredentials2(options, profileName);
      }
      if (isSsoProfile2(data)) {
        return await resolveSsoCredentials(profileName, data, options, callerClientConfig);
      }
      if (isLoginProfile(data)) {
        return resolveLoginCredentials(profileName, options, callerClientConfig);
      }
      throw new CredentialsProviderError(`Could not resolve credentials using profile: [${profileName}] in configuration/credentials file(s).`, { logger: options.logger });
    }, "resolveProfileData");
  }
});

// node_modules/@aws-sdk/credential-provider-ini/dist-es/fromIni.js
var fromIni;
var init_fromIni = __esm({
  "node_modules/@aws-sdk/credential-provider-ini/dist-es/fromIni.js"() {
    init_dist_es30();
    init_resolveProfileData();
    fromIni = /* @__PURE__ */ __name((init = {}) => async ({ callerClientConfig } = {}) => {
      init.logger?.debug("@aws-sdk/credential-provider-ini - fromIni");
      const profiles = await parseKnownFiles(init);
      return resolveProfileData(getProfileName({
        profile: init.profile ?? callerClientConfig?.profile
      }), profiles, init, callerClientConfig);
    }, "fromIni");
  }
});

// node_modules/@aws-sdk/credential-provider-ini/dist-es/index.js
var dist_es_exports7 = {};
__export(dist_es_exports7, {
  fromIni: () => fromIni
});
var init_dist_es54 = __esm({
  "node_modules/@aws-sdk/credential-provider-ini/dist-es/index.js"() {
    init_fromIni();
  }
});

// node_modules/@aws-sdk/client-sesv2/dist-es/SESv2Client.js
init_dist_es3();
init_dist_es4();
init_dist_es5();
init_dist_es25();
init_dist_es27();
init_dist_es20();
init_schema2();
init_dist_es28();
init_dist_es33();
init_dist_es36();
init_dist_es35();

// node_modules/@aws-sdk/client-sesv2/dist-es/auth/httpAuthSchemeProvider.js
init_httpAuthSchemes2();
init_dist_es40();
init_dist_es33();
init_dist_es6();

// node_modules/@aws-sdk/client-sesv2/dist-es/endpoint/endpointResolver.js
init_dist_es22();
init_dist_es21();

// node_modules/@aws-sdk/client-sesv2/dist-es/endpoint/bdd.js
init_dist_es21();
var m = "ref";
var a = -1;
var b = true;
var c = "isSet";
var d = "PartitionResult";
var e = "booleanEquals";
var f = "getAttr";
var g = { [m]: "EndpointId" };
var h = { [m]: "Endpoint" };
var i = { [m]: d };
var j = { "authSchemes": [{ "name": "sigv4a", "signingName": "ses", "signingRegionSet": ["*"] }] };
var k = {};
var l = [{ [m]: "Region" }];
var _data = {
  conditions: [
    [c, l],
    ["aws.partition", l, d],
    [c, [g]],
    ["isValidHostLabel", [g, b]],
    [c, [h]],
    [e, [{ [m]: "UseFIPS" }, b]],
    [e, [{ [m]: "UseDualStack" }, b]],
    [e, [{ fn: f, argv: [i, "supportsDualStack"] }, b]],
    [e, [{ fn: f, argv: [i, "supportsFIPS"] }, b]]
  ],
  results: [
    [a],
    [h, j],
    ["https://{EndpointId}.endpoints.email.global.{PartitionResult#dualStackDnsSuffix}", j],
    [a, "DualStack is enabled but this partition does not support DualStack"],
    ["https://{EndpointId}.endpoints.email.{PartitionResult#dnsSuffix}", j],
    [a, "Invalid Configuration: FIPS is not supported with multi-region endpoints"],
    [a, "EndpointId must be a valid host label"],
    [a, "Invalid Configuration: FIPS and custom endpoint are not supported"],
    [a, "Invalid Configuration: Dualstack and custom endpoint are not supported"],
    [h, k],
    ["https://email-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", k],
    [a, "FIPS and DualStack are enabled, but this partition does not support one or both"],
    ["https://email-fips.{Region}.{PartitionResult#dnsSuffix}", k],
    [a, "FIPS is enabled but this partition does not support FIPS"],
    ["https://email.{Region}.{PartitionResult#dualStackDnsSuffix}", k],
    ["https://email.{Region}.{PartitionResult#dnsSuffix}", k],
    [a, "Invalid Configuration: Missing Region"]
  ]
};
var root = 2;
var r = 1e8;
var nodes = new Int32Array([
  -1,
  1,
  -1,
  0,
  3,
  4,
  1,
  5,
  4,
  4,
  14,
  r + 16,
  2,
  16,
  6,
  4,
  14,
  7,
  5,
  10,
  8,
  6,
  9,
  r + 15,
  7,
  r + 14,
  r + 3,
  6,
  12,
  11,
  8,
  r + 12,
  r + 13,
  7,
  13,
  r + 11,
  8,
  r + 10,
  r + 11,
  5,
  r + 7,
  15,
  6,
  r + 8,
  r + 9,
  3,
  17,
  r + 6,
  4,
  21,
  18,
  5,
  r + 5,
  19,
  6,
  20,
  r + 4,
  7,
  r + 2,
  r + 3,
  5,
  r + 5,
  r + 1
]);
var bdd = BinaryDecisionDiagram.from(nodes, root, _data.conditions, _data.results);

// node_modules/@aws-sdk/client-sesv2/dist-es/endpoint/endpointResolver.js
var cache = new EndpointCache({
  size: 50,
  params: ["Endpoint", "EndpointId", "Region", "UseDualStack", "UseFIPS"]
});
var defaultEndpointResolver = /* @__PURE__ */ __name((endpointParams, context = {}) => {
  return cache.get(endpointParams, () => decideEndpoint(bdd, {
    endpointParams,
    logger: context.logger
  }));
}, "defaultEndpointResolver");
customEndpointFunctions.aws = awsEndpointFunctions;

// node_modules/@aws-sdk/client-sesv2/dist-es/auth/httpAuthSchemeProvider.js
var createEndpointRuleSetHttpAuthSchemeParametersProvider = /* @__PURE__ */ __name((defaultHttpAuthSchemeParametersProvider) => async (config, context, input) => {
  if (!input) {
    throw new Error("Could not find `input` for `defaultEndpointRuleSetHttpAuthSchemeParametersProvider`");
  }
  const defaultParameters = await defaultHttpAuthSchemeParametersProvider(config, context, input);
  const instructionsFn = getSmithyContext(context)?.commandInstance?.constructor?.getEndpointParameterInstructions;
  if (!instructionsFn) {
    throw new Error(`getEndpointParameterInstructions() is not defined on '${context.commandName}'`);
  }
  const endpointParameters = await resolveParams(input, { getEndpointParameterInstructions: instructionsFn }, config);
  return Object.assign(defaultParameters, endpointParameters);
}, "createEndpointRuleSetHttpAuthSchemeParametersProvider");
var _defaultSESv2HttpAuthSchemeParametersProvider = /* @__PURE__ */ __name(async (config, context, input) => {
  return {
    operation: getSmithyContext(context).operation,
    region: await normalizeProvider(config.region)() || (() => {
      throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
    })()
  };
}, "_defaultSESv2HttpAuthSchemeParametersProvider");
var defaultSESv2HttpAuthSchemeParametersProvider = createEndpointRuleSetHttpAuthSchemeParametersProvider(_defaultSESv2HttpAuthSchemeParametersProvider);
function createAwsAuthSigv4HttpAuthOption(authParameters) {
  return {
    schemeId: "aws.auth#sigv4",
    signingProperties: {
      name: "ses",
      region: authParameters.region
    },
    propertiesExtractor: /* @__PURE__ */ __name((config, context) => ({
      signingProperties: {
        config,
        context
      }
    }), "propertiesExtractor")
  };
}
__name(createAwsAuthSigv4HttpAuthOption, "createAwsAuthSigv4HttpAuthOption");
function createAwsAuthSigv4aHttpAuthOption(authParameters) {
  return {
    schemeId: "aws.auth#sigv4a",
    signingProperties: {
      name: "ses",
      region: authParameters.region
    },
    propertiesExtractor: /* @__PURE__ */ __name((config, context) => ({
      signingProperties: {
        config,
        context
      }
    }), "propertiesExtractor")
  };
}
__name(createAwsAuthSigv4aHttpAuthOption, "createAwsAuthSigv4aHttpAuthOption");
var createEndpointRuleSetHttpAuthSchemeProvider = /* @__PURE__ */ __name((defaultEndpointResolver6, defaultHttpAuthSchemeResolver, createHttpAuthOptionFunctions) => {
  const endpointRuleSetHttpAuthSchemeProvider = /* @__PURE__ */ __name((authParameters) => {
    const endpoint = defaultEndpointResolver6(authParameters);
    const authSchemes = endpoint.properties?.authSchemes;
    if (!authSchemes) {
      return defaultHttpAuthSchemeResolver(authParameters);
    }
    const options = [];
    for (const scheme of authSchemes) {
      const { name: resolvedName, properties = {}, ...rest } = scheme;
      const name = resolvedName.toLowerCase();
      if (resolvedName !== name) {
        console.warn(`HttpAuthScheme has been normalized with lowercasing: '${resolvedName}' to '${name}'`);
      }
      let schemeId;
      if (name === "sigv4a") {
        schemeId = "aws.auth#sigv4a";
        const sigv4Present = authSchemes.find((s) => {
          const name2 = s.name.toLowerCase();
          return name2 !== "sigv4a" && name2.startsWith("sigv4");
        });
        if (SignatureV4MultiRegion.sigv4aDependency() === "none" && sigv4Present) {
          continue;
        }
      } else if (name.startsWith("sigv4")) {
        schemeId = "aws.auth#sigv4";
      } else {
        throw new Error(`Unknown HttpAuthScheme found in '@smithy.rules#endpointRuleSet': '${name}'`);
      }
      const createOption = createHttpAuthOptionFunctions[schemeId];
      if (!createOption) {
        throw new Error(`Could not find HttpAuthOption create function for '${schemeId}'`);
      }
      const option = createOption(authParameters);
      option.schemeId = schemeId;
      option.signingProperties = { ...option.signingProperties || {}, ...rest, ...properties };
      options.push(option);
    }
    return options;
  }, "endpointRuleSetHttpAuthSchemeProvider");
  return endpointRuleSetHttpAuthSchemeProvider;
}, "createEndpointRuleSetHttpAuthSchemeProvider");
var _defaultSESv2HttpAuthSchemeProvider = /* @__PURE__ */ __name((authParameters) => {
  const options = [];
  switch (authParameters.operation) {
    default: {
      options.push(createAwsAuthSigv4HttpAuthOption(authParameters));
      options.push(createAwsAuthSigv4aHttpAuthOption(authParameters));
    }
  }
  return options;
}, "_defaultSESv2HttpAuthSchemeProvider");
var defaultSESv2HttpAuthSchemeProvider = createEndpointRuleSetHttpAuthSchemeProvider(defaultEndpointResolver, _defaultSESv2HttpAuthSchemeProvider, {
  "aws.auth#sigv4": createAwsAuthSigv4HttpAuthOption,
  "aws.auth#sigv4a": createAwsAuthSigv4aHttpAuthOption
});
var resolveHttpAuthSchemeConfig = /* @__PURE__ */ __name((config) => {
  const config_0 = resolveAwsSdkSigV4Config(config);
  const config_1 = resolveAwsSdkSigV4AConfig(config_0);
  return Object.assign(config_1, {
    authSchemePreference: normalizeProvider(config.authSchemePreference ?? [])
  });
}, "resolveHttpAuthSchemeConfig");

// node_modules/@aws-sdk/client-sesv2/dist-es/endpoint/EndpointParameters.js
var resolveClientEndpointParameters = /* @__PURE__ */ __name((options) => {
  return Object.assign(options, {
    useDualstackEndpoint: options.useDualstackEndpoint ?? false,
    useFipsEndpoint: options.useFipsEndpoint ?? false,
    defaultSigningName: "ses"
  });
}, "resolveClientEndpointParameters");
var commonParams = {
  UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
  Endpoint: { type: "builtInParams", name: "endpoint" },
  Region: { type: "builtInParams", name: "region" },
  UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
};

// node_modules/@aws-sdk/client-sesv2/package.json
var package_default = {
  name: "@aws-sdk/client-sesv2",
  description: "AWS SDK for JavaScript Sesv2 Client for Node.js, Browser and React Native",
  version: "3.1035.0",
  scripts: {
    build: "concurrently 'yarn:build:types' 'yarn:build:es' && yarn build:cjs",
    "build:cjs": "node ../../scripts/compilation/inline client-sesv2",
    "build:es": "tsc -p tsconfig.es.json",
    "build:include:deps": 'yarn g:turbo run build -F="$npm_package_name"',
    "build:types": "tsc -p tsconfig.types.json",
    "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
    clean: "premove dist-cjs dist-es dist-types tsconfig.cjs.tsbuildinfo tsconfig.es.tsbuildinfo tsconfig.types.tsbuildinfo",
    "extract:docs": "api-extractor run --local",
    "generate:client": "node ../../scripts/generate-clients/single-service --solo sesv2",
    "test:index": "tsc --noEmit ./test/index-types.ts && node ./test/index-objects.spec.mjs"
  },
  main: "./dist-cjs/index.js",
  types: "./dist-types/index.d.ts",
  module: "./dist-es/index.js",
  sideEffects: false,
  dependencies: {
    "@aws-crypto/sha256-browser": "5.2.0",
    "@aws-crypto/sha256-js": "5.2.0",
    "@aws-sdk/core": "^3.974.4",
    "@aws-sdk/credential-provider-node": "^3.972.35",
    "@aws-sdk/middleware-host-header": "^3.972.10",
    "@aws-sdk/middleware-logger": "^3.972.10",
    "@aws-sdk/middleware-recursion-detection": "^3.972.11",
    "@aws-sdk/middleware-user-agent": "^3.972.34",
    "@aws-sdk/region-config-resolver": "^3.972.13",
    "@aws-sdk/signature-v4-multi-region": "^3.996.21",
    "@aws-sdk/types": "^3.973.8",
    "@aws-sdk/util-endpoints": "^3.996.8",
    "@aws-sdk/util-user-agent-browser": "^3.972.10",
    "@aws-sdk/util-user-agent-node": "^3.973.20",
    "@smithy/config-resolver": "^4.4.17",
    "@smithy/core": "^3.23.16",
    "@smithy/fetch-http-handler": "^5.3.17",
    "@smithy/hash-node": "^4.2.14",
    "@smithy/invalid-dependency": "^4.2.14",
    "@smithy/middleware-content-length": "^4.2.14",
    "@smithy/middleware-endpoint": "^4.4.31",
    "@smithy/middleware-retry": "^4.5.4",
    "@smithy/middleware-serde": "^4.2.19",
    "@smithy/middleware-stack": "^4.2.14",
    "@smithy/node-config-provider": "^4.3.14",
    "@smithy/node-http-handler": "^4.6.0",
    "@smithy/protocol-http": "^5.3.14",
    "@smithy/smithy-client": "^4.12.12",
    "@smithy/types": "^4.14.1",
    "@smithy/url-parser": "^4.2.14",
    "@smithy/util-base64": "^4.3.2",
    "@smithy/util-body-length-browser": "^4.2.2",
    "@smithy/util-body-length-node": "^4.2.3",
    "@smithy/util-defaults-mode-browser": "^4.3.48",
    "@smithy/util-defaults-mode-node": "^4.2.53",
    "@smithy/util-endpoints": "^3.4.2",
    "@smithy/util-middleware": "^4.2.14",
    "@smithy/util-retry": "^4.3.3",
    "@smithy/util-utf8": "^4.2.2",
    tslib: "^2.6.2"
  },
  devDependencies: {
    "@tsconfig/node20": "20.1.8",
    "@types/node": "^20.14.8",
    concurrently: "7.0.0",
    "downlevel-dts": "0.10.1",
    premove: "4.0.0",
    typescript: "~5.8.3"
  },
  engines: {
    node: ">=20.0.0"
  },
  typesVersions: {
    "<4.5": {
      "dist-types/*": [
        "dist-types/ts3.4/*"
      ]
    }
  },
  files: [
    "dist-*/**"
  ],
  author: {
    name: "AWS SDK for JavaScript Team",
    url: "https://aws.amazon.com/javascript/"
  },
  license: "Apache-2.0",
  browser: {
    "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser"
  },
  "react-native": {
    "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native"
  },
  homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-sesv2",
  repository: {
    type: "git",
    url: "https://github.com/aws/aws-sdk-js-v3.git",
    directory: "clients/client-sesv2"
  }
};

// node_modules/@aws-sdk/client-sesv2/dist-es/runtimeConfig.js
init_client2();
init_httpAuthSchemes2();

// node_modules/@aws-sdk/credential-provider-node/dist-es/defaultProvider.js
init_dist_es41();
init_dist_es29();
init_dist_es30();

// node_modules/@aws-sdk/credential-provider-node/dist-es/remoteProvider.js
init_dist_es29();
var ENV_IMDS_DISABLED = "AWS_EC2_METADATA_DISABLED";
var remoteProvider = /* @__PURE__ */ __name(async (init) => {
  const { ENV_CMDS_FULL_URI: ENV_CMDS_FULL_URI2, ENV_CMDS_RELATIVE_URI: ENV_CMDS_RELATIVE_URI2, fromContainerMetadata: fromContainerMetadata2, fromInstanceMetadata: fromInstanceMetadata2 } = await Promise.resolve().then(() => (init_dist_es42(), dist_es_exports2));
  if (process.env[ENV_CMDS_RELATIVE_URI2] || process.env[ENV_CMDS_FULL_URI2]) {
    init.logger?.debug("@aws-sdk/credential-provider-node - remoteProvider::fromHttp/fromContainerMetadata");
    const { fromHttp: fromHttp2 } = await Promise.resolve().then(() => (init_dist_es43(), dist_es_exports3));
    return chain(fromHttp2(init), fromContainerMetadata2(init));
  }
  if (process.env[ENV_IMDS_DISABLED] && process.env[ENV_IMDS_DISABLED] !== "false") {
    return async () => {
      throw new CredentialsProviderError("EC2 Instance Metadata Service access disabled", { logger: init.logger });
    };
  }
  init.logger?.debug("@aws-sdk/credential-provider-node - remoteProvider::fromInstanceMetadata");
  return fromInstanceMetadata2(init);
}, "remoteProvider");

// node_modules/@aws-sdk/credential-provider-node/dist-es/runtime/memoize-chain.js
function memoizeChain(providers, treatAsExpired) {
  const chain2 = internalCreateChain(providers);
  let activeLock;
  let passiveLock;
  let credentials;
  const provider = /* @__PURE__ */ __name(async (options) => {
    if (options?.forceRefresh) {
      return await chain2(options);
    }
    if (credentials?.expiration) {
      if (credentials?.expiration?.getTime() < Date.now()) {
        credentials = void 0;
      }
    }
    if (activeLock) {
      await activeLock;
    } else if (!credentials || treatAsExpired?.(credentials)) {
      if (credentials) {
        if (!passiveLock) {
          passiveLock = chain2(options).then((c6) => {
            credentials = c6;
          }).finally(() => {
            passiveLock = void 0;
          });
        }
      } else {
        activeLock = chain2(options).then((c6) => {
          credentials = c6;
        }).finally(() => {
          activeLock = void 0;
        });
        return provider(options);
      }
    }
    return credentials;
  }, "provider");
  return provider;
}
__name(memoizeChain, "memoizeChain");
var internalCreateChain = /* @__PURE__ */ __name((providers) => async (awsIdentityProperties) => {
  let lastProviderError;
  for (const provider of providers) {
    try {
      return await provider(awsIdentityProperties);
    } catch (err) {
      lastProviderError = err;
      if (err?.tryNextLink) {
        continue;
      }
      throw err;
    }
  }
  throw lastProviderError;
}, "internalCreateChain");

// node_modules/@aws-sdk/credential-provider-node/dist-es/defaultProvider.js
var multipleCredentialSourceWarningEmitted = false;
var defaultProvider = /* @__PURE__ */ __name((init = {}) => memoizeChain([
  async () => {
    const profile = init.profile ?? process.env[ENV_PROFILE];
    if (profile) {
      const envStaticCredentialsAreSet = process.env[ENV_KEY] && process.env[ENV_SECRET];
      if (envStaticCredentialsAreSet) {
        if (!multipleCredentialSourceWarningEmitted) {
          const warnFn = init.logger?.warn && init.logger?.constructor?.name !== "NoOpLogger" ? init.logger.warn.bind(init.logger) : console.warn;
          warnFn(`@aws-sdk/credential-provider-node - defaultProvider::fromEnv WARNING:
    Multiple credential sources detected: 
    Both AWS_PROFILE and the pair AWS_ACCESS_KEY_ID/AWS_SECRET_ACCESS_KEY static credentials are set.
    This SDK will proceed with the AWS_PROFILE value.
    
    However, a future version may change this behavior to prefer the ENV static credentials.
    Please ensure that your environment only sets either the AWS_PROFILE or the
    AWS_ACCESS_KEY_ID/AWS_SECRET_ACCESS_KEY pair.
`);
          multipleCredentialSourceWarningEmitted = true;
        }
      }
      throw new CredentialsProviderError("AWS_PROFILE is set, skipping fromEnv provider.", {
        logger: init.logger,
        tryNextLink: true
      });
    }
    init.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromEnv");
    return fromEnv2(init)();
  },
  async (awsIdentityProperties) => {
    init.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromSSO");
    const { ssoStartUrl, ssoAccountId, ssoRegion, ssoRoleName, ssoSession } = init;
    if (!ssoStartUrl && !ssoAccountId && !ssoRegion && !ssoRoleName && !ssoSession) {
      throw new CredentialsProviderError("Skipping SSO provider in default chain (inputs do not include SSO fields).", { logger: init.logger });
    }
    const { fromSSO: fromSSO2 } = await Promise.resolve().then(() => (init_dist_es50(), dist_es_exports4));
    return fromSSO2(init)(awsIdentityProperties);
  },
  async (awsIdentityProperties) => {
    init.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromIni");
    const { fromIni: fromIni2 } = await Promise.resolve().then(() => (init_dist_es54(), dist_es_exports7));
    return fromIni2(init)(awsIdentityProperties);
  },
  async (awsIdentityProperties) => {
    init.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromProcess");
    const { fromProcess: fromProcess2 } = await Promise.resolve().then(() => (init_dist_es52(), dist_es_exports5));
    return fromProcess2(init)(awsIdentityProperties);
  },
  async (awsIdentityProperties) => {
    init.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromTokenFile");
    const { fromTokenFile: fromTokenFile2 } = await Promise.resolve().then(() => (init_dist_es53(), dist_es_exports6));
    return fromTokenFile2(init)(awsIdentityProperties);
  },
  async () => {
    init.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::remoteProvider");
    return (await remoteProvider(init))();
  },
  async () => {
    throw new CredentialsProviderError("Could not load credentials from any providers", {
      tryNextLink: false,
      logger: init.logger
    });
  }
], credentialsTreatedAsExpired), "defaultProvider");
var credentialsTreatedAsExpired = /* @__PURE__ */ __name((credentials) => credentials?.expiration !== void 0 && credentials.expiration.getTime() - Date.now() < 3e5, "credentialsTreatedAsExpired");

// node_modules/@aws-sdk/client-sesv2/dist-es/runtimeConfig.js
init_dist_es44();
init_dist_es27();
init_dist_es45();
init_dist_es36();
init_dist_es31();
init_dist_es13();
init_dist_es35();
init_dist_es46();
init_dist_es47();
init_dist_es24();

// node_modules/@aws-sdk/client-sesv2/dist-es/runtimeConfig.shared.js
init_httpAuthSchemes2();
init_protocols2();
init_dist_es40();
init_dist_es35();
init_dist_es18();
init_dist_es10();
init_dist_es9();

// node_modules/@aws-sdk/client-sesv2/dist-es/schemas/schemas_0.js
init_schema2();

// node_modules/@aws-sdk/client-sesv2/dist-es/models/SESv2ServiceException.js
init_dist_es35();
var SESv2ServiceException = class _SESv2ServiceException extends ServiceException {
  static {
    __name(this, "SESv2ServiceException");
  }
  constructor(options) {
    super(options);
    Object.setPrototypeOf(this, _SESv2ServiceException.prototype);
  }
};

// node_modules/@aws-sdk/client-sesv2/dist-es/models/errors.js
var AccountSuspendedException = class _AccountSuspendedException extends SESv2ServiceException {
  static {
    __name(this, "AccountSuspendedException");
  }
  name = "AccountSuspendedException";
  $fault = "client";
  constructor(opts) {
    super({
      name: "AccountSuspendedException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _AccountSuspendedException.prototype);
  }
};
var AlreadyExistsException = class _AlreadyExistsException extends SESv2ServiceException {
  static {
    __name(this, "AlreadyExistsException");
  }
  name = "AlreadyExistsException";
  $fault = "client";
  constructor(opts) {
    super({
      name: "AlreadyExistsException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _AlreadyExistsException.prototype);
  }
};
var BadRequestException = class _BadRequestException extends SESv2ServiceException {
  static {
    __name(this, "BadRequestException");
  }
  name = "BadRequestException";
  $fault = "client";
  constructor(opts) {
    super({
      name: "BadRequestException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _BadRequestException.prototype);
  }
};
var InternalServiceErrorException = class _InternalServiceErrorException extends SESv2ServiceException {
  static {
    __name(this, "InternalServiceErrorException");
  }
  name = "InternalServiceErrorException";
  $fault = "server";
  constructor(opts) {
    super({
      name: "InternalServiceErrorException",
      $fault: "server",
      ...opts
    });
    Object.setPrototypeOf(this, _InternalServiceErrorException.prototype);
  }
};
var NotFoundException = class _NotFoundException extends SESv2ServiceException {
  static {
    __name(this, "NotFoundException");
  }
  name = "NotFoundException";
  $fault = "client";
  constructor(opts) {
    super({
      name: "NotFoundException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _NotFoundException.prototype);
  }
};
var TooManyRequestsException2 = class _TooManyRequestsException extends SESv2ServiceException {
  static {
    __name(this, "TooManyRequestsException");
  }
  name = "TooManyRequestsException";
  $fault = "client";
  constructor(opts) {
    super({
      name: "TooManyRequestsException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _TooManyRequestsException.prototype);
  }
};
var ConcurrentModificationException = class _ConcurrentModificationException extends SESv2ServiceException {
  static {
    __name(this, "ConcurrentModificationException");
  }
  name = "ConcurrentModificationException";
  $fault = "server";
  constructor(opts) {
    super({
      name: "ConcurrentModificationException",
      $fault: "server",
      ...opts
    });
    Object.setPrototypeOf(this, _ConcurrentModificationException.prototype);
  }
};
var ConflictException = class _ConflictException extends SESv2ServiceException {
  static {
    __name(this, "ConflictException");
  }
  name = "ConflictException";
  $fault = "client";
  constructor(opts) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _ConflictException.prototype);
  }
};
var LimitExceededException = class _LimitExceededException extends SESv2ServiceException {
  static {
    __name(this, "LimitExceededException");
  }
  name = "LimitExceededException";
  $fault = "client";
  constructor(opts) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _LimitExceededException.prototype);
  }
};
var MailFromDomainNotVerifiedException = class _MailFromDomainNotVerifiedException extends SESv2ServiceException {
  static {
    __name(this, "MailFromDomainNotVerifiedException");
  }
  name = "MailFromDomainNotVerifiedException";
  $fault = "client";
  constructor(opts) {
    super({
      name: "MailFromDomainNotVerifiedException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _MailFromDomainNotVerifiedException.prototype);
  }
};
var MessageRejected = class _MessageRejected extends SESv2ServiceException {
  static {
    __name(this, "MessageRejected");
  }
  name = "MessageRejected";
  $fault = "client";
  constructor(opts) {
    super({
      name: "MessageRejected",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _MessageRejected.prototype);
  }
};
var SendingPausedException = class _SendingPausedException extends SESv2ServiceException {
  static {
    __name(this, "SendingPausedException");
  }
  name = "SendingPausedException";
  $fault = "client";
  constructor(opts) {
    super({
      name: "SendingPausedException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _SendingPausedException.prototype);
  }
};
var InvalidNextTokenException = class _InvalidNextTokenException extends SESv2ServiceException {
  static {
    __name(this, "InvalidNextTokenException");
  }
  name = "InvalidNextTokenException";
  $fault = "client";
  constructor(opts) {
    super({
      name: "InvalidNextTokenException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _InvalidNextTokenException.prototype);
  }
};

// node_modules/@aws-sdk/client-sesv2/dist-es/schemas/schemas_0.js
var _A2 = "Attachment";
var _AA = "ArchiveArn";
var _AAp = "ApplicationArn";
var _ACEA = "AdditionalContactEmailAddress";
var _ACEAd = "AdditionalContactEmailAddresses";
var _AD = "AccountDetails";
var _ADt = "AttributesData";
var _AE = "AdminEmail";
var _AEE = "AlreadyExistsException";
var _AL = "AttachmentList";
var _AO = "ArchivingOptions";
var _AS = "AccountStatus";
var _ASD = "ActiveSubscribedDomains";
var _ASE = "AccountSuspendedException";
var _ASMS = "AwsSesManagedStatus";
var _AT3 = "AssociatedTimestamp";
var _AWE = "AutoWarmupEnabled";
var _Ag = "Aggregation";
var _At = "Attachments";
var _Att = "Attributes";
var _B = "Body";
var _BA = "BccAddresses";
var _BE = "BlacklistEntry";
var _BEC = "BulkEmailContent";
var _BEE = "BulkEmailEntry";
var _BEEL = "BulkEmailEntryList";
var _BEER = "BulkEmailEntryResult";
var _BEERL = "BulkEmailEntryResultList";
var _BEERu = "BulkEmailEntryResults";
var _BEEu = "BulkEmailEntries";
var _BEl = "BlacklistEntries";
var _BGMD = "BatchGetMetricData";
var _BGMDQ = "BatchGetMetricDataQuery";
var _BGMDQa = "BatchGetMetricDataQueries";
var _BGMDR = "BatchGetMetricDataRequest";
var _BGMDRa = "BatchGetMetricDataResponse";
var _BIN = "BlacklistItemNames";
var _BOMF = "BehaviorOnMxFailure";
var _BR = "BlacklistReport";
var _BRE = "BadRequestException";
var _BST = "BounceSubType";
var _BT = "BounceType";
var _Bo = "Bounce";
var _C2 = "Complaint";
var _CA2 = "CcAddresses";
var _CC = "CreateContact";
var _CCL = "CreateContactList";
var _CCLR = "CreateContactListRequest";
var _CCLRr = "CreateContactListResponse";
var _CCR = "CreateContactRequest";
var _CCRr = "CreateContactResponse";
var _CCS = "CreateConfigurationSet";
var _CCSED = "CreateConfigurationSetEventDestination";
var _CCSEDR = "CreateConfigurationSetEventDestinationRequest";
var _CCSEDRr = "CreateConfigurationSetEventDestinationResponse";
var _CCSR = "CreateConfigurationSetRequest";
var _CCSRr = "CreateConfigurationSetResponse";
var _CCVET = "CreateCustomVerificationEmailTemplate";
var _CCVETR = "CreateCustomVerificationEmailTemplateRequest";
var _CCVETRr = "CreateCustomVerificationEmailTemplateResponse";
var _CD = "ContentDisposition";
var _CDIP = "CreateDedicatedIpPool";
var _CDIPR = "CreateDedicatedIpPoolRequest";
var _CDIPRr = "CreateDedicatedIpPoolResponse";
var _CDTR = "CreateDeliverabilityTestReport";
var _CDTRR = "CreateDeliverabilityTestReportRequest";
var _CDTRRr = "CreateDeliverabilityTestReportResponse";
var _CDo = "ContentDescription";
var _CDr = "CreateDate";
var _CE = "ConflictException";
var _CEI = "CreateEmailIdentity";
var _CEIP = "CreateEmailIdentityPolicy";
var _CEIPR = "CreateEmailIdentityPolicyRequest";
var _CEIPRr = "CreateEmailIdentityPolicyResponse";
var _CEIR = "CreateEmailIdentityRequest";
var _CEIRr = "CreateEmailIdentityResponse";
var _CEJ = "CancelExportJob";
var _CEJR = "CancelExportJobRequest";
var _CEJRa = "CancelExportJobResponse";
var _CEJRr = "CreateExportJobRequest";
var _CEJRre = "CreateExportJobResponse";
var _CEJr = "CreateExportJob";
var _CET = "CreateEmailTemplate";
var _CETR = "CreateEmailTemplateRequest";
var _CETRr = "CreateEmailTemplateResponse";
var _CFT = "ComplaintFeedbackType";
var _CI = "ContentId";
var _CIJ = "CreateImportJob";
var _CIJR = "CreateImportJobRequest";
var _CIJRr = "CreateImportJobResponse";
var _CIa = "CampaignId";
var _CIas = "CaseId";
var _CL = "ContactLanguage";
var _CLD = "ContactListDestination";
var _CLIA = "ContactListImportAction";
var _CLN = "ContactListName";
var _CLo = "ContactList";
var _CLon = "ContactLists";
var _CME = "ConcurrentModificationException";
var _CMRE = "CreateMultiRegionEndpoint";
var _CMRER = "CreateMultiRegionEndpointRequest";
var _CMRERr = "CreateMultiRegionEndpointResponse";
var _CMS = "CustomerManagedStatus";
var _CRD = "CustomRedirectDomain";
var _CS2 = "ConfigurationSets";
var _CSKL = "CurrentSigningKeyLength";
var _CSN = "ConfigurationSetName";
var _CST = "ComplaintSubType";
var _CT2 = "ContentType";
var _CTE = "ContentTransferEncoding";
var _CTEo = "ConditionThresholdEnabled";
var _CTR2 = "CreateTenantRequest";
var _CTRA = "CreateTenantResourceAssociation";
var _CTRAR = "CreateTenantResourceAssociationRequest";
var _CTRARr = "CreateTenantResourceAssociationResponse";
var _CTRr2 = "CreateTenantResponse";
var _CTo = "CompletedTimestamp";
var _CTon = "ConditionThreshold";
var _CTr = "CreatedTimestamp";
var _CTre = "CreateTenant";
var _CV2 = "ConfidenceVerdict";
var _CVET = "CustomVerificationEmailTemplates";
var _CVETL = "CustomVerificationEmailTemplatesList";
var _CVETM = "CustomVerificationEmailTemplateMetadata";
var _CVT = "ConfidenceVerdictThreshold";
var _CWD = "CloudWatchDestination";
var _CWDC = "CloudWatchDimensionConfiguration";
var _CWDCl = "CloudWatchDimensionConfigurations";
var _Ca = "Cause";
var _Ch = "Charset";
var _Co = "Contact";
var _Cod = "Code";
var _Con = "Content";
var _Cont = "Contacts";
var _D = "Dimensions";
var _DA = "DkimAttributes";
var _DAa = "DashboardAttributes";
var _DC = "DiagnosticCode";
var _DCL = "DeleteContactList";
var _DCLR = "DeleteContactListRequest";
var _DCLRe = "DeleteContactListResponse";
var _DCR = "DeleteContactRequest";
var _DCRe = "DeleteContactResponse";
var _DCS = "DeleteConfigurationSet";
var _DCSED = "DeleteConfigurationSetEventDestination";
var _DCSEDR = "DeleteConfigurationSetEventDestinationRequest";
var _DCSEDRe = "DeleteConfigurationSetEventDestinationResponse";
var _DCSR = "DeleteConfigurationSetRequest";
var _DCSRe = "DeleteConfigurationSetResponse";
var _DCVET = "DeleteCustomVerificationEmailTemplate";
var _DCVETR = "DeleteCustomVerificationEmailTemplateRequest";
var _DCVETRe = "DeleteCustomVerificationEmailTemplateResponse";
var _DCe = "DefaultContent";
var _DCel = "DeleteContact";
var _DCi = "DimensionConfigurations";
var _DDC = "DomainDeliverabilityCampaign";
var _DDCL = "DomainDeliverabilityCampaignList";
var _DDCo = "DomainDeliverabilityCampaigns";
var _DDIP = "DeleteDedicatedIpPool";
var _DDIPR = "DeleteDedicatedIpPoolRequest";
var _DDIPRe = "DeleteDedicatedIpPoolResponse";
var _DDTO = "DomainDeliverabilityTrackingOption";
var _DDTOo = "DomainDeliverabilityTrackingOptions";
var _DDV = "DefaultDimensionValue";
var _DE = "DashboardEnabled";
var _DEI = "DeleteEmailIdentity";
var _DEIP = "DeleteEmailIdentityPolicy";
var _DEIPR = "DeleteEmailIdentityPolicyRequest";
var _DEIPRe = "DeleteEmailIdentityPolicyResponse";
var _DEIR = "DeleteEmailIdentityRequest";
var _DEIRe = "DeleteEmailIdentityResponse";
var _DET = "DefaultEmailTags";
var _DETR = "DeleteEmailTemplateRequest";
var _DETRe = "DeleteEmailTemplateResponse";
var _DETe = "DeleteEmailTemplate";
var _DF = "DataFormat";
var _DI = "DedicatedIp";
var _DIAWE = "DedicatedIpAutoWarmupEnabled";
var _DIL = "DedicatedIpList";
var _DIP = "DomainIspPlacements";
var _DIPe = "DedicatedIpPool";
var _DIPed = "DedicatedIpPools";
var _DIPo = "DomainIspPlacement";
var _DIe = "DedicatedIps";
var _DMRE = "DeleteMultiRegionEndpoint";
var _DMRER = "DeleteMultiRegionEndpointRequest";
var _DMRERe = "DeleteMultiRegionEndpointResponse";
var _DN = "DimensionName";
var _DNi = "DisplayName";
var _DO = "DeliveryOptions";
var _DOa = "DashboardOptions";
var _DP = "DkimPercentage";
var _DPN = "DestinationPoolName";
var _DR = "DeleteRate";
var _DS2 = "DkimStatus";
var _DSA = "DkimSigningAttributes";
var _DSAO = "DomainSigningAttributesOrigin";
var _DSAe = "DeliveryStreamArn";
var _DSD = "DeleteSuppressedDestination";
var _DSDR = "DeleteSuppressedDestinationRequest";
var _DSDRe = "DeleteSuppressedDestinationResponse";
var _DSPK = "DomainSigningPrivateKey";
var _DSS = "DomainSigningSelector";
var _DSSe = "DefaultSubscriptionStatus";
var _DT = "DkimTokens";
var _DTR = "DeleteTenantRequest";
var _DTRA = "DeleteTenantResourceAssociation";
var _DTRAR = "DeleteTenantResourceAssociationRequest";
var _DTRARe = "DeleteTenantResourceAssociationResponse";
var _DTRe = "DeleteTenantResponse";
var _DTRel = "DeliverabilityTestReport";
var _DTReli = "DeliverabilityTestReports";
var _DTS = "DeliverabilityTestStatus";
var _DTe = "DeleteTenant";
var _DV = "DailyVolume";
var _DVS = "DimensionValueSource";
var _DVa = "DailyVolumes";
var _Da = "Data";
var _De = "Description";
var _Des = "Destination";
var _Det = "Details";
var _Do = "Domain";
var _E2 = "Errors";
var _EA = "EmailAddress";
var _EAFL = "EmailAddressFilterList";
var _EAIME = "EmailAddressInsightsMailboxEvaluations";
var _EAIV = "EmailAddressInsightsVerdict";
var _EBA = "EventBusArn";
var _EBD = "EventBridgeDestination";
var _EC = "EmailContent";
var _ED = "EndDate";
var _EDD = "EventDestinationDefinition";
var _EDN = "EventDestinationName";
var _EDS = "ExportDataSource";
var _EDv = "EventDestination";
var _EDve = "EventDetails";
var _EDven = "EventDestinations";
var _EDx = "ExportDestination";
var _EDxp = "ExportDimensions";
var _EFE = "EmailForwardingEnabled";
var _EI2 = "EmailIdentity";
var _EIL = "EmailInsightsList";
var _EIm = "EmailInsights";
var _EIma = "EmailIdentities";
var _EIn = "EndpointId";
var _EJ = "ExportJobs";
var _EJS = "ExportJobSummary";
var _EJSL = "ExportJobSummaryList";
var _EM = "EngagementMetrics";
var _EMr = "ErrorMessage";
var _EMx = "ExportMetric";
var _EMxp = "ExportMetrics";
var _EN = "EndpointName";
var _ERC = "ExportedRecordsCount";
var _ES = "EmailSubject";
var _ESFL = "EmailSubjectFilterList";
var _EST = "ExportSourceType";
var _ESn = "EnforcementStatus";
var _ESx = "ExportStatistics";
var _ET = "EmailTags";
var _ETC = "EmailTemplateContent";
var _ETM = "EmailTemplateMetadata";
var _ETML = "EmailTemplateMetadataList";
var _ETr = "ErrorType";
var _En = "Enabled";
var _Er = "Error";
var _Es = "Esps";
var _Ev = "Events";
var _Eva = "Evaluations";
var _Ex = "Exclude";
var _F = "Filter";
var _FA = "FromAddress";
var _FEA = "FromEmailAddress";
var _FEAIA = "FromEmailAddressIdentityArn";
var _FFEA = "FeedbackForwardingEmailAddress";
var _FFEAIA = "FeedbackForwardingEmailAddressIdentityArn";
var _FFS = "FeedbackForwardingStatus";
var _FI = "FailureInfo";
var _FIe = "FeedbackId";
var _FN = "FileName";
var _FRC = "FailedRecordsCount";
var _FRSU = "FailedRecordsS3Url";
var _FRURL = "FailureRedirectionURL";
var _FS = "FilteredStatus";
var _FSDT = "FirstSeenDateTime";
var _G = "Global";
var _GA = "GuardianAttributes";
var _GAR = "GetAccountRequest";
var _GARe = "GetAccountResponse";
var _GAe = "GetAccount";
var _GBR = "GetBlacklistReports";
var _GBRR = "GetBlacklistReportsRequest";
var _GBRRe = "GetBlacklistReportsResponse";
var _GC = "GetContact";
var _GCL = "GetContactList";
var _GCLR = "GetContactListRequest";
var _GCLRe = "GetContactListResponse";
var _GCR = "GetContactRequest";
var _GCRe = "GetContactResponse";
var _GCS = "GetConfigurationSet";
var _GCSED = "GetConfigurationSetEventDestinations";
var _GCSEDR = "GetConfigurationSetEventDestinationsRequest";
var _GCSEDRe = "GetConfigurationSetEventDestinationsResponse";
var _GCSR = "GetConfigurationSetRequest";
var _GCSRe = "GetConfigurationSetResponse";
var _GCVET = "GetCustomVerificationEmailTemplate";
var _GCVETR = "GetCustomVerificationEmailTemplateRequest";
var _GCVETRe = "GetCustomVerificationEmailTemplateResponse";
var _GDDC = "GetDomainDeliverabilityCampaign";
var _GDDCR = "GetDomainDeliverabilityCampaignRequest";
var _GDDCRe = "GetDomainDeliverabilityCampaignResponse";
var _GDDO = "GetDeliverabilityDashboardOptions";
var _GDDOR = "GetDeliverabilityDashboardOptionsRequest";
var _GDDORe = "GetDeliverabilityDashboardOptionsResponse";
var _GDI = "GetDedicatedIp";
var _GDIP = "GetDedicatedIpPool";
var _GDIPR = "GetDedicatedIpPoolRequest";
var _GDIPRe = "GetDedicatedIpPoolResponse";
var _GDIR = "GetDedicatedIpRequest";
var _GDIRe = "GetDedicatedIpResponse";
var _GDIRet = "GetDedicatedIpsRequest";
var _GDIRete = "GetDedicatedIpsResponse";
var _GDIe = "GetDedicatedIps";
var _GDSR = "GetDomainStatisticsReport";
var _GDSRR = "GetDomainStatisticsReportRequest";
var _GDSRRe = "GetDomainStatisticsReportResponse";
var _GDTR = "GetDeliverabilityTestReport";
var _GDTRR = "GetDeliverabilityTestReportRequest";
var _GDTRRe = "GetDeliverabilityTestReportResponse";
var _GEAI = "GetEmailAddressInsights";
var _GEAIR = "GetEmailAddressInsightsRequest";
var _GEAIRe = "GetEmailAddressInsightsResponse";
var _GEI = "GetEmailIdentity";
var _GEIP = "GetEmailIdentityPolicies";
var _GEIPR = "GetEmailIdentityPoliciesRequest";
var _GEIPRe = "GetEmailIdentityPoliciesResponse";
var _GEIR = "GetEmailIdentityRequest";
var _GEIRe = "GetEmailIdentityResponse";
var _GEJ = "GetExportJob";
var _GEJR = "GetExportJobRequest";
var _GEJRe = "GetExportJobResponse";
var _GET = "GetEmailTemplate";
var _GETR = "GetEmailTemplateRequest";
var _GETRe = "GetEmailTemplateResponse";
var _GIJ = "GetImportJob";
var _GIJR = "GetImportJobRequest";
var _GIJRe = "GetImportJobResponse";
var _GMI = "GetMessageInsights";
var _GMIR = "GetMessageInsightsRequest";
var _GMIRe = "GetMessageInsightsResponse";
var _GMRE = "GetMultiRegionEndpoint";
var _GMRER = "GetMultiRegionEndpointRequest";
var _GMRERe = "GetMultiRegionEndpointResponse";
var _GO = "GuardianOptions";
var _GRE = "GetReputationEntity";
var _GRER = "GetReputationEntityRequest";
var _GRERe = "GetReputationEntityResponse";
var _GSD = "GetSuppressedDestination";
var _GSDR = "GetSuppressedDestinationRequest";
var _GSDRe = "GetSuppressedDestinationResponse";
var _GT = "GetTenant";
var _GTR = "GetTenantRequest";
var _GTRe = "GetTenantResponse";
var _H = "Html";
var _HP = "HttpsPolicy";
var _HVDR = "HasValidDnsRecords";
var _HVS = "HasValidSyntax";
var _He = "Headers";
var _I = "Id";
var _IC = "InboxCount";
var _ID = "ImportDestination";
var _IDS = "ImportDataSource";
var _IDT = "ImportDestinationType";
var _IDs = "IsDisposable";
var _IE = "InsightsEvent";
var _IEA = "InsightsEmailAddress";
var _IEn = "InsightsEvents";
var _II = "IdentityInfo";
var _IIL = "IdentityInfoList";
var _IJ = "ImportJobs";
var _IJS = "ImportJobSummary";
var _IJSL = "ImportJobSummaryList";
var _IN = "IspName";
var _INTE = "InvalidNextTokenException";
var _INd = "IdentityName";
var _IP = "InboxPercentage";
var _IPTO = "InboxPlacementTrackingOption";
var _IPs = "IspPlacements";
var _IPsp = "IspPlacement";
var _IRA = "IsRoleAddress";
var _IRAa = "IamRoleArn";
var _IRC = "InboxRawCount";
var _IRI = "IsRandomInput";
var _ISEE = "InternalServiceErrorException";
var _IT2 = "IdentityType";
var _IU = "ImageUrl";
var _IV = "IsValid";
var _Im = "Impact";
var _In = "Insights";
var _Inc = "Include";
var _Ip = "Ip";
var _Is = "Isp";
var _JI = "JobId";
var _JS = "JobStatus";
var _K2 = "Key";
var _KFD = "KinesisFirehoseDestination";
var _LC = "ListContacts";
var _LCF = "ListContactsFilter";
var _LCL = "ListContactLists";
var _LCLR = "ListContactListsRequest";
var _LCLRi = "ListContactListsResponse";
var _LCR = "ListContactsRequest";
var _LCRi = "ListContactsResponse";
var _LCS = "ListConfigurationSets";
var _LCSR = "ListConfigurationSetsRequest";
var _LCSRi = "ListConfigurationSetsResponse";
var _LCT = "LastCheckedTimestamp";
var _LCVET = "ListCustomVerificationEmailTemplates";
var _LCVETR = "ListCustomVerificationEmailTemplatesRequest";
var _LCVETRi = "ListCustomVerificationEmailTemplatesResponse";
var _LDDC = "ListDomainDeliverabilityCampaigns";
var _LDDCR = "ListDomainDeliverabilityCampaignsRequest";
var _LDDCRi = "ListDomainDeliverabilityCampaignsResponse";
var _LDE = "LastDeliveryEvent";
var _LDIP = "ListDedicatedIpPools";
var _LDIPR = "ListDedicatedIpPoolsRequest";
var _LDIPRi = "ListDedicatedIpPoolsResponse";
var _LDTR = "ListDeliverabilityTestReports";
var _LDTRR = "ListDeliverabilityTestReportsRequest";
var _LDTRRi = "ListDeliverabilityTestReportsResponse";
var _LEE = "LimitExceededException";
var _LEEa = "LastEngagementEvent";
var _LEI = "ListEmailIdentities";
var _LEIR = "ListEmailIdentitiesRequest";
var _LEIRi = "ListEmailIdentitiesResponse";
var _LEJ = "ListExportJobs";
var _LEJR = "ListExportJobsRequest";
var _LEJRi = "ListExportJobsResponse";
var _LET = "ListEmailTemplates";
var _LETR = "ListEmailTemplatesRequest";
var _LETRi = "ListEmailTemplatesResponse";
var _LFS = "LastFreshStart";
var _LIJ = "ListImportJobs";
var _LIJR = "ListImportJobsRequest";
var _LIJRi = "ListImportJobsResponse";
var _LKGT = "LastKeyGenerationTimestamp";
var _LMO = "ListManagementOptions";
var _LMRE = "ListMultiRegionEndpoints";
var _LMRER = "ListMultiRegionEndpointsRequest";
var _LMRERi = "ListMultiRegionEndpointsResponse";
var _LOC = "ListOfContacts";
var _LOCL = "ListOfContactLists";
var _LR = "ListRecommendations";
var _LRE = "ListReputationEntities";
var _LRER = "ListReputationEntitiesRequest";
var _LRERi = "ListReputationEntitiesResponse";
var _LRR = "ListRecommendationsRequest";
var _LRRi = "ListRecommendationsResponse";
var _LRT = "ListResourceTenants";
var _LRTR = "ListResourceTenantsRequest";
var _LRTRi = "ListResourceTenantsResponse";
var _LSD = "ListSuppressedDestinations";
var _LSDR = "ListSuppressedDestinationsRequest";
var _LSDRi = "ListSuppressedDestinationsResponse";
var _LSDT = "LastSeenDateTime";
var _LST = "LastSuccessTimestamp";
var _LT = "ListingTime";
var _LTFR = "ListTagsForResource";
var _LTFRR = "ListTagsForResourceRequest";
var _LTFRRi = "ListTagsForResourceResponse";
var _LTR = "ListTenantsRequest";
var _LTRR = "ListTenantResourcesRequest";
var _LTRRi = "ListTenantResourcesResponse";
var _LTRi = "ListTenantsResponse";
var _LTRis = "ListTenantResources";
var _LTi = "ListTenants";
var _LUT = "LastUpdatedTimestamp";
var _LUTa = "LastUpdateTime";
var _M = "Metric";
var _MDE = "MetricDataError";
var _MDEL = "MetricDataErrorList";
var _MDR = "MetricDataResult";
var _MDRL = "MetricDataResultList";
var _MDS = "MaxDeliverySeconds";
var _MDSe = "MetricsDataSource";
var _ME = "MailboxExists";
var _MET = "MatchingEventTypes";
var _MFA = "MailFromAttributes";
var _MFD = "MailFromDomain";
var _MFDNVE = "MailFromDomainNotVerifiedException";
var _MFDS = "MailFromDomainStatus";
var _MH = "MessageHeader";
var _MHL = "MessageHeaderList";
var _MHS = "Max24HourSend";
var _MI = "MessageId";
var _MIDS = "MessageInsightsDataSource";
var _MIF = "MessageInsightsFilters";
var _MP = "MissingPercentage";
var _MR = "MessageRejected";
var _MRE = "MultiRegionEndpoints";
var _MREu = "MultiRegionEndpoint";
var _MRa = "MaxResults";
var _MSR = "MaxSendRate";
var _MT = "MailType";
var _MTL = "MessageTagList";
var _MTe = "MessageTag";
var _MV = "MailboxValidation";
var _Me = "Message";
var _Met = "Metrics";
var _N = "Namespace";
var _NFE = "NotFoundException";
var _NSKL = "NextSigningKeyLength";
var _NT = "NextToken";
var _Na = "Name";
var _OCT = "OverallConfidenceThreshold";
var _OP = "OverallPlacement";
var _OSD = "OptimizedSharedDelivery";
var _OV = "OverallVolume";
var _P2 = "Policy";
var _PAD = "PutAccountDetails";
var _PADIWA = "PutAccountDedicatedIpWarmupAttributes";
var _PADIWAR = "PutAccountDedicatedIpWarmupAttributesRequest";
var _PADIWARu = "PutAccountDedicatedIpWarmupAttributesResponse";
var _PADR = "PutAccountDetailsRequest";
var _PADRu = "PutAccountDetailsResponse";
var _PAE = "ProductionAccessEnabled";
var _PASA = "PutAccountSendingAttributes";
var _PASAR = "PutAccountSendingAttributesRequest";
var _PASARu = "PutAccountSendingAttributesResponse";
var _PASARut = "PutAccountSuppressionAttributesRequest";
var _PASARutc = "PutAccountSuppressionAttributesResponse";
var _PASAu = "PutAccountSuppressionAttributes";
var _PAVA = "PutAccountVdmAttributes";
var _PAVAR = "PutAccountVdmAttributesRequest";
var _PAVARu = "PutAccountVdmAttributesResponse";
var _PCSAO = "PutConfigurationSetArchivingOptions";
var _PCSAOR = "PutConfigurationSetArchivingOptionsRequest";
var _PCSAORu = "PutConfigurationSetArchivingOptionsResponse";
var _PCSDO = "PutConfigurationSetDeliveryOptions";
var _PCSDOR = "PutConfigurationSetDeliveryOptionsRequest";
var _PCSDORu = "PutConfigurationSetDeliveryOptionsResponse";
var _PCSRO = "PutConfigurationSetReputationOptions";
var _PCSROR = "PutConfigurationSetReputationOptionsRequest";
var _PCSRORu = "PutConfigurationSetReputationOptionsResponse";
var _PCSSO = "PutConfigurationSetSendingOptions";
var _PCSSOR = "PutConfigurationSetSendingOptionsRequest";
var _PCSSORu = "PutConfigurationSetSendingOptionsResponse";
var _PCSSORut = "PutConfigurationSetSuppressionOptionsRequest";
var _PCSSORuto = "PutConfigurationSetSuppressionOptionsResponse";
var _PCSSOu = "PutConfigurationSetSuppressionOptions";
var _PCSTO = "PutConfigurationSetTrackingOptions";
var _PCSTOR = "PutConfigurationSetTrackingOptionsRequest";
var _PCSTORu = "PutConfigurationSetTrackingOptionsResponse";
var _PCSVO = "PutConfigurationSetVdmOptions";
var _PCSVOR = "PutConfigurationSetVdmOptionsRequest";
var _PCSVORu = "PutConfigurationSetVdmOptionsResponse";
var _PD = "PinpointDestination";
var _PDDO = "PutDeliverabilityDashboardOption";
var _PDDOR = "PutDeliverabilityDashboardOptionRequest";
var _PDDORu = "PutDeliverabilityDashboardOptionResponse";
var _PDIIP = "PutDedicatedIpInPool";
var _PDIIPR = "PutDedicatedIpInPoolRequest";
var _PDIIPRu = "PutDedicatedIpInPoolResponse";
var _PDIPSA = "PutDedicatedIpPoolScalingAttributes";
var _PDIPSAR = "PutDedicatedIpPoolScalingAttributesRequest";
var _PDIPSARu = "PutDedicatedIpPoolScalingAttributesResponse";
var _PDIWA = "PutDedicatedIpWarmupAttributes";
var _PDIWAR = "PutDedicatedIpWarmupAttributesRequest";
var _PDIWARu = "PutDedicatedIpWarmupAttributesResponse";
var _PEICSA = "PutEmailIdentityConfigurationSetAttributes";
var _PEICSAR = "PutEmailIdentityConfigurationSetAttributesRequest";
var _PEICSARu = "PutEmailIdentityConfigurationSetAttributesResponse";
var _PEIDA = "PutEmailIdentityDkimAttributes";
var _PEIDAR = "PutEmailIdentityDkimAttributesRequest";
var _PEIDARu = "PutEmailIdentityDkimAttributesResponse";
var _PEIDSA = "PutEmailIdentityDkimSigningAttributes";
var _PEIDSAR = "PutEmailIdentityDkimSigningAttributesRequest";
var _PEIDSARu = "PutEmailIdentityDkimSigningAttributesResponse";
var _PEIFA = "PutEmailIdentityFeedbackAttributes";
var _PEIFAR = "PutEmailIdentityFeedbackAttributesRequest";
var _PEIFARu = "PutEmailIdentityFeedbackAttributesResponse";
var _PEIMFA = "PutEmailIdentityMailFromAttributes";
var _PEIMFAR = "PutEmailIdentityMailFromAttributesRequest";
var _PEIMFARu = "PutEmailIdentityMailFromAttributesResponse";
var _PESD = "PendingExpirationSubscribedDomains";
var _PI2 = "ProjectedInbox";
var _PK = "PrivateKey";
var _PN = "PoolName";
var _PNS = "PrimaryNameServer";
var _PNo = "PolicyName";
var _PRC = "ProcessedRecordsCount";
var _PS = "PageSize";
var _PSD = "PutSuppressedDestination";
var _PSDR = "PutSuppressedDestinationRequest";
var _PSDRu = "PutSuppressedDestinationResponse";
var _PSl = "PlacementStatistics";
var _PSr = "ProjectedSpam";
var _PV = "ProjectedVolume";
var _Po = "Policies";
var _Q = "Queries";
var _R = "Results";
var _RA2 = "ResourceArn";
var _RC2 = "RawContent";
var _RD = "ReviewDetails";
var _RDR = "ReadDeleteRate";
var _RDo = "RoutesDetails";
var _RDou = "RouteDetails";
var _RE = "ReputationEntity";
var _REC = "ReplacementEmailContent";
var _REL = "ReputationEntitiesList";
var _REP = "ReputationEntityPolicy";
var _RER = "ReputationEntityReference";
var _RET = "ReputationEntityType";
var _REe = "ReputationEntities";
var _RH = "ReplacementHeaders";
var _RI = "ReportId";
var _RIe = "ReputationImpact";
var _RL = "RecommendationsList";
var _RM = "RawMessage";
var _RME = "ReputationMetricsEnabled";
var _RMP = "ReputationManagementPolicy";
var _RN = "RblName";
var _RNe = "ReportName";
var _RO = "ReputationOptions";
var _RR = "ReadRate";
var _RRP = "ReadRatePercent";
var _RT3 = "ReplacementTags";
var _RTA = "ReplyToAddresses";
var _RTD = "ReplacementTemplateData";
var _RTM = "ResourceTenantMetadata";
var _RTML = "ResourceTenantMetadataList";
var _RTe = "ResourceTenants";
var _RTen = "RenderedTemplate";
var _RTep = "ReplacementTemplate";
var _RTes = "ResourceType";
var _Ra = "Raw";
var _Re = "Recommendations";
var _Rea = "Reasons";
var _Reas = "Reason";
var _Rec = "Recommendation";
var _Reg = "Regions";
var _Regi = "Region";
var _Ro = "Routes";
var _Rou = "Route";
var _S = "Status";
var _SA = "SuppressionAttributes";
var _SAO = "SigningAttributesOrigin";
var _SAi = "SigningAttributes";
var _SBE = "SendBulkEmail";
var _SBER = "SendBulkEmailRequest";
var _SBERe = "SendBulkEmailResponse";
var _SC = "SpamCount";
var _SCT = "SuppressionConditionThreshold";
var _SCTu = "SuppressionConfidenceThreshold";
var _SCVE = "SendCustomVerificationEmail";
var _SCVER = "SendCustomVerificationEmailRequest";
var _SCVERe = "SendCustomVerificationEmailResponse";
var _SD = "StartDate";
var _SDA = "SuppressedDestinationAttributes";
var _SDS = "SuppressedDestinationSummaries";
var _SDSu = "SuppressedDestinationSummary";
var _SDn = "SnsDestination";
var _SDu = "SuppressedDestination";
var _SDub = "SubscribedDomain";
var _SDubs = "SubscribedDomains";
var _SE = "SigningEnabled";
var _SED = "SubscriptionExpiryDate";
var _SER = "SendEmailRequest";
var _SERe = "SendEmailResponse";
var _SEe = "SendingEnabled";
var _SEen = "SendEmail";
var _SHZ = "SigningHostedZone";
var _SI2 = "SendingIps";
var _SLD = "SuppressionListDestination";
var _SLH = "SentLast24Hours";
var _SLIA = "SuppressionListImportAction";
var _SM = "ScalingMode";
var _SN2 = "SerialNumber";
var _SO = "SendingOptions";
var _SOAR = "SOARecord";
var _SOu = "SuppressionOptions";
var _SP = "SpamPercentage";
var _SPE = "SendingPausedException";
var _SPN = "SendingPoolName";
var _SPp = "SpfPercentage";
var _SQ = "SendQuota";
var _SR = "SuppressedReasons";
var _SRC = "SpamRawCount";
var _SRURL = "SuccessRedirectionURL";
var _SRt = "StatusRecord";
var _SS = "SendingStatus";
var _SSA = "SendingStatusAggregate";
var _SSD = "SubscriptionStartDate";
var _SSu = "SubscriptionStatus";
var _SU = "S3Url";
var _SVA = "SuppressionValidationAttributes";
var _SVO = "SuppressionValidationOptions";
var _Si = "Simple";
var _St = "Statistics";
var _Su = "Subject";
var _T2 = "Text";
var _TA = "TenantArn";
var _TAe = "TemplateArn";
var _TAo = "ToAddresses";
var _TAop = "TopicArn";
var _TC2 = "TemplateContent";
var _TD = "TemplateData";
var _TDP = "TopicDefaultPreferences";
var _TF = "TopicFilter";
var _TI = "TenantId";
var _TIL = "TenantInfoList";
var _TIe = "TenantInfo";
var _TIr = "TrackedIsps";
var _TK = "TagKeys";
var _TL = "TagList";
var _TM = "TemplatesMetadata";
var _TMRE3 = "TooManyRequestsException";
var _TN = "TemplateName";
var _TNe = "TenantName";
var _TNo = "TopicName";
var _TO = "TrackingOptions";
var _TP = "TopicPreferences";
var _TPL = "TopicPreferenceList";
var _TPl = "TlsPolicy";
var _TPo = "TopicPreference";
var _TR = "TenantResources";
var _TRET = "TestRenderEmailTemplate";
var _TRETR = "TestRenderEmailTemplateRequest";
var _TRETRe = "TestRenderEmailTemplateResponse";
var _TRL = "TenantResourceList";
var _TRR = "TagResourceRequest";
var _TRRa = "TagResourceResponse";
var _TRa = "TagResource";
var _TRe = "TenantResource";
var _TS = "TemplateSubject";
var _Ta2 = "Tags";
var _Tag = "Tag";
var _Te = "Template";
var _Ten = "Tenant";
var _Tena = "Tenants";
var _Ti = "Timestamp";
var _Tim = "Timestamps";
var _To = "Topics";
var _Tok = "Tokens";
var _Top = "Topic";
var _Ty = "Type";
var _UA = "UnsubscribeAll";
var _UC = "UpdateContact";
var _UCD = "UseCaseDescription";
var _UCL = "UpdateContactList";
var _UCLR = "UpdateContactListRequest";
var _UCLRp = "UpdateContactListResponse";
var _UCR = "UpdateContactRequest";
var _UCRp = "UpdateContactResponse";
var _UCSED = "UpdateConfigurationSetEventDestination";
var _UCSEDR = "UpdateConfigurationSetEventDestinationRequest";
var _UCSEDRp = "UpdateConfigurationSetEventDestinationResponse";
var _UCVET = "UpdateCustomVerificationEmailTemplate";
var _UCVETR = "UpdateCustomVerificationEmailTemplateRequest";
var _UCVETRp = "UpdateCustomVerificationEmailTemplateResponse";
var _UDIPU = "UseDefaultIfPreferenceUnavailable";
var _UEIP = "UpdateEmailIdentityPolicy";
var _UEIPR = "UpdateEmailIdentityPolicyRequest";
var _UEIPRp = "UpdateEmailIdentityPolicyResponse";
var _UET = "UpdateEmailTemplate";
var _UETR = "UpdateEmailTemplateRequest";
var _UETRp = "UpdateEmailTemplateResponse";
var _UR = "UntagResource";
var _URECMS = "UpdateReputationEntityCustomerManagedStatus";
var _URECMSR = "UpdateReputationEntityCustomerManagedStatusRequest";
var _URECMSRp = "UpdateReputationEntityCustomerManagedStatusResponse";
var _UREP = "UpdateReputationEntityPolicy";
var _UREPR = "UpdateReputationEntityPolicyRequest";
var _UREPRp = "UpdateReputationEntityPolicyResponse";
var _URR = "UntagResourceRequest";
var _URRn = "UntagResourceResponse";
var _V2 = "Value";
var _VA = "VdmAttributes";
var _VAa = "ValidationAttributes";
var _VE2 = "VdmEnabled";
var _VFSS = "VerifiedForSendingStatus";
var _VI = "VerificationInfo";
var _VO = "VdmOptions";
var _VOa = "ValidationOptions";
var _VS = "VolumeStatistics";
var _VSe = "VerificationStatus";
var _Va = "Values";
var _WP = "WarmupPercentage";
var _WS = "WarmupStatus";
var _WURL = "WebsiteURL";
var _c5 = "client";
var _e5 = "error";
var _h4 = "http";
var _hE5 = "httpError";
var _hQ2 = "httpQuery";
var _m4 = "message";
var _s5 = "smithy.ts.sdk.synthetic.com.amazonaws.sesv2";
var _se3 = "server";
var n05 = "com.amazonaws.sesv2";
var _s_registry5 = TypeRegistry.for(_s5);
var SESv2ServiceException$ = [-3, _s5, "SESv2ServiceException", 0, [], []];
_s_registry5.registerError(SESv2ServiceException$, SESv2ServiceException);
var n0_registry5 = TypeRegistry.for(n05);
var AccountSuspendedException$ = [
  -3,
  n05,
  _ASE,
  { [_e5]: _c5, [_hE5]: 400 },
  [_m4],
  [0]
];
n0_registry5.registerError(AccountSuspendedException$, AccountSuspendedException);
var AlreadyExistsException$ = [
  -3,
  n05,
  _AEE,
  { [_e5]: _c5, [_hE5]: 400 },
  [_m4],
  [0]
];
n0_registry5.registerError(AlreadyExistsException$, AlreadyExistsException);
var BadRequestException$ = [
  -3,
  n05,
  _BRE,
  { [_e5]: _c5, [_hE5]: 400 },
  [_m4],
  [0]
];
n0_registry5.registerError(BadRequestException$, BadRequestException);
var ConcurrentModificationException$ = [
  -3,
  n05,
  _CME,
  { [_e5]: _se3, [_hE5]: 500 },
  [_m4],
  [0]
];
n0_registry5.registerError(ConcurrentModificationException$, ConcurrentModificationException);
var ConflictException$ = [
  -3,
  n05,
  _CE,
  { [_e5]: _c5, [_hE5]: 409 },
  [_m4],
  [0]
];
n0_registry5.registerError(ConflictException$, ConflictException);
var InternalServiceErrorException$ = [
  -3,
  n05,
  _ISEE,
  { [_e5]: _se3, [_hE5]: 500 },
  [_m4],
  [0]
];
n0_registry5.registerError(InternalServiceErrorException$, InternalServiceErrorException);
var InvalidNextTokenException$ = [
  -3,
  n05,
  _INTE,
  { [_e5]: _c5, [_hE5]: 400 },
  [_m4],
  [0]
];
n0_registry5.registerError(InvalidNextTokenException$, InvalidNextTokenException);
var LimitExceededException$ = [
  -3,
  n05,
  _LEE,
  { [_e5]: _c5, [_hE5]: 400 },
  [_m4],
  [0]
];
n0_registry5.registerError(LimitExceededException$, LimitExceededException);
var MailFromDomainNotVerifiedException$ = [
  -3,
  n05,
  _MFDNVE,
  { [_e5]: _c5, [_hE5]: 400 },
  [_m4],
  [0]
];
n0_registry5.registerError(MailFromDomainNotVerifiedException$, MailFromDomainNotVerifiedException);
var MessageRejected$ = [
  -3,
  n05,
  _MR,
  { [_e5]: _c5, [_hE5]: 400 },
  [_m4],
  [0]
];
n0_registry5.registerError(MessageRejected$, MessageRejected);
var NotFoundException$ = [
  -3,
  n05,
  _NFE,
  { [_e5]: _c5, [_hE5]: 404 },
  [_m4],
  [0]
];
n0_registry5.registerError(NotFoundException$, NotFoundException);
var SendingPausedException$ = [
  -3,
  n05,
  _SPE,
  { [_e5]: _c5, [_hE5]: 400 },
  [_m4],
  [0]
];
n0_registry5.registerError(SendingPausedException$, SendingPausedException);
var TooManyRequestsException$2 = [
  -3,
  n05,
  _TMRE3,
  { [_e5]: _c5, [_hE5]: 429 },
  [_m4],
  [0]
];
n0_registry5.registerError(TooManyRequestsException$2, TooManyRequestsException2);
var errorTypeRegistries5 = [
  _s_registry5,
  n0_registry5
];
var AdditionalContactEmailAddress = [0, n05, _ACEA, 8, 0];
var EmailSubject = [0, n05, _ES, 8, 0];
var InsightsEmailAddress = [0, n05, _IEA, 8, 0];
var PrivateKey = [0, n05, _PK, 8, 0];
var UseCaseDescription = [0, n05, _UCD, 8, 0];
var WebsiteURL = [0, n05, _WURL, 8, 0];
var AccountDetails$ = [
  3,
  n05,
  _AD,
  0,
  [_MT, _WURL, _CL, _UCD, _ACEAd, _RD],
  [0, [() => WebsiteURL, 0], 0, [() => UseCaseDescription, 0], [() => AdditionalContactEmailAddresses, 0], () => ReviewDetails$]
];
var ArchivingOptions$ = [
  3,
  n05,
  _AO,
  0,
  [_AA],
  [0]
];
var Attachment$ = [
  3,
  n05,
  _A2,
  0,
  [_RC2, _FN, _CD, _CDo, _CI, _CTE, _CT2],
  [21, 0, 0, 0, 0, 0, 0],
  2
];
var BatchGetMetricDataQuery$ = [
  3,
  n05,
  _BGMDQ,
  0,
  [_I, _N, _M, _SD, _ED, _D],
  [0, 0, 0, 4, 4, 128 | 0],
  5
];
var BatchGetMetricDataRequest$ = [
  3,
  n05,
  _BGMDR,
  0,
  [_Q],
  [() => BatchGetMetricDataQueries],
  1
];
var BatchGetMetricDataResponse$ = [
  3,
  n05,
  _BGMDRa,
  0,
  [_R, _E2],
  [() => MetricDataResultList, () => MetricDataErrorList]
];
var BlacklistEntry$ = [
  3,
  n05,
  _BE,
  0,
  [_RN, _LT, _De],
  [0, 4, 0]
];
var Body$ = [
  3,
  n05,
  _B,
  0,
  [_T2, _H],
  [() => Content$, () => Content$]
];
var Bounce$ = [
  3,
  n05,
  _Bo,
  0,
  [_BT, _BST, _DC],
  [0, 0, 0]
];
var BulkEmailContent$ = [
  3,
  n05,
  _BEC,
  0,
  [_Te],
  [() => Template$]
];
var BulkEmailEntry$ = [
  3,
  n05,
  _BEE,
  0,
  [_Des, _RT3, _REC, _RH],
  [() => Destination$, () => MessageTagList, () => ReplacementEmailContent$, () => MessageHeaderList],
  1
];
var BulkEmailEntryResult$ = [
  3,
  n05,
  _BEER,
  0,
  [_S, _Er, _MI],
  [0, 0, 0]
];
var CancelExportJobRequest$ = [
  3,
  n05,
  _CEJR,
  0,
  [_JI],
  [[0, 1]],
  1
];
var CancelExportJobResponse$ = [
  3,
  n05,
  _CEJRa,
  0,
  [],
  []
];
var CloudWatchDestination$ = [
  3,
  n05,
  _CWD,
  0,
  [_DCi],
  [() => CloudWatchDimensionConfigurations],
  1
];
var CloudWatchDimensionConfiguration$ = [
  3,
  n05,
  _CWDC,
  0,
  [_DN, _DVS, _DDV],
  [0, 0, 0],
  3
];
var Complaint$ = [
  3,
  n05,
  _C2,
  0,
  [_CST, _CFT],
  [0, 0]
];
var Contact$ = [
  3,
  n05,
  _Co,
  0,
  [_EA, _TP, _TDP, _UA, _LUT],
  [0, () => TopicPreferenceList, () => TopicPreferenceList, 2, 4]
];
var ContactList$ = [
  3,
  n05,
  _CLo,
  0,
  [_CLN, _LUT],
  [0, 4]
];
var ContactListDestination$ = [
  3,
  n05,
  _CLD,
  0,
  [_CLN, _CLIA],
  [0, 0],
  2
];
var Content$ = [
  3,
  n05,
  _Con,
  0,
  [_Da, _Ch],
  [0, 0],
  1
];
var CreateConfigurationSetEventDestinationRequest$ = [
  3,
  n05,
  _CCSEDR,
  0,
  [_CSN, _EDN, _EDv],
  [[0, 1], 0, () => EventDestinationDefinition$],
  3
];
var CreateConfigurationSetEventDestinationResponse$ = [
  3,
  n05,
  _CCSEDRr,
  0,
  [],
  []
];
var CreateConfigurationSetRequest$ = [
  3,
  n05,
  _CCSR,
  0,
  [_CSN, _TO, _DO, _RO, _SO, _Ta2, _SOu, _VO, _AO],
  [0, () => TrackingOptions$, () => DeliveryOptions$, () => ReputationOptions$, () => SendingOptions$, () => TagList, () => SuppressionOptions$, () => VdmOptions$, () => ArchivingOptions$],
  1
];
var CreateConfigurationSetResponse$ = [
  3,
  n05,
  _CCSRr,
  0,
  [],
  []
];
var CreateContactListRequest$ = [
  3,
  n05,
  _CCLR,
  0,
  [_CLN, _To, _De, _Ta2],
  [0, () => Topics, 0, () => TagList],
  1
];
var CreateContactListResponse$ = [
  3,
  n05,
  _CCLRr,
  0,
  [],
  []
];
var CreateContactRequest$ = [
  3,
  n05,
  _CCR,
  0,
  [_CLN, _EA, _TP, _UA, _ADt],
  [[0, 1], 0, () => TopicPreferenceList, 2, 0],
  2
];
var CreateContactResponse$ = [
  3,
  n05,
  _CCRr,
  0,
  [],
  []
];
var CreateCustomVerificationEmailTemplateRequest$ = [
  3,
  n05,
  _CCVETR,
  0,
  [_TN, _FEA, _TS, _TC2, _SRURL, _FRURL, _Ta2],
  [0, 0, 0, 0, 0, 0, () => TagList],
  6
];
var CreateCustomVerificationEmailTemplateResponse$ = [
  3,
  n05,
  _CCVETRr,
  0,
  [],
  []
];
var CreateDedicatedIpPoolRequest$ = [
  3,
  n05,
  _CDIPR,
  0,
  [_PN, _Ta2, _SM],
  [0, () => TagList, 0],
  1
];
var CreateDedicatedIpPoolResponse$ = [
  3,
  n05,
  _CDIPRr,
  0,
  [],
  []
];
var CreateDeliverabilityTestReportRequest$ = [
  3,
  n05,
  _CDTRR,
  0,
  [_FEA, _Con, _RNe, _Ta2],
  [0, () => EmailContent$, 0, () => TagList],
  2
];
var CreateDeliverabilityTestReportResponse$ = [
  3,
  n05,
  _CDTRRr,
  0,
  [_RI, _DTS],
  [0, 0],
  2
];
var CreateEmailIdentityPolicyRequest$ = [
  3,
  n05,
  _CEIPR,
  0,
  [_EI2, _PNo, _P2],
  [[0, 1], [0, 1], 0],
  3
];
var CreateEmailIdentityPolicyResponse$ = [
  3,
  n05,
  _CEIPRr,
  0,
  [],
  []
];
var CreateEmailIdentityRequest$ = [
  3,
  n05,
  _CEIR,
  0,
  [_EI2, _Ta2, _DSA, _CSN],
  [0, () => TagList, [() => DkimSigningAttributes$, 0], 0],
  1
];
var CreateEmailIdentityResponse$ = [
  3,
  n05,
  _CEIRr,
  0,
  [_IT2, _VFSS, _DA],
  [0, 2, () => DkimAttributes$]
];
var CreateEmailTemplateRequest$ = [
  3,
  n05,
  _CETR,
  0,
  [_TN, _TC2, _Ta2],
  [0, () => EmailTemplateContent$, () => TagList],
  2
];
var CreateEmailTemplateResponse$ = [
  3,
  n05,
  _CETRr,
  0,
  [],
  []
];
var CreateExportJobRequest$ = [
  3,
  n05,
  _CEJRr,
  0,
  [_EDS, _EDx],
  [[() => ExportDataSource$, 0], () => ExportDestination$],
  2
];
var CreateExportJobResponse$ = [
  3,
  n05,
  _CEJRre,
  0,
  [_JI],
  [0]
];
var CreateImportJobRequest$ = [
  3,
  n05,
  _CIJR,
  0,
  [_ID, _IDS],
  [() => ImportDestination$, () => ImportDataSource$],
  2
];
var CreateImportJobResponse$ = [
  3,
  n05,
  _CIJRr,
  0,
  [_JI],
  [0]
];
var CreateMultiRegionEndpointRequest$ = [
  3,
  n05,
  _CMRER,
  0,
  [_EN, _Det, _Ta2],
  [0, () => Details$, () => TagList],
  2
];
var CreateMultiRegionEndpointResponse$ = [
  3,
  n05,
  _CMRERr,
  0,
  [_S, _EIn],
  [0, 0]
];
var CreateTenantRequest$ = [
  3,
  n05,
  _CTR2,
  0,
  [_TNe, _Ta2],
  [0, () => TagList],
  1
];
var CreateTenantResourceAssociationRequest$ = [
  3,
  n05,
  _CTRAR,
  0,
  [_TNe, _RA2],
  [0, 0],
  2
];
var CreateTenantResourceAssociationResponse$ = [
  3,
  n05,
  _CTRARr,
  0,
  [],
  []
];
var CreateTenantResponse$ = [
  3,
  n05,
  _CTRr2,
  0,
  [_TNe, _TI, _TA, _CTr, _Ta2, _SS],
  [0, 0, 0, 4, () => TagList, 0]
];
var CustomVerificationEmailTemplateMetadata$ = [
  3,
  n05,
  _CVETM,
  0,
  [_TN, _FEA, _TS, _SRURL, _FRURL],
  [0, 0, 0, 0, 0]
];
var DailyVolume$ = [
  3,
  n05,
  _DV,
  0,
  [_SD, _VS, _DIP],
  [4, () => VolumeStatistics$, () => DomainIspPlacements]
];
var DashboardAttributes$ = [
  3,
  n05,
  _DAa,
  0,
  [_EM],
  [0]
];
var DashboardOptions$ = [
  3,
  n05,
  _DOa,
  0,
  [_EM],
  [0]
];
var DedicatedIp$ = [
  3,
  n05,
  _DI,
  0,
  [_Ip, _WS, _WP, _PN],
  [0, 0, 1, 0],
  3
];
var DedicatedIpPool$ = [
  3,
  n05,
  _DIPe,
  0,
  [_PN, _SM],
  [0, 0],
  2
];
var DeleteConfigurationSetEventDestinationRequest$ = [
  3,
  n05,
  _DCSEDR,
  0,
  [_CSN, _EDN],
  [[0, 1], [0, 1]],
  2
];
var DeleteConfigurationSetEventDestinationResponse$ = [
  3,
  n05,
  _DCSEDRe,
  0,
  [],
  []
];
var DeleteConfigurationSetRequest$ = [
  3,
  n05,
  _DCSR,
  0,
  [_CSN],
  [[0, 1]],
  1
];
var DeleteConfigurationSetResponse$ = [
  3,
  n05,
  _DCSRe,
  0,
  [],
  []
];
var DeleteContactListRequest$ = [
  3,
  n05,
  _DCLR,
  0,
  [_CLN],
  [[0, 1]],
  1
];
var DeleteContactListResponse$ = [
  3,
  n05,
  _DCLRe,
  0,
  [],
  []
];
var DeleteContactRequest$ = [
  3,
  n05,
  _DCR,
  0,
  [_CLN, _EA],
  [[0, 1], [0, 1]],
  2
];
var DeleteContactResponse$ = [
  3,
  n05,
  _DCRe,
  0,
  [],
  []
];
var DeleteCustomVerificationEmailTemplateRequest$ = [
  3,
  n05,
  _DCVETR,
  0,
  [_TN],
  [[0, 1]],
  1
];
var DeleteCustomVerificationEmailTemplateResponse$ = [
  3,
  n05,
  _DCVETRe,
  0,
  [],
  []
];
var DeleteDedicatedIpPoolRequest$ = [
  3,
  n05,
  _DDIPR,
  0,
  [_PN],
  [[0, 1]],
  1
];
var DeleteDedicatedIpPoolResponse$ = [
  3,
  n05,
  _DDIPRe,
  0,
  [],
  []
];
var DeleteEmailIdentityPolicyRequest$ = [
  3,
  n05,
  _DEIPR,
  0,
  [_EI2, _PNo],
  [[0, 1], [0, 1]],
  2
];
var DeleteEmailIdentityPolicyResponse$ = [
  3,
  n05,
  _DEIPRe,
  0,
  [],
  []
];
var DeleteEmailIdentityRequest$ = [
  3,
  n05,
  _DEIR,
  0,
  [_EI2],
  [[0, 1]],
  1
];
var DeleteEmailIdentityResponse$ = [
  3,
  n05,
  _DEIRe,
  0,
  [],
  []
];
var DeleteEmailTemplateRequest$ = [
  3,
  n05,
  _DETR,
  0,
  [_TN],
  [[0, 1]],
  1
];
var DeleteEmailTemplateResponse$ = [
  3,
  n05,
  _DETRe,
  0,
  [],
  []
];
var DeleteMultiRegionEndpointRequest$ = [
  3,
  n05,
  _DMRER,
  0,
  [_EN],
  [[0, 1]],
  1
];
var DeleteMultiRegionEndpointResponse$ = [
  3,
  n05,
  _DMRERe,
  0,
  [_S],
  [0]
];
var DeleteSuppressedDestinationRequest$ = [
  3,
  n05,
  _DSDR,
  0,
  [_EA],
  [[0, 1]],
  1
];
var DeleteSuppressedDestinationResponse$ = [
  3,
  n05,
  _DSDRe,
  0,
  [],
  []
];
var DeleteTenantRequest$ = [
  3,
  n05,
  _DTR,
  0,
  [_TNe],
  [0],
  1
];
var DeleteTenantResourceAssociationRequest$ = [
  3,
  n05,
  _DTRAR,
  0,
  [_TNe, _RA2],
  [0, 0],
  2
];
var DeleteTenantResourceAssociationResponse$ = [
  3,
  n05,
  _DTRARe,
  0,
  [],
  []
];
var DeleteTenantResponse$ = [
  3,
  n05,
  _DTRe,
  0,
  [],
  []
];
var DeliverabilityTestReport$ = [
  3,
  n05,
  _DTRel,
  0,
  [_RI, _RNe, _Su, _FEA, _CDr, _DTS],
  [0, 0, 0, 0, 4, 0]
];
var DeliveryOptions$ = [
  3,
  n05,
  _DO,
  0,
  [_TPl, _SPN, _MDS],
  [0, 0, 1]
];
var Destination$ = [
  3,
  n05,
  _Des,
  0,
  [_TAo, _CA2, _BA],
  [64 | 0, 64 | 0, 64 | 0]
];
var Details$ = [
  3,
  n05,
  _Det,
  0,
  [_RDo],
  [() => RoutesDetails],
  1
];
var DkimAttributes$ = [
  3,
  n05,
  _DA,
  0,
  [_SE, _S, _Tok, _SHZ, _SAO, _NSKL, _CSKL, _LKGT],
  [2, 0, 64 | 0, 0, 0, 0, 0, 4]
];
var DkimSigningAttributes$ = [
  3,
  n05,
  _DSA,
  0,
  [_DSS, _DSPK, _NSKL, _DSAO],
  [0, [() => PrivateKey, 0], 0, 0]
];
var DomainDeliverabilityCampaign$ = [
  3,
  n05,
  _DDC,
  0,
  [_CIa, _IU, _Su, _FA, _SI2, _FSDT, _LSDT, _IC, _SC, _RR, _DR, _RDR, _PV, _Es],
  [0, 0, 0, 0, 64 | 0, 4, 4, 1, 1, 1, 1, 1, 1, 64 | 0]
];
var DomainDeliverabilityTrackingOption$ = [
  3,
  n05,
  _DDTO,
  0,
  [_Do, _SSD, _IPTO],
  [0, 4, () => InboxPlacementTrackingOption$]
];
var DomainIspPlacement$ = [
  3,
  n05,
  _DIPo,
  0,
  [_IN, _IRC, _SRC, _IP, _SP],
  [0, 1, 1, 1, 1]
];
var EmailAddressInsightsMailboxEvaluations$ = [
  3,
  n05,
  _EAIME,
  0,
  [_HVS, _HVDR, _ME, _IRA, _IDs, _IRI],
  [() => EmailAddressInsightsVerdict$, () => EmailAddressInsightsVerdict$, () => EmailAddressInsightsVerdict$, () => EmailAddressInsightsVerdict$, () => EmailAddressInsightsVerdict$, () => EmailAddressInsightsVerdict$]
];
var EmailAddressInsightsVerdict$ = [
  3,
  n05,
  _EAIV,
  0,
  [_CV2],
  [0]
];
var EmailContent$ = [
  3,
  n05,
  _EC,
  0,
  [_Si, _Ra, _Te],
  [() => Message$, () => RawMessage$, () => Template$]
];
var EmailInsights$ = [
  3,
  n05,
  _EIm,
  0,
  [_Des, _Is, _Ev],
  [[() => InsightsEmailAddress, 0], 0, () => InsightsEvents]
];
var EmailTemplateContent$ = [
  3,
  n05,
  _ETC,
  0,
  [_Su, _T2, _H],
  [0, 0, 0]
];
var EmailTemplateMetadata$ = [
  3,
  n05,
  _ETM,
  0,
  [_TN, _CTr],
  [0, 4]
];
var EventBridgeDestination$ = [
  3,
  n05,
  _EBD,
  0,
  [_EBA],
  [0],
  1
];
var EventDestination$ = [
  3,
  n05,
  _EDv,
  0,
  [_Na, _MET, _En, _KFD, _CWD, _SDn, _EBD, _PD],
  [0, 64 | 0, 2, () => KinesisFirehoseDestination$, () => CloudWatchDestination$, () => SnsDestination$, () => EventBridgeDestination$, () => PinpointDestination$],
  2
];
var EventDestinationDefinition$ = [
  3,
  n05,
  _EDD,
  0,
  [_En, _MET, _KFD, _CWD, _SDn, _EBD, _PD],
  [2, 64 | 0, () => KinesisFirehoseDestination$, () => CloudWatchDestination$, () => SnsDestination$, () => EventBridgeDestination$, () => PinpointDestination$]
];
var EventDetails$ = [
  3,
  n05,
  _EDve,
  0,
  [_Bo, _C2],
  [() => Bounce$, () => Complaint$]
];
var ExportDataSource$ = [
  3,
  n05,
  _EDS,
  0,
  [_MDSe, _MIDS],
  [() => MetricsDataSource$, [() => MessageInsightsDataSource$, 0]]
];
var ExportDestination$ = [
  3,
  n05,
  _EDx,
  0,
  [_DF, _SU],
  [0, 0],
  1
];
var ExportJobSummary$ = [
  3,
  n05,
  _EJS,
  0,
  [_JI, _EST, _JS, _CTr, _CTo],
  [0, 0, 0, 4, 4]
];
var ExportMetric$ = [
  3,
  n05,
  _EMx,
  0,
  [_Na, _Ag],
  [0, 0]
];
var ExportStatistics$ = [
  3,
  n05,
  _ESx,
  0,
  [_PRC, _ERC],
  [1, 1]
];
var FailureInfo$ = [
  3,
  n05,
  _FI,
  0,
  [_FRSU, _EMr],
  [0, 0]
];
var GetAccountRequest$ = [
  3,
  n05,
  _GAR,
  0,
  [],
  []
];
var GetAccountResponse$ = [
  3,
  n05,
  _GARe,
  0,
  [_DIAWE, _ESn, _PAE, _SQ, _SEe, _SA, _Det, _VA],
  [2, 0, 2, () => SendQuota$, 2, () => SuppressionAttributes$, [() => AccountDetails$, 0], () => VdmAttributes$]
];
var GetBlacklistReportsRequest$ = [
  3,
  n05,
  _GBRR,
  0,
  [_BIN],
  [[64 | 0, { [_hQ2]: _BIN }]],
  1
];
var GetBlacklistReportsResponse$ = [
  3,
  n05,
  _GBRRe,
  0,
  [_BR],
  [() => BlacklistReport],
  1
];
var GetConfigurationSetEventDestinationsRequest$ = [
  3,
  n05,
  _GCSEDR,
  0,
  [_CSN],
  [[0, 1]],
  1
];
var GetConfigurationSetEventDestinationsResponse$ = [
  3,
  n05,
  _GCSEDRe,
  0,
  [_EDven],
  [() => EventDestinations]
];
var GetConfigurationSetRequest$ = [
  3,
  n05,
  _GCSR,
  0,
  [_CSN],
  [[0, 1]],
  1
];
var GetConfigurationSetResponse$ = [
  3,
  n05,
  _GCSRe,
  0,
  [_CSN, _TO, _DO, _RO, _SO, _Ta2, _SOu, _VO, _AO],
  [0, () => TrackingOptions$, () => DeliveryOptions$, () => ReputationOptions$, () => SendingOptions$, () => TagList, () => SuppressionOptions$, () => VdmOptions$, () => ArchivingOptions$]
];
var GetContactListRequest$ = [
  3,
  n05,
  _GCLR,
  0,
  [_CLN],
  [[0, 1]],
  1
];
var GetContactListResponse$ = [
  3,
  n05,
  _GCLRe,
  0,
  [_CLN, _To, _De, _CTr, _LUT, _Ta2],
  [0, () => Topics, 0, 4, 4, () => TagList]
];
var GetContactRequest$ = [
  3,
  n05,
  _GCR,
  0,
  [_CLN, _EA],
  [[0, 1], [0, 1]],
  2
];
var GetContactResponse$ = [
  3,
  n05,
  _GCRe,
  0,
  [_CLN, _EA, _TP, _TDP, _UA, _ADt, _CTr, _LUT],
  [0, 0, () => TopicPreferenceList, () => TopicPreferenceList, 2, 0, 4, 4]
];
var GetCustomVerificationEmailTemplateRequest$ = [
  3,
  n05,
  _GCVETR,
  0,
  [_TN],
  [[0, 1]],
  1
];
var GetCustomVerificationEmailTemplateResponse$ = [
  3,
  n05,
  _GCVETRe,
  0,
  [_TN, _FEA, _TS, _TC2, _Ta2, _SRURL, _FRURL],
  [0, 0, 0, 0, () => TagList, 0, 0]
];
var GetDedicatedIpPoolRequest$ = [
  3,
  n05,
  _GDIPR,
  0,
  [_PN],
  [[0, 1]],
  1
];
var GetDedicatedIpPoolResponse$ = [
  3,
  n05,
  _GDIPRe,
  0,
  [_DIPe],
  [() => DedicatedIpPool$]
];
var GetDedicatedIpRequest$ = [
  3,
  n05,
  _GDIR,
  0,
  [_Ip],
  [[0, 1]],
  1
];
var GetDedicatedIpResponse$ = [
  3,
  n05,
  _GDIRe,
  0,
  [_DI],
  [() => DedicatedIp$]
];
var GetDedicatedIpsRequest$ = [
  3,
  n05,
  _GDIRet,
  0,
  [_PN, _NT, _PS],
  [[0, { [_hQ2]: _PN }], [0, { [_hQ2]: _NT }], [1, { [_hQ2]: _PS }]]
];
var GetDedicatedIpsResponse$ = [
  3,
  n05,
  _GDIRete,
  0,
  [_DIe, _NT],
  [() => DedicatedIpList, 0]
];
var GetDeliverabilityDashboardOptionsRequest$ = [
  3,
  n05,
  _GDDOR,
  0,
  [],
  []
];
var GetDeliverabilityDashboardOptionsResponse$ = [
  3,
  n05,
  _GDDORe,
  0,
  [_DE, _SED, _AS, _ASD, _PESD],
  [2, 4, 0, () => DomainDeliverabilityTrackingOptions, () => DomainDeliverabilityTrackingOptions],
  1
];
var GetDeliverabilityTestReportRequest$ = [
  3,
  n05,
  _GDTRR,
  0,
  [_RI],
  [[0, 1]],
  1
];
var GetDeliverabilityTestReportResponse$ = [
  3,
  n05,
  _GDTRRe,
  0,
  [_DTRel, _OP, _IPs, _Me, _Ta2],
  [() => DeliverabilityTestReport$, () => PlacementStatistics$, () => IspPlacements, 0, () => TagList],
  3
];
var GetDomainDeliverabilityCampaignRequest$ = [
  3,
  n05,
  _GDDCR,
  0,
  [_CIa],
  [[0, 1]],
  1
];
var GetDomainDeliverabilityCampaignResponse$ = [
  3,
  n05,
  _GDDCRe,
  0,
  [_DDC],
  [() => DomainDeliverabilityCampaign$],
  1
];
var GetDomainStatisticsReportRequest$ = [
  3,
  n05,
  _GDSRR,
  0,
  [_Do, _SD, _ED],
  [[0, 1], [4, { [_hQ2]: _SD }], [4, { [_hQ2]: _ED }]],
  3
];
var GetDomainStatisticsReportResponse$ = [
  3,
  n05,
  _GDSRRe,
  0,
  [_OV, _DVa],
  [() => OverallVolume$, () => DailyVolumes],
  2
];
var GetEmailAddressInsightsRequest$ = [
  3,
  n05,
  _GEAIR,
  0,
  [_EA],
  [0],
  1
];
var GetEmailAddressInsightsResponse$ = [
  3,
  n05,
  _GEAIRe,
  0,
  [_MV],
  [() => MailboxValidation$]
];
var GetEmailIdentityPoliciesRequest$ = [
  3,
  n05,
  _GEIPR,
  0,
  [_EI2],
  [[0, 1]],
  1
];
var GetEmailIdentityPoliciesResponse$ = [
  3,
  n05,
  _GEIPRe,
  0,
  [_Po],
  [128 | 0]
];
var GetEmailIdentityRequest$ = [
  3,
  n05,
  _GEIR,
  0,
  [_EI2],
  [[0, 1]],
  1
];
var GetEmailIdentityResponse$ = [
  3,
  n05,
  _GEIRe,
  0,
  [_IT2, _FFS, _VFSS, _DA, _MFA, _Po, _Ta2, _CSN, _VSe, _VI],
  [0, 2, 2, () => DkimAttributes$, () => MailFromAttributes$, 128 | 0, () => TagList, 0, 0, () => VerificationInfo$]
];
var GetEmailTemplateRequest$ = [
  3,
  n05,
  _GETR,
  0,
  [_TN],
  [[0, 1]],
  1
];
var GetEmailTemplateResponse$ = [
  3,
  n05,
  _GETRe,
  0,
  [_TN, _TC2, _Ta2],
  [0, () => EmailTemplateContent$, () => TagList],
  2
];
var GetExportJobRequest$ = [
  3,
  n05,
  _GEJR,
  0,
  [_JI],
  [[0, 1]],
  1
];
var GetExportJobResponse$ = [
  3,
  n05,
  _GEJRe,
  0,
  [_JI, _EST, _JS, _EDx, _EDS, _CTr, _CTo, _FI, _St],
  [0, 0, 0, () => ExportDestination$, [() => ExportDataSource$, 0], 4, 4, () => FailureInfo$, () => ExportStatistics$]
];
var GetImportJobRequest$ = [
  3,
  n05,
  _GIJR,
  0,
  [_JI],
  [[0, 1]],
  1
];
var GetImportJobResponse$ = [
  3,
  n05,
  _GIJRe,
  0,
  [_JI, _ID, _IDS, _FI, _JS, _CTr, _CTo, _PRC, _FRC],
  [0, () => ImportDestination$, () => ImportDataSource$, () => FailureInfo$, 0, 4, 4, 1, 1]
];
var GetMessageInsightsRequest$ = [
  3,
  n05,
  _GMIR,
  0,
  [_MI],
  [[0, 1]],
  1
];
var GetMessageInsightsResponse$ = [
  3,
  n05,
  _GMIRe,
  0,
  [_MI, _FEA, _Su, _ET, _In],
  [0, [() => InsightsEmailAddress, 0], [() => EmailSubject, 0], () => MessageTagList, [() => EmailInsightsList, 0]]
];
var GetMultiRegionEndpointRequest$ = [
  3,
  n05,
  _GMRER,
  0,
  [_EN],
  [[0, 1]],
  1
];
var GetMultiRegionEndpointResponse$ = [
  3,
  n05,
  _GMRERe,
  0,
  [_EN, _EIn, _Ro, _S, _CTr, _LUT],
  [0, 0, () => Routes, 0, 4, 4]
];
var GetReputationEntityRequest$ = [
  3,
  n05,
  _GRER,
  0,
  [_RER, _RET],
  [[0, 1], [0, 1]],
  2
];
var GetReputationEntityResponse$ = [
  3,
  n05,
  _GRERe,
  0,
  [_RE],
  [() => ReputationEntity$]
];
var GetSuppressedDestinationRequest$ = [
  3,
  n05,
  _GSDR,
  0,
  [_EA],
  [[0, 1]],
  1
];
var GetSuppressedDestinationResponse$ = [
  3,
  n05,
  _GSDRe,
  0,
  [_SDu],
  [() => SuppressedDestination$],
  1
];
var GetTenantRequest$ = [
  3,
  n05,
  _GTR,
  0,
  [_TNe],
  [0],
  1
];
var GetTenantResponse$ = [
  3,
  n05,
  _GTRe,
  0,
  [_Ten],
  [() => Tenant$]
];
var GuardianAttributes$ = [
  3,
  n05,
  _GA,
  0,
  [_OSD],
  [0]
];
var GuardianOptions$ = [
  3,
  n05,
  _GO,
  0,
  [_OSD],
  [0]
];
var IdentityInfo$ = [
  3,
  n05,
  _II,
  0,
  [_IT2, _INd, _SEe, _VSe],
  [0, 0, 2, 0]
];
var ImportDataSource$ = [
  3,
  n05,
  _IDS,
  0,
  [_SU, _DF],
  [0, 0],
  2
];
var ImportDestination$ = [
  3,
  n05,
  _ID,
  0,
  [_SLD, _CLD],
  [() => SuppressionListDestination$, () => ContactListDestination$]
];
var ImportJobSummary$ = [
  3,
  n05,
  _IJS,
  0,
  [_JI, _ID, _JS, _CTr, _PRC, _FRC],
  [0, () => ImportDestination$, 0, 4, 1, 1]
];
var InboxPlacementTrackingOption$ = [
  3,
  n05,
  _IPTO,
  0,
  [_G, _TIr],
  [2, 64 | 0]
];
var InsightsEvent$ = [
  3,
  n05,
  _IE,
  0,
  [_Ti, _Ty, _Det],
  [4, 0, () => EventDetails$]
];
var IspPlacement$ = [
  3,
  n05,
  _IPsp,
  0,
  [_IN, _PSl],
  [0, () => PlacementStatistics$]
];
var KinesisFirehoseDestination$ = [
  3,
  n05,
  _KFD,
  0,
  [_IRAa, _DSAe],
  [0, 0],
  2
];
var ListConfigurationSetsRequest$ = [
  3,
  n05,
  _LCSR,
  0,
  [_NT, _PS],
  [[0, { [_hQ2]: _NT }], [1, { [_hQ2]: _PS }]]
];
var ListConfigurationSetsResponse$ = [
  3,
  n05,
  _LCSRi,
  0,
  [_CS2, _NT],
  [64 | 0, 0]
];
var ListContactListsRequest$ = [
  3,
  n05,
  _LCLR,
  0,
  [_PS, _NT],
  [[1, { [_hQ2]: _PS }], [0, { [_hQ2]: _NT }]]
];
var ListContactListsResponse$ = [
  3,
  n05,
  _LCLRi,
  0,
  [_CLon, _NT],
  [() => ListOfContactLists, 0]
];
var ListContactsFilter$ = [
  3,
  n05,
  _LCF,
  0,
  [_FS, _TF],
  [0, () => TopicFilter$]
];
var ListContactsRequest$ = [
  3,
  n05,
  _LCR,
  0,
  [_CLN, _F, _PS, _NT],
  [[0, 1], () => ListContactsFilter$, 1, 0],
  1
];
var ListContactsResponse$ = [
  3,
  n05,
  _LCRi,
  0,
  [_Cont, _NT],
  [() => ListOfContacts, 0]
];
var ListCustomVerificationEmailTemplatesRequest$ = [
  3,
  n05,
  _LCVETR,
  0,
  [_NT, _PS],
  [[0, { [_hQ2]: _NT }], [1, { [_hQ2]: _PS }]]
];
var ListCustomVerificationEmailTemplatesResponse$ = [
  3,
  n05,
  _LCVETRi,
  0,
  [_CVET, _NT],
  [() => CustomVerificationEmailTemplatesList, 0]
];
var ListDedicatedIpPoolsRequest$ = [
  3,
  n05,
  _LDIPR,
  0,
  [_NT, _PS],
  [[0, { [_hQ2]: _NT }], [1, { [_hQ2]: _PS }]]
];
var ListDedicatedIpPoolsResponse$ = [
  3,
  n05,
  _LDIPRi,
  0,
  [_DIPed, _NT],
  [64 | 0, 0]
];
var ListDeliverabilityTestReportsRequest$ = [
  3,
  n05,
  _LDTRR,
  0,
  [_NT, _PS],
  [[0, { [_hQ2]: _NT }], [1, { [_hQ2]: _PS }]]
];
var ListDeliverabilityTestReportsResponse$ = [
  3,
  n05,
  _LDTRRi,
  0,
  [_DTReli, _NT],
  [() => DeliverabilityTestReports, 0],
  1
];
var ListDomainDeliverabilityCampaignsRequest$ = [
  3,
  n05,
  _LDDCR,
  0,
  [_SD, _ED, _SDub, _NT, _PS],
  [[4, { [_hQ2]: _SD }], [4, { [_hQ2]: _ED }], [0, 1], [0, { [_hQ2]: _NT }], [1, { [_hQ2]: _PS }]],
  3
];
var ListDomainDeliverabilityCampaignsResponse$ = [
  3,
  n05,
  _LDDCRi,
  0,
  [_DDCo, _NT],
  [() => DomainDeliverabilityCampaignList, 0],
  1
];
var ListEmailIdentitiesRequest$ = [
  3,
  n05,
  _LEIR,
  0,
  [_NT, _PS],
  [[0, { [_hQ2]: _NT }], [1, { [_hQ2]: _PS }]]
];
var ListEmailIdentitiesResponse$ = [
  3,
  n05,
  _LEIRi,
  0,
  [_EIma, _NT],
  [() => IdentityInfoList, 0]
];
var ListEmailTemplatesRequest$ = [
  3,
  n05,
  _LETR,
  0,
  [_NT, _PS],
  [[0, { [_hQ2]: _NT }], [1, { [_hQ2]: _PS }]]
];
var ListEmailTemplatesResponse$ = [
  3,
  n05,
  _LETRi,
  0,
  [_TM, _NT],
  [() => EmailTemplateMetadataList, 0]
];
var ListExportJobsRequest$ = [
  3,
  n05,
  _LEJR,
  0,
  [_NT, _PS, _EST, _JS],
  [0, 1, 0, 0]
];
var ListExportJobsResponse$ = [
  3,
  n05,
  _LEJRi,
  0,
  [_EJ, _NT],
  [() => ExportJobSummaryList, 0]
];
var ListImportJobsRequest$ = [
  3,
  n05,
  _LIJR,
  0,
  [_IDT, _NT, _PS],
  [0, 0, 1]
];
var ListImportJobsResponse$ = [
  3,
  n05,
  _LIJRi,
  0,
  [_IJ, _NT],
  [() => ImportJobSummaryList, 0]
];
var ListManagementOptions$ = [
  3,
  n05,
  _LMO,
  0,
  [_CLN, _TNo],
  [0, 0],
  1
];
var ListMultiRegionEndpointsRequest$ = [
  3,
  n05,
  _LMRER,
  0,
  [_NT, _PS],
  [[0, { [_hQ2]: _NT }], [1, { [_hQ2]: _PS }]]
];
var ListMultiRegionEndpointsResponse$ = [
  3,
  n05,
  _LMRERi,
  0,
  [_MRE, _NT],
  [() => MultiRegionEndpoints, 0]
];
var ListRecommendationsRequest$ = [
  3,
  n05,
  _LRR,
  0,
  [_F, _NT, _PS],
  [128 | 0, 0, 1]
];
var ListRecommendationsResponse$ = [
  3,
  n05,
  _LRRi,
  0,
  [_Re, _NT],
  [() => RecommendationsList, 0]
];
var ListReputationEntitiesRequest$ = [
  3,
  n05,
  _LRER,
  0,
  [_F, _NT, _PS],
  [128 | 0, 0, 1]
];
var ListReputationEntitiesResponse$ = [
  3,
  n05,
  _LRERi,
  0,
  [_REe, _NT],
  [() => ReputationEntitiesList, 0]
];
var ListResourceTenantsRequest$ = [
  3,
  n05,
  _LRTR,
  0,
  [_RA2, _PS, _NT],
  [0, 1, 0],
  1
];
var ListResourceTenantsResponse$ = [
  3,
  n05,
  _LRTRi,
  0,
  [_RTe, _NT],
  [() => ResourceTenantMetadataList, 0]
];
var ListSuppressedDestinationsRequest$ = [
  3,
  n05,
  _LSDR,
  0,
  [_Rea, _SD, _ED, _NT, _PS],
  [[64 | 0, { [_hQ2]: _Reas }], [4, { [_hQ2]: _SD }], [4, { [_hQ2]: _ED }], [0, { [_hQ2]: _NT }], [1, { [_hQ2]: _PS }]]
];
var ListSuppressedDestinationsResponse$ = [
  3,
  n05,
  _LSDRi,
  0,
  [_SDS, _NT],
  [() => SuppressedDestinationSummaries, 0]
];
var ListTagsForResourceRequest$ = [
  3,
  n05,
  _LTFRR,
  0,
  [_RA2],
  [[0, { [_hQ2]: _RA2 }]],
  1
];
var ListTagsForResourceResponse$ = [
  3,
  n05,
  _LTFRRi,
  0,
  [_Ta2],
  [() => TagList],
  1
];
var ListTenantResourcesRequest$ = [
  3,
  n05,
  _LTRR,
  0,
  [_TNe, _F, _PS, _NT],
  [0, 128 | 0, 1, 0],
  1
];
var ListTenantResourcesResponse$ = [
  3,
  n05,
  _LTRRi,
  0,
  [_TR, _NT],
  [() => TenantResourceList, 0]
];
var ListTenantsRequest$ = [
  3,
  n05,
  _LTR,
  0,
  [_NT, _PS],
  [0, 1]
];
var ListTenantsResponse$ = [
  3,
  n05,
  _LTRi,
  0,
  [_Tena, _NT],
  [() => TenantInfoList, 0]
];
var MailboxValidation$ = [
  3,
  n05,
  _MV,
  0,
  [_IV, _Eva],
  [() => EmailAddressInsightsVerdict$, () => EmailAddressInsightsMailboxEvaluations$]
];
var MailFromAttributes$ = [
  3,
  n05,
  _MFA,
  0,
  [_MFD, _MFDS, _BOMF],
  [0, 0, 0],
  3
];
var Message$ = [
  3,
  n05,
  _Me,
  0,
  [_Su, _B, _He, _At],
  [() => Content$, () => Body$, () => MessageHeaderList, () => AttachmentList],
  2
];
var MessageHeader$ = [
  3,
  n05,
  _MH,
  0,
  [_Na, _V2],
  [0, 0],
  2
];
var MessageInsightsDataSource$ = [
  3,
  n05,
  _MIDS,
  0,
  [_SD, _ED, _Inc, _Ex, _MRa],
  [4, 4, [() => MessageInsightsFilters$, 0], [() => MessageInsightsFilters$, 0], 1],
  2
];
var MessageInsightsFilters$ = [
  3,
  n05,
  _MIF,
  0,
  [_FEA, _Des, _Su, _Is, _LDE, _LEEa],
  [[() => EmailAddressFilterList, 0], [() => EmailAddressFilterList, 0], [() => EmailSubjectFilterList, 0], 64 | 0, 64 | 0, 64 | 0]
];
var MessageTag$ = [
  3,
  n05,
  _MTe,
  0,
  [_Na, _V2],
  [0, 0],
  2
];
var MetricDataError$ = [
  3,
  n05,
  _MDE,
  0,
  [_I, _Cod, _Me],
  [0, 0, 0]
];
var MetricDataResult$ = [
  3,
  n05,
  _MDR,
  0,
  [_I, _Tim, _Va],
  [0, 64 | 4, 64 | 1]
];
var MetricsDataSource$ = [
  3,
  n05,
  _MDSe,
  0,
  [_D, _N, _Met, _SD, _ED],
  [[2, n05, _EDxp, 0, 0, 64 | 0], 0, () => ExportMetrics, 4, 4],
  5
];
var MultiRegionEndpoint$ = [
  3,
  n05,
  _MREu,
  0,
  [_EN, _S, _EIn, _Reg, _CTr, _LUT],
  [0, 0, 0, 64 | 0, 4, 4]
];
var OverallVolume$ = [
  3,
  n05,
  _OV,
  0,
  [_VS, _RRP, _DIP],
  [() => VolumeStatistics$, 1, () => DomainIspPlacements]
];
var PinpointDestination$ = [
  3,
  n05,
  _PD,
  0,
  [_AAp],
  [0]
];
var PlacementStatistics$ = [
  3,
  n05,
  _PSl,
  0,
  [_IP, _SP, _MP, _SPp, _DP],
  [1, 1, 1, 1, 1]
];
var PutAccountDedicatedIpWarmupAttributesRequest$ = [
  3,
  n05,
  _PADIWAR,
  0,
  [_AWE],
  [2]
];
var PutAccountDedicatedIpWarmupAttributesResponse$ = [
  3,
  n05,
  _PADIWARu,
  0,
  [],
  []
];
var PutAccountDetailsRequest$ = [
  3,
  n05,
  _PADR,
  0,
  [_MT, _WURL, _CL, _UCD, _ACEAd, _PAE],
  [0, [() => WebsiteURL, 0], 0, [() => UseCaseDescription, 0], [() => AdditionalContactEmailAddresses, 0], 2],
  2
];
var PutAccountDetailsResponse$ = [
  3,
  n05,
  _PADRu,
  0,
  [],
  []
];
var PutAccountSendingAttributesRequest$ = [
  3,
  n05,
  _PASAR,
  0,
  [_SEe],
  [2]
];
var PutAccountSendingAttributesResponse$ = [
  3,
  n05,
  _PASARu,
  0,
  [],
  []
];
var PutAccountSuppressionAttributesRequest$ = [
  3,
  n05,
  _PASARut,
  0,
  [_SR, _VAa],
  [64 | 0, () => SuppressionValidationAttributes$]
];
var PutAccountSuppressionAttributesResponse$ = [
  3,
  n05,
  _PASARutc,
  0,
  [],
  []
];
var PutAccountVdmAttributesRequest$ = [
  3,
  n05,
  _PAVAR,
  0,
  [_VA],
  [() => VdmAttributes$],
  1
];
var PutAccountVdmAttributesResponse$ = [
  3,
  n05,
  _PAVARu,
  0,
  [],
  []
];
var PutConfigurationSetArchivingOptionsRequest$ = [
  3,
  n05,
  _PCSAOR,
  0,
  [_CSN, _AA],
  [[0, 1], 0],
  1
];
var PutConfigurationSetArchivingOptionsResponse$ = [
  3,
  n05,
  _PCSAORu,
  0,
  [],
  []
];
var PutConfigurationSetDeliveryOptionsRequest$ = [
  3,
  n05,
  _PCSDOR,
  0,
  [_CSN, _TPl, _SPN, _MDS],
  [[0, 1], 0, 0, 1],
  1
];
var PutConfigurationSetDeliveryOptionsResponse$ = [
  3,
  n05,
  _PCSDORu,
  0,
  [],
  []
];
var PutConfigurationSetReputationOptionsRequest$ = [
  3,
  n05,
  _PCSROR,
  0,
  [_CSN, _RME],
  [[0, 1], 2],
  1
];
var PutConfigurationSetReputationOptionsResponse$ = [
  3,
  n05,
  _PCSRORu,
  0,
  [],
  []
];
var PutConfigurationSetSendingOptionsRequest$ = [
  3,
  n05,
  _PCSSOR,
  0,
  [_CSN, _SEe],
  [[0, 1], 2],
  1
];
var PutConfigurationSetSendingOptionsResponse$ = [
  3,
  n05,
  _PCSSORu,
  0,
  [],
  []
];
var PutConfigurationSetSuppressionOptionsRequest$ = [
  3,
  n05,
  _PCSSORut,
  0,
  [_CSN, _SR, _VOa],
  [[0, 1], 64 | 0, () => SuppressionValidationOptions$],
  1
];
var PutConfigurationSetSuppressionOptionsResponse$ = [
  3,
  n05,
  _PCSSORuto,
  0,
  [],
  []
];
var PutConfigurationSetTrackingOptionsRequest$ = [
  3,
  n05,
  _PCSTOR,
  0,
  [_CSN, _CRD, _HP],
  [[0, 1], 0, 0],
  1
];
var PutConfigurationSetTrackingOptionsResponse$ = [
  3,
  n05,
  _PCSTORu,
  0,
  [],
  []
];
var PutConfigurationSetVdmOptionsRequest$ = [
  3,
  n05,
  _PCSVOR,
  0,
  [_CSN, _VO],
  [[0, 1], () => VdmOptions$],
  1
];
var PutConfigurationSetVdmOptionsResponse$ = [
  3,
  n05,
  _PCSVORu,
  0,
  [],
  []
];
var PutDedicatedIpInPoolRequest$ = [
  3,
  n05,
  _PDIIPR,
  0,
  [_Ip, _DPN],
  [[0, 1], 0],
  2
];
var PutDedicatedIpInPoolResponse$ = [
  3,
  n05,
  _PDIIPRu,
  0,
  [],
  []
];
var PutDedicatedIpPoolScalingAttributesRequest$ = [
  3,
  n05,
  _PDIPSAR,
  0,
  [_PN, _SM],
  [[0, 1], 0],
  2
];
var PutDedicatedIpPoolScalingAttributesResponse$ = [
  3,
  n05,
  _PDIPSARu,
  0,
  [],
  []
];
var PutDedicatedIpWarmupAttributesRequest$ = [
  3,
  n05,
  _PDIWAR,
  0,
  [_Ip, _WP],
  [[0, 1], 1],
  2
];
var PutDedicatedIpWarmupAttributesResponse$ = [
  3,
  n05,
  _PDIWARu,
  0,
  [],
  []
];
var PutDeliverabilityDashboardOptionRequest$ = [
  3,
  n05,
  _PDDOR,
  0,
  [_DE, _SDubs],
  [2, () => DomainDeliverabilityTrackingOptions],
  1
];
var PutDeliverabilityDashboardOptionResponse$ = [
  3,
  n05,
  _PDDORu,
  0,
  [],
  []
];
var PutEmailIdentityConfigurationSetAttributesRequest$ = [
  3,
  n05,
  _PEICSAR,
  0,
  [_EI2, _CSN],
  [[0, 1], 0],
  1
];
var PutEmailIdentityConfigurationSetAttributesResponse$ = [
  3,
  n05,
  _PEICSARu,
  0,
  [],
  []
];
var PutEmailIdentityDkimAttributesRequest$ = [
  3,
  n05,
  _PEIDAR,
  0,
  [_EI2, _SE],
  [[0, 1], 2],
  1
];
var PutEmailIdentityDkimAttributesResponse$ = [
  3,
  n05,
  _PEIDARu,
  0,
  [],
  []
];
var PutEmailIdentityDkimSigningAttributesRequest$ = [
  3,
  n05,
  _PEIDSAR,
  0,
  [_EI2, _SAO, _SAi],
  [[0, 1], 0, [() => DkimSigningAttributes$, 0]],
  2
];
var PutEmailIdentityDkimSigningAttributesResponse$ = [
  3,
  n05,
  _PEIDSARu,
  0,
  [_DS2, _DT, _SHZ],
  [0, 64 | 0, 0]
];
var PutEmailIdentityFeedbackAttributesRequest$ = [
  3,
  n05,
  _PEIFAR,
  0,
  [_EI2, _EFE],
  [[0, 1], 2],
  1
];
var PutEmailIdentityFeedbackAttributesResponse$ = [
  3,
  n05,
  _PEIFARu,
  0,
  [],
  []
];
var PutEmailIdentityMailFromAttributesRequest$ = [
  3,
  n05,
  _PEIMFAR,
  0,
  [_EI2, _MFD, _BOMF],
  [[0, 1], 0, 0],
  1
];
var PutEmailIdentityMailFromAttributesResponse$ = [
  3,
  n05,
  _PEIMFARu,
  0,
  [],
  []
];
var PutSuppressedDestinationRequest$ = [
  3,
  n05,
  _PSDR,
  0,
  [_EA, _Reas],
  [0, 0],
  2
];
var PutSuppressedDestinationResponse$ = [
  3,
  n05,
  _PSDRu,
  0,
  [],
  []
];
var RawMessage$ = [
  3,
  n05,
  _RM,
  0,
  [_Da],
  [21],
  1
];
var Recommendation$ = [
  3,
  n05,
  _Rec,
  0,
  [_RA2, _Ty, _De, _S, _CTr, _LUT, _Im],
  [0, 0, 0, 0, 4, 4, 0]
];
var ReplacementEmailContent$ = [
  3,
  n05,
  _REC,
  0,
  [_RTep],
  [() => ReplacementTemplate$]
];
var ReplacementTemplate$ = [
  3,
  n05,
  _RTep,
  0,
  [_RTD],
  [0]
];
var ReputationEntity$ = [
  3,
  n05,
  _RE,
  0,
  [_RER, _RET, _RMP, _CMS, _ASMS, _SSA, _RIe],
  [0, 0, 0, () => StatusRecord$, () => StatusRecord$, 0, 0]
];
var ReputationOptions$ = [
  3,
  n05,
  _RO,
  0,
  [_RME, _LFS],
  [2, 4]
];
var ResourceTenantMetadata$ = [
  3,
  n05,
  _RTM,
  0,
  [_TNe, _TI, _RA2, _AT3],
  [0, 0, 0, 4]
];
var ReviewDetails$ = [
  3,
  n05,
  _RD,
  0,
  [_S, _CIas],
  [0, 0]
];
var Route$ = [
  3,
  n05,
  _Rou,
  0,
  [_Regi],
  [0],
  1
];
var RouteDetails$ = [
  3,
  n05,
  _RDou,
  0,
  [_Regi],
  [0],
  1
];
var SendBulkEmailRequest$ = [
  3,
  n05,
  _SBER,
  0,
  [_DCe, _BEEu, _FEA, _FEAIA, _RTA, _FFEA, _FFEAIA, _DET, _CSN, _EIn, _TNe],
  [() => BulkEmailContent$, () => BulkEmailEntryList, 0, 0, 64 | 0, 0, 0, () => MessageTagList, 0, 0, 0],
  2
];
var SendBulkEmailResponse$ = [
  3,
  n05,
  _SBERe,
  0,
  [_BEERu],
  [() => BulkEmailEntryResultList],
  1
];
var SendCustomVerificationEmailRequest$ = [
  3,
  n05,
  _SCVER,
  0,
  [_EA, _TN, _CSN],
  [0, 0, 0],
  2
];
var SendCustomVerificationEmailResponse$ = [
  3,
  n05,
  _SCVERe,
  0,
  [_MI],
  [0]
];
var SendEmailRequest$ = [
  3,
  n05,
  _SER,
  0,
  [_Con, _FEA, _FEAIA, _Des, _RTA, _FFEA, _FFEAIA, _ET, _CSN, _EIn, _TNe, _LMO],
  [() => EmailContent$, 0, 0, () => Destination$, 64 | 0, 0, 0, () => MessageTagList, 0, 0, 0, () => ListManagementOptions$],
  1
];
var SendEmailResponse$ = [
  3,
  n05,
  _SERe,
  0,
  [_MI],
  [0]
];
var SendingOptions$ = [
  3,
  n05,
  _SO,
  0,
  [_SEe],
  [2]
];
var SendQuota$ = [
  3,
  n05,
  _SQ,
  0,
  [_MHS, _MSR, _SLH],
  [1, 1, 1]
];
var SnsDestination$ = [
  3,
  n05,
  _SDn,
  0,
  [_TAop],
  [0],
  1
];
var SOARecord$ = [
  3,
  n05,
  _SOAR,
  0,
  [_PNS, _AE, _SN2],
  [0, 0, 1]
];
var StatusRecord$ = [
  3,
  n05,
  _SRt,
  0,
  [_S, _Ca, _LUT],
  [0, 0, 4]
];
var SuppressedDestination$ = [
  3,
  n05,
  _SDu,
  0,
  [_EA, _Reas, _LUTa, _Att],
  [0, 0, 4, () => SuppressedDestinationAttributes$],
  3
];
var SuppressedDestinationAttributes$ = [
  3,
  n05,
  _SDA,
  0,
  [_MI, _FIe],
  [0, 0]
];
var SuppressedDestinationSummary$ = [
  3,
  n05,
  _SDSu,
  0,
  [_EA, _Reas, _LUTa],
  [0, 0, 4],
  3
];
var SuppressionAttributes$ = [
  3,
  n05,
  _SA,
  0,
  [_SR, _VAa],
  [64 | 0, () => SuppressionValidationAttributes$]
];
var SuppressionConditionThreshold$ = [
  3,
  n05,
  _SCT,
  0,
  [_CTEo, _OCT],
  [0, () => SuppressionConfidenceThreshold$],
  1
];
var SuppressionConfidenceThreshold$ = [
  3,
  n05,
  _SCTu,
  0,
  [_CVT],
  [0],
  1
];
var SuppressionListDestination$ = [
  3,
  n05,
  _SLD,
  0,
  [_SLIA],
  [0],
  1
];
var SuppressionOptions$ = [
  3,
  n05,
  _SOu,
  0,
  [_SR, _VOa],
  [64 | 0, () => SuppressionValidationOptions$]
];
var SuppressionValidationAttributes$ = [
  3,
  n05,
  _SVA,
  0,
  [_CTon],
  [() => SuppressionConditionThreshold$],
  1
];
var SuppressionValidationOptions$ = [
  3,
  n05,
  _SVO,
  0,
  [_CTon],
  [() => SuppressionConditionThreshold$],
  1
];
var Tag$2 = [
  3,
  n05,
  _Tag,
  0,
  [_K2, _V2],
  [0, 0],
  2
];
var TagResourceRequest$ = [
  3,
  n05,
  _TRR,
  0,
  [_RA2, _Ta2],
  [0, () => TagList],
  2
];
var TagResourceResponse$ = [
  3,
  n05,
  _TRRa,
  0,
  [],
  []
];
var Template$ = [
  3,
  n05,
  _Te,
  0,
  [_TN, _TAe, _TC2, _TD, _He, _At],
  [0, 0, () => EmailTemplateContent$, 0, () => MessageHeaderList, () => AttachmentList]
];
var Tenant$ = [
  3,
  n05,
  _Ten,
  0,
  [_TNe, _TI, _TA, _CTr, _Ta2, _SS],
  [0, 0, 0, 4, () => TagList, 0]
];
var TenantInfo$ = [
  3,
  n05,
  _TIe,
  0,
  [_TNe, _TI, _TA, _CTr],
  [0, 0, 0, 4]
];
var TenantResource$ = [
  3,
  n05,
  _TRe,
  0,
  [_RTes, _RA2],
  [0, 0]
];
var TestRenderEmailTemplateRequest$ = [
  3,
  n05,
  _TRETR,
  0,
  [_TN, _TD],
  [[0, 1], 0],
  2
];
var TestRenderEmailTemplateResponse$ = [
  3,
  n05,
  _TRETRe,
  0,
  [_RTen],
  [0],
  1
];
var Topic$ = [
  3,
  n05,
  _Top,
  0,
  [_TNo, _DNi, _DSSe, _De],
  [0, 0, 0, 0],
  3
];
var TopicFilter$ = [
  3,
  n05,
  _TF,
  0,
  [_TNo, _UDIPU],
  [0, 2]
];
var TopicPreference$ = [
  3,
  n05,
  _TPo,
  0,
  [_TNo, _SSu],
  [0, 0],
  2
];
var TrackingOptions$ = [
  3,
  n05,
  _TO,
  0,
  [_CRD, _HP],
  [0, 0],
  1
];
var UntagResourceRequest$ = [
  3,
  n05,
  _URR,
  0,
  [_RA2, _TK],
  [[0, { [_hQ2]: _RA2 }], [64 | 0, { [_hQ2]: _TK }]],
  2
];
var UntagResourceResponse$ = [
  3,
  n05,
  _URRn,
  0,
  [],
  []
];
var UpdateConfigurationSetEventDestinationRequest$ = [
  3,
  n05,
  _UCSEDR,
  0,
  [_CSN, _EDN, _EDv],
  [[0, 1], [0, 1], () => EventDestinationDefinition$],
  3
];
var UpdateConfigurationSetEventDestinationResponse$ = [
  3,
  n05,
  _UCSEDRp,
  0,
  [],
  []
];
var UpdateContactListRequest$ = [
  3,
  n05,
  _UCLR,
  0,
  [_CLN, _To, _De],
  [[0, 1], () => Topics, 0],
  1
];
var UpdateContactListResponse$ = [
  3,
  n05,
  _UCLRp,
  0,
  [],
  []
];
var UpdateContactRequest$ = [
  3,
  n05,
  _UCR,
  0,
  [_CLN, _EA, _TP, _UA, _ADt],
  [[0, 1], [0, 1], () => TopicPreferenceList, 2, 0],
  2
];
var UpdateContactResponse$ = [
  3,
  n05,
  _UCRp,
  0,
  [],
  []
];
var UpdateCustomVerificationEmailTemplateRequest$ = [
  3,
  n05,
  _UCVETR,
  0,
  [_TN, _FEA, _TS, _TC2, _SRURL, _FRURL],
  [[0, 1], 0, 0, 0, 0, 0],
  6
];
var UpdateCustomVerificationEmailTemplateResponse$ = [
  3,
  n05,
  _UCVETRp,
  0,
  [],
  []
];
var UpdateEmailIdentityPolicyRequest$ = [
  3,
  n05,
  _UEIPR,
  0,
  [_EI2, _PNo, _P2],
  [[0, 1], [0, 1], 0],
  3
];
var UpdateEmailIdentityPolicyResponse$ = [
  3,
  n05,
  _UEIPRp,
  0,
  [],
  []
];
var UpdateEmailTemplateRequest$ = [
  3,
  n05,
  _UETR,
  0,
  [_TN, _TC2],
  [[0, 1], () => EmailTemplateContent$],
  2
];
var UpdateEmailTemplateResponse$ = [
  3,
  n05,
  _UETRp,
  0,
  [],
  []
];
var UpdateReputationEntityCustomerManagedStatusRequest$ = [
  3,
  n05,
  _URECMSR,
  0,
  [_RET, _RER, _SS],
  [[0, 1], [0, 1], 0],
  3
];
var UpdateReputationEntityCustomerManagedStatusResponse$ = [
  3,
  n05,
  _URECMSRp,
  0,
  [],
  []
];
var UpdateReputationEntityPolicyRequest$ = [
  3,
  n05,
  _UREPR,
  0,
  [_RET, _RER, _REP],
  [[0, 1], [0, 1], 0],
  3
];
var UpdateReputationEntityPolicyResponse$ = [
  3,
  n05,
  _UREPRp,
  0,
  [],
  []
];
var VdmAttributes$ = [
  3,
  n05,
  _VA,
  0,
  [_VE2, _DAa, _GA],
  [0, () => DashboardAttributes$, () => GuardianAttributes$],
  1
];
var VdmOptions$ = [
  3,
  n05,
  _VO,
  0,
  [_DOa, _GO],
  [() => DashboardOptions$, () => GuardianOptions$]
];
var VerificationInfo$ = [
  3,
  n05,
  _VI,
  0,
  [_LCT, _LST, _ETr, _SOAR],
  [4, 4, 0, () => SOARecord$]
];
var VolumeStatistics$ = [
  3,
  n05,
  _VS,
  0,
  [_IRC, _SRC, _PI2, _PSr],
  [1, 1, 1, 1]
];
var AdditionalContactEmailAddresses = [
  1,
  n05,
  _ACEAd,
  8,
  [
    () => AdditionalContactEmailAddress,
    0
  ]
];
var AttachmentList = [
  1,
  n05,
  _AL,
  0,
  () => Attachment$
];
var BatchGetMetricDataQueries = [
  1,
  n05,
  _BGMDQa,
  0,
  () => BatchGetMetricDataQuery$
];
var BlacklistEntries = [
  1,
  n05,
  _BEl,
  0,
  () => BlacklistEntry$
];
var BlacklistItemNames = 64 | 0;
var BulkEmailEntryList = [
  1,
  n05,
  _BEEL,
  0,
  () => BulkEmailEntry$
];
var BulkEmailEntryResultList = [
  1,
  n05,
  _BEERL,
  0,
  () => BulkEmailEntryResult$
];
var CloudWatchDimensionConfigurations = [
  1,
  n05,
  _CWDCl,
  0,
  () => CloudWatchDimensionConfiguration$
];
var ConfigurationSetNameList = 64 | 0;
var CustomVerificationEmailTemplatesList = [
  1,
  n05,
  _CVETL,
  0,
  () => CustomVerificationEmailTemplateMetadata$
];
var DailyVolumes = [
  1,
  n05,
  _DVa,
  0,
  () => DailyVolume$
];
var DedicatedIpList = [
  1,
  n05,
  _DIL,
  0,
  () => DedicatedIp$
];
var DeliverabilityTestReports = [
  1,
  n05,
  _DTReli,
  0,
  () => DeliverabilityTestReport$
];
var DnsTokenList = 64 | 0;
var DomainDeliverabilityCampaignList = [
  1,
  n05,
  _DDCL,
  0,
  () => DomainDeliverabilityCampaign$
];
var DomainDeliverabilityTrackingOptions = [
  1,
  n05,
  _DDTOo,
  0,
  () => DomainDeliverabilityTrackingOption$
];
var DomainIspPlacements = [
  1,
  n05,
  _DIP,
  0,
  () => DomainIspPlacement$
];
var EmailAddressFilterList = [
  1,
  n05,
  _EAFL,
  0,
  [
    () => InsightsEmailAddress,
    0
  ]
];
var EmailAddressList = 64 | 0;
var EmailInsightsList = [
  1,
  n05,
  _EIL,
  0,
  [
    () => EmailInsights$,
    0
  ]
];
var EmailSubjectFilterList = [
  1,
  n05,
  _ESFL,
  0,
  [
    () => EmailSubject,
    0
  ]
];
var EmailTemplateMetadataList = [
  1,
  n05,
  _ETML,
  0,
  () => EmailTemplateMetadata$
];
var Esps = 64 | 0;
var EventDestinations = [
  1,
  n05,
  _EDven,
  0,
  () => EventDestination$
];
var EventTypes = 64 | 0;
var ExportDimensionValue = 64 | 0;
var ExportJobSummaryList = [
  1,
  n05,
  _EJSL,
  0,
  () => ExportJobSummary$
];
var ExportMetrics = [
  1,
  n05,
  _EMxp,
  0,
  () => ExportMetric$
];
var IdentityInfoList = [
  1,
  n05,
  _IIL,
  0,
  () => IdentityInfo$
];
var ImportJobSummaryList = [
  1,
  n05,
  _IJSL,
  0,
  () => ImportJobSummary$
];
var InsightsEvents = [
  1,
  n05,
  _IEn,
  0,
  () => InsightsEvent$
];
var IpList = 64 | 0;
var IspFilterList = 64 | 0;
var IspNameList = 64 | 0;
var IspPlacements = [
  1,
  n05,
  _IPs,
  0,
  () => IspPlacement$
];
var LastDeliveryEventList = 64 | 0;
var LastEngagementEventList = 64 | 0;
var ListOfContactLists = [
  1,
  n05,
  _LOCL,
  0,
  () => ContactList$
];
var ListOfContacts = [
  1,
  n05,
  _LOC,
  0,
  () => Contact$
];
var ListOfDedicatedIpPools = 64 | 0;
var MessageHeaderList = [
  1,
  n05,
  _MHL,
  0,
  () => MessageHeader$
];
var MessageTagList = [
  1,
  n05,
  _MTL,
  0,
  () => MessageTag$
];
var MetricDataErrorList = [
  1,
  n05,
  _MDEL,
  0,
  () => MetricDataError$
];
var MetricDataResultList = [
  1,
  n05,
  _MDRL,
  0,
  () => MetricDataResult$
];
var MetricValueList = 64 | 1;
var MultiRegionEndpoints = [
  1,
  n05,
  _MRE,
  0,
  () => MultiRegionEndpoint$
];
var RecommendationsList = [
  1,
  n05,
  _RL,
  0,
  () => Recommendation$
];
var Regions = 64 | 0;
var ReputationEntitiesList = [
  1,
  n05,
  _REL,
  0,
  () => ReputationEntity$
];
var ResourceTenantMetadataList = [
  1,
  n05,
  _RTML,
  0,
  () => ResourceTenantMetadata$
];
var Routes = [
  1,
  n05,
  _Ro,
  0,
  () => Route$
];
var RoutesDetails = [
  1,
  n05,
  _RDo,
  0,
  () => RouteDetails$
];
var SuppressedDestinationSummaries = [
  1,
  n05,
  _SDS,
  0,
  () => SuppressedDestinationSummary$
];
var SuppressionListReasons = 64 | 0;
var TagKeyList = 64 | 0;
var TagList = [
  1,
  n05,
  _TL,
  0,
  () => Tag$2
];
var TenantInfoList = [
  1,
  n05,
  _TIL,
  0,
  () => TenantInfo$
];
var TenantResourceList = [
  1,
  n05,
  _TRL,
  0,
  () => TenantResource$
];
var TimestampList = 64 | 4;
var TopicPreferenceList = [
  1,
  n05,
  _TPL,
  0,
  () => TopicPreference$
];
var Topics = [
  1,
  n05,
  _To,
  0,
  () => Topic$
];
var BlacklistReport = [
  2,
  n05,
  _BR,
  0,
  0,
  () => BlacklistEntries
];
var Dimensions = 128 | 0;
var ExportDimensions = [
  2,
  n05,
  _EDxp,
  0,
  0,
  64 | 0
];
var ListRecommendationsFilter = 128 | 0;
var ListTenantResourcesFilter = 128 | 0;
var PolicyMap = 128 | 0;
var ReputationEntityFilter = 128 | 0;
var BatchGetMetricData$ = [
  9,
  n05,
  _BGMD,
  { [_h4]: ["POST", "/v2/email/metrics/batch", 200] },
  () => BatchGetMetricDataRequest$,
  () => BatchGetMetricDataResponse$
];
var CancelExportJob$ = [
  9,
  n05,
  _CEJ,
  { [_h4]: ["PUT", "/v2/email/export-jobs/{JobId}/cancel", 200] },
  () => CancelExportJobRequest$,
  () => CancelExportJobResponse$
];
var CreateConfigurationSet$ = [
  9,
  n05,
  _CCS,
  { [_h4]: ["POST", "/v2/email/configuration-sets", 200] },
  () => CreateConfigurationSetRequest$,
  () => CreateConfigurationSetResponse$
];
var CreateConfigurationSetEventDestination$ = [
  9,
  n05,
  _CCSED,
  { [_h4]: ["POST", "/v2/email/configuration-sets/{ConfigurationSetName}/event-destinations", 200] },
  () => CreateConfigurationSetEventDestinationRequest$,
  () => CreateConfigurationSetEventDestinationResponse$
];
var CreateContact$ = [
  9,
  n05,
  _CC,
  { [_h4]: ["POST", "/v2/email/contact-lists/{ContactListName}/contacts", 200] },
  () => CreateContactRequest$,
  () => CreateContactResponse$
];
var CreateContactList$ = [
  9,
  n05,
  _CCL,
  { [_h4]: ["POST", "/v2/email/contact-lists", 200] },
  () => CreateContactListRequest$,
  () => CreateContactListResponse$
];
var CreateCustomVerificationEmailTemplate$ = [
  9,
  n05,
  _CCVET,
  { [_h4]: ["POST", "/v2/email/custom-verification-email-templates", 200] },
  () => CreateCustomVerificationEmailTemplateRequest$,
  () => CreateCustomVerificationEmailTemplateResponse$
];
var CreateDedicatedIpPool$ = [
  9,
  n05,
  _CDIP,
  { [_h4]: ["POST", "/v2/email/dedicated-ip-pools", 200] },
  () => CreateDedicatedIpPoolRequest$,
  () => CreateDedicatedIpPoolResponse$
];
var CreateDeliverabilityTestReport$ = [
  9,
  n05,
  _CDTR,
  { [_h4]: ["POST", "/v2/email/deliverability-dashboard/test", 200] },
  () => CreateDeliverabilityTestReportRequest$,
  () => CreateDeliverabilityTestReportResponse$
];
var CreateEmailIdentity$ = [
  9,
  n05,
  _CEI,
  { [_h4]: ["POST", "/v2/email/identities", 200] },
  () => CreateEmailIdentityRequest$,
  () => CreateEmailIdentityResponse$
];
var CreateEmailIdentityPolicy$ = [
  9,
  n05,
  _CEIP,
  { [_h4]: ["POST", "/v2/email/identities/{EmailIdentity}/policies/{PolicyName}", 200] },
  () => CreateEmailIdentityPolicyRequest$,
  () => CreateEmailIdentityPolicyResponse$
];
var CreateEmailTemplate$ = [
  9,
  n05,
  _CET,
  { [_h4]: ["POST", "/v2/email/templates", 200] },
  () => CreateEmailTemplateRequest$,
  () => CreateEmailTemplateResponse$
];
var CreateExportJob$ = [
  9,
  n05,
  _CEJr,
  { [_h4]: ["POST", "/v2/email/export-jobs", 200] },
  () => CreateExportJobRequest$,
  () => CreateExportJobResponse$
];
var CreateImportJob$ = [
  9,
  n05,
  _CIJ,
  { [_h4]: ["POST", "/v2/email/import-jobs", 200] },
  () => CreateImportJobRequest$,
  () => CreateImportJobResponse$
];
var CreateMultiRegionEndpoint$ = [
  9,
  n05,
  _CMRE,
  { [_h4]: ["POST", "/v2/email/multi-region-endpoints", 200] },
  () => CreateMultiRegionEndpointRequest$,
  () => CreateMultiRegionEndpointResponse$
];
var CreateTenant$ = [
  9,
  n05,
  _CTre,
  { [_h4]: ["POST", "/v2/email/tenants", 200] },
  () => CreateTenantRequest$,
  () => CreateTenantResponse$
];
var CreateTenantResourceAssociation$ = [
  9,
  n05,
  _CTRA,
  { [_h4]: ["POST", "/v2/email/tenants/resources", 200] },
  () => CreateTenantResourceAssociationRequest$,
  () => CreateTenantResourceAssociationResponse$
];
var DeleteConfigurationSet$ = [
  9,
  n05,
  _DCS,
  { [_h4]: ["DELETE", "/v2/email/configuration-sets/{ConfigurationSetName}", 200] },
  () => DeleteConfigurationSetRequest$,
  () => DeleteConfigurationSetResponse$
];
var DeleteConfigurationSetEventDestination$ = [
  9,
  n05,
  _DCSED,
  { [_h4]: ["DELETE", "/v2/email/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}", 200] },
  () => DeleteConfigurationSetEventDestinationRequest$,
  () => DeleteConfigurationSetEventDestinationResponse$
];
var DeleteContact$ = [
  9,
  n05,
  _DCel,
  { [_h4]: ["DELETE", "/v2/email/contact-lists/{ContactListName}/contacts/{EmailAddress}", 200] },
  () => DeleteContactRequest$,
  () => DeleteContactResponse$
];
var DeleteContactList$ = [
  9,
  n05,
  _DCL,
  { [_h4]: ["DELETE", "/v2/email/contact-lists/{ContactListName}", 200] },
  () => DeleteContactListRequest$,
  () => DeleteContactListResponse$
];
var DeleteCustomVerificationEmailTemplate$ = [
  9,
  n05,
  _DCVET,
  { [_h4]: ["DELETE", "/v2/email/custom-verification-email-templates/{TemplateName}", 200] },
  () => DeleteCustomVerificationEmailTemplateRequest$,
  () => DeleteCustomVerificationEmailTemplateResponse$
];
var DeleteDedicatedIpPool$ = [
  9,
  n05,
  _DDIP,
  { [_h4]: ["DELETE", "/v2/email/dedicated-ip-pools/{PoolName}", 200] },
  () => DeleteDedicatedIpPoolRequest$,
  () => DeleteDedicatedIpPoolResponse$
];
var DeleteEmailIdentity$ = [
  9,
  n05,
  _DEI,
  { [_h4]: ["DELETE", "/v2/email/identities/{EmailIdentity}", 200] },
  () => DeleteEmailIdentityRequest$,
  () => DeleteEmailIdentityResponse$
];
var DeleteEmailIdentityPolicy$ = [
  9,
  n05,
  _DEIP,
  { [_h4]: ["DELETE", "/v2/email/identities/{EmailIdentity}/policies/{PolicyName}", 200] },
  () => DeleteEmailIdentityPolicyRequest$,
  () => DeleteEmailIdentityPolicyResponse$
];
var DeleteEmailTemplate$ = [
  9,
  n05,
  _DETe,
  { [_h4]: ["DELETE", "/v2/email/templates/{TemplateName}", 200] },
  () => DeleteEmailTemplateRequest$,
  () => DeleteEmailTemplateResponse$
];
var DeleteMultiRegionEndpoint$ = [
  9,
  n05,
  _DMRE,
  { [_h4]: ["DELETE", "/v2/email/multi-region-endpoints/{EndpointName}", 200] },
  () => DeleteMultiRegionEndpointRequest$,
  () => DeleteMultiRegionEndpointResponse$
];
var DeleteSuppressedDestination$ = [
  9,
  n05,
  _DSD,
  { [_h4]: ["DELETE", "/v2/email/suppression/addresses/{EmailAddress}", 200] },
  () => DeleteSuppressedDestinationRequest$,
  () => DeleteSuppressedDestinationResponse$
];
var DeleteTenant$ = [
  9,
  n05,
  _DTe,
  { [_h4]: ["POST", "/v2/email/tenants/delete", 200] },
  () => DeleteTenantRequest$,
  () => DeleteTenantResponse$
];
var DeleteTenantResourceAssociation$ = [
  9,
  n05,
  _DTRA,
  { [_h4]: ["POST", "/v2/email/tenants/resources/delete", 200] },
  () => DeleteTenantResourceAssociationRequest$,
  () => DeleteTenantResourceAssociationResponse$
];
var GetAccount$ = [
  9,
  n05,
  _GAe,
  { [_h4]: ["GET", "/v2/email/account", 200] },
  () => GetAccountRequest$,
  () => GetAccountResponse$
];
var GetBlacklistReports$ = [
  9,
  n05,
  _GBR,
  { [_h4]: ["GET", "/v2/email/deliverability-dashboard/blacklist-report", 200] },
  () => GetBlacklistReportsRequest$,
  () => GetBlacklistReportsResponse$
];
var GetConfigurationSet$ = [
  9,
  n05,
  _GCS,
  { [_h4]: ["GET", "/v2/email/configuration-sets/{ConfigurationSetName}", 200] },
  () => GetConfigurationSetRequest$,
  () => GetConfigurationSetResponse$
];
var GetConfigurationSetEventDestinations$ = [
  9,
  n05,
  _GCSED,
  { [_h4]: ["GET", "/v2/email/configuration-sets/{ConfigurationSetName}/event-destinations", 200] },
  () => GetConfigurationSetEventDestinationsRequest$,
  () => GetConfigurationSetEventDestinationsResponse$
];
var GetContact$ = [
  9,
  n05,
  _GC,
  { [_h4]: ["GET", "/v2/email/contact-lists/{ContactListName}/contacts/{EmailAddress}", 200] },
  () => GetContactRequest$,
  () => GetContactResponse$
];
var GetContactList$ = [
  9,
  n05,
  _GCL,
  { [_h4]: ["GET", "/v2/email/contact-lists/{ContactListName}", 200] },
  () => GetContactListRequest$,
  () => GetContactListResponse$
];
var GetCustomVerificationEmailTemplate$ = [
  9,
  n05,
  _GCVET,
  { [_h4]: ["GET", "/v2/email/custom-verification-email-templates/{TemplateName}", 200] },
  () => GetCustomVerificationEmailTemplateRequest$,
  () => GetCustomVerificationEmailTemplateResponse$
];
var GetDedicatedIp$ = [
  9,
  n05,
  _GDI,
  { [_h4]: ["GET", "/v2/email/dedicated-ips/{Ip}", 200] },
  () => GetDedicatedIpRequest$,
  () => GetDedicatedIpResponse$
];
var GetDedicatedIpPool$ = [
  9,
  n05,
  _GDIP,
  { [_h4]: ["GET", "/v2/email/dedicated-ip-pools/{PoolName}", 200] },
  () => GetDedicatedIpPoolRequest$,
  () => GetDedicatedIpPoolResponse$
];
var GetDedicatedIps$ = [
  9,
  n05,
  _GDIe,
  { [_h4]: ["GET", "/v2/email/dedicated-ips", 200] },
  () => GetDedicatedIpsRequest$,
  () => GetDedicatedIpsResponse$
];
var GetDeliverabilityDashboardOptions$ = [
  9,
  n05,
  _GDDO,
  { [_h4]: ["GET", "/v2/email/deliverability-dashboard", 200] },
  () => GetDeliverabilityDashboardOptionsRequest$,
  () => GetDeliverabilityDashboardOptionsResponse$
];
var GetDeliverabilityTestReport$ = [
  9,
  n05,
  _GDTR,
  { [_h4]: ["GET", "/v2/email/deliverability-dashboard/test-reports/{ReportId}", 200] },
  () => GetDeliverabilityTestReportRequest$,
  () => GetDeliverabilityTestReportResponse$
];
var GetDomainDeliverabilityCampaign$ = [
  9,
  n05,
  _GDDC,
  { [_h4]: ["GET", "/v2/email/deliverability-dashboard/campaigns/{CampaignId}", 200] },
  () => GetDomainDeliverabilityCampaignRequest$,
  () => GetDomainDeliverabilityCampaignResponse$
];
var GetDomainStatisticsReport$ = [
  9,
  n05,
  _GDSR,
  { [_h4]: ["GET", "/v2/email/deliverability-dashboard/statistics-report/{Domain}", 200] },
  () => GetDomainStatisticsReportRequest$,
  () => GetDomainStatisticsReportResponse$
];
var GetEmailAddressInsights$ = [
  9,
  n05,
  _GEAI,
  { [_h4]: ["POST", "/v2/email/email-address-insights", 200] },
  () => GetEmailAddressInsightsRequest$,
  () => GetEmailAddressInsightsResponse$
];
var GetEmailIdentity$ = [
  9,
  n05,
  _GEI,
  { [_h4]: ["GET", "/v2/email/identities/{EmailIdentity}", 200] },
  () => GetEmailIdentityRequest$,
  () => GetEmailIdentityResponse$
];
var GetEmailIdentityPolicies$ = [
  9,
  n05,
  _GEIP,
  { [_h4]: ["GET", "/v2/email/identities/{EmailIdentity}/policies", 200] },
  () => GetEmailIdentityPoliciesRequest$,
  () => GetEmailIdentityPoliciesResponse$
];
var GetEmailTemplate$ = [
  9,
  n05,
  _GET,
  { [_h4]: ["GET", "/v2/email/templates/{TemplateName}", 200] },
  () => GetEmailTemplateRequest$,
  () => GetEmailTemplateResponse$
];
var GetExportJob$ = [
  9,
  n05,
  _GEJ,
  { [_h4]: ["GET", "/v2/email/export-jobs/{JobId}", 200] },
  () => GetExportJobRequest$,
  () => GetExportJobResponse$
];
var GetImportJob$ = [
  9,
  n05,
  _GIJ,
  { [_h4]: ["GET", "/v2/email/import-jobs/{JobId}", 200] },
  () => GetImportJobRequest$,
  () => GetImportJobResponse$
];
var GetMessageInsights$ = [
  9,
  n05,
  _GMI,
  { [_h4]: ["GET", "/v2/email/insights/{MessageId}", 200] },
  () => GetMessageInsightsRequest$,
  () => GetMessageInsightsResponse$
];
var GetMultiRegionEndpoint$ = [
  9,
  n05,
  _GMRE,
  { [_h4]: ["GET", "/v2/email/multi-region-endpoints/{EndpointName}", 200] },
  () => GetMultiRegionEndpointRequest$,
  () => GetMultiRegionEndpointResponse$
];
var GetReputationEntity$ = [
  9,
  n05,
  _GRE,
  { [_h4]: ["GET", "/v2/email/reputation/entities/{ReputationEntityType}/{ReputationEntityReference}", 200] },
  () => GetReputationEntityRequest$,
  () => GetReputationEntityResponse$
];
var GetSuppressedDestination$ = [
  9,
  n05,
  _GSD,
  { [_h4]: ["GET", "/v2/email/suppression/addresses/{EmailAddress}", 200] },
  () => GetSuppressedDestinationRequest$,
  () => GetSuppressedDestinationResponse$
];
var GetTenant$ = [
  9,
  n05,
  _GT,
  { [_h4]: ["POST", "/v2/email/tenants/get", 200] },
  () => GetTenantRequest$,
  () => GetTenantResponse$
];
var ListConfigurationSets$ = [
  9,
  n05,
  _LCS,
  { [_h4]: ["GET", "/v2/email/configuration-sets", 200] },
  () => ListConfigurationSetsRequest$,
  () => ListConfigurationSetsResponse$
];
var ListContactLists$ = [
  9,
  n05,
  _LCL,
  { [_h4]: ["GET", "/v2/email/contact-lists", 200] },
  () => ListContactListsRequest$,
  () => ListContactListsResponse$
];
var ListContacts$ = [
  9,
  n05,
  _LC,
  { [_h4]: ["POST", "/v2/email/contact-lists/{ContactListName}/contacts/list", 200] },
  () => ListContactsRequest$,
  () => ListContactsResponse$
];
var ListCustomVerificationEmailTemplates$ = [
  9,
  n05,
  _LCVET,
  { [_h4]: ["GET", "/v2/email/custom-verification-email-templates", 200] },
  () => ListCustomVerificationEmailTemplatesRequest$,
  () => ListCustomVerificationEmailTemplatesResponse$
];
var ListDedicatedIpPools$ = [
  9,
  n05,
  _LDIP,
  { [_h4]: ["GET", "/v2/email/dedicated-ip-pools", 200] },
  () => ListDedicatedIpPoolsRequest$,
  () => ListDedicatedIpPoolsResponse$
];
var ListDeliverabilityTestReports$ = [
  9,
  n05,
  _LDTR,
  { [_h4]: ["GET", "/v2/email/deliverability-dashboard/test-reports", 200] },
  () => ListDeliverabilityTestReportsRequest$,
  () => ListDeliverabilityTestReportsResponse$
];
var ListDomainDeliverabilityCampaigns$ = [
  9,
  n05,
  _LDDC,
  { [_h4]: ["GET", "/v2/email/deliverability-dashboard/domains/{SubscribedDomain}/campaigns", 200] },
  () => ListDomainDeliverabilityCampaignsRequest$,
  () => ListDomainDeliverabilityCampaignsResponse$
];
var ListEmailIdentities$ = [
  9,
  n05,
  _LEI,
  { [_h4]: ["GET", "/v2/email/identities", 200] },
  () => ListEmailIdentitiesRequest$,
  () => ListEmailIdentitiesResponse$
];
var ListEmailTemplates$ = [
  9,
  n05,
  _LET,
  { [_h4]: ["GET", "/v2/email/templates", 200] },
  () => ListEmailTemplatesRequest$,
  () => ListEmailTemplatesResponse$
];
var ListExportJobs$ = [
  9,
  n05,
  _LEJ,
  { [_h4]: ["POST", "/v2/email/list-export-jobs", 200] },
  () => ListExportJobsRequest$,
  () => ListExportJobsResponse$
];
var ListImportJobs$ = [
  9,
  n05,
  _LIJ,
  { [_h4]: ["POST", "/v2/email/import-jobs/list", 200] },
  () => ListImportJobsRequest$,
  () => ListImportJobsResponse$
];
var ListMultiRegionEndpoints$ = [
  9,
  n05,
  _LMRE,
  { [_h4]: ["GET", "/v2/email/multi-region-endpoints", 200] },
  () => ListMultiRegionEndpointsRequest$,
  () => ListMultiRegionEndpointsResponse$
];
var ListRecommendations$ = [
  9,
  n05,
  _LR,
  { [_h4]: ["POST", "/v2/email/vdm/recommendations", 200] },
  () => ListRecommendationsRequest$,
  () => ListRecommendationsResponse$
];
var ListReputationEntities$ = [
  9,
  n05,
  _LRE,
  { [_h4]: ["POST", "/v2/email/reputation/entities", 200] },
  () => ListReputationEntitiesRequest$,
  () => ListReputationEntitiesResponse$
];
var ListResourceTenants$ = [
  9,
  n05,
  _LRT,
  { [_h4]: ["POST", "/v2/email/resources/tenants/list", 200] },
  () => ListResourceTenantsRequest$,
  () => ListResourceTenantsResponse$
];
var ListSuppressedDestinations$ = [
  9,
  n05,
  _LSD,
  { [_h4]: ["GET", "/v2/email/suppression/addresses", 200] },
  () => ListSuppressedDestinationsRequest$,
  () => ListSuppressedDestinationsResponse$
];
var ListTagsForResource$ = [
  9,
  n05,
  _LTFR,
  { [_h4]: ["GET", "/v2/email/tags", 200] },
  () => ListTagsForResourceRequest$,
  () => ListTagsForResourceResponse$
];
var ListTenantResources$ = [
  9,
  n05,
  _LTRis,
  { [_h4]: ["POST", "/v2/email/tenants/resources/list", 200] },
  () => ListTenantResourcesRequest$,
  () => ListTenantResourcesResponse$
];
var ListTenants$ = [
  9,
  n05,
  _LTi,
  { [_h4]: ["POST", "/v2/email/tenants/list", 200] },
  () => ListTenantsRequest$,
  () => ListTenantsResponse$
];
var PutAccountDedicatedIpWarmupAttributes$ = [
  9,
  n05,
  _PADIWA,
  { [_h4]: ["PUT", "/v2/email/account/dedicated-ips/warmup", 200] },
  () => PutAccountDedicatedIpWarmupAttributesRequest$,
  () => PutAccountDedicatedIpWarmupAttributesResponse$
];
var PutAccountDetails$ = [
  9,
  n05,
  _PAD,
  { [_h4]: ["POST", "/v2/email/account/details", 200] },
  () => PutAccountDetailsRequest$,
  () => PutAccountDetailsResponse$
];
var PutAccountSendingAttributes$ = [
  9,
  n05,
  _PASA,
  { [_h4]: ["PUT", "/v2/email/account/sending", 200] },
  () => PutAccountSendingAttributesRequest$,
  () => PutAccountSendingAttributesResponse$
];
var PutAccountSuppressionAttributes$ = [
  9,
  n05,
  _PASAu,
  { [_h4]: ["PUT", "/v2/email/account/suppression", 200] },
  () => PutAccountSuppressionAttributesRequest$,
  () => PutAccountSuppressionAttributesResponse$
];
var PutAccountVdmAttributes$ = [
  9,
  n05,
  _PAVA,
  { [_h4]: ["PUT", "/v2/email/account/vdm", 200] },
  () => PutAccountVdmAttributesRequest$,
  () => PutAccountVdmAttributesResponse$
];
var PutConfigurationSetArchivingOptions$ = [
  9,
  n05,
  _PCSAO,
  { [_h4]: ["PUT", "/v2/email/configuration-sets/{ConfigurationSetName}/archiving-options", 200] },
  () => PutConfigurationSetArchivingOptionsRequest$,
  () => PutConfigurationSetArchivingOptionsResponse$
];
var PutConfigurationSetDeliveryOptions$ = [
  9,
  n05,
  _PCSDO,
  { [_h4]: ["PUT", "/v2/email/configuration-sets/{ConfigurationSetName}/delivery-options", 200] },
  () => PutConfigurationSetDeliveryOptionsRequest$,
  () => PutConfigurationSetDeliveryOptionsResponse$
];
var PutConfigurationSetReputationOptions$ = [
  9,
  n05,
  _PCSRO,
  { [_h4]: ["PUT", "/v2/email/configuration-sets/{ConfigurationSetName}/reputation-options", 200] },
  () => PutConfigurationSetReputationOptionsRequest$,
  () => PutConfigurationSetReputationOptionsResponse$
];
var PutConfigurationSetSendingOptions$ = [
  9,
  n05,
  _PCSSO,
  { [_h4]: ["PUT", "/v2/email/configuration-sets/{ConfigurationSetName}/sending", 200] },
  () => PutConfigurationSetSendingOptionsRequest$,
  () => PutConfigurationSetSendingOptionsResponse$
];
var PutConfigurationSetSuppressionOptions$ = [
  9,
  n05,
  _PCSSOu,
  { [_h4]: ["PUT", "/v2/email/configuration-sets/{ConfigurationSetName}/suppression-options", 200] },
  () => PutConfigurationSetSuppressionOptionsRequest$,
  () => PutConfigurationSetSuppressionOptionsResponse$
];
var PutConfigurationSetTrackingOptions$ = [
  9,
  n05,
  _PCSTO,
  { [_h4]: ["PUT", "/v2/email/configuration-sets/{ConfigurationSetName}/tracking-options", 200] },
  () => PutConfigurationSetTrackingOptionsRequest$,
  () => PutConfigurationSetTrackingOptionsResponse$
];
var PutConfigurationSetVdmOptions$ = [
  9,
  n05,
  _PCSVO,
  { [_h4]: ["PUT", "/v2/email/configuration-sets/{ConfigurationSetName}/vdm-options", 200] },
  () => PutConfigurationSetVdmOptionsRequest$,
  () => PutConfigurationSetVdmOptionsResponse$
];
var PutDedicatedIpInPool$ = [
  9,
  n05,
  _PDIIP,
  { [_h4]: ["PUT", "/v2/email/dedicated-ips/{Ip}/pool", 200] },
  () => PutDedicatedIpInPoolRequest$,
  () => PutDedicatedIpInPoolResponse$
];
var PutDedicatedIpPoolScalingAttributes$ = [
  9,
  n05,
  _PDIPSA,
  { [_h4]: ["PUT", "/v2/email/dedicated-ip-pools/{PoolName}/scaling", 200] },
  () => PutDedicatedIpPoolScalingAttributesRequest$,
  () => PutDedicatedIpPoolScalingAttributesResponse$
];
var PutDedicatedIpWarmupAttributes$ = [
  9,
  n05,
  _PDIWA,
  { [_h4]: ["PUT", "/v2/email/dedicated-ips/{Ip}/warmup", 200] },
  () => PutDedicatedIpWarmupAttributesRequest$,
  () => PutDedicatedIpWarmupAttributesResponse$
];
var PutDeliverabilityDashboardOption$ = [
  9,
  n05,
  _PDDO,
  { [_h4]: ["PUT", "/v2/email/deliverability-dashboard", 200] },
  () => PutDeliverabilityDashboardOptionRequest$,
  () => PutDeliverabilityDashboardOptionResponse$
];
var PutEmailIdentityConfigurationSetAttributes$ = [
  9,
  n05,
  _PEICSA,
  { [_h4]: ["PUT", "/v2/email/identities/{EmailIdentity}/configuration-set", 200] },
  () => PutEmailIdentityConfigurationSetAttributesRequest$,
  () => PutEmailIdentityConfigurationSetAttributesResponse$
];
var PutEmailIdentityDkimAttributes$ = [
  9,
  n05,
  _PEIDA,
  { [_h4]: ["PUT", "/v2/email/identities/{EmailIdentity}/dkim", 200] },
  () => PutEmailIdentityDkimAttributesRequest$,
  () => PutEmailIdentityDkimAttributesResponse$
];
var PutEmailIdentityDkimSigningAttributes$ = [
  9,
  n05,
  _PEIDSA,
  { [_h4]: ["PUT", "/v2/email/identities/{EmailIdentity}/dkim/signing", 200] },
  () => PutEmailIdentityDkimSigningAttributesRequest$,
  () => PutEmailIdentityDkimSigningAttributesResponse$
];
var PutEmailIdentityFeedbackAttributes$ = [
  9,
  n05,
  _PEIFA,
  { [_h4]: ["PUT", "/v2/email/identities/{EmailIdentity}/feedback", 200] },
  () => PutEmailIdentityFeedbackAttributesRequest$,
  () => PutEmailIdentityFeedbackAttributesResponse$
];
var PutEmailIdentityMailFromAttributes$ = [
  9,
  n05,
  _PEIMFA,
  { [_h4]: ["PUT", "/v2/email/identities/{EmailIdentity}/mail-from", 200] },
  () => PutEmailIdentityMailFromAttributesRequest$,
  () => PutEmailIdentityMailFromAttributesResponse$
];
var PutSuppressedDestination$ = [
  9,
  n05,
  _PSD,
  { [_h4]: ["PUT", "/v2/email/suppression/addresses", 200] },
  () => PutSuppressedDestinationRequest$,
  () => PutSuppressedDestinationResponse$
];
var SendBulkEmail$ = [
  9,
  n05,
  _SBE,
  { [_h4]: ["POST", "/v2/email/outbound-bulk-emails", 200] },
  () => SendBulkEmailRequest$,
  () => SendBulkEmailResponse$
];
var SendCustomVerificationEmail$ = [
  9,
  n05,
  _SCVE,
  { [_h4]: ["POST", "/v2/email/outbound-custom-verification-emails", 200] },
  () => SendCustomVerificationEmailRequest$,
  () => SendCustomVerificationEmailResponse$
];
var SendEmail$ = [
  9,
  n05,
  _SEen,
  { [_h4]: ["POST", "/v2/email/outbound-emails", 200] },
  () => SendEmailRequest$,
  () => SendEmailResponse$
];
var TagResource$ = [
  9,
  n05,
  _TRa,
  { [_h4]: ["POST", "/v2/email/tags", 200] },
  () => TagResourceRequest$,
  () => TagResourceResponse$
];
var TestRenderEmailTemplate$ = [
  9,
  n05,
  _TRET,
  { [_h4]: ["POST", "/v2/email/templates/{TemplateName}/render", 200] },
  () => TestRenderEmailTemplateRequest$,
  () => TestRenderEmailTemplateResponse$
];
var UntagResource$ = [
  9,
  n05,
  _UR,
  { [_h4]: ["DELETE", "/v2/email/tags", 200] },
  () => UntagResourceRequest$,
  () => UntagResourceResponse$
];
var UpdateConfigurationSetEventDestination$ = [
  9,
  n05,
  _UCSED,
  { [_h4]: ["PUT", "/v2/email/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}", 200] },
  () => UpdateConfigurationSetEventDestinationRequest$,
  () => UpdateConfigurationSetEventDestinationResponse$
];
var UpdateContact$ = [
  9,
  n05,
  _UC,
  { [_h4]: ["PUT", "/v2/email/contact-lists/{ContactListName}/contacts/{EmailAddress}", 200] },
  () => UpdateContactRequest$,
  () => UpdateContactResponse$
];
var UpdateContactList$ = [
  9,
  n05,
  _UCL,
  { [_h4]: ["PUT", "/v2/email/contact-lists/{ContactListName}", 200] },
  () => UpdateContactListRequest$,
  () => UpdateContactListResponse$
];
var UpdateCustomVerificationEmailTemplate$ = [
  9,
  n05,
  _UCVET,
  { [_h4]: ["PUT", "/v2/email/custom-verification-email-templates/{TemplateName}", 200] },
  () => UpdateCustomVerificationEmailTemplateRequest$,
  () => UpdateCustomVerificationEmailTemplateResponse$
];
var UpdateEmailIdentityPolicy$ = [
  9,
  n05,
  _UEIP,
  { [_h4]: ["PUT", "/v2/email/identities/{EmailIdentity}/policies/{PolicyName}", 200] },
  () => UpdateEmailIdentityPolicyRequest$,
  () => UpdateEmailIdentityPolicyResponse$
];
var UpdateEmailTemplate$ = [
  9,
  n05,
  _UET,
  { [_h4]: ["PUT", "/v2/email/templates/{TemplateName}", 200] },
  () => UpdateEmailTemplateRequest$,
  () => UpdateEmailTemplateResponse$
];
var UpdateReputationEntityCustomerManagedStatus$ = [
  9,
  n05,
  _URECMS,
  { [_h4]: ["PUT", "/v2/email/reputation/entities/{ReputationEntityType}/{ReputationEntityReference}/customer-managed-status", 200] },
  () => UpdateReputationEntityCustomerManagedStatusRequest$,
  () => UpdateReputationEntityCustomerManagedStatusResponse$
];
var UpdateReputationEntityPolicy$ = [
  9,
  n05,
  _UREP,
  { [_h4]: ["PUT", "/v2/email/reputation/entities/{ReputationEntityType}/{ReputationEntityReference}/policy", 200] },
  () => UpdateReputationEntityPolicyRequest$,
  () => UpdateReputationEntityPolicyResponse$
];

// node_modules/@aws-sdk/client-sesv2/dist-es/runtimeConfig.shared.js
var getRuntimeConfig9 = /* @__PURE__ */ __name((config) => {
  return {
    apiVersion: "2019-09-27",
    base64Decoder: config?.base64Decoder ?? fromBase64,
    base64Encoder: config?.base64Encoder ?? toBase64,
    disableHostPrefix: config?.disableHostPrefix ?? false,
    endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
    extensions: config?.extensions ?? [],
    httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? defaultSESv2HttpAuthSchemeProvider,
    httpAuthSchemes: config?.httpAuthSchemes ?? [
      {
        schemeId: "aws.auth#sigv4",
        identityProvider: /* @__PURE__ */ __name((ipc) => ipc.getIdentityProvider("aws.auth#sigv4"), "identityProvider"),
        signer: new AwsSdkSigV4Signer()
      },
      {
        schemeId: "aws.auth#sigv4a",
        identityProvider: /* @__PURE__ */ __name((ipc) => ipc.getIdentityProvider("aws.auth#sigv4a"), "identityProvider"),
        signer: new AwsSdkSigV4ASigner()
      }
    ],
    logger: config?.logger ?? new NoOpLogger(),
    protocol: config?.protocol ?? AwsRestJsonProtocol,
    protocolSettings: config?.protocolSettings ?? {
      defaultNamespace: "com.amazonaws.sesv2",
      errorTypeRegistries: errorTypeRegistries5,
      version: "2019-09-27",
      serviceTarget: "SimpleEmailService_v2"
    },
    serviceId: config?.serviceId ?? "SESv2",
    signerConstructor: config?.signerConstructor ?? SignatureV4MultiRegion,
    urlParser: config?.urlParser ?? parseUrl,
    utf8Decoder: config?.utf8Decoder ?? fromUtf8,
    utf8Encoder: config?.utf8Encoder ?? toUtf8
  };
}, "getRuntimeConfig");

// node_modules/@aws-sdk/client-sesv2/dist-es/runtimeConfig.js
var getRuntimeConfig10 = /* @__PURE__ */ __name((config) => {
  emitWarningIfUnsupportedVersion2(process.version);
  const defaultsMode = resolveDefaultsModeConfig(config);
  const defaultConfigProvider = /* @__PURE__ */ __name(() => defaultsMode().then(loadConfigsForDefaultMode), "defaultConfigProvider");
  const clientSharedValues = getRuntimeConfig9(config);
  emitWarningIfUnsupportedVersion(process.version);
  const loaderConfig = {
    profile: config?.profile,
    logger: clientSharedValues.logger
  };
  return {
    ...clientSharedValues,
    ...config,
    runtime: "node",
    defaultsMode,
    authSchemePreference: config?.authSchemePreference ?? loadConfig(NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, loaderConfig),
    bodyLengthChecker: config?.bodyLengthChecker ?? calculateBodyLength,
    credentialDefaultProvider: config?.credentialDefaultProvider ?? defaultProvider,
    defaultUserAgentProvider: config?.defaultUserAgentProvider ?? createDefaultUserAgentProvider({ serviceId: clientSharedValues.serviceId, clientVersion: package_default.version }),
    maxAttempts: config?.maxAttempts ?? loadConfig(NODE_MAX_ATTEMPT_CONFIG_OPTIONS, config),
    region: config?.region ?? loadConfig(NODE_REGION_CONFIG_OPTIONS, { ...NODE_REGION_CONFIG_FILE_OPTIONS, ...loaderConfig }),
    requestHandler: NodeHttpHandler.create(config?.requestHandler ?? defaultConfigProvider),
    retryMode: config?.retryMode ?? loadConfig({
      ...NODE_RETRY_MODE_CONFIG_OPTIONS,
      default: /* @__PURE__ */ __name(async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE, "default")
    }, config),
    sha256: config?.sha256 ?? Hash.bind(null, "sha256"),
    sigv4aSigningRegionSet: config?.sigv4aSigningRegionSet ?? loadConfig(NODE_SIGV4A_CONFIG_OPTIONS, loaderConfig),
    streamCollector: config?.streamCollector ?? streamCollector,
    useDualstackEndpoint: config?.useDualstackEndpoint ?? loadConfig(NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, loaderConfig),
    useFipsEndpoint: config?.useFipsEndpoint ?? loadConfig(NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, loaderConfig),
    userAgentAppId: config?.userAgentAppId ?? loadConfig(NODE_APP_ID_CONFIG_OPTIONS, loaderConfig)
  };
}, "getRuntimeConfig");

// node_modules/@aws-sdk/client-sesv2/dist-es/runtimeExtensions.js
init_dist_es48();
init_dist_es2();
init_dist_es35();

// node_modules/@aws-sdk/client-sesv2/dist-es/auth/httpAuthExtensionConfiguration.js
var getHttpAuthExtensionConfiguration5 = /* @__PURE__ */ __name((runtimeConfig) => {
  const _httpAuthSchemes = runtimeConfig.httpAuthSchemes;
  let _httpAuthSchemeProvider = runtimeConfig.httpAuthSchemeProvider;
  let _credentials = runtimeConfig.credentials;
  return {
    setHttpAuthScheme(httpAuthScheme) {
      const index = _httpAuthSchemes.findIndex((scheme) => scheme.schemeId === httpAuthScheme.schemeId);
      if (index === -1) {
        _httpAuthSchemes.push(httpAuthScheme);
      } else {
        _httpAuthSchemes.splice(index, 1, httpAuthScheme);
      }
    },
    httpAuthSchemes() {
      return _httpAuthSchemes;
    },
    setHttpAuthSchemeProvider(httpAuthSchemeProvider) {
      _httpAuthSchemeProvider = httpAuthSchemeProvider;
    },
    httpAuthSchemeProvider() {
      return _httpAuthSchemeProvider;
    },
    setCredentials(credentials) {
      _credentials = credentials;
    },
    credentials() {
      return _credentials;
    }
  };
}, "getHttpAuthExtensionConfiguration");
var resolveHttpAuthRuntimeConfig5 = /* @__PURE__ */ __name((config) => {
  return {
    httpAuthSchemes: config.httpAuthSchemes(),
    httpAuthSchemeProvider: config.httpAuthSchemeProvider(),
    credentials: config.credentials()
  };
}, "resolveHttpAuthRuntimeConfig");

// node_modules/@aws-sdk/client-sesv2/dist-es/runtimeExtensions.js
var resolveRuntimeExtensions5 = /* @__PURE__ */ __name((runtimeConfig, extensions) => {
  const extensionConfiguration = Object.assign(getAwsRegionExtensionConfiguration(runtimeConfig), getDefaultExtensionConfiguration(runtimeConfig), getHttpHandlerExtensionConfiguration(runtimeConfig), getHttpAuthExtensionConfiguration5(runtimeConfig));
  extensions.forEach((extension) => extension.configure(extensionConfiguration));
  return Object.assign(runtimeConfig, resolveAwsRegionExtensionConfiguration(extensionConfiguration), resolveDefaultRuntimeConfig(extensionConfiguration), resolveHttpHandlerRuntimeConfig(extensionConfiguration), resolveHttpAuthRuntimeConfig5(extensionConfiguration));
}, "resolveRuntimeExtensions");

// node_modules/@aws-sdk/client-sesv2/dist-es/SESv2Client.js
var SESv2Client = class extends Client {
  static {
    __name(this, "SESv2Client");
  }
  config;
  constructor(...[configuration]) {
    const _config_0 = getRuntimeConfig10(configuration || {});
    super(_config_0);
    this.initConfig = _config_0;
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions5(_config_7, configuration?.extensions || []);
    this.config = _config_8;
    this.middlewareStack.use(getSchemaSerdePlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
      httpAuthSchemeParametersProvider: defaultSESv2HttpAuthSchemeParametersProvider,
      identityProviderConfigProvider: /* @__PURE__ */ __name(async (config) => new DefaultIdentityProviderConfig({
        "aws.auth#sigv4": config.credentials,
        "aws.auth#sigv4a": config.credentials
      }), "identityProviderConfigProvider")
    }));
    this.middlewareStack.use(getHttpSigningPlugin(this.config));
  }
  destroy() {
    super.destroy();
  }
};

// node_modules/@aws-sdk/client-sesv2/dist-es/commands/SendEmailCommand.js
init_dist_es33();
init_dist_es35();
var SendEmailCommand = class extends Command.classBuilder().ep({
  ...commonParams,
  EndpointId: { type: "contextParams", name: "EndpointId" }
}).m(function(Command2, cs, config, o2) {
  return [getEndpointPlugin(config, Command2.getEndpointParameterInstructions())];
}).s("SimpleEmailService_v2", "SendEmail", {}).n("SESv2Client", "SendEmailCommand").sc(SendEmail$).build() {
  static {
    __name(this, "SendEmailCommand");
  }
};

// infra/lambdas/ses-alert.ts
var client = new SESv2Client({});
var handler = /* @__PURE__ */ __name(async (event) => {
  try {
    const payload = event.body ? JSON.parse(event.body) : {};
    if (!payload.to || !payload.from || !payload.subject || !payload.body) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "to, from, subject, and body are required" })
      };
    }
    await client.send(
      new SendEmailCommand({
        FromEmailAddress: payload.from,
        Destination: { ToAddresses: [payload.to] },
        Content: {
          Simple: {
            Subject: { Data: payload.subject, Charset: "UTF-8" },
            Body: { Text: { Data: payload.body, Charset: "UTF-8" } }
          }
        }
      })
    );
    return {
      statusCode: 200,
      body: JSON.stringify({ sent: true })
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : "unexpected error";
    return {
      statusCode: 500,
      body: JSON.stringify({ sent: false, error: message })
    };
  }
}, "handler");
export {
  handler
};
//# sourceMappingURL=bundle.mjs.map
