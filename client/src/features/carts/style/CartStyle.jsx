import styled from 'styled-components';

export const CartsWrapper = styled.div`
  width: 40vw;
  height: 100vh;
  position: fixed;
  display: ${(props) => (props.hide ? 'none' : 'absolute')};
  background-color: #f4f1e0;
  z-index: 1002;
  top: 0;
  right: 0;
  padding: 2rem;
  transition: 1s;
`;

export const CartsHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const HeaderTitle = styled.h2`
  font-size: 2rem;
  margin: 0;
`;

export const HeaderCloseTab = styled.span`
  font-size: 1rem;
  text-decoration: underline;
`;

export const CartsItemWrapper = styled.div`
  height: 65vh;
  margin-top: 3rem;
  overflow-y: scroll;
`;

export const CartsItem = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 3rem;
`;

export const ItemImage = styled.img`
  width: 136px;
  height: 136px;
  margin-right: 1.4rem;
`;

export const ItemContentWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const ItemContentTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ItemContentTitle = styled.h3`
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.5;
`;

export const ItemContentRemoveBtn = styled.span`
  margin-left: 1rem;
  border: 1px solid;
  padding: 0.2rem 0.6rem;
  border-radius: 4rem;
  height: fit-content;
  font-size: 0.8rem;
`;

export const ItemContentDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.8rem;
`;

export const ItemContentDescription = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0.5rem;
  justify-content: space-between;
  border-bottom: 1px solid black;
`;

export const ItemContentDescriptionLeft = styled.p`
  font-size: 0.8rem;
  font-weight: 600;
  margin: 0;
`;

export const ItemContentDescriptionRight = styled.p`
  font-size: 0.8rem;
  font-weight: 600;
  margin: 0;
`;

export const ItemContentPrice = styled.p`
  font-size: 1rem;
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
`;

export const ItemContentPriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 0.5rem;
  justify-content: space-between;
`;

export const ItemContentQuantity = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: fit-content;
`;

export const ItemContentQuantityBtn = styled.img`
  padding: 0.2rem;
  width: 0.6rem;
  height: 0.6rem;
  border: 1px solid black;
  cursor: pointer;
`;

export const ItemContentQuantityNum = styled.p`
  font-size: 1.2rem;
  line-height: 2;
  font-weight: 600;
  margin: 0 0.8rem;
`;

export const TotalPriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
`;

export const TotalPrice = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const TotalTitle = styled.h4`
  margin: 0;
`;

export const CheckoutBtn = styled.button`
  border: 1px solid transparent;
  background-color: #000000;
  color: #ffffff;
  padding: 6px 24px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 400;
  height: fit-content;
  cursor: pointer;
`;

export const CartsFlexWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BackgroundCart = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: ${(props) => (props.hide ? 'none' : 'fixed')};
  background-color: #1d1d1d;
  top: 0;
  left: 0;
  z-index: 1001;
  opacity: 0.6;
`;

export const menuCart = styled.div`
  display: none;
`;
