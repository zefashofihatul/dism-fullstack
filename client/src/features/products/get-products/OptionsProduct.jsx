import { OptionProductWrapper, OptionsWrapper, Option } from '../style/OptionsProductStyle';
import { useState } from 'react';
import { Switch } from 'components/Switch';
import PropTypes from 'prop-types';

export const OptionsProduct = ({ option, setOption, handleClick }) => {
  return (
    <OptionProductWrapper>
      <OptionsWrapper>
        <Option
          className={option.set == 'all' ? 'filled' : ''}
          onClick={() => setOption({ set: 'all' })}>
          ALL
        </Option>
        <Option
          className={option.set == 'ASHTRAY' ? 'filled' : ''}
          onClick={() => setOption({ set: 'ASHTRAY' })}>
          ASHTRAY
        </Option>
        <Option
          className={option.set == 'LIFESTYLE' ? 'filled' : ''}
          onClick={() => setOption({ set: 'LIFESTYLE' })}>
          LIFESTYLE
        </Option>
        <Option
          className={option.set == 'OUTDOOR' ? 'filled' : ''}
          onClick={() => setOption({ set: 'OUTDOOR' })}>
          OUTDOOR
        </Option>
      </OptionsWrapper>
      <Switch option1="GRID" option2="LIST" handleClick={handleClick} />
    </OptionProductWrapper>
  );
};

OptionsProduct.propTypes = {
  option: PropTypes.object,
  setOption: PropTypes.func,
  handleClick: PropTypes.func
};
