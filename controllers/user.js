const User = require("../models/users");
const { errorHandler } = require("../utils/responseHandler");
const generateRandomUser = require("../utils/constants");

module.exports.getUsersByOrganizationId = async function(req, res) {
  const { id } = req.params;
  try {
    const response = await User.find({ organizationId: id });
    res.status(200).json({ data: response, error: null });
  } catch(err) {
    return errorHandler({
      status: 500,
      error: `Server error: ${err.message}.`,
    }, req, res);
  }
};

module.exports.create = async function(req, res) {
  const response = await User.create(generateRandomUser());
  res.status(201).json({ data: response, error: null });
}