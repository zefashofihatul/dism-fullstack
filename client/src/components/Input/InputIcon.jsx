import { InputIconWrapper, Icon, Input } from './style/InputIcon';
import searchIcon from 'assets/images/search_icon.svg';

// TODO : Input Icon Focus
export const InputIcon = () => {
  return (
    <InputIconWrapper placeholder="Search">
      <Icon src={searchIcon}></Icon>
      <Input placeholder="Search" tabIndex={0} />
    </InputIconWrapper>
  );
};
