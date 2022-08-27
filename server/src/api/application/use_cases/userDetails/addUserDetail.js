const InvariantError = require('../../../middlewares/exceptions/InvariantError');

const addUserDetail = (dbRepository, dataUserDetail) => {
  const { fullname, gender, dateOfBirth, newslater } = dataUserDetail;
  return dbRepository
    .findByProperty({
      idUser: dataUserDetail.idUser,
    })
    .then((result) => {
      if (result.length) {
        throw new InvariantError('Profile user exist already');
      }
      return dbRepository.add(dataUserDetail);
    });
};

module.exports = addUserDetail;
