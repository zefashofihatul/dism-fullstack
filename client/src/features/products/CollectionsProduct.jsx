import { MainWrapper, GridContentWrapper, FourGridContentSection } from './style/GridContentStyle';
import { dummyContent } from './dummyData';
import { ProductGridCard } from './component/ProductGridCard';
import PropTypes from 'prop-types';

export const CollectionsProduct = () => {
  return (
    <MainWrapper>
      <GridContentWrapper>
        <FourGridContentSection>
          {dummyContent.map((product, index) => (
            <ProductGridCard
              key={index}
              title={product.title}
              price={product.price}
              image1={product.image1}
              image2={product.image2}
              description={product.description}
            />
          ))}
        </FourGridContentSection>
      </GridContentWrapper>
    </MainWrapper>
  );
};

export const CollectionsAllProduct = () => {
  return (
    <MainWrapper>
      <GridContentWrapper>
        <FourGridContentSection>
          {dummyContent.map((product, index) => (
            <ProductGridCard
              key={index}
              title={product.title}
              price={product.price}
              image1={product.image1}
              image2={product.image2}
              description={product.description}
            />
          ))}
        </FourGridContentSection>
      </GridContentWrapper>
    </MainWrapper>
  );
};
