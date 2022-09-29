import PropTypes from 'prop-types';
import { useState, createContext, useContext } from 'react';

const modalContext = createContext();

export const ProvideModal = ({ children }) => {
  const modal = useProvideModal();
  return <modalContext.Provider value={modal}>{children}</modalContext.Provider>;
};

ProvideModal.propTypes = {
  children: PropTypes.any
};

export const useModal = () => {
  return useContext(modalContext);
};

export const useProvideModal = () => {
  const [showModal, setShowModal] = useState({
    show: false,
    message: '',
    status: ''
  });

  const [showModalInput, setShowModalInput] = useState({
    show: false,
    title: '',
    message: '',
    action: [] // {label, onClick}
  });

  return {
    showModal,
    setShowModal,
    showModalInput,
    setShowModalInput
  };
};
