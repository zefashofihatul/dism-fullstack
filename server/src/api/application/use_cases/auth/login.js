const AuthenticationError = require('../../../middlewares/exceptions/AuthenticationError');

const login = (email, password, dbRepository, authService) => {
  if (!email || !password) {
    throw new AuthenticationError('Email and password cannot be empty');
  }
  return dbRepository.findByProperty({ email }).then((user) => {
    if (!user.length) {
      throw new AuthenticationError('Invalid email or password');
    }
    const isMatch = authService.compare(password, user[0].dataValues.password);
    if (!isMatch) {
      throw new AuthenticationError('Invalid email or password');
    }

    const payload = {
      user: {
        id: user[0].dataValues.id,
        idRole: user[0].dataValues.idRole,
        username: user[0].dataValues.username,
        email: user[0].dataValues.email,
      },
    };
    return authService.generateToken(payload);
  });
};

module.exports = login;
