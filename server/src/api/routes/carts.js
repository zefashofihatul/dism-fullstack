const cartsController = require('../controllers/carts/cartsController');
const productsDbRepositoryPostgres = require('../database/postgres/repositories/cartsDbRepositoryPostgres');
const authMiddleware = require('../middlewares/authMiddleware');

const cartsRouter = (express) => {
  const router = express.Router();

  // load controller with dependencies
  const controller = cartsController(productsDbRepositoryPostgres);
  // Routes Endpoint "/"
  router
    .route('/')
    .get(authMiddleware, controller.fetchAllCartsByUserId)
    .post(authMiddleware, controller.addNewCarts);

  // Router Endpoint "/:idCart"
  router
    .route('/:idCart')
    .get(authMiddleware, controller.fetchCartsById)
    .put(authMiddleware, controller.updateCartItem)
    .delete(authMiddleware, controller.deleteCart);

  return router;
};

module.exports = cartsRouter;
