const {
  getUnitService,
  insertUnitService
} = require('../services/unit.service')

const getUnitController = async (req, res) => {
  const result = await getUnitService()
  res.status(result.statusCode).json(result)
}

const insertUnitController = async (req, res) => {
  console.log('req.body>>>>', req.body)
  const result = await insertUnitService(req.body)
  res.status(result.statusCode).json(result)
}

module.exports = {
  getUnitController,
  insertUnitController
}
