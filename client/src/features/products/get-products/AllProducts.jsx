import { MainWrapper, GridContentWrapper, FourGridContentSection } from '../style/GridContentStyle';
import { dummyContent } from '../dummyData';
import { ProductGridCard } from '../component/ProductGridCard';
import { FourContentSection } from '../style/GridContentStyle';
import { ProductFlexCard } from '../component/ProductGridCard';
import PropTypes from 'prop-types';
import { splitarray } from 'utils/splitArray';

export const AllProductsGrid = ({ gridCol, fetchItem }) => {
  return (
    <MainWrapper>
      <GridContentWrapper>
        <FourGridContentSection gridCol={gridCol}>
          {dummyContent.map((product, index) => (
            <>
              <ProductGridCard
                key={index}
                title={product.title}
                price={product.price}
                image1={product.image1}
                image2={product.image2}
                description={product.description}
                badge={product.badge}
              />
            </>
          ))}
        </FourGridContentSection>
      </GridContentWrapper>
    </MainWrapper>
  );
};

export const AllProductsFlex = ({ col, fetchItem }) => {
  const products = splitarray(dummyContent, 4);
  return (
    <MainWrapper>
      <GridContentWrapper>
        {products.map((value, index) => {
          return (
            <FourContentSection key={index}>
              {value.map((product, index) => (
                <ProductFlexCard
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

AllProductsFlex.propTypes = {
  col: PropTypes.number,
  fetchItem: PropTypes.number
};

AllProductsGrid.propTypes = {
  gridCol: PropTypes.number,
  fetchItem: PropTypes.number
};
