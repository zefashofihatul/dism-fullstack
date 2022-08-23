const login = (email, password, dbRepository, authService) => {
  if (!email || !password) {
    const error = new Error('Email and password cannot be empty');
    error.statusCode = 401;
    throw error;
  }

  return dbRepository.findByProperty({ email }).then((user) => {
    if (!user.length) {
      const error = new Error('Invalid email or password');
      error.statusCode = 401;
      throw error;
    }

    const isMatch = authService.compare(password, user[0].dataValues.password);
    console.log(isMatch);
    if (!isMatch) {
      const error = new Error('Invalid email or password');
      error.statusCode = 401;
      throw error;
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
