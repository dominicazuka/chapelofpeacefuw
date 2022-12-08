const express = require('express')
const {
  getResponseController,
  insertResponseController
} = require('../controllers/response.controller')

const router = express.Router()
router.get('/response', getResponseController)

router.post('/response', insertResponseController)

module.exports = router
