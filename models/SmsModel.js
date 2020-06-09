var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var SmsSchema = new Schema({}, { timestamps: true });

module.exports = mongoose.model("SMS", SmsSchema);
