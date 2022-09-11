import { Nav } from 'components/Nav';
import {
  Banner,
  BannerDescriptionWrapper,
  BannerTitle,
  BannerDescription
} from 'components/Banner';
import imageBannerCollection from 'assets/images/bannerAll.png';
import { AllProductsGrid } from 'features/products/get-products';
import { Header } from 'components/Header';
import { useState } from 'react';
import { OptionsProduct } from 'features/products/get-products/OptionsProduct';

export const Collection = () => {
  const [isListContent, setIsListContent] = useState(false);
  const handleClick = (e) => {
    setIsListContent(!isListContent);
  };
  return (
    <>
      <Header />
      <Banner image={imageBannerCollection} style="margin-top: 4.5rem" className="md">
        <BannerDescriptionWrapper>
          <BannerTitle>ALL OF OUR HOUSEGOODS</BannerTitle>
          <BannerDescription>
            Each piece is fired twice, first for strength, second to finish the glaze. The entire
            process takes around 4 weeks, which isnt bad when you’re making
          </BannerDescription>
        </BannerDescriptionWrapper>
      </Banner>
      <OptionsProduct></OptionsProduct>
      <AllProductsGrid gridCol={3} fetchItem={10} />
    </>
  );
};
