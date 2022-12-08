const {
  getPrayerRequestService,
  insertPrayerRequestService
} = require('../services/prayerRequest.service')

const getPrayerRequestController = async (req, res) => {
  const result = await getPrayerRequestService()
  res.status(result.statusCode).json(result)
}

const insertPrayerRequestController = async (req, res) => {
  console.log('req.body>>>>', req.body)
  const result = await insertPrayerRequestService(req.body)
  res.status(result.statusCode).json(result)
}

module.exports = {
  getPrayerRequestController,
  insertPrayerRequestController
}
