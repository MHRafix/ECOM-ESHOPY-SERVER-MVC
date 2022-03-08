// internal imports are here
const carted__products__collection = require("../../models/cartedProducts.model");
const ObjectId = require("mongoose").ObjectId;

// post api controller here
exports.update__carted__products = async (req, res, next) => {
  try {
    const all__cart__products = await carted__products__collection.find({});

    const selected__product1 = all__cart__products.find(
      (product) =>
        product.userEmail === req.params.email &&
        product.cartedProduct._id === req.params.id
    );

    const selected__product = await carted__products__collection.find({
      uniqueId: req.params.id,
    });
    console.log(selected__product);

    // if (req.body) {
    //   selected__product.quantity = selected__product.quantity + req.body;
    // }
    // await selected__product.save();
    res.send(selected__product);
  } catch (err) {
    next(err);
  }
};
