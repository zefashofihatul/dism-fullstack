import { NavMainWrapper, NavWrapper, Logo, LogoTitle, Items, Item } from './style/NavStyle';

export const Nav = () => {
  return (
    <>
      <NavMainWrapper>
        <NavWrapper>
          <Logo>
            <LogoTitle>DISM</LogoTitle>
          </Logo>
          <Items>
            <Item>SHOP</Item>
            <Item>PROFILE</Item>
            <Item value={true}>CART[1]</Item>
          </Items>
        </NavWrapper>
      </NavMainWrapper>
    </>
  );
};
