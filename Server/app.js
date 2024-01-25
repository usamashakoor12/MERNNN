require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const users = require("./models/userSchema");
const router = require("./routes/router")
const cors = require("cors")
require("./db/conn")



const app = express();

const port = 8003;

app.use(cors());
app.use(express.json())
app.use(router)

app.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
});