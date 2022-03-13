// internal imports are here
const products__collection = require("../../models/products.model");

// get products api controller here
exports.get__new__arrival__products = async (req, res, next) => {
  try {
    const all__products = await products__collection.find().limit(20);

    const new__arrival__products = all__products.filter(
      (product) => product.salePrice === "0"
    );
    res.send(new__arrival__products);
  } catch (err) {
    next(err);
  }
};
