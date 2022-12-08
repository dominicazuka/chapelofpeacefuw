const { insertMembersOfCouncil } = require('../model/membersOfCouncil.model')

const getMembersOfCouncilService = async () => {
  try {
    return { data: [], error: false, statusCode: 200, message: 'Success' }
  } catch {
    return { data: [], error: true, statusCode: 500, message: 'Error' }
  }
}

const insertMembersOfCouncilService = async payload => {
  const result = await insertMembersOfCouncil(payload)
  return result
}
module.exports = {
  getMembersOfCouncilService,
  insertMembersOfCouncilService
}
