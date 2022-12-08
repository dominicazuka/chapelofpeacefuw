const { insertPost } = require('../model/post.model')

const getPostService = async () => {
  try {
    return { data: [], error: false, statusCode: 200, message: 'Success' }
  } catch {
    return { data: [], error: true, statusCode: 500, message: 'Error' }
  }
}

const insertPostService = async payload => {
  const result = await insertPost(payload)
  return result
}
module.exports = {
  getPostService,
  insertPostService
}
