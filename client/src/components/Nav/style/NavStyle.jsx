import styled from 'styled-components';

export const NavMainWrapper = styled.div`
  width: 100%;
  padding: 8px 40px;
  background-color: #f4f1e0;
  box-sizing: border-box;
  position: fixed;
  top: 0;
`;

export const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Logo = styled.div``;

export const LogoTitle = styled.span`
  font-size: 18px;
  font-weight: 600;
`;

export const Items = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Item = styled.a`
  display: block;
  margin-left: 40px;
  font-size: 16px;
  cursor: pointer;
  font-weight: ${(props) => (props.value ? '600' : '400')};
`;
