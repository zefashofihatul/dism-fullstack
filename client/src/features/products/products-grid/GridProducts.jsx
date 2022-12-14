import { MainWrapper, GridContentWrapper, FourGridContentSection } from '../style/GridContentStyle';
import { dummyContent } from '../dummyData';
import { ProductGridCard } from '../component/ProductGridCard';
import { FourContentSection } from '../style/GridContentStyle';
import { ProductFlexCard } from '../component/ProductGridCard';
import { getProducts } from '../api';
import PropTypes from 'prop-types';
import { splitarray } from 'utils/splitArray';
import { useProducts } from '../providers/ProductsProviders';

export const ProductsGrid = ({ filterOption, gridCol, fetchItem }) => {
  const { products } = useProducts();
  const productsFilter =
    filterOption !== 'ALL PRODUCT'
      ? products.products.filter((value) => value.category == filterOption)
      : products.products;
  return (
    <MainWrapper>
      <GridContentWrapper>
        <FourGridContentSection gridCol={gridCol}>
          {productsFilter.map((product, index) => (
            <ProductGridCard
              key={index}
              id={index}
              title={product.name}
              price={product.price}
              image1={product.productImage[0].src}
              image2={product.productImage[1].src}
              description={product.descriptions}
              badge={product.badge}
            />
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
              {value.map((product, productIndex) => (
                <ProductFlexCard
                  title={product.title}
                  price={product.price}
                  image1={product.image1}
                  image2={product.image2}
                  description={product.description}
                  key={productIndex}
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

ProductsGrid.propTypes = {
  gridCol: PropTypes.number,
  fetchItem: PropTypes.number,
  products: PropTypes.array,
  filterOption: PropTypes.string
};
