const { UserModel } = require('../db')

const insertUser = async payload => {
  try {
    const user = await UserModel.findOne({ where: { email: payload.email } })
    if (user) {
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
  } catch (error) {}
}
