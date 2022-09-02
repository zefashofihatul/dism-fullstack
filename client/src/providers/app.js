// import * as React from 'react';
import PropTypes from 'prop-types';
import { ErrorBoundary } from 'utils/ErrorBoundaries';
import { ProvideAuth } from 'lib/auth';
import { BrowserRouter as Router } from 'react-router-dom';

export const AppProvider = ({ children }) => {
  return (
    <ErrorBoundary>
      <ProvideAuth>
        <Router>{children}</Router>
      </ProvideAuth>
    </ErrorBoundary>
  );
};

AppProvider.propTypes = {
  children: PropTypes.element
};
