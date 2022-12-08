const {getUsersService, insertUserService} = require("../services/user.service")

const getUsersController = async (req, res) => {
    const result = await getUsersService()
    res.status(result.statusCode).json(result)
} 

const insertUserController = async (req, res) => {
  const result = await insertUserService(req.body)
  res.status(result.statusCode).json(result)
}


module.exports = {getUsersController, insertUserController}