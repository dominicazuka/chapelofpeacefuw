const { insertPost, getPost } = require('../model/post.model')

const getPostService = async () => {
  try {
  const result = await getPost()
    return { data: result, error: false, statusCode: 200, message: 'Success' }
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
