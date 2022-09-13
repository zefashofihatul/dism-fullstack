import {
  Banner,
  BannerDescriptionWrapper,
  BannerTitle,
  BannerDescription
} from 'components/Banner';
import imageBannerCollection from 'assets/images/bannerAll.png';
import imageBannerCollection2 from 'assets/images/bannerAll2.webp';
import { AllProductsGrid } from 'features/products/get-products';
import { Header } from 'components/Header';
import { dummyContent } from 'features/products/dummyData';
import { OptionsProduct } from 'features/products/get-products/OptionsProduct';
import { ListContent } from 'features/products/ListContent';
import { useState } from 'react';

export const Collection = () => {
  const [isListContent, setIsListContent] = useState(false);
  const [option, setOption] = useState({ set: 'all' });
  const switchHandleClick = () => {
    setIsListContent(!isListContent);
  };
  return (
    <>
      <Header />
      <Banner image={imageBannerCollection2} style="margin-top: 4.5rem" className="md">
        <BannerDescriptionWrapper>
          <BannerTitle>ALL OF OUR HOUSEGOODS</BannerTitle>
          <BannerDescription>
            Each piece is fired twice, first for strength, second to finish the glaze. The entire
            process takes around 4 weeks, which isnt bad when you’re making
          </BannerDescription>
        </BannerDescriptionWrapper>
      </Banner>
      <OptionsProduct option={option} handleClick={switchHandleClick} setOption={setOption} />
      {isListContent ? (
        <ListContent products={dummyContent} filterOption={option.set} />
      ) : (
        <AllProductsGrid
          products={dummyContent}
          filterOption={option.set}
          gridCol={3}
          fetchItem={10}
        />
      )}
    </>
  );
};
