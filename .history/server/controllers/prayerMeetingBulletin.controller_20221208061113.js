const {
  getPrayerMeetingBulletinService,
  insertPrayerMeetingBulletinService
} = require('../services/prayerMeetingBulletin.service')

const getPrayerMeetingBulletinController = async (req, res) => {
  const result = await getPrayerMeetingBulletinService()
  res.status(result.statusCode).json(result)
}

const insertPrayerMeetingBulletinController = async (req, res) => {
  console.log('req.body>>>>', req.body)
  const result = await insertPrayerMeetingBulletinService(req.body)
  res.status(result.statusCode).json(result)
}

module.exports = {
  getPrayerMeetingBulletinController,
  insertPrayerMeetingBulletinController
}
