import { Navigate } from 'react-router-dom';
import { Dashboard } from 'pages/dashboard';

const App = () => {
  return <h1>This Protected Routes</h1>;
};

export const protectedRoutes = [
  {
    path: '/dashboard',
    element: <Dashboard />
  }
];
