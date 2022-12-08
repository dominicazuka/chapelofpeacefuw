const { PrayerMeetingBulletinModel } = require('../db')
const { generateHash } = require('../utils')

const insertPrayerMeetingBulletin = async payload => {
  try {
    const prayerMeetingBulletin = await PostModel.create(payload)
    return {
      error: false,
      message: 'Post Data Submitted Successfully',
      statusCode: 201,
      data: prayerMeetingBulletin
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

module.exports = { insertPrayerMeetingBulletin }
