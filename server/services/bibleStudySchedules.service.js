const { insertBibleStudySchedules } = require('../model/bibleStudySchedules.model')

const getBibleStudySchedulesService = async () => {
  try {
    return { data: [], error: false, statusCode: 200, message: 'Success' }
  } catch {
    return { data: [], error: true, statusCode: 500, message: 'Error' }
  }
}

const insertBibleStudySchedulesService = async payload => {
  const result = await insertBibleStudySchedules(payload)
  return result
}
module.exports = {
  getBibleStudySchedulesService,
  insertBibleStudySchedulesService
}
