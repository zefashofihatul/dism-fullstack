import styled, { css } from 'styled-components';

export const InputParagraph = styled.textarea`
  color: #000000;
  font-family: 'raleway';
  font-size: 14px;
  height: 100px;
  font-weight: 700;
  line-height: 1.5;
  width: 100%;
  box-sizing: border-box;
  padding: 12px 16px;
  margin-top: 8px;
  border-radius: 4px;
  outline: 1px solid #dcdcde;
  background-color: transparent;
  resize: none;
  ::placeholder,
  ::-webkit-placeholder {
    font-weight: 700;
    color: rgb(13, 12, 34) !important;
  }
  &:hover {
    border: 1px solid #dcdcde;
    transition: 200ms;
  }
  &:focus {
    border: 1px solid rgba(98, 87, 201, 0.5);
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

export const Input = styled.input`
  color: #000000;
  font-family: 'raleway';
  font-size: 14px;
  font-weight: 600;
  width: 100%;
  box-sizing: border-box;
  padding: 12px 16px;
  margin-top: 8px;
  border-radius: 4px;
  outline: 1px solid #dcdcde;
  background-color: transparent;
  ::placeholder,
  ::-webkit-placeholder {
    font-weight: 700;
    color: rgb(13, 12, 34) !important;
  }
  &:hover {
    border: 1px solid #dcdcde;
    transition: 200ms;
  }
  &:focus {
    border: 1px solid rgba(98, 87, 201, 0.5);
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
  font-weight: 700;
  margin-right: 16px;
`;

export const Anchor = styled.a`
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`;

export const Select = styled.select`
  color: #000000;
  font-family: 'raleway';
  font-size: 14px;
  font-weight: 600;
  width: 100%;
  box-sizing: border-box;
  padding: 12px 16px;
  margin-top: 8px;
  border-radius: 4px;
  outline: 1px solid #dcdcde;
  background-color: transparent;
  ::placeholder,
  ::-webkit-placeholder {
    font-weight: 700;
    color: rgb(13, 12, 34) !important;
  }
  &:hover {
    border: 1px solid #dcdcde;
    transition: 200ms;
  }
  &:focus {
    border: 1px solid rgba(98, 87, 201, 0.5);
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
