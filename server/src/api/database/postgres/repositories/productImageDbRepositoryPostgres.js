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

  const deleteImage = (imageId) => {
    return Product_Image.destroy({
      where: { id: imageId },
    });
  };

  return {
    add,
    findImage,
    findAllImage,
    deleteImage,
  };
};

module.exports = productImageDbRepositoryPostgres;
