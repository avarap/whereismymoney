// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv").config();

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

// 👇 Start handling routes here
const indexRoutes = require("./routes/index.routes");
app.use(indexRoutes);

const googleAuth = require("./routes/auth.routes");
app.use("/auth", googleAuth);

const cashFlow = require("./routes/cashflow.routes");
app.use("/cashflow", cashFlow);

// const friendList = require("./routes/friendList.routes");
// app.use("/friendlist", friendList);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
