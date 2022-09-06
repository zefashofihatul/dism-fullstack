import PropTypes from 'prop-types';
import { ButtonElement } from './style/ButtonStyle';

export const Button = ({ title, className, ...props }) => {
  return (
    <ButtonElement className={className} onClick={props.onClick}>
      <span className="span1">{props.children}</span>
    </ButtonElement>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.string,
  onClick: PropTypes.func
};
