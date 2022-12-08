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
        message: 'Title already exists',
        statusCode: 406,
        data: null
      }
    }
    const alumniMemberships = await AlumniMembershipModel.create(payload)
    return {
      error: false,
      message: 'Alumni Announcement Created Successfully',
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

module.exports = { insertAlumniMemberships }
