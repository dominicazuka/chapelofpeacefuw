const { insertContactUs } = require('../model/contactUs.model')

const getContactUsService = async () => {
  try {
  const result = await insertContactUs(payload)
    return { data: [], error: false, statusCode: 200, message: 'Success' }
  } catch {
    return { data: [], error: true, statusCode: 500, message: 'Error' }
  }
}

const insertContactUsService = async payload => {
  const result = await insertContactUs(payload)
  return result
}
module.exports = {
  getContactUsService,
  insertContactUsService
}
