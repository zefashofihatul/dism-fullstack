import PropTypes from 'prop-types';

export const InputField = (props) => {
  const { type = 'text', label, className, registration, error } = props;
  return <input type={type} className={className} {...registration} />;
};

InputField.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  registration: PropTypes.object,
  error: PropTypes.func
};
