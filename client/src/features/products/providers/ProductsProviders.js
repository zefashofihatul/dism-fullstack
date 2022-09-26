import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { getProducts, postProducts, searchProducts } from '../api';
const productsContext = createContext();

export function ProvideProducts({ children }) {
  const products = useProvideProducts();
  return <productsContext.Provider value={products}>{children}</productsContext.Provider>;
}

ProvideProducts.propTypes = {
  children: PropTypes.any
};

export const useProducts = () => {
  return useContext(productsContext);
};

export const useProvideProducts = () => {
  const [products, setProducts] = useState({ total: 0, page: 0, size: 0, products: [] });
  const [productSetting, setProductSetting] = useState({
    page: 0,
    size: 10
  });
  const [category, setCategory] = useState('');

  const fetchProductsFn = (productSetting) => {
    return getProducts(productSetting);
  };

  const postProductsFn = (data) => {
    return postProducts(data);
  };

  const searchProductFn = (searchParam) => {
    console.log(category);
    return searchProducts(searchParam, category);
  };

  return {
    category,
    searchProductFn,
    fetchProductsFn,
    postProductsFn,
    setCategory,
    products,
    setProducts,
    productSetting,
    setProductSetting
  };
};
