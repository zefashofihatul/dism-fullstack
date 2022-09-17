import {
  FilterInputWrapper,
  LabelFilterInput,
  FilterInputValue,
  FilterInputOption,
  FilterIcon,
  FilterExpand,
  FilterList,
  FilterInputOptionWrapper
} from './style/filterInput';
import PropTypes from 'prop-types';
import { useState } from 'react';

export const FilterInput = ({ option, setOption }) => {
  const [expand, setExpand] = useState(false);
  return (
    <>
      <FilterInputWrapper>
        <FilterInputOptionWrapper onClick={() => setExpand(!expand)}>
          <LabelFilterInput>FILTER :</LabelFilterInput>
          <FilterInputOption>
            <FilterInputValue>{option.set}</FilterInputValue>
            <FilterIcon>{expand ? '-' : '+'}</FilterIcon>
          </FilterInputOption>
        </FilterInputOptionWrapper>
        <FilterExpand expand={expand}>
          <FilterList
            onClick={() => {
              setOption({ set: 'ALL PRODUCT' });
              setExpand(false);
            }}
            className={option.set == 'ALL PRODUCT' ? 'expand' : ''}>
            ALL PRODUCT
          </FilterList>
          <FilterList
            onClick={() => {
              setOption({ set: 'ASHTRAY' });
              setExpand(false);
            }}
            className={option.set == 'ASHTRAY' ? 'expand' : ''}>
            ASHTRAY
          </FilterList>
          <FilterList
            onClick={() => {
              setOption({ set: 'LIFESTYLE' });
              setExpand(false);
            }}
            className={option.set == 'LIFESTYLE' ? 'expand' : ''}>
            LIFESTYLE
          </FilterList>
          <FilterList
            onClick={() => {
              setOption({ set: 'OUTDOOR' });
              setExpand(false);
            }}
            className={option.set == 'OUTDOOR' ? 'expand' : ''}>
            OUTDOOR
          </FilterList>
        </FilterExpand>
      </FilterInputWrapper>
    </>
  );
};

FilterInput.propTypes = {
  onClick: PropTypes.func,
  option: PropTypes.object,
  setOption: PropTypes.func
};
