const moment = require("moment");
const User = require("../models/users");
const { errorHandler, dataHandler } = require("../utils/responseHandler");

const DEFAULT_KUDOS = 3;

module.exports.signin = async function(req, res) {
  const { username, password } = req.body;
  const response = await User.findOne({ username }).populate("org");

  if (!response) {
    return errorHandler(
      {
        error: "No user with given username exists.",
        status: 400
      },
      req,
      res
    );
  }

  if (response.password !== password) {
    return errorHandler(
      {
        error: `Wrong password for ${username}.`,
        status: 401
      },
      req,
      res
    );
  } else {
    var now = moment();
    var lastSignedInAt = moment(response.kudosLastUpdated);
    var isThisWeek = now.week() === lastSignedInAt.week();

    if (!isThisWeek) {
      response.kudosLastUpdated = now;
      response.kudos = DEFAULT_KUDOS;
      const updatedUser = (await User.updateOne({ _id: response._id 
        }, response, { new :true })).toClient();
      return dataHandler(
        {
          data: updatedUser
        },
        req,
        res
      );
    } else {
      return dataHandler(
        {
          data: response.toClient()
        },
        req,
        res
      );
    }
  }
};
