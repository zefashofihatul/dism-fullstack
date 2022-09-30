import styled, { css } from 'styled-components';

export const CursorTooltipWrapper = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  margin-bottom: 4px;
  margin-left: 4px;
  padding: 8px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  color: white;
  transform: translateX(${(props) => props.xPos}px) translateY(${(props) => props.yPos - 50}px);
`;

export const CursorTooltipMain = styled.div``;
