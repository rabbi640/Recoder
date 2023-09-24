const request = require('../utils/request')

const validate = (schema) =>
  request(async (req, res, next) => {
    await schema.parseAsync({
      body: req.body,
      query: req.query,
      params: req.params,
    })

    next()
  })

module.exports = validate
