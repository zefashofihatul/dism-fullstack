import { Routes, Route, Navigate } from 'react-router-dom';
import { Register } from './Register';
import { Login } from './Login';
import { useAuth } from '../providers';

export const AuthRoutes = () => {
  const { checkToken } = useAuth();
  // if (checkToken()) {
  //   return <Navigate to="/dashboard" />;
  // }
  return (
    <Routes>
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
};
