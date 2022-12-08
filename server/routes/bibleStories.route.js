const express = require('express')
const {
  getBibleStoriesController,
  insertBibleStoriesController
} = require('../controllers/bibleStories.controller')

const router = express.Router()
router.get('/bible-stories', getBibleStoriesController)

router.post('/bible-stories', insertBibleStoriesController)

module.exports = router
