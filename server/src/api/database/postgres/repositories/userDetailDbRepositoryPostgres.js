// Import model
const { User_Detail } = require('../models');

const userDetailDbRepositoryPostgres = () => {
  const add = (dataUserDetail) => {
    return User_Detail.create(dataUserDetail);
  };

  const findById = (idUser) => {
    return User_Detail.findByPk(idUser);
  };

  const findByProperty = (property) => {
    return User_Detail.findAll({
      where: property,
    });
  };

  const updateById = (idUser, dataUpdate) => {
    return User_Detail.update(dataUpdate, {
      where: { idUser },
      returning: true,
    });
  };

  return {
    add,
    findById,
    findByProperty,
    updateById,
  };
};

module.exports = userDetailDbRepositoryPostgres;
