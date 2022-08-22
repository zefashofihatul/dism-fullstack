// Importing use case
const findAll = require('../../application/use_cases/images/findAll');
const findById = require('../../application/use_cases/images/findByImage');
const addImages = require('../../application/use_cases/images/addImages');

const productImageController = (productImageDbRepositoryPostgres) => {
  // Load Repository
  const dbRepository = productImageDbRepositoryPostgres();

  const fetchOneImage = (req, res, next) => {
    findById(dbRepository, req.params.idImage);
  };

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

  return {
    addNewImages,
    fetchOneImage,
    fetchAllImage,
  };
};

module.exports = productImageController;
