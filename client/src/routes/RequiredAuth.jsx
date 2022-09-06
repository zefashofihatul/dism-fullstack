import { useAuth } from 'lib/auth';
import { Navigate, useLocation } from 'react-router';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useState } from 'react';

export const RequiredAuth = ({ children }) => {
  const { checkToken } = useAuth();
  let user = checkToken();
  return user ? children : <Navigate to="/auth/login" />;
};

RequiredAuth.propTypes = {
  children: PropTypes.element
};
