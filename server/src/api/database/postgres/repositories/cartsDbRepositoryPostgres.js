// Import Products Model
const { Carts, Products } = require('../models');

const productsDbRepositoryPostgres = () => {
  const findAllCarts = () => {
    // Add Proper validation or Add sequelize Validator
    return Carts.findAll();
  };

  return {
    findAllCarts,
  };
};

module.exports = productsDbRepositoryPostgres;
