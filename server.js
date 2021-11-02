// imports start
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const slug = require("./constants/slug");

//imports end

// dotenv
dotenv.config();

// Database configuration
if (process.env.ENVIRONMENT === "development") {
  mongoose.connect(process.env.MONGODB_CON_STRING_DEV);
}
 
const db = mongoose.connection;
db.on("error", (err) => {
  console.log(err);
});
db.once("open", () => {
  console.log("Database Connection Established");
});


//  initialize app
const app = express();
app.use(express.json());


// app listening
const port = process.env.PORT || 3000;
app.listen(port, () => console.log("listening on port " + port));


// All Routes
app.use(slug.USER_ROOT_PATH, require("./routes/user/userRoute"));
