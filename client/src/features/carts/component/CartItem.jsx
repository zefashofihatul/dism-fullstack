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

export const CartItem = ({ id, title, description, badge, price, image1, onRemove }) => {
  const { removeItemCart, removeAllCart } = useCart();
  const [itemQuantity, setItemQuantity] = useState(1);
  return (
    <CartsItem>
      <ItemImage src={image1} alt="thumbCart" />
      <ItemContentWrapper>
        <ItemContentTitleWrapper>
          <ItemContentTitle>{title}</ItemContentTitle>
          <ItemContentRemoveBtn onClick={() => removeItemCart(id)}>REMOVE</ItemContentRemoveBtn>
        </ItemContentTitleWrapper>
        <ItemContentDescriptionWrapper>
          <ItemContentDescription>
            <ItemContentDescriptionLeft>SIZE</ItemContentDescriptionLeft>
            <ItemContentDescriptionRight>130cm x 130cm</ItemContentDescriptionRight>
          </ItemContentDescription>
          <ItemContentDescription>
            <ItemContentDescriptionLeft>COLOR</ItemContentDescriptionLeft>
            <ItemContentDescriptionRight>WHITE</ItemContentDescriptionRight>
          </ItemContentDescription>
          <ItemContentPriceWrapper>
            <ItemContentPrice>{price}</ItemContentPrice>
            <ItemContentQuantity>
              {itemQuantity > 1 && (
                <ItemContentQuantityBtn
                  src={minIcon}
                  onClick={() => setItemQuantity(itemQuantity - 1)}
                />
              )}
              <ItemContentQuantityNum>{itemQuantity}</ItemContentQuantityNum>
              <ItemContentQuantityBtn
                src={plusIcon}
                onClick={() => setItemQuantity(itemQuantity + 1)}
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
  price: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  badge: PropTypes.string,
  image1: PropTypes.string,
  onRemove: PropTypes.func
};
