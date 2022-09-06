import { ModalWrapper, Message } from '../styles/login';
import PropTypes from 'prop-types';

export const Modal = ({ children }) => {
  return (
    <ModalWrapper>
      <Message>{children}</Message>
    </ModalWrapper>
  );
};

Modal.propTypes = {
  children: PropTypes.string
};
