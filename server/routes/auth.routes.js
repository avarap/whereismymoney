const router = require("express").Router();
// const { isLoggedIn } = require("../middlewares/auth.middlewares");
const passport = require("passport");
const session = require("express-session");


router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  }));



router.get('/google/callback',
  passport.authenticate('google', {
    successRedirect: process.env.CLIENT_PROFILE,
    failureRedirect: '/login/failed', session: true
  }));

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "User failed to login",
  })
});

router.get("/success", (req, res) => {
  console.log("TEST SUCCESS", req.user)
  res.json(req.user);
});


router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "Login succesful",
      user: req.user,
    })
  } else {
    res.status(401).json({
      success: false,
      message: "User failed to login",
    })
  }
});

//   // UserContext REACT
// router.get("/getuser", (req, res) => {
//   res.send(req.user);
// });

// router.get("/profile", (req, res) => {
//   console.log(req.user)
//   res.send(req.user);
// });

// router.post("/logout", (req, res) => {
// 	req.logout();
// 	res.redirect(process.env.CLIENT_URL);
// });

// router.get('/logout', function (req, res){
//   console.log("logout user", req.session)
//   sessionStore.destroy(req.session, (err) =>{
//       if(err)console.log(err);
//       req.logout();
//       req.session.destroy(function (err) {
//           if(err) console.log(err);
//           res.status(200).json({message : 'User Logged Out'});
//       });

//   });

// });

router.post("/logout", async function (req, res, next) {

  console.log("logout user", req.session)

  try {
    req.logOut(req.user, function (err) {

      console.log("logout callback called")
      // req.session.destroy();
      if (err) {
        console.log("error", err)
        return next(err);

      }
    });

  } catch (e) {
    console.log(e)
  }
  res.json(req.isAuthenticated())
  console.log("logout called")
});

// router.get("/logout", (req, res, next) => {
//   if (req.session) {
//       req.session.destroy();
//       res.clearCookie("session-id");
//       res.redirect("/");
//   } else {
//       const err = new Error("You are not logged in!");
//       err.status = 401;
//       return next(err);
//   }
// });


// router.post("/logout", (req, res, next) => {
//   req.logOut((err) => {
//     if (err) {
//       return next(err);
//     }
//     req.session.destroy();
//     res.send("done");

//   });
// });

module.exports = router;