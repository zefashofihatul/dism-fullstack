// Import Products Model
const { Products } = require('../models');

const productsDbRepositoryPostgres = () => {
  const findAllProducts = async () => {
    const productItems = await Products.findAll();
  };
  return {
    findAllProducts,
  };
};

module.exports = productsDbRepositoryPostgres;
