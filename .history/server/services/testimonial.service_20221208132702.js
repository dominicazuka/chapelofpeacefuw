const { insertTestimonial } = require('../model/testimonial.model')

const getTestimonialService = async () => {
  try {
    return { data: [], error: false, statusCode: 200, message: 'Success' }
  } catch {
    return { data: [], error: true, statusCode: 500, message: 'Error' }
  }
}

const insertTestimonialService = async payload => {
  const result = await insertTestimonial(payload)
  return result
}
module.exports = {
  getTestimonialService,
  insertTestimonialService
}
