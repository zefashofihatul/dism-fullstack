// Import Products Model
const { Products } = require('../models');

const productsDbRepositoryPostgres = () => {
  const findAllProducts = () => {
    // Add Proper validation or Add sequelize Validator
    return Products.findAll();
  };

  const findProductById = (id) => {
    // Add Proper validation or Add sequelize Validator
    return Products.findByPk(id);
  };

  const add = (productData) => {
    // Add Proper validation or Add sequelize Validator
    return Products.create(productData);
  };

  const deleteProduct = (id) => {
    // Add Proper validation or Add sequelize Validator
    return Products.destroy({
      where: { id: id },
    });
  };

  const updateProduct = ({ id, dataUpdate }) => {
    // Add Proper validation or Add sequelize Validator
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
