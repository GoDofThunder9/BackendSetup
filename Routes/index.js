const express = require("express");
const route =express.Router();
console.log("router loaded");
const homecontroller = require("../controller/home_controller");
route.get('/',homecontroller.home);
route.post('/create-work',homecontroller.form);
module.exports = route;