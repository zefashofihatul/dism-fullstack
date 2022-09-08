import styled from 'styled-components';

export const ListContentWrapper = styled.div`
  width: 100%;
  margin-top: 80px;
`;
export const ListProduct = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 3rem;
  align-items: center;
  border-top: 0.1rem solid #c4bca4;
  border-bottom: 0.1rem solid #c4bca4;
  transition: 200ms;
`;
export const DescriptionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const TitleProduct = styled.h3`
  min-width: 20%;
  align-items: center;
  font-size: 0.85rem;
  font-weight: 700;
  margin: 0;
`;
export const DescriptionProduct = styled.p`
  font-size: 0.85rem;
  font-weight: 400;
  margin: 0;
`;
export const PriceProduct = styled.h4`
  font-size: 0.85rem;
  font-weight: 600;
  margin: 0;
`;

export const ProductImage = styled.img`
  margin-top: 16px;
  max-width: 50%;
`;

export const DescriptionImageWrapper = styled.div`
  display: block;
  width: 100%;
`;

export const Cursor = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 10;
  contain: layout style size;
  pointer-events: none;
  &.media-blend {
    z-index: 100;
    mix-blend-mode: exclusion;
    .cursor-media {
      filter: invert(1);
    }
  }
  &:before {
    content: '';
    position: absolute;
    top: -24px;
    left: -24px;
    display: block;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    transform: scale(0.2);
    background: black;
  }
  .cursor-media {
    display: block;
    height: 350px;
    width: 350px;
    overflow: hidden;
    transform: scale(0);
    margin: -175px 0 0 -175px;
    position: relative;
  }
`;
