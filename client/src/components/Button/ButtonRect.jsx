import { ButtonRectWrapper, PlusIcon, Label } from './style/ButtonRectStyle';
import plusIcon from 'assets/images/plus_icon_white.svg';
import PropTypes from 'prop-types';

export const ButtonRect = ({ onClick }) => {
  return (
    <ButtonRectWrapper onClick={onClick}>
      <PlusIcon src={plusIcon} />
      <Label>Add Product</Label>
    </ButtonRectWrapper>
  );
};

ButtonRect.propTypes = {
  onClick: PropTypes.func
};
