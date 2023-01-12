const { MemoryVerseModel } = require('../db')
const { generateHash } = require('../utils')

const insertMemoryVerse = async payload => {
  try {
    const memoryVerse = await MemoryVerseModel.create(payload)
    return {
      error: false,
      message: 'Memory Verse Data Submitted Successfully',
      statusCode: 201,
      data: memoryVerse
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

const getMemoryVerse = async (req, res) => {
  try {
    const allMemoryVerse = await MemoryVerseModel.findAll()
    return {
      error: false,
      message: 'Query Successfully',
      statusCode: 201,
      data: allMemoryVerse
    }
  } catch (error) {}
}


module.exports = { insertMemoryVerse, insertMemoryVerse }
