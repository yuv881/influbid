import express from "express";
import dotenv from "dotenv";
import process from "process";
import ConnectDB from "./config/db.js";
const app = express();
app.use(express.json());

dotenv.config();
ConnectDB();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
});