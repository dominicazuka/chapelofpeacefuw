const { insertUser } = require('../model/user.model')

const getUsersService = async () => {
  try {
    return { data: [], error: false, statusCode: 200, message: 'Success' }
  } catch {
    return { data: [], error: true, statusCode: 500, message: 'Error' }
  }
}

const insertUserService = async payload => {
  const result = await insertUser(payload)
  return result
}
module.exports = { getUsersService, insertUserService }
