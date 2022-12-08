const { PrayerRequestsModel } = require('../db')
const { generateHash } = require('../utils')

const insertPrayerRequest = async payload => {
  try {
    const prayerRequest = await PrayerRequestsModel.create(
      payload
    )
    return {
      error: false,
      message: 'Prayer Request Data Submitted Successfully',
      statusCode: 201,
      data: prayerRequest
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

module.exports = { insertPrayerRequest }
