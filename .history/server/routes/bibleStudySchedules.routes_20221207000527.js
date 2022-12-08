const express = require('express')
const {
  getBibleStudySchedulesController,
  insertBibleStudySchedulesController
} = require('../controllers/bibleStudySchedules.controller')

const router = express.Router()
router.get('/bible-study-schedules', getBibleStudySchedulesController)

router.post('/bible-study-schedules', insertBibleStudySchedulesController)

module.exports = router
