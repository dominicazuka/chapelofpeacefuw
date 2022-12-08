const { MeditationModel } = require('../db')
const { generateHash } = require('../utils')

const insertMeditations = async payload => {
  try {
    const meditation = await MeditationModel.create(payload)
    return {
      error: false,
      message: 'Donation Submitted Successfully',
      statusCode: 201,
      data: meditation
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

module.exports = { insertMeditations }
