const InvariantError = require('../../../middlewares/exceptions/InvariantError');

const addCart = (dbRepository, dataCart) => {
  return dbRepository
    .findByProperty({ idProduct: dataCart.idProduct, color: dataCart.color })
    .then((result) => {
      if (result.length) {
        throw new InvariantError('Product Has been on Cart');
      }
      return dbRepository.add(dataCart);
    });
};

module.exports = addCart;
