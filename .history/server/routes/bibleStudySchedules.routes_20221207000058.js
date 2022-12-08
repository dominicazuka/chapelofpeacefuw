const express = require('express')
const {
  getBibleStudySchedulesController,
  insertBibleStudySchedulesController
} = require('../controllers/bibleStudySchedules.controller')

const router = express.Router()
router.get('/bible-studies', getBibleStudySchedulesController)

router.post('/bible-studies', insertBibleStudySchedulesController)

module.exports = router
