// external improts are here
const express = require("express");
const router = express.Router();

// internal exports are here
const {
  get__search__result,
} = require("../../controllers/get__apis__controllers/search__products.controller");

// products get api here
router.get("/products/searchedProducts/:productTitle", get__search__result);

module.exports = router;
