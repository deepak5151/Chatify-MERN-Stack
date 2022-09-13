const express = require('express');
const { signupUser, loginUser, searchUser } = require('../controllers/userController')
const { protect } = require("../middleware/authMiddleware");

const routes = express.Router();

routes.post("/signup", signupUser);
routes.post("/login", loginUser);
routes.get("/searchUser", protect, searchUser);

module.exports = routes;