const { MembershipModel } = require('../db')
const { generateHash } = require('../utils')

const insertMemberships = async payload => {
  try {
    const membership = await MembershipModel.create(payload)
    return {
      error: false,
      message: 'Membership Submitted Successfully',
      statusCode: 201,
      data: membership
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

const getMemberships = async (req, res) => {
  try {
    const allMemberships = await MembershipModel.findAll()
    return {
      error: false,
      message: 'Query Successfully',
      statusCode: 201,
      data: allMemberships
    }
  } catch (error) {}
}


module.exports = { insertMemberships, getMemberships }
