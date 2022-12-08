const { BibleStudyModel } = require('../db')
const { generateHash } = require('../utils')

const insertBibleStudies = async payload => {
  try {
    const title = await BibleStudyModel.findOne({
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
    const bibleStudy = await BibleStudyModel.create(payload)
    return {
      error: false,
      message: 'Bible Study Created Successfully',
      statusCode: 201,
      data: bibleStudy
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

module.exports = { insertBibleStudies }
