const express = require("express");
import {getUsersController} from "../controllers/user.controller"

const router = express.Router()
router.get("/users",getUsersController)

export default router