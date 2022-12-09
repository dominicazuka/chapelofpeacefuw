const express = require('express')
const {
  getSliderController,
  insertSliderController
} = require('../controllers/slider.controller')

const router = express.Router()
router.get('/slider', getSliderController)

router.post('/slider', insertSliderController)

module.exports = router
