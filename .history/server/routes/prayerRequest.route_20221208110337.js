const express = require('express')
const {
  getPrayerRequestController,
  insertPrayerRequestController
} = require('../controllers/prayerRequest.controller')

const router = express.Router()
router.get('/prayer-request', getPrayerRequestController)

router.post('/prayer-request', insertPrayerRequestController)

module.exports = router
