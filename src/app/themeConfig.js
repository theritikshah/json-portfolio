import { createGlobalStyle } from "styled-components";

export const defaultTheme = {
  primaryColor: "#ffffff",
  secondaryColor: "#707070",
  accentColor: "#5e7656",
  accentLightColor: "#839f7a",
  brandColor: "#ffffff",
  fontFamily: "Noto Sans",
};

export const GlobalStyles = createGlobalStyle`
    * {
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
    }
    
    body,
    html {
        height: 100vh;
        width: 100%;
        scroll-behavior: smooth;
    }
    
    body {
        background-color: ${({ theme }) => theme.primaryColor};
        color: ${({ theme }) => theme.secondaryColor};
        font-family: ${({ theme }) => theme.fontFamily}, sans-serif;
        line-height: 1.8rem;
        transition: background-color 0.3s linear;
        display: grid;
    }
    
    a {
        -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    }
    
    img {
        max-width: 100%;
    }
`;
