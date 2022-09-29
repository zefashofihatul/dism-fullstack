import styled from 'styled-components';

export const BackgroundModalInput = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 12;
  background-color: rgba(112, 112, 112, 0.6);
`;

export const ModalInputWrapper = styled.div`
  width: 400px;
  padding: 40px;
  background-color: white;
`;

export const ModalInputContent = styled.div``;

export const ModalInputTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  margin: 0;
`;

export const ModalInputDescription = styled.p`
  font-size: 16px;
  font-family: 'raleway';
  line-height: 1.5;
  margin: 16px 0 32px 0;
  font-weight: 600;
  color: #757373;
`;

export const WrapperGap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;
