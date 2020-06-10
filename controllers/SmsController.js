// const SmsModel = require("../models/SmsModel");
// const apiResponse = require("../helpers/apiResponse");
// const auth = require("../middlewares/jwt");
// var mongoose = require("mongoose");
// mongoose.set("useFindAndModify", false);

// /**
//  * Retrieve Account Balance.
//  *
//  * @returns {Object}
//  */
// exports.getAccountBalance = [
//   function (req, res) {
//     try {
//     } catch (err) {
//       //throw error in json response with status 500.
//       return apiResponse.ErrorResponse(res, err);
//     }
//   },
// ];

// /**
//  * Send SMS.
//  *
//  * @param {string}   phone
//  *
//  * @returns {Object}
//  */
// exports.sendSms = [
//   function (req, res) {
//     try {
//     } catch (err) {
//       //throw error in json response with status 500.
//       return apiResponse.ErrorResponse(res, err);
//     }
//   },
// ];
const SmsModel = require("../models/SmsModel");
const apiResponse = require("../helpers/apiResponse");
const auth = require("../middlewares/jwt");
var mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);

const accountSid = "Twilio account sid";
const authToken = "Twilio auth token";
const client = require("twilio")(accountSid, authToken);

/**
 * Retrieve Account Balance.
 *
 * @returns {Object}
 */
exports.getAccountBalance = [
	function (req, res) {
		// eslint-disable-next-line no-empty
		try {
		} catch (err) {
			//throw error in json response with status 500.
			return apiResponse.ErrorResponse(res, err);
		}
	},
];

/**
 * Send SMS.
 *
 * @param {string}   phone
 *
 * @returns {Object}
 */
exports.sendSms = [
	function (req, res) {
		try {
			//Setup Twilo and send message
			client.messages.create({
				body: "This is a test text",
				from: "test twilio phone number",
				// eslint-disable-next-line no-undef
				to: request.params.phone
			})
				.then(message => console.log(message.sid));
			res.sendStatus(200);
		} catch (err) {
			//throw error in json response with status 500.
			return apiResponse.ErrorResponse(res, err);
		}
	},
];
