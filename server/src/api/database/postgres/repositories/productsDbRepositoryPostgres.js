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
    return Product.findByPk(id, {
      include: [
        {
          association: 'productImage',
        },
      ],
    });
  };

  const findProductByProperty = (property) => {
    return Product.findAll({
      where: property,
    });
  };

  const searchProductByName = ({ searchParam, limit, page, category }) => {
    return Product.findAndCountAll({
      offset: limit * page,
      limit: limit,
      order: [['updatedAt', 'DESC']],
      where: {
        name: { [Op.like]: '%' + searchParam + '%' },
        category: { [Op.like]: '%' + category + '%' },
      },
    });
  };

  const filterProductsByCategory = (filterParam, limit, page) => {
    return Product.findAndCountAll({
      offset: limit * page,
      limit: limit,
      order: [['updatedAt', 'DESC']],
      where: {
        category: filterParam,
      },
    });
  };

  const findAllPerPage = (limit, page) => {
    return Product.findAndCountAll({
      offset: limit * page,
      limit: limit,
      order: [['updatedAt', 'DESC']],
      include: [
        {
          association: 'productImage',
        },
      ],
    });
  };

  const add = (productData) => {
    // Add Proper validation or Add sequelize Validator
    return Product.create(productData);
  };

  const addWithImage = (productData) => {
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
    console.log(id, dataUpdate);
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
    filterProductsByCategory,
  };
};

module.exports = productsDbRepositoryPostgres;
