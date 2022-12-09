const express = require('express')
const {
  getUnitController,
  insertUnitController
} = require('../controllers/unit.controller')

const router = express.Router()
router.get('/unit', getUnitController)

router.post('/unit', insertUnitController)

module.exports = router
