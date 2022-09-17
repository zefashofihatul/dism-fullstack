import { FilterInput } from 'components/Input/filterInput';
import { Switch } from 'components/Switch';
import PropTypes from 'prop-types';
import {
  HeaderCollectionWrapper,
  HeaderCollectionTitle,
  HeaderTitle,
  HeaderWrapper,
  HeaderDescription,
  HeaderProductWrapper
} from '../style/HeaderProduct';

export const HeaderProduct = ({ option, setOption, handleClick }) => {
  return (
    <HeaderProductWrapper>
      <HeaderWrapper>
        <HeaderDescription>HOUSEGOODS</HeaderDescription>
        <HeaderTitle>PRODUCT</HeaderTitle>
      </HeaderWrapper>
      <HeaderCollectionWrapper>
        <FilterInput option={option} setOption={setOption} />
      </HeaderCollectionWrapper>
      <Switch option1="GRID" option2="LIST" handleClick={handleClick} />
    </HeaderProductWrapper>
  );
};

HeaderProduct.propTypes = {
  option: PropTypes.object,
  setOption: PropTypes.func,
  handleClick: PropTypes.func
};
