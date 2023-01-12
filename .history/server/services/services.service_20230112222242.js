const { insertServices, getServices } = require('../model/services.model')

const getServicesService = async () => {
  try {
  const result = await getServices(payload)
    return { data: result, error: false, statusCode: 200, message: 'Success' }
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
