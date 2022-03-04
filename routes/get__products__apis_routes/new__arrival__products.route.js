// external improts are here
const express = require("express");
const router = express.Router();

// internal exports are here
const {
  get__new__arrival__products,
} = require("../../controllers/get__apis__controllers/new__arrival__products.controller");

// products get api here
router.get("/newArrivalProducts", get__new__arrival__products);

module.exports = router;
