// external improts are here
const express = require("express");
const router = express.Router();

// internal exports are here
const {
  get__single__product,
} = require("../../controllers/get__apis__controllers/single__product.controller");

// products get api here
router.get("/shop/singleProducts/:productId", get__single__product);

module.exports = router;
