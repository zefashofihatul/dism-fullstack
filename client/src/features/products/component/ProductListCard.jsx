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
import { useCart } from 'features/carts/provider/CartProviders';

export const ProductListCard = ({ id, title, price, description, image1, badge }) => {
  const { getCart, addProductCart } = useCart();
  return (
    <ListProduct data-image={`image-${id}`} className="product">
      <TitleProduct>{title}</TitleProduct>
      <DescriptionImageWrapper>
        <DescriptionWrapper>
          <DescriptionProduct>{description}</DescriptionProduct>
          <ProductPriceWrapper>
            <PriceProduct>${price}</PriceProduct>
            <CartButton
              onClick={() => {
                addProductCart({ id, title, price, image1, description, badge });
              }}>
              ADD TO CART
            </CartButton>
          </ProductPriceWrapper>
        </DescriptionWrapper>
      </DescriptionImageWrapper>
    </ListProduct>
  );
};

ProductListCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  image1: PropTypes.string,
  idCount: PropTypes.number,
  styleAdd: PropTypes.string,
  id: PropTypes.number,
  badge: PropTypes.string
};
