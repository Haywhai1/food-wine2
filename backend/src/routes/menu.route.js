const express = require("express");
const menuController = require("../controller/menu.controller");
const router = express.Router();



router
  .route("/")
  .get(menuController.getAllMenu)
  .post( menuController.createMenu)
  

module.exports = router;
