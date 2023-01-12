const { insertResponse, getResponse } = require('../model/response.model')

const getResponseService = async () => {
  try {
  const result = await getResponse()
    return { data: result, error: false, statusCode: 200, message: 'Success' }
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
