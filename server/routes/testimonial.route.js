const express = require('express')
const {
  getTestimonialController,
  insertTestimonialController
} = require('../controllers/testimonial.controller')

const router = express.Router()
router.get('/testimonial', getTestimonialController)

router.post('/testimonial', insertTestimonialController)

module.exports = router
