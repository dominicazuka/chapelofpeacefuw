const {
  getMembersOfCouncilService,
  insertMembersOfCouncilService
} = require('../services/membersOfCouncil.service')

const getMembersOfCouncilController = async (req, res) => {
  const result = await getMembersOfCouncilService()
  res.status(result.statusCode).json(result)
}

const insertMembersOfCouncilController = async (req, res) => {
  console.log('req.body>>>>', req.body)
  const result = await insertMembersOfCouncilService(req.body)
  res.status(result.statusCode).json(result)
}

module.exports = {
  getMembersOfCouncilController,
  insertMembersOfCouncilController
}
