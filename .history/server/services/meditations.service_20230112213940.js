const { insertMeditations, getMeditations } = require('../model/meditations.model')

const getMeditationsService = async () => {
  try {
  const result = await getMeditations()
    return { data: result, error: false, statusCode: 200, message: 'Success' }
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
