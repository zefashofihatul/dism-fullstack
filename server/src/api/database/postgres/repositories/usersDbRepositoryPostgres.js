const { User } = require('../models');

const usersDbRepositoryPostgres = () => {
  const add = (dataUser) => {
    return User.create(dataUser);
  };
  const countAll = () => {};
  const findByProperty = (property) => {
    return User.findAll({
      where: property,
    });
  };
  const findById = () => {};

  return {
    add,
    countAll,
    findById,
    findByProperty,
  };
};

module.exports = usersDbRepositoryPostgres;
