const findOrderById = (dbRepository, idUser) => {
  return dbRepository.findByIdWithNested(idUser);
};
module.exports = findOrderById;
