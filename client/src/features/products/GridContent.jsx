import ashtrayBox from 'assets/images/9eu0m8q1.png';
import ashtrayBox2 from 'assets/images/9uw72821.png';
import ashtrayBox3 from 'assets/images/jtb2ve6i.png';
import ashtrayBox4 from 'assets/images/jtb2ve6i.png';
import { GridContentWrapper, MainWrapper, FourContentSection } from './style/GridContentStyle';
import { ProductCard } from './component/ProductCard';

export const GridContent = () => {
  return (
    <MainWrapper>
      <GridContentWrapper>
        <FourContentSection>
          <ProductCard
            title="OFFSET STOOL"
            price="RP 30K"
            image1={ashtrayBox}
            image2={ashtrayBox2}
          />
          <ProductCard
            title="OFFSET STOOL"
            price="RP 30K"
            image1={ashtrayBox}
            image2={ashtrayBox2}
          />
          <ProductCard
            title="OFFSET STOOL"
            price="RP 30K"
            image1={ashtrayBox}
            image2={ashtrayBox2}
          />
          <ProductCard
            title="OFFSET STOOL"
            price="RP 30K"
            image1={ashtrayBox}
            image2={ashtrayBox2}
          />
        </FourContentSection>
      </GridContentWrapper>
    </MainWrapper>
  );
};
