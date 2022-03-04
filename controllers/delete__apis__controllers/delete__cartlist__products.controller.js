// internal imports are here
const cartlist__products__collection = require("../../models/cartedProducts.model");

// post api controller here
exports.delete__cartlist__products = async (req, res, next) => {
  try {
    const uniqueId = req.params.uniqueId;

    await cartlist__products__collection.deleteOne({
      _id: uniqueId,
    });
    res.send();
  } catch (err) {
    next(err);
  }
};
