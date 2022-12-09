const {
  getTestimonialService,
  insertTestimonialService
} = require('../services/testimonial.service')

const getTestimonialController = async (req, res) => {
  const result = await getTestimonialService()
  res.status(result.statusCode).json(result)
}

const insertTestimonialController = async (req, res) => {
  console.log('req.body>>>>', req.body)
  const result = await insertTestimonialService(req.body)
  res.status(result.statusCode).json(result)
}

module.exports = {
  getTestimonialController,
  insertTestimonialController
}
