// internal imports are here
const ordered__products__collection = require("../../models/individualOrder.model");

// post api controller here
exports.post__ordered__products = async (req, res, next) => {
  try {
    const order__data = req.body;
    const post__order = new ordered__products__collection(order__data);
    await post__order.save();
    res.send(post__order);
  } catch (err) {
    next(err);
  }
};
