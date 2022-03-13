// external imports are here
const createError = require("http-errors");

// internal imports are here
const products__collection = require("../../models/products.model");

// get products api controller here
exports.get__shop__products = async (req, res, next) => {
  try {
    const shop__products = await products__collection.find();
    res.send(shop__products);
  } catch (err) {
    next(err);
  }
};
