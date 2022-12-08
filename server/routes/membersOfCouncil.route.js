const express = require('express')
const {
  getMembersOfCouncilController,
  insertMembersOfCouncilController
} = require('../controllers/membersOfCouncil.controller')

const router = express.Router()
router.get('/members-of-council', getMembersOfCouncilController)

router.post('/members-of-council', insertMembersOfCouncilController)

module.exports = router
