const User = require("../models/users");
const { 
  errorHandler,
  responseHandler
} = require("../utils/responseHandler");
const generateRandomUser = require("../utils/constants");

module.exports.getUsersByOrganizationId = async function(req, res) {
  const { id } = req.params;
  try {
    const response = await User.find({ organizationId: id });
    return responseHandler({
      data: response,
    }, req, res);
  } catch(err) {
    return errorHandler({
      status: 500,
      error: `Server error: ${err.message}.`,
    }, req, res);
  }
};

module.exports.create = async function(req, res) {
  try {
    const response = await User.create(generateRandomUser());
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
}