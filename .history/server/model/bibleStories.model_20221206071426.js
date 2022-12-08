const { BibleStoriesModel } = require('../db')
const { generateHash } = require('../utils')

const insertBibleStories = async payload => {
  try {
    const title = await BibleStoriesModel.findOne({
      where: { title: payload.title }
    })
    if (title) {
      return {
        error: true,
        message: 'Title already exists',
        statusCode: 406,
        data: null
      }
    }
    const bibleStory = await BibleStoriesModel.create(payload)
    return {
      error: false,
      message: 'Bible Story Created Successfully',
      statusCode: 201,
      data: bibleStory
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

module.exports = { insertBibleStories }
