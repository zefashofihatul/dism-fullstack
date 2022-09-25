import { axios } from 'lib/axios';

export const searchProducts = (searchParam) => {
  return axios.get(`/api/products/search/${searchParam}`);
};
