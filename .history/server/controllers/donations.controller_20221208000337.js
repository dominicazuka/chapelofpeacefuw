const {
  getDonationsService,
  insertDonationsService
} = require('../services/donations.service')

const getDonationsController = async (req, res) => {
  const result = await getDonationsService()
  res.status(result.statusCode).json(result)
}

const insertDonationsController = async (req, res) => {
  console.log('req.body>>>>', req.body)
  const result = await insertDonationsService(req.body)
  res.status(result.statusCode).json(result)
}

module.exports = {
  getDonationsController,
  insertDonationsController
}
