import { AuthRoutes } from 'features/auth/routes';
import { CollectionsRoutes } from 'pages/collection/routes';
import { Landing } from 'pages/landing-page';
import { Navigate } from 'react-router';

export const publicRoutes = [
  {
    path: '/',
    element: <Landing />
  },
  {
    path: '/landing',
    element: <Navigate to="/" />
  },
  {
    path: '/auth/*',
    element: <AuthRoutes />
  },
  {
    path: '/collections/*',
    element: <CollectionsRoutes />
  }
];
