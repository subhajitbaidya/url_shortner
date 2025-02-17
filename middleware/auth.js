const { getUser } = require("../service/auth");

// ?Authentication
function checkForAuthentication(req, res, next) {
  const AuthHeader = req.headers["authorization"];
  req.user = null;
  if (!AuthHeader || !AuthHeader.startswith("Bearer")) return next();

  const token = AuthHeader.split("Bearer")[1];
  const user = getUser(token);

  req.user = user;
  next();
}

// ?Authorization
function restrictTo(role = []) {
  return (req, res, next) => {
    if (!req.user) return res.redirect("/login");

    if (!roles.includes(req.user.role)) return res.render("Unauthorized");

    return next();
  };
}

module.exports = {
  checkForAuthentication,
  restrictTo,
};
