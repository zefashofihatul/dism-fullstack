import styled from 'styled-components';

export const ListContentWrapper = styled.div`
  width: 100%;
  margin-top: 80px;
  position: relative;
`;
export const ListProduct = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 4rem;
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
  font-size: 1rem;
  font-weight: 700;
  margin: 0;
`;
export const DescriptionProduct = styled.p`
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
`;
export const PriceProduct = styled.h4`
  font-size: 1rem;
  font-weight: 800;
  margin: 0;
`;

export const DescriptionImageWrapper = styled.div`
  display: block;
  width: 100%;
`;

export const CursorEl = styled.div`
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
  .productImage {
    border-radius: 50%;
  }
`;

export const CursorMedia = styled.div`
  display: block;
  height: 18rem;
  width: 18rem;
  overflow: hidden;
  border-radius: 100%;
  transform: scale(0);
  margin: -146px 0 0 -146px;
  position: relative;
`;

export const ProductImage = styled.img`
  height: 18rem;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
`;
