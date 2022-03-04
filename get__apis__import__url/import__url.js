const all__products__route = require("../routes/get__products__apis_routes/all__products.route");

const new__arrival__route = require("../routes/get__products__apis_routes/new__arrival__products.route");

const sale__products__route = require("../routes/get__products__apis_routes/sale__products.route");

const cart__products__route = require("../routes/get__products__apis_routes/cart__products.route");

const wishlist__products__route = require("../routes/get__products__apis_routes/wishlist__products.route");

const individual__order__route = require("../routes/get__products__apis_routes/order__products.route");

const search__result__route = require("../routes/get__products__apis_routes/search__products.route");

const single__product__route = require("../routes/get__products__apis_routes/single__product.route");

const categorize__products__route = require("../routes/get__products__apis_routes/categorize__products.route");

const size__by__products__route = require("../routes/get__products__apis_routes/size__by__products.route");

const products__by__price__route = require("../routes/get__products__apis_routes/products__by__price.route");

module.exports = {
  categorize__products__route,
  products__by__price__route,
  size__by__products__route,
  wishlist__products__route,
  individual__order__route,
  single__product__route,
  search__result__route,
  cart__products__route,
  sale__products__route,
  all__products__route,
  new__arrival__route,
};
