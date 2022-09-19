import styled, { css } from 'styled-components';

export const BackgroundProductForm = styled.div`
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
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
  width: 70%;
  height: fit-content;
  position: relative;
  background-color: white;
  border-radius: 8px;
  padding: 48px 64px;
  margin-top: 40px;
  margin-bottom: 40px;
  box-sizing: border-box;
`;

export const ProductTitle = styled.h2`
  font-size: 24px;
  font-weight: 800;
  margin: 0 0 40px 0;
`;

export const ProductFormInfoImageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 24px;
`;

export const DoubleInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const InputDouble = styled.div`
  width: 100%;
`;

export const ImageFormWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 12px;
  margin-bottom: 32px;
`;

export const CustomFileUpload = styled.label`
  border: 1px solid #dcdcde;
  grid-column: 1/3;
  cursor: pointer;
  grid-row: 1/4;
  height: 160px;
  border-radius: 8px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #dcdcde;
  transition: 0.2s;

  &:hover {
    border: 1px solid #0074ff;
    box-shadow: 0px 0px 4px #4377b8;
    transition: 0.2s;
  }

  ${(props) =>
    props.dragIn
      ? css`
          border: 1px solid #0074ff;
          box-shadow: 0px 0px 4px #4377b8;
          transition: 0.2s;
        `
      : css`
          border: 1px solid #dcdcde;
        `}
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
  width: 100%;
  height: 100%;
  border-radius: 8px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #dcdcde;
  display: none;
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

export const ImageExpand = styled.div`
  width: 100%;
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: white;
  border: 1px solid #dcdcde;
`;

export const ImageExpandData = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #868686;
  margin: 0;
  padding: 0;
`;

export const ImageIcon = styled.img`
  width: ${(props) => (props.size ? props.size : '12px')};
  height: ${(props) => (props.size ? props.size : '12px')};
`;

export const DragDescription = styled.span`
  width: 100%;
  line-height: 1.5;
  font-size: 16px;
  margin-top: 16px;
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
