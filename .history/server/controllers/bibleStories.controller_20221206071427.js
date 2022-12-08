const {
  getBibleStoriesService,
  insertBibleStoriesService
} = require('../services/bibleStories.service')

const getBibleStoriesController = async (req, res) => {
  const result = await getBibleStoriesService()
  res.status(result.statusCode).json(result)
}

const insertBibleStoriesController = async (req, res) => {
  console.log('req.body>>>>', req.body)
  const result = await insertBibleStoriesService(req.body)
  res.status(result.statusCode).json(result)
}

module.exports = {
  getBibleStoriesController,
  insertBibleStoriesController
}
