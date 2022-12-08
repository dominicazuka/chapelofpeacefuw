const express = require("express");
const { getUsersController, insertUserController } = require("../controllers/user.controller");

const router = express.Router()
router.get("/users",getUsersController)

router.post('/users', insertUserController);

module.exports = router