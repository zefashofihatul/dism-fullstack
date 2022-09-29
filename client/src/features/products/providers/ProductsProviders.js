import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import {
  getProducts,
  postProducts,
  getDetailProduct,
  searchProducts,
  filterProducts,
  updateProduct
} from '../api';
import { deleteProduct } from '../api/deleteProduct';
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
  const [showProductForm, setShowProductForm] = useState({
    show: false,
    productValue: {}
  });
  const [products, setProducts] = useState({ total: 0, page: 0, size: 0, products: [] });
  const [productSetting, setProductSetting] = useState({
    page: 0,
    size: 10
  });
  const [category, setCategory] = useState('');

  const fetchProductsFn = (productSetting) => {
    return getProducts(productSetting);
  };

  const updateProductFn = (values, productId) => {
    return updateProduct(values, productId);
  };

  const filterProductsFn = (filterParam) => {
    return filterProducts(filterParam);
  };

  const postProductsFn = (data) => {
    return postProducts(data);
  };

  const searchProductFn = (searchParam) => {
    return searchProducts(searchParam, category);
  };

  const getDetailProductFn = (productId) => {
    return getDetailProduct(productId);
  };

  const deleteProductFn = (productId) => {
    return deleteProduct(productId);
  };

  return {
    category,
    searchProductFn,
    fetchProductsFn,
    deleteProductFn,
    showProductForm,
    setShowProductForm,
    getDetailProductFn,
    postProductsFn,
    filterProductsFn,
    updateProductFn,
    setCategory,
    products,
    setProducts,
    productSetting,
    setProductSetting
  };
};
