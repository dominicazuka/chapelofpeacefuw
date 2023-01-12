const { insertMemberships } = require('../model/memberships.model')

const getMembershipsService = async () => {
  try {
  const result = await getMemberships()
    return { data: result, error: false, statusCode: 200, message: 'Success' }
  } catch {
    return { data: [], error: true, statusCode: 500, message: 'Error' }
  }
}

const insertMembershipsService = async payload => {
  const result = await insertMemberships(payload)
  return result
}
module.exports = {
  getMembershipsService,
  insertMembershipsService
}
