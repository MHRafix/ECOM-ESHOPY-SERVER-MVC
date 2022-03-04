// external improts are here
const express = require("express");
const router = express.Router();

// internal exports are here
const {
  delete__wishlist__products,
} = require("../../controllers/delete__apis__controllers/delete__wishlist__products.controller");

// products get api here
router.delete("/deleteWishlistProducts/:uniqueId", delete__wishlist__products);

module.exports = router;
