const findUserDetailById = (dbRepository) => {
  return dbRepository.findById(idUser);
};

module.exports = findUserDetailById;
