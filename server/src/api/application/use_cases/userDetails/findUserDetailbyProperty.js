const AuthorizationError = require('../../../middlewares/exceptions/AuthorizationError');
const InvariantError = require('../../../middlewares/exceptions/InvariantError');

const findUserDetailByProperty = (dbRepository, idUser, property) => {
  return dbRepository.findByProperty(property).then((result) => {
    console.log(result);
    if (!result.length) {
      throw new InvariantError(`No Profile found`);
    }
    if (result[0].dataValues.idUser !== idUser) {
      throw new AuthorizationError('You cannot access this resource');
    }
    return result;
  });
};

module.exports = findUserDetailByProperty;
