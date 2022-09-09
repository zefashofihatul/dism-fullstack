import styled, { css } from 'styled-components';

export const BannerWrapper = styled.div`
  width: 100%;
  ${(props) => {
    switch (props.className) {
      case 'md':
        return css`
          height: 22rem;
        `;
      case 'lg':
        return css`
          height: 26rem;
        `;
      case 'sm':
        return css`
          height: 20rem;
        `;
      case 'xl':
        return css`
          height: 30rem;
        `;
      default:
        return css`
          height: 22rem;
        `;
    }
  }}
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
  text-align: center;
  font-size: 1.1rem;
  font-weight: 600;
  line-height: 1.375rem;
  margin: 0 0 1rem 0;
`;
