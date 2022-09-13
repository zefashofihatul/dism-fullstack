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
import thumb1 from 'assets/images/imageThumb1.png';
import plusIcon from 'assets/images/plus_icon.svg';

export const CartItem = ({ id, title, description, badge, price, image1, onRemove }) => {
  return (
    <CartsItem>
      <ItemImage src={image1} alt="thumbCart" />
      <ItemContentWrapper>
        <ItemContentTitleWrapper>
          <ItemContentTitle>{title}</ItemContentTitle>
          <ItemContentRemoveBtn onClick={() => onRemove(id)}>REMOVE</ItemContentRemoveBtn>
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
              <ItemContentQuantityNum>2</ItemContentQuantityNum>
              <ItemContentQuantityBtn src={plusIcon}></ItemContentQuantityBtn>
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
