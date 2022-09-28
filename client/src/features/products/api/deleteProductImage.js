import { axios } from 'lib/axios';

export const deleteProductImage = (productId) => {
  return axios.delete(`/api/image/${productId}`);
};
