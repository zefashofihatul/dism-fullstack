const orderProductController = require('../controllers/orderProduct/orderProductController');
const orderProductDbRepositoryPostgres = require('../database/postgres/repositories/orderProductDbRepositoryPostgres');
const authMiddleware = require('../middlewares/authMiddleware');

const orderProductRouter = (express) => {
  const router = express.Router();

  // Load controller
  const controller = orderProductController(orderProductDbRepositoryPostgres);

  // Product Image Endpoint "/"
  router.route('/').post(authMiddleware, controller.addNewOrderProduct);

  return router;
};

module.exports = orderProductRouter;
