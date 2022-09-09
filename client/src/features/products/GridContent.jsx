import {
  GridContentWrapper,
  MainWrapper,
  FourContentSection,
  ContentScope,
  ContentTitle,
  ContentDescription,
  ContentWrapper
} from './style/GridContentStyle';
import { ProductGridCard } from './component/ProductGridCard';
import { dummyContent } from './dummyData';
import { splitarray } from 'utils/splitArray';

export const GridContent = () => {
  const products = splitarray(dummyContent, 3);
  return (
    <MainWrapper>
      <GridContentWrapper>
        {products.map((value, index) => {
          return (
            <FourContentSection key={index}>
              <ContentScope>
                <ContentTitle>NEW BY SETH</ContentTitle>
                <ContentDescription>
                  Each piece is fired twice, first for strength, second to finish the glaze. The
                  entire process takes around 4 weeks, which isn’t bad when you’re making a piece of
                  art that’s meant to be used every day
                </ContentDescription>
              </ContentScope>
              {value.map((product, index) => (
                <ProductGridCard
                  title={product.title}
                  price={product.price}
                  image1={product.image1}
                  image2={product.image2}
                  description={product.description}
                  key={index}
                />
              ))}
            </FourContentSection>
          );
        })}
      </GridContentWrapper>
    </MainWrapper>
  );
};
