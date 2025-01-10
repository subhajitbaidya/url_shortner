const URL = require("../models/url");

// To handle ejs UI coming from views
async function handleUserInterface(req, res) {
  const allUrls = await URL.find({});
  return res.render("home", {
    urls: allUrls,
  });
}

module.exports = {
  handleUserInterface,
};
