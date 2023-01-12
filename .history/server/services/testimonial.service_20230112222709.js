const { insertTestimonial, getTestimonial } = require('../model/testimonial.model')

const getTestimonialService = async () => {
  try {
  const result = await getTestimonial()
    return { data: result, error: false, statusCode: 200, message: 'Success' }
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
