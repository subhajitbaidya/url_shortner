const { getUser } = require("../service/auth");

// ?Authentication
function checkForAuthentication(req, res, next) {
  const tokenCookie = req.cookies?.token;
  req.user = null;
  if (!tokenCookie) return next();

  const token = tokenCookie;
  const user = getUser(token);

  req.user = user;
  next();
}

// ?Authorization
function restrictTo(roles = []) {
  return (req, res, next) => {
    if (!req.user) return res.redirect("/login");

    if (!roles.includes(req.user.role)) return res.json("Unauthorized");

    return next();
  };
}

module.exports = {
  checkForAuthentication,
  restrictTo,
};
