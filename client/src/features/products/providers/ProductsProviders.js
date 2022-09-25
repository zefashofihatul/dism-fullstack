import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { getProducts, postProducts, searchProducts } from '../api';
const productsContext = createContext();

export function ProvideProducts({ children }) {
  const products = useProducts();
  return <productsContext.Provider value={products}>{children}</productsContext.Provider>;
}

ProvideProducts.propTypes = {
  children: PropTypes.any
};

export const useProducts = () => {
  const [productSetting, setProductSetting] = useState({
    page: 0,
    size: 10
  });

  const fetchProductsFn = (productSetting) => {
    return getProducts(productSetting);
  };

  const postProductsFn = (data) => {
    return postProducts(data);
  };

  const searchProductFn = (searchParam) => {
    return searchProducts(searchParam);
  };

  return {
    productSetting,
    searchProductFn,
    setProductSetting,
    fetchProductsFn,
    postProductsFn
  };
};
