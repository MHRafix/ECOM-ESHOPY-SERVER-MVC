// external improts are here
const express = require("express");
const router = express.Router();

// internal exports are here
const {
  get__catgorize__products,
} = require("../controllers/categorizeProducts.controller");

// products get api here
router.get("/products/:category", get__catgorize__products);

module.exports = router;
