const KudosLog = require("../models/kudos-logs");

module.exports.logKudos = async function(req, res) {
  const logInfo = req.body;
  logInfo.receivedOn = new Date();

  const response = await KudosLog.create(logInfo);
  res.status(201).json({ data: response, error: null });
};

module.exports.getLogs = async function(req, res) {
  const { receiverId } = req.params;
  const response = await KudosLog.find({ receiverId });
  res.status(200).json({ data: response, error: null });
};
