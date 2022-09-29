import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState, createContext, useContext } from 'react';
import { useModal } from '.';
import { ModalFixedWrapper, Modal } from './style/ModalFixed';

export const ModalFixed = ({ children, color, timer }) => {
  const { setShowModal } = useModal();
  setTimeout(() => {
    setShowModal({
      show: false,
      message: ''
    });
  }, timer);
  return (
    <>
      <ModalFixedWrapper color={color}>
        <Modal>{children}</Modal>
      </ModalFixedWrapper>
    </>
  );
};

ModalFixed.propTypes = {
  children: PropTypes.any,
  color: PropTypes.string,
  setShowModal: PropTypes.func,
  timer: PropTypes.number
};
