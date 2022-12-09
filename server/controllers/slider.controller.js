const {
  getSliderService,
  insertSliderService
} = require('../services/slider.service')

const getSliderController = async (req, res) => {
  const result = await getSliderService()
  res.status(result.statusCode).json(result)
}

const insertSliderController = async (req, res) => {
  console.log('req.body>>>>', req.body)
  const result = await insertSliderService(req.body)
  res.status(result.statusCode).json(result)
}

module.exports = {
  getSliderController,
  insertSliderController
}
