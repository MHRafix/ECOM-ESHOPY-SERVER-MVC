// external imports are here
const express = require("express");
const router = express.Router();

// internal mports are here
const {
  update__products__review,
} = require("../../controllers/update__apis__controllers/update__products__review.controller");

// product update / put api here
router.patch("/addReview/:id", update__products__review);

module.exports = router;
