const express = require('express')
const {
  getAlumniAnnouncementsController,
  insertAlumniAnnouncementsController
} = require('../controllers/alumniAnnouncements.controller')

const router = express.Router()
router.get('/alumni-announcements', getAlumniAnnouncementsController)

router.post('/alumni-announcements', insertAlumniAnnouncementsController)

module.exports = router
