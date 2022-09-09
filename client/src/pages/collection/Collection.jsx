import { Nav } from 'components/Nav';
import {
  Banner,
  BannerDescriptionWrapper,
  BannerTitle,
  BannerDescription
} from 'components/Banner';
import imageBannerCollection from 'assets/images/bannerAll.png';
import { CollectionsProduct } from 'features/products/CollectionsProduct';

export const Collection = () => {
  return (
    <>
      <Nav />
      <Banner image={imageBannerCollection} className="xl">
        <BannerDescriptionWrapper>
          <BannerTitle>ALL OF OUR HOUSEGOODS</BannerTitle>
          <BannerDescription>
            Each piece is fired twice, first for strength, second to finish the glaze. The entire
            process takes around 4 weeks, which isnt bad when you’re making
          </BannerDescription>
        </BannerDescriptionWrapper>
      </Banner>
      <CollectionsProduct fetchItem={10} />
    </>
  );
};
