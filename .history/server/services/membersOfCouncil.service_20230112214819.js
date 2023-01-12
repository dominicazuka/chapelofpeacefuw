const { insertMembersOfCouncil, getMembersOfCouncil } = require('../model/membersOfCouncil.model')

const getMembersOfCouncilService = async () => {
  try {
  const result = await getMembersOfCouncil(payload)
    return { data: result, error: false, statusCode: 200, message: 'Success' }
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
