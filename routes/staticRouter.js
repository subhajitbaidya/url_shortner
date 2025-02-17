const express = require("express");
const {
  handleHomeUI,
  handleLoginUI,
  handleSignupUI,
} = require("../controllers/staticController");
const { restrictTo } = require("../middleware/auth");

const router = express.Router();

router.get("/", restrictTo(["NORMAL"]), handleHomeUI);

router.get("/signup", handleSignupUI);

router.get("/login", handleLoginUI);

module.exports = router;
