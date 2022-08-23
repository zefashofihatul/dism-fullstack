const orderProductController = require('../controllers/orderProduct/orderProductController');
const orderProductDbRepositoryPostgres = require('../database/postgres/repositories/orderProductDbRepositoryPostgres');

const orderProductRouter = (express) => {
  const router = express.Router();

  // Load controller
  const controller = orderProductController(orderProductDbRepositoryPostgres);

  // Product Image Endpoint "/"
  router.route('/').post();

  return router;
};

module.exports = orderProductRouter;
