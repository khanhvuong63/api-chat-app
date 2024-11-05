import express from "express"
import { userController } from "../controller/userController.js"
import { protectRoute } from "../middleware/protectRoute.js"

const Router = express.Router()

Router.get("/", protectRoute, userController.getUsersForSidebar)

export const userRoute = Router