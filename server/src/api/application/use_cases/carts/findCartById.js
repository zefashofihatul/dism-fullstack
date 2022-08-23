const findCartById = (dbRepository, idCart) => {
  return dbRepository.findById(idCart);
};

module.exports = findCartById;
