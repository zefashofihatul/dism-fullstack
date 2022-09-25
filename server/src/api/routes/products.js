const productController = require('../controllers/products/productController');
const productsDbRepositoryPostgres = require('../database/postgres/repositories/productsDbRepositoryPostgres');

// Load Middleware
const uploadFiles = require('../middlewares/uploadFiles');
const authMiddleware = require('../middlewares/authMiddleware');
const adminAuthMiddleware = require('../middlewares/adminAuthMiddleware');

const productsRouter = (express) => {
  const router = express.Router();

  // load controller with dependencies
  const controller = productController(productsDbRepositoryPostgres);

  // Routes Endpoint "/"
  router
    .route('/')
    .get(authMiddleware, controller.fetchAllProductsPerPage)
    .post(
      [authMiddleware, adminAuthMiddleware, uploadFiles],
      controller.addNewProductWithImages
    );

  // Routes Endpoint "/image"
  router
    .route('/image')
    .post(
      [authMiddleware, adminAuthMiddleware, uploadFiles],
      controller.addNewProductWithImages
    );

  // Routes Endpoint "/:productId"
  router
    .route('/:productId')
    .get(authMiddleware, controller.fetchProductById)
    .delete([authMiddleware, adminAuthMiddleware], controller.deleteProductById)
    .put(
      [authMiddleware, adminAuthMiddleware, uploadFiles],
      controller.updateProductById
    );

  router
    .route('/search/:searchParam')
    .get(authMiddleware, controller.fetchProductByProperty);

  return router;
};

module.exports = productsRouter;
