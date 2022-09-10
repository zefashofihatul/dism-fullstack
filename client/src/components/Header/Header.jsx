import {
  HeaderBag,
  HeaderWrapper,
  HeaderContainer,
  Menu,
  HeaderLogo,
  Logo,
  HeaderCart,
  Cart
} from './style/HeaderStyle';

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Menu>MENU</Menu>
        <HeaderLogo>
          <Logo>DISMSHOP</Logo>
        </HeaderLogo>
        <HeaderBag>
          <Cart>CART</Cart>
          <HeaderCart>[0]</HeaderCart>
        </HeaderBag>
      </HeaderContainer>
    </HeaderWrapper>
  );
};
