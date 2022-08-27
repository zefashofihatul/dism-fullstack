const InvariantError = require('../../../middlewares/exceptions/InvariantError');

const addUser = (dbRepository, authService, dataUser) => {
  // Add Proper Validation
  if (
    !dataUser.username ||
    !dataUser.password ||
    !dataUser.email ||
    dataUser.idRole === null ||
    dataUser.idRole === ''
  ) {
    throw new InvariantError(
      'username, password, idRole and email fields cannot be empty'
    );
  }

  console.log(authService.encryptPassword(`${dataUser.password}`));

  const newUser = {
    id: dataUser.id,
    idRole: dataUser.idRole,
    username: dataUser.username,
    password: authService.encryptPassword(`${dataUser.password}`),
    email: dataUser.email,
    createdAt: dataUser.createdAt,
    updatedAt: dataUser.updatedAt,
  };

  return dbRepository
    .findByProperty({ username: dataUser.username })
    .then((userWithUsername) => {
      if (userWithUsername.length) {
        throw new InvariantError(
          `User with username ${dataUser.username} already exist`
        );
      }
      return dbRepository.findByProperty({ email: dataUser.email });
    })
    .then((userWithEmail) => {
      if (userWithEmail.length) {
        throw new InvariantError(
          `User with email ${dataUser.email} already exist`
        );
      }
      return dbRepository.add(newUser);
    });
};

module.exports = addUser;
