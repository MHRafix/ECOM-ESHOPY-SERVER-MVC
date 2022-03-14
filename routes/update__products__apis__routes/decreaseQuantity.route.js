// external imports are here
const express = require("express");
const router = express.Router();

// internal mports are here
const {
  decreaseCartQuantityController,
} = require("../../controllers/update__apis__controllers/decreaseCartQuantity.controller");

// product update / put api here
router.patch("/decCartProductQty/:email/:id", decreaseCartQuantityController);

module.exports = router;
