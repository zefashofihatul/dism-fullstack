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
import { useCart } from 'features/carts/provider/CartProviders';
import { Carts } from 'features/carts/Carts';
import { useState } from 'react';
import PropTypes from 'prop-types';

export const Header = () => {
  const [cartMenu, setCartMenu] = useState(true);
  const { getCart } = useCart();
  return (
    <>
      <HeaderWrapper>
        <HeaderContainer>
          <Menu>MENU</Menu>
          <HeaderLogo>
            <Logo>DISMSHOP</Logo>
          </HeaderLogo>
          <HeaderBag onClick={() => setCartMenu(!cartMenu)}>
            <Cart>CART</Cart>
            <HeaderCart>[{getCart().length}]</HeaderCart>
          </HeaderBag>
        </HeaderContainer>
      </HeaderWrapper>
      <Carts onClick={() => setCartMenu(!cartMenu)} hide={cartMenu} />
    </>
  );
};

Header.propTypes = {
  onClick: PropTypes.func,
  hide: PropTypes.bool
};
