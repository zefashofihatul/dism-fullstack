import styled from 'styled-components';

export const TableWrapper = styled.table`
  width: 100%;
  color: black;
  border: 1px solid #d9d9d9;
  box-sizing: border-box;
  border-collapse: collapse;
`;

export const MainWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  padding-bottom: 120px;
`;

export const BodyField = styled.tr`
  padding-top: 20px;
  &:hover {
    background-color: #f7f5f5;
  }
`;

export const HeadWrapper = styled.thead`
  border-radius: 8px;
`;

export const HeadField = styled.tr`
  background-color: #eaf1f6;
`;

export const HeadColumn = styled.th`
  color: #545457;
  font-size: 14px;
  text-align: left;
  padding: 12px;
  ${(props) => (props.width ? `max-width: ${props.width}` : ``)};
`;

export const NameProductHead = styled.div`
  color: #545457;
  font-size: 14px;
  font-weight: 600;
  text-align: left;
  padding: 12px;
`;

export const BodyColumn = styled.td`
  padding-left: 16px;
  padding: 8px 8px 8px 16px;
  font-size: 14px;
  overflow: hidden;

  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 1.6;
  font-weight: 600;

  ${(props) => (props.width ? `max-width: ${props.width}` : '')}
`;

export const NameProductColumn = styled.div`
  padding: 0 0 0 16px;
  width: 320px;
`;

export const ActionProductColumn = styled.td`
  width: 100px;
  padding: 8px 16px 8px 16px;
  font-size: 14px;
  font-weight: 600;
`;

export const BodyWrapper = styled.tbody`
  border-radius: 8px;
`;

export const ActionOption = styled.button`
  background-color: #e6e3e3;
`;

export const BadgeCard = styled.div`
  padding: 4px 8px;
  max-width: 88px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  border-radius: 4px;
  background-color: ${(props) => (props.color ? props.color : '#e6e3e3')};
`;

export const HiddenContent = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
