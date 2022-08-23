const usersController = require('../controllers/users/usersController');
const usersDbRepositoryPostgres = require('../database/postgres/repositories/usersDbRepositoryPostgres');
const authServiceInterface = require('../application/services/authService');
const authServiceImpl = require('../services/authServices');
const authMiddleware = require('../middlewares/authMiddleware');

const usersRoutes = (express) => {
  const router = express.Router();

  // Load Controller
  const controllers = usersController(
    usersDbRepositoryPostgres,
    authServiceImpl,
    authServiceInterface
  );

  // Get endpoint
  router.route('/:id').get(authMiddleware, controllers.fetchUserById);

  // Sign up with endpoint "/users/"
  router.route('/').post(controllers.addNewUser);

  return router;
};

module.exports = usersRoutes;
