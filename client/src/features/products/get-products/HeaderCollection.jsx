import { OptionProductWrapper, OptionsWrapper, Option } from '../style/OptionsProductStyle';
import { useState } from 'react';
import { FilterInput } from 'components/Input/filterInput';
import { Switch } from 'components/Switch';
import PropTypes from 'prop-types';
import {
  HeaderCollectionWrapper,
  HeaderCollectionTitle,
  HeaderTitle,
  HeaderWrapper,
  HeaderDescription
} from 'pages/collection/style/CollectionStyle';

export const HeaderCollection = ({ option, setOption, handleClick }) => {
  return (
    <OptionProductWrapper>
      <HeaderWrapper>
        <HeaderDescription>HOUSEGOODS</HeaderDescription>
        <HeaderTitle>PRODUCT</HeaderTitle>
      </HeaderWrapper>
      <HeaderCollectionWrapper>
        <FilterInput option={option} setOption={setOption} />
      </HeaderCollectionWrapper>
      <Switch option1="GRID" option2="LIST" handleClick={handleClick} />
    </OptionProductWrapper>
  );
};

HeaderCollection.propTypes = {
  option: PropTypes.object,
  setOption: PropTypes.func,
  handleClick: PropTypes.func
};
