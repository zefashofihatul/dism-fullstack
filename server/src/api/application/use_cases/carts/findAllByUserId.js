const findAllByUserId = (dbRepository, property) => {
  return dbRepository.findByProperty(property);
};
module.exports = findAllByUserId;
