const { SliderModel } = require('../db')
const { generateHash } = require('../utils')

const insertSlider = async payload => {
  try {
    const slider = await SliderModel.create(payload)
    return {
      error: false,
      message: 'Slider Data Submitted Successfully',
      statusCode: 201,
      data: slider
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

const getSlider = async (req, res) => {
  try {
    const alSlider = await SliderModel.findAll()
    return {
      error: false,
      message: 'Query Successfully',
      statusCode: 201,
      data: alSlider
    }
  } catch (error) {}
}


module.exports = { insertSlider, getSlider }
