const User = require("../models/users");

module.exports.getUsersByOrganizationId = async function(req, res) {
  const { organizationId } = req.params;
  const response = await User.find({ organizationId });
  res.status(200).json({ data: response, error: null });
};
