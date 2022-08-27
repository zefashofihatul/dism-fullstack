const deleteById = (dbRepository, idOrder) => {
  return dbRepository.deleteOrder(idOrder);
};
module.exports = deleteById;
