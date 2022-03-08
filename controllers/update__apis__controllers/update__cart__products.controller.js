// internal imports are here
const carted__products__collection = require("../../models/cartedProducts.model");
// const ObjectId = require("mongoose").ObjectId;

// post api controller here
exports.update__carted__products = async (req, res, next) => {
  try {
    const selected__product = await carted__products__collection.findOne({
      userEmail: req.params.email,
      uniqueId: req.params.id,
    });

    selected__product.quantity = selected__product.quantity + 1;

    await selected__product.save();
    res.send(selected__product);
  } catch (err) {
    next(err);
  }
};
