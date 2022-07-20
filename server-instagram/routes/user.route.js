const express = require("express")
const router = express.Router()
const userController = require("../controller/user.controller")
router.get("/",userController.getLandingPage)
router.post("/signup",userController.registerUser)
router.post("/login",userController.login)
router.get("/dashboard",userController.dashboard)
module.exports=router 