const cors = require('cors')
const express = require('express')
const httpStatus = require('http-status')

const globalErrorHandler = require('./middlewares/globalErrorHandler')
const routesV1 = require('./routes/v1')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/v1', routesV1)

app.get('/', (req, res) => {
  res.status(httpStatus.OK).json({
    ok: true,
    message: 'Server running successfully.',
  })
})

app.all('*', (req, res) => {
  res.status(httpStatus.NOT_FOUND).json({
    ok: false,
    message: 'Not found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API route not found',
      },
    ],
  })
})

app.use(globalErrorHandler)

module.exports = app
