const login = require('../../application/use_cases/auth/login');
const updateToken = require('../../application/use_cases/auth/updateToken');

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
      .then(({ token, user }) => {
        res.status(201).send({
          status: 'Success',
          refreshToken: token,
          user,
        });
      })
      .catch((err) => next(err));
  };

  const updateUserToken = (req, res, next) => {
    const { refreshToken } = req.body;
    const token = updateToken(dbRepository, authService, refreshToken);
    res.status(200).send({
      status: 'Success',
      data: {
        accessToken: token,
      },
    });
  };
  return {
    loginUser,
    updateUserToken,
  };
};

module.exports = authController;
