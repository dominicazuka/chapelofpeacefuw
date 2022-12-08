const {
  getMeditationsService,
  insertMeditationsService
} = require('../services/meditations.service')

const getMeditationsController = async (req, res) => {
  const result = await getMeditationsService()
  res.status(result.statusCode).json(result)
}

const insertMeditationsController = async (req, res) => {
  console.log('req.body>>>>', req.body)
  const result = await insertMeditationsService(req.body)
  res.status(result.statusCode).json(result)
}

module.exports = {
  getMeditationsController,
  insertMeditationsController
}
