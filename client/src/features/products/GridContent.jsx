import {
  GridContentWrapper,
  MainWrapper,
  FourContentSection,
  ContentScope,
  ContentTitle,
  ContentDescription,
  ThreeContentSection,
  BannerDescriptionWrapper,
  BannerTitle,
  BannerDescription
} from './style/GridContentStyle';
import { ProductFlexCard, ProductGridCard } from './component/ProductGridCard';
import { dummyContent } from './dummyData';
import { splitarray } from 'utils/splitArray';
import { Banner } from 'components/Banner';
import { Button } from 'components/Button';
import imageBanner from 'assets/images/banner1.png';

export const GridContent = () => {
  const products = splitarray(dummyContent, 3);
  return (
    <MainWrapper>
      <GridContentWrapper>
        <Banner image={imageBanner}>
          <BannerDescriptionWrapper>
            <BannerTitle>THE HOUSEPLANT RECORD PLAYER BY CREATIVE PROJECT</BannerTitle>
            <BannerDescription>It looks as good as it sound</BannerDescription>
            <Button>BUY THIS</Button>
          </BannerDescriptionWrapper>
        </Banner>
        {products.map((value, index) => {
          return (
            <>
              {index == 1 && (
                <Banner className="md" image={imageBanner}>
                  <BannerDescriptionWrapper>
                    <BannerTitle>THE HOUSEPLANT RECORD PLAYER BY CREATIVE PROJECT</BannerTitle>
                    <BannerDescription>It looks as good as it sound</BannerDescription>
                    <Button>BUY THIS</Button>
                  </BannerDescriptionWrapper>
                </Banner>
              )}
              {index == 0 && (
                <FourContentSection key={index}>
                  <ContentScope>
                    <ContentTitle>NEW BY SETH</ContentTitle>
                    <ContentDescription>
                      Each piece is fired twice, first for strength, second to finish the glaze. The
                      entire process takes around 4 weeks, which isn’t bad when you’re making a
                      piece of art that’s meant to be used every day
                    </ContentDescription>
                  </ContentScope>
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
              )}
              {index > 0 && (
                <ThreeContentSection key={index}>
                  {value.map((product, indexItem) => (
                    <ProductGridCard
                      key={indexItem}
                      title={product.title}
                      price={product.price}
                      image1={product.image1}
                      image2={product.image2}
                      description={product.description}
                    />
                  ))}
                </ThreeContentSection>
              )}
            </>
          );
        })}
      </GridContentWrapper>
    </MainWrapper>
  );
};
