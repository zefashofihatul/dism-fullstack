const addUser = require('../../application/use_cases/users/addUser');

const InvariantError = require('../../middlewares/exceptions/InvariantError');

const usersController = (
  usersDbRepositoryPostgres,
  authServiceImpl,
  authServiceInterface
) => {
  const dbRepository = usersDbRepositoryPostgres();
  const authService = authServiceInterface(authServiceImpl());
  const fetchUserByProperty = () => {};
  const fetchUserById = () => {};
  const addNewUser = (req, res, next) => {
    addUser(dbRepository, authService, {
      id: 'iniIdKocak123',
      idRole: 1,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      createdAt: new Date().now,
      updatedAt: new Date().now,
    })
      .then((result) => {
        if (!result.dataValues) {
          throw new InvariantError('Fail for Adding User');
        }
        return res.status(200).send({
          status: 'Success',
          message: 'Success for Adding new Account',
          data: result.dataValues,
        });
      })
      .catch((err) => next(err));
  };

  return {
    fetchUserById,
    fetchUserByProperty,
    addNewUser,
  };
};
module.exports = usersController;
