const {
  getBibleStudySchedulesService,
  insertBibleStudySchedulesService
} = require('../services/bibleStudySchedules.service')

const getBibleStudySchedulesController = async (req, res) => {
  const result = await getBibleStudySchedulesService()
  res.status(result.statusCode).json(result)
}

const insertBibleStudySchedulesController = async (req, res) => {
  console.log('req.body>>>>', req.body)
  const result = await insertBibleStudySchedulesService(req.body)
  res.status(result.statusCode).json(result)
}

module.exports = {
  getBibleStudySchedulesController,
  insertBibleStudySchedulesController
}
