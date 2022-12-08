const express = require('express')
const {
  getContactUsController,
  insertContactUsController
} = require('../controllers/contactUs.controller')

const router = express.Router()
router.get('/contact-us', getContactUsController)

router.post('/contact-us', insertContactUsController)

module.exports = router
