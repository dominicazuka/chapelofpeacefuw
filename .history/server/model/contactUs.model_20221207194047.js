const { ContactUsModel } = require('../db')
const { generateHash } = require('../utils')

const insertContactUs = async payload => {
  try {
    const contactUs = await ContactUsModel.create(payload)
    return {
      error: false,
      message: 'Contact Form Submitted Successfully',
      statusCode: 201,
      data: contactUs
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

module.exports = { insertContactUs }
