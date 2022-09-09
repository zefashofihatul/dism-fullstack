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
  ProductItemGrid
} from '../style/GridContentStyle';
import PropTypes from 'prop-types';

export const ProductFlexCard = ({ title, price, image1, image2, description }) => {
  return (
    <ProductItem>
      <ProductTitleWrapper>
        <ProductTitle>{title}</ProductTitle>
        <ProductPrice>{price}</ProductPrice>
      </ProductTitleWrapper>
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
    </ProductItem>
  );
};

export const ProductGridCard = ({ className, title, price, image1, image2, description }) => {
  return (
    <ProductItemGrid className={className}>
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
        <ProductPrice>{price}</ProductPrice>
      </ProductTitleWrapper>
      <ProductDescriptionWrapper>
        <ProductDescription>
          A limited edition ashtray designed by Seth to be both gloopy and globby.
        </ProductDescription>
      </ProductDescriptionWrapper>
    </ProductItemGrid>
  );
};

ProductGridCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
  image1: PropTypes.string,
  image2: PropTypes.string,
  description: PropTypes.string,
  className: PropTypes.string,
  gridCol: PropTypes.number
};

ProductFlexCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
  image1: PropTypes.string,
  image2: PropTypes.string,
  description: PropTypes.string
};
