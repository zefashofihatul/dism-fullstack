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
  ProductPrice
} from '../style/GridContentStyle';
import PropTypes from 'prop-types';

export const ProductGridCard = ({ title, price, image1, image2, description }) => {
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

ProductGridCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
  image1: PropTypes.string,
  image2: PropTypes.string,
  description: PropTypes.string
};
