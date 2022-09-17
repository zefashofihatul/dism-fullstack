// import * as React from 'react';
import PropTypes from 'prop-types';
import { ErrorBoundary } from 'utils/ErrorBoundaries';
import { HelmetProvider } from 'react-helmet-async';
import { ProvideAuth } from 'features/auth/providers';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyleProviders } from './GlobalStyleProviders';
import { ProvideCart } from 'features/carts/provider/CartProviders';

export const AppProvider = ({ children }) => {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <ProvideCart>
          <ProvideAuth>
            <BrowserRouter>
              <GlobalStyleProviders darkTheme={false}>{children}</GlobalStyleProviders>
            </BrowserRouter>
          </ProvideAuth>
        </ProvideCart>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

AppProvider.propTypes = {
  children: PropTypes.element
};
