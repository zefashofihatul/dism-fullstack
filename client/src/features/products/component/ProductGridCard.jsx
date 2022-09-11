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
  title,
  price,
  image1,
  image2,
  description,
  badge
}) => {
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
            <ProductPrice>{price}</ProductPrice>
            <CartButton>ADD TO CART</CartButton>
          </ProductPriceWrapper>
        </ProductTitleWrapper>
        <ProductDescriptionWrapper>
          <ProductDescription>
            A limited edition ashtray designed by Seth to be both gloopy and globby.
          </ProductDescription>
        </ProductDescriptionWrapper>
      </ProductItemGrid>
    </>
  );
};

ProductGridCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
  image1: PropTypes.string,
  image2: PropTypes.string,
  description: PropTypes.string,
  className: PropTypes.string,
  gridCol: PropTypes.number,
  badge: PropTypes.string
};

ProductFlexCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
  image1: PropTypes.string,
  image2: PropTypes.string,
  description: PropTypes.string
};
