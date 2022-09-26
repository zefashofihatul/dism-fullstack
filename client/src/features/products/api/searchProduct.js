import { axios } from 'lib/axios';

export const searchProducts = (searchParam, category = '') => {
  return axios.get(`/api/products/search?name=${searchParam}&category=${category}`);
};
