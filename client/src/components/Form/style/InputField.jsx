import styled, { css } from 'styled-components';

export const Input = styled.input`
  color: #000000;
  font-size: 14px;
  width: 100%;
  box-sizing: border-box;
  padding: 12px 16px;
  border-radius: 4px;
  background-color: rgb(243, 243, 244);
  transition: background-color 400ms ease, outline 400ms ease, color 400ms ease,
    box-shadow 400ms ease, -webkit-box-shadow 200ms ease;
  ::placeholder,
  ::-webkit-placeholder {
    font-weight: 400;
    color: rgb(13, 12, 34) !important;
  }
  &:hover {
    outline: none;
    border: 1px solid rgba(210, 91, 91, 0.1);
    box-shadow: 0px 0px 5px rgba(98, 87, 201, 0.8);
    transition: 200ms;
  }
  &:focus {
    outline: none;
    border: 1px solid rgba(98, 87, 201, 0.5);
    box-shadow: 0px 0px 5px rgba(98, 87, 201, 0.8);
    transition: 200ms;
  }
  ${(props) =>
    props.error
      ? css`
          border: 1px solid transparent;
          background-color: rgba(210, 91, 91, 0.1);
        `
      : css`
          border: 1px solid transparent;
        `}
`;

export const CheckBox = styled.input`
  margin-right: 16px;
`;

export const Label = styled.label`
  font-size: 14px;
  color: #262626;
  font-weight: 400;
  margin-right: 16px;
`;

export const Anchor = styled.a`
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`;

export const Select = styled.select`
  color: #000000;
  font-size: 14px;
  font-weight: 400;
  width: 100%;
  box-sizing: border-box;
  padding: 12px 16px;
  border-radius: 4px;
  transition: background-color 400ms ease, outline 400ms ease, color 400ms ease,
    box-shadow 400ms ease, -webkit-box-shadow 200ms ease;
  &:hover {
    outline: none;
    border: 1px solid rgba(210, 91, 91, 0.1);
    box-shadow: 0px 0px 5px rgba(98, 87, 201, 0.8);
    transition: 200ms;
  }
  &:focus {
    outline: none;
    border: 1px solid rgba(98, 87, 201, 0.5);
    box-shadow: 0px 0px 5px rgba(98, 87, 201, 0.8);
    transition: 200ms;
  }
  ${(props) =>
    props.error
      ? css`
          border: 1px solid transparent;
          background-color: rgba(210, 91, 91, 0.1);
        `
      : css`
          border: 1px solid transparent;
        `}
`;
