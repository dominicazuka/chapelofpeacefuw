const { ServiceModel } = require('../db')
const { generateHash } = require('../utils')

const insertServices = async payload => {
  try {
    const service = await ServiceModel.create(payload)
    return {
      error: false,
      message: 'Service Data Submitted Successfully',
      statusCode: 201,
      data: service
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

const getServices = async (req, res) => {
  try {
    const allServices = await ServiceModel.findAll()
    return {
      error: false,
      message: 'Query Successfully',
      statusCode: 201,
      data: allServices
    }
  } catch (error) {}
}


module.exports = { insertServices, getServices }
