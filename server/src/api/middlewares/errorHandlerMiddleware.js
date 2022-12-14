/* eslint-disable no-param-reassign */
// eslint-disable-next-line no-unused-vars
const errorHandlerMiddleware = (err, req, res, next) => {
  err.statusCode = err.statusCode || 404;
  if (err.name === 'JsonWebTokenError') {
    return res.status(400).json({
      status: 'Fail',
      message: `JsonWebToken Error: ${err.message}`,
    });
  }
  if (err.name === 'SequelizeDatabaseError') {
    return res.status(400).json({
      status: 'Fail',
      message: `Error when inputing to database: ${err.message}`,
    });
  }
  if (err.name === 'SequelizeValidationError') {
    return res.status(400).json({
      status: 'Fail',
      message: err.errors.map((e) => e.message),
    });
  }
  if (err.code === 'ENOENT') {
    return res.status(404).json({
      status: 'Fail',
      message: 'Error when access server data local',
    });
  }
  return err.customMessage || err.message
    ? res.status(err.statusCode).json({
        status: 'Fail',
        message: err.customMessage || err.message,
      })
    : res.status(err.statusCode).json({ status: err.statusCode, message: err });
};

module.exports = errorHandlerMiddleware;
