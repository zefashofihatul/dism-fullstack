const productController = require('../controllers/products/productController');
const productsDbRepositoryPostgres = require('../database/postgres/repositories/productsDbRepositoryPostgres');

// Load Middleware
const uploadFiles = require('../middlewares/uploadFiles');
const authMiddleware = require('../middlewares/authMiddleware');

const productsRouter = (express) => {
  const router = express.Router();

  // load controller with dependencies
  const controller = productController(productsDbRepositoryPostgres);

  // Routes Endpoint "/"
  router
    .route('/')
    .get(authMiddleware, controller.fetchAllProductsPerPage)
    .post([authMiddleware, uploadFiles], controller.addNewProductWithImages);

  // Routes Endpoint "/image"
  router.route('/image').post(uploadFiles, controller.addNewProductWithImages);

  // Routes Endpoint "/:productId"
  router
    .route('/:productId')
    .get(controller.fetchProductById)
    .delete(controller.deleteProductById)
    .put([authMiddleware, uploadFiles], controller.updateProductById);

  return router;
};

module.exports = productsRouter;
