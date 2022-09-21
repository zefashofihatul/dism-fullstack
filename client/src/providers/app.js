// import * as React from 'react';
import PropTypes from 'prop-types';
import { ErrorBoundary } from 'utils/ErrorBoundaries';
import { HelmetProvider } from 'react-helmet-async';
import { ProvideAuth } from 'features/auth/providers';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyleProviders } from './GlobalStyleProviders';
import { ProvideCart } from 'features/carts/provider/CartProviders';
import { ProvideProducts } from 'features/products/providers/ProductsProviders';

export const AppProvider = ({ children }) => {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <ProvideCart>
          <ProvideProducts>
            <ProvideAuth>
              <BrowserRouter>
                <GlobalStyleProviders darkTheme={false}>{children}</GlobalStyleProviders>
              </BrowserRouter>
            </ProvideAuth>
          </ProvideProducts>
        </ProvideCart>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

AppProvider.propTypes = {
  children: PropTypes.element
};
