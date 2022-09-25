import { axios } from 'lib/axios';

export const getProducts = ({ page, size }) => {
  return axios.get(`/api/products?page=${page}&size=${size}`);
};
