import {
  HeaderTitleWrapper,
  HeaderTitle,
  HeaderDescription,
  HeaderDescriptionWrapper,
  IconWrapper,
  TableSettingWrapper
} from './style/ProductsHeaderTableStyle';

import { SpaceBetween } from 'components/Flex/SpaceBetween';
import { ButtonRectIcon } from 'components/Button/ButtonRect';
import { InputIcon } from 'components/Input/InputIcon';
import PropTypes from 'prop-types';
import { useProducts } from 'features/products/providers/ProductsProviders';
import { ModalTopInfo } from 'components/Modal-Info';
import { useState } from 'react';

export const ProductsHeaderTable = ({
  setProducts,
  name,
  products,
  productSetting,
  setProductSetting
}) => {
  const { searchProductFn, fetchProductsFn, category, setShowProductForm, showProductForm } =
    useProducts();
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
          <ButtonRectIcon
            onClick={() =>
              setShowProductForm({
                show: true,
                method: 'POST',
                productsValue: {
                  name: '',
                  price: '',
                  images: [],
                  stock: '',
                  category: '',
                  description: '',
                  details: '',
                  materials: '',
                  dimensions: ''
                }
              })
            }
            label="Add Product"
          />
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

ProductsHeaderTable.propTypes = {
  name: PropTypes.string,
  setProducts: PropTypes.func,
  products: PropTypes.object,
  productSetting: PropTypes.object,
  setProductSetting: PropTypes.any
};
