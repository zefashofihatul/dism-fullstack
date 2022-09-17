import PropTypes from 'prop-types';
import {
  CartsWrapper,
  CartsHeader,
  CartsItemWrapper,
  HeaderTitle,
  HeaderCloseTab,
  TotalPriceWrapper,
  TotalPrice,
  TotalTitle,
  CheckoutBtn,
  CartsFlexWrap,
  BackgroundCart
} from './style/CartStyle';
import { CartItem } from './component/CartItem';
import { useCart } from './provider/CartProviders';
import { useState } from 'react';

// TODO : Re-code cart style / UI Design
export const Carts = ({ hide, onClick }) => {
  const { getCart } = useCart();
  const [total, setTotal] = useState(0);
  return (
    <>
      <CartsWrapper className="cartWrapper" hide={hide}>
        <CartsFlexWrap>
          <CartsHeader>
            <HeaderTitle>CARTS</HeaderTitle>
            <HeaderCloseTab onClick={() => onClick()}>CLOSE</HeaderCloseTab>
          </CartsHeader>
          <CartsItemWrapper>
            {getCart().map((value, index) => {
              return (
                <CartItem
                  key={value.id}
                  id={value.id}
                  title={value.title}
                  price={value.price}
                  description={value.description}
                  badge={value.badge}
                  image1={value.image1}
                  setTotal={setTotal}
                  total={total}
                />
              );
            })}
          </CartsItemWrapper>
          <TotalPriceWrapper>
            <CheckoutBtn>CHECKOUT</CheckoutBtn>
            <TotalPrice>
              <TotalTitle>TOTAL</TotalTitle>
              <TotalTitle>${total}</TotalTitle>
            </TotalPrice>
          </TotalPriceWrapper>
        </CartsFlexWrap>
      </CartsWrapper>
      <BackgroundCart
        className="backgroundCart"
        onClick={() => onClick()}
        hide={hide}></BackgroundCart>
    </>
  );
};

Carts.propTypes = {
  hide: PropTypes.bool,
  onClick: PropTypes.func
};
