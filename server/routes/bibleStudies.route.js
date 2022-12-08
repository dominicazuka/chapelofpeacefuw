const express = require('express')
const {
  getBibleStudiesController,
  insertBibleStudiesController
} = require('../controllers/bibleStudies.controller')

const router = express.Router()
router.get('/bible-studies', getBibleStudiesController)

router.post('/bible-studies', insertBibleStudiesController)

module.exports = router
