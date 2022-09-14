import styled from 'styled-components';

export const FilterInputWrapper = styled.div`
  width: 100%;
  height: fit-content;
  position: relative;
  cursor: pointer;
`;

export const LabelFilterInput = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: black;
`;

export const FilterInputOption = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FilterInputValue = styled.span`
  font-size: 14px;
  width: 5.8rem;
  font-weight: 400;
  color: black;
`;

export const FilterIcon = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: black;
  line-height: 0.8;
  width: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FilterInputOptionWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
  height: fit-content;
`;

export const FilterExpand = styled.div`
  position: absolute;
  ${(props) => (props.expand ? 'display: flex;' : 'display: none;')}
  flex-direction: column;
  width: 100%;
  border: 1px solid black;
  z-index: 100;
  top: 1.8rem;
  background-color: #f4f1e0;
`;

export const FilterList = styled.span`
  font-size: 14px;
  padding: 16px;
  text-decoration: uppercase;
  cursor: pointer;
  ${(props) => (props.className == 'expand' ? 'font-weight:700;' : '')}
  &:hover {
    font-weight: 700;
  }
`;
