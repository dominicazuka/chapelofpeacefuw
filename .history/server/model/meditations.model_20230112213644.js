const { MeditationModel } = require('../db')
const { generateHash } = require('../utils')

const insertMeditations = async payload => {
  try {
    const meditation = await MeditationModel.create(payload)
    return {
      error: false,
      message: 'Meditation Submitted Successfully',
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

const getMeditations = async (req, res) => {
  try {
    const allMeditation = await MeditationModel.findAll()
    return {
      error: false,
      message: 'Query Successfully',
      statusCode: 201,
      data: allMeditation
    }
  } catch (error) {}
}

module.exports = { insertMeditations, getMeditations }
