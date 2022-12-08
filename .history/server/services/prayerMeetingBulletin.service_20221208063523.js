const { insertPrayerMeetingBulletin } = require('../model/prayerMeetingBulletin.model')

const getPrayerMeetingBulletinService = async () => {
  try {
    return { data: [], error: false, statusCode: 200, message: 'Success' }
  } catch {
    return { data: [], error: true, statusCode: 500, message: 'Error' }
  }
}

const insertPrayerMeetingBulletinService = async payload => {
  const result = await insertPrayerMeetingBulletin(payload)
  return result
}
module.exports = {
  getPrayerMeetingBulletinService,
  insertPrayerMeetingBulletinService
}
