const { insertBibleStudySchedules, getBibleStudySchedules } = require('../model/bibleStudySchedules.model')

const getBibleStudySchedulesService = async () => {
  try {
  const result = await getBibleStudySchedules()
    return { data: result, error: false, statusCode: 200, message: 'Success' }
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
