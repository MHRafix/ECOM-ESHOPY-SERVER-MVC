// internal imports are here
const wishlist__products__collection = require("../../models/wishlist__products.model");

// post api controller here
exports.delete__wishlist__products = async (req, res, next) => {
  try {
    const uniqueId = req.params.uniqueId;

    await wishlist__products__collection.deleteOne({
      _id: uniqueId,
    });
    res.send();
  } catch (err) {
    next(err);
  }
};
