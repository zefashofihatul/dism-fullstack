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

// TODO : Re-code cart style / UI Design
export const Carts = ({ hide, onClick }) => {
  const { getCart } = useCart();
  return (
    <>
      <CartsWrapper className="cartWrapper" hide={hide}>
        <CartsFlexWrap>
          <CartsHeader>
            <HeaderTitle>CARTS</HeaderTitle>
            <HeaderCloseTab onClick={() => onClick()}>CLOSE</HeaderCloseTab>
          </CartsHeader>
          <CartsItemWrapper>
            {getCart().map((value, index) => (
              <CartItem
                key={value.id}
                id={value.id}
                title={value.title}
                price={value.price}
                description={value.description}
                badge={value.badge}
                image1={value.image1}
              />
            ))}
          </CartsItemWrapper>
          <TotalPriceWrapper>
            <CheckoutBtn>CHECKOUT</CheckoutBtn>
            <TotalPrice>
              <TotalTitle>TOTAL</TotalTitle>
              <TotalTitle>$209</TotalTitle>
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
