const deleteCartById = (dbRepository, idCart) => {
  return dbRepository.deleteCart(idCart);
};
module.exports = deleteCartById;
