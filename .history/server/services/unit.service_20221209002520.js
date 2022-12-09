const { insertUnit } = require('../model/unit.model')

const getUnitService = async () => {
  try {
    return { data: [], error: false, statusCode: 200, message: 'Success' }
  } catch {
    return { data: [], error: true, statusCode: 500, message: 'Error' }
  }
}

const insertUnitService = async payload => {
  const result = await insertUnit(payload)
  return result
}
module.exports = {
  getUnitService,
  insertUnitService
}
