const {
  getMeditationService,
  insertMeditationService
} = require('../services/meditations.service')

const getMeditationController = async (req, res) => {
  console.log('req.body', req.body)
  const result = await getMeditationService()
  res.status(result.statusCode).json(result)
}

const insertMeditationController = async (req, res) => {
  console.log('req.body>>>>', req.body)
  const result = await insertMeditationService(req.body)
  res.status(result.statusCode).json(result)
}

module.exports = {
  getMeditationController,
  insertMeditationController
}
