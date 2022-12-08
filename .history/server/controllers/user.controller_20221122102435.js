const {getUsersService} = require("../services/user.service")

const getUsersController = async (req, res) => {
    const result = await getUsersService()
    res.status(result.statusCode).json(result)
} 

module.exports = {getUsersController}