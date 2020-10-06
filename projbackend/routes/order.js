var express = require("express");
var router = express.Router();

const { getOrderById, createOrder } = require("../controllers/order");
const { isSignedIn, isAdmin, isAuthenticated } = require("../controllers/auth");
const { getUserById, pushOrderInPurchaseList } = require("../controllers/user");
const { updateStock } = require("../controllers/product");

//params

router.param("userId", getUserById);
router.param("OrderId", getOrderById);

//Actual routes
//create
router.post(
  "/order/create/:userId",
  isSignedIn,
  isAuthenticated,
  pushOrderInPurchaseList,
  updateStock,
  createOrder
);

//read
module.exports = router;
