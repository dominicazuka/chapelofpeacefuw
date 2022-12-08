const { insertServices } = require('../model/response.model')

const getServicesService = async () => {
  try {
    return { data: [], error: false, statusCode: 200, message: 'Success' }
  } catch {
    return { data: [], error: true, statusCode: 500, message: 'Error' }
  }
}

const insertServicesService = async payload => {
  const result = await insertServices(payload)
  return result
}
module.exports = {
  getServicesService,
  insertServicesService
}
