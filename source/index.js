export let ResponseStatuses = /** @type {const} */ ({
  'Continue': 100,
  'Switching Protocols': 101,
  'Processing': 102,
  'Early Hints': 103,
  'OK': 200,
  'Created': 201,
  'Accepted': 202,
  'Non-Authoritative Information': 203,
  'No Content': 204,
  'Reset Content': 205,
  'Partial Content': 206,
  'Multiple Choices': 300,
  'Moved Permanently': 301,
  'Found': 302,
  'See Other': 303,
  'Not Modified': 304,
  'Use Proxy': 305,
  'Temporary Redirect': 307,
  'Permanent Redirect': 308,
  'Bad Request': 400,
  'Unauthorized': 401,
  'Payment Required': 402,
  'Forbidden': 403,
  'Not Found': 404,
  'Method Not Allowed': 405,
  'Not Acceptable': 406,
  'Proxy Authentication Required': 407,
  'Request Timeout': 408,
  'Conflict': 409,
  'Gone': 410,
  'Length Required': 411,
  'Precondition Failed': 412,
  'Content Too Large': 413,
  'URI Too Long': 414,
  'Unsupported Media Type': 415,
  'Range Not Satisfiable': 416,
  'Expectation Failed': 417,
  'Misdirected Request': 421,
  'Unprocessable Content': 422,
  'Upgrade Required': 426,
  'Internal Server Error': 500,
  'Not Implemented': 501,
  'Bad Gateway': 502,
  'Service Unavailable': 503,
  'Gateway Timeout': 504,
  'HTTP Version Not Supported': 505,
})

/**
 * @typedef {keyof typeof ResponseStatuses | typeof ResponseStatuses[keyof typeof ResponseStatuses]} ResponseStatusInit
 */

/**
 * @param {ResponseStatusInit} value
 */
export function ResponseStatus(value) {
  if (!ResponseStatus.has(value))
    throw new ReferenceError(
      `Parameter 'value' must be listed in 'ResponseStatuses'`,
    )

  this.statusText = ResponseStatus
    .get(value)
    .at(0)

  this.status = ResponseStatus
    .get(value)
    .at(1)
}

/**
 * @param {ResponseStatusInit} value
 */
ResponseStatus.of = value => new ResponseStatus(value)

/**
 * @param {ResponseStatusInit} value
 */
ResponseStatus.has = value => Boolean(ResponseStatus.get(value))

/**
 * @param {ResponseStatusInit} value
 */
ResponseStatus.get = value => {
  let found = Object
    .entries(ResponseStatuses)
    .find(([statusText, status]) =>
      statusText === value
      || status === value
    )

  return found
}

ResponseStatus.prototype[Symbol.toStringTag] = 'ResponseStatus'
