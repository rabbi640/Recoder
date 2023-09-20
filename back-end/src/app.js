const cors = require('cors')
const express = require('express')
const httpStatus = require('http-status')

const globalErrorHandler = require('./middlewares/globalErrorHandler')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.status(httpStatus.OK).json({
    ok: true,
    message: 'Server running successfully.',
  })
})

app.use(globalErrorHandler)

module.exports = app
