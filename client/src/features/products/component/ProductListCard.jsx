import PropTypes from 'prop-types';
import {
  ListProduct,
  ListTitleProduct,
  TitleProduct,
  DescriptionProduct,
  PriceProduct,
  DescriptionWrapper,
  ProductImage,
  DescriptionImageWrapper,
  CursorEl,
  CursorMedia
} from '../style/ListContentStyle';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import Cursor from 'features/cursor/cursor';

export const ProductListCard = ({ idCount, title, price, description, image1 }) => {
  return (
    <ListProduct data-image={`image-${idCount}`} className="product">
      <TitleProduct>{title}</TitleProduct>
      <DescriptionImageWrapper>
        <DescriptionWrapper>
          <DescriptionProduct>{description}</DescriptionProduct>
          <PriceProduct>{price}</PriceProduct>
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
