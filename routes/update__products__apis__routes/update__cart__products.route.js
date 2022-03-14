// external imports are here
const express = require("express");
const router = express.Router();

// internal mports are here
const {
  update__carted__products,
} = require("../../controllers/update__apis__controllers/update__cart__products.controller");

// product update / put api here
router.patch("/incCartProductQty/:email/:id", update__carted__products);

module.exports = router;
