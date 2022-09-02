// import * as React from 'react';
import PropTypes from 'prop-types';
import { ErrorBoundary } from 'utils/ErrorBoundaries';
import { HelmetProvider } from 'react-helmet-async';
import { ProvideAuth } from 'lib/auth';
import { BrowserRouter as Router } from 'react-router-dom';

export const AppProvider = ({ children }) => {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <ProvideAuth>
          <Router>{children}</Router>
        </ProvideAuth>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

AppProvider.propTypes = {
  children: PropTypes.element
};
