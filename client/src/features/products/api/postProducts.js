import { axios } from 'lib/axios';

export const postProducts = (data) => {
  return axios.post('/api/products', data, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
};
