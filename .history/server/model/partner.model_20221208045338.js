const { PartnersModel } = require('../db')
const { generateHash } = require('../utils')

const insertPartner = async payload => {
  try {
    const partner = await PartnersModel.create(payload)
    return {
      error: false,
      message: 'Partner Data Submitted Successfully',
      statusCode: 201,
      data: partner
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

module.exports = { insertPartner }
