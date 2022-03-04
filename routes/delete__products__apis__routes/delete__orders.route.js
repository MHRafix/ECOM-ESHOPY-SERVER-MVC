// external improts are here
const express = require("express");
const router = express.Router();

// internal exports are here
const {
  delete__orders,
} = require("../../controllers/delete__apis__controllers/delete__orders.controller");

// products get api here
router.delete("/deleteOrders/:uniqueId", delete__orders);

module.exports = router;
