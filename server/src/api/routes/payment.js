const paymentController = require('../controllers/payment/paymentController');
const paymentDbRepositoryPostgres = require('../database/postgres/repositories/paymentDbRepositoryPostgres');
const adminAuthMiddleware = require('../middlewares/adminAuthMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

const paymentRouter = (express) => {
  const router = express.Router();

  // Load controller
  const controller = paymentController(paymentDbRepositoryPostgres);

  // Payment Endpoint "/"
  router
    .route('/')
    .post([authMiddleware, adminAuthMiddleware], controller.addNewPaymentMethod)
    .get(authMiddleware, controller.fetchAllPaymentMethod);

  // Payment Endpoint "/:idPayment"
  router
    .route('/:idPaymentMethod')
    .put(
      [authMiddleware, adminAuthMiddleware],
      controller.updatePaymentMethodById
    )
    .delete(
      [authMiddleware, adminAuthMiddleware],
      controller.deletePaymentMethodById
    );

  return router;
};

module.exports = paymentRouter;
