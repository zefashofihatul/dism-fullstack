const productController = require('../controllers/products/productController');
const productsDbRepositoryPostgres = require('../database/postgres/repositories/productsDbRepositoryPostgres');

// Load Middleware
const uploadFiles = require('../middlewares/uploadFiles');
const authMiddleware = require('../middlewares/authMiddleware');
const adminAuthMiddleware = require('../middlewares/adminAuthMiddleware');
const { response } = require('express');

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

  router.route('/').get(authMiddleware, (res, req, next) => {
    response.sendFile();
  });

  router
    .route('/search')
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
    .get(authMiddleware, controller.fetchProductById)
    .delete([authMiddleware, adminAuthMiddleware], controller.deleteProductById)
    .put(
      [authMiddleware, adminAuthMiddleware, uploadFiles],
      controller.updateProductById
    );

  router
    .route('/filter/:filterParam')
    .get(authMiddleware, controller.fetchProductByCategory);

  return router;
};

module.exports = productsRouter;
