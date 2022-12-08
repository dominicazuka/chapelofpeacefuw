const express = require('express')
const {
  getPrayerMeetinBulletinController,
  insertPrayerMeetinBulletinController
} = require('../controllers/prayerMeetingBulletin.controller')

const router = express.Router()
router.get('/prayer-meeting-bulletin', getPrayerMeetinBulletinController)

router.post('/prayer-meeting-bulletin', insertPrayerMeetinBulletinController)

module.exports = router
