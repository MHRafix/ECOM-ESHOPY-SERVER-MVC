// internal imports are here
const products__collection = require("../../models/products.model");

// get products api controller here
exports.get__sale__products = async (req, res, next) => {
  try {
    const all__products = await products__collection.find();
    const sale__products = all__products.filter(
      (product) => product.salePrice === "0"
    );
    res.send(sale__products);
  } catch (err) {
    next(err);
  }
};
