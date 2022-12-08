const {
  insertAlumniMemberships
} = require('../model/alumniMemberships.model')

const getAlumniMembershipsService = async (payload) => {
  try {
    console.log('Get request payload',payload)
    return { data: [], error: false, statusCode: 200, message: 'Success' }
  } catch {
    return { data: [], error: true, statusCode: 500, message: 'Error' }
  }
}

const insertAlumniMembershipsService = async payload => {
  const result = await insertAlumniMemberships(payload)
  return result
}
module.exports = {
  getAlumniMembershipsService,
  insertAlumniMembershipsService
}
