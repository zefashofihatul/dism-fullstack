import styled from 'styled-components';

export const ModalFixedWrapper = styled.div`
  position: fixed;
  justify-content: center;
  left: 50%;
  z-index: 80;
  margin-top: 24px;
  background-color: ${(props) => (props.color == 'success' ? '#28db31' : '#FF3E33')};
  border-radius: 4px;
  padding: 16px;
  color: white;
  font-size: 14px;
  font-weight: 700;
  transform: translateX(-50%);
`;

export const Modal = styled.div``;
