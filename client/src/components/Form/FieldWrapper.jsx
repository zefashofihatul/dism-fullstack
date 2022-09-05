import PropTypes from 'prop-types';

export const FieldWrapper = (props) => {
  const { label, className, error, children } = props;
  return (
    <div>
      <label className={className}>
        {label}
        <div className="children">{children}</div>
      </label>
      {error?.message && (
        <div role="alert" aria-label={error.message} className="text">
          {error.message}
        </div>
      )}
    </div>
  );
};

FieldWrapper.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.element,
  error: PropTypes.string
};
