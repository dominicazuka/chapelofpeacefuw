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

module.exports = { insertMembersOfCouncil }
