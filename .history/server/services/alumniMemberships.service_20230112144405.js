const {
  insertAlumniMemberships,
  getAlumniMemberships
} = require('../model/alumniMemberships.model')

const getAlumniMembershipsService = async () => {
  try {
    const result = await getAlumniMemberships()
    return { data: result, error: false, statusCode: 200, message: 'Success' }
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
