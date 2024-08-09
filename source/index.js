export var HttpStatus = /** @type {const} */ ({
  Ok: {
    status: 200,
    statusText: "Ok",
  },

  Created: {
    status: 201,
    statusText: "Created",
  },

  NoContent: {
    status: 204,
    statusText: "No Content",
  },

  BadRequest: {
    status: 400,
    statusText: "Bad Request",
  },

  Unauthorized: {
    status: 401,
    statusText: "Unauthorized",
  },

  Forbidden: {
    status: 403,
    statusText: "Forbidden",
  },

  NotFound: {
    status: 404,
    statusText: "Not Found",
  },

  InternalServerError: {
    status: 500,
    statusText: "Internal Server Error",
  },

  NotImplemented: {
    status: 501,
    statusText: "Not Implemented",
  },
});
