// internal imports are here
const individual__order__collection = require("../../models/individualOrder.model");

// get products api controller here
exports.get__ordered__products = async (req, res, next) => {
  try {
    const query = { userEmail: req.params.email };
    const order__products = await individual__order__collection.find(query);
    res.send(order__products);
  } catch (err) {
    next(err);
  }
};
