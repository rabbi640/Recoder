const mongoose = require('mongoose')

const app = require('./app')
const config = require('./config')

process.on('uncaughtException', () => process.exit(1))

let server

const bootstrap = async () => {
  await mongoose.connect(config.db_uri)

  const port = config.port
  server = app.listen(port, () => {
    console.log('Server running on port:', port)
  })
}

bootstrap()
  .catch(() => {
    console.log('Server stopped execution')
  })
  .finally(() => {
    process.on('unhandledRejection', () => {
      if (server) {
        server.close(() => process.exit(1))
      } else {
        process.exit(1)
      }
    })
  })
