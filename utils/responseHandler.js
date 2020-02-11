module.exports.errorHandler = function (err, req, res) {
  const {
    error, status
  } = err;
  const resStatus = status || 500;
  return res
    .status(resStatus)
    .json({
      error: error || 'Some error occured',
    });
};
