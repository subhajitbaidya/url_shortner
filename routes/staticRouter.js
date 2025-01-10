const express = require("express");
const { handleUserInterface } = require("../controllers/staticController");

const router = express.Router();

router.get("/", handleUserInterface);

router.get("/signup", (req, res) => {
  return res.render("signup");
});

router.get("/login", (req, res) => {
    return res.render("login");
  });

module.exports = router;
