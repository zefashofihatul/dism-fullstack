import styled, { css } from 'styled-components';

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  overflow: hidden;
  border-bottom: 1px solid #321e1e;
  background-color: #f4f1e0;
  z-index: 1000;
  transform: translateZ(0);
  @media only screen and (min-width: 1025px) {
    height: auto;
  }
  ${(props) =>
    props.className == 'transparent'
      ? css`
          background-color: transparent;
        `
      : ''}
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-box-pack: justify;
  box-sizing: border-box;
  @media only screen and (min-width: 1025px) {
    min-height: 4.5rem;
    height: auto;
    padding: 0 3.125rem;
  }
`;

export const Menu = styled.span`
  color: #321e1e;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  background: 0 0;
  border: none;
  padding: 0;
  text-transform: uppercase;
`;

export const HeaderLogo = styled.div`
  position: absolute;
  right: 50%;
  transform: translate(50%);
`;

export const Logo = styled.span`
  width: 145px;
  height: 23px;
  color: #321e1e;
  font-size: 1.4rem;
  font-weight: 700;
  cursor: pointer;
  background: 0 0;
  border: none;
  padding: 0;
  text-transform: uppercase;
`;

export const HeaderBag = styled.div`
  width: 2.04562rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const Cart = styled.span`
  font-size: 1rem;
  font-weight: 600;
`;

export const HeaderCart = styled.span`
  color: #321e1e;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  background: 0 0;
  border: none;
  padding: 0;
  text-transform: uppercase;
`;
