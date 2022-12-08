const {
  getAlumniMembershipsService,
  insertAlumniMembershipsService
} = require('../services/alumniMemberships.service')

const getAlumniMembershipsController = async (req, res) => {
  const result = await getAlumniMembershipsService()
  res.status(result.statusCode).json(result)
}

const insertAlumniMembershipsController = async (req, res) => {
  console.log('req.body>>>>', req.body)
  const result = await insertAlumniMembershipsService(req.body)
  res.status(result.statusCode).json(result)
}

module.exports = {
  getAlumniMembershipsController,
  insertAlumniMembershipsController
}
