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
import { InputIcon } from 'components/Input/InputIcon';
import PropTypes from 'prop-types';
import { useProducts } from 'features/products/providers/ProductsProviders';
import { ModalTopInfo } from 'components/Modal-Info';
import { useState } from 'react';

export const HeaderTable = ({
  setShowForm,
  setProducts,
  name,
  products,
  productSetting,
  setProductSetting
}) => {
  const { searchProductFn, fetchProductsFn, category } = useProducts();
  const [searchParam, setSearchParam] = useState('');
  return (
    <HeaderTitleWrapper>
      {searchParam != '' && <ModalTopInfo>Search `{searchParam}`</ModalTopInfo>}
      <SpaceBetween>
        <HeaderDescriptionWrapper>
          <HeaderTitle>{name}</HeaderTitle>
          <HeaderDescription>Last updated at 14/11/20</HeaderDescription>
        </HeaderDescriptionWrapper>
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
  setProductSetting: PropTypes.any
};
