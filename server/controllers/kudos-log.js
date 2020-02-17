const {
  getRandomOrganization,
  generateRandomKudos
} = require('../utils/seed-generator');
const KudosLog = require("../models/kudos-logs");
const User = require("../models/users");
const { 
  errorHandler,
  dataHandler
} = require("../utils/responseHandler");

module.exports.logKudos = async function(req, res) {
  try {
    const logInfo = req.body;
    logInfo.receivedOn = new Date();
  
    const response = await KudosLog.create(logInfo);
    return dataHandler({
      status: 201,
      data: response.toClient(),
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

    return dataHandler({
      status: 200,
      data: response.toClient(),
    }, req, res);
  } catch(err) {
    return errorHandler({
      status: 500,
      error: `Server error: ${err.message}.`,
    }, req, res);
  }
};

module.exports.createLogs = async function(req, res) {
 try {
   const org = getRandomOrganization();
   const users = await User.find({ org, kudos: { $gt : 0 }
    }, '_id').limit(2);
  
    if (users.length < 2) throw new Error('Not enough users');
    
    const [ receiverId, giverId ] = [...users];
    const logInfo = generateRandomKudos(receiverId, giverId);
    const response = await KudosLog.create(logInfo);
    
    return dataHandler({
      status: 201,
      data: response.toClient(),
    }, req, res);

 } catch (err) {
    return errorHandler({
      status: 500,
      error: `Server error: ${err.message}.`,
    }, req, res);
 }
}