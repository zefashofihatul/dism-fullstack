const paymentController = require('../controllers/payment/paymentController');
const paymentDbRepositoryPostgres = require('../database/postgres/repositories/paymentDbRepositoryPostgres');
const authMiddleware = require('../middlewares/authMiddleware');

const paymentRouter = (express) => {
  const router = express.Router();

  // Load controller
  const controller = paymentController(paymentDbRepositoryPostgres);

  // Payment Endpoint "/"
  router
    .route('/')
    .post(authMiddleware, controller.addNewPaymentMethod)
    .get(authMiddleware, controller.fetchAllPaymentMethod);

  // Payment Endpoint "/:idPayment"
  router
    .route('/:idPaymentMethod')
    .put(authMiddleware, controller.updatePaymentMethodById);

  return router;
};

module.exports = paymentRouter;
