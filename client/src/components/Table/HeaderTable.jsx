import {
  HeaderTitle,
  HeaderDescriptionWrapper,
  HeaderTitleWrapper,
  HeaderDescription,
  IconWrapper,
  TableSettingWrapper
} from './style/HeaderTableStyle';
import { SpaceBetween } from 'components/Flex/SpaceBetween';
import { ButtonRectIcon } from 'components/Button/ButtonRect';
import { InputIconLabel, ListIconLabel } from 'components/Input/IconLabel';
import filterIcon from 'assets/images/filter_icon.svg';
import sortIcon from 'assets/images/sort_icon.svg';
import { InputCount } from 'components/Input/InputCount';
import { InputIcon } from 'components/Input/InputIcon';
import PropTypes from 'prop-types';
import { useProducts } from 'features/products/providers/ProductsProviders';
import { ModalTopInfo } from 'components/Modal-Info';
import { useState } from 'react';
import { filterProducts } from 'features/products/api';

export const HeaderTable = ({
  setShowForm,
  setProducts,
  name,
  products,
  productSetting,
  filter,
  setProductSetting
}) => {
  const { searchProductFn, fetchProductsFn } = useProducts();
  const [searchParam, setSearchParam] = useState('');
  return (
    <HeaderTitleWrapper>
      {searchParam != '' && <ModalTopInfo>Search `{searchParam}`</ModalTopInfo>}
      <SpaceBetween>
        <HeaderDescriptionWrapper>
          <HeaderTitle>{name}</HeaderTitle>
          <HeaderDescription>Last updated at 14/11/20</HeaderDescription>
        </HeaderDescriptionWrapper>
        <IconWrapper>
          <InputIconLabel label="Filter" icon={filter.icon ? filter.icon : filterIcon}>
            {filter.filterValue.map(({ value, label, action }, index) => {
              return (
                <ListIconLabel
                  key={index}
                  onClick={() => {
                    action(value);
                  }}>
                  {label}
                </ListIconLabel>
              );
            })}
          </InputIconLabel>
        </IconWrapper>
      </SpaceBetween>
      <TableSettingWrapper>
        <SpaceBetween>
          <ButtonRectIcon onClick={() => setShowForm(true)} label="Add Product" />
          <IconWrapper>
            <InputIcon
              label="Product Name"
              onChange={(searchParam) => setSearchParam(searchParam)}
              handleClick={(searchParam) => {
                if (searchParam != '') {
                  setProductSetting({
                    page: 0,
                    size: productSetting.size
                  });
                  searchProductFn(searchParam).then((value) => {
                    setProducts(value.data);
                  });
                } else {
                  setProductSetting({
                    page: 0,
                    size: productSetting.size
                  });
                  fetchProductsFn(productSetting).then((value) => {
                    setProducts(value.data);
                  });
                }
              }}
            />
            {/* <InputCount label="size" setProductSetting={setProductSetting}>
              {productSetting.size}
            </InputCount> */}
          </IconWrapper>
        </SpaceBetween>
      </TableSettingWrapper>
    </HeaderTitleWrapper>
  );
};

HeaderTable.propTypes = {
  name: PropTypes.string,
  setShowForm: PropTypes.func,
  setProducts: PropTypes.func,
  products: PropTypes.object,
  productSetting: PropTypes.object,
  setProductSetting: PropTypes.any,
  filter: PropTypes.object
};
