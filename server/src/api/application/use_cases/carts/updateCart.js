const updateCart = (dbRepository, idCart, dataCart) => {
  return dbRepository.updateItem(dataCart, idCart);
};
module.exports = updateCart;
