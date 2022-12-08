const express = require('express')
const {
  getMemoryVerseController,
  insertMemoryVerseController
} = require('../controllers/memoryVerse.controller')

const router = express.Router()
router.get('/memory-verse', getMemoryVerseController)

router.post('/memory-verse', insertMemoryVerseController)

module.exports = router
