const findById = (dbRepository, id) => {
  return dbRepository.findImage(id);
};
module.exports = findById;
