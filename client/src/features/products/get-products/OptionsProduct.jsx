import { OptionProductWrapper, OptionsWrapper, Option } from '../style/OptionsProductStyle';
import { useState } from 'react';
import PropTypes from 'prop-types';

export const OptionsProduct = ({ option, setOption }) => {
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
    </OptionProductWrapper>
  );
};

OptionsProduct.propTypes = {
  option: PropTypes.object,
  setOption: PropTypes.func
};
