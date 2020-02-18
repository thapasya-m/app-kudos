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
  org: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Organization",
    required: true
  },
  kudos: {
    type: Number,
    default: 3,
    max: 3,
    min: 0
  },
  kudosLastUpdated: Date
});

userSchema.method("toClient", function() {
  var obj = this.toObject();
  //Rename fields
  obj.id = obj._id;
  delete obj._id;
  delete obj.__v;
  return obj;
});
const User = mongoose.model("User", userSchema);

module.exports = User;
