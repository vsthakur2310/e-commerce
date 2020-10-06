var express = require("express");
var router = express.Router();

const { getOrderById } = require("../controllers/order");
const { isSignedIn, isAdmin, isAuthenticated } = require("../controllers/auth");
const { getUserById, pushOrderInPurchaseList } = require("../controllers/user");
const { updateStock } = require("../controllers/product");

//params

router.param("userId", getUserById);
router.param("OrderId", getOrderById);

module.exports = router;
