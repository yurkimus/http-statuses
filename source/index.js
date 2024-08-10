export var HttpStatuses = /** @type {const} */ ({
  /**
   * 1xx (Informational)
   */

  Continue: {
    status: 100,
    statusText: "Continue",
  },

  SwitchingProtocols: {
    status: 101,
    statusText: "Switching Protocols",
  },

  Processing: {
    status: 102,
    statusText: "Processing",
  },

  EarlyHints: {
    status: 103,
    statusText: "Early Hints",
  },

  /**
   * 2xx (Successful)
   */

  OK: {
    status: 200,
    statusText: "OK",
  },

  Created: {
    status: 201,
    statusText: "Created",
  },

  Accepted: {
    status: 202,
    statusText: "Accepted",
  },

  NonAuthoritativeInformation: {
    status: 203,
    statusText: "Non-Authoritative Information",
  },

  NoContent: {
    status: 204,
    statusText: "No Content",
  },

  ResetContent: {
    status: 205,
    statusText: "Reset Content",
  },

  PartialContent: {
    status: 206,
    statusText: "Partial Content",
  },

  /**
   * 3xx (Redirection)
   */

  MultipleChoices: {
    status: 300,
    statusText: "Multiple Choices",
  },

  MovedPermanently: {
    status: 301,
    statusText: "Moved Permanently",
  },
  Found: {
    status: 302,
    statusText: "Found",
  },

  SeeOther: {
    status: 303,
    statusText: "See Other",
  },

  NotModified: {
    status: 304,
    statusText: "Not Modified",
  },

  UseProxy: {
    status: 305,
    statusText: "Use Proxy",
  },

  TemporaryRedirect: {
    status: 307,
    statusText: "Temporary Redirect",
  },

  PermanentRedirect: {
    status: 308,
    statusText: "Permanent Redirect",
  },

  /**
   * 4xx (Client Error):
   */

  BadRequest: {
    status: 400,
    statusText: "Bad Request",
  },

  Unauthorized: {
    status: 401,
    statusText: "Unauthorized",
  },

  PaymentRequired: {
    status: 402,
    statusText: "Payment Required",
  },

  Forbidden: {
    status: 403,
    statusText: "Forbidden",
  },

  NotFound: {
    status: 404,
    statusText: "Not Found",
  },

  MethodNotAllowed: {
    status: 405,
    statusText: "Method Not Allowed",
  },

  NotAcceptable: {
    status: 406,
    statusText: "Not Acceptable",
  },

  ProxyAuthenticationRequired: {
    status: 407,
    statusText: "Proxy Authentication Required",
  },

  RequestTimeout: {
    status: 408,
    statusText: "Request Timeout",
  },

  Conflict: {
    status: 409,
    statusText: "Conflict",
  },

  Gone: {
    status: 410,
    statusText: "Gone",
  },

  LengthRequired: {
    status: 411,
    statusText: "Length Required",
  },

  PreconditionFailed: {
    status: 412,
    statusText: "Precondition Failed",
  },

  ContentTooLarge: {
    status: 413,
    statusText: "Content Too Large",
  },

  URITooLong: {
    status: 414,
    statusText: "URI Too Long",
  },

  UnsupportedMediaType: {
    status: 415,
    statusText: "Unsupported Media Type",
  },

  RangeNotSatisfiable: {
    status: 416,
    statusText: "Range Not Satisfiable",
  },

  ExpectationFailed: {
    status: 417,
    statusText: "Expectation Failed",
  },

  MisdirectedRequest: {
    status: 421,
    statusText: "Misdirected Request",
  },

  UnprocessableContent: {
    status: 422,
    statusText: "Unprocessable Content",
  },

  UpgradeRequired: {
    status: 426,
    statusText: "Upgrade Required",
  },

  /**
   * 5xx (Server Error)
   */

  InternalServerError: {
    status: 500,
    statusText: "Internal Server Error",
  },

  NotImplemented: {
    status: 501,
    statusText: "Not Implemented",
  },

  BadGateway: {
    status: 502,
    statusText: "Bad Gateway",
  },

  ServiceUnavailable: {
    status: 503,
    statusText: "Service Unavailable",
  },

  GatewayTimeout: {
    status: 504,
    statusText: "Gateway Timeout",
  },

  HTTPVersionNotSupported: {
    status: 505,
    statusText: "HTTP Version Not Supported",
  },
});
