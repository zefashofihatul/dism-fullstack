// Import Products Model
const { Products } = require('../models');

const productsDbRepositoryPostgres = () => {
  const findAllProducts = () => {
    return Products.findAll();
  };

  const findProductById = (id) => {
    return Products.findAll({
      where: { id: id },
    });
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

  const updateProduct = ({ id, dataUpdate }) => {
    return Products.update(dataUpdate, {
      where: { id: id },
      returning: true,
    });
  };

  return {
    add,
    findProductById,
    findAllProducts,
    deleteProduct,
    updateProduct,
  };
};

module.exports = productsDbRepositoryPostgres;
