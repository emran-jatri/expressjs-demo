
const express = require("express");
const router = express.Router();
const userController = require("../../../controllers/user/userController");
const slug = require("../../../constants/slug")
// imports end

router
	.get(slug.ROOT_PATH, userController.getAll)
	.post(slug.ROOT_PATH, userController.create);

module.exports = router;
