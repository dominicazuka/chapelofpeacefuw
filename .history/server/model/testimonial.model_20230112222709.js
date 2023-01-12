const { TestimonialsModel } = require('../db')
const { generateHash } = require('../utils')

const insertTestimonial = async payload => {
  try {
    const testimonial = await TestimonialsModel.create(payload)
    return {
      error: false,
      message: 'Testimonial Data Submitted Successfully',
      statusCode: 201,
      data: testimonial
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

const getTestimonial = async (req, res) => {
  try {
    const allTestimonial = await TestimonialsModel.findAll()
    return {
      error: false,
      message: 'Query Successfully',
      statusCode: 201,
      data: allTestimonial
    }
  } catch (error) {}
}


module.exports = { insertTestimonial, getTestimonial }
