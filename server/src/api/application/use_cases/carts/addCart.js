const InvariantError = require('../../../middlewares/exceptions/InvariantError');

const addCart = (dbRepository, dataCart) => {
  const { idProduct, color, quantity } = dataCart;
  if (!idProduct || !color || !quantity) {
    throw new InvariantError('idProduct, color, & quantity cannot be null');
  }
  return dbRepository
    .findByProperty({ idProduct: dataCart.idProduct })
    .then((result) => {
      if (result.length) {
        throw new InvariantError('Product Has been on Cart');
      }
      return dbRepository.add(dataCart);
    });
};

module.exports = addCart;
