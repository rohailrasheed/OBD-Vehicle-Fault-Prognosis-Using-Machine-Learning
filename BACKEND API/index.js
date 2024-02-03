const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const router = require("./router/route.js");

dotenv.config({ path: "./config.env" });

const app = express();
const Port = process.env.PORT;

app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(Port, () => console.log("Server is running!"));
