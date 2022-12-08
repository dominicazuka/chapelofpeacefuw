const { UserModel } = require('../db')

const insertUser = async payload => {
  try {
    const userEmail = await UserModel.findOne({ where: { email: payload.email } })
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
      const user = await UserModel.create(payload);
      const { password, ...rest } = user.toJSON();
      return {
        error: false,
        message: 'Account Created Successfully',
        statusCode: 201,
        data: user
      }
  } catch (error) {}
}
