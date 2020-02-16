const moment = require('moment');
const User = require('../models/users');
const { errorHandler, dataHandler } = require('../utils/responseHandler');

const DEFAULT_KUDOS = 3;

module.exports.signin = async function(req, res) {
  const { username, password } = req.body;
  const response = await User.findOne({ username });

  if(!response) {
    return errorHandler({
      error: 'No user with given username exists.',
      status: 400,
    }, req, res);
  }

  if (response.password !== password) {
    return errorHandler({
      error: `Wrong password for ${username}.`,
      status: 401,
    }, req, res);
  } else {
    //check if this is first sign-in
    //of the week, updateDate and kudos
    var now = moment();
    var input = moment(response.kudosLastUpdated);
    var isThisWeek = (now.week() === input.week());
    
    if (!isThisWeek) {
      response.kudosLastUpdated = now;
      response.kudos = DEFAULT_KUDOS;
      await User.updateOne({_id: response._id}, response);
    }
    return dataHandler({
      data: {
        username,
        id: response._id,
        kudos: response.kudos,
        organizationId: response.organizationId
      }
    }, req, res);
  }
}