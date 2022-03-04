// internal imports are here
const carted__products__collection = require("../../models/cartedProducts.model");

// post api controller here
exports.post__carted__products = async (req, res, next) => {
  try {
    const product__data = req.body;
    const post__product = new carted__products__collection(product__data);
    await post__product.save();
    res.send(post__product);
  } catch (err) {
    next(err);
  }
};
