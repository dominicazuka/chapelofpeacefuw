const { insertPrayerMeetingBulletin, getPrayerMeetingBulletin } = require('../model/prayerMeetingBulletin.model')

const getPrayerMeetingBulletinService = async () => {
  try {
  const result = await getPrayerMeetingBulletin()
    return { data: result, error: false, statusCode: 200, message: 'Success' }
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
