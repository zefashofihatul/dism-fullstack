const cartsController = require('../controllers/carts/cartsController');
const productsDbRepositoryPostgres = require('../database/postgres/repositories/cartsDbRepositoryPostgres');

const cartsRouter = (express) => {
  const router = express.Router();

  // load controller with dependencies
  const controller = cartsController(productsDbRepositoryPostgres);
  // Routes Endpoint "/"
  router.route('/').get(controller.fetchAllCarts);

  // Router Endpoint "/:idProduct"

  return router;
};

module.exports = cartsRouter;
