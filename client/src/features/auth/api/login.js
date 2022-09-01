import { axios } from 'lib/axios';
import PropTypes from 'prop-types';

export const loginWithEmailAndPassword = ({ email, password }) => {
  return axios.post('/api/login', { email, password });
};

loginWithEmailAndPassword.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string
};
