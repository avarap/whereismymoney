const passport = require("passport");
const User = require("../models/User.model");

module.exports = {
  initializePassport: function () {
    //Get the GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET from Google Developer Console
    const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
    const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

    const GoogleStrategy = require("passport-google-oauth20").Strategy;
    // console.log(process.env.GOOGLE_CALLBACK_URL);
    passport.serializeUser(function (user, done) {
      console.log("A", user);
      return done(null, user);
    });

    passport.deserializeUser(function (user, done) {
      console.log("B", user);
      return done(null, user);
    });

    passport.use(
      new GoogleStrategy(
        {
          clientID: `${process.env.GOOGLE_CLIENT_ID}`,
          clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`,
          callbackURL: `${process.env.GOOGLE_CALLBACK_URL}`,
          passReqToCallback: true,
          scope: ["profile", "email"],
        },

        // MOngoDB (called on succesful authentication)
        function (req, accessToken, refreshToken, profile, cb) {
          User.findOrCreate({ googleId: profile.id, email: profile.emails[0].value, displayName: profile.displayName }, function (err, user) {
            const googleUser = {
              googleId: profile.id,
              displayName: profile.displayName,
              picture: profile.photos[0].value,
              email: profile.emails[0].value,
            };
            // console.log(googleUser)
            // console.log(user)
            return cb(err, googleUser);
          });
        }
      )
    );
  },
};
