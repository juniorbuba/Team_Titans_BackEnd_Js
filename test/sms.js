const { chai, server, should } = require("./testConfig");
const SmsModel = require("../models/SmsModel");

/**
 * Test cases to test all the authentication APIs
 * Covered Routes:
 * (1) SEND SMS
 */

describe("SMS", () => {
  // Before each test we empty the database
  before((done) => {
    SmsModel.deleteMany({}, (err) => {
      done();
    });
  });

  // Prepare data for testing
  const testData = {
    phonenumber: "",
  };

  /*
   * Test the /POST route
   */
  describe("/POST Send", () => {
    it("It should send sms to phonenumber", (done) => {
      chai
        .request(server)
        .post("/api/sms/send/:phone")
        .send({ testData })
        .end((err, res) => {
          res.should.have.status(201);
          done();
        });
    });
  });
});
