var express = require("express");
var router = express.Router();

const {
  getOrderById,
  createOrder,
  getAllOrders,
  updateStatus,
  getOrderStatus,
} = require("../controllers/order");
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
router.get(
  "/order/all/:userId",
  isSignedIn,
  isAdmin,
  isAuthenticated,
  getAllOrders
);

//status of order
router.get(
  "/order/status/:userId",
  isSignedIn,
  isAdmin,
  isAuthenticated,
  getOrderStatus
);
router.put(
  "/order/:orderId/status/:userId",
  isSignedIn,
  isAdmin,
  isAuthenticated,
  updateStatus
);

module.exports = router;
