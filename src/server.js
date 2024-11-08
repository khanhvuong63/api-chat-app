import express from "express";
import dotenv from "dotenv";
import { API } from "./routes/index.js"
import connectToMongoDB from "./config/mongodb.js";
import cookieParser from "cookie-parser";
import { app, server } from "./socket/socket.js";



dotenv.config()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cookieParser())
// app.get('/', (req, res) => {
//     res.send("Hello world!!")
// })
app.use('/api',API)

server.listen (PORT, () => {
  connectToMongoDB()
  console.log(`Server running on port ${PORT}`)
})