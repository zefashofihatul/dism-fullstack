const AuthorizationError = require('../../../middlewares/exceptions/AuthorizationError');
const InvariantError = require('../../../middlewares/exceptions/InvariantError');

const findOrderById = (dbRepository, idOrder, idUser) => {
  return dbRepository.findById(idOrder).then((result) => {
    if (!result) {
      throw new InvariantError(`Order data with id: ${idOrder} not found`);
    }
    if (result.dataValues.idUser !== idUser) {
      throw new AuthorizationError('You cannot access this resource');
    }
    return dbRepository.findByIdWithNested(idOrder);
  });
};
module.exports = findOrderById;
