import { ProductsPages } from 'features/products/products-pages/productsPages';
import { Routes, Route, Navigate } from 'react-router-dom';

export const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Navigate to="products" />} />
      <Route path="products" element={<ProductsPages />} />
    </Routes>
  );
};
