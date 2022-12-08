const {
  getPostService,
  insertPostService
} = require('../services/post.service')

const getPostController = async (req, res) => {
  const result = await getPostService()
  res.status(result.statusCode).json(result)
}

const insertPostController = async (req, res) => {
  console.log('req.body>>>>', req.body)
  const result = await insertPostService(req.body)
  res.status(result.statusCode).json(result)
}

module.exports = {
  getPostController,
  insertPostController
}
