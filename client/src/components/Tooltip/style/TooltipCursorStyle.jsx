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
  z-index: 10;

  max-width: 400px;
  transform: translateX(${(props) => props.xPos}px) translateY(${(props) => props.yPos - 50}px);
  white-space: pre-wrap;
`;

export const Content = styled.p`
  margin: 0;
  display: block;
`;

export const CursorTooltipMain = styled.div``;
