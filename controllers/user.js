const User = require("../models/users");

const generateRandomUser = require("../utils/constants");

module.exports.getUsersByOrganizationId = async function(req, res) {
  const { id } = req.params;
  const response = await User.find({ organizationId: id });
  res.status(200).json({ data: response, error: null });
};

module.exports.create = async function(req, res) {
  const response = await User.create(generateRandomUser());
  res.status(201).json({ data: response, error: null });
}