const { insertMeditations } = require('../model/meditations.model')

const getMeditationsService = async () => {
  try {
    return { data: [], error: false, statusCode: 200, message: 'Success' }
  } catch {
    return { data: [], error: true, statusCode: 500, message: 'Error' }
  }
}

const insertMeditationsService = async payload => {
  const result = await insertMeditations(payload)
  return result
}
module.exports = {
  getMeditationsService,
  insertMeditationsService
}
