const {
  getMemoryVerseService,
  insertMemoryVerseService
} = require('../services/memoryVerse.service')

const getMemoryVerseController = async (req, res) => {
  const result = await getMemoryVerseService()
  res.status(result.statusCode).json(result)
}

const insertMemoryVerseController = async (req, res) => {
  console.log('req.body>>>>', req.body)
  const result = await insertMemoryVerseService(req.body)
  res.status(result.statusCode).json(result)
}

module.exports = {
  getMemoryVerseController,
  insertMemoryVerseController
}
