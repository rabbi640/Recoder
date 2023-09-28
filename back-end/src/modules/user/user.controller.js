const httpStatus = require('http-status')

const request = require('../../utils/request')
const userService = require('./user.service')

exports.createUser = request(async (req, res) => {
  const data = await userService.insertUser(req.body)

  res.status(httpStatus.OK).json({
    ok: true,
    message: 'User inserted successfully',
    data,
  })
})
