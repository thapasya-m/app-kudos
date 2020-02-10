const mongoose = require("../db/db-connector");
const User = require("./users");

const kudosLogSchema = new mongoose.Schema({
  receiverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
    required: true
  },
  giverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  receivedOn: Date
});

const KudosLog = mongoose.model("Kudos-Log", kudosLogSchema);

module.exports = KudosLog;
