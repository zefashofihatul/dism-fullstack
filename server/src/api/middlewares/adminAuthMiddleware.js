const AuthenticationError = require('./exceptions/AuthenticationError');

const adminAuthMiddleware = (req, res, next) => {
  const roles = ['user', 'admin', 'moderator'];

  if (roles[parseInt(req.user.idRole)] !== 'admin') {
    throw new AuthenticationError(
      'You cannot Access this resource, Admin Only'
    );
  }

  next();
};

module.exports = adminAuthMiddleware;
