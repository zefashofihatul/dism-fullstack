import { axios } from 'lib/axios';

export const filterProducts = (filterParam) => {
  return axios.get(`/api/products/filter/${filterParam}`);
};
