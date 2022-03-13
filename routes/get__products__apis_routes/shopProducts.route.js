// external improts are here
const express = require("express");
const router = express.Router();

// internal exports are here
const {
  get__shop__products,
} = require("../../controllers/get__apis__controllers/shopProducts.controller");

// products get api here
router.get("/shopProducts", get__shop__products);

module.exports = router;
