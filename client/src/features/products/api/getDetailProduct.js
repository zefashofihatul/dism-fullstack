import { axios } from 'lib/axios';

export const getDetailProduct = (productId) => {
  return axios.get(`/api/products/${productId}`);
};
