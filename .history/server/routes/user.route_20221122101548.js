const express = require("express");
const { getUsersController } = require("../controllers/user.controller");

const router = express.Router()
router.get("/users",getUsersController)

export default router