import styled from 'styled-components';
import plusIcon from 'assets/images/plus_icon.svg';

export const ButtonRectWrapper = styled.button`
  height: fit-content;
  width: fit-content;
  padding: 12px 12px;
  display: flex;
  border-radius: 4px;
  align-items: center;
  margin: auto 0;
  background-color: ${(props) => (props.color ? props.color : '#0074ff')};
  border-style: none;
  cursor: pointer;
`;

export const PlusIcon = styled.img`
  width: 10px;
  height: 10px;
  margin-right: 16px;
  color: white;
`;

export const Label = styled.p`
  font-family: 'raleway';
  font-size: 14px;
  font-weight: 700;
  margin: 0;
  color: white;
`;
