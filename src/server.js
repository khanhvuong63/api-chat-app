import express from "express";
import dotenv from "dotenv";
import { api } from "./routes/index.js";

const app = express();

dotenv.config()
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send("Hello world!!")
})
app.use(api)

app.listen (PORT, () => console.log(`Server running on port ${PORT}`))