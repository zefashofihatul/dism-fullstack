import styled, { css } from 'styled-components';

export const MainWrapper = styled.div`
  margin-top: 0;
  display: block;
  position: relative;
  flex: 1 0 auto;
  transition: 0.4s ease-in-out;
  overflow: hidden;
  box-sizing: border-box;
`;

export const GridContentWrapper = styled.div`
  display: block;
`;

export const FourContentSection = styled.div`
  box-sizing: border-box;
  display: flex;
  margin: 40px 0;
  flex-wrap: wrap;
  background: #f4f1e0;
  @media only screen and (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;

export const ProductItem = styled.article`
  background-color: #f4f1e0;
  border-right: 0.01rem solid #c4bca4;
  border-left: 0.01rem solid #c4bca4;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  @media only screen and (min-width: 768px) {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    -webkit-box-flex: 0;
    -ms-flex: 0 50%;
    flex: 0 50%;
    max-width: 50%;
  }
  @media only screen and (min-width: 1025px) {
    -ms-flex: 0 25%;
    flex: 0 25%;
    max-width: 25%;
  }
`;

export const ProductImageWrapper = styled.a`
  background-color: transparent;
  box-sizing: border-box;
  color: #464545;
  text-decoration: none;
  cursor: pointer;
`;

export const ImageWrapper = styled.div`
  padding-bottom: 100%;
  height: 0;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  display: block;
  width: 100%;
`;

export const ImageHoverWrapper = styled.div`
  position: absolute;
  opacity: 0;
  z-index: 10;
  width: 100%;
  -webkit-transition: opacity 0.4s ease-in-out;
  transition: opacity 0.4s ease-in-out;
  box-sizing: border-box;
  display: block;
  &:hover {
    position: absolute;
    opacity: 1;
    width: 100%;
    -webkit-transition: opacity 0.4s ease-in-out;
    transition: opacity 0.4s ease-in-out;
  }
`;

export const ProductImage = styled.img`
  border-style: none;
  box-sizing: border-box;
  display: block;
  width: 100%;
  transition: opacity 0.3s;
`;

export const ProductDescriptionWrapper = styled.div`
  padding: 0 1rem;
`;

export const ProductDescription = styled.p`
  font-size: 0.9rem;
  font-weight: 500;
`;

export const ProductTitleWrapper = styled.div`
  padding: 0 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

export const ProductTitle = styled.h2`
  margin: 0;
  font-size: 0.9rem;
  font-weight: 800;
`;

export const ProductPrice = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
  margin: 0;
`;

export const ContentScope = styled.div`
  padding: 1rem;
  display: flex;
  background-color: #f4f1e0;
  border-right: 0.01rem solid #c4bca4;
  border-left: 0.01rem solid #c4bca4;
  position: relative;
  flex-wrap: wrap;
  box-sizing: border-box;
  -webkit-box-direction: normal;
  @media only screen and (min-width: 768px) {
    -webkit-box-flex: 0;
    flex: 0 50%;
    max-width: 50%;
  }
  @media only screen and (min-width: 1025px) {
    -ms-flex: 0 25%;
    flex: 0 25%;
    max-width: 25%;
  }
`;

export const ContentTitle = styled.h3`
  line-height: 1.5;
  box-sizing: border-box;
  font-size: 2.5rem;
  margin: 0;
  width: 100%;
`;

export const ContentDescription = styled.p`
  bottom: 0;
  width: 100%;
  display: block;
  box-sizing: border-box;
  font-size: 1rem;
  line-height: 1.375rem;
  text-align: right;
`;

export const BannerWrapper = styled.div`
  width: 100%;
  height: 22rem;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;

export const BannerDescriptionWrapper = styled.div`
  max-width: 75%;
  height: 100%;
  display: flex;
  margin: auto auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BannerTitle = styled.h3`
  line-height: 1.25;
  color: white;
  text-align: center;
  box-sizing: border-box;
  font-size: 2.3rem;
  font-weight: 800;
  margin: 0 0 1rem 0;
`;

export const BannerDescription = styled.p`
  box-sizing: border-box;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  line-height: 1.375rem;
  margin: 0 0 1rem 0;
`;

export const ProductItemGrid = styled.div`
  width: 100%;
  display: block;
  box-sizing: border-box;
  background-color: #f4f1e0;
  border: 0.01rem solid #c4bca4;
  position: relative;
  overflow: hidden;
  ${(props) =>
    props.className == 'featured'
      ? css`
          grid-column-end: span 2;
          grid-row-end: span 2;
        `
      : ''}
`;

export const ThreeContentSection = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  box-sizing: border-box;
`;

export const FourGridContentSection = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;
