import styled, { css } from 'styled-components';

export const ImageDropZoneWrapper = styled.div`
  border: 1px solid #dcdcde;
  cursor: pointer;
  height: 160px;
  border-radius: 8px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #dcdcde;
  transition: 0.2s;

  ${(props) =>
    props.isDragActive
      ? css`
          border: 1px solid #0074ff;
          box-shadow: 0px 0px 4px #4377b8;
          transition: 0.2s;
        `
      : ''}

  ${(props) =>
    props.isDragReject
      ? css`
          border: 1px solid #e44343;
          box-shadow: 0px 0px 4px #e44343;
          transition: 0.2s;
        `
      : ''}
  &:hover {
    border: 1px solid #0074ff;
    box-shadow: 0px 0px 4px #4377b8;
    transition: 0.2s;
  }
`;

export const TitleDropImage = styled.h3`
  width: 360px;
  font-size: 18px;
  line-height: 1.5;
  text-align: center;
  font-weight: 700;
  color: #868686;
  margin: 0;
  padding: 0;
`;

export const FilesWrapper = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(4, 1fr);
  margin-bottom: 32px;
  margin-top: 16px;
`;

export const ImagesWrapper = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 1px solid #dcdcde;
  border-radius: 8px;
  overflow: hidden;
`;

export const File = styled.img`
  height: inherit;
`;

export const ImagesTitleHeader = styled.h3`
  font-size: 16px;
  margin: 24px 0 0px 0;
  font-weight: 800;
  color: #646464;
`;

export const DeleteImageWrapper = styled.div`
  width: 24px;
  height: 24px;
  top: 8px;
  right: 8px;
  cursor: pointer;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #e44343;
`;

export const ImageIcon = styled.img`
  width: ${(props) => (props.size ? props.size : '12px')};
  height: ${(props) => (props.size ? props.size : '12px')};
`;

export const ErrorMessageWrapper = styled.div``;

export const ErrorMessage = styled.h3`
  font-size: 16px;
  margin: 24px 0 12px 0;
  font-weight: 800;
  color: #e44343;
`;

export const ErrorMessageSemibold = styled.span`
  font-weight: 700;
`;

export const ErrorList = styled.p`
  font-size: 14px;
  color: #e44343;
  margin: 0;
`;
