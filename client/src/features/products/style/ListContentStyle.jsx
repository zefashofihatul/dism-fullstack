import styled from 'styled-components';

export const ListContentWrapper = styled.div`
  width: 100%;
  margin-top: 80px;
`;
export const ListProduct = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 3rem;
  border-top: 0.1rem solid #c4bca4;
  border-bottom: 0.1rem solid #c4bca4;
`;
export const DescriptionWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;
export const TitleProduct = styled.h3`
  min-width: 20%;
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
