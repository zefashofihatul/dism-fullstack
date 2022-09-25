import styled from 'styled-components';

export const IconLabelWrapper = styled.div`
  padding: 4px 16px;
  display: flex;
  justify-content: space-between;
  border: 1px solid #dcdcde;
  align-items: center;
  cursor: pointer;
  color: #2c2c2e;
  border-radius: 4px;
  font-weight: 700;
  position: relative;
`;

export const Icon = styled.img`
  margin-right: 16px;
  width: 16px;
  height: 16px;
`;

export const LabelWrapper = styled.div``;

export const Label = styled.span`
  color: #9b9ba1;
  font-size: 14px;
  font-weight: 700;
  margin-right: 6px;
`;

export const Placeholder = styled.span`
  color: #2c2c2e;
  font-size: 14px;
  font-weight: 700;
`;

export const DropdownWrapper = styled.div`
  position: absolute;
  top: 36px;
  right: 0;
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid #dcdcde;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
`;

export const DropdownList = styled.div`
  padding: 6px 12px;
  cursor: pointer;
  &:hover {
    background-color: #eeeeee;
  }
`;

export const ListContent = styled.span`
  color: #2c2c2e;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`;

export const MainWrapper = styled.div`
  position: relative;
`;
