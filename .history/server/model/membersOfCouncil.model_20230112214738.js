const { MembersOfCouncilModel } = require('../db')
const { generateHash } = require('../utils')

const insertMembersOfCouncil = async payload => {
  try {
    const memberOfCouncil = await MembersOfCouncilModel.create(payload)
    return {
      error: false,
      message: 'Member of Council Data Submitted Successfully',
      statusCode: 201,
      data: memberOfCouncil
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

const getMembersOfCouncil = async (req, res) => {
  try {
    const allMembersOfCouncil = await MembersOfCouncilModel.findAll()
    return {
      error: false,
      message: 'Query Successfully',
      statusCode: 201,
      data: allMembersOfCouncil
    }
  } catch (error) {}
}


module.exports = { insertMembersOfCouncil, getMembersOfCouncil }
