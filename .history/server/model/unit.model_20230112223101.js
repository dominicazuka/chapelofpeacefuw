const { UnitModel } = require('../db')
const { generateHash } = require('../utils')

const insertUnit = async payload => {
  try {
    const unit = await UnitModel.create(payload)
    return {
      error: false,
      message: 'Unit Data Submitted Successfully',
      statusCode: 201,
      data: unit
    }
  } catch (error) {
    return {
      error: true,
      message: 'Sorry an error occurred, please try again later',
      statusCode: 500,
      data: null
    }
  }
}

const getUnit = async (req, res) => {
  try {
    const allUnits = await UnitModel.findAll()
    return {
      error: false,
      message: 'Query Successfully',
      statusCode: 201,
      data: allUnits
    }
  } catch (error) {}
}

module.exports = { insertUnit, getUnit }
