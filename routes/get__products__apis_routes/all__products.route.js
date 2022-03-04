// external improts are here
const express = require("express");
const router = express.Router();

// internal exports are here
const {
  get__all__products,
} = require("../../controllers/get__apis__controllers/all__products.controller");

// products get api here
router.get("/products", get__all__products);

module.exports = router;
