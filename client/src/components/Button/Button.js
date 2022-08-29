import PropTypes from 'prop-types';

Button.propTypes = {
  title: PropTypes.string
};

export const Button = ({ title }) => {
  return <h1>{title}</h1>;
};
