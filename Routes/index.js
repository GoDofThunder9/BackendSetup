const express = require("express");
const route =express.Router();
console.log("router loaded");
const homecontroller = require("../controller/home_controller");
route.get('/',homecontroller.home);
route.get('/game',homecontroller.game);
route.get('/fame',homecontroller.fame);
module.exports = route;