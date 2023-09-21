const httpStatus = require('http-status')

const config = require('../config')
const ApiError = require('../errors/classes/ApiError')

// eslint-disable-next-line no-unused-vars
const globalErrorHandler = (error, req, res, next) => {
  // Properties of error response
  let statusCode = httpStatus.BAD_REQUEST
  let message = 'Internal server error'
  let errorMessages = []
  let stack

  // Log error on development environment
  if (config.env === 'development') {
    console.error(error)

    // Send stack with error response
    if (error.stack) stack = error.stack
  }

  const setProperties = (err) => {
    if (err.errorMessages && err.errorMessages.length)
      errorMessages = err.errorMessages
    if (err.statusCode) statusCode = err.statusCode
    if (err.message) message = err.message
  }

  if (error instanceof ApiError) {
    setProperties(error)
  }

  res.status(statusCode).json({
    ok: false,
    message,
    errorMessages,
    stack,
  })
}

module.exports = globalErrorHandler
