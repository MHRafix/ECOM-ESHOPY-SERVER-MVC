// internal imports are here
const ordered__products__collection = require("../../models/individualOrder.model");

// post api controller here
exports.delete__orders = async (req, res, next) => {
  try {
    const uniqueId = req.params.uniqueId;

    await ordered__products__collection.deleteOne({
      _id: uniqueId,
    });
    res.send();
  } catch (err) {
    next(err);
  }
};
