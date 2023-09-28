const { Router } = require('express')

const validate = require('../../middlewares/validate')
const userController = require('./user.controller')
const { CreateUserSchema } = require('./user.validation')

const router = Router()

router.post('/', validate(CreateUserSchema), userController.createUser)

module.exports = router
