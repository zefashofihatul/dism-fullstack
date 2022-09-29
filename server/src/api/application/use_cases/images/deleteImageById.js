const fs = require('fs');
const InvariantError = require('../../../middlewares/exceptions/InvariantError');
const NotFoundError = require('../../../middlewares/exceptions/NotFoundError');

const deleteImageById = (dbRepository, imageId) => {
  console.log(imageId);
  return dbRepository.findImage(imageId).then((value) => {
    if (value) {
      fs.unlinkSync(
        __basedir + `/resources/static/assets/uploads/${value.dataValues.name}`
      );
      return dbRepository.deleteImage(imageId);
    } else {
      throw new NotFoundError(`Image with id : ${imageId}, Not Found`);
    }
  });
  // return dbRepository.deleteImage(imageId);
};

module.exports = deleteImageById;
