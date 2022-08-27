const AuthorizationError = require('../../../middlewares/exceptions/AuthorizationError');
const InvariantError = require('../../../middlewares/exceptions/InvariantError');
const NotFoundError = require('../../../middlewares/exceptions/NotFoundError');

const updateCart = (dbRepository, idCart, idUser, dataCart) => {
  return dbRepository.updateItem(dataCart, idCart).then((result) => {
    if (!result[0]) {
      throw new NotFoundError(`Cart with id: ${idCart} fail to update`);
    }
    console.log(result[1][0], idUser);
    if (result[1][0].dataValues.idUser !== idUser) {
      throw new AuthorizationError('You cannot access this resource');
    }
  });
};
module.exports = updateCart;
