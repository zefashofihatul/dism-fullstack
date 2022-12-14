import styled from 'styled-components';

export const SwitchWrapper = styled.div`
  position: relative;
  width: fit-content;
  display: flex;
  align-items: flex-end;
  cursor: pointer;
`;

export const SwitchBoxLabel = styled.label`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 120px;
  border-radius: 40px;
  border: 1px solid #707070;
  background: transparent;
  cursor: pointer;
  &::after {
    content: '${(props) => props.option1}';
    margin: 4px;
    font-size: 14px;
    font-weight: 600;
    color: white;
    display: flex;
    justify-content: center;
    border-radius: 20px;
    align-items: center;
    width: 64px;
    height: 34px;
    background: #000000;
    transition: 0.2s;
  }
`;

export const SwitchBox = styled.input`
  opacity: 0;
  z-index: 1;
  top: 0;
  left: 0;
  height: 39px;
  border-radius: 40px;
  width: 120px;
  border: 1px solid #707070;
  cursor: pointer;

  &:checked + ${SwitchBoxLabel} {
    background: transparent;
    &::after {
      content: '${(props) => props.option2}';
      font-size: 14px;
      font-weight: 600;
      color: white;
      display: flex;
      justify-content: center;
      border-radius: 20px;
      align-items: center;
      width: 64px;
      height: 34px;
      margin-left: 50px;
      background: #000000;
      transition: 0.2s;
    }
  }
`;
