const { insertUnit, getUnit } = require('../model/unit.model')

const getUnitService = async () => {
  try {
const result = await getUnit()
    return { data: result, error: false, statusCode: 200, message: 'Success' }
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
