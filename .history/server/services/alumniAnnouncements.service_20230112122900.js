const {
  insertAlumniAnnouncements,
  getAlumniAnnouncements
} = require('../model/alumniAnnouncements.model')

const getAlumniAnnouncementsService = async payload => {
  try {
    const result = await getAlumniAnnouncements()
    console.log("resukt service ocntroller", result)
    return { data: [result], error: false, statusCode: 200, message: 'Success' }
  } catch {
    return { data: [], error: true, statusCode: 500, message: 'Error' }
  }
}

const insertAlumniAnnouncementsService = async payload => {
  const result = await insertAlumniAnnouncements(payload)
  return result
}
module.exports = {
  getAlumniAnnouncementsService,
  insertAlumniAnnouncementsService
}
