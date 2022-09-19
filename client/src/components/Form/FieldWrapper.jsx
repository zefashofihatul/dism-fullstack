import PropTypes from 'prop-types';
import { Wrapper, ErrorWrapper } from './style/FieldWrapper';
import { Label } from './style/InputField';
export const FieldWrapper = (props) => {
  const { label, className, error, children, type } = props;
  return <Wrapper>{children}</Wrapper>;
};

FieldWrapper.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.element,
  error: PropTypes.object,
  type: PropTypes.string
};
