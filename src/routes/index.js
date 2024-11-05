import express from "express";
import { authRoute } from "./authRoute.js";
import { messageRoute } from "./messageRoute.js";
import { userRoute } from "./userRoute.js";


const Router = express.Router();

/** Check APIs v1/status */
Router.get('/status', (req, res) => {
    res.status(201).json({ message: 'APIs V1 are ready to use.' })
  })

/* auth Api */
Router.use("/auth", authRoute)

/* message Api */
Router.use("/messages", messageRoute)

/** user Api */
Router.use("/users", userRoute)

export const api = Router