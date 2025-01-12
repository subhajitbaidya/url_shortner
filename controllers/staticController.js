const URL = require("../models/url");

// To handle ejs UI coming from views
async function handleUserInterface(req, res) {
  if (!req.user) return res.redirect("login");
  const allUrls = await URL.find({createdBy: req.user._id});
  return res.render("home", {
    urls: allUrls,
  });
}

module.exports = {
  handleUserInterface,
};
