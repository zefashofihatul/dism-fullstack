import { ModalFixedWrapper } from './style/ModalInfoStyle';
import PropTypes from 'prop-types';

export const ModalTopInfo = ({ children }) => {
  return <ModalFixedWrapper>{children}</ModalFixedWrapper>;
};

ModalTopInfo.propTypes = {
  children: PropTypes.any
};
