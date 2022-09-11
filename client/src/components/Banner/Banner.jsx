import { BannerWrapper } from './style/BannerStyle';
import PropTypes from 'prop-types';

export const Banner = ({ children, image, className, style }) => {
  return (
    <BannerWrapper className={className} styleCustom={style} image={image}>
      {children}
    </BannerWrapper>
  );
};

Banner.propTypes = {
  children: PropTypes.element,
  image: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.string
};
