// external improts are here
const express = require("express");
const router = express.Router();

// internal exports are here
const {
  get__size__by__products,
} = require("../../controllers/get__apis__controllers/size__by__products.controller");

// products get api here
router.get("/products/sizedProducts/:size", get__size__by__products);

module.exports = router;
