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
  if (!name || !shortDescription || !price || !details) {
    throw new InvariantError(
      'Name, shortDescription, price & details cant be empty'
    );
  }

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
