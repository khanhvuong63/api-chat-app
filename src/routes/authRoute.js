import express from "express";

const Router = express.Router();

Router.get("/login", (req, res) =>{
    res.send("Login Route")
})

export const authRoute = Router