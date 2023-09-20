const express = require("express");
const route = express.Router();
const usercontroller = require("../controller/user_controller");

route.get('/profile',usercontroller.profile);

module.exports = route;