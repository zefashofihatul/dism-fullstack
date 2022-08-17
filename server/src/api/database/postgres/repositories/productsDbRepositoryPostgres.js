// Import Products Model
const { Products } = require('../models');

const productsDbRepositoryPostgres = () => {
  const findAllProducts = () => {
    return Products.findAll();
  };

  const addNewProduct = (productData) => {
    // Add Proper validation from library
    return Products.create(productData);
  };

  return {
    addNewProduct,
    findAllProducts,
  };
};

module.exports = productsDbRepositoryPostgres;
