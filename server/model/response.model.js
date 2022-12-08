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

module.exports = { insertResponse }
