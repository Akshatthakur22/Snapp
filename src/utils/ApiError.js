class ApiError extends Error {
  constructor(
    error = [],
    message = "An error occurred",
    statusCode = 500,
    stack = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.stack = stack;
    this.data = null;
    this.message = message;
    this.success = false;
    this.error = error;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
