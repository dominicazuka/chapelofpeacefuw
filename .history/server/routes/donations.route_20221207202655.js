const express = require('express')
const {
  getDonationsController,
  insertDonationsController
} = require('../controllers/donations.controller')

const router = express.Router()
router.get('/donations', getDonationsController)

router.post('/donations', insertDonationsController)

module.exports = router
