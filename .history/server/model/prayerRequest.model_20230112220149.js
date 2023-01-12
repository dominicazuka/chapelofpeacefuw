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

const getPrayerRequest = async (req, res) => {
  try {
    const allPrayerRequest = await PrayerRequestsModel.findAll()
    return {
      error: false,
      message: 'Query Successfully',
      statusCode: 201,
      data: allPrayerRequest
    }
  } catch (error) {}
}


module.exports = { insertPrayerRequest, getPrayerRequest }
