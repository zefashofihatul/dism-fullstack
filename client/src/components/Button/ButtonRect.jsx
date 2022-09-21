import { ButtonRectWrapper, PlusIcon, Label } from './style/ButtonRectStyle';
import plusIcon from 'assets/images/plus_icon_white.svg';
import PropTypes from 'prop-types';

export const ButtonRectIcon = ({ onClick, label = 'label' }) => {
  return (
    <ButtonRectWrapper onClick={onClick}>
      <PlusIcon src={plusIcon} />
      <Label>{label}</Label>
    </ButtonRectWrapper>
  );
};

ButtonRectIcon.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string
};

export const ButtonRect = ({ label = 'label', ...props }) => {
  return (
    <ButtonRectWrapper onClick={props.onClick} color={props.color}>
      <Label>{label}</Label>
    </ButtonRectWrapper>
  );
};

ButtonRect.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
  color: PropTypes.string
};
