const addUser = require('../../application/use_cases/users/addUser');
const findUserById = require('../../application/use_cases/users/findUserById');

const InvariantError = require('../../middlewares/exceptions/InvariantError');

const { v4: uuidv4 } = require('uuid');
const Sequelize = require('sequelize');

const usersController = (
  usersDbRepositoryPostgres,
  authServiceImpl,
  authServiceInterface
) => {
  const dbRepository = usersDbRepositoryPostgres();
  const authService = authServiceInterface(authServiceImpl());

  const getUser = (req, res, next) => {
    const { id, username, email, idRole } = req.user;
    return res.status(200).send({
      status: 'Success',
      user: {
        id,
        username,
        email,
        role: idRole,
      },
    });
  };

  const fetchUserById = (req, res, next) => {
    findUserById(dbRepository, req.params.id).then((result) => {
      if (!result.dataValues) {
        throw new InvariantError(`User with id : ${req.params.id}, Not Found`);
      }
      const { id, username, email, password, role } = result.dataValues;
      return res.status(200).send({
        status: 'Success',
        data: {
          id,
          username,
          email,
          role: role.name,
        },
      });
    });
  };

  const addNewUser = (req, res, next) => {
    const { username, email, password, idRole } = req.body;

    addUser(dbRepository, authService, {
      id: uuidv4(),
      idRole: idRole,
      username: username,
      email: email,
      password: password,
      createdAt: new Date().now,
      updatedAt: new Date().now,
    })
      .then((result) => {
        console.log(result.dataValues);
        if (!result.dataValues) {
          throw new InvariantError('Fail for Adding User');
        }
        return res.status(201).send({
          status: 'Success',
          message: 'Success for Adding new Account',
          data: result.dataValues,
        });
      })
      .catch((err) => {
        next(err);
      });
  };

  return {
    getUser,
    fetchUserById,
    addNewUser,
  };
};
module.exports = usersController;
