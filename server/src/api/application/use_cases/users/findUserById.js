const findUserById = (dbRepository, id) => {
  return dbRepository.findById(id);
};

module.exports = findUserById;
