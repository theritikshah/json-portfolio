import { createGlobalStyle } from "styled-components";

export const defaultTheme = {
  default: {
    primaryTextColor: "#ffffff",
    secondaryTextColor: "#707070",
    primaryBackgroundColor: "#ffffff",
    secondaryBackgroundColor: "#fafafa",
    accentColor: "#0E46A3",
    accentSecondaryColor: "#5b94f1",
    brandColor: "#ffffff",
    fontFamily: "Noto Sans",
  },
  dark: {
    primaryTextColor: "#ffffff",
    secondaryTextColor: "#a0a0a0",
    primaryBackgroundColor: "#000000",
    secondaryBackgroundColor: "#202020",
    accentColor: "#5b94f1",
    accentSecondaryColor: "#0E46A3",
    brandColor: "#ffffff",
    fontFamily: "Noto Sans",
  },
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
        background-color: ${({ theme }) => theme.primaryTextColor};
        color: ${({ theme }) => theme.secondaryTextColor};
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
