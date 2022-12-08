const express = require('express')
const {
  getMembershipsController,
  insertMembershipsController
} = require('../controllers/memberships.controller')

const router = express.Router()
router.get('/memberships', getMembershipsController)

router.post('/memberships', insertMembershipsController)

module.exports = router
