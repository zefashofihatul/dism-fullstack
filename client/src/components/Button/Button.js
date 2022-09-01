import PropTypes from 'prop-types';

export const Button = ({ title, className, ...props }) => {
  return (
    <button className={className}>
      <span className="span1">{props.children}</span>
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.string
};
