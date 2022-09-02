import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Dashboard } from 'pages/dashboard';

import { useAuth } from 'lib/auth';
import { RequiredAuth } from './RequiredAuth';
import storage from 'utils/storage';
import { logout } from 'features/auth/api/logout';

const App = () => {
  return <h1>This Protected Routes</h1>;
};

export const protectedRoutes = [
  {
    path: '/app',
    element: <App />
  },
  {
    path: '/dashboard',
    element: (
      <RequiredAuth>
        <Dashboard />
      </RequiredAuth>
    )
  }
];
