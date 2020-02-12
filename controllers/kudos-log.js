const KudosLog = require("../models/kudos-logs");
const { 
  errorHandler,
  responseHandler
} = require("../utils/responseHandler");

module.exports.logKudos = async function(req, res) {
  try {
    const logInfo = req.body;
    logInfo.receivedOn = new Date();
  
    const response = await KudosLog.create(logInfo);
    return responseHandler({
      status: 201,
      data: response,
    }, req, res);
  } catch(err) {
    return errorHandler({
      status: 500,
      error: `Server error: ${err.message}.`,
    }, req, res);
  }
};

module.exports.getLogs = async function(req, res) {
  try{
    const { id } = req.params;
    const response = await KudosLog.find({ receiverId: id });
    return responseHandler({
      status: 200,
      data: response,
    }, req, res);
  } catch(err) {
    return errorHandler({
      status: 500,
      error: `Server error: ${err.message}.`,
    }, req, res);
  }
};
