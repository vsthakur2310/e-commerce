var express = require("express");
var router = express.Router();

const {
  getProductById,
  createProduct,
  getProduct,
  photo,
  updateProduct,
  deleteProduct,
  getAllProducts,
  getAllUniqueCategories,
} = require("../controllers/product");
const { isSignedIn, isAdmin, isAuthenticated } = require("../controllers/auth");
const { getUserById } = require("../controllers/user");

//Params
router.param("userId", getUserById);
router.param("productId", getProductById);

//all of actual routes

router.post(
  "/product/create/:userId",
  isSignedIn,
  isAdmin,
  isAuthenticated,
  createProduct
);

//read routes
router.get("/product/:productId", getProduct);
router.get("/product/photo/:productId", photo);

//delete route
router.delete(
  "/product/:product/:userId",
  isSignedIn,
  isAdmin,
  isAuthenticated,
  deleteProduct
);

//update route
router.put(
  "/product/:product/:userId",
  isSignedIn,
  isAdmin,
  isAuthenticated,
  updateProduct
);

//listing route
router.get("/products", getAllProducts);

router.get("/products/categories", getAllUniqueCategories);
module.exports = router;
