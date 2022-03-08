// external improts are here
const express = require("express");
const router = express.Router();

// internal exports are here
const {
  post__carted__products,
} = require("../../controllers/post__apis__controllers/add__to__cartlist.controller");

// products post api here
router.post("/addToCartList", post__carted__products);

module.exports = router;
