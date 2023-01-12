const { UserModel } = require('../db')
const { generateHash } = require('../utils')

const insertUser = async payload => {
  try {
    const userEmail = await UserModel.findOne({
      where: { email: payload.email }
    })
    if (userEmail) {
      return {
        error: true,
        message: 'Email already exists',
        statusCode: 406,
        data: null
      }
    }
    const username = await UserModel.findOne({
      where: { username: payload.username }
    })
    if (username) {
      return {
        error: true,
        message: 'Username already exists',
        statusCode: 406,
        data: null
      }
    }
    const hashPassword = generateHash(payload.password)
    payload.password = hashPassword;
    const user = await UserModel.create(payload)
    const { password, ...rest } = user.toJSON()
    return {
      error: false,
      message: 'Account Created Successfully',
      statusCode: 201,
      data: rest
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

const getUsers = async (req, res) => {
  try {
    const allUsers = await UserModel.findAll()
    console.log('All Users', allUsers)
    return {
      error: false,
      message: 'Query Successfully',
      statusCode: 201,
      data: allUsers
    }
  } catch (error) {}
}


module.exports = { insertUser, getUsers }
