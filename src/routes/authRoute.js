import express from "express";
import { login, logout, signup } from "../controller/authController.js";

const Router = express.Router();


Router.post("/signup", signup)

Router.get("/login", login)

Router.get("/logout", logout)

export const authRoute = Router