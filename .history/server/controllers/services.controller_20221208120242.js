const {
  getServicesService,
  insertServicesService
} = require('../services/services.service')

const getServicesController = async (req, res) => {
  const result = await getServicesService()
  res.status(result.statusCode).json(result)
}

const insertServicesController = async (req, res) => {
  console.log('req.body>>>>', req.body)
  const result = await insertServicesService(req.body)
  res.status(result.statusCode).json(result)
}

module.exports = {
  getServicesController,
  insertServicesController
}
