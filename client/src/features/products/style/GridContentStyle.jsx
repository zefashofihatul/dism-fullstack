import styled from 'styled-components';

export const MainWrapper = styled.div`
  margin-top: 0;
  display: block;
  position: relative;
  z-index: 0;
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
  margin-top: 80px;
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
    flex-grow: 1;
    max-width: 50%;
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
  font-weight: 600;
`;

export const ProductTitleWrapper = styled.div`
  padding: 0 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

export const ProductTitle = styled.h2`
  margin: 0;
  font-size: 0.85rem;
  font-weight: 700;
`;

export const ProductPrice = styled.p`
  font-size: 0.85rem;
  font-weight: 600;
  margin: 0;
`;
