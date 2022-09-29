const productController = require('../controllers/products/productController');
const productsDbRepositoryPostgres = require('../database/postgres/repositories/productsDbRepositoryPostgres');
const productImagesDbRepositoryPostgres = require('../database/postgres/repositories/productImageDbRepositoryPostgres');

// Load Middleware
const uploadFiles = require('../middlewares/uploadFiles');
const authMiddleware = require('../middlewares/authMiddleware');
const adminAuthMiddleware = require('../middlewares/adminAuthMiddleware');

const productsRouter = (express) => {
  const router = express.Router();

  // load controller with dependencies
  const controller = productController(
    productsDbRepositoryPostgres,
    productImagesDbRepositoryPostgres
  );

  // Routes Endpoint "/"
  router
    .route('/')
    .get(authMiddleware, controller.fetchAllProductsPerPage)
    .post(
      [authMiddleware, adminAuthMiddleware, uploadFiles],
      controller.addNewProductWithImages
    );

  // Routes Endpoint "/search"
  router
    .route('/search/')
    .get(authMiddleware, controller.fetchProductByProperty);

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
    .put(
      [authMiddleware, adminAuthMiddleware, uploadFiles],
      controller.updateProductById
    )
    .get(authMiddleware, controller.fetchProductById)
    .delete(
      [authMiddleware, adminAuthMiddleware],
      controller.deleteProductById
    );

  router
    .route('/filter/:filterParam')
    .get(authMiddleware, controller.fetchProductByCategory);

  return router;
};

module.exports = productsRouter;
