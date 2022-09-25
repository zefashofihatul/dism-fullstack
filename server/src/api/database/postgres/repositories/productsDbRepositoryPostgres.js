// Import Products Model
const { Op } = require('sequelize');
const { Product, Product_Image } = require('../models');

const productsDbRepositoryPostgres = () => {
  const findAllProducts = () => {
    // Add Proper validation or Add sequelize Validator
    return Product.findAll();
  };

  const findProductById = (id) => {
    // Add Proper validation or Add sequelize Validator
    return Product.findByPk(id);
  };

  const findProductByProperty = (property) => {
    return Product.findAll({
      where: property,
    });
  };

  const searchProductByName = (property, limit, page) => {
    return Product.findAndCountAll({
      offset: limit * page,
      limit: limit,
      order: [['createdAt', 'DESC']],
      where: {
        name: { [Op.like]: '%' + property + '%' },
      },
    });
  };

  const findAllPerPage = (limit, page) => {
    return Product.findAndCountAll({
      offset: limit * page,
      limit: limit,
      order: [['createdAt', 'DESC']],
    });
  };

  const add = (productData) => {
    // Add Proper validation or Add sequelize Validator
    return Product.create(productData);
  };

  const addWithImage = (productData) => {
    console.log(productData);
    return Product.create(productData, {
      include: [
        {
          association: 'productImage',
        },
      ],
    });
  };

  const deleteProduct = (id) => {
    // Add Proper validation or Add sequelize Validator
    return Product.destroy({
      where: { id: id },
    });
  };

  const updateProduct = (id, dataUpdate) => {
    // Add Proper validation or Add sequelize Validator
    return Product.update(dataUpdate, {
      where: { id: id },
      returning: true,
    });
  };

  return {
    add,
    addWithImage,
    findProductByProperty,
    findProductById,
    findAllProducts,
    findAllPerPage,
    searchProductByName,
    deleteProduct,
    updateProduct,
  };
};

module.exports = productsDbRepositoryPostgres;
