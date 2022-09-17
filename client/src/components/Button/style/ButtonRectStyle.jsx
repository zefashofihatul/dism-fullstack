import styled from 'styled-components';
import plusIcon from 'assets/images/plus_icon.svg';

export const ButtonRectWrapper = styled.div`
  height: fit-content;
  width: 120px;
  padding: 12px 12px;
  display: flex;
  border-radius: 4px;
  align-items: center;
  margin: auto 0;
  background-color: #0074ff;
  cursor: pointer;
`;

export const PlusIcon = styled.img`
  width: 10px;
  height: 10px;
  margin-right: 16px;
  color: white;
`;

export const Label = styled.p`
  font-size: 14px;
  font-weight: 700;
  margin: 0;
  color: white;
`;
