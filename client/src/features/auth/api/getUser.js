import { axios } from 'lib/axios';

export const getUser = async () => {
  return await axios.get('/api/users');
};
