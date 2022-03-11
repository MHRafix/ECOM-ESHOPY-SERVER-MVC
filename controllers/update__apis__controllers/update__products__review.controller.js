// internal imports are here
const all__products__collection = require("../../models/products.model");

// update api controller here
exports.update__products__review = async (req, res, next) => {
  try {
    const selected__product = await all__products__collection.findOne({
      _id: req.params.id,
    });

    // console.log(typeof req.body);
    const pevReview = selected__product.ratingsandreviews;
    const newReview = req.body;
    pevReview.push(newReview);

    selected__product.ratingsandreviews = pevReview;

    await selected__product.save();
    console.log(selected__product);
    res.send(selected__product);
  } catch (err) {
    next(err);
  }
};
