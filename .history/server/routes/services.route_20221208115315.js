const express = require('express')
const {
  getServiceController,
  insertServiceController
} = require('../controllers/services.controller')

const router = express.Router()
router.get('/services', getServiceController)

router.post('/services', insertServiceController)

module.exports = router
