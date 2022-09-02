import { useRoutes } from 'react-router-dom';
import { Landing } from 'pages/landing-page';
import { protectedRoutes } from './protected';
import { Forbidden } from 'pages/forbidden';
import { publicRoutes } from './public';
import { NotFound } from 'pages/not-found';
import { useAuth } from 'lib/auth';
import { Dashboard } from 'pages/dashboard';

export const AppRoutes = () => {
  const auth = useAuth();

  const commonRoutes = [
    { path: '/', element: <Landing /> },
    { path: '*', element: <NotFound /> },
    { path: 'forbidden', element: <Forbidden /> }
  ];

  const routes = publicRoutes;

  const element = useRoutes([...routes, ...commonRoutes, ...protectedRoutes]);

  return <>{element}</>;
};
