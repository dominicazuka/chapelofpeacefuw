const {
  getMembershipsService,
  insertMembershipsService
} = require('../services/memberships.service')

const getMembershipsController = async (req, res) => {
  const result = await getMembershipsService()
  res.status(result.statusCode).json(result)
}

const insertMembershipsController = async (req, res) => {
  console.log('req.body>>>>', req.body)
  const result = await insertMembershipsService(req.body)
  res.status(result.statusCode).json(result)
}

module.exports = {
  getMembershipsController,
  insertMembershipsController
}
