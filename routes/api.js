var express = require("express");
var authRouter = require("./auth");
var smsRouter = require("./sms");

var app = express();

app.use("/auth/", authRouter);
app.use("/sms/", smsRouter);

module.exports = app;
