import { Navigate, Route, Routes, useRoutes } from 'react-router-dom';
import { protectedRoutes } from './protected';
import { publicRoutes } from './public';
import { useAuth } from 'features/auth/providers';
import { Dashboard } from 'pages/dashboard';

export const AppRoutes = () => {
  const element = useRoutes([...publicRoutes, ...protectedRoutes]);
  return <>{element}</>;
};
