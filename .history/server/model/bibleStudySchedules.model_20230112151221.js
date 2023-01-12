const { BibleStudyScheduleModel } = require('../db')
const { generateHash } = require('../utils')

const insertBibleStudySchedules = async payload => {
  try {
    const venue = await BibleStudyScheduleModel.findOne({
      where: { venue: payload.venue }
    })
    if (venue) {
      return {
        error: true,
        message: 'Venue already exists',
        statusCode: 406,
        data: null
      }
    }
    const bibleStudySchedules = await BibleStudyScheduleModel.create(payload)
    return {
      error: false,
      message: 'Bible Study Created Successfully',
      statusCode: 201,
      data: bibleStudySchedules 
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

const getBibleStudySchedules = async (req, res) => {
  try {
    const allBibleStudySchedules = await BibleStudyScheduleModel.findAll()
    return {
      error: false,
      message: 'Query Successfully',
      statusCode: 201,
      data: allBibleStudySchedules
    }
  } catch (error) {}
}


module.exports = { insertBibleStudySchedules, getBibleStudySchedules }
