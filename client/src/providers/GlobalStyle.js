import { createGlobalStyle } from 'styled-components';

import ralewayRegular from 'assets/font/Raleway/static/Raleway-Regular.ttf';
import ralewaySemiBold from 'assets/font/Raleway/static/Raleway-SemiBold.ttf';
import ralewayMedium from 'assets/font/Raleway/static/Raleway-Medium.ttf';
import ralewayBold from 'assets/font/Raleway/static/Raleway-Bold.ttf';

export const theme = {
  default: {
    backgroundColor: '#F1EFED',
    fontColor: '#000000',
    invertFontColor: '#ffffff'
  }
};

export const GlobalFont = createGlobalStyle`
  @font-face {
    font-family: 'raleway';
    src: url(${ralewayBold}) format('truetype');
    font-weight: 300;
    font-style: normal;
  };
  @font-face {
    font-family: 'raleway';
    src: url(${ralewayMedium}) format('truetype');
    font-weight: 300;
    font-style: normal;
  };
  @font-face {
    font-family: 'raleway';
    src: url(${ralewayRegular}) format('truetype');
    font-weight: 300;
    font-style: normal;
  };
  @font-face {
    font-family: 'raleway';
    src: url(${ralewaySemiBold}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }
`;
