const AuthorizationError = require('../../../middlewares/exceptions/AuthorizationError');
const InvariantError = require('../../../middlewares/exceptions/InvariantError');

const findCartById = (dbRepository, idCart, idUser) => {
  return dbRepository.findById(idCart).then((result) => {
    if (!result) {
      throw new InvariantError(`Cart data with id: ${idCart} not Found`);
    }
    if (result.dataValues.idUser !== idUser) {
      throw new AuthorizationError('You cannot access this resource');
    }
    return result;
  });
};

module.exports = findCartById;
