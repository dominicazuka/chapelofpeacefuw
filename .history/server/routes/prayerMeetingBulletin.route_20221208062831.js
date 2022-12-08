const express = require('express')
const {
  getPrayerMeetinBulletinController,
  insertPrayerMeetinBulletinController
} = require('../controllers/prayerMeetingBulletin.controller')

const router = express.Router()
router.get('/prayer-meeting-bulletin', getPrayerMeetingBulletinController)

router.post('/prayer-meeting-bulletin', insertPrayerMeetingBulletinController)

module.exports = router
