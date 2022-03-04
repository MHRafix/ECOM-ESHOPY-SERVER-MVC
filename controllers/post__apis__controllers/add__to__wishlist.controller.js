// internal imports are here
const wishlist__products__collection = require("../../models/wishlist__products.model");

// post api controller here
exports.post__wishlist__products = async (req, res, next) => {
  try {
    const wishlist__data = req.body;
    console.log(wishlist__data);
    const post__data = new wishlist__products__collection(wishlist__data);
    await post__data.save();
    res.send(post__data);
  } catch (err) {
    next(err);
  }
};
