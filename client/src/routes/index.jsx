import { Navigate, Route, Routes, useRoutes } from 'react-router-dom';
import { protectedRoutes } from './protected';
import { publicRoutes } from './public';
import { useAuth } from 'lib/auth';
import { Dashboard } from 'pages/dashboard';

export const AppRoutes = () => {
  const auth = useAuth();
  const element = useRoutes([...publicRoutes, ...protectedRoutes]);
  return <>{element}</>;
};
