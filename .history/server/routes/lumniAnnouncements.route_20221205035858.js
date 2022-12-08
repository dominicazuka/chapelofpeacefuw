const express = require('express')
const {
  getAlumniAnnouncementsController,
  insertAlumniAnnouncementsController
} = require('../controllers/alumniAnnouncements.controller')

const router = express.Router()
router.get('/users', getUsersController)

router.post('/users', insertUserController)

module.exports = router
