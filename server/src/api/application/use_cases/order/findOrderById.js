const findOrderById = (dbRepository, idUser) => {
  return dbRepository.findById(idUser);
};
module.exports = findOrderById;
