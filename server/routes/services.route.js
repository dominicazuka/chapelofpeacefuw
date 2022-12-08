const express = require('express')
const {
  getServicesController,
  insertServicesController
} = require('../controllers/services.controller')

const router = express.Router()
router.get('/services', getServicesController)

router.post('/services', insertServicesController)

module.exports = router
