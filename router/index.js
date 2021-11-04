
const express = require("express");
const router = express.Router();
const userRoute = require('./routes/user/userRoute')
const slug = require('../constants/slug')

// imports end

router.use(slug.USER_ROOT_PATH, userRoute);


module.exports = router;