const {
  getBibleStudiesService,
  insertBibleStudiesService
} = require('../services/bibleStudies.service')

const getBibleStudiesController = async (req, res) => {
  const result = await getBibleStudiesService()
  res.status(result.statusCode).json(result)
}

const insertBibleStudiesController = async (req, res) => {
  console.log('req.body>>>>', req.body)
  const result = await insertBibleStudiesService(req.body)
  res.status(result.statusCode).json(result)
}

module.exports = {
  getBibleStudiesController,
  insertBibleStudiesController
}
