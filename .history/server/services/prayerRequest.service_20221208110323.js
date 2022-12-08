const { insertPrayerRequest } = require('../model/prayerRequest.model')

const getPrayerRequestService = async () => {
  try {
    return { data: [], error: false, statusCode: 200, message: 'Success' }
  } catch {
    return { data: [], error: true, statusCode: 500, message: 'Error' }
  }
}

const insertPrayerRequestService = async payload => {
  const result = await insertPrayerRequest(payload)
  return result
}
module.exports = {
  getPrayerRequestService,
  insertPrayerRequestService
}
