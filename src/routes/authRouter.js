import { Router } from "express";
import {login, register} from "../controllers/authController.js"
import {userValidatorData} from "../middleware/userValidator.js"

const authRouter = Router()

authRouter.post("/register",userValidatorData, register)
authRouter.post("/login",userValidatorData, login)

export { authRouter }