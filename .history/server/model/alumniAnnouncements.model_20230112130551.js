const { AlumniAnnouncementModel } = require('../db')
const { generateHash } = require('../utils')

const insertAlumniAnnouncements = async payload => {
  try {
    const title = await AlumniAnnouncementModel.findOne({
      where: { title: payload.title }
    })
    if (title) {
      return {
        error: true,
        message: 'Title already exists',
        statusCode: 406,
        data: null
      }
    }
    const alumniAnnouncement = await AlumniAnnouncementModel.create(payload)
    return {
      error: false,
      message: 'Alumni Announcement Created Successfully',
      statusCode: 201,
      data: alumniAnnouncement
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

const getAlumniAnnouncements = async (req, res) => {
  try {
    const allAlumniAnnouncement = await AlumniAnnouncementModel.findAll()
    console.log("Alumni Announcement", allAlumniAnnouncement)
    return {
      error: false,
      message: 'Query Successfully',
      statusCode: 201,
      data: allAlumniAnnouncement
    }
  } catch (error) {
    
  }
}


module.exports = { insertAlumniAnnouncements, getAlumniAnnouncements }
