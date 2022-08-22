// Import model
const { Product_Image } = require('../models');

const productImageDbRepositoryPostgres = () => {
  const findImage = (id) => {
    return Product_Image.findByPk(id);
  };

  const findAllImage = () => {
    return Product_Image.findAll();
  };

  const add = (productData) => {
    return Product_Image.bulkCreate(productData);
  };

  return {
    add,
    findImage,
    findAllImage,
  };
};

module.exports = productImageDbRepositoryPostgres;
