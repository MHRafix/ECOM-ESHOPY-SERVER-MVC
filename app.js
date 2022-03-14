// external imports here
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");

// internal imports here
const {
  not__found__route,
  error__handler,
} = require("./middleware/common/errorHandler");

// all get api request route import here
const {
  all__products__route,
  new__arrival__route,
  sale__products__route,
  cart__products__route,
  individual__order__route,
  search__result__route,
  single__product__route,
  categorize__products__route,
  size__by__products__route,
  products__by__price__route,
  wishlist__products__route,
  shop__products__route,
} = require("./get__apis__import__url/import__url");

// all post api route import here
const {
  add__products__to__cart__route,
  add__products__to__wishlist__route,
  add__order__to__database__route,
} = require("./post__apis__import__url/import__url");

// all update or put api here
const {
  update__cart__products__route,
  update__products__review__route,
  decreaseCartQuantityRoute,
} = require("./update__apis__import__url/import__url");

// all delete api route import here
const {
  delete__wishlist__products__route,
  delete__cartlist__products__route,
  delete__orders__route,
} = require("./delete__apis__import__url/import__url");

// MidleWere and request parser
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// database connection here
mongoose
  .connect(process.env.MONGODB__CONNECTION__STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connection successfully!"))
  .catch((err) => console.log(err));

// application all routes here

// all get api routes here
app.use(categorize__products__route);
app.use(products__by__price__route);
app.use(size__by__products__route);
app.use(wishlist__products__route);
app.use(individual__order__route);
app.use(single__product__route);
app.use(cart__products__route);
app.use(sale__products__route);
app.use(shop__products__route);
app.use(search__result__route);
app.use(all__products__route);
app.use(new__arrival__route);

// all post api here
app.use(add__products__to__cart__route);
app.use(add__products__to__wishlist__route);
app.use(add__order__to__database__route);

// all update or put api here
app.use(decreaseCartQuantityRoute);
app.use(update__cart__products__route);
app.use(update__products__review__route);

// all delete api here
app.use(delete__cartlist__products__route);
app.use(delete__wishlist__products__route);
app.use(delete__orders__route);

// Check server is running or not
app.get("/", (req, res) => {
  res.send("RUNNIG ESHOP SERVER!");
});

// 404 not found route here
app.use(not__found__route);

// common error handler here
app.use(error__handler);

// Listen server what we do here
app.listen(PORT, () => {
  console.log("ESHOP app is listenning.");
});
