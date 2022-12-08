const {
  getPartnerService,
  insertPartnerService
} = require('../services/partner.service')

const getPartnerController = async (req, res) => {
  const result = await getPartnerService()
  res.status(result.statusCode).json(result)
}

const insertPartnerController = async (req, res) => {
  console.log('req.body>>>>', req.body)
  const result = await insertPartnerService(req.body)
  res.status(result.statusCode).json(result)
}

module.exports = {
  getPartnerController,
  insertPartnerController
}
