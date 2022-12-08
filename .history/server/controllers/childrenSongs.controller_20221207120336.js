const {
  getChildrenSongsService,
  insertChildrenSongsService
} = require('../services/childrenSongs.service')

const getChildrenSongsController = async (req, res) => {
  const result = await getChildrenSongsService()
  res.status(result.statusCode).json(result)
}

const insertChildrenSongsController = async (req, res) => {
  console.log('req.body>>>>', req.body)
  const result = await insertChildrenSongsService(req.body)
  res.status(result.statusCode).json(result)
}

module.exports = {
  getChildrenSongsController,
  insertChildrenSongsController
}
