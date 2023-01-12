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

const getContactUs = async (req, res) => {
  try {
    const allContactUs = await ContactUsModel.findAll()
    return {
      error: false,
      message: 'Query Successfully',
      statusCode: 201,
      data: allContactUs
    }
  } catch (error) {}
}


module.exports = { insertContactUs,  getContactUs}
