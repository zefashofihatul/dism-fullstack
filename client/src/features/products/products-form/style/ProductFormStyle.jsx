import styled, { css } from 'styled-components';

export const BackgroundProductForm = styled.div`
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 5;
  ${(props) =>
    props.showForm
      ? css`
          display: flex;
        `
      : css`
          display: none;
        `}
`;

export const ProductFormWrapper = styled.div`
  width: 80%;
  position: relative;
  background-color: white;
  border-radius: 8px;
  padding: 48px 64px;
  box-sizing: border-box;
`;

export const ProductTitle = styled.h2`
  font-size: 24px;
  font-weight: 800;
  margin: 0;
`;

export const ProductFormInfoImageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 24px;
`;

export const ProductInfoFormWrapper = styled.div`
  display: flex;
  width: 100%;
  padding-right: 40px;
  box-sizing: border-box;
  flex-direction: column;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
`;

export const DoubleInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const InputDouble = styled.div``;

export const ImageFormWrapper = styled.div`
  display: grid;
  padding-left: 40px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 12px;
`;

export const DragSpot = styled.div`
  grid-column: 1/3;
  grid-row: 1/3;
  border-radius: 8px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #dcdcde;
`;

export const DragSpotInput = styled.input`
  grid-column: 1/3;
  grid-row: 1/3;
  border-radius: 8px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #dcdcde;
`;

export const Image = styled.div`
  width: 100%;
  position: relative;
  height: 100%;
  background-image: url(${(props) => props.image});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 8px;
  background-color: white;
  border: 1px solid #dcdcde;
`;

export const ImageIcon = styled.img`
  width: ${(props) => (props.size ? props.size : '12px')};
  height: ${(props) => (props.size ? props.size : '12px')};
`;

export const DragDescription = styled.span`
  width: 100%;
  line-height: 1.5;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  color: #9b9ba1;
`;

export const CloseWrapper = styled.span`
  width: 32px;
  height: 32px;
  top: 32px;
  right: 32px;
  cursor: pointer;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #83858d;
`;
