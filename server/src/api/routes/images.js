const productImageController = require('../controllers/productImage/productImage');
const productImageDbRepositoryPostgres = require('../database/postgres/repositories/productImageDbRepositoryPostgres');

const imagesRoutes = (express) => {
  const router = express.Router();

  // Load controller
  const controller = productImageController(productImageDbRepositoryPostgres);

  // Product Image Endpoint "/"
  router.route('/').post(controller.addNewImages);

  router.route('/:idImage').delete(controller.deleteImage);

  return router;
};

module.exports = imagesRoutes;
