module.exports.errorHandler = function (err, req, res) {
  const {
    error, status
  } = err;
  const resStatus = status || 500;
  // return res
  //   .status(resStatus)
  //   .render('error' , {
  //     error: error || 'Some error occured',
  //   })

  return res
    .status(resStatus)
    .json({
      error: error || 'Some error occured',
    });
};

module.exports.dataHandler = function (resp, req, res) {
  const {
    data, status
  } = resp;
  const resStatus = status || 200;
  return res
    .status(resStatus)
    .json({
      data: data,
      error: null
    });
};

