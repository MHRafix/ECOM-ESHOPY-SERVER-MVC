const mongoose = require("mongoose");

const carted__productsSchema = new mongoose.Schema({
  cartedProduct: {
    type: Object,
    require: true,
  },
  uniqueId: {
    type: String,
    require: true,
  },
  size: {
    type: String,
    enum: ["S", "M", "L", "XL", "XXL"],
    default: "M",
    require: true,
  },
  quantity: {
    type: Number,
    default: 1,
    require: true,
  },
  userEmail: {
    type: String,
    trim: true,
    require: true,
    lowercase: true,
  },
});

// make this schema a data model
const Carted__Products = mongoose.model(
  "Carted__Products",
  carted__productsSchema
);

module.exports = Carted__Products;
