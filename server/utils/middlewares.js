var mongoose = require('mongoose');

module.exports.verifyId = function(req, res, next) {
  const { id } = req.params;
  try {
    if(mongoose.Types.ObjectId.isValid(id)) {
      next();
    } else {
      return res.status(400).json({ msg: `Given param Id ${id} is invalid` });
    }
  } catch(err) {
    return res.status(500).json({ msg: err.message });
  }
}