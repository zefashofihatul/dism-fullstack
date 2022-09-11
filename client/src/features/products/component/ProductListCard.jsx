import PropTypes from 'prop-types';
import {
  ListProduct,
  TitleProduct,
  DescriptionProduct,
  PriceProduct,
  DescriptionWrapper,
  DescriptionImageWrapper,
  ProductPriceWrapper,
  CartButton
} from '../style/ListContentStyle';

export const ProductListCard = ({ idCount, title, price, description, image1 }) => {
  return (
    <ListProduct data-image={`image-${idCount}`} className="product">
      <TitleProduct>{title}</TitleProduct>
      <DescriptionImageWrapper>
        <DescriptionWrapper>
          <DescriptionProduct>{description}</DescriptionProduct>
          <ProductPriceWrapper>
            <PriceProduct>{price}</PriceProduct>
            <CartButton>ADD TO CART</CartButton>
          </ProductPriceWrapper>
        </DescriptionWrapper>
      </DescriptionImageWrapper>
    </ListProduct>
  );
};

ProductListCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
  description: PropTypes.string,
  image1: PropTypes.string,
  idCount: PropTypes.number
};
