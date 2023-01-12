const { insertBibleStories, getBibleStories } = require('../model/bibleStories.model')

const getBibleStoriesService = async () => {
  try {
    const result = await getBibleStories()
    return { data: result, error: false, statusCode: 200, message: 'Success' }
  } catch {
    return { data: [], error: true, statusCode: 500, message: 'Error' }
  }
}

const insertBibleStoriesService = async payload => {
  const result = await insertBibleStories(payload)
  return result
}
module.exports = {
  getBibleStoriesService,
  insertBibleStoriesService
}
