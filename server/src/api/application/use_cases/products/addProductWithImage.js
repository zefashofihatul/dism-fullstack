const InvariantError = require('../../../middlewares/exceptions/InvariantError');

const addProductWithImage = ({
  id,
  name,
  description,
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
  if (!name || !description || !price || !details) {
    throw new InvariantError(
      'Name, description, price & details cant be empty'
    );
  }

  return dbRepository
    .findProductByProperty({
      name,
      descriptions: description,
    })
    .then((result) => {
      if (result.length) {
        throw new InvariantError('Product Name / Description already exist');
      }

      return dbRepository.addWithImage({
        id,
        name,
        descriptions: description,
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
