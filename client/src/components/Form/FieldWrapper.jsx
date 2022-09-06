import PropTypes from 'prop-types';
import { Wrapper, ErrorWrapper } from './style/FieldWrapper';

export const FieldWrapper = (props) => {
  const { label, className, error, children, type } = props;
  return (
    <Wrapper>
      {error?.message && (
        <ErrorWrapper role="alert" aria-label={error.message} className="errorMessage">
          {error.message}
        </ErrorWrapper>
      )}
      {children}
    </Wrapper>
  );
};

FieldWrapper.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.element,
  error: PropTypes.object,
  type: PropTypes.string
};
