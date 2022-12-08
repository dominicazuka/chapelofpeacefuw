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

module.exports = { insertPost }
