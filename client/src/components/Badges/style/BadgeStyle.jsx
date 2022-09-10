import styled from 'styled-components';

export const ProductBadge = styled.span`
  position: absolute;
  top: 1.875rem;
  z-index: 100;
  font-size: 1.75rem;
  writing-mode: vertical-rl;
  color: ${(props) => (props.color ? props.color : '#0F4526')};
  background-color: ${(props) => (props.background ? props.background : '#8FBDE3')};
  @media only screen and (min-width: 1025px) {
    line-height: 1.75rem;
    padding: 0.375rem 0.3125rem;
    left: 1.875rem;
  }
`;
