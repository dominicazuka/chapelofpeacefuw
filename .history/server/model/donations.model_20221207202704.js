const { DonationModel } = require('../db')
const { generateHash } = require('../utils')

const insertDonations = async payload => {
  try {
    const donation = await DonationModel.create(payload)
    return {
      error: false,
      message: 'Contact Form Submitted Successfully',
      statusCode: 201,
      data: donation
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

module.exports = { insertDonations }
