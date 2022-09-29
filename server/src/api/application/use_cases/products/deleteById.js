const fs = require('fs');

const deleteById = (dbRepository, id) => {
  console.log(id);
  return dbRepository.findProductById(id).then((result) => {
    result.dataValues.productImage.forEach((value) => {
      if (value) {
        fs.unlinkSync(
          __basedir +
            `/resources/static/assets/uploads/${value.dataValues.name}`
        );
      }
    });
    return dbRepository.deleteProduct(id);
  });
};
module.exports = deleteById;
