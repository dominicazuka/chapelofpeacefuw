const {
  getResponseService,
  insertResponseService
} = require('../services/response.service')

const getResponseController = async (req, res) => {
  const result = await getResponseService()
  res.status(result.statusCode).json(result)
}

const insertResponseController = async (req, res) => {
  console.log('req.body>>>>', req.body)
  const result = await insertResponseService(req.body)
  res.status(result.statusCode).json(result)
}

module.exports = {
  getResponseController,
  insertResponseController
}
