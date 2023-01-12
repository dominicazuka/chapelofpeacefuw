const { PrayerMeetingBulletinModel } = require('../db')
const { generateHash } = require('../utils')

const insertPrayerMeetingBulletin = async payload => {
  try {
    const prayerMeetingBulletin = await PrayerMeetingBulletinModel.create(payload)
    return {
      error: false,
      message: 'Prayer Meeting Bulletin Data Submitted Successfully',
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

const getPrayerMeetingBulletin = async (req, res) => {
  try {
    const allPrayerMeetingBulletin = await PrayerMeetingBulletinModel.findAll()
    return {
      error: false,
      message: 'Query Successfully',
      statusCode: 201,
      data: allPrayerMeetingBulletin
    }
  } catch (error) {}
}

module.exports = { insertPrayerMeetingBulletin }
