const express = require('express')
const {
  getAlumniMembershipsController,
  insertAlumniMembershipsController
} = require('../controllers/alumniMemberships.controller')

const router = express.Router()
router.get('/alumni-memberships', getAlumniMembershipsController)

router.post('/alumni-memberships', insertAlumniMembershipsController)

module.exports = router
