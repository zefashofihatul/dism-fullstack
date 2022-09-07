import { MainWrapper } from './style/GridContentStyle';
import { ListContentWrapper } from './style/ListContentStyle';
import { ProductListCard } from './component/ProductListCard';
import { dummyContent } from './dummyData';

export const ListContent = () => {
  return (
    <MainWrapper>
      <ListContentWrapper>
        {dummyContent.map((product, index) => (
          <ProductListCard
            key={index}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ListContentWrapper>
    </MainWrapper>
  );
};
