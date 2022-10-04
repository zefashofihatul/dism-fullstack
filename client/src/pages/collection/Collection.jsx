import {
  Banner,
  BannerDescriptionWrapper,
  BannerTitle,
  BannerDescription
} from 'components/Banner';
import { ProductsWrapper, CollectionsWrapper } from './style/CollectionStyle';
import imageBannerCollection from 'assets/images/bannerAll.png';
import imageBannerCollection2 from 'assets/images/bannerAll2.webp';
import { ProductsGrid } from 'features/products/products-grid';
import { Header } from 'components/Header';
import { dummyContent } from 'features/products/dummyData';
import { HeaderProduct } from 'features/products/component/HeaderProduct';
import { ListProducts } from 'features/products/products-list/ListProducts';
import { useEffect, useState } from 'react';
import { useProducts } from 'features/products/providers/ProductsProviders';

export const Collection = () => {
  const { fetchProductsFn, productSetting, setProducts, products } = useProducts();
  const [isListContent, setIsListContent] = useState(false);
  const [option, setOption] = useState({ set: 'ALL PRODUCT' });
  const switchHandleClick = () => {
    setIsListContent(!isListContent);
  };
  useEffect(() => {
    fetchProductsFn(productSetting).then((result) => {
      setProducts(result.data);
      console.log(result.data);
    });
  }, []);
  return (
    <CollectionsWrapper>
      <Header />
      <Banner image={imageBannerCollection2} style="margin-top: 4.5rem" className="sm">
        <BannerDescriptionWrapper>
          <BannerTitle>ALL OF OUR HOUSEGOODS</BannerTitle>
          <BannerDescription>
            Each piece is fired twice, first for strength, second to finish the glaze. The entire
            process takes around 4 weeks, which isnt bad when you’re making
          </BannerDescription>
        </BannerDescriptionWrapper>
      </Banner>
      <HeaderProduct option={option} handleClick={switchHandleClick} setOption={setOption} />
      <ProductsWrapper>
        {isListContent ? (
          <ListProducts products={dummyContent} filterOption={option.set} />
        ) : (
          <ProductsGrid
            products={dummyContent}
            filterOption={option.set}
            gridCol={3}
            fetchItem={10}
          />
        )}
      </ProductsWrapper>
    </CollectionsWrapper>
  );
};
