const httpStatus = require('http-status')
const ApiError = require('../../errors/classes/ApiError')
const User = require('./user.model')

exports.insertUser = async (payload) => {
  const user = await User.create(payload)
  if (!user) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Unable to create user')
  }

  return user
}
