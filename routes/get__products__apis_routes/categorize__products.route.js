// external improts are here
const express = require("express");
const router = express.Router();

// internal exports are here
const {
  get__catgorize__products,
} = require("../../controllers/get__apis__controllers/categorize__products.controller");

// products get api here
router.get("/products/:category", get__catgorize__products);

module.exports = router;
