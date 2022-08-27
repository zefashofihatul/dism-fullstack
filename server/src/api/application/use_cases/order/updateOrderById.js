const updateOrderById = (dbRepository, idOrder, dataUpdate) => {
  return dbRepository.updateById(idOrder, dataUpdate);
};

module.exports = updateOrderById;
