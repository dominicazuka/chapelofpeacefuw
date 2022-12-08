const { insertMemoryVerse } = require('../model/memoryVerse.model')

const getMemoryVerseService = async () => {
  try {
    return { data: [], error: false, statusCode: 200, message: 'Success' }
  } catch {
    return { data: [], error: true, statusCode: 500, message: 'Error' }
  }
}

const insertMemoryVerseService = async payload => {
  const result = await insertMemoryVerse(payload)
  return result
}
module.exports = {
  getMemoryVerseService,
  insertMemoryVerseService
}
