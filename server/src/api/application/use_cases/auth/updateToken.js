const InvariantError = require('../../../middlewares/exceptions/InvariantError');

const updateToken = (dbRepository, authService, refreshToken) => {
  if (!refreshToken) {
    throw new InvariantError('refresh token cannot be empty');
  }

  const dataToken = authService.verify(refreshToken);
  const { id, idRole, username, email } = dataToken.user;
  const payload = {
    user: {
      id,
      idRole,
      username,
      email,
    },
  };

  return authService.generateToken(payload);
};

module.exports = updateToken;
