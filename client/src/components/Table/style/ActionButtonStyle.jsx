import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  position: relative;
  padding: 6px 16px;
  height: 24px;
  width: 80px;
  display: flex;
  align-items: center;
  border-radius: 50px;
  justify-content: space-between;
  background-color: #ededed;
  cursor: pointer;
`;

export const TitleAction = styled.p`
  font-size: 14px;
  font-weight: 600;
  margin: 0;
`;

export const ArrowIcon = styled.img`
  width: 10px;
`;

export const ActionExpandWrapper = styled.div`
  width: 120px;
  box-sizing: border-box;
  height: fit-content;
  display: ${(props) => (props.className == 'expand' ? 'block' : 'none')};
  top: 40px;
  left: 0;
  z-index: 1;
  border-radius: 2px;
  position: absolute;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
`;

export const Option = styled.div`
  padding: 6px 16px;
  height: 24px;
  display: flex;
  border-radius: 2px;
  align-items: center;
  background-color: ${(props) => (props.active ? '#e7e7e7' : '#fff')};
  justify-content: space-between;
  cursor: pointer;
  &:hover {
    background-color: #e7e7e7;
    transition: 0.1s ease-in;
  }
`;
