import { MainWrapper } from './style/GridContentStyle';
import { ListContentWrapper } from './style/ListContentStyle';
import { ProductListCard } from './component/ProductListCard';
import { dummyContent } from './dummyData';
import { useEffect } from 'react';
import Cursor from 'features/cursor/cursor';

export const ListContent = () => {
  useEffect(() => {
    const cursor = new Cursor(document.querySelector('.cursor'));
  });
  return (
    <MainWrapper>
      <ListContentWrapper className="wrapper">
        {dummyContent.map((product, index) => (
          <ProductListCard
            key={index}
            title={product.title}
            price={product.price}
            description={product.description}
            image1={product.image1}
          />
        ))}
      </ListContentWrapper>
    </MainWrapper>
  );
};
