import express from "express";
import { authRoute } from "./authRoute.js";


const Router = express.Router();

/** Check APIs v1/status */
Router.get('/status', (req, res) => {
    res.status(201).json({ message: 'APIs V1 are ready to use.' })
  })

/* auth Api */

Router.use("/auth", authRoute)
export const api = Router