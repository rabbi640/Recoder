const { Router } = require('express')
const userRouter = require('../modules/user/user.router')

const routes = [{ path: '/user', router: userRouter }]

const router = Router()

routes.forEach((route) => {
  router.use(route.path, route.router)
})

module.exports = router
