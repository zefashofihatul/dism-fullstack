import styled from 'styled-components';

export const InputIconWrapper = styled.div`
  display: flex;
  padding: 0 0 0 12px;
  border: 1px solid #dcdcde;
  align-items: center;
  cursor: pointer;
  color: #2c2c2e;
  border-radius: 4px;
  font-weight: 700;
  font-family: 'raleway';
  font-size: 14px;
  font-weight: 800;
  align-items: center;
`;

export const Icon = styled.img`
  margin: 12px 12px 12px 0;
  width: 16px;
  height: 16px;
`;

export const Input = styled.input`
  font-family: 'raleway';
  font-size: 14px;
  font-weight: 700;
  background-color: transparent;
  border: none;
  outline: none;
  margin: 0;
  padding: 12px;
  ::placeholder {
    font-weight: 800;
  }
`;
