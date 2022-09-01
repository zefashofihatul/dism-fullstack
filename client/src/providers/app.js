// import * as React from 'react';
import PropTypes from 'prop-types';
import { ProvideAuth } from 'lib/auth';
import { BrowserRouter as Router } from 'react-router-dom';

export const AppProvider = ({ children }) => {
  return (
    <ProvideAuth>
      <Router>{children}</Router>
    </ProvideAuth>
  );
};

AppProvider.propTypes = {
  children: PropTypes.element
};
