// external improts are here
const express = require("express");
const router = express.Router();

// internal exports are here
const {
  post__ordered__products,
} = require("../../controllers/post__apis__controllers/add_order__products.controller");

// products get api here
router.post("/allCustomersOrders", post__ordered__products);

module.exports = router;
