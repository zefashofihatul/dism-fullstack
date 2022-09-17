import { SpaceBetweenWrapper } from './style/SpaceBetweenStyle';
import PropTypes from 'prop-types';

export const SpaceBetween = ({ children }) => {
  return <SpaceBetweenWrapper>{children}</SpaceBetweenWrapper>;
};

SpaceBetween.propTypes = {
  children: PropTypes.any
};
