// external improts are here
const express = require("express");
const router = express.Router();

// internal exports are here
const {
  get__sale__products,
} = require("../../controllers/get__apis__controllers/sale__products.controller");

// products get api here
router.get("/saleProducts", get__sale__products);

module.exports = router;
