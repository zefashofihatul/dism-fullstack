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

export const HeaderTable = ({
  setShowForm,
  setProducts,
  products,
  productSetting,
  setProductSetting
}) => {
  const { searchProductFn, fetchProductsFn } = useProducts();
  const [searchParam, setSearchParam] = useState('');
  return (
    <HeaderTitleWrapper>
      {searchParam != '' && <ModalTopInfo>Search `{searchParam}`</ModalTopInfo>}
      <SpaceBetween>
        <HeaderDescriptionWrapper>
          <HeaderTitle>Products</HeaderTitle>
          <HeaderDescription>Last updated at 14/11/20</HeaderDescription>
        </HeaderDescriptionWrapper>
        <IconWrapper>
          <InputIconLabel label="Filter" icon={filterIcon}>
            <ListIconLabel onClick={() => {}}>Ashtray</ListIconLabel>
            <ListIconLabel onClick={() => {}}>Lifestyle</ListIconLabel>
            <ListIconLabel onClick={() => {}}>Outdoor</ListIconLabel>
            <ListIconLabel onClick={() => {}}>Lighter</ListIconLabel>
          </InputIconLabel>
          <InputIconLabel label="Sort" icon={sortIcon}>
            <ListIconLabel>Filter</ListIconLabel>
            <ListIconLabel>Option</ListIconLabel>
            <ListIconLabel>Default</ListIconLabel>
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
  setShowForm: PropTypes.func,
  setProducts: PropTypes.func,
  products: PropTypes.object,
  productSetting: PropTypes.object,
  setProductSetting: PropTypes.any
};
