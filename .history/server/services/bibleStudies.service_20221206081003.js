const { insertBibleStudies } = require('../model/bibleStudies.model')

const getBibleStudiesService = async () => {
  try {
    return { data: [], error: false, statusCode: 200, message: 'Success' }
  } catch {
    return { data: [], error: true, statusCode: 500, message: 'Error' }
  }
}

const insertBibleStudiesService = async payload => {
  const result = await insertBibleStudies(payload)
  return result
}
module.exports = {
  getBibleStudiesService,
  insertBibleStudiesService
}
