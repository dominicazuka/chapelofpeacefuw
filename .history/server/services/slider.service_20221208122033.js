const { insertSlider } = require('../model/slider.model')

const getSliderService = async () => {
  try {
    return { data: [], error: false, statusCode: 200, message: 'Success' }
  } catch {
    return { data: [], error: true, statusCode: 500, message: 'Error' }
  }
}

const insertSliderService = async payload => {
  const result = await insertSlider(payload)
  return result
}
module.exports = {
  getSliderService,
  insertSliderService
}
