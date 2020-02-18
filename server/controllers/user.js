const User = require("../models/users");
const Organization = require("../models/organizations");
const { errorHandler, dataHandler } = require("../utils/responseHandler");
const { generateRandomUser, generateRandomOrganizations } = require("../utils/seed-generator");

module.exports.getUsersByOrganizationId = async function(req, res) {
  const { id } = req.params;
  try {
    const { excludeUser } = req.query;
    const response = (await User.find({
      org: id,
      _id: { $ne: excludeUser }
    })).map(x => x.toClient());

    return dataHandler(
      {
        data: response
      },
      req,
      res
    );
  } catch (err) {
    return errorHandler(
      {
        error: `Server error: ${err.message}.`
      },
      req,
      res
    );
  }
};

module.exports.create = async function(req, res) {
  try {
    const response = await User.create(generateRandomUser());
    return dataHandler(
      {
        status: 201,
        data: response
      },
      req,
      res
    );
  } catch (err) {
    return errorHandler(
      {
        status: 500,
        error: `Server error: ${err.message}.`
      },
      req,
      res
    );
  }
};
