const mongoose = require("../db/db-connector");
const Organization = require("./organizations");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  organizationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Organization,
    required: true
  },
  kudos: {
    type: Number,
    default: 3,
    max: 3,
    min: 0
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
