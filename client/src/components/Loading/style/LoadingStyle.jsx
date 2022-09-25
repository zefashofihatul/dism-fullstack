import styled, { keyframes } from 'styled-components';

const spinner = keyframes`
    0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
export const LoadingSpinnerEl = styled.div`
  border: 6px solid #e0e0e0;
  border-top: 6px solid #3498db;
  border-radius: 50%;
  width: ${(props) => (props.width ? props.width : '40px')};
  height: ${(props) => (props.height ? props.height : '40px')};
  animation: ${spinner} 0.8s linear infinite;
`;

export const LoadingWrapper = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  justify-content: center;
  align-items: center;
`;
