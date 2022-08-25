const InvariantError = require('../../../middlewares/exceptions/InvariantError');

const addProductWithImage = ({
  id,
  name,
  shortDescription,
  price,
  color,
  dimensions,
  details,
  materials,
  productImage,
  category,
  createdAt,
  updatedAt,
  dbRepository,
}) => {
  return dbRepository
    .findProductByProperty({
      name,
      shortDescription,
    })
    .then((result) => {
      if (result.length) {
        throw new InvariantError(
          'Product Name / Short description already exist'
        );
      }
      return dbRepository.addWithImage({
        id,
        name,
        shortDescription,
        price,
        color,
        dimensions,
        details,
        materials,
        category,
        productImage,
        createdAt,
        updatedAt,
      });
    });
};

module.exports = addProductWithImage;
