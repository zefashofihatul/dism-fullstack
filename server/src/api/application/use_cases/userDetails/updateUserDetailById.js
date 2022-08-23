const updateUserDetailById = (dbRepository, idUser, dataUpdate) => {
  return dbRepository.updateById(idUser, dataUpdate);
};
module.exports = updateUserDetailById;
