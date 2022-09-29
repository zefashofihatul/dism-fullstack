// import * as React from 'react';
import PropTypes from 'prop-types';
import { ErrorBoundary } from 'utils/ErrorBoundaries';
import { HelmetProvider } from 'react-helmet-async';
import { ProvideAuth } from 'features/auth/providers';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyleProviders } from './GlobalStyleProviders';
import { ProvideCart } from 'features/carts/provider/CartProviders';
import { ProvideProducts } from 'features/products/providers/ProductsProviders';
import { UtilsProviders } from './UtilsProviders';

export const AppProvider = ({ children }) => {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <UtilsProviders>
          <ProvideCart>
            <ProvideProducts>
              <ProvideAuth>
                <BrowserRouter>
                  <GlobalStyleProviders darkTheme={false}>{children}</GlobalStyleProviders>
                </BrowserRouter>
              </ProvideAuth>
            </ProvideProducts>
          </ProvideCart>
        </UtilsProviders>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

AppProvider.propTypes = {
  children: PropTypes.element
};
