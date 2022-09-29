import PropTypes from 'prop-types';
import {
  BackgroundModalInput,
  ModalInputWrapper,
  ModalInputContent,
  ModalInputTitle,
  ModalInputDescription,
  WrapperGap
} from './style/ModalInputStyle';
import { ButtonRect } from 'components/Button/ButtonRect';
import { useModal } from '.';

export const ModalInput = () => {
  const { showModalInput, setShowModalInput } = useModal();
  return (
    <>
      <BackgroundModalInput>
        <ModalInputWrapper>
          <ModalInputContent>
            <ModalInputTitle>{showModalInput.title}</ModalInputTitle>
            <ModalInputDescription>{showModalInput.message}</ModalInputDescription>
          </ModalInputContent>
          <WrapperGap>
            {showModalInput.action.map((value, index) => {
              return (
                <ButtonRect key={index} label={value.label} onClick={(e) => value.onClick(e)} />
              );
            })}
            <ButtonRect
              color="#0A0A0A"
              label="Cancel"
              onClick={(e) => {
                setShowModalInput({
                  show: false,
                  title: '',
                  message: '',
                  action: []
                });
              }}
            />
          </WrapperGap>
        </ModalInputWrapper>
      </BackgroundModalInput>
    </>
  );
};
