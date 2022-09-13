import {
  CartsItem,
  ItemImage,
  ItemContentWrapper,
  ItemContentTitleWrapper,
  ItemContentTitle,
  ItemContentRemoveBtn,
  ItemContentDescription,
  ItemContentDescriptionLeft,
  ItemContentDescriptionRight,
  ItemContentDescriptionWrapper,
  ItemContentPrice,
  ItemContentQuantity,
  ItemContentQuantityNum,
  ItemContentQuantityBtn,
  ItemContentPriceWrapper
} from '../style/CartStyle';
import PropTypes from 'prop-types';
import plusIcon from 'assets/images/plus_icon.svg';
import minIcon from 'assets/images/min_icon.svg';
import { useCart } from '../provider/CartProviders';
import { useState } from 'react';
import { useEffect } from 'react';

export const CartItem = ({
  id,
  title,
  description,
  badge,
  price,
  image1,
  onRemove,
  setTotal,
  total
}) => {
  const { removeItemCart, removeAllCart } = useCart();
  const [itemQuantity, setItemQuantity] = useState(1);
  useEffect(() => {
    setTotal(total + itemQuantity * price);
  }, []);
  return (
    <CartsItem>
      <ItemImage src={image1} alt="thumbCart" />
      <ItemContentWrapper>
        <ItemContentTitleWrapper>
          <ItemContentTitle>{title}</ItemContentTitle>
          <ItemContentRemoveBtn
            onClick={() => {
              setTotal(total - price * itemQuantity);
              removeItemCart(id);
            }}>
            REMOVE
          </ItemContentRemoveBtn>
        </ItemContentTitleWrapper>
        <ItemContentDescriptionWrapper>
          <ItemContentDescription>
            <ItemContentDescriptionLeft>PRICE PER PRODUCT</ItemContentDescriptionLeft>
            <ItemContentDescriptionRight>${price}</ItemContentDescriptionRight>
          </ItemContentDescription>
          <ItemContentDescription>
            <ItemContentDescriptionLeft>COLOR</ItemContentDescriptionLeft>
            <ItemContentDescriptionRight>WHITE</ItemContentDescriptionRight>
          </ItemContentDescription>
          <ItemContentPriceWrapper>
            <ItemContentPrice>${price * itemQuantity}</ItemContentPrice>
            <ItemContentQuantity>
              {itemQuantity > 1 && (
                <ItemContentQuantityBtn
                  src={minIcon}
                  onClick={() => {
                    setItemQuantity(itemQuantity - 1);
                    setTotal(total - price);
                  }}
                />
              )}
              <ItemContentQuantityNum>{itemQuantity}</ItemContentQuantityNum>
              <ItemContentQuantityBtn
                src={plusIcon}
                onClick={() => {
                  setItemQuantity(itemQuantity + 1);
                  setTotal(total + price);
                }}
              />
            </ItemContentQuantity>
          </ItemContentPriceWrapper>
        </ItemContentDescriptionWrapper>
      </ItemContentWrapper>
    </CartsItem>
  );
};

CartItem.propTypes = {
  id: PropTypes.number,
  price: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  badge: PropTypes.string,
  image1: PropTypes.string,
  setTotal: PropTypes.func,
  onRemove: PropTypes.func,
  total: PropTypes.number
};
