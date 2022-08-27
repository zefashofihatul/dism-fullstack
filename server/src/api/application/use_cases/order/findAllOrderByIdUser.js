const findAllOrderByIdUser = (dbRepository, idUser) => {
  return dbRepository.findByProperty({
    idUser: idUser,
  });
};
module.exports = findAllOrderByIdUser;
