import { ButtonRectWrapper, PlusIcon, Label } from './style/ButtonRectStyle';
import plusIcon from 'assets/images/plus_icon_white.svg';

export const ButtonRect = () => {
  return (
    <ButtonRectWrapper>
      <PlusIcon src={plusIcon} />
      <Label>Add Product</Label>
    </ButtonRectWrapper>
  );
};
