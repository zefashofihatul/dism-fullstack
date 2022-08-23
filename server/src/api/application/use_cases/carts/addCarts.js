const addCarts = (dbRepository, dataCarts) => {
  return dbRepository.addBulk(dataCarts);
};
module.exports = addCarts;
