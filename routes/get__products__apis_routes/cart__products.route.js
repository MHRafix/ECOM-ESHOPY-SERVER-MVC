// external improts are here
const express = require("express");
const router = express.Router();

// internal exports are here
const {
  get__carted__products,
} = require("../../controllers/get__apis__controllers/cart__products.controller");

// products get api here
router.get("/getFromCartList/:email", get__carted__products);

module.exports = router;
