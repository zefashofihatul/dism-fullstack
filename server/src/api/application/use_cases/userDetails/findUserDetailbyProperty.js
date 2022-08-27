const findUserDetailByProperty = (dbRepository, property) => {
  return dbRepository.findByProperty(property);
};

module.exports = findUserDetailByProperty;
