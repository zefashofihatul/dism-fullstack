const orderController = require('../controllers/order/orderController');
const orderDbRepositoryPostgres = require('../database/postgres/repositories/orderDbRepositoryPostgres');
const authMiddleware = require('../middlewares/authMiddleware');

const orderRouter = (express) => {
  const router = express.Router();

  // Load controller
  const controller = orderController(orderDbRepositoryPostgres);

  // Order Endpoint "/"
  router
    .route('/')
    .post(authMiddleware, controller.addNewOrder)
    .get(authMiddleware, controller.fetchAllOrder);

  // Order Endpoint "/:idOrder"
  router.route('/:idOrder').get(authMiddleware, controller.fetchOrderById);

  return router;
};

module.exports = orderRouter;
