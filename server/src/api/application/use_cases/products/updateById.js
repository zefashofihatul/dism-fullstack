const InvariantError = require('../../../middlewares/exceptions/InvariantError');

const updateById = (dbRepository, dbRepositoryImage, id, dataUpdate) => {
  return dbRepository.updateProduct(id, dataUpdate).then(async (result) => {
    if (result[0]) {
      if (dataUpdate.productImage.length > 0) {
        const imageResult = await dbRepositoryImage.add(
          dataUpdate.productImage
        );
        return {
          imageResult: imageResult[0].dataValues,
          productResult: result[1][0].dataValues,
        };
      }
      return {
        imageResult: [],
        productResult: result[1][0].dataValues,
      };
    } else {
      throw new InvariantError('Update Product Fail');
    }
  });
};

module.exports = updateById;
