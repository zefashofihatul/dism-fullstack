const productImageController = require('../controllers/productImage/productImage');
const productImageDbRepositoryPostgres = require('../database/postgres/repositories/productImageDbRepositoryPostgres');

const imagesRoutes = (express) => {
  const router = express.Router();

  // Load controller
  const controller = productImageController(productImageDbRepositoryPostgres);

  // Product Image Endpoint "/:idImage"
  router.route('/:idImage').get(controller.fetchOneImage);

  // Product Image Endpoint "/"
  router.route('/').post(controller.addNewImages);

  return router;
};

module.exports = imagesRoutes;
