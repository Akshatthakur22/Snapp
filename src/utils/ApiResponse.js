class ApiResponse {
  constructor(
    data = null,
    message = "Success",
    statusCode = 200,
    error = null,
    success = true
  ) {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = success;
    this.error = error;

    if (error) {
      this.success = false;
      this.message = error.message || "An error occurred";
      this.data = null;
    }
  }
}
