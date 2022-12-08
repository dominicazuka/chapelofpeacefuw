const express = require('express')
const {
  getMeditationsController,
  insertMeditationsController
} = require('../controllers/meditations.controller')

const router = express.Router()
router.get('/meditations', getMeditationsController)

router.post('/meditations', insertMeditationsController)

module.exports = router
