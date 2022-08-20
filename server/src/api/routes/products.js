const productController = require('../controllers/products/productController');
const productsDbRepositoryPostgres = require('../database/postgres/repositories/productsDbRepositoryPostgres');

const productsRouter = (express) => {
  const router = express.Router();

  // load controller with dependencies
  const controller = productController(productsDbRepositoryPostgres);

  // Routes Endpoint "/"
  router
    .route('/')
    .get(controller.fetchAllProducts)
    .post(controller.addNewProduct);

  // Routes Endpoint "/:productId"
  router
    .route('/:productId')
    .get(controller.fetchProductById)
    .delete(controller.deleteProductById)
    .put(controller.updateProductById);

  return router;
};

module.exports = productsRouter;
