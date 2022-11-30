require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const session = require("express-session");
const { MONGO_URI } = require("../db");
const MongoDBStore = require("connect-mongodb-session")(session);
const passport = require("passport");
const User = require("../models/User.model");
const favicon = require("serve-favicon");

const app = express();

const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || "http://localhost:3000";

//DBStore
const store = new MongoDBStore({
  uri: MONGO_URI,
  collection: "sessions",
});

// Middleware configuration
module.exports = (app) => {
  // Because this is a server that will accept requests from outside and it will be hosted ona server with a `proxy`, express needs to know that it should trust that setting.
  // Services like heroku use something called a proxy and you need to add this to your server
  app.set("trust proxy", 1);

  // controls a very specific header to pass headers from the frontend
  app.use(
    cors({
      origin: CLIENT_ORIGIN,
      methods: "GET,POST,PUT,DELETE",
      credentials: true,
    })
  );

  // In development environment the app logs
  app.use(logger("dev"));

  // To have access to `body` property in the request
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  
  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
      },
      store: store,
      resave: true,
      saveUninitialized: true,
    })
  );

  //Get the GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET from Google Developer Console
  const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
  const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

  const GoogleStrategy = require("passport-google-oauth20").Strategy;
  // console.log(process.env.GOOGLE_CALLBACK_URL);

  passport.use(
    new GoogleStrategy(
      {
        clientID: `${process.env.GOOGLE_CLIENT_ID}`,
        clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`,
        callbackURL: `${process.env.GOOGLE_CALLBACK_URL}`,
        passReqToCallback: true,
        scope: ['profile', 'email'],
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

  passport.serializeUser(function (user, done) {
    // console.log("A", user);
    return done(null, user);
  });

  passport.deserializeUser(function (user, done) {
    // console.log("B", user);
    return done(null, user);
  });

  app.use(passport.initialize()); // init passport on every route call
  app.use(passport.session()); //allow passport to use "express-session"

};
