const express = require('express')
const {
  getPartnerController,
  insertPartnerController
} = require('../controllers/partner.controller')

const router = express.Router()
router.get('/partner', getPartnerController)

router.post('/partner', insertPartnerController)

module.exports = router
