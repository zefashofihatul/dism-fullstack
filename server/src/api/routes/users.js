const usersController = require('../controllers/users/usersController');
const userDetailController = require('../controllers/userDetail/userDetailController');
const userDetailDbRepositoryPostgres = require('../database/postgres/repositories/userDetailDbRepositoryPostgres');
const usersDbRepositoryPostgres = require('../database/postgres/repositories/usersDbRepositoryPostgres');
const authServiceInterface = require('../application/services/authService');
const authServiceImpl = require('../services/authServices');
const authMiddleware = require('../middlewares/authMiddleware');

const usersRoutes = (express) => {
  const router = express.Router();

  // Load User Controller
  const controllers = usersController(
    usersDbRepositoryPostgres,
    authServiceImpl,
    authServiceInterface
  );

  // Load detail user controller
  const detailController = userDetailController(userDetailDbRepositoryPostgres);

  // Get endpoint
  router
    .route('/:id')
    .get(authMiddleware, controllers.fetchUserById)
    .post(authMiddleware, detailController.addNewUserDetail)
    .put(authMiddleware, detailController.updateUserDetail);

  // Sign up with endpoint "/users/"
  router.route('/').post(controllers.addNewUser);

  return router;
};

module.exports = usersRoutes;
