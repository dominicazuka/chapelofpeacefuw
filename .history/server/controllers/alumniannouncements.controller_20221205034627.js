const {
  getAlumniAnnouncemnentsService,
  insertAlumniAnnouncementsService
} = require('../services/alumniAnnouncements.service')

const getAlumniAnnouncementsController = async (req, res) => {
  const result = await getAlumniAnnouncemnentsService()
  res.status(result.statusCode).json(result)
}

const insertAlumniAnnouncementsController = async (req, res) => {
  console.log('req.body>>>>', req.body)
  const result = await insertAlumniAnnouncementsService(req.body)
  res.status(result.statusCode).json(result)
}

module.exports = { getAlumniAnnouncementsController, insertAlumniAnnouncementsController }
