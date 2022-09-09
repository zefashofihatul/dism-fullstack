import { Routes, Route, Navigate } from 'react-router-dom';
import { Collection } from '../Collection';

export const CollectionsRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Navigate to="all" />} />
      <Route path="all" element={<Collection />} />
    </Routes>
  );
};
