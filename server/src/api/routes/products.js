const productController = require('../controllers/products/productController.js');
const productsDbRepositoryPostgres = require('../database/postgres/repositories/productsDbRepositoryPostgres.js');

const productsRouter = (express) => {
  const router = express.Router();

  // load controller with dependencies
  const controller = productController(productsDbRepositoryPostgres);

  // GET endpoints
  router.route('/').get(controller.fetchAllProducts);

  // POST endpoints

  // PUT endpoints

  // DELETE endpoints

  return router;
};

module.exports = productsRouter;
