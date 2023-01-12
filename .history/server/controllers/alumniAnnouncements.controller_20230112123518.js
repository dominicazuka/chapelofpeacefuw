const {
  getAlumniAnnouncementsService,
  insertAlumniAnnouncementsService
} = require('../services/alumniAnnouncements.service')

const getAlumniAnnouncementsController = async (req, res) => {
  console.log('res>>>>', res)
  const result = await getAlumniAnnouncementsService()
  console.log("result", result)
  res.status(result.statusCode).json(result)
}

const insertAlumniAnnouncementsController = async (req, res) => {
  console.log('req.body>>>>', req.body)
  const result = await insertAlumniAnnouncementsService(req.body)
  res.status(result.statusCode).json(result)
}

module.exports = {
  getAlumniAnnouncementsController,
  insertAlumniAnnouncementsController
}
