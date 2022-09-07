import {
  FilterInputWrapper,
  LabelFilterInput,
  FilterInputValue,
  FilterInputOption,
  FilterIcon
} from './style/filterInput';

export const FilterInput = (props) => {
  return (
    <FilterInputWrapper>
      <LabelFilterInput>FILTER</LabelFilterInput>
      <FilterInputOption>
        <FilterInputValue>ALL PRODUCT</FilterInputValue>
        <FilterIcon>+</FilterIcon>
      </FilterInputOption>
    </FilterInputWrapper>
  );
};
