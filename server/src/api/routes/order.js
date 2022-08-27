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
    .get(authMiddleware, controller.fetchAllOrderByIdUser);

  // Order Endpoint "/:idOrder"
  router
    .route('/:idOrder')
    .get(authMiddleware, controller.fetchOrderById)
    .put(authMiddleware, controller.updateOrderByIdUser);

  return router;
};

module.exports = orderRouter;
