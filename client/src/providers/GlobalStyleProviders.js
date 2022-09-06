import { createGlobalStyle } from 'styled-components';
import PropTypes from 'prop-types';
import ralewayRegular from 'assets/font/Raleway/static/Raleway-Regular.ttf';
import ralewaySemiBold from 'assets/font/Raleway/static/Raleway-SemiBold.ttf';
import ralewayMedium from 'assets/font/Raleway/static/Raleway-Medium.ttf';
import ralewayBold from 'assets/font/Raleway/static/Raleway-Bold.ttf';
import { createContext, useContext, useState } from 'react';
const themeContext = createContext();

// Setting Global Style
const theme = {
  default: {
    backgroundColor: '#F1EFED',
    fontColor: '#000000',
    invertFontColor: '#ffffff'
  }
};

// Theme state
export const useTheme = () => {
  return useContext(themeContext);
};

const useProvideTheme = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const switchTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return {
    switchTheme
  };
};

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'raleway';
    font-name: 'raleway';
    src: url(${ralewayBold}) format('truetype');
    font-weight: 800;
    font-style: normal;
  };
  @font-face {
    font-family: 'raleway';
    font-name: 'raleway';
    src: url(${ralewayMedium}) format('truetype');
    font-weight: 600;
    font-style: normal;
  };
  @font-face {
    font-family: 'raleway';
    font-name: 'raleway';
    src: url(${ralewayRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
  };
  @font-face {
    font-family: 'raleway';
    font-name: 'raleway';
    src: url(${ralewaySemiBold}) format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  /* Font */
  h1, h2, h3, h4, h5 {
    font-family: 'raleway';
    color: ${(props) => (props.darkTheme ? theme.dark.fontColor : theme.default.fontColor)}
  }

  /* Backgroud Color */
  .main-wrapper {
    background-color: ${(props) =>
      props.darkTheme ? theme.dark.fontColor : theme.default.fontColor}
  }
`;

export const GlobalStyleProviders = ({ children }) => {
  const themeValue = useProvideTheme();
  return (
    <themeContext.Provider value={themeValue}>
      <GlobalStyle />
      {children}
    </themeContext.Provider>
  );
};

GlobalStyleProviders.propTypes = {
  children: PropTypes.element
};
