var express = require("express");
var router = express.Router();
const { signout, signup, signin, isSignedIn } = require("../controllers/auth");
const { check, validationResult } = require("express-validator");

router.post(
  "/signup",
  [
    check("name")
      .isLength({ min: 2 })
      .withMessage("name should be atleast 2 char"),
    check("email").isEmail().withMessage("enter a valid email"),
    check("password")
      .isLength({ min: 3 })
      .withMessage("password should be atleast 3 char"),
  ],
  signup
);

router.post(
  "/signin",
  [
    check("email").isEmail().withMessage("enter a valid email"),
    check("password")
      .isLength({ min: 1 })
      .withMessage("plz enter a valid password"),
  ],
  signin
);
router.get("/signout", signout);

// router.get("/testroute", isSignedIn, (req, res) => {
//   res.send("gg protected");
// });

module.exports = router;
