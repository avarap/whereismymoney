const router = require("express").Router();
// const { isLoggedIn } = require("../middlewares/auth.middlewares");
const passport = require("passport");


router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["openid", "email", "profile"],
  })
);

app.get("/success", (req, res) => {
  res.send(`Welcome ${req.user.email}`);
});

router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login', session: true }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });
  
 router.get("/profile", (req, res) => {
    res.send(req.user);
  })

router.post("/logout", (req, res, next) => {
  req.logOut((err) => {
    if (err) {
      return next(err);
    }
    req.session.destroy();
    res.redirect("/");
  
  });
});

module.exports = router;