const { ChildrenSongsModel } = require('../db')
const { generateHash } = require('../utils')

const insertChildrenSongs = async payload => {
  try {
    const title = await ChildrenSongsModel.findOne({
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
    const childrenSongs = await ChildrenSongsModel.create(payload)
    return {
      error: false,
      message: 'Children Song Created Successfully',
      statusCode: 201,
      data: childrenSongs
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

module.exports = { insertChildrenSongs }
