// external improts are here
const express = require("express");
const router = express.Router();

// internal exports are here
const {
  get__ordered__products,
} = require("../../controllers/get__apis__controllers/ordered__products.controller");

// products get api here
router.get("/allOrders/myOrders/:email", get__ordered__products);

module.exports = router;
