import PropTypes from 'prop-types';
import {
  ListProduct,
  ListTitleProduct,
  TitleProduct,
  DescriptionProduct,
  PriceProduct,
  DescriptionWrapper
} from '../style/ListContentStyle';

export const ProductListCard = ({ title, price, description }) => {
  return (
    <ListProduct>
      <TitleProduct>{title}</TitleProduct>
      <DescriptionWrapper>
        <DescriptionProduct>{description}</DescriptionProduct>
        <PriceProduct>{price}</PriceProduct>
      </DescriptionWrapper>
    </ListProduct>
  );
};

ProductListCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
  description: PropTypes.string
};
