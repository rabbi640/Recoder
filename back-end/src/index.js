const mongoose = require('mongoose')

const app = require('./app')
const config = require('./config')

const bootstrap = async () => {
  await mongoose.connect(config.db_uri)

  const port = config.port
  app.listen(port, () => {
    console.log('Server running on port:', port)
  })
}

bootstrap().catch(() => {
  console.log('Server stopped execution')
})
