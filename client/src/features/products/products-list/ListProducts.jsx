import { MainWrapper } from '../style/GridContentStyle';
import { ListContentWrapper } from '../style/ListContentStyle';
import { ProductListCard } from '../component/ProductListCard';
import { useEffect } from 'react';
import Cursor from 'features/cursor/cursor';
import { getProducts } from '../api';
import { CursorEl, CursorMedia, ProductImage } from '../style/ListContentStyle';
import PropTypes from 'prop-types';

export const ListProducts = ({ products, filterOption, styleAdd }) => {
  useEffect(() => {
    const cursor = new Cursor(document.querySelector('.cursor'));
    async function fetchData() {
      const response = await getProducts();
      console.log(response);
    }
  });
  const productsFilter =
    filterOption !== 'ALL PRODUCT'
      ? products.filter((value) => value.category == filterOption)
      : products;
  return (
    <MainWrapper>
      <ListContentWrapper>
        {productsFilter.map((product, index) => {
          return (
            <ProductListCard
              key={index}
              id={index}
              title={product.title}
              price={product.price}
              description={product.description}
              image1={product.image1}
              badge={product.badge}
            />
          );
        })}
      </ListContentWrapper>
      <CursorEl className="cursor">
        <CursorMedia className="cursor-media">
          {products.map((product, index) => {
            return (
              <ProductImage id={`image-${index}`} key={index} src={product.image1}></ProductImage>
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
