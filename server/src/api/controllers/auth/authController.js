const login = require('../../application/use_cases/auth/login');

const authController = (
  usersDbRepositoryPostgres,
  authServiceInterface,
  authServiceImpl
) => {
  const dbRepository = usersDbRepositoryPostgres();
  const authService = authServiceInterface(authServiceImpl());

  const loginUser = (req, res, next) => {
    const { email, password } = req.body;
    login(email, password, dbRepository, authService)
      .then((token) => res.json(token))
      .catch((err) => next(err));
  };
  return {
    loginUser,
  };
};

module.exports = authController;
