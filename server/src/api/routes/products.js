const productController = require('../controllers/products/productController.js');
const productsDbRepositoryPostgres = require('../database/postgres/repositories/productsDbRepositoryPostgres.js');

const productsRouter = (express) => {
  const router = express.Router();

  // load controller with dependencies
  const controller = productController(productsDbRepositoryPostgres);

  router
    .route('/')
    .get(controller.fetchAllProducts)
    .post(controller.addNewProduct);

  router
    .route('/:productId')
    .get(controller.fetchProductById)
    .delete(controller.deleteProductById)
    .put(controller.updateProductById);

  return router;
};

module.exports = productsRouter;
