import { axios } from 'lib/axios';

export const updateProduct = (data, productId) => {
  return axios.put(`/api/products/${productId}/`, data, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
};
