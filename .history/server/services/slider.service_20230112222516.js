const { insertSlider, getSlider } = require('../model/slider.model')

const getSliderService = async () => {
  try {
  const result = await getSlider()
    return { data: result, error: false, statusCode: 200, message: 'Success' }
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
