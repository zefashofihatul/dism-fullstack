import PropTypes from 'prop-types';
import { BannerWrapper } from '../style/GridContentStyle';

export const Banner = ({ children, image }) => {
  return <BannerWrapper image={image}>{children}</BannerWrapper>;
};

Banner.propTypes = {
  children: PropTypes.element,
  image: PropTypes.string
};
