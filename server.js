// imports start
const express = require("express");
const dotenv = require("dotenv");
const slug = require("./constants/slug");
const router = require('./router');
const connectDB = require('./config/db')
//imports end

// dotenv
dotenv.config();

// Database configuration
connectDB()


//  initialize app
const app = express();
app.use(express.json());


// app listening
const port = process.env.PORT || 3000;
app.listen(port, () => console.log("listening on port " + port));


// All Routes
app.use(slug.API_ROOT_PATH, router);
