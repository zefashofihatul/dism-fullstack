// Importing use case
const findAll = require('../../application/use_cases/images/findAll');
const findById = require('../../application/use_cases/images/findByImage');
const addImages = require('../../application/use_cases/images/addImages');
const deleteImageById = require('../../application/use_cases/images/deleteImageById');
const InvariantError = require('../../middlewares/exceptions/InvariantError');

const productImageController = (productImageDbRepositoryPostgres) => {
  // Load Repository
  const dbRepository = productImageDbRepositoryPostgres();

  const fetchAllImage = (req, res, next) => {
    findAll(dbRepository);
  };

  const addNewImages = (req, res, next) => {
    addImages(
      dbRepository,
      req.files.map((value) => {
        return {
          id: `${uuidv4()}-${value.fieldname}`,
          idProduct,
          name: value.fieldname,
          src: `${value.destination}${value.filename}`,
        };
      })
    );
  };

  const deleteImage = (req, res, next) => {
    const imageId = req.params.idImage;
    deleteImageById(dbRepository, imageId)
      .then((value) => {
        const dataReturn = value.dataValues;
        console.log(value);
        if (value) {
          return res.status(200).send({
            status: 'success',
            message: `Product image with id ${imageId} was Deleted`,
            imageId: imageId,
          });
        } else {
          throw new InvariantError('Image Fail to delete');
        }
      })
      .catch((err) => {
        next(err);
      });
  };

  return {
    addNewImages,
    fetchAllImage,
    deleteImage,
  };
};

module.exports = productImageController;
