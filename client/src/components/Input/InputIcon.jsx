import { InputIconWrapper, Icon, Input } from './style/InputIcon';
import searchIcon from 'assets/images/search_icon.svg';
import PropTypes from 'prop-types';
import { ButtonRect } from 'components/Button/ButtonRect';
import { useState } from 'react';

// TODO : Input Icon Focus
export const InputIcon = ({ label, handleClick, onChange }) => {
  const [inputString, setInputString] = useState('');
  return (
    <>
      <InputIconWrapper placeholder={label}>
        <Input
          placeholder={label}
          tabIndex={0}
          onChange={(e) => {
            setInputString(e.target.value);
            onChange(e.target.value);
          }}
        />
        <ButtonRect
          label="Search"
          type="submit"
          onClick={() => {
            handleClick(inputString);
          }}
        />
      </InputIconWrapper>
    </>
  );
};

InputIcon.propTypes = {
  label: PropTypes.any,
  handleClick: PropTypes.func,
  onChange: PropTypes.func
};
