const {
  getContactUsService,
  insertContactUsService
} = require('../services/contactUs.service')

const getContactUsController = async (req, res) => {
  const result = await getContactUsService()
  res.status(result.statusCode).json(result)
}

const insertContactUsController = async (req, res) => {
  console.log('req.body>>>>', req.body)
  const result = await insertContactUsService(req.body)
  res.status(result.statusCode).json(result)
}

module.exports = {
  getContactUsController,
  insertContactUsController
}
