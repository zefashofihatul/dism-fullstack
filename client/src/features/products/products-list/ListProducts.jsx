import { MainWrapper } from '../style/GridContentStyle';
import { ListContentWrapper } from '../style/ListContentStyle';
import { ProductListCard } from '../component/ProductListCard';
import { useEffect } from 'react';
import Cursor from 'features/cursor/cursor';
import { useProducts } from '../providers/ProductsProviders';
import { CursorEl, CursorMedia, ProductImage } from '../style/ListContentStyle';
import PropTypes from 'prop-types';

export const ListProducts = ({ filterOption, styleAdd }) => {
  const { fetchProductsFn, productSetting, setProducts, products } = useProducts();

  useEffect(() => {
    const cursor = new Cursor(document.querySelector('.cursor'));
    fetchProductsFn(productSetting).then((result) => {
      setProducts(result.data);
      console.log(result.data);
    });
  }, []);
  const productsFilter =
    filterOption !== 'ALL PRODUCT'
      ? products.products.filter((value) => value.category == filterOption)
      : products.products;
  return (
    <MainWrapper>
      <ListContentWrapper>
        {productsFilter.map((product, index) => {
          return (
            <ProductListCard
              key={index}
              id={index}
              title={product.name}
              price={product.price}
              description={product.descriptions}
              image1={product.productImage[0].src}
              badge={product.productImage[1].src}
            />
          );
        })}
      </ListContentWrapper>
      <CursorEl className="cursor">
        <CursorMedia className="cursor-media">
          {products.products.map((product, index) => {
            return (
              <ProductImage
                id={`image-${index}`}
                key={index}
                src={product.productImage[0].src}></ProductImage>
            );
          })}
        </CursorMedia>
      </CursorEl>
    </MainWrapper>
  );
};

ListProducts.propTypes = {
  products: PropTypes.array,
  filterOption: PropTypes.string,
  styleAdd: PropTypes.string
};
