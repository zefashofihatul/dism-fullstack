import productsRouter from './products.js';

export default function routes(app, express) {
  app.use('/api/products', productsRouter(express));
  // app.use('/api/v1/users', userRouter(express));
  // app.use('/api/v1/login', authRouter(express));
}
