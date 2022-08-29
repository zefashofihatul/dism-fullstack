// import * as React from 'react';
import PropTypes from 'prop-types';

import { BrowserRouter } from 'react-router-dom';

export const AppProvider = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

AppProvider.propTypes = {
  children: PropTypes.element
};
