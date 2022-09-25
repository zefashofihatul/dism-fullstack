import PropTypes from 'prop-types';
import { LoadingSpinnerEl, LoadingWrapper } from './style/LoadingStyle';

export const LoadingSpinner = ({ width, height }) => {
  return (
    <LoadingWrapper className="spinner-container">
      <LoadingSpinnerEl
        width={width}
        height={height}
        className="loading-spinner"></LoadingSpinnerEl>
    </LoadingWrapper>
  );
};

LoadingSpinner.propTypes = {
  width: PropTypes.any,
  height: PropTypes.any
};
