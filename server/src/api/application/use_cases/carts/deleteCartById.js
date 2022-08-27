const AuthorizationError = require('../../../middlewares/exceptions/AuthorizationError');
const NotFoundError = require('../../../middlewares/exceptions/NotFoundError');

const deleteCartById = (dbRepository, idCart, idUser) => {
  return dbRepository.findById(idCart).then((result) => {
    console.log(result);
    if (!result) {
      throw new NotFoundError(`Order with id: ${idCart} Not Found`);
    }
    if (result.dataValues.idUser !== idUser) {
      throw new AuthorizationError('You cannot access this resource');
    }
    return dbRepository.deleteCart(idCart);
  });
};
module.exports = deleteCartById;
