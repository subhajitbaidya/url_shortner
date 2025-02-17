const URL = require("../models/url");

async function handleHomeUI(req, res) {
  const allUrls = await URL.find({ createdBy: req.user._id });
  return res.render("home", {
    urls: allUrls,
  });
}

function handleLoginUI(req, res) {
  return res.render("login");
}

function handleSignupUI(req, res) {
  return res.render("signup");
}

module.exports = {
  handleHomeUI,
  handleLoginUI,
  handleSignupUI,
};
