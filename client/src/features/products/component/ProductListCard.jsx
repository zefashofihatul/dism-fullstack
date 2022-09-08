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
  Cursor
} from '../style/ListContentStyle';
import { motion } from 'framer-motion';
import { useState } from 'react';

export const ProductListCard = ({ title, price, description, image1 }) => {
  return (
    <ListProduct className="product">
      <TitleProduct>{title}</TitleProduct>
      <DescriptionImageWrapper>
        <DescriptionWrapper>
          <DescriptionProduct>{description}</DescriptionProduct>
          <PriceProduct>{price}</PriceProduct>
        </DescriptionWrapper>
      </DescriptionImageWrapper>
      <Cursor className="cursor">
        <div className="cursor-media">
          <ProductImage src={image1} />
        </div>
      </Cursor>
    </ListProduct>
  );
};

ProductListCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
  description: PropTypes.string,
  image1: PropTypes.string
};
