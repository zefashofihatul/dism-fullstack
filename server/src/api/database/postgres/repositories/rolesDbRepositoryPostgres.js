const { Roles } = require('../models');

const rolesDbRepositoryPostgres = () => {
  const findAllMethod = () => {
    return Roles.findAll();
  };
  return {
    findAllMethod,
  };
};

module.exports = rolesDbRepositoryPostgres;
