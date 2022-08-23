const authController = require('../controllers/auth/authController');
const authServiceInterface = require('../application/services/authService');
const authServiceImpl = require('../services/authServices');
const usersDbRepositoryPostgres = require('../database/postgres/repositories/usersDbRepositoryPostgres');

const authRouter = (express) => {
  const router = express.Router();

  // Load Controller
  const controller = authController(
    usersDbRepositoryPostgres,
    authServiceInterface,
    authServiceImpl
  );

  // POST Endpoint
  router.route('/').post(controller.loginUser);

  return router;
};
module.exports = authRouter;
