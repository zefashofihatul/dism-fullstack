const findUserDetailById = (dbRepository, idUser) => {
  return dbRepository.findById(idUser);
};

module.exports = findUserDetailById;
