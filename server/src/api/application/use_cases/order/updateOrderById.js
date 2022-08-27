const AuthorizationError = require('../../../middlewares/exceptions/AuthorizationError');

const updateOrderById = (dbRepository, idOrder, idUser, dataUpdate) => {
  return dbRepository.findById(idOrder).then((result) => {
    if (result.dataValues.idUser !== idUser) {
      throw new AuthorizationError('You cannot access this resource');
    }
    return dbRepository.updateById(idOrder, dataUpdate);
  });
};

module.exports = updateOrderById;
