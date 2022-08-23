const authServiceImpl = require('../services/authServices');
const authServiceInterface = require('../application/services/authService');

const authMiddleware = (req, res, next) => {
  // Get token from header
  const token = req.header('Authorization');
  const authService = authServiceInterface(authServiceImpl());
  if (!token) {
    throw new Error('No access token found');
  }
  if (token.split(' ')[0] !== 'Bearer') {
    throw new Error('Invalid access token format');
  }
  try {
    const decoded = authService.verify(token.split(' ')[1]);
    console.log(decoded);
    req.user = decoded.user;
    next();
  } catch (err) {
    throw new Error('Token is not valid');
  }
};

module.exports = authMiddleware;
