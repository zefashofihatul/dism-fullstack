import {
  ProductItem,
  ProductImage,
  ProductImageWrapper,
  ImageWrapper,
  ImageHoverWrapper,
  ProductDescription,
  ProductDescriptionWrapper,
  ProductTitleWrapper,
  ProductTitle,
  ProductPrice,
  ProductItemGrid,
  ProductPriceWrapper,
  CartButton,
  ProductImageDescriptionWrapper
} from '../style/GridContentStyle';
import { Badge } from 'components/Badges';
import { Button } from 'components/Button';
import PropTypes from 'prop-types';
import { useCart } from 'features/carts/provider/CartProviders';

export const ProductFlexCard = ({ title, price, image1, image2, description }) => {
  return (
    <ProductItem>
      <ProductTitleWrapper>
        <ProductTitle>{title}</ProductTitle>
        <ProductPriceWrapper>
          <ProductPrice>{price}</ProductPrice>
          <CartButton>ADD TO CART</CartButton>
        </ProductPriceWrapper>
      </ProductTitleWrapper>
      <ProductImageDescriptionWrapper>
        <ProductImageWrapper>
          <ImageHoverWrapper>
            <ProductImage src={image1} />
          </ImageHoverWrapper>
          <ImageWrapper>
            <ProductImage src={image2} />
          </ImageWrapper>
        </ProductImageWrapper>
        <ProductDescriptionWrapper>
          <ProductDescription>
            A limited edition ashtray designed by Seth to be both gloopy and globby.
          </ProductDescription>
        </ProductDescriptionWrapper>
      </ProductImageDescriptionWrapper>
    </ProductItem>
  );
};

export const ProductGridCard = ({
  className,
  id,
  title,
  price,
  image1,
  image2,
  description,
  badge
}) => {
  const { getCart, addProductCart } = useCart();
  return (
    <>
      <ProductItemGrid className={className}>
        {badge && (
          <Badge color="#ffef9c" background="#03b8a6">
            {badge}
          </Badge>
        )}
        <ProductImageWrapper>
          <ImageHoverWrapper>
            <ProductImage src={image1} />
          </ImageHoverWrapper>
          <ImageWrapper>
            <ProductImage src={image2} />
          </ImageWrapper>
        </ProductImageWrapper>
        <ProductTitleWrapper>
          <ProductTitle>{title}</ProductTitle>
          <ProductPriceWrapper>
            <ProductPrice>${price}</ProductPrice>
            <CartButton
              onClick={() => {
                addProductCart({ id, title, price, image1, image2, description, badge });
              }}>
              ADD TO CART
            </CartButton>
          </ProductPriceWrapper>
        </ProductTitleWrapper>
        <ProductDescriptionWrapper>
          <ProductDescription>{description}</ProductDescription>
        </ProductDescriptionWrapper>
      </ProductItemGrid>
    </>
  );
};

ProductGridCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  price: PropTypes.number,
  image1: PropTypes.string,
  image2: PropTypes.string,
  description: PropTypes.string,
  className: PropTypes.string,
  gridCol: PropTypes.number,
  badge: PropTypes.string
};

ProductFlexCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  image1: PropTypes.string,
  image2: PropTypes.string,
  description: PropTypes.string
};
