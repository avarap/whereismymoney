require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const session = require("express-session");
const { MONGO_URI } = require("../db");
const MongoDBStore = require("connect-mongodb-session")(session);
const passport = require("passport");
const { initializePassport } = require("./passport");

const app = express();

const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || "http://localhost:3000";

console.log(MONGO_URI);
//DBStore
const store = new MongoDBStore({ uri: MONGO_URI, collection: "sessions", });

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

  initializePassport();
console.log(process.env.NODE_ENV === "production" ? "none" : "lax");
  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      cookie: {
        httpOnly: true,
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
        maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
        secure: process.env.NODE_ENV === "production",
      },
      store: store,
      resave: true,
      saveUninitialized: false,
    })
  );

  app.use(passport.initialize()); // init passport on every route call
  app.use(passport.session()); //allow passport to use "express-session"
};
