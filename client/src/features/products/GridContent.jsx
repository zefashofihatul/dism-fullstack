import { GridContentWrapper, MainWrapper, FourContentSection } from './style/GridContentStyle';
import { ProductGridCard } from './component/ProductGridCard';
import { dummyContent } from './dummyData';
import { splitarray } from 'utils/splitArray';

export const GridContent = () => {
  const products = splitarray(dummyContent, 4);
  return (
    <MainWrapper>
      <GridContentWrapper>
        {products.map((value, index) => {
          return (
            <FourContentSection key={index}>
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
