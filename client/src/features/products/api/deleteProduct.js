import { axios } from 'lib/axios';

export const deleteProduct = (productId) => {
  return axios.delete(`/api/products/${productId}`);
};
