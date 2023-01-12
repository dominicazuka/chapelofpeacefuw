const { AlumniMembershipModel } = require('../db')
const { generateHash } = require('../utils')

const insertAlumniMemberships = async payload => {
  try {
    const phone_no = await AlumniMembershipModel.findOne({
      where: { phone_no: payload.phone_no }
    })
    if (phone_no) {
      return {
        error: true,
        message: 'Phone Number already exists',
        statusCode: 406,
        data: null
      }
    }
    const alumniMemberships = await AlumniMembershipModel.create(payload)
    return {
      error: false,
      message: 'Alumni Membership Created Successfully',
      statusCode: 201,
      data: alumniMemberships
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

const getAlumniMemberships = async (req, res) => {
  try {
    const allAlumniMemberships = await AlumniMembershipModel.findAll()
    console.log('All Alumni Memberships', allAlumniMemberships)
    return {
      error: false,
      message: 'Query Successfully',
      statusCode: 201,
      data: allAlumniMemberships
    }
  } catch (error) {}
}

module.exports = { insertAlumniMemberships, getAlumniMemberships }
