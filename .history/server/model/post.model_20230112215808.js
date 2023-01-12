const { PostModel } = require('../db')
const { generateHash } = require('../utils')

const insertPost = async payload => {
  try {
    const post = await PostModel.create(payload)
    return {
      error: false,
      message: 'Post Data Submitted Successfully',
      statusCode: 201,
      data: post
    }
  } catch (error) {
    return {
      error: true,
      message: 'Sorry an error occurred, please try again later',
      statusCode: 500,
      data: null
    }
  }
}

const getPost = async (req, res) => {
  try {
    const allPosts = await PostModel.findAll()
    return {
      error: false,
      message: 'Query Successfully',
      statusCode: 201,
      data: allPosts
    }
  } catch (error) {}
}


module.exports = { insertPost }
