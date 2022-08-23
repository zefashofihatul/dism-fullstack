const orderController = require('../controllers/orderProduct/orderProductController');
const orderDbRepositoryPostgres = require('../database/postgres/repositories/orderProductDbRepositoryPostgres');

const orderRouter = (express) => {
  const router = express.Router();

  // Load controller
  const controller = orderProductController(orderProductDbRepositoryPostgres);

  // Product Image Endpoint "/"
  router.route('/').post();

  return router;
};

module.exports = orderRouter;
