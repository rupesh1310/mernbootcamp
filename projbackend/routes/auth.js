var express = require("express");
var router = express.Router();
const { check, validationResult } = require("express-validator");
const { signout, signup } = require("../controllers/auth");

router.post(
  "/signup",
  [
    check("name", "name should be atleast 3 char").isLength({ min: 5 }),
    check("email", "email is required").isEmail(),
    check("password", "password should be atleast 3 char").isLength({ min: 3 }),
  ],
  signup
);
router.get("/signout", signout);

module.exports = router;
