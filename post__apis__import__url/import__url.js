const add__products__to__cart = require("../routes/post__products__apis_routes/add__products__to__cartlist.route.js");
const add__products__to__wishlist = require("../routes/post__products__apis_routes/add__products__to__wishlist.route");
const add__order__to__database = require("../routes/post__products__apis_routes/add__orders.route.js");

module.exports = {
  add__products__to__wishlist,
  add__order__to__database,
  add__products__to__cart,
};
