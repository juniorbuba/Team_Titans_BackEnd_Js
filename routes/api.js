var express = require("express");
var smsRouter = require("./sms");

var app = express();

app.use("/sms/", smsRouter);

module.exports = app;
