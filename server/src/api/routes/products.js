import productController from '../controllers/products/productController.js';
import productsDbRepository from '../database/postgres/repositories/productsDbRepository.js';

export default function productsRouter(express) {
  const router = express.Router();

  // load controller with dependencies
  const controller = productController(productsDbRepository);

  // GET endpoints
  router.route('/').get(controller.getAllProduct);

  // POST endpoints

  // PUT endpoints

  // DELETE endpoints

  return router;
}
