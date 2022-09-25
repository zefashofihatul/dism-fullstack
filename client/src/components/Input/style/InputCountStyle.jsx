import styled, { css } from 'styled-components';

export const InputCountWrapper = styled.div`
  display: flex;
  padding: 0px;
  ${(props) => (props.disable ? 'background-color: #f1f1f1;' : '')}
  justify-content: space-between;
  border: 1px solid #dcdcde;
  align-items: center;
  color: #2c2c2e;
  border-radius: 4px;
  font-weight: 700;
`;

export const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  ${(props) =>
    props.disable
      ? css`
          background-color: #f0efef !important;
          cursor: default;
        `
      : ''}

  &:hover {
    background-color: #f0efef;
  }
`;

export const IconLeft = styled.img``;

export const IconRight = styled.img``;

export const LabelWrapper = styled.div`
  display: flex;
  margin: 0 8px;
`;

export const Label = styled.span`
  color: #9b9ba1;
  font-size: 14px;
  font-weight: 700;
  margin-right: 6px;
`;

export const Placeholder = styled.span`
  color: #2c2c2e;
  display: block;
  text-align: right;
  font-size: 14px;
  font-weight: 700;
  width: 16px;
`;
