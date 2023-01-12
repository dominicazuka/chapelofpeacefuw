const { ResponseModel } = require('../db')
const { generateHash } = require('../utils')

const insertResponse = async payload => {
  try {
    const response = await ResponseModel.create(
      payload
    )
    return {
      error: false,
      message: 'Response Data Submitted Successfully',
      statusCode: 201,
      data: response
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

const getResponse = async (req, res) => {
  try {
    const allReponse = await ResponseModel.findAll()
    return {
      error: false,
      message: 'Query Successfully',
      statusCode: 201,
      data: allReponse
    }
  } catch (error) {}
}


module.exports = { insertResponse, getResponse }
