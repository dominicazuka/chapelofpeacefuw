const { insertAlumniAnnouncements } = require('../model/user.model')

const getAlumniAnnouncementsService = async () => {
  try {
    return { data: [], error: false, statusCode: 200, message: 'Success' }
  } catch {
    return { data: [], error: true, statusCode: 500, message: 'Error' }
  }
}

const insertAlumniAnnouncementsService = async payload => {
  const result = await insertUser(payload)
  return result
}
module.exports = { getAlumniAnnouncementsService, insertAlumniAnnouncementsService }
