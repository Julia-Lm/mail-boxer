import { createGlobalStyle } from "styled-components";
import RobotoBoldFont from "shared/fonts/roboto-bold.ttf";
import RobotoLightFont from "shared/fonts/roboto-light.ttf";
import RobotoMediumFont from "shared/fonts/roboto-medium.ttf";
import RobotoSemiBoldFont from "shared/fonts/roboto-semi-bold.ttf";
import RobotoRegularFont from "shared/fonts/roboto-regular.ttf";

export const GlobalCSSStyle = createGlobalStyle`
    @font-face {
        font-family: 'Roboto';
        src: url(${RobotoLightFont}) format('truetype');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'Roboto';
        src: url(${RobotoRegularFont}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Roboto';
        src: url(${RobotoMediumFont}) format('truetype');
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: 'Roboto';
        src: url(${RobotoSemiBoldFont}) format('truetype');
        font-weight: 600;
        font-style: normal;
    }
    
    @font-face {
        font-family: 'Roboto';
        src: url(${RobotoBoldFont}) format('truetype');
        font-weight: 700;
        font-style: normal;
    }
  
    *, *::before, *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
        font-weight: 400;
    }

    html {
        background-color: ${({ theme }) => theme.bodyBackground};
        overscroll-behavior-y: contain;
        font-size: 16px;
        color: ${({ theme }) => theme.text};
    }

    body {
        margin: 0;
        font-family: "Roboto", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-size-adjust: none;
        padding: 0;
        
    }

    button {
        font-family: inherit;
        border: 0;
        background: transparent;
        cursor: pointer;
    }

    input {
        outline: none;
        border: 0;
        background: transparent;
        font-family: inherit;
    }
    

`;
