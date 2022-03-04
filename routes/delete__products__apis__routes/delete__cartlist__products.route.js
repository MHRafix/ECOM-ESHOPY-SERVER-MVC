// external improts are here
const express = require("express");
const router = express.Router();

// internal exports are here
const {
  delete__cartlist__products,
} = require("../../controllers/delete__apis__controllers/delete__cartlist__products.controller");

// products get api here
router.delete("/deleteCartlistProducts/:uniqueId", delete__cartlist__products);

module.exports = router;
