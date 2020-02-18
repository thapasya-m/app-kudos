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

kudosLogSchema.method("toClient", function() {
  var obj = this.toObject();
  //Rename fields
  obj.id = obj._id;
  delete obj._id;
  delete obj.__v;
  return obj;
});

const KudosLog = mongoose.model("Kudos-Log", kudosLogSchema);
module.exports = KudosLog;
