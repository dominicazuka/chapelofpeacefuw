const { insertAlumniAnnouncements } = require('../model/alumniAnnouncements.model')

const getAlumniAnnouncementsService = async () => {
  try {
    return { data: [], error: false, statusCode: 200, message: 'Success' }
  } catch {
    return { data: [], error: true, statusCode: 500, message: 'Error' }
  }
}

const insertAlumniAnnouncementsService = async payload => {
  const result = await insertAlumniAnnouncements(payload)
  return result
}
module.exports = { getAlumniAnnouncementsService, insertAlumniAnnouncementsService }
