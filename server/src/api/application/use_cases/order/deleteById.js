const AuthorizationError = require('../../../middlewares/exceptions/AuthorizationError');

const deleteById = (dbRepository, idOrder, idUser) => {
  return dbRepository.findById(idOrder).then((result) => {
    if (result.dataValues.idUser !== idUser) {
      throw new AuthorizationError('You cannot access this resource');
    }
    return dbRepository.deleteOrder(idOrder);
  });
};
module.exports = deleteById;
