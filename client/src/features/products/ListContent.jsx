import { MainWrapper } from './style/GridContentStyle';
import { ListContentWrapper } from './style/ListContentStyle';
import { ProductListCard } from './component/ProductListCard';
import { dummyContent } from './dummyData';
import { useEffect } from 'react';
import Cursor from 'features/cursor/cursor';
import { gsap } from 'gsap';
import ashtrayBox from 'assets/images/9eu0m8q1.png';
import ashtrayBox2 from 'assets/images/9uw72821.png';
import ashtrayBox3 from 'assets/images/jtb2ve6i.png';
import ashtrayBox4 from 'assets/images/jtb2ve6i.png';
import { CursorEl, CursorMedia, ProductImage } from './style/ListContentStyle';

export const ListContent = () => {
  const body = document.querySelector('body');
  useEffect(() => {
    const cursor = new Cursor(document.querySelector('.cursor'));
  });
  return (
    <MainWrapper>
      <ListContentWrapper>
        {dummyContent.map((product, index) => {
          return (
            <ProductListCard
              key={index}
              idCount={index}
              title={product.title}
              price={product.price}
              description={product.description}
              image1={product.image1}
            />
          );
        })}
      </ListContentWrapper>
      <CursorEl className="cursor">
        <CursorMedia className="cursor-media">
          {dummyContent.map((product, index) => {
            return (
              <ProductImage id={`image-${index}`} key={index} src={product.image1}></ProductImage>
            );
          })}
        </CursorMedia>
      </CursorEl>
    </MainWrapper>
  );
};
