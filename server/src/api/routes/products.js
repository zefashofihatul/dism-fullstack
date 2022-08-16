import productController from '../controllers/products/productController.js';
import productsDbRepositoryPostgres from '../database/postgres/repositories/productsDbRepositoryPostgres.js';

export default function productsRouter(express) {
  const router = express.Router();

  // load controller with dependencies
  const controller = productController(productsDbRepositoryPostgres);

  // GET endpoints
  router.route('/').get(controller.fetchAllProducts);

  // POST endpoints

  // PUT endpoints

  // DELETE endpoints

  return router;
}
