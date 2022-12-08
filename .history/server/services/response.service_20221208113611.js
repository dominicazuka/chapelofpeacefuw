const { insertResponse } = require('../model/response.model')

const getResponseService = async () => {
  try {
    return { data: [], error: false, statusCode: 200, message: 'Success' }
  } catch {
    return { data: [], error: true, statusCode: 500, message: 'Error' }
  }
}

const insertResponseService = async payload => {
  const result = await insertResponse(payload)
  return result
}
module.exports = {
  getResponseService,
  insertResponseService
}
