import * as React from 'react';
import { Link } from 'react-router-dom';
import * as z from 'zod';
import PropTypes from 'prop-types';

export const RegisterForm = ({ onSuccess }) => {
  return <h2>Ini adalah Register Form</h2>;
};

RegisterForm.propTypes = {
  onSuccess: PropTypes.func
};
