const mongoose = require("../db/db-connector");

const organizationSchema = new mongoose.Schema({
  name: String
});

const Organization = mongoose.model("Organization", organizationSchema);

module.exports = Organization;
