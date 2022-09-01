import { axios } from 'lib/axios';

export const registerWithEmailAndPassword = (data) => {
  return axios.post('/api/users', data);
};
