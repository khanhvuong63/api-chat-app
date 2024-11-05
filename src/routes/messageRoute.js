import express from "express"
import { messageController } from "../controller/messageController.js";
import { protectRoute } from "../middleware/protectRoute.js";

const Router = express.Router();

Router.get("/:id", protectRoute, messageController.getMessages)
Router.post("/send/:id", protectRoute, messageController.sendMessage)

export const messageRoute = Router