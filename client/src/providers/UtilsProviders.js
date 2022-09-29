import PropTypes from 'prop-types';
import { ProvideModal } from 'components/Modal';
import { useModal, ModalFixed } from 'components/Modal';
import { ModalInput } from 'components/Modal/ModalInput';

export const UtilsProviders = ({ children }) => {
  return <ProvideModal>{children}</ProvideModal>;
};

UtilsProviders.propTypes = {
  children: PropTypes.any
};

export const UtilsComponent = () => {
  const { showModal, setShowModal, showModalInput, setShowModalInput } = useModal();

  return (
    <>
      {showModalInput.show && <ModalInput />}
      {showModal.show ? (
        <ModalFixed setShowModal={setShowModal} timer={4000} color={showModal.status}>
          {showModal.message}
        </ModalFixed>
      ) : (
        <></>
      )}
    </>
  );
};

UtilsComponent.propTypes = {
  children: PropTypes.any
};
