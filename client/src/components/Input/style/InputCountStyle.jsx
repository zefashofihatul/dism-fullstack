import styled from 'styled-components';

export const InputCountWrapper = styled.div`
  display: flex;
  padding: 8px 16px;
  justify-content: space-between;
  border: 1px solid #dcdcde;
  align-items: center;
  cursor: pointer;
  color: #2c2c2e;
  border-radius: 4px;
  font-weight: 700;
`;

export const IconLeft = styled.img`
  margin-right: 16px;
`;

export const IconRight = styled.img`
  margin-left: 16px;
`;

export const LabelWrapper = styled.div`
  display: flex;
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
