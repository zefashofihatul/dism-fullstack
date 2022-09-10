import { ProductBadge } from './style/BadgeStyle';
import PropTypes from 'prop-types';

export const Badge = ({ children, color, background }) => {
  return (
    <ProductBadge color={color} background={background}>
      {children}
    </ProductBadge>
  );
};

Badge.propTypes = {
  children: PropTypes.string,
  color: PropTypes.string,
  background: PropTypes.string
};
