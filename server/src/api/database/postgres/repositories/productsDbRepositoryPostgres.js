// Import Products Model
const { Products } = require('../models');

const productsDbRepositoryPostgres = () => {
  const findAllProducts = () => {
    return Products.findAll();
  };
  return {
    findAllProducts,
  };
};

module.exports = productsDbRepositoryPostgres;
