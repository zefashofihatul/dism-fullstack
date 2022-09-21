import React, { createContext } from 'react';
import { postProducts } from '../api';
import PropTypes from 'prop-types';
const productsContext = createContext();

export function ProvideProducts({ children }) {
  const products = useProducts();
  return <productsContext.Provider value={products}>{children}</productsContext.Provider>;
}

ProvideProducts.propTypes = {
  children: PropTypes.any
};

export const useProducts = () => {
  const postProductsFn = async (data) => {
    try {
      const response = await postProducts(data);
      return response;
    } catch (err) {
      return err;
    }
  };
  return {
    postProductsFn
  };
};
