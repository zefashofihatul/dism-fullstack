import { useProducts } from '../providers/ProductsProviders';
import {
  HeaderSettingTable,
  SettingWrapper,
  TotalContent
} from '../products-pages/style/productsPageStyle';
import filterIcon from 'assets/images/filter_icon.svg';
import { InputIconLabel, ListIconLabel } from 'components/Input/IconLabel';
import { InputCount } from 'components/Input/InputCount';

export const ProductsSettingTable = () => {
  const {
    fetchProductsFn,
    filterProductsFn,
    setCategory,
    products,
    setProducts,
    productSetting,
    setProductSetting
  } = useProducts();
  const filters = [
    {
      label: 'Default',
      value: 'all',
      action: () => {
        fetchProductsFn(productSetting).then((value) => {
          setCategory('');
          setProducts(value.data);
        });
      }
    },
    {
      label: 'Ashtray',
      value: 'ashtray',
      action: () => {
        filterProductsFn('ashtray').then((value) => {
          setCategory('ashtray');
          setProducts(value.data);
        });
      }
    },
    {
      label: 'Lifestyle',
      value: 'lifestyle',
      action: () => {
        filterProductsFn('lifestyle').then((value) => {
          setCategory('lifestyle');
          setProducts(value.data);
        });
      }
    },
    {
      label: 'Outdoor',
      value: 'outdoor',
      action: () => {
        filterProductsFn('outdoor').then((value) => {
          setCategory('outdoor');
          setProducts(value.data);
        });
      }
    },
    {
      label: 'Lighter',
      value: 'lighter',
      action: () => {
        filterProductsFn('lighter').then((value) => {
          setCategory('lighter');
          setProducts(value.data);
        });
      }
    }
  ];

  return (
    <HeaderSettingTable>
      <SettingWrapper>
        <InputIconLabel label="Filter" icon={filterIcon}>
          {filters.map(({ value, label, action }, index) => {
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
      </SettingWrapper>
      <TotalContent>
        Total {products.total} - Products [{products.page * products.size} -{' '}
        {products.page * products.size + products.products.length}]
      </TotalContent>

      <InputCount
        label="Page"
        disable={products.total < products.size ? true : false}
        leftDisable={products.page == 1 ? false : true}
        rightDisable={
          products.total / (productSetting.size * (productSetting.page + 1)) < 1 ? true : false
        }
        onClick={{
          left: () => {
            if (productSetting.page > 0) {
              setProductSetting({
                page: productSetting.page >= 1 ? productSetting.page - 1 : productSetting.page,
                size: productSetting.size
              });
              fetchProductsFn({
                page: productSetting.page >= 1 ? productSetting.page - 1 : productSetting.page,
                size: productSetting.size
              }).then((value) => {
                setProducts(value.data);
              });
            }
          },
          right: () => {
            if (products.total / (productSetting.size * (productSetting.page + 1)) > 1) {
              setProductSetting({
                page: productSetting.page + 1,
                size: productSetting.size
              });
              fetchProductsFn({
                page: productSetting.page + 1,
                size: productSetting.size
              }).then((value) => {
                setProducts(value.data);
              });
            }
          }
        }}>
        {productSetting.page + 1}
      </InputCount>
    </HeaderSettingTable>
  );
};
