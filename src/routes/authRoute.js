import express from "express";
import { login, logout, signup } from "../controller/authController.js";

const Router = express.Router();


Router.post("/signup", signup)

Router.post("/login", login)

Router.post("/logout", logout)

export const authRoute = Router