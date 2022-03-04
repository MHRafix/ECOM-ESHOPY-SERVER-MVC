// external improts are here
const express = require("express");
const router = express.Router();

// internal exports are here
const {
  get__wishlist__products,
} = require("../../controllers/get__apis__controllers/wishlist__products.controller");

// products get api here
router.get("/getFromWishList/:email", get__wishlist__products);

module.exports = router;
