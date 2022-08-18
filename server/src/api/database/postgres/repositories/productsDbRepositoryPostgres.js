// Import Products Model
const { Products } = require('../models');

const productsDbRepositoryPostgres = () => {
  const findAllProducts = () => {
    return Products.findAll();
  };

  const add = (productData) => {
    // Add Proper validation from library
    return Products.create(productData);
  };

  const deleteProduct = (id) => {
    return Products.destroy({
      where: { id: id },
    });
  };

  return {
    add,
    findAllProducts,
    deleteProduct,
  };
};

module.exports = productsDbRepositoryPostgres;
