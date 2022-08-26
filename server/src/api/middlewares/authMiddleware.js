const authServiceImpl = require('../services/authServices');
const authServiceInterface = require('../application/services/authService');
const AuthorizationError = require('./exceptions/AuthorizationError');

const authMiddleware = (req, res, next) => {
  // Get token from header
  const token = req.header('Authorization');
  const authService = authServiceInterface(authServiceImpl());

  if (!token) {
    throw new AuthorizationError('No access token found');
  }

  if (token.split(' ')[0] !== 'Bearer') {
    throw new AuthorizationError('Invalid access token format');
  }

  try {
    const decoded = authService.verify(token.split(' ')[1]);
    req.user = decoded.user;
    next();
  } catch (err) {
    throw new AuthorizationError('Token is not valid');
  }
};

module.exports = authMiddleware;
