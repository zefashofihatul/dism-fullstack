const updateById = (dbRepository, id, dataUpdate) => {
  return dbRepository.updateProduct(id, dataUpdate);
};

module.exports = updateById;
