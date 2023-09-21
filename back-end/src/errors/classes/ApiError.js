class ApiError extends Error {
  constructor(statusCode, message, errorMessages = []) {
    super(message)
    this.statusCode = statusCode
    this.errorMessages = errorMessages

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ApiError)
    }

    this.name = this.constructor.name
  }
}

module.exports = ApiError
