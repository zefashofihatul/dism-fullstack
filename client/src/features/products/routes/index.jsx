import { Routes, Route, Navigate } from 'react-router-dom';
import { GridContent } from '../GridContent';
import { ListContent } from '../ListContent';
import { useAuth } from 'lib/auth';

export const SwitchContentRoute = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<GridContent />} />
      <Route path="list" element={<ListContent />} />
    </Routes>
  );
};
