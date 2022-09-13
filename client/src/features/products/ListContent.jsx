import { MainWrapper } from './style/GridContentStyle';
import { ListContentWrapper } from './style/ListContentStyle';
import { ProductListCard } from './component/ProductListCard';
import { dummyContent } from './dummyData';
import { useEffect } from 'react';
import Cursor from 'features/cursor/cursor';
import { CursorEl, CursorMedia, ProductImage } from './style/ListContentStyle';
import PropTypes from 'prop-types';

export const ListContent = ({ products, filterOption, styleAdd }) => {
  const body = document.querySelector('body');
  const productsFilter =
    filterOption !== 'all' ? products.filter((value) => value.category == filterOption) : products;
  useEffect(() => {
    const cursor = new Cursor(document.querySelector('.cursor'));
  });
  return (
    <MainWrapper>
      <ListContentWrapper>
        {productsFilter.map((product, index) => {
          return (
            <ProductListCard
              key={index}
              idCount={index}
              title={product.title}
              price={product.price}
              description={product.description}
              image1={product.image1}
              styleAdd={styleAdd}
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

ListContent.propTypes = {
  products: PropTypes.array,
  filterOption: PropTypes.string,
  styleAdd: PropTypes.string
};
