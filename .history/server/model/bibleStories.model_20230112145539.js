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

const getBibleStories = async (req, res) => {
  try {
    const allBibleStory = await BibleStoriesModel.findAll()
    return {
      error: false,
      message: 'Query Successfully',
      statusCode: 201,
      data: allBibleStory
    }
  } catch (error) {}
}


module.exports = { insertBibleStories, getBibleStories }
