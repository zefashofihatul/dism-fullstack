import { axios } from 'lib/axios';

export const getProducts = async () => {
  return await axios.get('/api/products');
};
