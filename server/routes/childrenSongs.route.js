const express = require('express')
const {
  getChildrenSongsController,
  insertChildrenSongsController
} = require('../controllers/childrenSongs.controller')

const router = express.Router()
router.get('/children-songs', getChildrenSongsController)

router.post('/children-songs', insertChildrenSongsController)

module.exports = router
