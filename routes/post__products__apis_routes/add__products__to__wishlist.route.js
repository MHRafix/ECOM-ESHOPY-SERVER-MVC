// external improts are here
const express = require("express");
const router = express.Router();

// internal exports are here
const {
  post__wishlist__products,
} = require("../../controllers/post__apis__controllers/add__to__wishlist.controller");

// products get api here
router.post("/addToWishList", post__wishlist__products);

module.exports = router;
