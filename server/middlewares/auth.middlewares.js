function isLoggedIn(req, res, next) {
  if (req.user) {
    next();
  } else {
    res.status(401).json({ error: true, message: "user unauthorised" });
  }
}

module.exports = { isLoggedIn };